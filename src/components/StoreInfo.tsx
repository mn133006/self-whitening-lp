import { LINE_RESERVE_URL, STORE_PHONE_DISPLAY, STORE_PHONE_TEL } from '../config/links';
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
          <dl className="store__info">
            <div className="store__info-row">
              <dt className="store__info-label">住所</dt>
              <dd className="store__info-value">
                <span className="store__info-postal">〒869-0532</span>
                <span className="store__info-address">熊本県宇城市松橋町久具301-2</span>
              </dd>
            </div>
            <div className="store__info-row">
              <dt className="store__info-label">電話</dt>
              <dd className="store__info-value">
                <a className="store__tel" href={STORE_PHONE_TEL}>
                  {STORE_PHONE_DISPLAY}
                </a>
                <span className="store__info-sub">
                  ご予約・空き確認はLINEがスムーズです。施術中はお電話に出られない場合があります。
                </span>
              </dd>
            </div>
            <div className="store__info-row">
              <dt className="store__info-label">営業時間</dt>
              <dd className="store__info-value">
                <span>10:00〜20:00</span>
                <span className="store__info-sub">予約優先・不定休</span>
              </dd>
            </div>
            <div className="store__info-row">
              <dt className="store__info-label">アクセス</dt>
              <dd className="store__info-value">
                <span>JR松橋駅より徒歩約15分</span>
                <span className="store__info-sub">上記住所をナビに入力いただくとスムーズです</span>
              </dd>
            </div>
            <div className="store__info-row">
              <dt className="store__info-label">駐車場</dt>
              <dd className="store__info-value">
                <span>12台（建物裏）</span>
                <span className="store__info-sub">バス停（松橋高校前）は目の前です</span>
              </dd>
            </div>
          </dl>
          <p className="store__text store__text--note lp-caption">
            ※営業時間・定休日は変更となる場合があります。最新情報はLINEにてご確認ください。
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
            src="/store-exterior.jpg"
            alt="CLEAR ROUTINE 店舗の外観。白い外壁の建物のガラス入口。"
            width={768}
            height={1024}
            loading="lazy"
            decoding="async"
          />
          <figcaption className="store__photo-cap lp-caption">外観（入口はガラス扉の建物です）</figcaption>
        </figure>
      </div>
    </section>
  );
}
