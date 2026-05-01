import { CtaBlock } from './CtaBlock';
import './FinalCTA.css';

export function FinalCTA() {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title" id="reserve">
      <div className="lp-section__inner final-cta__inner">
        <h2 className="final-cta__title" id="final-cta-title">
          迷うなら、LINEで先に一度だけ
        </h2>
        <CtaBlock
          variant="inverse"
          reason="予約前でも大丈夫。空きと所要の目安だけ、先に確認できます。"
        />
      </div>
    </section>
  );
}
