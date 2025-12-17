// app/dashboard/page.tsx
'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Battery,
  Sliders,
  ChevronRight,
  Compass,
  Waves,
  Cpu,
  Mic2,
  Radar,
} from 'lucide-react';
import { EARBUD_DATA, EarbudSide } from '@/app/lib/data';

import Header from '@/app/components/dashboard/Header';
import Sidebar from '@/app/components/dashboard/Sidebar';
import Switcher from '@/app/components/dashboard/Switcher';

// --- Animation Variants ---
const contentContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
  exit: { opacity: 0, y: -10, filter: 'blur(5px)' },
};

export default function DashboardPage() {
  const [activeSide, setActiveSide] = useState<EarbudSide>('left');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const detailsRef = useRef<HTMLDivElement | null>(null);

  const currentData = EARBUD_DATA[activeSide];
  const isLeft = activeSide === 'left';

  const scrollToDetails = () => {
    detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 overflow-hidden selection:bg-zinc-800">
      {/* 1. Background Logic */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{
            background: isLeft
              ? 'radial-gradient(circle at 0% 50%, rgba(59, 130, 246, 0.15), transparent 50%)'
              : 'radial-gradient(circle at 100% 50%, rgba(16, 185, 129, 0.15), transparent 50%)',
          }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        />
      </div>

      {/* 2. Header */}
      <Header
        currentData={currentData}
        isLeft={isLeft}
        onOpenSidebar={() => setSidebarOpen(true)}
      />

      {/* 3. Main Stage */}
      <main className="relative z-10 w-full px-6 py-8 flex flex-col h-[calc(100vh-64px)] justify-center">
        <motion.div
          layout
          transition={{ type: 'spring', bounce: 0, duration: 0.9 }}
          className={`flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32 lg:gap-48 w-full ${
            isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}
        >
          {/* EARBUD VISUAL */}
          <motion.div layout="position" className="relative group shrink-0">
            {/* Background Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className={`absolute inset-[-20%] rounded-full border border-dashed border-white/10 ${
                isLeft ? 'border-l-blue-500/50' : 'border-r-emerald-500/50'
              }`}
            />
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className={`absolute inset-0 rounded-full bg-gradient-to-br ${currentData.bgGradient} blur-2xl opacity-40`}
            />

            {/* Image Container */}
            <div className="relative h-80 w-80 md:h-[450px] md:w-[450px] rounded-full border border-white/5 shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0" />
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                className="relative z-10 w-full h-full flex items-center justify-center"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeSide}
                    src={isLeft ? '/left-earbud (1).png' : '/right-earbud (1).png'}
                    alt={`${activeSide} earbud`}
                    initial={{
                      opacity: 0,
                      scale: 1.5,
                      filter: 'blur(15px)',
                      rotate: isLeft ? -30 : 30,
                      x: isLeft ? -80 : 80,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      filter: 'blur(0px)',
                      rotate: 0,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.6,
                      filter: 'blur(20px)',
                      transition: { duration: 0.25 },
                    }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-4"
                    draggable={false}
                  />
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Floating Label */}
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

          {/* CONTROLS */}
          <motion.div layout="position" className="w-full max-w-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSide}
                variants={contentContainerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`flex flex-col ${
                  isLeft ? 'items-start text-left' : 'items-end text-right'
                }`}
              >
                <motion.h2
                  variants={textItemVariants}
                  className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2"
                >
                  {currentData.id} Earbud
                </motion.h2>
                <motion.h1
                  variants={textItemVariants}
                  className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500"
                >
                  {currentData.title}
                </motion.h1>
                <motion.p
                  variants={textItemVariants}
                  className={`text-zinc-400 mb-8 max-w-sm leading-relaxed ${
                    isLeft ? 'mr-auto' : 'ml-auto'
                  }`}
                >
                  {currentData.description}
                </motion.p>

                <motion.div
                  variants={textItemVariants}
                  className="w-full space-y-6 bg-zinc-900/40 p-6 rounded-2xl border border-white/5 backdrop-blur-sm"
                >
                  {currentData.features.map((feature: any, idx: number) => (
                    <div key={feature.label} className="group">
                      <div
                        className={`flex items-center justify-between mb-3 text-sm ${
                          isLeft ? 'flex-row' : 'flex-row-reverse'
                        }`}
                      >
                        <div
                          className={`flex items-center gap-2 ${
                            feature.value > 50 ? 'text-zinc-200' : 'text-zinc-400'
                          }`}
                        >
                          <feature.icon size={16} /> <span>{feature.label}</span>
                        </div>
                        <span className="font-mono text-xs text-zinc-500">
                          {feature.value}%
                        </span>
                      </div>
                      <div className="relative h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${feature.value}%` }}
                          transition={{ duration: 1, delay: 0.4 + idx * 0.15 }}
                          className={`absolute top-0 bottom-0 ${
                            isLeft ? 'left-0 bg-blue-500' : 'right-0 bg-emerald-500'
                          } opacity-80`}
                        />
                      </div>
                    </div>
                  ))}

                  <div
                    className={`pt-4 flex ${
                      isLeft ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={scrollToDetails}
                      className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-white transition-colors group"
                    >
                      <Sliders size={14} />
                      Advanced Technologies
                      <ChevronRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  </div>
                </motion.div>

                <motion.div
                  variants={textItemVariants}
                  className={`mt-6 flex items-center gap-3 text-zinc-500 ${
                    isLeft ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <Battery size={16} />{' '}
                  <span className="text-sm font-medium">
                    {currentData.stats.battery}% Charge
                  </span>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </main>

      {/* 4. Advanced Details Section */}
      <section
        ref={detailsRef}
        className="relative z-10 w-full px-6 pb-28 pt-6 md:pt-10 bg-gradient-to-t from-zinc-950/80 via-black/40 to-transparent"
      >
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-[1.4fr,1fr]">
          {/* Orientation & Fit */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 110, damping: 22 }}
            className="rounded-3xl border border-white/5 bg-zinc-950/70 backdrop-blur-xl p-6 md:p-7 space-y-5"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Compass size={16} className="text-sky-400" />
                <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
                  Orientation & Fit
                </h3>
              </div>
              <span className="text-[11px] text-zinc-500">
                Optimized for {isLeft ? 'left' : 'right'} ear geometry
              </span>
            </div>

            <div className="grid gap-4 text-sm text-zinc-300 md:grid-cols-2">
              <div className="space-y-1.5">
                <p className="font-medium text-zinc-100">Dynamic orientation engine</p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Auto‑detects wearing angle using a 9‑axis IMU to keep spatial audio locked
                  to your head, even when you tilt or turn quickly.
                </p>
              </div>
              <div className="space-y-1.5">
                <p className="font-medium text-zinc-100">Ear contour mapping</p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Micro‑vents and pressure sensors adapt seal and EQ in real time for comfort,
                  clarity, and safe listening over long sessions.
                </p>
              </div>
            </div>

            <div className="mt-3 grid gap-3 text-xs text-zinc-400 md:grid-cols-3">
              <DetailPill label="Head tracking" value="6‑axis" />
              <DetailPill label="Orientation refresh" value="120 Hz" />
              <DetailPill label="Fit calibration" value="On‑device" />
            </div>
          </motion.div>

          {/* Advanced Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.05, type: 'spring', stiffness: 110, damping: 22 }}
            className="rounded-3xl border border-white/5 bg-zinc-950/80 backdrop-blur-2xl p-6 md:p-7 space-y-4"
          >
            <div className="flex items-center gap-2 mb-1">
              <Cpu size={16} className="text-emerald-400" />
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
                Advanced Stack
              </h3>
            </div>

            <ul className="space-y-3 text-xs text-zinc-300">
              <li className="flex items-start gap-2">
                <Waves size={14} className="mt-[2px] text-sky-400" />
                <div>
                  <p className="font-medium text-zinc-100">Adaptive ANC 2.0</p>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Dual‑band noise cancelling with environment‑aware gain, tuned
                    independently for {isLeft ? 'left' : 'right'} channel leakage.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mic2 size={14} className="mt-[2px] text-emerald-400" />
                <div>
                  <p className="font-medium text-zinc-100">Beam‑formed voice pickup</p>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Triple‑mic array focuses on your voice and suppresses lateral noise for
                    crisp calls and in‑game comms.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Radar size={14} className="mt-[2px] text-violet-400" />
                <div>
                  <p className="font-medium text-zinc-100">Low‑latency link engine</p>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Custom codec pipeline with adaptive bitrate and sub‑30 ms target latency
                    for competitive gaming and live monitoring.
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 5. Bottom Switcher */}
      <Switcher activeSide={activeSide} onToggle={setActiveSide} />

      {/* 6. Sidebar Modal */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
}

// Small helper for pills in the details grid
const DetailPill = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col rounded-xl border border-white/5 bg-zinc-900/60 px-3 py-2">
    <span className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
      {label}
    </span>
    <span className="text-xs font-medium text-zinc-100 mt-1">{value}</span>
  </div>
);
