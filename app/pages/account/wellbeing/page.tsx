// app/pages/account/wellbeing/page.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Ear, Activity } from 'lucide-react';
import Header from '@/app/components/dashboard/Header';
import Sidebar from '@/app/components/dashboard/Sidebar';

const headerData = {
  id: 'account',
  title: 'Wellbeing',
  description: '',
  bgGradient: '',
  glow: '',
  stats: { connection: '', battery: 0 },
  features: [],
};

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [safeCap, setSafeCap] = useState(85);

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <Header
        currentData={headerData}
        isLeft={true}
        onOpenSidebar={() => setSidebarOpen(true)}
      />

      <main className="pt-20 px-6 md:px-12 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <header className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Wellbeing
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Safe listening
            </h1>
            <p className="text-sm text-zinc-400 max-w-xl">
              Track exposure, set daily limits and let SonicWare nudge you before things
              get too loud.
            </p>
          </header>

          <motion.section
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-white/5 bg-zinc-950/80 p-6 md:p-7 shadow-[0_24px_90px_rgba(0,0,0,0.75)] space-y-6"
          >
            <div className="flex items-center gap-2">
              <Ear className="h-4 w-4 text-sky-400" />
              <h2 className="text-sm font-semibold">Safe level cap</h2>
            </div>

            <div className="space-y-3">
              <p className="text-xs text-zinc-400">
                SonicWare automatically soft‑limits playback above your safe listening
                cap. You can always override this on a per‑session basis.
              </p>

              <div className="flex items-center justify-between text-xs text-zinc-300">
                <span>Daily safe cap</span>
                <span>{safeCap} dB</span>
              </div>

              <input
                type="range"
                min={70}
                max={100}
                value={safeCap}
                onChange={e => setSafeCap(Number(e.target.value))}
                className="w-full accent-sky-500"
              />
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.28, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-white/5 bg-zinc-950/80 p-6 md:p-7 shadow-[0_24px_90px_rgba(0,0,0,0.75)] space-y-5"
          >
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-emerald-400" />
              <h2 className="text-sm font-semibold">Recent usage</h2>
            </div>

            <div className="grid gap-3 text-xs text-zinc-300 md:grid-cols-3">
              <div className="rounded-2xl border border-white/5 bg-zinc-900/70 px-3 py-2">
                <p className="font-medium">Today</p>
                <p className="mt-1 text-[11px] text-zinc-500">1 h 24 min · Safe</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-zinc-900/70 px-3 py-2">
                <p className="font-medium">This week</p>
                <p className="mt-1 text-[11px] text-zinc-500">9 h 12 min · Balanced</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-zinc-900/70 px-3 py-2">
                <p className="font-medium">High‑volume sessions</p>
                <p className="mt-1 text-[11px] text-zinc-500">2 sessions · 18 min</p>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </main>

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
}
