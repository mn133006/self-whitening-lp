import { AudienceWhy } from './AudienceWhy';
import { HeroSalonCarousel } from './HeroSalonCarousel';
import { LINE_RESERVE_URL } from '../config/links';
import { SALON_GALLERY_PHOTOS } from '../data/salonGalleryPhotos';
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

        <div className="hero__visual" aria-label="店内・施術の写真">
          <p className="hero__visual-label lp-caption">店内のようす</p>
          <HeroSalonCarousel photos={SALON_GALLERY_PHOTOS} />
        </div>
      </div>
    </section>
  );
}
