import { MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import './WhiteningDiagnosis.css';

const SELF_POINTS = [
  'コーヒーやタバコによる着色が気になる',
  '自然な白さを目指したい',
  '痛みの少ない方法を選びたい',
  'まずは気軽に試したい',
  '定期的に歯のメンテナンスをしたい',
];

const MEDICAL_POINTS = [
  'より高い白さを目指したい',
  '短期間でしっかり白くしたい',
  '歯の内部の変色が気になる',
  '大切なイベントまでに結果を重視したい',
];

export function WhiteningDiagnosis() {
  return (
    <section className="diagnosis lp-section" aria-labelledby="diagnosis-title">
      <div className="lp-section__inner diagnosis__inner">
        <div className="diagnosis__intro">
          <div>
            <h2 className="lp-h2" id="diagnosis-title">
              あなたに合うホワイトニング診断
            </h2>
            <p className="diagnosis__lead lp-body u-measure">
              どのホワイトニングが自分に合っているか不安な方へ。
              <br />
              ご希望の白さや現在の歯の状態に合わせて、最適な方法をご提案します。
            </p>
          </div>
          <figure className="diagnosis__visual">
            <img
              className="diagnosis__visual-img"
              src="/section-diagnosis-visual.svg"
              alt="美容ホワイトニングと医療ホワイトニングの違いを選びやすくする診断イラスト"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>

        <div className="diagnosis__grid">
          <article className="diagnosis__card lp-card" aria-label="美容ホワイトニングがおすすめの方">
            <h3 className="diagnosis__card-title">
              <Sparkles size={18} aria-hidden="true" />
              <span>美容ホワイトニングがおすすめの方</span>
            </h3>
            <ul className="diagnosis__list">
              {SELF_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>

          <article className="diagnosis__card lp-card" aria-label="医療ホワイトニングがおすすめの方">
            <h3 className="diagnosis__card-title">
              <ShieldCheck size={18} aria-hidden="true" />
              <span>医療ホワイトニングがおすすめの方</span>
            </h3>
            <ul className="diagnosis__list">
              {MEDICAL_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        </div>

        <aside className="diagnosis__guide lp-card lp-card--tint" aria-label="迷った方へのご案内">
          <p className="diagnosis__guide-title">
            <MessageCircle size={18} aria-hidden="true" />
            <span>迷った方もご安心ください</span>
          </p>
          <p className="diagnosis__guide-body lp-body">
            どちらが自分に合っているか分からない場合も、現在の歯の状態やご希望を伺いながら、最適な方法をご案内します。
          </p>
        </aside>
      </div>
    </section>
  );
}
