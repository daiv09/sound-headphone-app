'use client';
import React from 'react';
import {
  Speaker, Bluetooth, Battery, Radio,
  Activity, Zap, Music, Scale
} from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from '../ui/FadeIn';

const specs = [
  { icon: Speaker, title: 'Driver Unit', val: '40mm Beryllium' },
  { icon: Bluetooth, title: 'Connectivity', val: 'Bluetooth 5.4' },
  { icon: Battery, title: 'Battery Life', val: '40 Hours ANC On' },
  { icon: Radio, title: 'Range', val: '100m Line of Sight' },
  { icon: Activity, title: 'Frequency', val: '4Hz - 40,000Hz' },
  { icon: Zap, title: 'Charging', val: 'USB-C Fast Charge' },
  { icon: Music, title: 'Codecs', val: 'LDAC, aptX HD, AAC' },
  { icon: Scale, title: 'Weight', val: '240g' },
];

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export const TechSpecs = () => {
  return (
    <section id="specs" className="py-32 bg-black border-t border-zinc-900 relative overflow-hidden">
      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-40 left-1/3 h-72 w-72 rounded-full bg-sky-500/25 blur-3xl" />
        <div className="absolute -bottom-40 right-10 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
          <motion.h2
            className="text-4xl md:text-5xl font-semibold mb-16 text-center tracking-tight"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Technical Specifications
          </motion.h2>
        </FadeIn>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-zinc-800/80 rounded-3xl overflow-hidden bg-zinc-950/40 backdrop-blur"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          {specs.map((spec, i) => (
            <FadeIn key={i} className="contents">
              <motion.div
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  boxShadow: '0 18px 45px rgba(15,23,42,0.85)',
                }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="group p-8 border-b md:border-b-0 border-r border-zinc-800/70 last:border-r-0 bg-gradient-to-br from-zinc-950 via-zinc-950/80 to-zinc-900/70 hover:from-zinc-900 hover:via-zinc-900/90 hover:to-zinc-800/80"
              >
                <div className="flex flex-col gap-3">
                  <div className="relative inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/10 text-blue-500">
                    <spec.icon size={22} />
                    <span className="absolute inset-0 rounded-2xl bg-sky-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <h4 className="text-zinc-500 text-xs uppercase tracking-[0.22em]">
                    {spec.title}
                  </h4>
                  <p className="text-white text-lg font-medium tracking-tight">
                    {spec.val}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
