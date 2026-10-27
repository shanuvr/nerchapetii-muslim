import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Share2, HeartHandshake } from 'lucide-react';

/* Mosque collection UPI handle */
const MOSQUE_UPI_ID = 'cheramanmasjid@upi';

const makeReceipt = () =>
  `MB-${Date.now().toString(36).slice(-4).toUpperCase()}${Math.random()
    .toString(36)
    .slice(2, 5)
    .toUpperCase()}`;

const formatStamp = (d) =>
  d.toLocaleString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });


/**
 * Blessed Quranic Verse Sanctuary Card (Stationary)
 * Elegant, compact & semi-transparent container highlighting the background
 * Only Malayalam text with Arabic reference pill for Surah Al-Baqarah 2:261
 */
function HolyMasjidCard() {
  return (
    <div className="relative w-full max-w-[330px] mx-auto flex flex-col items-center justify-center text-center rounded-2xl sm:rounded-3xl bg-[#01140e]/30 border border-emerald-400/25 py-3 px-3.5 sm:py-3.5 sm:px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_28px_rgba(0,0,0,0.35)] backdrop-blur-[5px] select-none">
      {/* Top Pill Badge */}
      <div className="relative z-10 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f5c253]/15 border border-[#f5c253]/35 text-[#fde68a] text-[10px] sm:text-[10.5px] font-bold font-malayalam shadow-xs mb-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#f5c253] animate-pulse shadow-[0_0_6px_#f5c253]" />
        <span>വിശുദ്ധ ഖുർആൻ സൂക്തം</span>
      </div>

      {/* Holy Islamic Crescent Symbol */}
      <div className="relative z-10 text-[#f5c253] text-sm my-0.5 font-amiri drop-shadow-[0_0_8px_rgba(245,195,88,0.7)] select-none">
        ☪
      </div>

      {/* Malayalam Translation (Only Malayalam for the verse) */}
      <p className="relative z-10 font-malayalam text-[11.5px] sm:text-[12.5px] text-white font-medium leading-relaxed px-1 my-1 drop-shadow-[0_1px_6px_rgba(0,0,0,0.95)] max-w-[315px]">
        &ldquo;അല്ലാഹുവിന്റെ മാർഗ്ഗത്തിൽ ധനം ചിലവഴിക്കുന്നവരുടെ ഉപമ ഒരു ധാന്യമണി പോലെയാണ്; അത് ഏഴ് കതിരുകൾ മുളപ്പിച്ചു, ഓരോ കതിരിലും നൂറ് ധാന്യമണികൾ ഉണ്ടാകുകയും ചെയ്യുന്നു. അല്ലാഹു താൻ ഉദ്ദേശിക്കുന്നവർക്ക് ഇരട്ടിയാക്കി നൽകുന്നു.&rdquo;
      </p>

      {/* Bottom Reference Pill (Arabic for Surah Al-Baqarah 2:261) */}
      <div className="relative z-10 mt-2 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#f5c253]/15 border border-[#f5c253]/35 text-[#fde68a] shadow-xs">
        <span className="w-1.5 h-1.5 rounded-full bg-[#f5c253]" />
        <span className="font-amiri text-[12.5px] sm:text-[13.5px] font-bold tracking-wide leading-none pt-0.5" dir="rtl">
          سورة البقرة 2:261
        </span>
      </div>
    </div>
  );
}

export default function Third({
  onBack,
  onReset,
  amount = 0,
  mosqueName = "ചേരമാൻ ജുമാ മസ്ജിദ്",
}) {
  const [receipt] = useState(makeReceipt);
  const [paidAt] = useState(() => new Date());

  const share = async () => {
    const text = `I offered ₹${amount} Sadaqah at ${mosqueName} through Palli Bhandaram. Receipt ${receipt}. May Allah accept all good deeds!`;
    try {
      if (navigator.share) {
        await navigator.share({ title: 'Palli Bhandaram Offering', text });
        return;
      }
      await navigator.clipboard.writeText(text);
    } catch {
      // User cancelled
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className="relative w-full h-full flex flex-col justify-between items-center p-3.5 sm:p-5 overflow-hidden gap-2 transform-gpu"
    >
      {/* 1. Top Bar */}
      <div className="w-full flex items-center justify-between z-10 shrink-0 pt-0.5">
        <button
          onClick={onBack}
          aria-label="Back"
          className="w-9 h-9 rounded-full bg-emerald-500/15 text-emerald-200 border border-emerald-400/30 backdrop-blur-md flex items-center justify-center cursor-pointer transition-colors hover:bg-emerald-500/25 active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        <div className="w-1.5 h-1.5 rounded-full bg-[#f5c253] shadow-[0_0_8px_#f5c253]" />

        <div className="w-9 h-9 rounded-full bg-emerald-500/15 border border-emerald-400/30 backdrop-blur-md flex items-center justify-center text-emerald-300 font-amiri text-lg">
          ☪
        </div>
      </div>

      {/* 2. Top Blessing Header */}
      <div className="relative z-10 w-full flex flex-col items-center px-1 shrink-0 -mt-0.5">
        <motion.p
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="font-malayalam font-semibold text-center text-xs sm:text-[13.5px] leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] max-w-[320px]"
        >
          അല്ലാഹു നിങ്ങളെ സമൃദ്ധമായി അനുഗ്രഹിക്കട്ടെ
        </motion.p>
      </div>

      {/* 3. Sanctuary Stationary Verse Card */}
      <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center py-2 px-1">
        <HolyMasjidCard />
      </div>

      {/* 4. Receipt Breakdown Card (Dark Glassmorphic, matching design) */}
      <div className="relative z-10 w-full shrink-0">
        <div className="w-full overflow-hidden rounded-2xl bg-[#011812]/70 text-white border border-emerald-400/30 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-md p-3 sm:p-3.5">
          {/* Header Row */}
          <div className="flex items-center gap-2.5 pb-2.5 border-b border-emerald-500/20">
            <div className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
              <HeartHandshake className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs sm:text-[13px] font-bold text-white font-malayalam leading-tight">
                {mosqueName}
              </p>
              <p className="text-[7.5px] sm:text-[8px] uppercase tracking-[0.22em] text-emerald-300 font-semibold mt-0.5">
                NERCHAPETTI · DIGITAL OFFERING
              </p>
            </div>
          </div>

          {/* Total Offering Row */}
          <div className="flex items-center justify-between py-1.5">
            <span className="text-[9px] uppercase tracking-[0.2em] text-emerald-200/75 font-semibold">
              TOTAL OFFERING
            </span>
            <span className="font-cinzel font-bold text-xl sm:text-2xl text-white tabular-nums flex items-baseline">
              <span className="text-sm sm:text-base text-[#f5c253] mr-0.5 font-bold">₹</span>
              {amount}
            </span>
          </div>

          {/* Paid To Row */}
          <div className="flex items-center justify-between py-1 border-t border-emerald-500/15">
            <span className="text-[8.5px] uppercase tracking-[0.2em] text-emerald-200/70 font-semibold">
              PAID TO
            </span>
            <span className="truncate font-mono text-[10px] sm:text-[10.5px] font-medium text-emerald-200">
              {MOSQUE_UPI_ID}
            </span>
          </div>

          {/* Receipt Number Row */}
          <div className="flex items-center justify-between gap-2 py-1 border-t border-emerald-500/15">
            <span className="text-[8.5px] uppercase tracking-[0.2em] text-emerald-200/70 font-semibold">
              RECEIPT
            </span>
            <span className="truncate font-mono text-[9px] sm:text-[9.5px] text-emerald-300/90 tracking-wide">
              {receipt} · {formatStamp(paidAt)}
            </span>
          </div>
        </div>
      </div>

      {/* 5. Bottom Actions */}
      <div className="relative z-10 w-full shrink-0 flex items-center gap-2 pt-0.5">
        <motion.button
          onClick={onReset}
          whileTap={{ scale: 0.98 }}
          className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 text-white font-bold font-malayalam text-sm sm:text-base shadow-[0_6px_24px_rgba(16,185,129,0.45)] hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer"
        >
          മറ്റൊരു സമർപ്പണം
        </motion.button>
        <motion.button
          onClick={share}
          whileTap={{ scale: 0.92 }}
          aria-label="Share offering blessing"
          className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-200 border border-emerald-400/35 backdrop-blur-md hover:bg-emerald-500/25 active:scale-95 transition-all flex items-center justify-center cursor-pointer shrink-0"
        >
          <Share2 className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
}
