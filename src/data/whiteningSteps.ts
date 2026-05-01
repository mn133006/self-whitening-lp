/**
 * 美歯口ホワイトニング手順（マニュアル表記どおり）
 * imageSrc 未設定時はプレースホルダ表示
 */
export type WhiteningStep = {
  id: string;
  imageSrc?: string;
  /** ステップ見出し（画像の青帯タイトル） */
  title: string;
  /** 画像の白エリアの箇条書き（●は表示側で付与） */
  instructions: string[];
};

export const WHITENING_STEPS: WhiteningStep[] = [
  {
    id: '01',
    imageSrc: '/whitening-steps/02.png',
    title: '歯のトーン確認 (開始時)',
    instructions: ['シェードガイドでトーンをチェック'],
  },
  {
    id: '02',
    imageSrc: '/whitening-steps/01.png',
    title: '歯をみがく',
    instructions: ['ホワイトはみがきを使って歯をみがく'],
  },
  {
    id: '03',
    imageSrc: '/whitening-steps/03.png',
    title: '紙エプロンを装着',
    instructions: ['エプロン留めクリップを使用'],
  },
  {
    id: '04',
    imageSrc: '/whitening-steps/04.png',
    title: 'マウスオープナー装着',
    instructions: [
      '広がりの大きい方を口側に',
      '片方ずつ口にはめ込む',
      'リング中央を内側に曲げてはめ込むとスムーズ',
    ],
  },
  {
    id: '05',
    imageSrc: '/whitening-steps/05.png',
    title: 'ホワイトニング溶液を塗布',
    instructions: [
      '歯の表面の水分をティッシュで拭き取る',
      '磨くのではなく、全体に塗るイメージ',
      '塗布は前歯のみ行う',
    ],
  },
  {
    id: '06',
    imageSrc: '/whitening-steps/06.png',
    title: 'アイガードを装着',
    instructions: [],
  },
  {
    id: '07',
    imageSrc: '/whitening-steps/07.png',
    title: 'マシン位置の調整',
    instructions: ['マシンの照射部分を口元に引き寄せる'],
  },
  {
    id: '08',
    imageSrc: '/whitening-steps/08.png',
    title: 'スタートボタンを押す',
    instructions: ['照射時間は8分'],
  },
  {
    id: '09',
    imageSrc: '/whitening-steps/09.png',
    title: 'LED照射',
    instructions: [
      '終了アラームが鳴り自動で消灯するまでキープ',
      '上を向いたままアイガードとマウスオープナーを外す',
    ],
  },
  {
    id: '10',
    imageSrc: '/whitening-steps/10.png',
    title: '歯ブラシをして口をゆすぐ',
    instructions: ['歯みがき粉を使わずに歯みがきをする', '工程4〜10を2回繰り返す'],
  },
  {
    id: '11',
    imageSrc: '/whitening-steps/11.png',
    title: 'トリートメント',
    instructions: ['仕上げにトリートメントを全体に行き渡るようにみがく'],
  },
  {
    id: '12',
    imageSrc: '/whitening-steps/12.png',
    title: '歯のトーン確認 (終了時)',
    instructions: ['ホワイトニング前との変化をチェック'],
  },
];
