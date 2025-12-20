// app/film/page.tsx
'use client';
import { Navbar } from '@/app/components/layout/Navbar';
import { Play, ExternalLink } from 'lucide-react';
import { Footer } from '@/app/components/layout/Footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-zinc-50">
        <Navbar/>
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-24 space-y-10">
        <header className="space-y-3 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase text-indigo-300">
            <Play size={14} />
            Sound Pro X film
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Watch the SOUND PRO X launch film
          </h1>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto">
            A short look at how SOUND PRO X bends noise, space, and silence to stay out of your way
            and closer to your music.[web:101][web:114]
          </p>
        </header>

        {/* Video / placeholder */}
        <section className="space-y-4">
          <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/70">
            {/* Replace this div with an actual <video> or embedded player */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <button
                type="button"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-black hover:bg-zinc-200 transition-colors shadow-xl shadow-black/40"
              >
                <Play size={26} className="ml-1" />
              </button>
              <p className="text-xs text-zinc-400">
                Tap to play the launch film.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
            <p>Shot in Dolby Vision with a mix mastered for headphones.</p>
            <button className="inline-flex items-center gap-1 rounded-full border border-zinc-700 px-3 py-1 hover:border-zinc-500 hover:bg-zinc-900 transition-colors">
              <ExternalLink size={13} />
              Open in a new tab
            </button>
          </div>
        </section>

        {/* Credits / notes */}
        <section className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 text-xs text-zinc-400 space-y-2">
          <p>
            The film highlights how adaptive noise, spatial audio, and safe listening modes work together
            during real commutes, calls, and late‑night sessions.[web:101][web:108]
          </p>
          <p>
            For the best experience, use headphones and enable high quality in your player settings.
          </p>
        </section>
      </div>
      <Footer/>
    </main>
  );
}
