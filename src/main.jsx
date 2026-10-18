import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

// Mahal Console is lazy-loaded so mosque kiosk displays never download admin chunks
const AdminApp = lazy(() => import('./admin/AdminApp.jsx'));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Kiosk — the devotee-facing touchscreen screens */}
        <Route path="/" element={<App />} />

        {/* Admin — the Mahal control panel */}
        <Route
          path="/admin/*"
          element={
            <Suspense
              fallback={
                <div className="min-h-dvh w-full flex items-center justify-center bg-[#01140e]">
                  <span className="w-6 h-6 rounded-full border-2 border-emerald-400/25 border-t-emerald-500 animate-spin" />
                </div>
              }
            >
              <AdminApp />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
