// app/pages/account/subscription/page.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Crown, CreditCard, Zap } from 'lucide-react';
import Header from '@/app/components/dashboard/Header';
import Sidebar from '@/app/components/dashboard/Sidebar';

const headerData = {
  id: 'account',
  title: 'Subscription',
  description: '',
  bgGradient: '',
  glow: '',
  stats: { connection: '', battery: 0 },
  features: [],
};

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
              Account
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Subscription & billing
            </h1>
            <p className="text-sm text-zinc-400 max-w-xl">
              Manage your SOUND Pro plan, billing cycle and receipts.
            </p>
          </header>

          <motion.section
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-white/5 bg-zinc-950/80 p-6 md:p-7 shadow-[0_24px_90px_rgba(0,0,0,0.75)] space-y-6"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-500 flex items-center justify-center shadow-[0_12px_40px_rgba(251,191,36,0.6)]">
                  <Crown className="h-4 w-4 text-black" />
                </div>
                <div>
                  <p className="text-sm font-semibold">SOUND Pro</p>
                  <p className="text-xs text-zinc-400">Annual · Renews 24 Dec 2025</p>
                </div>
              </div>
              <span className="text-sm font-semibold">
                $79<span className="text-xs text-zinc-400">/year</span>
              </span>
            </div>

            <div className="grid gap-3 text-xs text-zinc-300 md:grid-cols-3">
              <div className="rounded-2xl border border-white/5 bg-zinc-900/70 px-3 py-2">
                <p className="font-medium">Spatial presets</p>
                <p className="mt-1 text-[11px] text-zinc-500">
                  Unlimited device‑level profiles.
                </p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-zinc-900/70 px-3 py-2">
                <p className="font-medium">Cloud history</p>
                <p className="mt-1 text-[11px] text-zinc-500">
                  90‑day listening and ANC analytics.
                </p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-zinc-900/70 px-3 py-2">
                <p className="font-medium">Priority firmware</p>
                <p className="mt-1 text-[11px] text-zinc-500">
                  Early access to beta firmware drops.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-[11px] text-zinc-500">
              <span>Next charge · 24 Dec 2025 · Visa ending 4242</span>
              <button className="text-zinc-300 hover:text-zinc-100">
                View invoices
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-5 py-2.5 text-xs font-semibold text-black hover:bg-white transition"
              >
                <CreditCard className="h-4 w-4" />
                Update payment method
              </motion.button>
              <button className="text-xs text-zinc-400 hover:text-zinc-200">
                Cancel subscription
              </button>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.28, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-white/5 bg-zinc-950/70 p-6 md:p-7 space-y-4"
          >
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-sky-400" />
              <h2 className="text-sm font-semibold">Usage highlights</h2>
            </div>
            <p className="text-xs text-zinc-400">
              Your most‑used presets, devices and listening windows will appear here once
              analytics are enabled.
            </p>
          </motion.section>
        </motion.div>
      </main>

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
}
