import './CustomerVoices.css';

type Voice = {
  id: string;
  paragraphs: [string, string];
};

const VOICES: Voice[] = [
  {
    id: 'v1',
    paragraphs: [
      '初めてのホワイトニングで少し緊張していましたが、最初に丁寧に説明していただけたので安心して受けられました。',
      '無理に勧められることもなく、自分に合った方法を相談できたのが良かったです。',
    ],
  },
  {
    id: 'v2',
    paragraphs: [
      '1回でも口元がすっきりした感じがあり、鏡を見るのが少し楽しみになりました。',
      '初回料金も試しやすく、気軽に始められたのが良かったです。',
    ],
  },
  {
    id: 'v3',
    paragraphs: [
      'セルフホワイトニングは難しいイメージがありましたが、実際はとても簡単でした。',
      '美容と医療の違いまで分かりやすく説明してもらえて、安心して続けられそうです。',
    ],
  },
];

function Stars() {
  return (
    <p className="voices__stars" aria-label="5段階評価で5">
      {'★★★★★'}
    </p>
  );
}

export function CustomerVoices() {
  return (
    <section className="voices lp-section lp-section--tint" aria-labelledby="voices-title" id="customer-voices">
      <div className="lp-section__inner voices__inner">
        <h2 className="lp-h2 u-measure" id="voices-title">
          体験されたお客様の声
        </h2>

        <ul className="voices__list">
          {VOICES.map((v) => (
            <li key={v.id} className="voices__item">
              <blockquote className="voices__bubble">
                <Stars />
                <div className="voices__quote">
                  {v.paragraphs.map((text) => (
                    <p key={text} className="voices__quote-p">
                      {text}
                    </p>
                  ))}
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
