/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** LINE公式の友だち追加／チャットURL（未設定時は links.ts の既定値） */
  readonly VITE_LINE_URL?: string;
  /** Maps「共有 → 地図を埋め込む」の iframe src をそのまま（ピン位置を事業所と完全一致させるとき） */
  readonly VITE_GOOGLE_MAPS_EMBED_SRC?: string;
  /** embed / 外部リンク用の検索クエリ（既定は CLEAR ROUTINE + 地域） */
  readonly VITE_GOOGLE_MAPS_PLACE_QUERY?: string;
}
