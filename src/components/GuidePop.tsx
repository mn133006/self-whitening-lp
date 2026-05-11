import './GuidePop.css';

export function GuidePop() {
  return (
    <section className="guide-pop lp-section lp-section--tint" id="guide" aria-labelledby="guide-pop-title">
      <div className="lp-section__inner guide-pop__inner">
        <h2 className="lp-h2" id="guide-pop-title">
          はじめての方向けガイド
        </h2>
        <div className="guide-pop__card">
          <img
            className="guide-pop__img"
            src="/whitening-pop-guide.png"
            alt="美歯口ホワイトニングの紹介ポップ。施術の流れやアプリ情報をまとめた案内画像。"
            width={800}
            height={1058}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
