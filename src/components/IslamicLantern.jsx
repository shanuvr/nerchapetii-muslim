import { useId } from 'react';

/**
 * Traditional Islamic Hanging Lantern (Fanous) with warm amber flame & brass lattice
 */
export default function IslamicLantern({ className = '', height = 56 }) {
  const rawId = useId();
  const id = rawId.replace(/[^a-zA-Z0-9]/g, '');

  const brassGrad = `brass-${id}`;
  const glassGrad = `glass-${id}`;
  const flameGlow = `flame-glow-${id}`;
  const outerFlame = `outer-flame-${id}`;
  const coreFlame = `core-flame-${id}`;

  return (
    <svg
      viewBox="0 0 44 80"
      className={`transform-gpu will-change-transform ${className}`}
      fill="none"
      aria-hidden="true"
      focusable="false"
      style={{ height }}
    >
      <defs>
        {/* Soft amber-emerald halo */}
        <radialGradient id={flameGlow} cx="0.5" cy="0.45" r="0.45">
          <stop offset="0%" stopColor="#fef08a" stopOpacity="0.85" />
          <stop offset="35%" stopColor="#f59e0b" stopOpacity="0.4" />
          <stop offset="70%" stopColor="#10b981" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#021b14" stopOpacity="0" />
        </radialGradient>

        {/* Polished Mosque Brass */}
        <linearGradient id={brassGrad} x1="0" y1="0" x2="44" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="35%" stopColor="#facc15" />
          <stop offset="70%" stopColor="#b45309" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>

        {/* Emerald-tinted Frosted Glass */}
        <linearGradient id={glassGrad} x1="10" y1="28" x2="34" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ecfdf5" stopOpacity="0.45" />
          <stop offset="50%" stopColor="#34d399" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#047857" stopOpacity="0.45" />
        </linearGradient>

        {/* Flame Gradients */}
        <linearGradient id={outerFlame} x1="22" y1="52" x2="22" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#059669" stopOpacity="0.7" />
          <stop offset="20%" stopColor="#f59e0b" />
          <stop offset="70%" stopColor="#facc15" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>

        <linearGradient id={coreFlame} x1="22" y1="50" x2="22" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#fffbeb" />
        </linearGradient>
      </defs>

      {/* 1. Ambient Warm Halo */}
      <circle cx="22" cy="42" r="22" fill={`url(#${flameGlow})`} />

      {/* 2. Top Hanging Ring & Chain */}
      <circle cx="22" cy="6" r="4.5" stroke={`url(#${brassGrad})`} strokeWidth="1.4" fill="none" />
      <line x1="22" y1="10" x2="22" y2="15" stroke={`url(#${brassGrad})`} strokeWidth="1.5" />

      {/* 3. Lantern Dome with Islamic Finial */}
      <path
        d="M12 25 C12 18 16 15 22 15 C28 15 32 18 32 25 Z"
        fill={`url(#${brassGrad})`}
        stroke="#fef08a"
        strokeWidth="0.5"
      />
      {/* Pierced Cutout Pattern in Dome */}
      <circle cx="22" cy="20" r="1.5" fill="#021b14" />
      <circle cx="17" cy="22" r="1" fill="#021b14" />
      <circle cx="27" cy="22" r="1" fill="#021b14" />

      {/* 4. Hexagonal Glass Body with Emerald Tint */}
      <path
        d="M12 25 L8 36 L12 56 L32 56 L36 36 L32 25 Z"
        fill={`url(#${glassGrad})`}
        stroke={`url(#${brassGrad})`}
        strokeWidth="1.2"
      />

      {/* 5. Flickering Inner Flame */}
      <g className="lantern-flicker">
        <path
          d="M22 35 C25 41 26 44 26 47 C26 51 24.2 53 22 53 C19.8 53 18 51 18 47 C18 44 19 41 22 35 Z"
          fill={`url(#${outerFlame})`}
        />
        <path
          d="M22 41 C23.5 44 24 46 24 48 C24 50 23 51 22 51 C21 51 20 50 20 48 C20 46 20.5 44 22 41 Z"
          fill={`url(#${coreFlame})`}
        />
      </g>

      {/* 6. Geometric Lattice Ribs */}
      <line x1="22" y1="25" x2="22" y2="56" stroke={`url(#${brassGrad})`} strokeWidth="1.2" />
      <line x1="8" y1="36" x2="36" y2="36" stroke={`url(#${brassGrad})`} strokeWidth="0.8" strokeOpacity="0.75" />

      {/* 7. Lantern Base Plinth & Finial */}
      <path
        d="M10 56 L14 64 L30 64 L34 56 Z"
        fill={`url(#${brassGrad})`}
        stroke="#fef08a"
        strokeWidth="0.5"
      />
      <circle cx="22" cy="67" r="2.5" fill={`url(#${brassGrad})`} />
      <path d="M22 69 L22 74" stroke={`url(#${brassGrad})`} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
