import { Camera, Sparkles, Smile } from 'lucide-react';
import { LINE_RESERVE_URL } from '../config/links';
import './SmileOutcomes.css';

const BENEFITS = [
  {
    icon: Smile,
    text: '自然な笑顔に自信が持てる',
  },
  {
    icon: Sparkles,
    text: '清潔感のある印象につながる',
  },
  {
    icon: Camera,
    text: '人前でも口元を気にしにくくなる',
  },
] as const;

export function SmileOutcomes() {
  return (
    <section className="soutcomes lp-section" aria-labelledby="soutcomes-title" id="smile-outcomes">
      <div className="lp-section__inner soutcomes__inner">
        <h2 className="lp-h2 u-measure" id="soutcomes-title">
          白い歯は、見た目以上の変化をもたらします。
        </h2>

        <div className="soutcomes__hero">
          <a className="soutcomes__hero-link" href={LINE_RESERVE_URL} aria-label="LINEで予約する">
            <img
              className="soutcomes__hero-img"
              src="/clear-routine-lp-banner.png"
              alt="CLEAR ROUTINE 白い歯で、自然な自信を。初回体験1,900円。今すぐ予約する"
              width={1024}
              height={682}
              loading="lazy"
              decoding="async"
            />
          </a>
        </div>

        <ul className="soutcomes__points">
          {BENEFITS.map(({ icon: Icon, text }) => (
            <li key={text} className="soutcomes__point">
              <span className="soutcomes__icon" aria-hidden="true">
                <Icon size={22} strokeWidth={2} />
              </span>
              <span className="soutcomes__point-text">{text}</span>
            </li>
          ))}
        </ul>

        <p className="soutcomes__sub lp-body u-measure">無理なく続けられるケアで、自然な明るさへ。</p>
      </div>
    </section>
  );
}
