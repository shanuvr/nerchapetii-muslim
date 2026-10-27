import { useEffect } from 'react';
import { motion } from 'framer-motion';
import HilalCrescent from '../components/HilalCrescent';
import IslamicLantern from '../components/IslamicLantern';
import { MONEY } from '../data/money';
import { playPrayerChime } from '../utils/audio';

export const FIRST_SCREEN_DURATION = 3600;

export default function First({
  mosqueName = "ചേരമാൻ ജുമാ മസ്ജിദ്",
  mosqueNameEn = "Cheraman Juma Masjid",
  onComplete,
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, FIRST_SCREEN_DURATION);
    return () => clearTimeout(timer);
  }, [onComplete]);

  // Preload screen 2 assets silently in background
  useEffect(() => {
    const preloadAssets = () => {
      const urls = Object.values(MONEY).map((m) => m.src);
      urls.forEach((url) => {
        const img = new Image();
        img.src = url;
      });
    };

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const handle = window.requestIdleCallback(preloadAssets, { timeout: 1500 });
      return () => window.cancelIdleCallback(handle);
    } else {
      const timer = setTimeout(preloadAssets, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDevotionalTap = () => {
    playPrayerChime();
    if (onComplete) onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      onClick={handleDevotionalTap}
      className="relative w-full h-full flex flex-col justify-between items-center px-4 py-4 sm:py-5 text-center cursor-pointer select-none overflow-hidden transform-gpu will-change-transform"
    >
      {/* 1. Mosque Header Badge */}
      <motion.div
        initial={{ y: -14, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.08, duration: 0.45 }}
        className="w-full flex flex-col items-center z-10 pt-0.5 shrink-0"
      >
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-[#e5a93c]/50 shadow-[0_4px_16px_rgba(0,0,0,0.35)] backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
          <p className="font-malayalam text-xs sm:text-[13px] font-bold text-[#064e3b]">
            {mosqueName}
          </p>
        </div>
        <p className="text-[9.5px] uppercase tracking-[0.22em] text-[#f5c253] font-semibold mt-1 drop-shadow-xs">
          {mosqueNameEn}
        </p>
      </motion.div>

      {/* 2. Center Sacred Sanctuary: Hilal, Bismillah & Title */}
      <div className="flex flex-col items-center justify-center flex-1 min-h-0 z-10 w-full py-2">
        {/* Sacred Crescent Assembly */}
        <div className="relative flex flex-col items-center mb-3">
          {/* Luminous Royal Emerald & Gold Aura */}
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-gradient-to-tr from-[#059669]/40 via-[#10b981]/25 to-[#f5c253]/35 blur-2xl pointer-events-none transform-gpu"
          />

          <div className="relative flex items-center justify-center">
            {/* Left Hanging Royal Lantern */}
            <motion.div
              initial={{ opacity: 0, y: -24, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -left-11 sm:-left-14 -top-3 z-10 pointer-events-none"
            >
              <IslamicLantern height={98} side="left" swingDelay={0} />
            </motion.div>

            {/* Hilal Crescent */}
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 220, damping: 20, delay: 0.05 }}
              className="relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center z-20"
            >
              <HilalCrescent className="w-full h-full drop-shadow-[0_0_28px_rgba(245,195,88,0.65)]" />
            </motion.div>

            {/* Right Hanging Royal Lantern */}
            <motion.div
              initial={{ opacity: 0, y: -24, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.22, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -right-11 sm:-right-14 -top-3 z-10 pointer-events-none"
            >
              <IslamicLantern height={98} side="right" swingDelay={1.3} />
            </motion.div>
          </div>

          <div className="relative w-40 sm:w-48 h-2 rounded-full bg-gradient-to-r from-transparent via-[#f5c253]/60 to-transparent blur-[1px] mt-1" />
        </div>

        {/* Bismillah Calligraphy */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.45 }}
          className="mb-2"
        >
          <span className="font-amiri text-xl sm:text-2xl text-white drop-shadow-[0_2px_14px_rgba(245,195,88,0.55)] font-bold">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </span>
        </motion.div>

        {/* Main Title & Tagline */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.22, duration: 0.45 }}
          className="flex flex-col items-center mb-3"
        >
          <div className="flex items-center justify-center gap-2.5">
            <span className="h-[1.5px] w-6 bg-gradient-to-r from-transparent via-[#f5c253] to-[#f5c253]" />
            <h1 className="text-2xl sm:text-3xl font-malayalam font-extrabold text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)] tracking-wide">
              പള്ളി ഭണ്ഡാരം
            </h1>
            <span className="h-[1.5px] w-6 bg-gradient-to-l from-transparent via-[#f5c253] to-[#f5c253]" />
          </div>
          <p className="font-cinzel text-xs font-bold tracking-[0.22em] text-[#f5c253] mt-0.5 uppercase drop-shadow-xs">
            Digital Sadaqah
          </p>
        </motion.div>

        {/* Single Shortened Quranic Verse Line */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.45 }}
          className="px-4 py-1.5 rounded-full bg-[#033624]/85 border border-[#f5c253]/45 shadow-lg backdrop-blur-md"
        >
          <p className="font-malayalam text-xs font-semibold text-[#ecfdf5]">
            &ldquo;നിങ്ങൾ ചെയ്യുന്ന ദാനം അല്ലാഹു അറിയുന്നു&rdquo;
          </p>
        </motion.div>
      </div>

      {/* 3. Action Call & Progress */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.35 }}
        className="w-full z-20 flex flex-col items-center gap-2 shrink-0 pb-1"
      >
        {/* Prominent, Clean CTA Button */}
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="px-6 py-2 rounded-full bg-gradient-to-r from-[#047857] via-[#059669] to-[#047857] border-2 border-[#f5c253] text-white font-malayalam text-xs sm:text-[13px] font-bold shadow-[0_6px_22px_rgba(4,120,87,0.5),0_0_15px_rgba(245,195,88,0.3)]"
        >
          സദഖ സമർപ്പിക്കുക
        </motion.div>

        {/* Progress Countdown Line */}
        <div className="w-full max-w-[170px] h-[3px] rounded-full bg-[#f5c253]/25 overflow-hidden relative mt-1">
          <motion.div
            className="w-full h-full rounded-full bg-gradient-to-r from-[#059669] via-[#f5c253] to-white shadow-[0_0_8px_rgba(245,195,88,0.8)]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            style={{ transformOrigin: 'left center' }}
            transition={{ duration: FIRST_SCREEN_DURATION / 1000, ease: 'linear' }}
          />
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/45 border border-[#f5c253]/35 backdrop-blur-md shadow-md mt-0.5">
          <span className="font-malayalam text-[10px] font-bold text-[#f5c253] drop-shadow-xs">
            ഭണ്ഡാരം
          </span>
          <span className="text-[8px] text-[#f5c253]/60">•</span>
          <span className="text-[9.5px] font-medium tracking-wide text-white/90">
            by Programers
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}