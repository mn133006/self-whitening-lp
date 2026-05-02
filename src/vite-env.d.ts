/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** LINE公式の友だち追加／チャットURL（未設定時は links.ts の既定値） */
  readonly VITE_LINE_URL?: string;
}
