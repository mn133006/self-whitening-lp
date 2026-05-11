import { LINE_RESERVE_URL } from '../config/links';
import { SECTION_NAV_ITEMS } from '../config/sectionNav';
import './SiteHeader.css';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="#top" aria-label="CLEAR ROUTINE トップへ">
          CLEAR ROUTINE
        </a>
        <nav className="site-header__nav" aria-label="ページ内ナビゲーション">
          {SECTION_NAV_ITEMS.map((item) => (
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
