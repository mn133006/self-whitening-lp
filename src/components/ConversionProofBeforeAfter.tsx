import './ConversionProofBeforeAfter.css';

type ProofCase = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
};

const CASES: ProofCase[] = [
  {
    src: '/before-after-case-01.png',
    alt: 'Before / After の比較イメージ（参考例）',
    width: 1024,
    height: 427,
    caption: '自然な明るさへ',
  },
  {
    src: '/before-after-case-02.png',
    alt: 'Before / After の比較イメージ（参考例）',
    width: 1024,
    height: 427,
    caption: '清潔感のある印象に',
  },
  {
    src: '/before-after-case-03.png',
    alt: 'Before / After の比較イメージ（参考例）',
    width: 1024,
    height: 428,
    caption: '笑顔に自信',
  },
];

export function ConversionProofBeforeAfter() {
  return (
    <section
      className="cproof lp-section"
      aria-labelledby="cproof-title"
      id="proof-before-after"
    >
      <div className="lp-section__inner cproof__inner">
        <h2 className="lp-h2 u-measure" id="cproof-title">
          実際に、ここまで印象が変わります。
        </h2>
        <p className="cproof__lead lp-body u-measure">
          歯の色が明るくなることで、笑顔の印象や清潔感に違いが生まれます。
        </p>

        <ul className="cproof__grid">
          {CASES.map((c) => (
            <li key={c.src} className="cproof__card">
              <div className="cproof__photo">
                <img
                  className="cproof__img"
                  src={c.src}
                  alt={c.alt}
                  width={c.width}
                  height={c.height}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="cproof__caption">{c.caption}</p>
            </li>
          ))}
        </ul>

        <p className="cproof__note lp-caption">※効果には個人差があります。</p>
      </div>
    </section>
  );
}
