import { LINE_RESERVE_URL } from '../config/links';
import './SiteHeader.css';

const NAV_ITEMS = [
  { href: '#price', label: '料金' },
  { href: '#diagnosis', label: '選び方' },
  { href: '#salon-gallery', label: '店内' },
  { href: '#guide', label: 'ガイド' },
  { href: '#salon-diff', label: '特徴' },
  { href: '#before-after', label: '変化' },
  { href: '#whitening-steps', label: '施術' },
  { href: '#flow', label: '流れ' },
  { href: '#faq', label: 'FAQ' },
  { href: '#access', label: 'アクセス' },
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="#top" aria-label="CLEAR ROUTINE トップへ">
          CLEAR ROUTINE
        </a>
        <nav className="site-header__nav" aria-label="ページ内ナビゲーション">
          {NAV_ITEMS.map((item) => (
            <a className="site-header__nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="site-header__reserve" href={LINE_RESERVE_URL}>
          予約
        </a>
      </div>
    </header>
  );
}
