import type { ReactNode } from 'react';
import './CTAButton.css';

type Variant = 'primary' | 'secondary' | 'ghost';

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  /** アクセシビリティ用 */
  ariaLabel?: string;
};

/**
 * 意図: 指で押しやすい大きさ（44px以上）と、FV・末尾で視線が止まるコントラスト。
 */
export function CTAButton({
  href,
  children,
  variant = 'primary',
  external = true,
  ariaLabel,
}: Props) {
  return (
    <a
      className={`cta-btn cta-btn--${variant}`}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
