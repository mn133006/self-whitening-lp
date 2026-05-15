import './SalonDifference.css';

const POINTS = [
  {
    t: '短い時間で口元の印象を整える',
    b: 'お手入れは目安30分程度。忙しい日でも、さっと立ち寄りやすい施術時間です。',
  },
  {
    t: 'いきなり施術ではなく、順番に進められます',
    b: 'まずはお話を伺い、流れを共有したうえで、次の進め方を選べます。',
  },
  {
    t: '外国語でのご案内にも対応',
    b: 'カウンセリングや施術の手順の確認で、英語など外国語のご案内にも対応できます。通訳の事前手配が必要となりますので、ご予約前にLINEなどでご確認ください。',
  },
  {
    t: '国内メーカー製の機器・溶液を使用',
    b: 'LED照射マシンは紫外線を出さない検証試験済みのもの。ホワイトニング溶液は国内工場で製造し化粧品登録を受けた安心・安全の製品を使用しています。',
  },
  {
    t: '歯科提携×セルフホワイトニング専門サロン',
    b: '提携歯科との連携のもと、美容ホワイトニングに加え、より白さを求める方向けの歯科提携ホワイトニングへのご案内も可能です。',
  },
  {
    t: '歯科提携コースなら、医師へ相談いただけます',
    b: 'カウンセリングのあと、ご不安が続く場合は、提携歯科の歯科医師へご相談いただけます。対象は歯科提携ホワイトニングコースをお選びのお客様に限ります。',
  },
];

export function SalonDifference() {
  return (
    <section className="salon-diff lp-section" id="salon-diff" aria-labelledby="salon-diff-title">
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
