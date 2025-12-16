// app/overview/page.tsx
'use client';

import { Navbar } from '@/app/components/layout/Navbar';
import { motion } from 'framer-motion';
import { Headphones, Waves, Shield, Smartphone } from 'lucide-react';

const overviewFeatures = [
  {
    icon: Headphones,
    title: 'Studio‑grade sound',
    body: 'Custom 40mm drivers, advanced ANC, and tuned acoustics engineered for deep, detailed listening.',
  },
  {
    icon: Waves,
    title: 'Adaptive listening',
    body: 'Real‑time audio tuning that reacts to your environment, commute, or focus session automatically.',
  },
  {
    icon: Shield,
    title: 'All‑day comfort',
    body: 'Featherlight titanium frame, memory‑foam earcups, and pressure‑balanced design for long sessions.',
  },
  {
    icon: Smartphone,
    title: 'Seamless ecosystem',
    body: 'Multi‑device pairing, low‑latency gaming mode, and a companion app to fine‑tune every detail.',
  },
];

export default function OverviewPage() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      <Navbar/>
      {/* soft background glows */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-40 left-[-10%] h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute -bottom-40 right-[-5%] h-80 w-80 rounded-full bg-emerald-400/15 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col gap-16 lg:flex-row lg:items-center">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-xl"
        >
          <p className="mb-3 text-[0.7rem] md:text-xs font-semibold tracking-[0.3em] uppercase text-blue-200/70">
            Overview
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-5">
            One pair of headphones.
            <br />
            Every moment, perfected.
          </h1>
          <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
            SOUND Pro X combines studio‑grade drivers, adaptive noise cancellation, and a featherlight
            titanium frame to deliver a listening experience that feels effortless—whether you are on a
            red‑eye, deep in flow, or walking the city at night.
          </p>
        </motion.div>

        {/* Right: animated feature grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-7 flex-1"
        >
          {overviewFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: 0.08 * i }}
              whileHover={{
                y: -6,
                scale: 1.02,
                boxShadow: '0 18px 50px rgba(0,0,0,0.7)',
              }}
              className="relative rounded-2xl border border-zinc-800/70 bg-zinc-900/70 backdrop-blur-xl px-5 py-5 flex flex-col gap-3"
            >
              <div className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                <f.icon size={20} />
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
                {f.title}
              </h3>
              <p className="text-sm text-zinc-200/90 leading-relaxed">
                {f.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
