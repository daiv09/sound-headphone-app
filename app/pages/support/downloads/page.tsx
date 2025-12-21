// app/support/downloads/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Download, Smartphone } from 'lucide-react';
import { Navbar } from '@/app/components/layout/Navbar';

const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

export default function DownloadsPage() {
    return (
        <main className="min-h-screen bg-linear-to-b from-black via-zinc-950 to-black text-zinc-50">
            <Navbar />
            <div className="relative flex min-h-screen items-center justify-center px-6 pt-20">
                {/* background glow */}
                <div className="pointer-events-none absolute inset-0 opacity-50">
                    <div className="absolute -top-40 left-1/3 h-72 w-72 rounded-full bg-sky-500/30 blur-3xl" />
                    <div className="absolute -bottom-40 right-10 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
                </div>

                <motion.section
                    initial="hidden"
                    animate="visible"
                    transition={{ staggerChildren: 0.08, delayChildren: 0.1 }}
                    className="relative z-10 grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr] items-center"
                >
                    {/* Left: copy + buttons */}
                    <div className="space-y-7">
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold tracking-[0.25em] uppercase text-emerald-300">
                            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                            SOUND app
                        </motion.div>

                        <motion.h1
                            variants={fadeInUp}
                            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight"
                        >
                            One app for every SOUND device.
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="text-sm md:text-base text-zinc-400 max-w-xl"
                        >
                            Personalize ANC, switch sound profiles, check safe listening stats,
                            and keep your SOUND Pro X and SOUND Mini up to date—all from a
                            single app designed for headphones first.
                        </motion.p>

                        {/* Download buttons */}
                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col sm:flex-row gap-4 pt-2"
                        >
                            <button
                                type="button"
                                className="inline-flex items-center gap-3 rounded-2xl bg-white text-black px-4 py-3 text-left shadow-[0_18px_60px_rgba(0,0,0,0.7)] hover:bg-zinc-100 transition-colors"
                            >
                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white">
                                    <Download size={18} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase tracking-[0.18em] text-zinc-700">
                                        Download on
                                    </span>
                                    <span className="text-sm font-semibold">App Store</span>
                                </div>
                            </button>

                            <button
                                type="button"
                                className="inline-flex items-center gap-3 rounded-2xl border border-zinc-700 bg-black/60 px-4 py-3 text-left text-zinc-50 shadow-[0_18px_60px_rgba(0,0,0,0.7)] hover:bg-black/80 hover:border-zinc-500 transition-colors"
                            >
                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
                                    <Download size={18} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase tracking-[0.18em] text-zinc-400">
                                        Get it on
                                    </span>
                                    <span className="text-sm font-semibold">Google Play</span>
                                </div>
                            </button>
                        </motion.div>

                        <motion.p
                            variants={fadeInUp}
                            className="text-[11px] text-zinc-500 pt-2"
                        >
                            Requires iOS 16 or later, or Android 12 or later. Some features
                            may vary by region.
                        </motion.p>
                    </div>

                    {/* Right: splash mock / phone */}
                    <motion.div
                        variants={fadeInUp}
                        className="relative flex items-center justify-center"
                    >
                        <div className="relative h-[420px] md:h-[460px] ">
                            {/* soft outer glow */}
                            <div className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_bottom,_rgba(52,211,153,0.22),transparent_55%)] opacity-60 blur-2xl" />

                            {/* video that already includes phone frame + screen */}
                            <video
                                src="/app-showcase.mp4"  // export this with the iPhone frame baked in
                                className="relative h-full w-full object-contain rounded-[2.5rem] shadow-[0_40px_120px_rgba(0,0,0,0.9)]"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="metadata"
                            />
                        </div>
                    </motion.div>
                </motion.section>
            </div>
        </main>
    );
}
