// app/login/page.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const panelVariants = {
    initial: (direction: 'left' | 'right') => ({
        x: direction === 'left' ? -40 : 40,
        opacity: 0,
    }),
    animate: { x: 0, opacity: 1 },
    exit: (direction: 'left' | 'right') => ({
        x: direction === 'left' ? 40 : -40,
        opacity: 0,
    }),
};

export default function AuthPage() {
    const [mode, setMode] = useState<'login' | 'signup'>('signup');
    const router = useRouter();

    const toggleMode = (next: 'login' | 'signup') => {
        setMode(next);
    };

    const handleLogin = () => {
        // TODO: run your auth logic, then:
        router.push('/pages/dashboard');
    };
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black text-zinc-100 flex items-center justify-center px-4">
            <div className="relative w-full max-w-5xl rounded-3xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-2xl shadow-[0_28px_120px_rgba(0,0,0,0.85)] overflow-hidden">
                {/* Background glow */}
                <div className="pointer-events-none absolute inset-0 opacity-50">
                    <div className="absolute -top-32 -left-16 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
                    <div className="absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
                </div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2">
                    {/* Left side: brand + toggle */}
                    <div className="hidden md:flex flex-col justify-between border-r border-zinc-800/70 p-8 lg:p-10">
                        <div className="flex items-center gap-3">
                            <div className="text-xl font-semibold tracking-tight">
                                SOUND<span className="text-blue-500">.</span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight">
                                Your sound,
                                <br />
                                perfectly in sync.
                            </h1>
                            <p className="text-sm text-zinc-300 leading-relaxed">
                                Create an account to sync presets, personalize ANC, and keep your SOUND Pro X
                                updated—across every device you use.
                            </p>
                            <div className="flex gap-2 text-xs text-zinc-400">
                                <span className="inline-flex items-center rounded-full border border-zinc-700/80 px-3 py-1 uppercase tracking-[0.2em]">
                                    Fast sign‑in
                                </span>
                                <span className="inline-flex items-center rounded-full border border-zinc-700/80 px-3 py-1 uppercase tracking-[0.2em]">
                                    Secure by design
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-xs text-zinc-500">
                            <span>Need help? support@sound.IN</span>
                            <span>© {new Date().getFullYear()} SOUND</span>
                        </div>
                    </div>

                    {/* Right side: sliding auth panel */}
                    <div className="relative p-6 sm:p-8 lg:p-10">
                        {/* Mode switch pills */}
                        <div className="flex mb-8 rounded-full bg-zinc-900/80 border border-zinc-800 p-1 text-xs font-medium">
                            {/* LEFT: Sign up */}
                            <button
                                onClick={() => toggleMode('signup')}
                                className={`flex-1 rounded-full py-2 transition-all ${mode === 'signup'
                                    ? 'bg-zinc-100 text-black shadow-sm'
                                    : 'text-zinc-400 hover:text-zinc-200'
                                    }`}
                            >
                                Sign up
                            </button>

                            {/* RIGHT: Log in */}
                            <button
                                onClick={() => toggleMode('login')}
                                className={`flex-1 rounded-full py-2 transition-all ${mode === 'login'
                                    ? 'bg-zinc-100 text-black shadow-sm'
                                    : 'text-zinc-400 hover:text-zinc-200'
                                    }`}
                            >
                                Log in
                            </button>
                        </div>

                        <div className="relative min-h-[560px]">
                            <AnimatePresence mode="wait" initial={false} custom={mode === 'login' ? 'right' : 'left'}>
                                {mode === 'signup' ? (
                                    <motion.div
                                        key="signup"
                                        variants={panelVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        custom="left"
                                        transition={{ duration: 0.4, ease: 'easeOut' }}
                                        className="space-y-6"
                                    >
                                        <div>
                                            <h2 className="text-2xl font-semibold mb-1">Create your SOUND ID</h2>
                                            <p className="text-sm text-zinc-400">
                                                One secure account for headphones, app, and future devices.
                                            </p>
                                        </div>

                                        <form className="space-y-4">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-xs font-medium uppercase tracking-[0.2em] text-zinc-400 mb-2">
                                                        First name
                                                    </label>
                                                    <div className="flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/70 px-3 py-2">
                                                        <User className="h-4 w-4 text-zinc-500" />
                                                        <input
                                                            type="text"
                                                            placeholder="Alex"
                                                            className="w-full bg-transparent text-sm text-zinc-100 outline-none"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-medium uppercase tracking-[0.2em] text-zinc-400 mb-2">
                                                        Last name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Chen"
                                                        className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/70 px-3 py-2 text-sm text-zinc-100 outline-none"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-xs font-medium uppercase tracking-[0.2em] text-zinc-400 mb-2">
                                                    Email
                                                </label>
                                                <div className="flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/70 px-3 py-2">
                                                    <Mail className="h-4 w-4 text-zinc-500" />
                                                    <input
                                                        type="email"
                                                        placeholder="you@example.com"
                                                        className="w-full bg-transparent text-sm text-zinc-100 outline-none"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-xs font-medium uppercase tracking-[0.2em] text-zinc-400 mb-2">
                                                    Password
                                                </label>
                                                <div className="flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/70 px-3 py-2">
                                                    <Lock className="h-4 w-4 text-zinc-500" />
                                                    <input
                                                        type="password"
                                                        placeholder="Minimum 8 characters"
                                                        className="w-full bg-transparent text-sm text-zinc-100 outline-none"
                                                    />
                                                </div>
                                                <p className="mt-2 text-[0.7rem] text-zinc-500">
                                                    Use at least 8 characters, including a number and a symbol.
                                                </p>
                                            </div>

                                            <button
                                                type="submit"
                                                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-500 transition-colors"
                                            >
                                                Create account
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </button>
                                        </form>

                                        <p className="text-[0.75rem] text-zinc-500">
                                            By creating an account, you agree to the SOUND Terms of Service and Privacy Policy.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="login"
                                        variants={panelVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        custom="right"
                                        transition={{ duration: 0.4, ease: 'easeOut' }}
                                        className="space-y-6"
                                    >


                                        <div>
                                            <h2 className="text-2xl font-semibold mb-1">Welcome back</h2>
                                            <p className="text-sm text-zinc-400">
                                                Log in to access your listening history, presets, and devices.
                                            </p>
                                        </div>

                                        <form className="space-y-4">
                                            <div>
                                                <label className="block text-xs font-medium uppercase tracking-[0.2em] text-zinc-400 mb-2">
                                                    Email
                                                </label>
                                                <div className="flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/70 px-3 py-2">
                                                    <Mail className="h-4 w-4 text-zinc-500" />
                                                    <input
                                                        type="email"
                                                        placeholder="you@example.com"
                                                        className="w-full bg-transparent text-sm text-zinc-100 outline-none"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-xs font-medium uppercase tracking-[0.2em] text-zinc-400 mb-2">
                                                    Password
                                                </label>
                                                <div className="flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/70 px-3 py-2">
                                                    <Lock className="h-4 w-4 text-zinc-500" />
                                                    <input
                                                        type="password"
                                                        placeholder="••••••••"
                                                        className="w-full bg-transparent text-sm text-zinc-100 outline-none"
                                                    />
                                                </div>
                                                <button
                                                    type="button"
                                                    className="mt-2 text-xs text-blue-300 hover:text-blue-200"
                                                    onClick={handleLogin}
                                                >
                                                    Forgot password?
                                                </button>
                                            </div>

                                            <button
                                                type="submit"
                                                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-500 transition-colors"
                                                onClick={handleLogin}
                                            >
                                                Log in
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </button>
                                        </form>

                                        <p className="text-[0.75rem] text-zinc-500">
                                            Don&apos;t have an account yet?{' '}
                                            <button
                                                type="button"
                                                onClick={() => toggleMode('signup')}
                                                className="text-blue-300 hover:text-blue-200 underline underline-offset-2"
                                            >
                                                Create one
                                            </button>
                                            .
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
