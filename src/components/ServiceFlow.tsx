import './ServiceFlow.css';

const STEPS = [
  {
    n: '1',
    title: 'LINEで空き状況と気になる点をまとめて確認',
    body: '気になることだけ、先にサッと確認できます。',
  },
  {
    n: '2',
    title: '来店して流れの説明',
    body: '進め方はその場で確認してから。',
  },
  {
    n: '3',
    title: 'ご納得いただけた場合のみ施術',
    body: '手順はスタッフが同席しながら進めます。',
  },
];

export function ServiceFlow() {
  return (
    <section className="flow lp-section lp-section--tint" aria-labelledby="flow-title">
      <div className="lp-section__inner">
        <h2 className="lp-h2 lp-h2--split" id="flow-title">
          <span className="lp-h2__en" lang="en">
            FLOW
          </span>
          <span className="lp-h2__ja">来店までの流れ</span>
        </h2>
        <div className="lp-card flow__card">
          <ol className="flow__list">
            {STEPS.map((s) => (
              <li key={s.n} className="flow__item">
                <span className="flow__num">{s.n}</span>
                <div>
                  <p className="flow__name">{s.title}</p>
                  <p className="flow__text lp-caption">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
