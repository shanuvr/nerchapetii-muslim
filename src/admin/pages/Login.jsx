import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Eye, EyeOff, Lock, ShieldCheck, User } from 'lucide-react';
import { CONTROL } from '../components/Field';

const HIGHLIGHTS = [
  'Mahal profile, Quranic scriptures & mosque UPI handles',
  'Real-time Palli Bhandaram offerings audit & Sadaqah reports',
  'Devotee live Holy Sanctuary view & audio preferences',
];

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-dvh w-full bg-[#f8fafc] text-slate-900 lg:grid lg:grid-cols-2">
      <aside className="relative hidden lg:flex flex-col justify-between border-r border-slate-200 bg-gradient-to-br from-emerald-50/80 via-white to-teal-100/40 p-12 shadow-xs">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 border border-emerald-600/30 flex items-center justify-center shadow-md text-white font-amiri text-2xl font-bold">
            ☪
          </div>
          <div>
            <p className="font-malayalam text-xl font-bold text-slate-900 leading-tight">പള്ളി ഭണ്ഡാരം</p>
            <p className="text-[10px] uppercase tracking-[0.24em] text-emerald-800 font-bold leading-tight mt-0.5">Mahal Console</p>
          </div>
        </div>

        <div className="max-w-md">
          <h1 className="font-cinzel text-3xl xl:text-4xl font-bold leading-tight text-slate-900">
            One console for every sacred mosque offering.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 font-normal">
            Manage your Mahal identity, Sadaqah collections, sanctuary live darshan, and daily digital Palli Bhandaram offerings seamlessly.
          </p>

          <ul className="mt-8 space-y-3.5">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5 text-emerald-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="font-malayalam text-sm text-emerald-900 font-semibold">സദഖ സമർപ്പണം by Programers</p>
      </aside>

      <main className="relative flex flex-col justify-center px-5 sm:px-8 py-12 bg-white">
        <div className="mx-auto w-full max-w-[380px]">
          <div className="lg:hidden flex items-center gap-3 mb-8">
            <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 border border-emerald-500 flex items-center justify-center shadow-xs text-white font-amiri text-xl font-bold">
              ☪
            </div>
            <div>
              <p className="font-malayalam text-lg font-bold text-slate-900 leading-tight">പള്ളി ഭണ്ഡാരം</p>
              <p className="text-[9px] uppercase tracking-[0.24em] text-emerald-700 font-bold leading-tight">Mahal Console</p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-slate-900">Mahal Sign In</h2>
            <p className="text-xs text-slate-500 mt-1">Enter your credentials to manage your digital Palli Bhandaram.</p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate('/admin');
            }}
            className="space-y-4"
          >
            <div>
              <label className="block mb-1 text-xs font-bold text-slate-700">Mahal Email or ID</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  required
                  defaultValue="secretary@cheramanmasjid.org"
                  className={`${CONTROL} pl-9`}
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-xs font-bold text-slate-700">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  defaultValue="cheraman@2026"
                  className={`${CONTROL} pl-9 pr-9`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm hover:opacity-95 transition-all cursor-pointer"
            >
              <span>Sign In to Mahal Console</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span className="font-malayalam font-bold text-emerald-950">ചേരമാൻ ജുമാ മസ്ജിദ്</span>
            <a href="/" className="text-emerald-700 font-bold hover:underline">
              Launch Kiosk →
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
