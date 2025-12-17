// components/dashboard/Sidebar.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { User, Shield, CreditCard, LogOut, X, Zap, Smartphone, BookOpen, HelpCircle, ChevronRight, Ear, Activity } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const sidebarVariants = {
  closed: { x: "100%", opacity: 0 },
  open: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 30 } }
};

const containerVariants = {
  open: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
};

const itemVariants = {
  closed: { x: 20, opacity: 0 },
  open: { x: 0, opacity: 1 }
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-[2px] z-40"
          />

          {/* Sidebar Panel */}
          <motion.aside
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed right-0 top-0 h-full w-full max-w-[400px] z-50 bg-zinc-950/80 backdrop-blur-3xl border-l border-white/5 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-white/5 bg-white/5">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 ring-1 ring-white/20 flex items-center justify-center text-sm font-bold text-white shadow-lg">AL</div>
                  <div className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 bg-emerald-500 border-2 border-zinc-900 rounded-full" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white tracking-tight">Alex Lee</h3>
                  <p className="text-xs text-zinc-400 font-medium">Pro Member</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <motion.div
              variants={containerVariants}
              initial="closed"
              animate="open"
              className="flex-1 overflow-y-auto px-8 py-8 space-y-10 scrollbar-hide"
            >
              {/* Device Card Section */}
              <section className="space-y-4">
                <SectionLabel>My Device</SectionLabel>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="
                              relative
                              p-5
                              rounded-3xl
                              bg-zinc-900/70
                              backdrop-blur-2xl
                              border border-zinc-700/60
                              hover:border-zinc-300/50
                              shadow-[0_18px_60px_rgba(0,0,0,0.65)]
                              transition-colors
                              group
                              overflow-hidden
                            "
                >
                  {/* outer vignette / halo */}
                  <div
                    className="
      pointer-events-none
      absolute inset-0
      rounded-3xl
      bg-[radial-gradient(circle_at_top,_rgba(244,244,245,0.18),transparent_55%),radial-gradient(circle_at_bottom,_rgba(34,197,94,0.25),transparent_60%)]
      opacity-60
    "
                  />

                  {/* subtle inner glass edge */}
                  <div
                    className="
      pointer-events-none
      absolute inset-[1px]
      rounded-[1.4rem]
      border border-white/5
      bg-gradient-to-br from-white/5 via-transparent to-transparent
      opacity-0
      group-hover:opacity-100
      transition-opacity duration-300
    "
                  />

                  {/* content layer */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div
                          className="
            h-9 w-9
            rounded-2xl
            bg-zinc-900/80
            flex items-center justify-center
            ring-1 ring-white/10
            shadow-[0_6px_18px_rgba(0,0,0,0.7)]
          "
                        >
                          <Smartphone className="text-zinc-200" size={16} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-zinc-50">
                            SonicWare Pro
                          </span>
                          <span className="text-[11px] text-zinc-400">
                            Adaptive noise · Ultra‑low latency
                          </span>
                        </div>
                      </div>

                      {/* Status pill */}
                      <motion.span
                        initial={{ opacity: 0, y: -4, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.08 }}
                        className="
          inline-flex items-center gap-1.5
          px-3 py-0.5
          rounded-full
          bg-emerald-400/10
          text-emerald-300
          text-[10px]
          font-semibold
          uppercase tracking-[0.18em]
          border border-emerald-400/25
          shadow-[0_0_16px_rgba(16,185,129,0.45)]
        "
                      >
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.9)]" />
                        Connected
                      </motion.span>
                    </div>

                    {/* Battery section */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      className="grid grid-cols-3 gap-3"
                    >
                      <BatteryIndicator label="L" level={82} />
                      <BatteryIndicator label="R" level={88} />
                      <BatteryIndicator
                        label="Case"
                        level={92}
                        icon={<Zap size={10} className="fill-current" />}
                      />
                    </motion.div>

                    {/* bottom meta line */}
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 0.7, y: 0 }}
                      transition={{ delay: 0.22 }}
                      className="mt-4 flex items-center justify-between text-[11px] text-zinc-500"
                    >
                      <span>Spatial audio on</span>
                      <span className="text-zinc-400/80">Battery health · Excellent</span>
                    </motion.div>
                  </div>
                </motion.div>
              </section>

              {/* Menu Sections */}
              <section className="space-y-3">
                <SectionLabel>Wellbeing</SectionLabel>
                <MenuItem label="Safe Listening" value="Normal" />
                <MenuItem label="Usage Stats" />
              </section>

              <section className="space-y-3">
                <SectionLabel>Account</SectionLabel>
                <MenuItem label="Personal Profile" />
                <MenuItem label="Login & Security" />
                <MenuItem label="Subscriptions" value="Pro" />
              </section>

              <section className="space-y-3">
                <SectionLabel>Support</SectionLabel>
                <MenuItem label="User Manual" />
                <MenuItem label="Help & FAQ" />
              </section>
            </motion.div>

            {/* Footer */}
            <div className="p-8 border-t border-white/5 bg-zinc-950/40">
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-3.5 rounded-2xl bg-red-500/10 hover:bg-red-500/20 text-red-400 font-medium text-sm flex items-center justify-center gap-2 transition-colors border border-red-500/20">
                <LogOut size={16} /> Sign Out
              </motion.button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

// --- Helper Components for Sidebar ---
const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest px-2">{children}</h4>
);

const MenuItem = ({ label, value }: { label: string, value?: string }) => (
  <motion.button variants={itemVariants} className="w-full group flex items-center justify-between p-3 rounded-xl transition-all hover:bg-white/5">
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-zinc-300 group-hover:text-white">{label}</span>
    </div>
    <div className="flex items-center gap-2">
      {value && <span className="text-xs text-zinc-500 font-medium">{value}</span>}
      <ChevronRight size={14} className="text-zinc-600 group-hover:text-zinc-400 transition-transform" />
    </div>
  </motion.button>
);

const BatteryIndicator = ({ label, level, icon }: { label: string, level: number, icon?: React.ReactNode }) => (
  <div className="flex flex-col items-center gap-2 p-2 rounded-xl bg-zinc-950/50 border border-white/5">
    <span className="text-[10px] text-zinc-500 uppercase font-bold">{label}</span>
    <div className="relative h-8 w-2 bg-zinc-800 rounded-full overflow-hidden">
      <div className={`absolute bottom-0 w-full rounded-full ${level < 20 ? 'bg-red-500' : 'bg-emerald-400'}`} style={{ height: `${level}%` }} />
    </div>
    <div className="flex items-center gap-0.5 text-[10px] text-zinc-300 font-medium">{icon} {level}%</div>
  </div>
);