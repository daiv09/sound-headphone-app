// app/pages/account/support/page.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, HelpCircle } from 'lucide-react';
import Header from '@/app/components/dashboard/Header';
import Sidebar from '@/app/components/dashboard/Sidebar';
import { useRouter } from 'next/navigation';

const headerData = {
    id: 'account',
    title: 'Support',
    description: '',
    bgGradient: '',
    glow: '',
    stats: { connection: '', battery: 0 },
    features: [],
};

export default function Page() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const router = useRouter();

    const handleOpenPdf = () => {
        // opens in same tab
        router.push('/User-Manual.pdf');
    };

    const faqs = [
        {
            q: 'How do I reset my SonicWare earbuds?',
            a: 'Place both earbuds in the case, hold the pairing button for 15 seconds until the LED pulses white, then re‑pair from Bluetooth settings.',
        },
        {
            q: 'Why does ANC change when I move?',
            a: 'Adaptive ANC listens to your environment and head movement, shifting filters to keep your mix stable while reducing fatigue.',
        },
        {
            q: 'Can I sync presets across devices?',
            a: 'Yes. When signed in with your SOUND ID, presets follow you across desktop, mobile and connected SonicWare devices.',
        },
    ];

    return (
        <div className="min-h-screen bg-black text-zinc-100">
            <Header
                currentData={headerData}
                isLeft={true}
                onOpenSidebar={() => setSidebarOpen(true)}
            />

            <main className="pt-20 px-6 md:px-12 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <header className="space-y-2">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                            Support
                        </p>
                        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                            Help & user manual
                        </h1>
                        <p className="text-sm text-zinc-400 max-w-xl">
                            Browse quick answers or open the full guide for your SonicWare Pro setup.
                        </p>
                    </header>

                    <motion.section
                        initial={{ opacity: 0, y: 16, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="rounded-3xl border border-white/5 bg-zinc-950/80 p-6 md:p-7 shadow-[0_24px_90px_rgba(0,0,0,0.75)] space-y-5"
                    >
                        <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                                <BookOpen className="h-4 w-4 text-sky-400" />
                                <h2 className="text-sm font-semibold">User manual</h2>
                            </div>
                            <button className="text-[11px] text-zinc-300 hover:text-white"
                                onClick={handleOpenPdf}
                            >
                                Open PDF
                            </button>
                        </div>
                        <p className="text-xs text-zinc-400">
                            The full SonicWare Pro guide covers pairing, fit tests, ANC presets, spatial
                            audio and troubleshooting.
                        </p>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, y: 16, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.28, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                        className="rounded-3xl border border-white/5 bg-zinc-950/80 p-6 md:p-7 shadow-[0_24px_90px_rgba(0,0,0,0.75)] space-y-4"
                    >
                        <div className="flex items-center gap-2">
                            <HelpCircle className="h-4 w-4 text-emerald-400" />
                            <h2 className="text-sm font-semibold">Quick answers</h2>
                        </div>

                        <div className="divide-y divide-white/5 rounded-2xl border border-white/5 bg-zinc-950/60">
                            {faqs.map((f, i) => (
                                <details
                                    key={f.q}
                                    className="group open:bg-zinc-900/60 transition-colors"
                                >
                                    <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm text-zinc-200">
                                        <span>{f.q}</span>
                                        <span className="ml-4 text-zinc-500 group-open:rotate-90 transition-transform">
                                            &gt;
                                        </span>
                                    </summary>
                                    <p className="px-4 pb-3 text-xs text-zinc-400">{f.a}</p>
                                </details>
                            ))}
                        </div>
                    </motion.section>
                </motion.div>
            </main>

            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </div>
    );
}
