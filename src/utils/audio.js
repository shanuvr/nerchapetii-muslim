// Palli Bhandaram / Mosque Audio Engine:
// 1. Serene Acoustic Prayer Chime (Pure meditative crystal harmonics with spacious sanctuary reverb)
// 2. Coin strike on brass slot + wooden chest resonance
// 3. Banknote rustle & slide

let ctx = null;
let master = null;
let sanctuaryReverb = null;
let noiseBuf = null;

const getContext = () => {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return null;

  if (!ctx || ctx.state === 'closed') {
    ctx = new AudioCtx();

    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -12;
    comp.knee.value = 30;
    comp.ratio.value = 4;
    comp.attack.value = 0.003;
    comp.release.value = 0.25;

    master = ctx.createGain();
    master.gain.value = 0.85;
    master.connect(comp);
    comp.connect(ctx.destination);

    // Spacious Mosque Dome Acoustic Impulse
    const len = Math.floor(ctx.sampleRate * 2.0);
    const ir = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const channelData = ir.getChannelData(c);
      for (let i = 0; i < len; i++) {
        channelData[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.4);
      }
    }

    const convolver = ctx.createConvolver();
    convolver.buffer = ir;
    sanctuaryReverb = ctx.createGain();
    sanctuaryReverb.gain.value = 0.5;
    sanctuaryReverb.connect(convolver);
    convolver.connect(master);

    noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const nd = noiseBuf.getChannelData(0);
    for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
  }

  if (ctx.state === 'suspended') {
    ctx.resume().catch(() => {});
  }

  return ctx;
};

const rand = (min, max) => min + Math.random() * (max - min);

/**
 * Serene Acoustic Prayer Chime (Spiritual Meditative Tone)
 * Harmonious open chords (Root, 5th, Octave, 12th) with gentle swell and long airy decay
 */
export const playPrayerChime = (baseFreq = 528) => {
  const c = getContext();
  if (!c) return;

  const t0 = c.currentTime;

  // Harmonious spiritual partials (Root 1.0, Fifth 1.5, Octave 2.0, Major 9th 2.25, 12th 3.0)
  const partials = [
    { ratio: 1.0, amp: 0.8, attack: 0.04, decay: 2.6 },
    { ratio: 1.498, amp: 0.55, attack: 0.05, decay: 2.2 },
    { ratio: 2.0, amp: 0.4, attack: 0.06, decay: 1.8 },
    { ratio: 2.996, amp: 0.25, attack: 0.08, decay: 1.4 },
    { ratio: 4.0, amp: 0.12, attack: 0.1, decay: 1.0 },
  ];

  partials.forEach((p) => {
    const osc = c.createOscillator();
    const g = c.createGain();

    osc.type = 'sine';
    const freq = baseFreq * p.ratio * rand(0.999, 1.001);
    osc.frequency.setValueAtTime(freq, t0);

    g.gain.setValueAtTime(0.0001, t0);
    g.gain.linearRampToValueAtTime(p.amp * 0.35, t0 + p.attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + p.decay);

    osc.connect(g);
    g.connect(master);
    g.connect(sanctuaryReverb);

    osc.start(t0);
    osc.stop(t0 + p.decay + 0.1);
  });
};

/**
 * Real Coin Drop into Mosque Bhandaram
 */
export const playCoinDrop = (value = 5) => {
  const c = getContext();
  if (!c) return;

  const t0 = c.currentTime;

  const pitchMap = { 1: 3400, 2: 3200, 5: 2900, 10: 2700, 20: 2600 };
  const baseFreq = pitchMap[value] || 3000;

  // Brass slot strike
  [1, 2.15, 3.8].forEach((r, i) => {
    const osc = c.createOscillator();
    const g = c.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(baseFreq * r * rand(0.99, 1.01), t0);

    const dur = 0.08 / (i + 1);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.linearRampToValueAtTime(0.24 / (i + 1), t0 + 0.001);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);

    osc.connect(g);
    g.connect(master);
    g.connect(sanctuaryReverb);

    osc.start(t0);
    osc.stop(t0 + dur + 0.02);
  });

  // Wood chest body resonance
  const woodOsc = c.createOscillator();
  const woodG = c.createGain();
  woodOsc.type = 'triangle';
  woodOsc.frequency.setValueAtTime(200, t0);
  woodOsc.frequency.exponentialRampToValueAtTime(135, t0 + 0.08);

  woodG.gain.setValueAtTime(0.0001, t0);
  woodG.gain.linearRampToValueAtTime(0.2, t0 + 0.003);
  woodG.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.12);

  woodOsc.connect(woodG);
  woodG.connect(master);
  woodG.connect(sanctuaryReverb);

  woodOsc.start(t0);
  woodOsc.stop(t0 + 0.14);
};

/**
 * Banknote slide
 */
export const playNoteDrop = () => {
  const c = getContext();
  if (!c || !noiseBuf) return;

  const t0 = c.currentTime;

  [0, 0.03].forEach((offset, idx) => {
    const t = t0 + offset;
    const noise = c.createBufferSource();
    noise.buffer = noiseBuf;

    const filter = c.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(idx === 0 ? 3000 : 2100, t);
    filter.Q.setValueAtTime(1.5, t);

    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.18, t + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.14);

    noise.connect(filter);
    filter.connect(g);
    g.connect(master);

    noise.start(t, Math.random() * 0.5);
    noise.stop(t + 0.16);
  });
};
