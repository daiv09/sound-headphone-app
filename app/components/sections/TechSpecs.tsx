// app/components/sections/TechSpecs.tsx
'use client';

import React from 'react';
import {
  Speaker,
  Bluetooth,
  Battery,
  Radio,
  Activity,
  Zap,
  Music,
  Scale,
} from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { FadeIn } from '../ui/FadeIn';

const specs = [
  { icon: Speaker, title: 'Driver Unit', val: '40mm Beryllium' },
  { icon: Bluetooth, title: 'Connectivity', val: 'Bluetooth 5.4' },
  { icon: Battery, title: 'Battery Life', val: '40 Hours ANC On' },
  { icon: Radio, title: 'Range', val: '100m Line of Sight' },
  { icon: Activity, title: 'Frequency', val: '4Hz – 40,000Hz' },
  { icon: Zap, title: 'Charging', val: 'USB‑C Fast Charge' },
  { icon: Music, title: 'Codecs', val: 'LDAC, aptX HD, AAC' },
  { icon: Scale, title: 'Weight', val: '240g' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export const TechSpecs = () => {
  return (
    <section
      id="specs"
      className="relative overflow-hidden border-t border-zinc-900 bg-gradient-to-b from-black via-zinc-950 to-black py-32"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-40 left-1/4 h-72 w-72 rounded-full bg-sky-500/25 blur-3xl" />
        <div className="absolute -bottom-52 right-8 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-10 h-64 w-64 rounded-full bg-blue-500/10 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="mb-6 flex items-center justify-center gap-2 text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-500">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]" />
            Sound architecture
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <motion.h2
            className="mb-3 text-center text-4xl font-semibold tracking-tight md:text-5xl"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Technical specifications
          </motion.h2>
        </FadeIn>

        <FadeIn delay={0.18}>
          <p className="mx-auto mb-14 max-w-2xl text-center text-sm text-zinc-400 md:text-[0.9rem]">
            Everything under the hood that makes SOUND PRO X feel effortless:
            from driver materials and codecs to the way it sips power over
            long sessions.
          </p>
        </FadeIn>

        {/* Specs grid */}
        <motion.div
          className="relative overflow-hidden rounded-[2.2rem] border border-zinc-800/80 bg-zinc-950/40 backdrop-blur-xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          {/* Inner shimmering border */}
          <div className="pointer-events-none absolute inset-0 rounded-[2.2rem] border border-white/5/40" />

          {/* subtle top gradient accent */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/8 via-white/0 to-transparent" />

          <div className="grid grid-cols-1 border-t border-zinc-800/60 md:grid-cols-2 lg:grid-cols-4">
            {specs.map((spec, i) => (
              <FadeIn key={spec.title + i} className="contents">
                <motion.div
                  variants={cardVariants}
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                    boxShadow: '0 26px 60px rgba(15,23,42,0.95)',
                  }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className={`
                    group relative border-b border-zinc-800/70 bg-gradient-to-br
                    from-zinc-950 via-zinc-950/85 to-zinc-900/80 px-7 py-7
                    md:px-6 md:py-8
                    lg:px-7 lg:py-9
                    lg:border-r
                    last:border-r-0
                  `}
                >
                  {/* card glow */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 rounded-[1.9rem] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),transparent_55%),radial-gradient(circle_at_bottom,_rgba(52,211,153,0.14),transparent_60%)] blur-2xl" />
                  </div>

                  <div className="relative flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="relative inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-300">
                        <spec.icon size={20} />
                        <span className="pointer-events-none absolute inset-0 rounded-2xl bg-sky-400/25 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
                      </div>
                      <span className="rounded-full border border-zinc-800/90 bg-black/50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500 group-hover:border-zinc-600/80 group-hover:text-zinc-300">
                        spec
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                        {spec.title}
                      </h4>
                      <p className="text-lg font-medium tracking-tight text-white md:text-xl">
                        {spec.val}
                      </p>
                    </div>

                    <p className="text-[11px] leading-relaxed text-zinc-500">
                      {spec.title === 'Driver Unit' &&
                        'Precision‑tuned diaphragms for fast transients and deep, controlled low end.'}
                      {spec.title === 'Connectivity' &&
                        'Multi‑point pairing keeps your laptop and phone in sync without re‑pairing.'}
                      {spec.title === 'Battery Life' &&
                        'Long sessions with ANC on, plus quick top‑ups from the case when you dock.'}
                      {spec.title === 'Range' &&
                        'Optimized antenna design for fewer dropouts in crowded, noisy RF spaces.'}
                      {spec.title === 'Frequency' &&
                        'Extended response captures both sub‑bass weight and subtle air up top.'}
                      {spec.title === 'Charging' &&
                        '15 minutes on the cable is enough for a few extra hours of listening.'}
                      {spec.title === 'Codecs' &&
                        'High‑resolution wireless support when your device and service allow it.'}
                      {spec.title === 'Weight' &&
                        'Balanced clamp force and weight distribution for all‑day comfort.'}
                    </p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
