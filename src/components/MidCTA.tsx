import { CtaBlock } from './CtaBlock';
import './MidCTA.css';

export function MidCTA() {
  return (
    <aside className="mid-cta lp-section lp-section--tint" aria-label="LINEで気になる点を聞く">
      <div className="lp-section__inner mid-cta__inner">
        <CtaBlock
          className="cta-block--mid"
          reason={
            <>
              <span className="mid-cta__lead">
                迷っていること、
                <br />
                先に一回だけ聞いておく。
              </span>
              <span className="mid-cta__sub">気になっているうちに、先に相談だけしておくと安心です。</span>
            </>
          }
        />
      </div>
    </aside>
  );
}
