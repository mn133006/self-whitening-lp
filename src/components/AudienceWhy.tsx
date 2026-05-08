import './AudienceWhy.css';

const MOMENTS = [
  '人前で笑うとき、少し口元が気になる',
  '写真を見返したとき、歯の色に目がいく',
  '接客や営業で、第一印象を少しでも良くしたい',
  'マスクを外す機会が増えて、気になり始めた',
  '清潔感を上げたいが、何から始めるか迷っている',
];

export function AudienceWhy() {
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
            {MOMENTS.map((line, i) => (
              <li key={i} className="audience-why__item">
                {line}
              </li>
            ))}
          </ul>
          <p className="audience-why__pillar u-rhythm">
            表面の着色を落とす。
            <br />
            本来の明るさに、近づける。
          </p>
        </div>
      </div>
    </section>
  );
}
