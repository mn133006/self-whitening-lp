/** 公開住所（ナビ入力用フォールバック） */
export const STORE_ADDRESS_LINE = '869-0532 熊本県宇城市松橋町久具301-2';

/**
 * Google マップ検索クエリ。
 * Maps の事業所登録名（CLEAR ROUTINE）ベースだとピンズレが出にくいです。
 */
const PLACE_QUERY_FALLBACK = 'CLEAR ROUTINE 熊本県宇城市松橋町';

function resolvedPlaceQuery(): string {
  const fromEnv = import.meta.env.VITE_GOOGLE_MAPS_PLACE_QUERY;
  if (typeof fromEnv === 'string' && fromEnv.trim() !== '') {
    return fromEnv.trim();
  }
  return PLACE_QUERY_FALLBACK;
}

/**
 * ブラウザ／アプリで Google マップを開くURL。
 */
export function storeMapsOpenUrl(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(resolvedPlaceQuery())}`;
}

/**
 * iframe の src。
 * Maps で CLEAR ROUTINE の正しいピンの画面を開き「共有 → 地図を埋め込む」の src を
 * `VITE_GOOGLE_MAPS_EMBED_SRC` に貼れば、完全一致で固定できます。
 */
export function storeMapsEmbedSrc(): string {
  const embed = import.meta.env.VITE_GOOGLE_MAPS_EMBED_SRC;
  if (typeof embed === 'string' && embed.trim() !== '') {
    return embed.trim();
  }
  return `https://www.google.com/maps?q=${encodeURIComponent(resolvedPlaceQuery())}&hl=ja&z=17&output=embed`;
}
