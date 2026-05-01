import { useEffect, useRef, useState } from 'react';
import { WHITENING_STEPS } from '../data/whiteningSteps';
import { ImagePlaceholder } from './ImagePlaceholder';
import './WhiteningSteps.css';

export function WhiteningSteps() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;

    const updateActive = () => {
      const center = node.scrollLeft + node.clientWidth / 2;
      let bestIndex = 0;
      let bestDistance = Number.POSITIVE_INFINITY;

      itemRefs.current.forEach((item, idx) => {
        if (!item) return;
        const itemCenter = item.offsetLeft + item.clientWidth / 2;
        const distance = Math.abs(itemCenter - center);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = idx;
        }
      });

      setActiveIndex(bestIndex);
    };

    updateActive();
    node.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);
    return () => {
      node.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, []);

  const moveTo = (idx: number) => {
    itemRefs.current[idx]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
    setActiveIndex(idx);
  };

  return (
    <section
      className="whitening-steps lp-section lp-section--tint"
      aria-labelledby="whitening-steps-title"
      id="whitening-steps"
    >
      <div className="lp-section__inner whitening-steps__head">
        <h2 className="lp-h2 lp-h2--split" id="whitening-steps-title">
          <span className="lp-h2__en" lang="en">
            STEPS
          </span>
          <span className="lp-h2__ja">手順のイメージ</span>
        </h2>
        <p className="whitening-steps__lead lp-caption">
          詳細は来店後、スタッフが同席してご案内します。
        </p>
      </div>

      <div
        ref={scrollerRef}
        className="whitening-steps__scroller"
        role="region"
        aria-label="セルフの手順（横にスクロール）"
      >
        <ol className="whitening-steps__list">
          {WHITENING_STEPS.map((step, idx) => (
            <li
              key={step.id}
              className="whitening-steps__card"
              ref={(el) => {
                itemRefs.current[idx] = el;
              }}
            >
              <span className="whitening-steps__num" aria-hidden="true">
                {step.id}
              </span>
              <h3 className="whitening-steps__title">{step.title}</h3>
              <div className="whitening-steps__media">
                {step.imageSrc ? (
                  <img
                    className="whitening-steps__img"
                    src={step.imageSrc}
                    alt=""
                    width={800}
                    height={1000}
                    loading="eager"
                    decoding="async"
                  />
                ) : (
                  <ImagePlaceholder label={`STEP ${step.id} ${step.title}`} ratio="4/5" />
                )}
              </div>
              <div className="whitening-steps__body">
                {step.instructions.length > 0 ? (
                  <ul className="whitening-steps__bullets">
                    {step.instructions.map((line, i) => (
                      <li key={`${step.id}-${i}`} className="whitening-steps__bullet">
                        ●{line}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="whitening-steps__dots" role="tablist" aria-label="手順スライドの選択">
        {WHITENING_STEPS.map((step, idx) => (
          <button
            key={step.id}
            type="button"
            role="tab"
            aria-selected={idx === activeIndex}
            aria-label={`STEP ${step.id}（${idx + 1} / ${WHITENING_STEPS.length}）`}
            className={`whitening-steps__dot${idx === activeIndex ? ' whitening-steps__dot--active' : ''}`}
            onClick={() => moveTo(idx)}
          />
        ))}
      </div>
    </section>
  );
}
