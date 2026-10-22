/**
 * Authentic 3D Kerala Mosque Palli Bhandaram (Hundi Offering Chest)
 * Uses high-resolution realistic 3D hundi image with golden crescent finial,
 * carved brass Mihrab jali grill, and animated glowing coin slot.
 */
export default function MuslimBhandaramBox({ className = '', slotGlow = false }) {
  return (
    <div className={`relative w-full flex flex-col items-center select-none transform-gpu ${className}`}>
      {/* 3D Islamic Bhandaram / Hundi Chest */}
      <img
        src="/new-hundi.webp"
        alt="Mosque Palli Bhandaram offering chest"
        draggable="false"
        decoding="async"
        loading="eager"
        className="w-full h-auto object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.7)]"
      />

      {/* Dynamic Animated Slot Glow Flare */}
      {slotGlow && (
        <span
          className="absolute pointer-events-none rounded-full blur-[4px] transition-opacity duration-300"
          style={{
            top: '25.1%',
            left: '53.1%',
            transform: 'translate(-50%, -50%)',
            width: '20%',
            height: '7px',
            background:
              'radial-gradient(ellipse at center, rgba(255,255,255,0.95) 0%, rgba(52,211,153,0.85) 40%, rgba(16,185,129,0.4) 70%, transparent 100%)',
            boxShadow: '0 0 16px rgba(52,211,153,0.9), 0 0 28px rgba(250,204,21,0.6)',
          }}
        />
      )}
    </div>
  );
}
