// app/pages/accessories/page.tsx
'use client';

import {
  CaseSensitive,
  Cable,
  BatteryCharging,
  ShieldCheck,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Navbar } from '@/app/components/layout/Navbar';
import { Footer } from '@/app/components/layout/Footer';

const accessories = [
  {
    id: 'case-pro',
    name: 'SOUND Shield Case',
    badge: 'New',
    description:
      'Impact‑resistant travel case tuned for SOUND Pro X and SOUND Mini.',
    price: '₹2,490',
    accent: 'from-emerald-500/20 via-emerald-500/5 to-zinc-950',
    icon: CaseSensitive,
    status: 'In stock',
    image:
      'https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?q=80&w=1200&auto=format&fit=crop', // replace with your case image
  },
  {
    id: 'usb-c',
    name: 'USB‑C Audio Cable',
    badge: 'Studio',
    description: 'Low‑latency braided cable for hi‑res wired listening.',
    price: '₹1,290',
    accent: 'from-sky-500/20 via-sky-500/5 to-zinc-950',
    icon: Cable,
    status: 'Limited',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop', // cable image
  },
  {
    id: 'charging-dock',
    name: 'Fast Charge Dock',
    badge: 'Desk',
    description: 'Magnetic desktop dock with adaptive fast charging.',
    price: '₹3,990',
    accent: 'from-violet-500/20 via-violet-500/5 to-zinc-950',
    icon: BatteryCharging,
    status: 'In stock',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop', // dock image (replace)
  },
];

export default function AccessoriesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-zinc-100">
      <Navbar/>
      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 space-y-12">
        {/* background glow */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -top-32 left-1/3 h-64 w-64 rounded-full bg-sky-500/30 blur-3xl" />
          <div className="absolute -bottom-40 right-0 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        </div>

        {/* Header */}
        <header className="relative z-10 rounded-3xl border border-zinc-800/80 bg-zinc-950/70 px-6 py-6 md:px-8 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-[0_22px_80px_rgba(0,0,0,0.85)]">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-zinc-500 uppercase flex items-center gap-2">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]" />
              SOUND ecosystem
            </p>
            <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
              Accessories for every session
            </h1>
            <p className="mt-3 text-sm text-zinc-400 max-w-xl">
              Cases, cables, and charging built to match your SOUND headphones,
              so everything on your desk and in your bag feels like one family.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3 text-xs text-zinc-400">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span>2‑year limited warranty on official accessories</span>
            </div>
            <p className="text-[11px] text-zinc-500">
              Free standard shipping on orders over ₹4,000.
            </p>
          </div>
        </header>

        {/* Grid */}
        <section className="relative z-10 grid gap-8 md:grid-cols-3">
          {accessories.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.id}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="group rounded-3xl border border-zinc-900/80 bg-zinc-950/80 overflow-hidden flex flex-col shadow-[0_18px_70px_rgba(0,0,0,0.9)]"
              >
                {/* Image / top panel */}
                <div
                  className={`relative bg-gradient-to-br ${item.accent} pb-4`}
                >
                  {/* product image */}
                  <div className="relative h-40 w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  </div>

                  {/* labels + name */}
                  <div className="px-5 mt-3">
                    <div className="flex items-center justify-between mb-3">
                      <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-200">
                        ACCESSORY
                      </span>
                      <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-semibold text-zinc-50">
                        {item.badge}
                      </span>
                    </div>
                    <div className="flex items-end justify-between gap-4">
                      <div className="space-y-1.5">
                        <h2 className="text-base font-semibold">
                          {item.name}
                        </h2>
                        <p className="text-xs text-zinc-300">
                          {item.description}
                        </p>
                      </div>
                      <div className="h-12 w-12 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center shadow-[0_14px_40px_rgba(0,0,0,0.9)]">
                        <Icon size={20} className="text-zinc-50" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price / CTA */}
                <div className="flex-1 px-5 py-4 flex items-center justify-between gap-3 text-sm bg-gradient-to-t from-black via-zinc-950/80 to-zinc-950/40">
                  <div className="space-y-1">
                    <p className="text-lg font-semibold">{item.price}</p>
                    <p
                      className={`text-[11px] ${
                        item.status === 'Limited'
                          ? 'text-amber-400'
                          : 'text-zinc-500'
                      }`}
                    >
                      {item.status}
                    </p>
                  </div>
                  <button className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-medium bg-zinc-100 text-black hover:bg-white transition-colors">
                    Add to bag
                  </button>
                </div>
              </motion.article>
            );
          })}
        </section>

        {/* Compatibility strip */}
        <section className="relative z-10 mt-4 rounded-3xl border border-zinc-900 bg-zinc-950/80 px-5 py-4 text-xs text-zinc-400 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p>
            All accessories are tuned for SOUND Pro X and SOUND Mini, and work
            with most USB‑C audio sources.
          </p>
          <button className="self-start md:self-auto px-3 py-1.5 rounded-full border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900 transition-colors">
            View compatibility details
          </button>
        </section>
      </div>
      <Footer/>
    </main>
  );
}
