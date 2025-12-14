'use client';
import React, { useState } from 'react';
import { Battery } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from '../ui/FadeIn';
import { ParallaxImage } from '../ui/ParallaxImage';

export const Lifestyle = () => {
    // 1. State to trigger the animation exactly once
    const [isCharged, setIsCharged] = useState(false);

    return (
        <section className="relative h-[90vh] overflow-hidden">
            <ParallaxImage
                src="https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=2670&auto=format&fit=crop"
                alt="Lifestyle"
            />

            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0,_transparent_40%,_rgba(0,0,0,0.75)_100%)]" />
            </div>

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="pointer-events-auto relative z-10 max-w-3xl px-6 text-center">
                    <FadeIn>
                        <p className="mb-4 text-[0.7rem] md:text-xs font-semibold tracking-[0.35em] uppercase text-blue-200/70">
                            Battery • Endurance • Freedom
                        </p>

                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white">
                            40 Hours of{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-200 to-emerald-300">
                                Playtime
                            </span>
                        </h2>

                        <p className="mt-5 text-lg md:text-xl text-zinc-200/90 max-w-xl mx-auto">
                            From New York to Tokyo and back on a single charge. No cables, no
                            worries—just pure sound.
                        </p>

                        {/* --- ANIMATED BUTTON START --- */}
                        {/* We wrap the button in a motion div to detect viewport entry easily */}
                        <motion.div
                            // Trigger the state change when this element enters the viewport.
                            // margin: "-100px" ensures it's well within the screen before triggering.
                            onViewportEnter={() => setIsCharged(true)}
                            viewport={{ once: true, margin: "-100px" }}
                            className="mt-8 relative inline-flex items-center gap-3 rounded-full border border-sky-300/50 bg-black/30 px-5 py-2.5 overflow-hidden shadow-[0_18px_45px_rgba(15,23,42,0.85)] backdrop-blur group"
                        >
                            {/* 1. The Fill Layer (Absolute, z-0) */}
                            <motion.div
                                // Animate scaleX based on the state
                                animate={{ scaleX: isCharged ? 1 : 0 }}
                                // Initial state
                                initial={{ scaleX: 0 }}
                                // Custom Spring Physics for "Apple-style" feel:
                                // High stiffness for speed, sufficient damping to prevent bouncy overshoot.
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 25,
                                    mass: 0.5,
                                    delay: 0.2 // Small delay so the user sees it start
                                }}
                                className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 origin-left z-0 opacity-90 shadow-[0_0_20px_rgba(52,211,153,0.6)]"
                            />

                            {/* 2. The Content Layer (Relative, z-10) */}
                            {/* Charging Indicator */}
                            <div className="relative z-10 flex items-center gap-3">
                                {/* Battery Container */}
                                <div className="relative">
                                    {/* Outer Battery */}
                                    <motion.div
                                        className="relative h-6 w-10 rounded-[4px] border overflow-hidden"
                                        animate={{
                                            borderColor: isCharged
                                                ? "rgba(255,255,255,0.6)"
                                                : "rgba(110,231,183,0.7)",
                                            boxShadow: isCharged
                                                ? "0 0 12px rgba(255,255,255,0.35)"
                                                : "0 0 10px rgba(110,231,183,0.45)",
                                        }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        {/* Battery Fill */}
                                        <motion.div
                                            className="absolute inset-y-0 left-0"
                                            initial={{ width: "0%" }}
                                            animate={{
                                                width: isCharged ? "100%" : ["10%", "85%"],
                                            }}
                                            transition={{
                                                duration: 1.4,
                                                repeat: isCharged ? 0 : Infinity,
                                                ease: "easeInOut",
                                            }}
                                            style={{
                                                background:
                                                    isCharged
                                                        ? "linear-gradient(90deg, #ffffff, #e5e7eb)"
                                                        : "linear-gradient(90deg, #34d399, #6ee7b7)",
                                            }}
                                        />

                                        {/* Energy Shimmer */}
                                        {!isCharged && (
                                            <motion.div
                                                className="absolute inset-0"
                                                animate={{ x: ["-100%", "100%"] }}
                                                transition={{
                                                    duration: 1,
                                                    repeat: Infinity,
                                                    ease: "linear",
                                                }}
                                                style={{
                                                    background:
                                                        "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.45), transparent 70%)",
                                                }}
                                            />
                                        )}
                                    </motion.div>

                                    {/* Battery Tip */}
                                    <div className="absolute right-[-4px] top-1/2 h-2 w-[3px] -translate-y-1/2 rounded bg-emerald-300/80" />

                                    {/* Charging Bolt */}
                                    {!isCharged && (
                                        <motion.div
                                            className="absolute inset-0 flex items-center justify-center text-emerald-100"
                                            animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.05, 0.9] }}
                                            transition={{ duration: 0.8, repeat: Infinity }}
                                        >
                                            <Battery size={14} />
                                        </motion.div>
                                    )}
                                </div>

                                {/* Text */}
                                <motion.span
                                    animate={{
                                        color: isCharged ? "#ffffff" : "#e0f2fe",
                                        opacity: isCharged ? 1 : [0.7, 1, 0.7],
                                    }}
                                    transition={{ duration: 1, repeat: isCharged ? 0 : Infinity }}
                                    className="text-[0.75rem] font-semibold uppercase tracking-[0.25em]"
                                >
                                    Fast charge · 10 mins = 6 hrs
                                </motion.span>
                            </div>
                        </motion.div>
                        {/* --- ANIMATED BUTTON END --- */}

                        <p className="mt-4 text-[0.7rem] uppercase tracking-[0.25em] text-zinc-400">
                            Adaptive power management · USB‑C · Smart standby
                        </p>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};