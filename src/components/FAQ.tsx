import './FAQ.css';

type FaqItem = { q: string; paragraphs: string[] };

const ITEMS: FaqItem[] = [
  {
    q: '所要時間はどのくらい？',
    paragraphs: [
      '目安は30〜45分です。',
      '当日の混み具合や手順で前後することがあります。',
      '詳しくは来店後にご案内します。',
    ],
  },
  {
    q: '予約は必要ですか？',
    paragraphs: [
      '事前予約をおすすめします。',
      '空き状況はLINEで確認できます。',
      '相談だけのご連絡も可能です。',
    ],
  },
  {
    q: '機器や溶液について教えてほしい',
    paragraphs: [
      'LED照射マシンとホワイトニング溶液は、(株)シャリオン製です。',
      'ご提供する溶液は化粧品登録品です。',
      '取り扱いは美歯口ホワイトニングの基準に沿ってご案内します。',
    ],
  },
  {
    q: '初めてでも大丈夫？',
    paragraphs: [
      '大丈夫です。初回の方が多いです。',
      '不明点はその場で止めて確認できます。',
      '納得してから次に進めます。',
    ],
  },
  {
    q: '1回だけでも大丈夫ですか？',
    paragraphs: [
      '問題ありません。合わなければその場で終了できます。',
      '無理な継続案内は行いません。',
    ],
  },
  {
    q: '痛い？しみる？',
    paragraphs: [
      '刺激の感じ方には個人差があります。',
      '強い痛みになることは多くありません。',
      '不安があればその場で中断できます。',
    ],
  },
  {
    q: 'どのくらい変わる？',
    paragraphs: [
      '変化の出方には個人差があります。',
      '着色汚れは変化を感じやすい傾向があります。',
      '来店後に流れや目安をご説明します。',
    ],
  },
  {
    q: '追加料金は？',
    paragraphs: [
      '基本は表示料金のみです。',
      '追加前に必ず説明します。',
      '不要ならその場で断れます。',
    ],
  },
  {
    q: 'お支払い方法は？',
    paragraphs: [
      'ご利用いただける方法は、来店時にご案内します。',
      '事前に知りたい場合はLINEへお問い合わせください。',
      '都度払いが基本です。',
    ],
  },
  {
    q: '施術後の飲食やケアは？',
    paragraphs: [
      '当日の状態に合わせて、目安をお伝えします。',
      '着色しやすい飲み物などは、しばらく控えると安心です。',
      '詳しくは施術後にご案内します。',
    ],
  },
  {
    q: '歯科提携ホワイトニングの案内はありますか？',
    paragraphs: [
      'はい。提携歯科医院での施術を受けていただく形になります。',
      'オンライン診療・ジェル等の別途費用が必要になる場合があります。',
      '歯科提携ホワイトニング（単回）は7,900円、歯科提携3回コースは18,000円です。対象や流れはLINEで事前にご案内します。',
    ],
  },
];

export function FAQ() {
  return (
    <section className="faq lp-section" id="faq" aria-labelledby="faq-title">
      <div className="lp-section__inner">
        <h2 className="lp-h2 lp-h2--split" id="faq-title">
          <span className="lp-h2__en" lang="en">
            FAQ
          </span>
          <span className="lp-h2__ja">よくある質問</span>
        </h2>
        <div className="lp-card faq__card">
          <div className="faq__list">
            {ITEMS.map((item) => (
              <details key={item.q} className="faq__item">
                <summary className="faq__q">{item.q}</summary>
                <div className="faq__a">
                  {item.paragraphs.map((p, i) => (
                    <p key={i} className="faq__a-p lp-body">
                      {p}
                    </p>
                  ))}
                </div>
              </details>
            ))}
          </div>
          <p className="faq__escape">
            ここにないことも、LINEで気軽にお問い合わせください。無理な勧誘はいたしません。
          </p>
        </div>
      </div>
    </section>
  );
}
