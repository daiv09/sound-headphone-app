import React from 'react';

export const CTA = () => {
    return (
        <section className="relative overflow-hidden bg-blue-700 py-28 px-6">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-cyan-400/25 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-500/25 blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.09),_transparent_60%)]" />
            </div>

            <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
                <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-blue-100/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Limited launch offer
                </span>

                <div className="mb-10 rounded-3xl border border-white/0 bg-white/5 px-16 py-20 shadow-[0_30px_80px_rgba(15,23,42,0.9)] backdrop-blur-2xl">
                    <h2 className="bg-gradient-to-r from-white via-sky-100 to-blue-200 bg-clip-text text-4xl font-extrabold text-transparent md:text-6xl lg:text-7xl">
                        Hear the&nbsp;Impossible.
                    </h2>
                    <p className="mt-5 text-lg text-blue-100/90 md:text-xl">
                        Studio-grade sound, active noise isolation, and all‑day comfort.
                    </p>

                    <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <button className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-base font-semibold text-blue-700 shadow-[0_20px_45px_rgba(15,23,42,0.75)] hover:scale-105 transition-all">
                            Buy SOUND Pro X · $399
                        </button>
                        <button className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-8 py-3 text-sm font-medium text-blue-100 backdrop-blur hover:bg-white/10">
                            Learn more
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};