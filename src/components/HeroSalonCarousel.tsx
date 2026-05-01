import { useCallback, useEffect, useRef, useState } from 'react';
import type { TouchEventHandler, WheelEventHandler } from 'react';
import './HeroSalonCarousel.css';

type Photo = {
  src: string;
  w: number;
  h: number;
  alt: string;
  cap: string;
};

const INTERVAL_MS = 4500;

type Props = {
  photos: readonly Photo[];
};

/**
 * 店内写真：1枚表示・自動で次へ。隣が半分見える横スクロールは廃止。
 */
export function HeroSalonCarousel({ photos }: Props) {
  const n = photos.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const wheelLock = useRef(false);
  const [reduceMotion, setReduceMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = () => setReduceMotion(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % n);
  }, [n]);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + n) % n);
  }, [n]);

  const handleWheel: WheelEventHandler<HTMLDivElement> = (e) => {
    if (n <= 1) return;
    const dx = Math.abs(e.deltaX);
    const dy = Math.abs(e.deltaY);
    const mainDelta = dx > dy ? e.deltaX : e.deltaY;

    if (Math.abs(mainDelta) < 18 || wheelLock.current) return;

    // カルーセル操作として解釈した時だけページスクロールを抑止
    e.preventDefault();
    setPaused(true);
    if (mainDelta > 0) {
      goNext();
    } else {
      goPrev();
    }

    wheelLock.current = true;
    window.setTimeout(() => {
      wheelLock.current = false;
      setPaused(false);
    }, 380);
  };

  const handleTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
    setPaused(true);
  };

  const handleTouchEnd: TouchEventHandler<HTMLDivElement> = (e) => {
    const startX = touchStartX.current;
    const endX = e.changedTouches[0]?.clientX ?? null;
    touchStartX.current = null;
    if (startX == null || endX == null) {
      setPaused(false);
      return;
    }
    const diff = endX - startX;
    if (Math.abs(diff) < 40) {
      setPaused(false);
      return;
    }
    if (diff < 0) {
      goNext();
    } else {
      goPrev();
    }
    window.setTimeout(() => setPaused(false), 320);
  };

  useEffect(() => {
    if (n <= 1 || reduceMotion || paused) return;
    const id = window.setInterval(goNext, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [n, reduceMotion, paused, goNext]);

  const pct = n > 0 ? (index / n) * 100 : 0;

  return (
    <div
      className="hero-salon-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="hero-salon-carousel__viewport">
        <ul
          className="hero-salon-carousel__track"
          style={{
            width: `${n * 100}%`,
            transform: `translateX(-${pct}%)`,
          }}
        >
          {photos.map((item, i) => (
            <li
              key={item.src}
              className="hero-salon-carousel__slide"
              style={{ width: `${100 / n}%` }}
              aria-hidden={i !== index}
            >
              <figure className="hero-salon-carousel__fig">
                <img
                  className="hero-salon-carousel__img"
                  src={item.src}
                  alt={item.alt}
                  width={item.w}
                  height={item.h}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <figcaption className="hero-salon-carousel__cap">{item.cap}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>

      {n > 1 ? (
        <div className="hero-salon-carousel__dots" role="tablist" aria-label="スライドの選択">
          {photos.map((item, i) => (
            <button
              key={item.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`${item.cap}（${i + 1} / ${n}）`}
              className={`hero-salon-carousel__dot${i === index ? ' hero-salon-carousel__dot--active' : ''}`}
              onClick={() => setIndex(i)}
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
