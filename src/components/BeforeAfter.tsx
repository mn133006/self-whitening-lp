import './BeforeAfter.css';
import type { ReactNode } from 'react';

/** 「気になり始めた」など、語の途中で縦に割かれやすい語をまとめる */
function formatStoryLine(line: string): ReactNode {
  const m = line.match(/^(.*黄ばみが)(気になり始めた)$/);
  if (m) {
    return (
      <>
        {m[1]}
        <span className="jp-nowrap-phrase">{m[2]}</span>
      </>
    );
  }
  return line;
}

type CaseMeta = {
  src: string;
  alt: string;
  width: number;
  height: number;
  headline: string;
  story: [string, string];
  result: string;
  muted?: boolean;
};

const CASES: CaseMeta[] = [
  {
    src: '/before-after-case-01.png',
    alt: '参考例。女性30代。紅茶による着色。お手入れ前、1回後、4回後の比較。',
    width: 1024,
    height: 427,
    headline: '女性30代｜紅茶習慣',
    story: ['毎日、紅茶を飲むことが多い', '気づいたら口元の黄ばみが気になり始めた'],
    result: '4回でここまで改善',
  },
  {
    src: '/before-after-case-02.png',
    alt: '参考例。女性20代。チョコレートによる着色。お手入れ前、1回後、4回後の比較。',
    width: 1024,
    height: 427,
    headline: '女性20代｜チョコレート習慣',
    story: ['間食でチョコをよく食べる', '気づいたら歯の黄ばみが気になり始めた'],
    result: '4回でここまで改善',
    muted: true,
  },
  {
    src: '/before-after-case-03.png',
    alt: '参考例。男性30代。コーヒーによる着色。お手入れ前、1回後、4回後の比較。',
    width: 1024,
    height: 428,
    headline: '男性30代｜コーヒー習慣',
    story: ['仕事中にコーヒーを飲む回数が多い', '写真で歯の黄ばみが目立つように感じた'],
    result: '4回でここまで改善',
  },
];

export function BeforeAfter() {
  return (
    <section
      className="before-after lp-section lp-section--tint"
      aria-labelledby="before-after-title"
      id="before-after"
    >
      <div className="lp-section__inner before-after__inner">
        <h2 className="lp-h2 lp-h2--split" id="before-after-title">
          <span className="lp-h2__en" lang="en">
            CASE
          </span>
          <span className="lp-h2__ja">ビフォーアフター・変化の比較</span>
        </h2>

        <p className="before-after__hook">実際に、ここまで印象が変わります。</p>
        <p className="before-after__intro-lead lp-body u-measure">
          歯の色が明るくなることで、笑顔の印象や清潔感に違いが生まれます。
        </p>

        <ul className="before-after__list">
          {CASES.map((c) => (
            <li
              key={c.src}
              className={`before-after__item${c.muted ? ' before-after__item--muted' : ''}`}
            >
              <div className="before-after__photo-wrap">
                <img
                  className="before-after__img"
                  src={c.src}
                  alt={c.alt}
                  width={c.width}
                  height={c.height}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="before-after__attr">{c.headline}</p>
              <ul className="before-after__story">
                {c.story.map((line, i) => (
                  <li key={i} className="before-after__story-line lp-caption">
                    ・{formatStoryLine(line)}
                  </li>
                ))}
              </ul>
              <p className="before-after__result">→ {c.result}</p>
            </li>
          ))}
        </ul>

        <div className="before-after__trust-block">
          <p className="before-after__trust-lead">一切の加工なし・同条件撮影</p>
          <p className="before-after__trust-sub lp-body">
            見せ方の演出ではなく、<strong>同じ照明・同じ角度</strong>で「変化の幅」を並べています。
          </p>
          <div className="before-after__legal-notes">
            <p className="before-after__trust-note lp-caption">※画像はトリミング・縮小のみ。色味の補正はしていません。</p>
            <p className="before-after__fine lp-caption">
              ※変化には個人差があります。見え方・感じ方には差があります。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
