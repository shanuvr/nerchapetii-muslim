import { useId } from 'react';

/**
 * Luminous Islamic Crescent Moon & Star (Hilal) with emerald celestial aura & royal gold sheen
 */
export default function HilalCrescent({ className = '' }) {
  const rawId = useId();
  const id = rawId.replace(/[^a-zA-Z0-9]/g, '');

  const goldGrad = `gold-grad-${id}`;
  const auraGlow = `aura-glow-${id}`;
  const rimGrad = `rim-grad-${id}`;
  const starGrad = `star-grad-${id}`;

  return (
    <svg
      viewBox="-20 -20 140 140"
      className={`transform-gpu ${className}`}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* Soft celestial emerald-jade aura */}
        <radialGradient id={auraGlow} cx="50" cy="50" r="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0.55" />
          <stop offset="45%" stopColor="#059669" stopOpacity="0.3" />
          <stop offset="75%" stopColor="#064e3b" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#021b14" stopOpacity="0" />
        </radialGradient>

        {/* Polished royal gold gradient */}
        <linearGradient id={goldGrad} x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="25%" stopColor="#fef08a" />
          <stop offset="60%" stopColor="#facc15" />
          <stop offset="85%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#92400e" />
        </linearGradient>

        {/* Golden rim edge */}
        <linearGradient id={rimGrad} x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#fef08a" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>

        {/* Five-pointed star gold gradient */}
        <linearGradient id={starGrad} x1="-10" y1="-10" x2="10" y2="10" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#fef08a" />
          <stop offset="80%" stopColor="#facc15" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>

      {/* 1. Ambient Celestial Emerald Halo */}
      <circle cx="50" cy="50" r="54" fill={`url(#${auraGlow})`} />

      {/* 2. Geometric Light Rays */}
      <g opacity="0.65" stroke="#6ee7b7" strokeWidth="0.75" strokeDasharray="1.5 2.5">
        <line x1="50" y1="2" x2="50" y2="12" />
        <line x1="50" y1="88" x2="50" y2="98" />
        <line x1="2" y1="50" x2="12" y2="50" />
        <line x1="88" y1="50" x2="98" y2="50" />
        <line x1="16" y1="16" x2="23" y2="23" />
        <line x1="84" y1="16" x2="77" y2="23" />
        <line x1="16" y1="84" x2="23" y2="77" />
        <line x1="84" y1="84" x2="77" y2="77" />
      </g>

      {/* 3. Outer Sacred Geometric Ring */}
      <circle cx="50" cy="50" r="44" stroke="#10b981" strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray="3 3" />
      <circle cx="50" cy="50" r="41" stroke="#fef08a" strokeWidth="0.6" strokeOpacity="0.45" />

      {/* 4. Drop Shadow */}
      <path
        d="M50 14 C30 14 14 30 14 50 C14 70 30 86 50 86 C61 86 71 81 77.6 73 C62 76 45 64 45 46 C45 30 58 19 74 21 C67 16.6 59 14 50 14 Z"
        fill="#01140e"
        fillOpacity="0.6"
        transform="translate(1, 2)"
      />

      {/* 5. Main Golden Crescent (Hilal) */}
      <path
        d="M50 14 C30 14 14 30 14 50 C14 70 30 86 50 86 C61 86 71 81 77.6 73 C62 76 45 64 45 46 C45 30 58 19 74 21 C67 16.6 59 14 50 14 Z"
        fill={`url(#${goldGrad})`}
        stroke={`url(#${rimGrad})`}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />

      {/* 6. Sacred Emboss Line on Crescent */}
      <path
        d="M48 20 C34 22 22 35 22 50 C22 65 34 78 48 80"
        stroke="#ffffff"
        strokeWidth="1"
        strokeOpacity="0.75"
        strokeLinecap="round"
      />

      {/* 7. Illuminated Five-Pointed Star */}
      <g transform="translate(64, 42)">
        <circle cx="0" cy="0" r="10" fill="#facc15" fillOpacity="0.25" />
        <polygon
          points="0,-12 3.5,-3.7 11.4,-3.7 5,1 7.4,8.5 0,3.8 -7.4,8.5 -5,1 -11.4,-3.7 -3.5,-3.7"
          fill={`url(#${starGrad})`}
          stroke="#ffffff"
          strokeWidth="0.8"
        />
        <circle cx="0" cy="0" r="2.5" fill="#ffffff" />
      </g>
    </svg>
  );
}
