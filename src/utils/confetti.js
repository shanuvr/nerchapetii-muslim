import confetti from 'canvas-confetti';

/* Islamic Emerald & Gold Palette: Pure White, Alabaster, Mint, Vibrant Emerald, Forest Jade, and Sacred Gold */
const ISLAMIC_CELESTIAL_PALETTE = [
  '#ffffff',
  '#f0fdf4',
  '#ecfdf5',
  '#a7f3d0',
  '#6ee7b7',
  '#34d399',
  '#10b981',
  '#059669',
  '#047857',
  '#065f46',
  '#fef08a',
  '#facc15',
  '#fbbf24',
  '#d97706',
];

let confettiWorkerInstance = null;

function getWorkerConfetti() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return null;

  if (!confettiWorkerInstance) {
    let canvas = document.getElementById('bhandaram-confetti-canvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'bhandaram-confetti-canvas';
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '9999';
      document.body.appendChild(canvas);
    }

    try {
      confettiWorkerInstance = confetti.create(canvas, {
        resize: true,
        useWorker: true,
        disableForReducedMotion: true,
      });
    } catch {
      confettiWorkerInstance = confetti;
    }
  }

  return confettiWorkerInstance;
}

/**
 * Celestial Sadaqah Blessing Shower
 */
export const celebrateOffering = () => {
  const fire = getWorkerConfetti();
  if (!fire) return;

  // 1. Upward radiant starlight burst
  fire({
    particleCount: 55,
    spread: 80,
    origin: { y: 0.65 },
    colors: ISLAMIC_CELESTIAL_PALETTE,
    startVelocity: 36,
    gravity: 0.85,
    scalar: 1.1,
    drift: 0,
    ticks: 240,
  });

  // 2. Twin celestial arches
  setTimeout(() => {
    fire({
      particleCount: 36,
      angle: 60,
      spread: 55,
      origin: { x: 0.1, y: 0.6 },
      colors: ISLAMIC_CELESTIAL_PALETTE,
      startVelocity: 38,
      gravity: 0.9,
      scalar: 0.95,
      ticks: 220,
    });
    fire({
      particleCount: 36,
      angle: 120,
      spread: 55,
      origin: { x: 0.9, y: 0.6 },
      colors: ISLAMIC_CELESTIAL_PALETTE,
      startVelocity: 38,
      gravity: 0.9,
      scalar: 0.95,
      ticks: 220,
    });
  }, 220);

  // 3. Floating golden crescent & emerald dust
  setTimeout(() => {
    fire({
      particleCount: 32,
      spread: 100,
      origin: { y: 0.3 },
      colors: ['#ffffff', '#fef08a', '#facc15', '#34d399', '#10b981'],
      startVelocity: 18,
      gravity: 0.6,
      scalar: 0.85,
      ticks: 300,
    });
  }, 480);
};
