import { CTAButton } from './CTAButton';
import { FranchiseBrand } from './FranchiseBrand';
import { HeroSalonCarousel } from './HeroSalonCarousel';
import { LINE_RESERVE_URL } from '../config/links';
import { CTA_MICRO_DEFAULT, CTA_PURPOSE_ARIA, CTA_PURPOSE_LABEL } from '../config/ctaCopy';
import { SALON_GALLERY_PHOTOS } from '../data/salonGalleryPhotos';
import './Hero.css';

export function Hero() {
  const reassureLines = CTA_MICRO_DEFAULT;

  return (
    <section className="hero" id="top" aria-label="メインビジュアル">
      <div className="hero__logo-row">
        <div className="hero__logo-stack">
          <div className="hero__logo-slot">
            <img
              className="hero__logo"
              src="/logo-clear-routine.png"
              alt="CLEAR ROUTINE"
              width={1024}
              height={1024}
              decoding="async"
              fetchPriority="high"
            />
            <div className="hero__franchise-below">
              <FranchiseBrand size="md" className="hero__franchise-brand hero__franchise-brand--hero" />
            </div>
          </div>
        </div>
      </div>

      <div className="hero__inner">
        <h1 className="hero__catch">
          歯の黄ばみ、
          <br />
          そのままにしてない？
        </h1>
        <p className="hero__urgency">枠が埋まりやすいため、まずは空き状況だけ確認しておくのがおすすめです</p>

        <div className="hero__cta-wrap">
          <CTAButton href={LINE_RESERVE_URL} ariaLabel={CTA_PURPOSE_ARIA}>
            {CTA_PURPOSE_LABEL}
          </CTAButton>
          {reassureLines.length > 0 ? (
            <div className="hero__reassure" aria-label="ご案内について">
              {reassureLines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          ) : null}
        </div>

        <p className="hero__sub">まずは1回、目安30〜45分で確認できます</p>

        <div className="hero__visual" aria-label="店内・施術の写真">
          <p className="hero__visual-label lp-caption">店内のようす</p>
          <HeroSalonCarousel photos={SALON_GALLERY_PHOTOS} />
        </div>
      </div>
    </section>
  );
}
