/** SPA では初回 HTML にアンカー先が無いため、描画後にハッシュへスクロールする */

export function getHashFragmentId(): string | null {
  const raw = window.location.hash.slice(1);
  if (!raw) return null;
  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
}

export function scrollToHashTarget(): boolean {
  const id = getHashFragmentId();
  if (!id) return false;
  const el = document.getElementById(id);
  if (!(el instanceof HTMLElement)) return false;

  const header = document.querySelector('.site-header');
  const headerOffset = header instanceof HTMLElement ? header.offsetHeight + 12 : 0;
  const top = el.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top: Math.max(0, top - headerOffset), left: 0, behavior: 'auto' });
  return true;
}

type Cleanup = () => void;

/**
 * 要素がまだ無い・レイアウト未確定のとき向けに複数回試行する。
 */
export function bindHashFragmentScroll(): Cleanup {
  if (!getHashFragmentId()) {
    return () => {};
  }

  let cancelled = false;
  let raf = 0;
  let attempts = 0;
  const maxFrames = 300;

  const tryScroll = () => {
    if (cancelled) return;
    if (scrollToHashTarget()) return;
    if (++attempts >= maxFrames) return;
    raf = requestAnimationFrame(tryScroll);
  };

  const run = () => {
    if (!cancelled) scrollToHashTarget();
  };

  tryScroll();

  const delays = [0, 50, 120, 300, 600, 1200];
  const timeouts = delays.map((ms) => window.setTimeout(run, ms));

  window.addEventListener('load', run);
  void document.fonts.ready.then(run);

  return () => {
    cancelled = true;
    cancelAnimationFrame(raf);
    timeouts.forEach((t) => window.clearTimeout(t));
    window.removeEventListener('load', run);
  };
}
