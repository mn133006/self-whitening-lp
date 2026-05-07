import { CtaBlock } from './CtaBlock';
import './MidCTA.css';

export function MidCTA() {
  return (
    <aside className="mid-cta lp-section lp-section--tint" aria-label="LINEで気になる点を聞く">
      <div className="lp-section__inner mid-cta__inner">
        <CtaBlock
          reason={
            <>
              迷っていること、
              <br />
              先に一回だけ聞いておく。
            </>
          }
          urgency="気になっているうちに、先に相談だけしておくと安心です。"
        />
      </div>
    </aside>
  );
}
