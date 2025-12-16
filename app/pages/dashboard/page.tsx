// app/dashboard/page.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Headphones,
  Volume2,
  Mic,
  Zap,
  Bluetooth,
  Battery,
  ChevronRight,
  Sliders,
  Wind
} from 'lucide-react';

// --- Types & Data ---
type EarbudSide = 'left' | 'right';

const EARBUD_DATA = {
  left: {
    id: 'left',
    title: 'Left Channel',
    subtitle: 'Ambient & Focus Control',
    description: 'Fine-tune Active Noise Cancellation intensities and ambient passthrough specific to your left ear.',
    accentColor: 'text-blue-400',
    bgGradient: 'from-blue-500/20 via-blue-900/10',
    glow: 'bg-blue-500',
    stats: { battery: 82, connection: 'Excellent' },
    features: [
      { label: 'ANC Level', icon: Wind, value: 75 },
      { label: 'Voice Focus', icon: Mic, value: 40 },
    ]
  },
  right: {
    id: 'right',
    title: 'Right Channel',
    subtitle: 'Media & Voice Assistant',
    description: 'Manage touch gestures, voice assistant latency, and call clarity settings for the right earbud.',
    accentColor: 'text-emerald-400',
    bgGradient: 'from-emerald-500/20 via-emerald-900/10',
    glow: 'bg-emerald-500',
    stats: { battery: 88, connection: 'Stable' },
    features: [
      { label: 'Volume Boost', icon: Volume2, value: 60 },
      { label: 'Transparency', icon: Zap, value: 90 },
    ]
  }
};

const SettingItem = ({
  label,
  danger = false,
}: {
  label: string
  danger?: boolean
}) => (
  <button
    className={`
      w-full flex items-center justify-between
      px-4 py-3 rounded-xl
      text-sm
      transition
      ${danger
        ? "text-red-400 hover:bg-red-500/10"
        : "text-zinc-200 hover:bg-white/5"}
    `}
  >
    {label}
    <span className="text-zinc-500">›</span>
  </button>
)

const BatteryRow = ({
  label,
  value,
}: {
  label: string
  value: number
}) => (
  <div className="flex items-center gap-3">
    <span className="w-12 text-xs text-zinc-400">{label}</span>
    <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-emerald-400 to-emerald-300"
      />
    </div>
    <span className="w-8 text-xs text-zinc-400 text-right">
      {value}%
    </span>
  </div>
)

export default function DashboardPage() {
  const [activeSide, setActiveSide] = useState<EarbudSide>('left');
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Helper to toggle side
  const toggleSide = (side: EarbudSide) => setActiveSide(side);

  const currentData = EARBUD_DATA[activeSide];
  const isLeft = activeSide === 'left';

  return (
    <div className="min-h-screen bg-black text-zinc-100 overflow-hidden selection:bg-zinc-800">

      {/* --- Ambient Background --- */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{
            background: isLeft
              ? 'radial-gradient(circle at 0% 50%, rgba(59, 130, 246, 0.15), transparent 50%)'
              : 'radial-gradient(circle at 100% 50%, rgba(16, 185, 129, 0.15), transparent 50%)'
          }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        />
      </div>

      {/* --- Header --- */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-zinc-950/60 backdrop-blur-2xl supports-[backdrop-filter]:bg-zinc-950/30">
        <div className="w-full px-6 md:px-12 h-16 flex items-center justify-between">

          {/* Left: Brand Identity */}
          <div className="flex items-center gap-3 group cursor-default">
            <span className="text-2xl font-bold tracking-tighter"
            >
              SOUND<span className="text-blue-500">.</span>
            </span>
          </div>

          {/* Right: Status "Dynamic Island" Capsule */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4 rounded-full border border-white/5 bg-white/5 px-5 py-2 backdrop-blur-md transition-colors hover:bg-white/10">

              {/* Connection Indicator */}
              <div className="flex items-center gap-2.5">
                <div className={`relative flex h-2 w-2`}>
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isLeft ? 'bg-blue-400' : 'bg-emerald-400'}`}></span>
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${isLeft ? 'bg-blue-500' : 'bg-emerald-500'}`}></span>
                </div>
                <Bluetooth size={13} className="text-zinc-400" />
                <span className="text-xs font-medium text-zinc-300 tracking-wide">
                  {currentData.id === 'left' ? 'L' : 'R'} Connected
                </span>
              </div>

              {/* Vertical Divider */}
              <div className="h-3 w-px bg-white/10" />

              {/* Battery Indicator */}
              <div className="flex items-center gap-2">
                <Battery size={13} className={currentData.stats.battery < 20 ? 'text-red-400' : 'text-zinc-400'} />
                <span className="text-xs font-medium text-zinc-300 tabular-nums">
                  {currentData.stats.battery}%
                </span>
              </div>
            </div>

            {/* User Profile Avatar */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="
                        h-9 w-9 rounded-full
                        bg-gradient-to-tr from-zinc-800 to-zinc-700
                        ring-1 ring-white/10
                        flex items-center justify-center
                        text-[10px] font-bold text-zinc-300
                        shadow-lg
                        transition
                        hover:scale-105 hover:ring-white/20
                        active:scale-95
                      "
            >
              AL
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 w-full px-6 py-8 flex flex-col h-[calc(100vh-64px)] justify-center">
        {/* --- Main Content Stage --- */}
        <motion.div
          layout
          transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
          className={`flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32 lg:gap-48 w-full ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
        >
          {/* --- 1. The Earbud Visual (The Anchor) --- */}
          <motion.div
            layout="position"
            className="relative group shrink-0"
          >
            {/* Rotating / Pulsing Background Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className={`absolute inset-[-20%] rounded-full border border-dashed border-white/10 ${isLeft ? 'border-l-blue-500/50' : 'border-r-emerald-500/50'}`}
            />
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute inset-0 rounded-full bg-gradient-to-br ${currentData.bgGradient} blur-2xl opacity-40`}
            />

            {/* The Earbud Container */}
            <div className="relative h-80 w-80 md:h-[450px] md:w-[450px] rounded-full bg-zinc-900 border border-white/5 shadow-2xl flex items-center justify-center overflow-hidden">
              {/* Decorative Grid */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#09090b_70%)]"></div>

              {/* CONTINUOUS FLOATING CONTAINER */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut"
                }}
                className="relative z-10 w-full h-full flex items-center justify-center"
              >
                {/* SWITCHING ANIMATION */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeSide} // This key triggers the animation on change
                    src={isLeft ? "/left-earbud (1).png" : "/right-earbud (1).png"}
                    alt={`${activeSide} earbud`}

                    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)", rotate: isLeft ? -20 : 20, x: isLeft ? -50 : 50 }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)", rotate: 0, x: 0 }}
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 0.2 } }}

                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                      mass: 1
                    }}

                    className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-4"
                    draggable={false}
                  />
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Floating Connection Label */}
            <motion.div
              layout="position"
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 bg-zinc-950/80 px-4 py-2 rounded-full border border-white/5 backdrop-blur">
                <span className={`h-1.5 w-1.5 rounded-full ${currentData.glow} animate-pulse`} />
                {currentData.stats.connection}
              </div>
            </motion.div>
          </motion.div>

          {/* --- 2. The Controls / Information --- */}
          <motion.div
            layout="position"
            className="w-full max-w-md"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeSide} // Triggers animation on switch
                initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isLeft ? -20 : 20 }}
                transition={{ duration: 0.3 }}
                className={`flex flex-col ${isLeft ? 'items-start text-left' : 'items-end text-right'}`}
              >
                {/* Header Text */}
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2">
                  {currentData.id} Earbud
                </h2>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
                  {currentData.title}
                </h1>
                <p className={`text-zinc-400 mb-8 max-w-sm leading-relaxed ${isLeft ? 'mr-auto' : 'ml-auto'}`}>
                  {currentData.description}
                </p>

                {/* Interactive Sliders / Controls */}
                <div className="w-full space-y-6 bg-zinc-900/40 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                  {currentData.features.map((feature, idx) => (
                    <div key={feature.label} className="group">
                      <div className={`flex items-center justify-between mb-3 text-sm ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                        <div className={`flex items-center gap-2 ${feature.value > 50 ? 'text-zinc-200' : 'text-zinc-400'}`}>
                          <feature.icon size={16} />
                          <span>{feature.label}</span>
                        </div>
                        <span className="font-mono text-xs text-zinc-500">{feature.value}%</span>
                      </div>

                      {/* Custom Range Slider */}
                      <div className="relative h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${feature.value}%` }}
                          transition={{ duration: 1, delay: 0.2 + (idx * 0.1) }}
                          className={`absolute top-0 bottom-0 ${isLeft ? 'left-0 bg-blue-500' : 'right-0 bg-emerald-500'} opacity-80`}
                        />
                      </div>
                    </div>
                  ))}

                  {/* Action Button */}
                  <div className={`pt-4 flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
                    <button className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-white transition-colors group">
                      <Sliders size={14} />
                      Advanced Settings
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Battery Stat Small */}
                <div className={`mt-6 flex items-center gap-3 text-zinc-500 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                  <Battery size={16} />
                  <span className="text-sm font-medium">{currentData.stats.battery}% Charge</span>
                </div>

              </motion.div>
            </AnimatePresence>
          </motion.div>

        </motion.div>

        {/* --- Bottom Dynamic Island Switcher --- */}
        <div className="fixed bottom-12 inset-x-0 flex justify-center z-50 pointer-events-none">
          <motion.div
            layout
            className="
      pointer-events-auto
      flex items-center gap-1 p-1.5
      rounded-full
      bg-zinc-900/80
      backdrop-blur-2xl
      border border-white/10
      shadow-[0_20px_60px_rgba(0,0,0,0.6)]
      ring-1 ring-white/5
    "
            transition={{ type: "spring", stiffness: 160, damping: 18 }}
          >

            {(['left', 'right'] as const).map((side) => (
              <motion.button
                key={side}
                onClick={() => toggleSide(side)}
                whileTap={{ scale: 0.96 }}
                className="
          relative w-24 h-12 rounded-full
          flex items-center justify-center
          text-sm font-medium
          focus:outline-none
        "
              >
                {/* Shared Liquid Surface */}
                {activeSide === side && (
                  <motion.div
                    layoutId="island-surface"
                    className="
              absolute inset-0 rounded-full
              bg-gradient-to-b
              from-white/10 to-white/5
              shadow-inner
            "
                    transition={{
                      type: "spring",
                      stiffness: 220,
                      damping: 22,
                    }}
                  />
                )}

                {/* Text */}
                <span
                  className={`
                              relative z-10
                              transition-colors duration-300
                              ${activeSide === side
                      ? 'text-white'
                      : 'text-zinc-500 hover:text-zinc-300'}
                  `}
                >
                  {side === 'left' ? 'Left' : 'Right'}
                </span>

                {/* Subtle Active Glow */}
                {activeSide === side && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="
                                absolute -bottom-1
                                h-1 w-6 rounded-full
                                bg-gradient-to-r
                                from-transparent via-white/60 to-transparent
                              "
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <AnimatePresence>
          {sidebarOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSidebarOpen(false)}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              />

              {/* Sidebar */}
              <motion.aside
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 220, damping: 26 }}
                className="
          fixed right-0 top-0 h-full w-[360px]
          z-50
          bg-zinc-950/85
          backdrop-blur-2xl
          border-l border-white/10
          shadow-[-20px_0_60px_rgba(0,0,0,0.6)]
          flex flex-col
        "
              >

                {/* Header */}
                <div className="px-6 py-5 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 flex items-center justify-center text-xs font-bold text-white">
                      AL
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Alex Lee</p>
                      <p className="text-xs text-zinc-400">alex@icloud.com</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">

                  {/* Account Section */}
                  <section>
                    <p className="text-xs uppercase tracking-wider text-zinc-500 mb-3">
                      Account
                    </p>

                    <div className="space-y-2">
                      <SettingItem label="Profile" />
                      <SettingItem label="Security" />
                      <SettingItem label="Subscriptions" />
                      <SettingItem label="Sign Out" danger />
                    </div>
                  </section>

                  {/* Headphone Case Section */}
                  <section>
                    <p className="text-xs uppercase tracking-wider text-zinc-500 mb-3">
                      Headphone Case
                    </p>

                    <div className="
              rounded-2xl
              bg-white/5
              ring-1 ring-white/10
              p-4
              space-y-3
            ">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-white">AirPods Pro</p>
                        <span className="text-xs text-emerald-400">Connected</span>
                      </div>

                      {/* Battery */}
                      <div className="space-y-2">
                        <BatteryRow label="Left" value={92} />
                        <BatteryRow label="Right" value={88} />
                        <BatteryRow label="Case" value={64} />
                      </div>
                    </div>
                  </section>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

      </main>
    </div>
  );
}