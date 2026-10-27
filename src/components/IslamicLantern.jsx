import { useId } from 'react';
import { motion } from 'framer-motion';

/**
 * Royal Islamic Hanging Lantern (Fanoos)
 * Mastercrafted with Islamic Imperial Emerald stained glass, 24k polished gold filigree,
 * Moorish arabesque tracery, glowing emerald-jade sanctuary aura, and soft pendulum sway.
 */
export default function IslamicLantern({
  className = '',
  height = 96,
  swingDelay = 0,
  swingDuration = 5.2,
  side = 'center',
}) {
  const rawId = useId();
  const id = rawId.replace(/[^a-zA-Z0-9]/g, '');

  const goldGrad = `gold-grad-${id}`;
  const goldDark = `gold-dark-${id}`;
  const goldBright = `gold-bright-${id}`;
  const emeraldDome = `emerald-dome-${id}`;
  const emeraldGlow = `emerald-glow-${id}`;
  const emeraldGlassLeft = `emerald-glass-left-${id}`;
  const emeraldGlassCenter = `emerald-glass-center-${id}`;
  const emeraldGlassRight = `emerald-glass-right-${id}`;
  const emeraldGem = `emerald-gem-${id}`;
  const flameGrad = `flame-grad-${id}`;
  const glassReflect = `glass-reflect-${id}`;

  // Swing motion rotation angles based on side
  const swingAngles =
    side === 'left'
      ? [-2.8, 2.2, -2.8]
      : side === 'right'
      ? [2.2, -2.8, 2.2]
      : [-2.5, 2.5, -2.5];

  return (
    <motion.div
      animate={{ rotate: swingAngles }}
      transition={{
        duration: swingDuration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: swingDelay,
      }}
      style={{ transformOrigin: 'top center' }}
      className={`relative inline-flex items-center justify-center transform-gpu will-change-transform ${className}`}
    >
      {/* Ambient Pulsing Luminous Emerald Halo */}
      <motion.div
        animate={{
          scale: [0.95, 1.15, 0.95],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: swingDelay,
        }}
        className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-34 sm:h-34 rounded-full pointer-events-none blur-xl bg-gradient-to-tr from-[#047857]/55 via-[#10b981]/40 to-[#34d399]/25"
      />

      <svg
        viewBox="0 0 64 128"
        className="relative transform-gpu overflow-visible drop-shadow-[0_4px_16px_rgba(0,0,0,0.65)]"
        fill="none"
        aria-hidden="true"
        focusable="false"
        style={{ height, width: 'auto' }}
      >
        <defs>
          {/* 24k Royal Polished Gold Gradient for Filigree */}
          <linearGradient id={goldGrad} x1="0" y1="0" x2="64" y2="128" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="15%" stopColor="#fffbeb" />
            <stop offset="35%" stopColor="#fde047" />
            <stop offset="60%" stopColor="#eab308" />
            <stop offset="85%" stopColor="#ca8a04" />
            <stop offset="100%" stopColor="#854d0e" />
          </linearGradient>

          {/* Deep Antique Brass Accent */}
          <linearGradient id={goldDark} x1="0" y1="20" x2="64" y2="110" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#eab308" />
            <stop offset="40%" stopColor="#a16207" />
            <stop offset="75%" stopColor="#713f12" />
            <stop offset="100%" stopColor="#3f2206" />
          </linearGradient>

          {/* Brilliant Golden Edge Highlight */}
          <linearGradient id={goldBright} x1="16" y1="0" x2="48" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#eab308" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#ca8a04" />
          </linearGradient>

          {/* Imperial Emerald Mosque Dome Enamel */}
          <linearGradient id={emeraldDome} x1="16" y1="35" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#064e3b" />
            <stop offset="30%" stopColor="#047857" />
            <stop offset="70%" stopColor="#065f46" />
            <stop offset="100%" stopColor="#022c22" />
          </linearGradient>

          {/* Luminous Emerald-Mint Radial Light Halo */}
          <radialGradient id={emeraldGlow} cx="32" cy="73" r="26" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="20%" stopColor="#d1fae5" stopOpacity="0.9" />
            <stop offset="45%" stopColor="#34d399" stopOpacity="0.75" />
            <stop offset="75%" stopColor="#059669" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#022c22" stopOpacity="0" />
          </radialGradient>

          {/* Faceted Emerald Stained Glass Gradients */}
          <linearGradient id={emeraldGlassLeft} x1="14" y1="52" x2="26" y2="88" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#047857" stopOpacity="0.6" />
          </linearGradient>

          <linearGradient id={emeraldGlassCenter} x1="24" y1="52" x2="40" y2="88" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#a7f3d0" stopOpacity="0.65" />
            <stop offset="35%" stopColor="#34d399" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#059669" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#064e3b" stopOpacity="0.65" />
          </linearGradient>

          <linearGradient id={emeraldGlassRight} x1="40" y1="52" x2="50" y2="88" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#059669" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#022c22" stopOpacity="0.65" />
          </linearGradient>

          {/* Living Candle Flame Gradient (Warm core contrasting emerald glass) */}
          <linearGradient id={flameGrad} x1="32" y1="78" x2="32" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="25%" stopColor="#f59e0b" />
            <stop offset="70%" stopColor="#fef08a" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>

          {/* Faceted Glass Specular Reflection */}
          <linearGradient id={glassReflect} x1="20" y1="56" x2="44" y2="92" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
            <stop offset="40%" stopColor="#ffffff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.25" />
          </linearGradient>

          {/* Royal Emerald Gemstone Droplet */}
          <linearGradient id={emeraldGem} x1="28" y1="108" x2="36" y2="121" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6ee7b7" />
            <stop offset="35%" stopColor="#10b981" />
            <stop offset="75%" stopColor="#059669" />
            <stop offset="100%" stopColor="#022c22" />
          </linearGradient>
        </defs>

        {/* 1. SUSPENSION CHAIN & TOP HARDWARE */}
        {/* Chain Links from top ceiling */}
        <g stroke={`url(#${goldGrad})`} strokeWidth="1.6" fill="none">
          <ellipse cx="32" cy="3" rx="2.4" ry="3.5" />
          <ellipse cx="32" cy="8" rx="2.4" ry="3.5" />
          <ellipse cx="32" cy="13" rx="2.4" ry="3.5" />
          <ellipse cx="32" cy="18" rx="2.4" ry="3.5" />
        </g>
        {/* Top Heavy Ring Mount */}
        <circle cx="32" cy="22" r="4.2" stroke={`url(#${goldBright})`} strokeWidth="1.8" fill="none" />
        <circle cx="32" cy="22" r="2" fill={`url(#${goldDark})`} />

        {/* 2. CRESCENT MOON FINIAL CROWN */}
        <g transform="translate(32, 27.5)">
          {/* Tiny Crescent Finial atop Dome */}
          <path
            d="M 0 -4.5 C -1.8 -4.5 -3 -3 -3 -1.2 C -3 0.8 -1.5 2.2 0.4 2.4 C -0.8 1.8 -1.4 0.6 -1.4 -0.6 C -1.4 -2.2 -0.2 -3.6 1.4 -3.8 C 0.9 -4.3 0.5 -4.5 0 -4.5 Z"
            fill={`url(#${goldBright})`}
          />
          <circle cx="0" cy="2" r="1.5" fill={`url(#${goldBright})`} />
        </g>

        {/* 3. ORNATE MOSQUE DOME ROOF (Imperial Emerald & Gold) */}
        {/* Stepped Dome Spire Collar */}
        <rect x="29" y="30.5" width="6" height="2" rx="0.8" fill={`url(#${goldBright})`} />
        <rect x="27.5" y="32.5" width="9" height="2.5" rx="1" fill={`url(#${goldGrad})`} />

        {/* Moorish Cupola / Onion Dome with Emerald Enamel Sheen */}
        <path
          d="M 16 48 C 16 38 23 35 32 35 C 41 35 48 38 48 48 Z"
          fill={`url(#${emeraldDome})`}
          stroke={`url(#${goldBright})`}
          strokeWidth="1.2"
        />
        {/* Inner Dome Embossed Golden Ribs */}
        <path
          d="M 21 48 C 21 40 26 38 32 38 C 38 38 43 40 43 48"
          stroke={`url(#${goldGrad})`}
          strokeWidth="0.9"
          fill="none"
        />

        {/* Intricate Pierced Cutouts in Dome (Illuminated emerald light shining through) */}
        <g fill={`url(#${emeraldGlow})`}>
          {/* Center Pierced Diamond Star */}
          <polygon points="32,40 33.5,42.5 36,42.5 34,44.2 34.8,47 32,45.2 29.2,47 30,44.2 28,42.5 30.5,42.5" />
          {/* Side Pierced Motifs */}
          <circle cx="24" cy="44" r="1.5" />
          <circle cx="40" cy="44" r="1.5" />
          <circle cx="28" cy="42" r="1.1" />
          <circle cx="36" cy="42" r="1.1" />
        </g>

        {/* Dome Lower Cornice with Filigree Eaves */}
        <path
          d="M 13 48 L 51 48 L 53 52 L 11 52 Z"
          fill={`url(#${goldGrad})`}
          stroke={`url(#${goldBright})`}
          strokeWidth="0.8"
        />
        {/* Tiny Hanging Gold Bead Accents under Cornice */}
        <circle cx="15" cy="54" r="1.2" fill={`url(#${goldBright})`} />
        <circle cx="23.5" cy="54" r="1.2" fill={`url(#${goldBright})`} />
        <circle cx="32" cy="54" r="1.4" fill={`url(#${goldBright})`} />
        <circle cx="40.5" cy="54" r="1.2" fill={`url(#${goldBright})`} />
        <circle cx="49" cy="54" r="1.2" fill={`url(#${goldBright})`} />

        {/* 4. MAIN LANTERN CAGE & GLOWING EMERALD GLASS CHAMBER */}
        {/* Backdrop Glow Behind Glass */}
        <circle cx="32" cy="73" r="22" fill={`url(#${emeraldGlow})`} opacity="0.92" />

        {/* Outer Dark Sanctuary Backing */}
        <path
          d="M 14 52 L 50 52 L 44 88 L 20 88 Z"
          fill="#022c22"
          fillOpacity="0.5"
        />

        {/* Left Angled Emerald Glass Facet */}
        <path
          d="M 14 52 L 24 52 L 26 88 L 20 88 Z"
          fill={`url(#${emeraldGlassLeft})`}
          stroke={`url(#${goldDark})`}
          strokeWidth="0.8"
        />
        {/* Center Main Radiant Emerald Glass Facet */}
        <path
          d="M 24 52 L 40 52 L 38 88 L 26 88 Z"
          fill={`url(#${emeraldGlassCenter})`}
          stroke={`url(#${goldGrad})`}
          strokeWidth="1"
        />
        {/* Right Angled Emerald Glass Facet */}
        <path
          d="M 40 52 L 50 52 L 44 88 L 38 88 Z"
          fill={`url(#${emeraldGlassRight})`}
          stroke={`url(#${goldDark})`}
          strokeWidth="0.8"
        />

        {/* 5. SACRED CANDLE & LIVING FLAME */}
        {/* Wax Candle Base */}
        <rect x="29" y="79" width="6" height="8" rx="1.5" fill="#f0fdf4" stroke="#10b981" strokeWidth="0.5" />
        <ellipse cx="32" cy="79" rx="3" ry="1" fill="#ffffff" />
        {/* Candle Wick */}
        <line x1="32" y1="79" x2="32" y2="76" stroke="#064e3b" strokeWidth="0.9" strokeLinecap="round" />

        {/* Animated Inner Flickering Flame */}
        <motion.g
          animate={{
            scaleY: [1, 1.15, 0.92, 1.08, 1],
            scaleX: [1, 0.94, 1.06, 0.97, 1],
            opacity: [0.92, 1, 0.88, 1, 0.92],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ transformOrigin: '32px 76px' }}
        >
          {/* Flame Radiant Outer Aura (Mint & Amber) */}
          <ellipse cx="32" cy="71" rx="8" ry="11" fill={`url(#${flameGrad})`} opacity="0.45" />
          {/* Main Teardrop Flame */}
          <path
            d="M 32 63 C 35 68 36.5 71 36.5 74 C 36.5 76.5 34.5 78.5 32 78.5 C 29.5 78.5 27.5 76.5 27.5 74 C 27.5 71 29 68 32 63 Z"
            fill={`url(#${flameGrad})`}
          />
          {/* White-Hot Flame Core */}
          <ellipse cx="32" cy="73.5" rx="2" ry="3.5" fill="#ffffff" />
        </motion.g>

        {/* 6. MOROCCAN ARABESQUE FILIGREE TRACERY (Gold on Emerald Glass) */}
        {/* Moorish Horseshoe Arches over Windows */}
        <path
          d="M 16 66 C 16 57 20 54 24 54 C 28 54 32 57 32 66"
          stroke={`url(#${goldGrad})`}
          strokeWidth="1.1"
          fill="none"
        />
        <path
          d="M 32 66 C 32 57 36 54 40 54 C 44 54 48 57 48 66"
          stroke={`url(#${goldGrad})`}
          strokeWidth="1.1"
          fill="none"
        />

        {/* Central Arabesque 8-Point Star Medallion */}
        <g transform="translate(32, 71)" stroke={`url(#${goldGrad})`} strokeWidth="0.8" fill="none">
          <rect x="-4.2" y="-4.2" width="8.4" height="8.4" rx="1" />
          <rect x="-4.2" y="-4.2" width="8.4" height="8.4" rx="1" transform="rotate(45)" />
          <circle cx="0" cy="0" r="2.2" stroke={`url(#${goldBright})`} strokeWidth="0.8" />
        </g>

        {/* Vertical Structural Ribs with 3D Gold Sheen */}
        <line x1="24" y1="52" x2="26" y2="88" stroke={`url(#${goldBright})`} strokeWidth="1.6" />
        <line x1="40" y1="52" x2="38" y2="88" stroke={`url(#${goldBright})`} strokeWidth="1.6" />
        <line x1="14" y1="52" x2="20" y2="88" stroke={`url(#${goldDark})`} strokeWidth="1.3" />
        <line x1="50" y1="52" x2="44" y2="88" stroke={`url(#${goldDark})`} strokeWidth="1.3" />

        {/* Diamond Lattice Fine Inlay */}
        <g stroke={`url(#${goldDark})`} strokeWidth="0.6" strokeOpacity="0.75" fill="none">
          <line x1="26" y1="62" x2="38" y2="76" />
          <line x1="26" y1="76" x2="38" y2="62" />
          <line x1="16" y1="58" x2="25" y2="69" />
          <line x1="48" y1="58" x2="39" y2="69" />
        </g>

        {/* Glossy Beveled Glass Specular Sheen (Curved Reflection) */}
        <path
          d="M 18 54 L 30 54 L 26 84 L 21 84 Z"
          fill={`url(#${glassReflect})`}
          pointerEvents="none"
        />

        {/* 7. ORNATE STEPPED BRASS BASE & PLINTH */}
        {/* Base Eaves Molding */}
        <path
          d="M 19 88 L 45 88 L 47 92 L 17 92 Z"
          fill={`url(#${goldGrad})`}
          stroke={`url(#${goldBright})`}
          strokeWidth="0.8"
        />
        {/* Engraved Emerald Inlay Band */}
        <rect x="20" y="92" width="24" height="4.5" fill={`url(#${emeraldDome})`} stroke={`url(#${goldBright})`} strokeWidth="0.8" />
        {/* Repeating tiny gold dots in band */}
        <circle cx="23" cy="94.2" r="0.9" fill={`url(#${goldBright})`} />
        <circle cx="27.5" cy="94.2" r="0.9" fill={`url(#${goldBright})`} />
        <circle cx="32" cy="94.2" r="0.9" fill={`url(#${goldBright})`} />
        <circle cx="36.5" cy="94.2" r="0.9" fill={`url(#${goldBright})`} />
        <circle cx="41" cy="94.2" r="0.9" fill={`url(#${goldBright})`} />

        {/* Base Pedestal Plinth */}
        <path
          d="M 22 96.5 L 42 96.5 L 39 101 L 25 101 Z"
          fill={`url(#${goldGrad})`}
          stroke={`url(#${goldBright})`}
          strokeWidth="0.9"
        />

        {/* 8. ROYAL EMERALD GEMSTONE DROPLET FINIAL */}
        {/* Lower Suspension Ring */}
        <circle cx="32" cy="103" r="2.2" stroke={`url(#${goldBright})`} strokeWidth="1.2" fill="none" />
        {/* Connector Link */}
        <line x1="32" y1="105.2" x2="32" y2="108" stroke={`url(#${goldGrad})`} strokeWidth="1.4" strokeLinecap="round" />
        {/* Faceted Emerald Teardrop Gem */}
        <path
          d="M 32 108 C 30 111 28.5 113.5 28.5 116 C 28.5 118.8 30 121 32 121 C 34 121 35.5 118.8 35.5 116 C 35.5 113.5 34 111 32 108 Z"
          fill={`url(#${emeraldGem})`}
          stroke={`url(#${goldBright})`}
          strokeWidth="0.9"
        />
        {/* Mint-White Facet Reflection in Jewel */}
        <path
          d="M 32 109 L 30 115.5 L 32 119.5"
          stroke="#a7f3d0"
          strokeWidth="0.8"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="32" cy="122.5" r="1.2" fill={`url(#${goldBright})`} />
      </svg>
    </motion.div>
  );
}
