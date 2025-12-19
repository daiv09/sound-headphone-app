// app/pages/account/profile/page.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Globe2 } from 'lucide-react';
import Header from '@/app/components/dashboard/Header';
import Sidebar from '@/app/components/dashboard/Sidebar';

const headerData = {
  id: 'account',
  title: 'Account',
  description: '',
  bgGradient: '',
  glow: '',
  stats: { connection: '', battery: 0 },
  features: [],
};

export default function ProfilePage() {
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
              Personal profile
            </h1>
            <p className="text-sm text-zinc-400 max-w-xl">
              Update your name, email and locale used across SOUND apps and devices.
            </p>
          </header>

          <motion.section
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-white/5 bg-zinc-950/80 p-6 md:p-8 shadow-[0_24px_90px_rgba(0,0,0,0.75)] space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 ring-1 ring-white/10 flex items-center justify-center text-sm font-semibold">
                AL
              </div>
              <div>
                <p className="text-sm font-semibold">Alex Lee</p>
                <p className="text-xs text-zinc-500">SOUND ID · Pro Member</p>
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <form className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs text-zinc-400 flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5 text-zinc-500" />
                  First name
                </label>
                <input
                  className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
                  defaultValue="Alex"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs text-zinc-400">Last name</label>
                <input
                  className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
                  defaultValue="Lee"
                />
              </div>
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs text-zinc-400 flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5 text-zinc-500" />
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
                  defaultValue="alex@sound.app"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs text-zinc-400 flex items-center gap-1.5">
                  <Globe2 className="h-3.5 w-3.5 text-zinc-500" />
                  Region
                </label>
                <select className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition">
                  <option>India (IN)</option>
                  <option>United States (US)</option>
                  <option>United Kingdom (UK)</option>
                  <option>European Union (EU)</option>
                </select>
              </div>
            </form>

            <motion.button
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-blue-500 transition"
            >
              Save changes
            </motion.button>
          </motion.section>
        </motion.div>
      </main>

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
}
