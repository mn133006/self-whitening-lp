import './SalonDifference.css';

const POINTS = [
  {
    t: '短い時間で口元の印象を整える',
    b: 'お手入れは目安30〜45分。忙しい日でも、さっと立ち寄りやすい時間です。',
  },
  {
    t: 'いきなり施術ではなく、順番に進められます',
    b: 'まずはお話を伺い、流れを共有したうえで、次の進め方を選べます。',
  },
  {
    t: '国内メーカー製の機器・溶液を使用',
    b: 'LED照射マシンとホワイトニング溶液は(株)シャリオン製を使用し、美歯口ホワイトニングの手順に沿って進めます。',
  },
  {
    t: '歯科提携×セルフホワイトニング専門サロン',
    b: '提携歯科との連携のもと、美容ホワイトニングに加え、より白さを求める方向けの歯科提携ホワイトニングへのご案内も可能です。',
  },
];

export function SalonDifference() {
  return (
    <section className="salon-diff lp-section" aria-labelledby="salon-diff-title">
      <div className="lp-section__inner">
        <h2 className="lp-h2 lp-h2--split" id="salon-diff-title">
          <span className="lp-h2__en" lang="en">
            WHY US
          </span>
          <span className="lp-h2__ja">CLEAR ROUTINEの特徴</span>
        </h2>
        <p className="salon-diff__lead lp-body">
          いきなり施術ではなく、
          <br />
          <strong>納得してから、次の一歩を選べる場所</strong>です。
        </p>
        <ul className="salon-diff__points">
          {POINTS.map((p) => (
            <li key={p.t} className="salon-diff__point">
              <p className="salon-diff__point-title">{p.t}</p>
              <p className="salon-diff__point-body lp-caption">{p.b}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
