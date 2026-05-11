import type { ReactNode } from 'react';
import { CTAButton } from './CTAButton';
import { LINE_RESERVE_URL } from '../config/links';
import { CTA_MICRO_DEFAULT, CTA_PURPOSE_ARIA, CTA_PURPOSE_LABEL } from '../config/ctaCopy';
import './CtaBlock.css';

type Variant = 'default' | 'compact' | 'inverse';

type Props = {
  variant?: Variant;
  className?: string;
  /** このブロックで伝える一行（行動理由） */
  reason: ReactNode;
  urgency?: ReactNode;
  /** ボタン表記（未指定時はサイト共通の目的型CTA） */
  buttonLabel?: string;
  buttonAriaLabel?: string;
  /** ボタン直下の補足 */
  microLines?: readonly string[];
};

/**
 * CTA：理由 → ボタン → 補足（心理ハードル＋得られる価値）
 */
export function CtaBlock({
  variant = 'default',
  className = '',
  reason,
  urgency,
  buttonLabel = CTA_PURPOSE_LABEL,
  buttonAriaLabel = CTA_PURPOSE_ARIA,
  microLines = CTA_MICRO_DEFAULT,
}: Props) {
  const v = variant === 'inverse' ? 'inverse' : variant === 'compact' ? 'compact' : '';
  const buttonLines = buttonLabel.split('\n');

  return (
    <div className={`cta-block${v ? ` cta-block--${v}` : ''} ${className}`.trim()}>
      <p className="cta-block__reason">{reason}</p>
      {urgency ? <p className="cta-block__urgency">{urgency}</p> : null}
      <CTAButton href={LINE_RESERVE_URL} ariaLabel={buttonAriaLabel}>
        {buttonLines.length > 1 ? (
          <span className="cta-btn__stack">
            {buttonLines.map((line) => (
              <span className="cta-btn__line" key={line}>
                {line}
              </span>
            ))}
          </span>
        ) : (
          buttonLabel
        )}
      </CTAButton>
      {microLines.length > 0 ? (
        <div className="cta-block__micro">
          {microLines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      ) : null}
    </div>
  );
}
