import { useRef, useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useAnimationControls } from 'framer-motion';
import { ArrowLeft, Loader2, Info, X, Phone, MessageCircle, Mail, MapPin, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import Money from '../components/Money';
import Label from '../components/Label';
import MuslimBhandaramBox from '../components/MuslimBhandaramBox';
import { moneyKind, moneySrc } from '../data/money';
import { playPrayerChime, playCoinDrop, playNoteDrop } from '../utils/audio';
import { celebrateOffering } from '../utils/confetti';

const COINS = [1, 2, 5, 10, 20];
const NOTES = [50, 100, 200, 500];

let flightId = 0;

const triggerHaptic = (pattern = 40) => {
  if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
    try {
      navigator.vibrate(pattern);
    } catch {
      // ignore
    }
  }
};

/** Mosque Mahal Details Modal - Authentic White & Emerald Islamic Presentation */
function MahalInfoModal({ onClose, mosqueName = "Cheraman Juma Masjid & Dargah" }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute inset-0 z-[100] flex items-center justify-center p-4 transform-gpu"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-[#01140e]/85 backdrop-blur-[6px]"
        onClick={onClose}
      />

      <motion.div
        initial={{ scale: 0.88, opacity: 0, y: 18 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 12 }}
        transition={{ type: 'spring', stiffness: 340, damping: 28, mass: 0.75 }}
        className="relative w-full max-w-[320px] rounded-3xl p-5 bg-white border border-emerald-500/40 shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_40px_rgba(16,185,129,0.3)] transform-gpu will-change-transform text-slate-900"
      >
        {/* Top Glow */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-32 h-16 -translate-y-1/2 rounded-full bg-emerald-400/30 blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3.5 right-3.5 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-emerald-800 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Mosque Badge */}
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 border border-emerald-400/50 flex items-center justify-center text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] mb-2">
            <span className="font-amiri text-2xl font-bold">☪</span>
          </div>
          <h3 className="font-cinzel text-sm sm:text-base font-bold text-emerald-950 leading-tight">
            {mosqueName}
          </h3>
          <p className="font-malayalam text-xs text-emerald-700 font-bold mt-0.5">ചേരമാൻ ജുമാ മസ്ജിദ് മഹല്ല് കമ്മിറ്റി</p>
          <p className="text-[8.5px] uppercase tracking-[0.2em] text-slate-500 mt-0.5">
            Kodungallur, Thrissur, Kerala - 680664
          </p>
        </div>

        {/* Info Rows */}
        <div className="mt-3.5 space-y-2 text-left">
          {/* Address */}
          <div className="flex items-start gap-2.5 p-2 rounded-xl bg-emerald-50/70 border border-emerald-200">
            <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="min-w-0 flex-1">
              <p className="text-[8.5px] uppercase tracking-[0.16em] text-emerald-800 font-bold">Masjid Location</p>
              <p className="text-[10px] text-slate-700 leading-tight mt-0.5">NH 66, Methala, Kodungallur, Kerala - 680664</p>
            </div>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2 p-2 rounded-xl bg-emerald-50/70 border border-emerald-200">
              <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <div className="min-w-0">
                <p className="text-[8px] uppercase tracking-[0.16em] text-emerald-800 font-bold">Mahal Office</p>
                <p className="text-[9.5px] font-medium text-slate-800 truncate">+91 480 2803170</p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 rounded-xl bg-emerald-50/70 border border-emerald-200">
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <div className="min-w-0">
                <p className="text-[8px] uppercase tracking-[0.16em] text-emerald-800 font-bold">WhatsApp</p>
                <p className="text-[9.5px] font-medium text-slate-800 truncate">+91 94472 88111</p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-emerald-50/70 border border-emerald-200">
            <Mail className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="text-[8px] uppercase tracking-[0.16em] text-emerald-800 font-bold">Email</p>
              <p className="text-[9.5px] font-medium text-slate-800 truncate">office@cheramanmasjid.org</p>
            </div>
          </div>

          {/* Prayer Timings */}
          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-emerald-50/70 border border-emerald-200">
            <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="text-[8px] uppercase tracking-[0.16em] text-emerald-800 font-bold">നമസ്കാര സമയം / Prayer Times</p>
              <p className="text-[9px] text-slate-700 leading-tight">Fajr 05:15 AM · Dhuhr 12:30 PM · Juma Friday 12:45 PM</p>
            </div>
          </div>
        </div>

        {/* Tax Exemption Badge */}
        <div className="mt-2.5 flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-lg bg-emerald-100/90 border border-emerald-300 text-emerald-900 text-[9px] font-semibold">
          <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-emerald-700" />
          <span>Wakf Board Reg: WK-KDL-00124 · 80G Tax Exempt</span>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full mt-3 py-2 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white font-semibold font-malayalam text-xs cursor-pointer shadow-[0_4px_16px_rgba(16,185,129,0.35)] active:scale-95 transition-transform"
        >
          ശരി / Close
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function Second({
  onBack,
  onNext,
  amount = 0,
  onAmountChange,
  mosqueName = "ചേരമാൻ ജുമാ മസ്ജിദ്",
}) {
  const [showInfo, setShowInfo] = useState(false);
  const boxRef = useRef(null);
  const lastGlowTimer = useRef(null);
  const submitTimer = useRef(null);
  const boxAnim = useAnimationControls();
  const [flights, setFlights] = useState([]);
  const [ripples, setRipples] = useState([]);
  const [rung, setRung] = useState(0);
  const [slotGlow, setSlotGlow] = useState(false);
  const [placed, setPlaced] = useState([]);
  const [paying, setPaying] = useState(false);

  const ringChime = useCallback(() => {
    playPrayerChime();
    triggerHaptic(60);
    setRung((n) => n + 1);
  }, []);

  useEffect(
    () => () => {
      clearTimeout(lastGlowTimer.current);
      clearTimeout(submitTimer.current);
    },
    []
  );

  const submitOffering = useCallback(() => {
    if (paying || amount <= 0) return;
    setPaying(true);
    triggerHaptic([30, 40, 60]);
    submitTimer.current = setTimeout(() => {
      celebrateOffering();
      playPrayerChime();
      triggerHaptic([25, 30, 25, 30, 80]);
      onNext();
    }, 2000);
  }, [paying, amount, onNext]);

  const dropRipple = useCallback((id) => {
    setRipples((r) => r.filter((x) => x.id !== id));
  }, []);

  const placeOffering = useCallback(
    (value, event) => {
      const source = event.currentTarget.getBoundingClientRect();
      const bhandaram = boxRef.current?.getBoundingClientRect();
      if (!bhandaram) return;

      const isCoin = moneyKind(value) === 'coin';
      const target = {
        x: bhandaram.left + bhandaram.width * 0.55,
        y: bhandaram.top + bhandaram.height * 0.364,
      };

      const id = ++flightId;
      setFlights((f) => [
        ...f,
        { id, value, isCoin, from: source, target, kind: isCoin ? 'coin' : 'note' },
      ]);

      onAmountChange((t) => t + value);
      triggerHaptic(isCoin ? 35 : 45);

      setSlotGlow(true);
      const glowTimer = setTimeout(() => setSlotGlow(false), 700);

      if (isCoin) {
        setPlaced((list) => {
          const n = list.length;
          return [
            ...list.slice(-5),
            { id, src: moneySrc(value), y: -6 - (n % 3) * 4, r: (n % 5) * 12 - 24 },
          ];
        });
      }

      lastGlowTimer.current = glowTimer;
      boxAnim.start({ scale: [1, 1.04, 1], transition: { duration: 0.4, ease: 'easeOut' } });
    },
    [boxAnim, onAmountChange]
  );

  const endFlight = useCallback(
    (id) => {
      const flight = flights.find((f) => f.id === id);
      setFlights((f) => f.filter((x) => x.id !== id));
      if (flight) {
        setRipples((r) => [...r, { id: `${id}-r`, x: flight.target.x, y: flight.target.y }]);

        if (flight.isCoin) {
          playCoinDrop(flight.value);
          triggerHaptic([25, 35, 50]);
        } else {
          playNoteDrop();
          triggerHaptic([40, 30]);
        }
      }
    },
    [flights]
  );

  const overlay = createPortal(
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.span
            key={r.id}
            className="absolute rounded-full border-2 border-emerald-300 shadow-[0_0_14px_rgba(52,211,153,0.9)]"
            style={{ left: r.x, top: r.y, width: 26, height: 26, marginLeft: -13, marginTop: -13 }}
            initial={{ scale: 0.2, opacity: 1 }}
            animate={{ scale: 2.8, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            onAnimationComplete={() => dropRipple(r.id)}
          />
        ))}
      </AnimatePresence>

      <AnimatePresence>
        {flights.map((f) => {
          const dx = f.target.x - (f.from.left + f.from.width / 2);
          const dy = f.target.y - (f.from.top + f.from.height / 2);
          const lift = Math.min(110, Math.abs(dy) * 0.4 + 40);

          return (
            <motion.div
              key={f.id}
              className="absolute pointer-events-none"
              style={{ left: f.from.left, top: f.from.top, width: f.from.width }}
              initial={{ x: 0, y: 0, scale: 1, opacity: 1, rotate: 0 }}
              animate={{
                x: dx,
                y: [0, -lift, dy],
                scale: f.isCoin ? [1, 1.25, 1.15, 0.4, 0.08] : [1, 1.12, 1.05, 0.5, 0.18],
                rotate: f.isCoin ? [0, 90, 240, 480] : [0, -4, 4, 0],
                opacity: f.isCoin ? [1, 1, 1, 0.85, 0] : [1, 1, 1, 0.75, 0],
              }}
              transition={{
                duration: 0.88,
                ease: 'easeInOut',
                x: { duration: 0.88, ease: [0.25, 0.1, 0.25, 1] },
                y: { duration: 0.88, times: [0, 0.4, 1], ease: [0.25, 0.1, 0.35, 1] },
                scale: { duration: 0.88, times: [0, 0.25, 0.75, 0.92, 1] },
                rotate: { duration: 0.88, times: [0, 0.3, 0.75, 1], ease: 'easeInOut' },
                opacity: { duration: 0.88, times: [0, 0.5, 0.8, 0.94, 1] },
              }}
              onAnimationComplete={() => endFlight(f.id)}
            >
              <Money value={f.value} className="w-full drop-shadow-[0_8px_20px_rgba(0,0,0,0.7)]" />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>,
    document.body
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="relative w-full h-full flex flex-col justify-between items-center p-3.5 sm:p-4 overflow-hidden"
    >
      {/* 1. Header Bar */}
      <div className="w-full flex items-center justify-between z-10 shrink-0 pt-0.5">
        <button
          onClick={onBack}
          disabled={paying}
          aria-label="Back"
          className={`p-2 rounded-full bg-emerald-500/15 text-emerald-200 border border-emerald-400/40 backdrop-blur-md transition-colors ${
            paying ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer hover:bg-emerald-500/25'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        <motion.button
          onClick={() => setShowInfo(true)}
          whileTap={{ scale: 0.96 }}
          aria-label="View mosque details"
          className="flex-1 mx-2 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white/95 hover:bg-white text-emerald-950 border border-emerald-400/50 shadow-md transition-all cursor-pointer text-center"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0 self-center" />
          <span className="font-malayalam text-[11px] sm:text-[12px] font-bold leading-tight text-center">
            {mosqueName}
          </span>
          <Info className="w-3.5 h-3.5 text-emerald-700 shrink-0 self-center ml-0.5" />
        </motion.button>

        {/* Serene Prayer Chime Button */}
        <motion.button
          onClick={ringChime}
          whileTap={{ scale: 0.85 }}
          aria-label="Play prayer tone"
          className="relative p-2 rounded-full bg-gradient-to-tr from-emerald-600/30 to-teal-400/20 border border-emerald-400/50 text-emerald-200 hover:text-white hover:border-emerald-300 transition-colors shadow-md cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          {rung > 0 && (
            <motion.span
              key={rung}
              initial={{ scale: 0.6, opacity: 0.9 }}
              animate={{ scale: 2.5, opacity: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="absolute inset-0 rounded-full border-2 border-emerald-400 pointer-events-none"
            />
          )}
        </motion.button>
      </div>

      {/* 2. Scripture Slogan Banner */}
      <div className="relative z-10 w-full flex flex-col items-center pt-1 px-2 shrink-0">
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-malayalam font-medium text-emerald-50 text-center text-xs sm:text-[13px] leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] max-w-[340px]"
        >
          നിങ്ങളുടെ സദഖയും പ്രാർത്ഥനയും അല്ലാഹു സ്വീകരിക്കട്ടെ
        </motion.p>
      </div>

      {/* 3. Center Wooden Mosque Bhandaram Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        className="relative z-30 my-auto w-52 sm:w-40 shrink-0"
      >
        <motion.div ref={boxRef} animate={boxAnim} className="relative">
          <AnimatePresence>
            {placed.map((p) => (
              <motion.img
                key={p.id}
                src={p.src}
                alt=""
                initial={{ opacity: 0, y: -26, scale: 0.5, rotate: -25 }}
                animate={{ opacity: 0.9, y: p.y, scale: 1, rotate: p.r }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="absolute left-[55%] -translate-x-1/2 top-[34%] w-6 h-6 object-contain pointer-events-none"
              />
            ))}
          </AnimatePresence>

          <MuslimBhandaramBox slotGlow={slotGlow} />
        </motion.div>
      </motion.div>

      {/* 4. Running Total Display */}
      <div className="relative z-10 w-full my-auto sm:my-1 flex items-center justify-center gap-2.5 shrink-0">
        <span className="font-malayalam text-xs text-emerald-200/90 font-medium">ആകെ സദഖ</span>
        <div className="relative h-7 overflow-hidden min-w-[88px] px-3.5 flex items-center justify-center rounded-full bg-[#011811]/90 border border-emerald-400/50 backdrop-blur-md shadow-[0_0_18px_rgba(16,185,129,0.3)]">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={amount}
              initial={{ y: 22, opacity: 0, scale: 0.75 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -22, opacity: 0, scale: 0.75 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
              className="absolute inset-0 flex items-center justify-center gap-1 font-cinzel font-bold text-base text-white tabular-nums"
            >
              <span className="text-xs text-amber-300">₹</span>
              {amount}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* 5. Coins Section */}
      <div className="relative z-10 w-full mt-1 sm:mt-0.5 shrink-0 px-1">
        <Label className="font-malayalam text-emerald-200/90 mb-1.5">നാണയങ്ങൾ · Coins</Label>
        <div className="grid grid-cols-5 gap-1.5 px-1">
          {COINS.map((value, i) => (
            <motion.button
              key={value}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.06, duration: 0.4, type: 'spring', stiffness: 260, damping: 18 }}
              whileTap={{ scale: 0.85 }}
              onClick={(e) => placeOffering(value, e)}
              disabled={paying}
              aria-label={`Offer ${value} rupee coin`}
              className={`mx-auto w-full max-w-[48px] focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-300 rounded-full transition-opacity ${
                paying ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              <Money value={value} className="w-full h-auto drop-shadow-[0_4px_10px_rgba(0,0,0,0.65)] hover:scale-105 active:scale-95 transition-transform" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* 6. Notes Section */}
      <div className="relative z-10 w-full mt-2 sm:mt-1 shrink-0 px-1">
        <Label className="font-malayalam text-emerald-200/90 mb-1.5 sm:mb-1">നോട്ടുകൾ · Notes</Label>
        <div className="grid grid-cols-2 gap-2.5 sm:gap-1.5 px-0.5">
          {NOTES.map((value, i) => (
            <motion.button
              key={value}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 + i * 0.06, duration: 0.4 }}
              whileTap={{ scale: 0.94 }}
              onClick={(e) => placeOffering(value, e)}
              disabled={paying}
              aria-label={`Offer ${value} rupee note`}
              className={`mx-auto w-full max-w-[125px] sm:max-w-[100px] flex items-center justify-center focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-300 rounded-md transition-opacity ${
                paying ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              <Money value={value} className="w-full h-auto drop-shadow-[0_4px_10px_rgba(0,0,0,0.65)] hover:scale-[1.03] active:scale-95 transition-transform" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* 7. Offer Button */}
      <div className="relative z-10 w-full mt-auto pt-1 pb-1 sm:pb-0.5 shrink-0">
        <motion.button
          onClick={submitOffering}
          disabled={amount === 0 || paying}
          whileTap={amount === 0 || paying ? undefined : { scale: 0.97 }}
          className={`w-full py-2.5 sm:py-2 px-6 rounded-2xl font-malayalam text-base sm:text-sm border transition-all duration-300 flex items-center justify-center gap-2 ${
            paying
              ? 'bg-gradient-to-r from-emerald-700/80 via-teal-600/80 to-emerald-700/80 text-white font-semibold border-emerald-400/40 cursor-wait'
              : amount > 0
                ? 'bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 text-white font-bold shadow-[0_8px_25px_rgba(16,185,129,0.45)] border-emerald-300/60 cursor-pointer hover:opacity-95'
                : 'bg-emerald-500/15 text-emerald-200/40 border-emerald-400/15 cursor-not-allowed'
          }`}
        >
          {paying ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-white" />
              <span>സദഖ സ്വീകരിക്കുന്നു...</span>
            </>
          ) : (
            <span className={amount > 0 ? '' : 'opacity-70'}>സദഖ സമർപ്പിക്കുക</span>
          )}
        </motion.button>

        {/* Status line */}
        <div className="h-4 sm:h-2 mt-1 sm:mt-0.5 flex items-center justify-center">
          <AnimatePresence mode="wait" initial={false}>
            {paying && (
              <motion.p
                key="paying"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-[9.5px] uppercase tracking-[0.2em] text-emerald-200/90 font-medium"
              >
                Completing your offering
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      {overlay}

      {/* Mahal Info Modal */}
      <AnimatePresence>
        {showInfo && (
          <MahalInfoModal
            mosqueName={mosqueName}
            onClose={() => setShowInfo(false)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
