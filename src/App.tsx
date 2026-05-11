import { useEffect, useLayoutEffect } from 'react';
import { SalonDifference } from './components/SalonDifference';
import { BeforeAfter } from './components/BeforeAfter';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { GuidePop } from './components/GuidePop';
import { Hero } from './components/Hero';
import { MidCTA } from './components/MidCTA';
import { Pricing } from './components/Pricing';
import { SalonGallery } from './components/SalonGallery';
import { ServiceFlow } from './components/ServiceFlow';
import { SiteHeader } from './components/SiteHeader';
import { WhiteningSteps } from './components/WhiteningSteps';
import { WhiteningDiagnosis } from './components/WhiteningDiagnosis';
import { StickyCTA } from './components/StickyCTA';
import { StoreInfo } from './components/StoreInfo';
import { LINE_RESERVE_URL } from './config/links';
import { SECTION_NAV_ITEMS } from './config/sectionNav';
import { bindHashFragmentScroll, scrollToHashTarget } from './scrollToHash';
import './App.css';

function App() {
  useLayoutEffect(() => bindHashFragmentScroll(), []);

  useLayoutEffect(() => {
    const onHashChange = () => scrollToHashTarget();
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    const preventDefault = (event: Event) => event.preventDefault();

    document.addEventListener('contextmenu', preventDefault);
    document.addEventListener('dragstart', preventDefault);

    return () => {
      document.removeEventListener('contextmenu', preventDefault);
      document.removeEventListener('dragstart', preventDefault);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#top">
        本文へスキップ
      </a>
      <SiteHeader />
      <main>
        <Hero />
        <Pricing />
        <WhiteningDiagnosis />
        <SalonGallery />
        <GuidePop />
        <SalonDifference />
        <BeforeAfter />
        <WhiteningSteps />
        <ServiceFlow />
        <MidCTA />
        <FAQ />
        <FinalCTA />
        <StoreInfo />
      </main>
      <footer className="site-footer">
        <nav className="site-footer__nav" aria-label="フッターメニュー">
          <a className="site-footer__nav-link" href="#top">
            トップ
          </a>
          {SECTION_NAV_ITEMS.map((item) => (
            <a className="site-footer__nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <p className="site-footer__meta">
          <a className="site-footer__link" href={LINE_RESERVE_URL}>
            LINE公式アカウント
          </a>
        </p>
        <p className="site-footer__text">© {new Date().getFullYear()} CLEAR ROUTINE</p>
      </footer>
      <StickyCTA />
    </>
  );
}

export default App;
