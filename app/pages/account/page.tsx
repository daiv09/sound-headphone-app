// app/account/page.tsx
'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Headphones, Bluetooth, Check, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation'; // Import useRouter
import Header from '@/app/components/dashboard/Header';
import Sidebar from '@/app/components/dashboard/Sidebar';

// Very minimal fake data for header only
const ACCOUNT_HEADER_DATA = {
    id: 'account',
    title: 'Account',
    description: '',
    bgGradient: '',
    glow: '',
    stats: { connection: '', battery: 0 },
    features: [],
} as const;

type PairingState = 'searching' | 'connecting' | 'success';

export default function AccountDashboardPage() {
    const router = useRouter(); // Initialize router
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const topRef = useRef<HTMLDivElement | null>(null);
    const currentData = ACCOUNT_HEADER_DATA;
    const isLeft = true;

    // Pairing Logic State
    const [showPairing, setShowPairing] = useState(false);
    const [pairingStep, setPairingStep] = useState<PairingState>('searching');

    const handleAddDevice = () => {
        setPairingStep('searching'); // Reset state when opening
        setShowPairing(true);
    };

    // This function simulates the connection process
    const handleSimulateConnection = () => {
        // 1. Switch to connecting state
        setPairingStep('connecting');

        // 2. Fake a network delay (2 seconds)
        setTimeout(() => {
            setPairingStep('success');

            // 3. Navigate to dashboard after showing success message (1.5 seconds)
            setTimeout(() => {
                // Assuming your main product page is at /dashboard
                router.push('/pages/dashboard');
            }, 1500);
        }, 2000);
    };

    return (
        <div
            ref={topRef}
            className="min-h-screen bg-black text-zinc-100 overflow-hidden selection:bg-zinc-800"
        >
            {/* Background */}
            <div className="fixed inset-0 pointer-events-none">
                <motion.div
                    animate={{
                        background: isLeft
                            ? 'radial-gradient(circle at 0% 50%, rgba(59, 130, 246, 0.15), transparent 50%)'
                            : 'radial-gradient(circle at 100% 50%, rgba(16, 185, 129, 0.15), transparent 50%)',
                    }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                />
            </div>

            <Header
                currentData={currentData}
                isLeft={isLeft}
                onOpenSidebar={() => setSidebarOpen(true)}
            />

            <main className="relative z-10 w-full px-6 py-8 flex flex-col h-[calc(100vh-64px)] justify-center">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32 lg:gap-48 w-full">
                    {/* Left: empty device visual */}
                    <motion.div
                        layout="position"
                        className="relative group shrink-0"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', stiffness: 220, damping: 22 }}
                    >
                        <div className="absolute inset-[-20%] rounded-full border border-dashed border-white/10" />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-zinc-900 via-zinc-950 to-black blur-2xl opacity-40" />

                        <div className="relative h-80 w-80 md:h-[420px] md:w-[420px] rounded-full border border-white/5 shadow-2xl flex items-center justify-center overflow-hidden bg-zinc-950/80">
                            <div className="relative flex flex-col items-center gap-4">
                                <div className="h-14 w-14 rounded-3xl bg-zinc-900/90 border border-white/10 flex items-center justify-center shadow-[0_18px_55px_rgba(0,0,0,0.8)]">
                                    <Headphones className="h-7 w-7 text-zinc-200" />
                                </div>
                                <p className="text-xs text-zinc-400 max-w-[200px] text-center leading-relaxed">
                                    No devices linked yet. Add your first SOUND device to start tuning.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: copy + Add Device CTA */}
                    <motion.div
                        layout="position"
                        initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ type: 'spring', stiffness: 110, damping: 20 }}
                        className={`w-full max-w-md ${isLeft ? 'text-left items-start' : 'text-right items-end'} flex flex-col gap-5`}
                    >
                        <div>
                            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2">
                                Account dashboard
                            </h2>
                            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
                                Add your first device
                            </h1>
                            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
                                Link SonicWare earbuds or headphones to sync ANC levels, spatial presets and
                                battery insights across the app and desktop.
                            </p>
                        </div>

                        <motion.button
                            // whileHover={{ scale: 1.03, y: -1 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={handleAddDevice}
                            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
                        >
                            <Plus className="h-4 w-4" />
                            Add device
                        </motion.button>
                    </motion.div>
                </div>
            </main>

            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            {/* --- PAIRING MODAL --- */}
            <AnimatePresence>
                {showPairing && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.18 }}
                            onClick={() => setShowPairing(false)}
                        />

                        {/* Modal Container */}
                        <motion.div
                            className="fixed inset-0 z-50 flex items-center justify-center px-6 pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="w-full max-w-md rounded-[2.2rem] border border-white/10 bg-zinc-950 shadow-[0_32px_110px_rgba(0,0,0,0.85)] p-8 space-y-7 pointer-events-auto relative overflow-hidden"
                                initial={{ scale: 0.94, y: 16, opacity: 0 }}
                                animate={{
                                    scale: 1,
                                    y: 0,
                                    opacity: 1,
                                    transition: { type: 'spring', stiffness: 260, damping: 22 },
                                }}
                                exit={{ scale: 0.96, y: 16, opacity: 0, transition: { duration: 0.18 } }}
                            >
                                {/* Inner step content */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={pairingStep}
                                        initial={{ opacity: 0, y: 6, filter: 'blur(6px)' }}
                                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                        exit={{ opacity: 0, y: -4, filter: 'blur(6px)' }}
                                        transition={{ duration: 0.22, ease: 'easeOut' }}
                                        className="flex flex-col items-center"
                                    >
                                        {/* VISUAL */}
                                        <div className="relative h-44 w-44 flex items-center justify-center mb-5">
                                            {/* rotating rings */}
                                            {pairingStep !== 'success' && (
                                                <>
                                                    <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{
                                                            duration: pairingStep === 'connecting' ? 2.2 : 8,
                                                            repeat: Infinity,
                                                            ease: 'linear',
                                                        }}
                                                        className={`absolute inset-0 rounded-full border border-dashed border-white/8 ${pairingStep === 'connecting'
                                                            ? 'border-t-blue-500'
                                                            : 'border-t-sky-500/60'
                                                            }`}
                                                    />
                                                    <motion.div
                                                        animate={{ rotate: -360 }}
                                                        transition={{
                                                            duration: pairingStep === 'connecting' ? 3 : 12,
                                                            repeat: Infinity,
                                                            ease: 'linear',
                                                        }}
                                                        className={`absolute inset-4 rounded-full border border-dashed border-white/8 ${pairingStep === 'connecting'
                                                            ? 'border-b-indigo-500'
                                                            : 'border-b-emerald-500/60'
                                                            }`}
                                                    />
                                                </>
                                            )}

                                            {/* glow */}
                                            <motion.div
                                                animate={
                                                    pairingStep === 'success'
                                                        ? { scale: 1.15, opacity: 0.9 }
                                                        : { scale: [1, 1.07, 1], opacity: [0.25, 0.55, 0.25] }
                                                }
                                                transition={{
                                                    duration: pairingStep === 'success' ? 0.4 : 2.6,
                                                    repeat: pairingStep === 'success' ? Infinity : Infinity,
                                                    ease: 'easeInOut',
                                                }}
                                                className={`absolute inset-1 rounded-full blur-2xl bg-gradient-to-tr ${pairingStep === 'success'
                                                    ? 'from-emerald-500/40 to-lime-400/40'
                                                    : 'from-sky-500/25 via-transparent to-emerald-500/25'
                                                    }`}
                                            />

                                            {/* icon */}
                                            <motion.div
                                                className="relative z-10 h-18 w-18 rounded-[1.9rem] bg-zinc-900 border border-white/12 flex items-center justify-center shadow-[0_18px_60px_rgba(0,0,0,0.9)]"
                                                animate={{
                                                    borderColor:
                                                        pairingStep === 'success'
                                                            ? 'rgba(34,197,94,0.7)'
                                                            : 'rgba(255,255,255,0.16)',
                                                }}
                                                transition={{ duration: 0.25 }}
                                            >
                                                {pairingStep === 'searching' && (
                                                    <Bluetooth className="h-8 w-8 text-sky-400" />
                                                )}
                                                {pairingStep === 'connecting' && (
                                                    <Loader2 className="h-8 w-8 text-blue-400 animate-spin" />
                                                )}
                                                {pairingStep === 'success' && (
                                                    <Check className="h-8 w-8 text-emerald-400" />
                                                )}
                                            </motion.div>
                                        </div>

                                        {/* TEXT */}
                                        <div className="text-center space-y-2 mb-6">
                                            <h3 className="text-lg font-semibold text-zinc-50 tracking-tight">
                                                {pairingStep === 'searching' && 'Looking for nearby SOUND devices'}
                                                {pairingStep === 'connecting' && 'Connecting to your device'}
                                                {pairingStep === 'success' && 'SonicWare connected'}
                                            </h3>
                                            <p className="text-xs text-zinc-400 leading-relaxed max-w-[85%] mx-auto">
                                                {pairingStep === 'searching' &&
                                                    'Put your earbuds or headphones in pairing mode and keep them close to this device.'}
                                                {pairingStep === 'connecting' &&
                                                    'Securing the link, syncing your profile and applying your latest listening presets.'}
                                                {pairingStep === 'success' &&
                                                    'You are ready to tune ANC, spatial audio and advanced controls in the dashboard.'}
                                            </p>
                                        </div>

                                        {/* BUTTONS */}
                                        {pairingStep === 'searching' && (
                                            <div className="flex items-center justify-center gap-3 w-full">
                                                <motion.button
                                                    type="button"
                                                    whileHover={{ scale: 1.03 }}
                                                    whileTap={{ scale: 0.96 }}
                                                    onClick={() => setShowPairing(false)}
                                                    className="flex-1 py-2.5 rounded-2xl text-sm font-medium text-zinc-200 bg-white/5 hover:bg-white/10 transition-colors"
                                                >
                                                    Cancel
                                                </motion.button>
                                                <motion.button
                                                    type="button"
                                                    whileHover={{ scale: 1.03 }}
                                                    whileTap={{ scale: 0.96 }}
                                                    onClick={handleSimulateConnection}
                                                    className="flex-1 py-2.5 rounded-2xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/20 transition-colors"
                                                >
                                                    Select
                                                </motion.button>
                                            </div>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

        </div>
    );
}