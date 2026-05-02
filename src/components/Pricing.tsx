import { LINE_RESERVE_URL } from '../config/links';
import './Pricing.css';

export function Pricing() {
  return (
    <section className="pricing lp-section" aria-labelledby="price-title" id="price">
      <div className="lp-section__inner">
        <h2 className="lp-h2 lp-h2--split" id="price-title">
          <span className="lp-h2__en" lang="en">
            PRICE
          </span>
          <span className="lp-h2__ja">料金のご案内</span>
        </h2>

        <div className="pricing__groups">
          <div className="pricing__category" id="price-beauty">
            <h3 className="pricing__category-title">美容ホワイトニング</h3>
            <div className="pricing__stack">
          <section className="pricing__phase pricing__phase--entry" aria-label="初回体験">
            <p className="pricing__phase-step">1. 初回体験</p>
            <div className="pricing__card pricing__card--intro">
              <p className="pricing__tag">初回限定 / 体験価格</p>
              <div className="pricing__row">
                <p className="pricing__name">初回体験</p>
                <p className="pricing__amount pricing__amount--intro">
                  <span className="pricing__was">3,900円</span>
                  <span className="pricing__price-sep" aria-hidden="true">
                    →
                  </span>
                  <span className="pricing__price-now">1,900円</span>
                </p>
              </div>
              <p className="pricing__subcaption lp-caption">合わなければここで終了OK、まずは気軽に1回お試しください</p>
            </div>
            <a className="pricing__cta" href={LINE_RESERVE_URL}>
              LINEで空き状況と目安を確認する
            </a>
          </section>

          <section className="pricing__phase pricing__phase--single" aria-label="単回">
            <p className="pricing__phase-step">2. 単回</p>
            <div className="pricing__sub-grid">
              <div className="pricing__card pricing__card--standard">
                <p className="pricing__block-title">通常メニュー（単回）</p>
                <div className="pricing__row">
                  <p className="pricing__name">スタンダード</p>
                  <p className="pricing__amount">4,900円</p>
                </div>
                <p className="pricing__subcaption lp-caption">まずは様子を見たい方へ</p>
                <ul className="pricing__course-spec">
                  <li>LED照射 8分×2セット + トリートメント</li>
                </ul>
                <div className="pricing__option">
                  <p className="pricing__option-title">プレミアムオプション</p>
                  <div className="pricing__row pricing__row--option">
                    <p className="pricing__name">追加料金</p>
                    <p className="pricing__amount">+1,600円</p>
                  </div>
                  <ul className="pricing__premium-detail">
                    <li>LED照射 10分×2セット + クレンジング + 結晶新生トリートメント</li>
                    <li>溶液濃度2倍配合で、より変化を感じやすくなっています</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="pricing__phase pricing__phase--main" aria-label="回数券">
            <p className="pricing__phase-step">3. 回数券</p>

            <div className="pricing__card pricing__card--ticket">
              <p className="pricing__badge">一番人気</p>
              <p className="pricing__block-title">回数券（スタンダード基準）</p>
              <p className="pricing__subcaption lp-caption">しっかり変化を実感したい方へ</p>
              <ul className="pricing__vertical-list">
                <li className="pricing__line-item">
                  <span className="pricing__name">4回</span>
                  <span className="pricing__total-price">14,000円</span>
                  <span className="pricing__per-price">1回あたり 3,500円</span>
                </li>
                <li className="pricing__line-item">
                  <span className="pricing__name">8回</span>
                  <span className="pricing__total-price">25,600円</span>
                  <span className="pricing__per-price">1回あたり 3,200円</span>
                </li>
                <li className="pricing__line-item pricing__line-item--featured">
                  <span className="pricing__name">12回</span>
                  <span className="pricing__item-badge">一番人気</span>
                  <span className="pricing__total-price">33,600円</span>
                  <span className="pricing__per-price">1回あたり 2,800円</span>
                </li>
              </ul>
              <div className="pricing__option">
                <p className="pricing__option-title">プレミアム追加（回数券利用時）</p>
                <div className="pricing__row pricing__row--option">
                  <p className="pricing__name">追加料金</p>
                  <p className="pricing__amount">+1,200円／回</p>
                </div>
              </div>
            </div>

            <a className="pricing__cta" href={LINE_RESERVE_URL}>
              LINEで空き状況と目安を確認する
            </a>
          </section>

          <section className="pricing__phase pricing__phase--subscription" aria-label="月額プラン">
            <p className="pricing__phase-step">4. 月額プラン</p>
            <div className="pricing__card pricing__card--subscription">
              <p className="pricing__block-title">月額プラン</p>
              <div className="pricing__row">
                <p className="pricing__name">月2回まで</p>
                <p className="pricing__amount">5,900円</p>
              </div>
              <p className="pricing__subcaption lp-caption">白さ維持したい方向け、回数券を使い切った後の維持にもおすすめです</p>
            </div>
          </section>
            </div>
          </div>

          <div className="pricing__category" id="price-dental">
            <h3 className="pricing__category-title">歯科提携ホワイトニング</h3>
            <div className="pricing__stack">
          <section className="pricing__phase pricing__phase--medical" aria-label="さらに白さを求める方向け">
            <p className="pricing__phase-step">1. さらに白さを求める方向け</p>
            <div className="pricing__card pricing__card--medical">
              <ul className="pricing__vertical-list">
                <li className="pricing__line-item pricing__line-item--medical">
                  <span className="pricing__name">歯科提携ホワイトニング（単回）</span>
                  <span className="pricing__amount">7,900円</span>
                </li>
              </ul>
              <div className="pricing__medical-plan">
                <p className="pricing__option-title">セットプラン</p>
                <div className="pricing__row">
                  <p className="pricing__name">歯科提携3回コース</p>
                  <p className="pricing__amount">18,000円</p>
                </div>
              </div>
              <ul className="pricing__notes">
                <li>提携歯科と連携したホワイトニングです</li>
                <li>オンライン診療・専用ジェルの別途費用が必要です</li>
              </ul>
            </div>
          </section>
            </div>
          </div>
        </div>

        <p className="pricing__closing lp-body u-measure">お客様の状態に合わせて最適なプランをご提案いたします</p>
      </div>
    </section>
  );
}
