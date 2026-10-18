import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import First from './Home/First';
import Second from './Home/Second';
import Third from './Home/Third';
import GirihPattern from './components/GirihPattern';
import { preloadAssets } from './utils/preload';
import './App.css';

const STEPS = [
  { key: 'welcome', component: First },
  { key: 'bhandaram', component: Second },
  { key: 'sadaqah', component: Third },
];

export default function App() {
  const [step, setStep] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    preloadAssets();
  }, []);

  const goNext = useCallback(
    () => setStep((s) => Math.min(STEPS.length - 1, s + 1)),
    []
  );
  const goBack = useCallback(() => setStep((s) => Math.max(0, s - 1)), []);
  const goReset = useCallback(() => {
    setAmount(0);
    setStep(0);
  }, []);

  const Current = STEPS[step].component;

  return (
    <main className="h-[100dvh] max-h-[100dvh] sm:h-screen sm:min-h-screen w-full flex flex-col items-center justify-center p-0 sm:p-2 md:p-3 relative selection:bg-emerald-600 selection:text-white overflow-hidden bg-white sm:bg-white">
      {/* Main Kiosk Container */}
      <div className="relative w-full sm:max-w-[400px] mx-auto h-[100dvh] max-h-[100dvh] sm:h-[min(844px,96vh)] sm:max-h-[860px] flex flex-col justify-between items-center overflow-hidden rounded-none sm:rounded-[36px] border-0 sm:border sm:border-slate-300/80 shadow-none sm:shadow-[0_25px_65px_-12px_rgba(0,0,0,0.35),0_0_1px_1px_rgba(0,0,0,0.06)] bg-[#022417] z-10">
        
        {/* 1. Sacred Mosque Background Image (Balanced Depth) */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <img
            src="/bg.png"
            alt="Islamic Mosque Sanctuary Background"
            className="w-full h-full object-cover object-center select-none brightness-[0.93]"
          />
          {/* Balanced dark atmospheric overlay for rich contrast */}
          <div className="absolute inset-0 bg-black/15 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#01140e]/45 via-transparent to-[#01140e]/55 pointer-events-none" />
        </div>

        {/* 2. Rotating Islamic Sacred Rosette (Smooth 42s Revolution with Radiant Aura) */}
        <div className="absolute inset-x-0 top-[37%] -translate-y-1/2 pointer-events-none flex items-center justify-center z-0 overflow-visible">
          <GirihPattern className="w-[390px] h-[390px] sm:w-[450px] sm:h-[450px] opacity-48 drop-shadow-[0_0_24px_rgba(52,211,153,0.4)] drop-shadow-[0_0_12px_rgba(245,195,88,0.3)]" />
        </div>

        {/* 3. Subtle Celestial Floating Starlight */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {[
            { top: '15%', left: '18%', dur: '4.8s', del: '0s' },
            { top: '22%', left: '82%', dur: '5.6s', del: '0.8s' },
            { top: '48%', left: '12%', dur: '5.2s', del: '1.4s' },
            { top: '56%', left: '86%', dur: '6.2s', del: '0.4s' },
          ].map((p, i) => (
            <div
              key={i}
              className="absolute text-[#fef08a] select-none pointer-events-none starlight-particle transform-gpu opacity-60"
              style={{ top: p.top, left: p.left, '--dur': p.dur, '--del': p.del }}
            >
              <svg viewBox="0 0 16 16" className="w-2.5 h-2.5" fill="currentColor">
                <path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z" opacity="0.85" />
              </svg>
            </div>
          ))}
        </div>

        {/* 4. Screen Transition Layer */}
        <div className="relative w-full h-full z-10 flex flex-col">
          <AnimatePresence mode="wait">
            <Current
              key={STEPS[step].key}
              mosqueName="ചേരമാൻ ജുമാ മസ്ജിദ്"
              mosqueNameEn="Cheraman Juma Masjid"
              amount={amount}
              onAmountChange={setAmount}
              onComplete={goNext}
              onNext={goNext}
              onBack={goBack}
              onReset={goReset}
            />
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
