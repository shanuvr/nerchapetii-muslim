import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Share2, Maximize2, X, HeartHandshake } from 'lucide-react';

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
 * Blessed Quranic Verses on Sadaqah, Infaq & Divine Rewards
 * Curated with accurate Arabic calligraphy and Malayalam translation.
 */
const QURAN_VERSES = [
  {
    id: 1,
    arabic: "مَّثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ فِي كُلِّ سُنبُلَةٍ مِّائَةُ حَبَّةٍ ۗ وَاللَّهُ يُضَاعِفُ لِمَن يَشَاءُ",
    malayalam: "അല്ലാഹുവിന്റെ മാർഗ്ഗത്തിൽ ധനം ചിലവഴിക്കുന്നവരുടെ ഉപമ ഒരു ധാന്യമണി പോലെയാണ്; അത് 7 കതിരുകൾ മുളപ്പിച്ചു, ഓരോ കതിരിലും 100 ധാന്യമണികൾ. അല്ലാഹു താൻ ഉദ്ദേശിക്കുന്നവർക്ക് ഇരട്ടിയാക്കി നൽകുന്നു.",
    ref: "സൂറത്തുൽ ബഖറ 2:261",
    refEn: "Surah Al-Baqarah 2:261",
  },
  {
    id: 2,
    arabic: "الَّذِينَ يُنفِقُونَ أَمْوَالَهُم بِاللَّيْلِ وَالنَّهَارِ سِرًّا وَعَلَانِيَةً فَلَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ",
    malayalam: "രാവും പകലും രഹസ്യമായും പരസ്യമായും തങ്ങളുടെ ധനം ദാനം ചെയ്യുന്നവർക്ക് അവരുടെ രക്ഷിതാവിങ്കൽ അർഹമായ പ്രതിഫലമുണ്ട്. അവർക്ക് യാതൊരു ഭയവുമില്ല, അവർ ദുഃഖിക്കേണ്ടി വരികയുമില്ല.",
    ref: "സൂറത്തുൽ ബഖറ 2:274",
    refEn: "Surah Al-Baqarah 2:274",
  },
  {
    id: 3,
    arabic: "وَمَا أَنفَقْتُم مِّن شَيْءٍ فَهُوَ يُخْلِفُهُ ۖ وَهُوَ خَيْرُ الرَّازِقِينَ",
    malayalam: "നിങ്ങൾ എന്തൊന്ന് ചിലവഴിച്ചാലും അല്ലാഹു അതിന് പകരം നൽകുന്നതാണ്. അവൻ ഉപജീവനം നൽകുന്നവരിൽ ഏറ്റവും ഉത്തമനാകുന്നു.",
    ref: "സൂറഃ സബഅ് 34:39",
    refEn: "Surah Saba 34:39",
  },
  {
    id: 4,
    arabic: "إِنَّ الْمُصَّدِّقِينَ وَالْمُصَّدِّقَاتِ وَأَقْرَضُوا اللَّهَ قَرْضًا حَسَنًا يُضَاعَفُ لَهُمْ وَلَهُمْ أَجْرٌ كَرِيمٌ",
    malayalam: "തീർച്ചയായും ദാനധർമ്മങ്ങൾ ചെയ്യുന്ന പുരുഷന്മാർക്കും സ്ത്രീകൾക്കും അത് ഇരട്ടിയായി വർദ്ധിപ്പിച്ചു നൽകപ്പെടുന്നതാണ്; അവർക്ക് ഉദാരമായ പ്രതിഫലവുമുണ്ട്.",
    ref: "സൂറത്തുൽ ഹദീദ് 57:18",
    refEn: "Surah Al-Hadid 57:18",
  },
  {
    id: 5,
    arabic: "لَن تَنَالُوا الْبِرَّ حَتَّىٰ تُنفِقُوا مِمَّا تُحِبُّونَ ۚ وَمَا تُنفِقُوا مِن شَيْءٍ فَإِنَّ اللَّهَ بِهِ عَلِيمٌ",
    malayalam: "നിങ്ങൾ ഏറെ പ്രിയപ്പെടുന്നതിൽ നിന്ന് ദാനം ചെയ്യാതെ നിങ്ങൾ ഒരിക്കലും പുണ്യം പ്രാപിക്കുകയില്ല. നിങ്ങൾ എന്ത് ചിലവഴിച്ചാലും അല്ലാഹു അത് സൂക്ഷ്മമായി അറിയുന്നു.",
    ref: "സൂറത്തു ആലു ഇംറാൻ 3:92",
    refEn: "Surah Ali 'Imran 3:92",
  },
  {
    id: 6,
    arabic: "إِنَّ الَّذِينَ يَتْلُونَ كِتَابَ اللَّهِ وَأَقَامُوا الصَّلَاةَ وَأَنفَقُوا مِمَّا رَزَقْنَاهُمْ سِرًّا وَعَلَانِيَةً يَرْجُونَ تِجَارَةً لَّن تَبُورَ",
    malayalam: "അല്ലാഹുവിന്റെ ഗ്രന്ഥം പാരായണം ചെയ്യുകയും, നമസ്കാരം നിർവഹിക്കുകയും, നാം നൽകിയതിൽ നിന്ന് രഹസ്യമായും പരസ്യമായും ചിലവഴിക്കുകയും ചെയ്യുന്നവർ ഒരിക്കലും നഷ്ടപ്പെടാത്ത പുണ്യകച്ചവടമാണ് പ്രതീക്ഷിക്കുന്നത്.",
    ref: "സൂറത്തു ഫാത്വിർ 35:29",
    refEn: "Surah Fatir 35:29",
  },
];

/**
 * Holy Quran Verses Sanctuary Card
 * Continuous vertical crawl of blessed Quranic Ayahs in Arabic & Malayalam
 */
function HolyMasjidCard({ onExpand, mosqueName }) {
  return (
    <div className="relative w-full h-full flex flex-col items-center overflow-hidden rounded-2xl bg-[#011c13] border border-emerald-400/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_24px_rgba(0,0,0,0.8)] backdrop-blur-md">
      {/* Top Header Row */}
      <div className="w-full z-30 flex items-center justify-between px-3.5 py-2 bg-[#01140e]/95 border-b border-emerald-400/30 shrink-0">
        <span className="font-malayalam text-[11px] sm:text-[12px] font-bold text-emerald-100 tracking-wide">
          വിശുദ്ധ ഖുർആൻ സന്ദേശങ്ങൾ
        </span>

        {onExpand && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onExpand({
                title: 'വിശുദ്ധ ഖുർആൻ സൂക്തങ്ങൾ · Holy Verses',
                desc: 'Blessed verses from the Holy Quran on Sadaqah and Divine Rewards.',
                verses: QURAN_VERSES,
              });
            }}
            type="button"
            aria-label="Expand Verses"
            className="p-1 rounded-full bg-[#02251a]/90 border border-emerald-400/40 text-emerald-200 hover:text-white backdrop-blur-md shadow-sm active:scale-95 transition-all cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Main Vertical Crawl Window */}
      <div className="relative w-full flex-1 min-h-0 overflow-hidden bg-gradient-to-b from-[#021f15] via-[#032e20]/80 to-[#01140e] flex flex-col select-none">
        {/* Soft feather masks at top and bottom */}
        <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-[#01160f] via-[#01160f]/80 to-transparent pointer-events-none z-20" />
        <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-[#01120b] via-[#01120b]/90 to-transparent pointer-events-none z-20" />

        {/* Upward scrolling content track (seamless duplicated array) */}
        <div className="w-full flex flex-col items-center px-3 pt-6 pb-4 quran-news-crawl">
          {[...QURAN_VERSES, ...QURAN_VERSES].map((verse, index) => (
            <div
              key={`${verse.id}-${index}`}
              className="w-full flex flex-col items-center text-center my-3 transition-opacity duration-300"
            >
              {/* Surah Citation Badge */}
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f5c253]/15 border border-[#f5c253]/45 shadow-[0_2px_10px_rgba(245,195,88,0.15)] mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f5c253] animate-pulse" />
                <span className="font-malayalam text-[10px] font-bold text-[#fde68a]">
                  {verse.ref}
                </span>
                <span className="text-[8px] text-[#f5c253]/80 uppercase tracking-wider font-cinzel">
                  · {verse.refEn}
                </span>
              </div>

              {/* Arabic Script */}
              <p
                className="font-amiri text-[16px] sm:text-[17px] text-white font-bold leading-relaxed px-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] tracking-wide"
                dir="rtl"
              >
                {verse.arabic}
              </p>

              {/* Malayalam Translation */}
              <p className="font-malayalam text-[11px] sm:text-[11.5px] text-emerald-100/95 font-medium leading-relaxed px-2 mt-1.5 drop-shadow-xs">
                &ldquo;{verse.malayalam}&rdquo;
              </p>

              {/* Islamic Rub El Hizb Divider */}
              <div className="flex items-center justify-center gap-2 mt-4 mb-2 text-[#f5c253]/60 w-36">
                <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#f5c253]/60" />
                <span className="text-xs">۞</span>
                <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#f5c253]/60" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Expanded Modal for Quranic Verses */
function SanctuaryModal({ item, onClose }) {
  if (!item) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[120] flex items-center justify-center p-3.5 bg-black/90 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0" onClick={onClose} />
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative w-full max-w-[380px] max-h-[85vh] flex flex-col rounded-3xl overflow-hidden bg-[#011a12] border border-emerald-400/50 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(16,185,129,0.3)] p-4 text-center z-10"
      >
        <div className="flex items-center justify-between mb-2 shrink-0">
          <span className="font-malayalam text-xs font-bold text-emerald-200 tracking-wider">ഖുർആൻ സന്ദേശങ്ങൾ</span>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="w-full flex-1 min-h-0 overflow-y-auto space-y-3 p-2 rounded-2xl border border-emerald-400/30 bg-gradient-to-b from-[#022a1d] to-[#01140e] text-left">
          {QURAN_VERSES.map((v) => (
            <div key={v.id} className="p-3 rounded-xl bg-white/5 border border-emerald-400/20">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#f5c253]/20 border border-[#f5c253]/40 text-[#fde68a] text-[9.5px] font-bold font-malayalam mb-2">
                {v.ref} · {v.refEn}
              </span>
              <p className="font-amiri text-[16px] text-white font-bold leading-relaxed text-right mb-2" dir="rtl">
                {v.arabic}
              </p>
              <p className="font-malayalam text-[11px] text-emerald-100 font-medium leading-relaxed">
                &ldquo;{v.malayalam}&rdquo;
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full py-2 mt-3 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-700 text-white font-semibold font-malayalam text-xs cursor-pointer active:scale-95 transition-transform"
        >
          ശരി / Close
        </button>
      </motion.div>
    </motion.div>
  );
}

/** Success Dialog Popup - Authentic Islamic Presentation in White & Emerald */
function SuccessDialog({ amount, mosqueName, receipt, paidAt, onViewSanctuary, onReset }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="absolute inset-0 z-[100] flex items-center justify-center p-4 transform-gpu"
      role="dialog"
      aria-modal="true"
      aria-label="Sadaqah received successfully"
    >
      <div
        className="absolute inset-0 bg-[#01140e]/85 backdrop-blur-[6px] transition-opacity"
        onClick={onViewSanctuary}
      />

      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 22 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 15 }}
        transition={{
          type: 'spring',
          stiffness: 340,
          damping: 28,
          mass: 0.75,
          delay: 0.05,
        }}
        className="relative w-full max-w-[290px] rounded-3xl px-6 pb-5 pt-7 text-center bg-white border border-emerald-500/40 shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_40px_rgba(16,185,129,0.35)] transform-gpu will-change-transform text-slate-900"
      >
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-36 h-20 -translate-y-1/2 rounded-full bg-emerald-400/30 blur-2xl pointer-events-none" />

        {/* Animated Checkmark Circle */}
        <div className="relative mx-auto w-[74px] h-[74px] mb-3">
          <motion.span
            className="absolute inset-0 rounded-full border border-emerald-400 pointer-events-none"
            initial={{ scale: 0.7, opacity: 0.8 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          />
          <svg viewBox="0 0 52 52" className="w-full h-full transform-gpu" fill="none">
            <circle cx="26" cy="26" r="24" fill="rgba(16,185,129,0.12)" stroke="#059669" strokeWidth="1.5" />
            <motion.circle
              cx="26"
              cy="26"
              r="24"
              stroke="#10b981"
              strokeWidth="2.4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: 0.15, ease: 'easeOut' }}
            />
            <motion.path
              d="M15.5 27.5l7.5 7.5 14-15.5"
              stroke="#047857"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.35, delay: 0.35, ease: 'easeOut' }}
            />
          </svg>
        </div>

        <p className="relative font-malayalam text-lg text-emerald-950 font-bold drop-shadow-xs">
          സദഖ അല്ലാഹു സ്വീകരിക്കട്ടെ
        </p>
        <p className="relative mt-0.5 text-[9px] uppercase tracking-[0.3em] text-emerald-700 font-bold">
          Sadaqah Mubarak · Accepted
        </p>

        <div className="relative mt-3.5 font-cinzel font-bold text-3xl text-emerald-950 tabular-nums">
          <span className="text-base text-amber-500 font-bold">₹</span>
          {amount}
        </div>
        <p className="relative mt-1 px-2 font-malayalam text-[11px] leading-snug text-emerald-800 font-semibold">{mosqueName}</p>

        <div className="relative mt-3 rounded-xl bg-emerald-50/80 border border-emerald-200 px-3 py-2 text-slate-800">
          <p className="text-[8.5px] uppercase tracking-[0.2em] text-emerald-800 font-bold">Receipt No.</p>
          <p className="text-[11px] font-bold tracking-wide text-emerald-950">{receipt}</p>
          <p className="mt-0.5 text-[9px] text-slate-500">{formatStamp(paidAt)}</p>
        </div>

        <div className="relative mt-4 flex flex-col gap-2">
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={onViewSanctuary}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white font-semibold font-malayalam text-sm cursor-pointer shadow-[0_4px_16px_rgba(16,185,129,0.35)] transition-transform"
          >
            മസ്ജിദ് ദർശനം കാണുക
          </motion.button>
          <button
            onClick={onReset}
            className="w-full py-2.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 font-malayalam font-bold text-xs sm:text-[13px] cursor-pointer transition-colors hover:bg-emerald-100 active:scale-95"
          >
            മറ്റൊരു സദഖ
          </button>
        </div>
      </motion.div>
    </motion.div>
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
  const [showDone, setShowDone] = useState(true);
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setShowDone(false);
        setActiveModal(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

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
      className="relative w-full h-full flex flex-col justify-between items-center p-3.5 sm:p-5 overflow-hidden gap-1.5 sm:gap-2.5 transform-gpu"
    >
      {/* 1. Header */}
      <div className="w-full flex items-center justify-between z-10 shrink-0 pt-0.5">
        <button
          onClick={onBack}
          aria-label="Back"
          className="p-1.5 sm:p-2 rounded-full bg-emerald-500/15 text-emerald-200 border border-emerald-400/30 backdrop-blur-md cursor-pointer transition-colors hover:bg-emerald-500/25"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-200 font-bold drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
          Sadaqah
        </span>
        <div className="w-8 sm:w-9 flex justify-center text-emerald-400 font-amiri text-lg">
          ☪
        </div>
      </div>

      {/* 2. Blessing Verse */}
      <div className="relative z-10 w-full flex flex-col items-center px-1 shrink-0">
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-malayalam font-medium text-center text-xs sm:text-[13.5px] leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] max-w-[320px]"
        >
          നിങ്ങളുടെ ദാനധർമ്മങ്ങൾ അല്ലാഹു കബൂലാക്കട്ടെ
        </motion.p>
      </div>

      {/* 3. Sanctuary Altar Blessing Card */}
      <div className="relative z-10 w-full flex-1 min-h-[180px] sm:min-h-[220px] flex flex-col py-1 overflow-hidden">
        <HolyMasjidCard onExpand={setActiveModal} mosqueName={mosqueName} />
      </div>

      {/* 4. Receipt Breakdown Card */}
      <div className="relative z-10 w-full shrink-0">
        <div className="w-full overflow-hidden rounded-2xl bg-white/95 text-slate-900 border border-emerald-400/40 shadow-[0_6px_24px_rgba(0,0,0,0.6)]">
          <div className="flex items-center gap-2.5 px-3.5 py-2 border-b border-emerald-100">
            <div className="w-7 h-7 shrink-0 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center">
              <HeartHandshake className="w-3.5 h-3.5 text-emerald-700" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-[10.5px] font-bold text-emerald-950">{mosqueName}</p>
              <p className="text-[8px] uppercase tracking-[0.2em] text-emerald-700 font-semibold">Palli Bhandaram · Digital Sadaqah</p>
            </div>
          </div>

          <div className="flex items-center justify-between px-3.5 py-1.5">
            <span className="text-[9.5px] uppercase tracking-[0.2em] text-slate-600 font-bold">Total Sadaqah</span>
            <span className="font-cinzel font-bold text-xl sm:text-2xl text-emerald-950 tabular-nums">
              <span className="text-sm text-amber-500 font-bold">₹</span>
              {amount}
            </span>
          </div>

          <div className="flex items-center justify-between px-3.5 py-1.5 bg-emerald-50/60 border-t border-emerald-100">
            <span className="text-[8.5px] uppercase tracking-[0.2em] text-slate-500 font-bold">Paid to</span>
            <span className="truncate text-[10px] font-bold text-emerald-900">{MOSQUE_UPI_ID}</span>
          </div>

          <div className="flex items-center justify-between gap-2 px-3.5 py-1.5 bg-emerald-50/60 border-t border-emerald-100">
            <span className="text-[8.5px] uppercase tracking-[0.2em] text-slate-500 font-bold">Receipt</span>
            <span className="truncate text-[10px] font-semibold tracking-wide text-slate-800">
              {receipt} · {formatStamp(paidAt)}
            </span>
          </div>
        </div>
      </div>

      {/* 5. Bottom Actions */}
      <div className="relative z-10 w-full shrink-0 flex items-center gap-2 pt-0.5">
        <motion.button
          onClick={onReset}
          whileTap={{ scale: 0.97 }}
          className="flex-1 py-2.5 sm:py-3 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 text-white font-bold font-malayalam text-sm sm:text-base border border-emerald-300/50 shadow-[0_6px_20px_rgba(16,185,129,0.4)] cursor-pointer hover:opacity-95"
        >
          മറ്റൊരു സദഖ
        </motion.button>
        <motion.button
          onClick={share}
          whileTap={{ scale: 0.92 }}
          aria-label="Share offering blessing"
          className="w-[44px] shrink-0 py-2.5 sm:py-3 rounded-2xl bg-emerald-500/15 text-emerald-200 border border-emerald-400/40 backdrop-blur-md hover:bg-emerald-500/25 transition-colors flex items-center justify-center cursor-pointer"
        >
          <Share2 className="w-4 h-4" />
        </motion.button>
      </div>

      {/* Success Dialog Modal */}
      <AnimatePresence>
        {showDone && (
          <SuccessDialog
            amount={amount}
            mosqueName={mosqueName}
            receipt={receipt}
            paidAt={paidAt}
            onViewSanctuary={() => setShowDone(false)}
            onReset={onReset}
          />
        )}
      </AnimatePresence>

      {/* Expanded Modal */}
      <AnimatePresence>
        {activeModal && (
          <SanctuaryModal item={activeModal} onClose={() => setActiveModal(null)} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
