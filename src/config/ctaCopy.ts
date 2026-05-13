/** LP全体で統一するCTA（軽く問い合わせる導線を最優先） */
export const CTA_PURPOSE_LABEL = 'まずは初回1900円で体験\nLINEでいますぐ確認';
export const CTA_PURPOSE_ARIA = 'まずは初回1900円で体験。LINEでいますぐ確認（外部サイトへ移動）';

/** 固定バーは短く、意味は同一 */
export const CTA_STICKY_LABEL = CTA_PURPOSE_LABEL;
export const CTA_STICKY_ARIA = CTA_PURPOSE_ARIA;

/** CTA直下の補足（未指定時は非表示） */
export const CTA_MICRO_DEFAULT: readonly string[] = [];

/** ABテスト候補 */
export const CTA_LABEL_CANDIDATES = [
  'LINEで今日の空き状況を見る',
  'LINEで初回体験について聞く',
  'LINEで不安だけ先に解消する',
  'LINEで自分に合うか相談する',
] as const;
