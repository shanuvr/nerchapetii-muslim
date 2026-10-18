/**
 * Islamic Geometric Girih Rosette (8-pointed Khatam Star)
 * Serene, calm slow rotation providing spiritual depth without clutter or excessive motion
 */
export default function GirihPattern({ className = '' }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`spin-slow-serene select-none pointer-events-none transform-gpu will-change-transform ${className}`}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="girih-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0.25" />
          <stop offset="60%" stopColor="#10b981" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#047857" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="100" cy="100" r="95" fill="url(#girih-glow)" />

      {/* Outer Fine Geometric Rings */}
      <circle cx="100" cy="100" r="92" stroke="#10b981" strokeWidth="1.2" strokeOpacity="0.55" />
      <circle cx="100" cy="100" r="86" stroke="#f5c253" strokeWidth="0.85" strokeDasharray="3 4" strokeOpacity="0.6" />
      <circle cx="100" cy="100" r="76" stroke="#34d399" strokeWidth="0.8" strokeOpacity="0.45" />

      {/* 8-pointed Interlocking Star (Two Overlapping Squares rotated 45°) */}
      <g stroke="#10b981" strokeWidth="1.25" strokeOpacity="0.65" fill="none">
        <rect x="42" y="42" width="116" height="116" rx="2" />
        <rect x="42" y="42" width="116" height="116" rx="2" transform="rotate(45 100 100)" />
      </g>

      {/* 8 Sacred Mihrab Petals */}
      <g stroke="#f5c253" strokeWidth="1" strokeOpacity="0.65" fill="none">
        {[...Array(8)].map((_, i) => {
          const angle = (i * 360) / 8;
          return (
            <g key={i} transform={`rotate(${angle} 100 100)`}>
              <path d="M100 24 L108 52 L100 70 L92 52 Z" />
              <circle cx="100" cy="38" r="3" stroke="#34d399" strokeWidth="0.9" strokeOpacity="0.6" />
            </g>
          );
        })}
      </g>

      {/* Inner Central Rosette */}
      <circle cx="100" cy="100" r="28" stroke="#10b981" strokeWidth="1.2" strokeOpacity="0.55" />
      <polygon
        points="100,82 105,95 118,95 108,103 112,116 100,108 88,116 92,103 82,95 95,95"
        stroke="#fef08a"
        strokeWidth="1"
        strokeOpacity="0.75"
        fill="#fef08a"
        fillOpacity="0.12"
      />
      <circle cx="100" cy="100" r="3.5" fill="#fef08a" fillOpacity="0.85" />
    </svg>
  );
}
