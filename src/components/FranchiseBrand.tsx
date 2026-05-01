import './FranchiseBrand.css';

type Size = 'sm' | 'md' | 'lg';

type Props = {
  /** 表示サイズ（ロゴの横幅目安） */
  size?: Size;
  className?: string;
};

/**
 * 加盟元「美歯口ホワイトニング」のブランドロゴ。
 * 横長ロゴのため、コンテナ幅は size で調整する。
 */
export function FranchiseBrand({ size = 'md', className = '' }: Props) {
  return (
    <figure className={`franchise-brand franchise-brand--${size} ${className}`.trim()}>
      <img
        className="franchise-brand__img"
        src="/bihaku-whitening-logo.png"
        alt="美歯口ホワイトニング BIHAKU WHITENING"
        width={320}
        height={80}
        decoding="async"
      />
    </figure>
  );
}
