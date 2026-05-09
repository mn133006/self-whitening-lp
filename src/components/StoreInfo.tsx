import { LINE_RESERVE_URL } from '../config/links';
import { storeMapsEmbedSrc, storeMapsOpenUrl } from '../config/storeMap';
import { CTAButton } from './CTAButton';
import { FranchiseBrand } from './FranchiseBrand';
import './StoreInfo.css';

const MAP_OPEN_URL = storeMapsOpenUrl();
const MAP_EMBED_URL = storeMapsEmbedSrc();

export function StoreInfo() {
  return (
    <section className="store lp-section lp-section--tint" aria-labelledby="store-title" id="access">
      <div className="lp-section__inner">
        <h2 className="lp-h2" id="store-title">
          店舗情報
        </h2>
        <div className="lp-card store__card">
          <div className="store__branding">
            <div className="store__branding-salon">
              <img
                className="store__logo"
                src="/logo-clear-routine.png"
                alt="CLEAR ROUTINE"
                width={1024}
                height={1024}
                decoding="async"
                loading="lazy"
              />
            </div>
            <div className="store__branding-franchise">
              <FranchiseBrand size="sm" className="franchise-brand--store" />
            </div>
          </div>
          <p className="store__address">
            〒869-0532
            <br />
            熊本県宇城市松橋町久具302-1
          </p>
          <p className="store__text lp-body">
            営業時間 10:00〜20:00／予約優先・不定休
          </p>
          <p className="store__text lp-body">
            JR松橋駅より徒歩約15分。
            上記住所をナビに入力いただくとスムーズです。
          </p>
          <p className="store__text lp-body">駐車12台。バス停（松橋高校前）は目の前です。</p>
          <p className="store__text store__text--note lp-caption">
            営業時間・定休日は変更となる場合があります。LINEにてご確認ください。
          </p>
          <div className="store__line" id="line">
            <CTAButton
              href={LINE_RESERVE_URL}
              ariaLabel="LINE公式アカウントを開く（外部サイトへ移動）"
            >
              LINE公式アカウントを開く
            </CTAButton>
          </div>
          <p className="store__sub">
            <a className="store__maplink" href={MAP_OPEN_URL} target="_blank" rel="noopener noreferrer">
              Googleマップで開く
            </a>
          </p>
          <div className="store__map" aria-label="店舗の地図">
            <iframe
              className="store__map-frame"
              src={MAP_EMBED_URL}
              title="CLEAR ROUTINE の地図"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <figure className="store__photo">
          <img
            className="store__photo-img"
            src="/store-exterior.png"
            alt="CLEAR ROUTINE 店舗の外観。白い外壁の建物のガラス入口。"
            width={1024}
            height={768}
            loading="lazy"
            decoding="async"
          />
          <figcaption className="store__photo-cap lp-caption">外観（入口はガラス扉の建物です）</figcaption>
        </figure>
      </div>
    </section>
  );
}
