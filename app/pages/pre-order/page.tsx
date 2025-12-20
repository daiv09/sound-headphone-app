// app/pre-order/page.tsx
'use client';

import { ShoppingBag, ShieldCheck, Truck } from 'lucide-react';

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-zinc-50">
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-24 space-y-10">
        <header className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase text-emerald-300">
            <ShoppingBag size={14} />
            Pre‑order
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Reserve your SOUND PRO X
          </h1>
          <p className="text-sm text-zinc-400 max-w-xl">
            Lock in your pair from the first production wave, with priority shipping and easy updates
            as your headphones move through the line.[web:83]
          </p>
        </header>

        <section className="grid gap-8 md:grid-cols-[1.2fr,1fr]">
          {/* Details / summary */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold">SOUND PRO X</p>
                  <p className="text-xs text-zinc-400">Obsidian Black · Adaptive Noise · Spatial Audio</p>
                </div>
                <p className="text-lg font-semibold">₹29,990</p>
              </div>
              <ul className="text-xs text-zinc-400 space-y-1.5">
                <li>• Fully refundable until your unit ships.[web:83]</li>
                <li>• Early access to feature updates and tuning presets.</li>
                <li>• Priority support during the launch window.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-emerald-400" />
                <p className="font-semibold">Secure reservation</p>
              </div>
              <p>
                Your payment method is authorized but only charged right before shipping, so you can
                change or cancel your order as plans evolve.[web:83]
              </p>
            </div>
          </div>

          {/* Form side */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-6 space-y-5 text-sm">
            <div className="space-y-1">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-zinc-500">
                Contact email
              </p>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full rounded-xl border border-zinc-800 bg-black/40 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500"
              />
            </div>

            <div className="space-y-1">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-zinc-500">
                Shipping region
              </p>
              <select className="mt-1 w-full rounded-xl border border-zinc-800 bg-black/40 px-3 py-2 text-sm text-zinc-100 focus:outline-none focus:border-zinc-500">
                <option>India</option>
                <option>United States</option>
                <option>Europe</option>
                <option>Other</option>
              </select>
            </div>

            <button
              type="button"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-50 px-4 py-2.5 text-sm font-semibold text-black hover:bg-white transition-colors"
            >
              <ShoppingBag size={16} />
              Place pre‑order
            </button>

            <p className="flex items-center gap-2 text-[11px] text-zinc-500">
              <Truck size={14} className="text-zinc-400" />
              Estimated shipping window will be shown on your confirmation email.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
