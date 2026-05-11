import { CTAButton } from './CTAButton';
import { CTA_PURPOSE_ARIA, CTA_PURPOSE_LABEL } from '../config/ctaCopy';
import { LINE_RESERVE_URL } from '../config/links';
import './AudienceWhy.css';

const MOMENTS = [
  {
    title: '人前で笑うとき、少し口元が気になる',
    body: '自然な笑顔を、もっと自信を持って見せたい。',
    src: '/images/concerns/concern-1.jpg',
    alt: '鏡の前で口元に手を添えて自然に笑う女性。',
  },
  {
    title: '写真を見返したとき、歯の色に目がいく',
    body: 'もっと明るい笑顔で写りたい。',
    src: '/images/concerns/concern-2.jpg',
    alt: 'スマートフォンで写真を確認しながら口元に手を添える女性。',
  },
  {
    title: '接客や営業で、第一印象を少しでも良くしたい',
    body: '清潔感のある印象は、信頼にもつながります。',
    src: '/images/concerns/concern-3.jpg',
    alt: '明るい場所で笑顔で会話する女性。',
  },
  {
    title: 'マスクを外す機会が増えて、気になり始めた',
    body: '人と会う前に、口元の印象を整えたい。',
    src: '/images/concerns/concern-4.jpg',
    alt: 'マスクを手に持って自然に笑う女性。',
  },
  {
    title: '清潔感を上げたいが、何から始めるか迷っている',
    body: 'まずは気軽に試せる方法から始めたい。',
    src: '/images/concerns/concern-5.jpg',
    alt: '明るい室内で顎に手を添えて考える女性。',
  },
] as const;

export function AudienceWhy() {
  const buttonLines = CTA_PURPOSE_LABEL.split('\n');

  return (
    <section className="audience-why audience-why--in-hero" aria-labelledby="audience-why-title">
      <div className="lp-section__inner">
        <h2 className="audience-why__lead" id="audience-why-title">
          こういう瞬間、
          <br />
          気になっていませんか？
        </h2>
        <p className="audience-why__title">口元のくすみに、まず試せる一手</p>
        <div className="lp-card audience-why__card">
          <ul className="audience-why__list audience-why__list--moments" aria-label="気になる瞬間の例">
            {MOMENTS.map((moment) => (
              <li key={moment.title} className="audience-why__item">
                <img
                  className="audience-why__photo"
                  src={moment.src}
                  alt={moment.alt}
                  width={900}
                  height={506}
                  loading="lazy"
                  decoding="async"
                />
                <div className="audience-why__copy-wrap">
                  <span className="audience-why__check" aria-hidden="true">
                    ✓
                  </span>
                  <span className="audience-why__copy">
                    <span className="audience-why__item-title">{moment.title}</span>
                    <span className="audience-why__item-body">{moment.body}</span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div className="audience-why__cta">
            <CTAButton href={LINE_RESERVE_URL} ariaLabel={CTA_PURPOSE_ARIA}>
              <span className="cta-btn__stack">
                {buttonLines.map((line) => (
                  <span className="cta-btn__line" key={line}>
                    {line}
                  </span>
                ))}
              </span>
            </CTAButton>
            <p className="audience-why__cta-note">相談無料・無理な勧誘はいたしません。</p>
          </div>
        </div>
      </div>
    </section>
  );
}
