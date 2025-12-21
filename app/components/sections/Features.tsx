'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { InteractiveImage } from '../ui/InteractiveImage';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

export const Features = () => {
    return (
        <section className="py-32 bg-zinc-950">
            <div className="max-w-7xl mx-auto px-6 space-y-32">
                {/* Feature 1 */}
                <motion.div
                    className="grid md:grid-cols-2 gap-16 items-center"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.35 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <motion.div
                        className="md:pr-10"
                        variants={fadeUp}
                        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                    >
                        <h3 className="text-3xl md:text-5xl font-bold mb-">
                            All-Day Power MagSafe<br />
                        </h3>
                        <h3 className="text-3xl md:text-5xl font-bold mb-6">
                            Charging Case
                        </h3>
                        <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                            Designed for endurance, the compact case holds over 30 hours of total listening time in a pocketable profile.
                        </p>
                        <ul className="space-y-4 text-zinc-300">
                            {['Active Noise Cancellation', 'Transparency Mode', 'Spatial Audio'].map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <InteractiveImage src="/airpods-case.png" alt="Material Detail" />
                </motion.div>

                {/* Feature 2 */}
                <motion.div
                    className="grid md:grid-cols-2 gap-16 items-center"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.35 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden group">
                        <video
                            src="/video.mp4"
                            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                        <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg text-xs border border-white/10">
                            Shot on SOUND Lens
                        </div>
                    </div>

                    <motion.div
                        className="md:pl-10"
                        variants={fadeUp}
                        transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
                    >
                        <h3 className="text-3xl md:text-5xl font-bold mb-6">
                            Active Noise <br />Cancellation 3.0
                        </h3>
                        <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                            Our proprietary algorithm processes sound 48,000 times per second,
                            effectively erasing the world around you.
                        </p>
                        <div className="flex gap-12 border-t border-white/10 pt-8">
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">-45dB</div>
                                <div className="text-xs text-zinc-500 uppercase tracking-wider">
                                    Reduction
                                </div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">2x</div>
                                <div className="text-xs text-zinc-500 uppercase tracking-wider">
                                    Processing Power
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>


            </div>
        </section>
    );
};
