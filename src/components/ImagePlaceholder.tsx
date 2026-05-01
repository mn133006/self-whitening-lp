import './ImagePlaceholder.css';

type Props = {
  /** 差し替え時のメモ（撮影内容の指示） */
  label: string;
  /** 例: '4/3' | '16/9' | '1/1' */
  ratio?: string;
  /** hero は高さを確保し、未投入でもFVが潰れない */
  variant?: 'default' | 'hero';
};

/**
 * 意図: 画像差し替え後も比率が崩れにくいよう aspect-ratio ベース。
 * 未設定時も「ここに画像」と撮影指示が読めることを優先。
 */
export function ImagePlaceholder({ label, ratio = '4/3', variant = 'default' }: Props) {
  const cls = ['image-placeholder', variant === 'hero' ? 'image-placeholder--hero' : ''].filter(Boolean).join(' ');
  return (
    <div className={cls} style={{ aspectRatio: ratio }}>
      <span className="image-placeholder__badge">ここに画像</span>
      <p className="image-placeholder__label">{label}</p>
    </div>
  );
}
