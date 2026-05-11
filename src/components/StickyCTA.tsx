import { CTAButton } from './CTAButton';
import { LINE_RESERVE_URL } from '../config/links';
import { CTA_STICKY_ARIA, CTA_STICKY_LABEL } from '../config/ctaCopy';
import './StickyCTA.css';

export function StickyCTA() {
  const buttonLines = CTA_STICKY_LABEL.split('\n');

  return (
    <div className="sticky-cta" role="region" aria-label="LINEで気になることを聞く">
      <CTAButton href={LINE_RESERVE_URL} ariaLabel={CTA_STICKY_ARIA}>
        <span className="cta-btn__stack">
          {buttonLines.map((line) => (
            <span className="cta-btn__line" key={line}>
              {line}
            </span>
          ))}
        </span>
      </CTAButton>
      <p className="sticky-cta__hint">相談無料。無理な勧誘はいたしません。</p>
    </div>
  );
}
