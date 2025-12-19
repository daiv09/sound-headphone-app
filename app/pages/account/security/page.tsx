// app/pages/account/security/page.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, ShieldCheck, Smartphone, EyeOff } from 'lucide-react';
import Header from '@/app/components/dashboard/Header';
import Sidebar from '@/app/components/dashboard/Sidebar';

const headerData = {
  id: 'account',
  title: 'Security',
  description: '',
  bgGradient: '',
  glow: '',
  stats: { connection: '', battery: 0 },
  features: [],
};

export default function SecurityPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [twoFAEnabled, setTwoFAEnabled] = useState(true);

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
              Login & security
            </h1>
            <p className="text-sm text-zinc-400 max-w-xl">
              Manage your password, two‑factor authentication and active sessions.
            </p>
          </header>

          {/* Password card */}
          <motion.section
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-white/5 bg-zinc-950/80 p-6 md:p-7 shadow-[0_24px_90px_rgba(0,0,0,0.75)] space-y-5"
          >
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-sky-400" />
              <h2 className="text-sm font-semibold">Change password</h2>
            </div>

            <form className="grid gap-4">
              <div className="space-y-1.5">
                <label className="text-xs text-zinc-400">Current password</label>
                <div className="flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm">
                  <input
                    type="password"
                    className="w-full bg-transparent outline-none"
                    placeholder="••••••••"
                  />
                  <EyeOff className="h-3.5 w-3.5 text-zinc-500" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-xs text-zinc-400">New password</label>
                  <input
                    type="password"
                    className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 transition"
                    placeholder="Minimum 8 characters"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs text-zinc-400">Confirm password</label>
                  <input
                    type="password"
                    className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 transition"
                    placeholder="Repeat new password"
                  />
                </div>
              </div>
            </form>

            <motion.button
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-zinc-100 px-5 py-2.5 text-xs font-semibold text-black hover:bg-white transition"
            >
              Update password
            </motion.button>
          </motion.section>

          {/* 2FA + sessions */}
          <motion.section
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.28, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-white/5 bg-zinc-950/80 p-6 md:p-7 shadow-[0_24px_90px_rgba(0,0,0,0.75)] space-y-6"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <h2 className="text-sm font-semibold">Two‑factor authentication</h2>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-sm font-medium">
                  {twoFAEnabled ? '2FA is enabled' : 'Enable 2FA for extra security'}
                </p>
                <p className="text-xs text-zinc-400">
                  Protects your SOUND ID with an extra one‑time code on new devices.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setTwoFAEnabled(v => !v)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                  twoFAEnabled ? 'bg-emerald-500/80' : 'bg-zinc-700'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 rounded-full bg-white shadow transform transition ${
                    twoFAEnabled ? 'translate-x-5' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-sky-400" />
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                  Active sessions
                </h3>
              </div>
              <div className="grid gap-3 text-xs text-zinc-300">
                <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-zinc-900/70 px-3 py-2">
                  <div>
                    <p className="font-medium">MacBook Pro · Chrome</p>
                    <p className="text-[11px] text-zinc-500">Pune · Active now</p>
                  </div>
                  <span className="text-[11px] text-emerald-400">This device</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-zinc-900/40 px-3 py-2">
                  <div>
                    <p className="font-medium">iPhone · SonicWare app</p>
                    <p className="text-[11px] text-zinc-500">Last active · 2 hours ago</p>
                  </div>
                  <button className="text-[11px] text-zinc-400 hover:text-zinc-100">
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </main>

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
}
