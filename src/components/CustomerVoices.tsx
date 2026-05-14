import './CustomerVoices.css';

type Voice = {
  quote: string;
};

const VOICES: Voice[] = [
  { quote: '初めてでしたが、説明が丁寧で安心して受けられました。' },
  { quote: '1回でも口元がすっきりした感じがして嬉しかったです。' },
  { quote: 'セルフでも思ったより簡単で、気軽に続けられそうです。' },
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
            <li key={v.quote} className="voices__item">
              <blockquote className="voices__bubble">
                <Stars />
                <p className="voices__quote">{v.quote}</p>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
