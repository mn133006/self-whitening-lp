import type { MouseEvent } from 'react';
import { LINE_RESERVE_URL } from '../config/links';
import { SECTION_NAV_ITEMS } from '../config/sectionNav';
import './SiteHeader.css';

export function SiteHeader() {
  const closeMenu = (event: MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.closest('details')?.removeAttribute('open');
  };

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="#top" aria-label="CLEAR ROUTINE トップへ">
          CLEAR ROUTINE
        </a>
        <details className="site-header__menu">
          <summary className="site-header__menu-button">メニュー</summary>
          <nav className="site-header__nav" aria-label="ページ内ナビゲーション">
            <a className="site-header__nav-link" href="#top" onClick={closeMenu}>
              トップ
            </a>
            {SECTION_NAV_ITEMS.map((item) => (
              <a className="site-header__nav-link" href={item.href} key={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </nav>
        </details>
        <a className="site-header__reserve" href={LINE_RESERVE_URL}>
          予約
        </a>
      </div>
    </header>
  );
}
