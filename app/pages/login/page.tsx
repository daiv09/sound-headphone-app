// app/login/page.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, X } from 'lucide-react';
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
    // Forgot‑password flow
    const [forgotStep, setForgotStep] = useState<
        'none' | 'emailOtp' | 'newPassword'
    >('none');
    const [fpEmail, setFpEmail] = useState('');
    const [fpOtp, setFpOtp] = useState('');
    const [fpError, setFpError] = useState('');
    const [fpNewPass, setFpNewPass] = useState('');
    const [fpNewPassConfirm, setFpNewPassConfirm] = useState('');
    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        router.push('/pages/account');
    };

    const [mode, setMode] = useState<'login' | 'signup'>('signup');
    const router = useRouter();

    const toggleMode = (next: 'login' | 'signup') => {
        setMode(next);
    };

    const handleLogin = () => {
        // TODO: run your auth logic, then:
        router.push('/pages/dashboard');
    };


    // Open / close forgot password
    const openForgot = () => {
        setFpEmail('');
        setFpOtp('');
        setFpError('');
        setFpNewPass('');
        setFpNewPassConfirm('');
        setForgotStep('emailOtp');
    };

    const closeForgot = () => {
        setForgotStep('none');
        setFpError('');
    };

    // Step 1: validate OTP (predefined)
    const handleVerifyOtp = (e: React.FormEvent) => {
        e.preventDefault();
        setFpError('');

        if (!fpEmail) {
            setFpError('Please enter your email.');
            return;
        }
        if (fpOtp !== '123456') {
            setFpError('Incorrect code. Try 123456 for this demo.');
            return;
        }

        setForgotStep('newPassword');
    };

    // Step 2: set new password
    const handleSetNewPassword = (e: React.FormEvent) => {
        e.preventDefault();
        setFpError('');

        if (!fpNewPass || !fpNewPassConfirm) {
            setFpError('Please fill in both password fields.');
            return;
        }
        if (fpNewPass !== fpNewPassConfirm) {
            setFpError('Passwords do not match.');
            return;
        }

        // Here you would call your API to actually reset the password.
        // After success:
        closeForgot();
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

                                        <form className="space-y-4" onSubmit={handleSignup}>
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

            <AnimatePresence>
                {forgotStep !== 'none' && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 z-40 bg-black/75 backdrop-blur-md"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        {/* Modal content */}
                        <motion.div
                            className="fixed inset-0 z-50 flex items-center justify-center px-4 md:px-6"
                            initial={{ opacity: 0, scale: 0.96, y: 12 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.96, y: 12 }}
                            transition={{ duration: 0.22, ease: 'easeOut' }}
                        >
                            <div className="w-full max-w-xl md:max-w-2xl rounded-3xl border border-zinc-800 bg-zinc-950/95 shadow-[0_40px_120px_rgba(0,0,0,0.9)] overflow-hidden">
                                {/* Subtle top gradient */}
                                <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-400" />

                                <div className="relative p-6 md:p-8 lg:p-10 space-y-6">
                                    <button
                                        type="button"
                                        onClick={closeForgot}
                                        className="absolute right-4 top-4 rounded-full p-1.5 text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900 transition-colors"
                                    >
                                        <X size={16} />
                                    </button>

                                    {forgotStep === 'emailOtp' && (
                                        <form
                                            className="space-y-6 md:space-y-7"
                                            onSubmit={handleVerifyOtp}
                                        >
                                            <div className="space-y-2 md:space-y-3 pr-8">
                                                <h2 className="text-xl md:text-2xl font-semibold">
                                                    Reset your password
                                                </h2>
                                                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                                                    Enter the email linked to your SOUND ID and the 6‑digit code
                                                    you received. For this demo, use code{' '}
                                                    <span className="font-mono text-zinc-200">123456</span>.
                                                </p>
                                            </div>

                                            <div className="grid gap-5 md:grid-cols-2 text-sm">
                                                <div className="space-y-2.5">
                                                    <label className="block text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-400">
                                                        Email
                                                    </label>
                                                    <div className="flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/70 px-3 py-2.5">
                                                        <Mail className="h-4 w-4 text-zinc-500" />
                                                        <input
                                                            type="email"
                                                            value={fpEmail}
                                                            onChange={(e) => setFpEmail(e.target.value)}
                                                            placeholder="you@example.com"
                                                            className="w-full bg-transparent text-sm text-zinc-100 outline-none"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-2.5">
                                                    <label className="block text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-400">
                                                        6‑digit code
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={fpOtp}
                                                        onChange={(e) => setFpOtp(e.target.value)}
                                                        placeholder="123456"
                                                        className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/70 px-3 py-2.5 text-sm text-zinc-100 outline-none font-mono tracking-[0.35em]"
                                                    />
                                                    <p className="text-[11px] text-zinc-500">
                                                        Check your inbox or spam folder for the verification code.
                                                    </p>
                                                </div>
                                            </div>

                                            {fpError && (
                                                <p className="text-xs text-red-400">{fpError}</p>
                                            )}

                                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                                                <p className="text-[11px] text-zinc-500">
                                                    You&apos;ll move on to create a new password after this step.
                                                </p>
                                                <button
                                                    type="submit"
                                                    className="inline-flex w-full md:w-auto items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-500 transition-colors"
                                                >
                                                    Continue
                                                    <ArrowRight className="ml-2 h-4 w-4" />
                                                </button>
                                            </div>
                                        </form>
                                    )}

                                    {forgotStep === 'newPassword' && (
                                        <form
                                            className="space-y-6 md:space-y-7"
                                            onSubmit={handleSetNewPassword}
                                        >
                                            <div className="space-y-2 md:space-y-3 pr-8">
                                                <h2 className="text-xl md:text-2xl font-semibold">
                                                    Create a new password
                                                </h2>
                                                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                                                    Choose a strong password you haven&apos;t used on SOUND
                                                    before. You&apos;ll be signed in on this device after you
                                                    save it.
                                                </p>
                                            </div>

                                            <div className="grid gap-5 md:grid-cols-2 text-sm">
                                                <div className="space-y-2.5">
                                                    <label className="block text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-400">
                                                        New password
                                                    </label>
                                                    <div className="flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/70 px-3 py-2.5">
                                                        <Lock className="h-4 w-4 text-zinc-500" />
                                                        <input
                                                            type="password"
                                                            value={fpNewPass}
                                                            onChange={(e) => setFpNewPass(e.target.value)}
                                                            placeholder="Minimum 8 characters"
                                                            className="w-full bg-transparent text-sm text-zinc-100 outline-none"
                                                        />
                                                    </div>
                                                    <p className="text-[11px] text-zinc-500">
                                                        Mix letters, numbers, and symbols for better protection.
                                                    </p>
                                                </div>

                                                <div className="space-y-2.5">
                                                    <label className="block text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-400">
                                                        Confirm password
                                                    </label>
                                                    <div className="flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/70 px-3 py-2.5">
                                                        <Lock className="h-4 w-4 text-zinc-500" />
                                                        <input
                                                            type="password"
                                                            value={fpNewPassConfirm}
                                                            onChange={(e) => setFpNewPassConfirm(e.target.value)}
                                                            placeholder="Re‑enter password"
                                                            className="w-full bg-transparent text-sm text-zinc-100 outline-none"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {fpError && (
                                                <p className="text-xs text-red-400">{fpError}</p>
                                            )}

                                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                                                <p className="text-[11px] text-zinc-500">
                                                    You can change this again anytime from Login & security.
                                                </p>
                                                <button
                                                    type="submit"
                                                    className="inline-flex w-full md:w-auto items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-500 transition-colors"
                                                >
                                                    Save and continue
                                                    <ArrowRight className="ml-2 h-4 w-4" />
                                                </button>
                                            </div>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

        </div>
    );
}
