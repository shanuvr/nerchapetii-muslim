import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSideBar from './components/AdminSideBar';
import AdminTopBar from './AdminTopBar';

export default function AdminLayout() {
  const [navOpen, setNavOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-dvh bg-[#f8fafc] text-slate-900">
      <div className="pointer-events-none fixed -top-40 -right-32 w-[600px] h-[600px] rounded-full bg-emerald-500/[0.05] blur-[140px]" />
      <div className="pointer-events-none fixed bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-teal-500/[0.04] blur-[140px]" />

      <AdminSideBar
        open={navOpen}
        onClose={() => setNavOpen(false)}
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed((c) => !c)}
      />

      <div className={`transition-[padding] duration-300 ${collapsed ? 'lg:pl-[68px]' : 'lg:pl-[230px]'}`}>
        <AdminTopBar onOpenMenu={() => setNavOpen(true)} />

        <main className="relative px-3.5 sm:px-5 py-4 sm:py-5 max-w-[1360px]">
          <Outlet />
        </main>

        <footer className="relative px-3.5 sm:px-5 py-4 max-w-[1360px]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-1.5 pt-3.5 border-t border-slate-200 text-[11px] text-slate-500">
            <p className="font-medium">
              <span className="font-malayalam font-bold text-slate-800">പള്ളി ഭണ്ഡാരം</span> Mahal Console ·{' '}
              <span className="text-emerald-700 font-semibold font-sans">v1.0 Production</span>
            </p>
            <p className="font-malayalam text-slate-600 font-medium">സദഖ സമർപ്പണം by Programers</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
