import { AudienceWhy } from './AudienceWhy';
import { LINE_RESERVE_URL } from '../config/links';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="メインビジュアル">
      <a className="hero__banner-link" href={LINE_RESERVE_URL} aria-label="LINEで予約する">
        <img
          className="hero__banner-img"
          src="/clear-routine-lp-banner.png"
          alt="CLEAR ROUTINE 白い歯で、自然な自信を。初回体験1,900円。今すぐ予約する"
          width={1024}
          height={682}
          decoding="async"
          fetchPriority="high"
        />
      </a>
      <div className="hero__inner">
        <p className="hero__sub">まずは1回、目安30〜45分で体験できます</p>
        <AudienceWhy />
      </div>
    </section>
  );
}
