import HilalCrescent from '../../components/HilalCrescent';
import IslamicLantern from '../../components/IslamicLantern';
import MuslimBhandaramBox from '../../components/MuslimBhandaramBox';
import GirihPattern from '../../components/GirihPattern';
import { MONEY } from '../../data/money';

const SAMPLE = {
  mosqueName: 'Cheraman Juma Masjid & Dargah',
  mosqueNameMl: 'ചേരമാൻ ജുമാ മസ്ജിദ്',
  upiId: 'cheramanmasjid@upi',
  receipt: 'MB-K3M9QW2',
  amount: 350,
};

const COINS = [1, 2, 5, 10, 20];
const NOTES = [50, 100, 200, 500];

function WelcomeMock() {
  return (
    <>
      <div className="flex justify-center shrink-0">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white text-emerald-950 border border-emerald-400/50 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-[7.5px] uppercase tracking-wider font-bold">{SAMPLE.mosqueName}</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center gap-2">
        <div className="relative flex items-center justify-center">
          <IslamicLantern height={42} className="absolute -left-6" />
          <div className="relative w-16 h-16 flex items-center justify-center">
            <HilalCrescent className="w-full h-full drop-shadow-[0_0_20px_rgba(52,211,153,0.7)]" />
          </div>
          <IslamicLantern height={42} className="absolute -right-6" />
        </div>

        <div className="text-center">
          <span className="font-amiri text-xs text-white font-bold block">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</span>
          <p className="font-malayalam text-xs font-bold text-white tracking-wide mt-0.5">പള്ളി ഭണ്ഡാരം</p>
          <p className="text-[6.5px] uppercase tracking-[0.24em] text-emerald-200">Digital Mosque Sadaqah</p>
        </div>

        <div className="px-3 py-1.5 rounded-xl bg-[#022a1e]/80 border border-emerald-400/40 backdrop-blur-md">
          <p className="font-malayalam text-[8px] text-emerald-50">“നിങ്ങൾ ദാനം ചെയ്യുന്ന ഏതൊരു നല്ല കാര്യവും അല്ലാഹു അറിയുന്നു”</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 shrink-0">
        <div className="w-28 h-[2px] rounded-full bg-emerald-500/20 overflow-hidden">
          <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-300 to-white" />
        </div>
        <p className="text-[6.5px] text-[#f5c253] font-medium font-malayalam">ഭണ്ഡാരം • by Programers</p>
      </div>
    </>
  );
}

function BhandaramMock() {
  return (
    <>
      <div className="flex items-center justify-between shrink-0">
        <span className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-400/30" />
        <span className="text-[7px] uppercase tracking-[0.26em] text-emerald-200 font-bold">Palli Bhandaram</span>
        <span className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400/40" />
      </div>

      <div className="pt-1 text-center shrink-0">
        <p className="font-malayalam text-[8px] leading-tight text-emerald-50">
          നിങ്ങളുടെ സദഖയും പ്രാർത്ഥനയും അല്ലാഹു സ്വീകരിക്കട്ടെ
        </p>
      </div>

      <div className="flex-1 min-h-0 flex flex-col justify-center items-center gap-1.5">
        <div className="w-28">
          <MuslimBhandaramBox />
        </div>
        <div className="flex items-center gap-1.5">
          <span className="font-malayalam text-[7px] text-emerald-200/80">ആകെ</span>
          <span className="px-2 py-0.5 rounded-full bg-[#011811]/90 border border-emerald-400/40 font-cinzel text-[10px] font-bold text-white">
            ₹{SAMPLE.amount}
          </span>
        </div>
      </div>

      <div className="space-y-1.5 shrink-0">
        <div className="grid grid-cols-5 gap-1">
          {COINS.map((v) => (
            <img key={v} src={MONEY[v].src} alt="" className="w-full object-contain" />
          ))}
        </div>
        <div className="grid grid-cols-4 gap-1">
          {NOTES.map((v) => (
            <img key={v} src={MONEY[v].src} alt="" className="w-full object-contain" />
          ))}
        </div>
        <div className="w-full py-1.5 rounded-lg bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 text-center font-malayalam text-[9px] font-bold text-white shadow-xs">
          സദഖ സമർപ്പിക്കുക
        </div>
      </div>
    </>
  );
}

function SadaqahMock() {
  return (
    <>
      <div className="flex items-center justify-between shrink-0">
        <span className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-[7px] text-emerald-200">‹</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#f5c253]" />
        <span className="w-5 h-5 flex items-center justify-center text-emerald-400 text-xs">☪</span>
      </div>

      <div className="pt-0.5 text-center shrink-0">
        <p className="font-malayalam text-[7.5px] leading-tight text-white font-semibold">അല്ലാഹു നിങ്ങളെ സമൃദ്ധമായി അനുഗ്രഹിക്കട്ടെ</p>
      </div>

      <div className="flex-1 min-h-0 flex flex-col items-center justify-center p-2 my-1 rounded-xl bg-[#01140e]/35 border border-emerald-400/25 overflow-hidden text-center backdrop-blur-xs max-w-[185px] mx-auto">
        <span className="text-[5.5px] text-[#fde68a] bg-[#f5c253]/20 border border-[#f5c253]/40 px-1.5 py-0.2 rounded-full font-bold mb-0.5">വിശുദ്ധ ഖുർആൻ സൂക്തം</span>
        <p className="font-malayalam text-[6.5px] text-white leading-tight my-0.5">&ldquo;അല്ലാഹുവിന്റെ മാർഗ്ഗത്തിൽ ധനം ചിലവഴിക്കുന്നവരുടെ ഉപമ ഒരു ധാന്യമണി പോലെയാണ്; അത് ഏഴ് കതിരുകൾ മുളപ്പിച്ചു, ഓരോ കതിരിലും നൂറ് ധാന്യമണികൾ ഉണ്ടാകുകയും ചെയ്യുന്നു. അല്ലാഹു താൻ ഉദ്ദേശിക്കുന്നവർക്ക് ഇരട്ടിയാക്കി നൽകുന്നു.&rdquo;</p>
        <span className="text-[6px] text-[#fde68a] font-amiri font-bold bg-[#f5c253]/15 px-1.5 py-0.2 rounded-full mt-0.5" dir="rtl">سورة البقرة 2:261</span>
      </div>

      <div className="space-y-1 shrink-0">
        <div className="rounded-xl overflow-hidden border border-emerald-400/30 bg-[#011812]/70 text-white p-2 shadow-xs backdrop-blur-md">
          <div className="text-[6.5px] text-white font-bold truncate mb-0.5">{SAMPLE.mosqueName}</div>
          <div className="flex items-center justify-between">
            <span className="text-[5.5px] uppercase tracking-[0.16em] text-emerald-200/70 font-semibold">Total Offering</span>
            <span className="font-cinzel text-[11px] font-bold text-white">₹{SAMPLE.amount}</span>
          </div>
          <div className="flex items-center justify-between text-[5.5px] text-emerald-300 font-medium mt-0.5 border-t border-emerald-500/20 pt-0.5">
            <span>PAID TO</span>
            <span className="font-mono">{SAMPLE.upiId}</span>
          </div>
        </div>
        <div className="w-full py-1.5 rounded-lg bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 text-center font-malayalam text-[8.5px] font-bold text-white shadow-xs">
          മറ്റൊരു സമർപ്പണം
        </div>
      </div>
    </>
  );
}

const SCREENS = { welcome: WelcomeMock, bhandaram: BhandaramMock, sadaqah: SadaqahMock };

export default function PhonePreview({ screen = 'welcome', caption }) {
  const Active = SCREENS[screen] ?? WelcomeMock;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[210px] h-[430px] rounded-[36px] bg-[#01140e] p-2.5 shadow-[0_16px_40px_rgba(0,0,0,0.35)] border-2 border-emerald-900/60 flex flex-col justify-between overflow-hidden">
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-3 rounded-full bg-slate-900 z-30 flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
        </div>

        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img src="/newbg.webp" alt="Sanctuary" className="w-full h-full object-cover object-center brightness-[0.93]" />
          <div className="absolute inset-0 bg-black/15" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#01140e]/45 via-transparent to-[#01140e]/55" />
        </div>

        <div className="absolute inset-x-0 top-[38%] -translate-y-1/2 flex items-center justify-center z-0 pointer-events-none">
          <GirihPattern className="w-[240px] h-[240px] opacity-48" />
        </div>

        <div className="relative z-10 w-full h-full pt-4 flex flex-col justify-between text-white">
          <Active />
        </div>
      </div>

      {caption && <p className="mt-2.5 text-[11px] font-medium text-slate-500 text-center">{caption}</p>}
    </div>
  );
}
