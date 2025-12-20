// app/pages/accessories/page.tsx
'use client';

import { CaseSensitive, Cable, BatteryCharging, ShieldCheck } from 'lucide-react';

const accessories = [
  {
    id: 'case-pro',
    name: 'SOUND Shield Case',
    badge: 'New',
    description: 'Impact‑resistant travel case tuned for SonicWare Pro and Mini.',
    price: '₹2,490',
    accent: 'from-emerald-500/20 via-emerald-500/5 to-zinc-950',
    icon: CaseSensitive,
    status: 'In stock',
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
  },
];

export default function AccessoriesPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-24 space-y-10">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase">
              SOUND ecosystem
            </p>
            <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
              Accessories for every session
            </h1>
            <p className="mt-3 text-sm text-zinc-400 max-w-xl">
              Cases, cables, and charging built to match your SOUND headphones, so everything
              in your setup feels like it was designed together.[web:83][web:84]
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <ShieldCheck size={16} className="text-emerald-400" />
            2‑year limited warranty on official accessories.
          </div>
        </header>

        {/* Grid */}
        <section className="grid gap-7 md:grid-cols-3">
          {accessories.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.id}
                className="group rounded-3xl border border-zinc-900 bg-zinc-950/70 overflow-hidden flex flex-col"
              >
                <div
                  className={`relative p-5 pb-4 bg-to-br ${item.accent}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-200">
                      ACCESSORY
                    </span>
                    <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold text-zinc-100">
                      {item.badge}
                    </span>
                  </div>
                  <div className="flex items-end justify-between gap-4">
                    <div className="space-y-1.5">
                      <h2 className="text-base font-semibold">{item.name}</h2>
                      <p className="text-xs text-zinc-300">{item.description}</p>
                    </div>
                    <div className="h-12 w-12 rounded-2xl bg-black/30 border border-white/10 flex items-center justify-center shadow-[0_14px_40px_rgba(0,0,0,0.8)]">
                      <Icon size={20} className="text-zinc-50" />
                    </div>
                  </div>
                </div>

                <div className="flex-1 px-5 py-4 flex items-center justify-between gap-3 text-sm">
                  <div className="space-y-1">
                    <p className="text-lg font-semibold">{item.price}</p>
                    <p className="text-[11px] text-zinc-500">{item.status}</p>
                  </div>
                  <button className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-medium bg-zinc-100 text-black hover:bg-white transition-colors">
                    Add to bag
                  </button>
                </div>
              </article>
            );
          })}
        </section>

        {/* Compatibility strip */}
        <section className="mt-4 rounded-3xl border border-zinc-900 bg-zinc-950/70 px-5 py-4 text-xs text-zinc-400 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p>
            All accessories are tuned for SOUND Pro X and SOUND Mini, and work with most
            USB‑C audio sources.[web:84][web:88]
          </p>
          <button className="self-start md:self-auto px-3 py-1.5 rounded-full border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900 transition-colors">
            View compatibility details
          </button>
        </section>
      </div>
    </main>
  );
}
