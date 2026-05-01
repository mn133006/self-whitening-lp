import { AudienceWhy } from './components/AudienceWhy';
import { SalonDifference } from './components/SalonDifference';
import { BeforeAfter } from './components/BeforeAfter';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { GuidePop } from './components/GuidePop';
import { Hero } from './components/Hero';
import { MidCTA } from './components/MidCTA';
import { Pricing } from './components/Pricing';
import { ServiceFlow } from './components/ServiceFlow';
import { WhiteningSteps } from './components/WhiteningSteps';
import { StickyCTA } from './components/StickyCTA';
import { StoreInfo } from './components/StoreInfo';
import './App.css';

function App() {
  return (
    <>
      <a className="skip-link" href="#top">
        本文へスキップ
      </a>
      <main>
        <Hero />
        <GuidePop />
        <AudienceWhy />
        <SalonDifference />
        <BeforeAfter />
        <WhiteningSteps />
        <ServiceFlow />
        <Pricing />
        <MidCTA />
        <FAQ />
        <FinalCTA />
        <StoreInfo />
      </main>
      <footer className="site-footer">
        <p className="site-footer__text">© {new Date().getFullYear()} CLEAR ROUTINE</p>
      </footer>
      <StickyCTA />
    </>
  );
}

export default App;
