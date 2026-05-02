/**
 * LINE公式アカウントのチャット／友だち追加URL。
 * LINE Official Account Manager → 友だち追加ガイド → 「URLを作成」でコピーした lin.ee / line.me を設定してください。
 * ブラウザで開いて友だち追加画面になることを必ず確認すること（無効な lin.ee は 404 になります）。
 * Vercel では環境変数 VITE_LINE_URL で上書きできます。
 */
/** LINE公式アカウントマネージャー「URLを作成」で表示される値と一致させる */
const LINE_URL_FALLBACK = 'https://lin.ee/vfmX17H';

function resolveLineUrl(): string {
  const fromEnv = import.meta.env.VITE_LINE_URL;
  if (typeof fromEnv === 'string' && fromEnv.trim() !== '') {
    return fromEnv.trim();
  }
  return LINE_URL_FALLBACK;
}

export const LINE_RESERVE_URL = resolveLineUrl();

export const FORM_RESERVE_URL = 'https://example.com/booking-form';
