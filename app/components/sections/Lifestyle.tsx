'use client';
import React, { useState, useRef } from 'react';
import { Battery } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../ui/FadeIn';
import { ParallaxImage } from '../ui/ParallaxImage';

export const Lifestyle = () => {
  const [isCharged, setIsCharged] = useState(false);

  // Scroll-linked fade + scale for the whole section
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.2]);
  const sectionScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.96]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['40px', '-40px']);

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity: sectionOpacity, scale: sectionScale }}
      className="relative h-[90vh] overflow-hidden"
      transition={{ type: 'spring', stiffness: 80, damping: 20 }}
    >
      <ParallaxImage
        src="https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=2670&auto=format&fit=crop"
        alt="Lifestyle"
      />

      {/* layered dark + radial vignette */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0,_transparent_40%,_rgba(0,0,0,0.85)_100%)]" />
      </div>

      <motion.div
        style={{ y: contentY }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="pointer-events-auto relative z-10 max-w-3xl px-6 text-center">
          {/* keeps your existing FadeIn for a slight extra pop on entry */}
          <FadeIn>
            <motion.p
              className="mb-4 text-[0.7rem] md:text-xs font-semibold tracking-[0.35em] uppercase text-blue-200/70"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              Battery • Endurance • Freedom
            </motion.p>

            <motion.h2
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              40 Hours of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-200 to-emerald-300">
                Playtime
              </span>
            </motion.h2>

            <motion.p
              className="mt-5 text-lg md:text-xl text-zinc-200/90 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            >
              From New York to Tokyo and back on a single charge. No cables, no
              worries—just pure sound.
            </motion.p>

            {/* Animated button area */}
            <motion.div
              onViewportEnter={() => setIsCharged(true)}
              viewport={{ once: true, margin: '-120px' }}
              className="mt-8 relative inline-flex items-center gap-3 rounded-full border border-sky-300/50 bg-black/30 px-5 py-2.5 overflow-hidden shadow-[0_18px_45px_rgba(15,23,42,0.85)] backdrop-blur group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: 0.2 }}
            >
              {/* Fill layer */}
              <motion.div
                animate={{ scaleX: isCharged ? 1 : 0 }}
                initial={{ scaleX: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 220,
                  damping: 26,
                  mass: 0.55,
                  delay: 0.15,
                }}
                className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 origin-left z-0 opacity-90 shadow-[0_0_20px_rgba(52,211,153,0.6)]"
              />

              {/* Content layer */}
              <div className="relative z-10 flex items-center gap-3">
                <div className="relative">
                  {/* Outer battery */}
                  <motion.div
                    className="relative h-6 w-10 rounded-[4px] border overflow-hidden"
                    animate={{
                      borderColor: isCharged
                        ? 'rgba(255,255,255,0.7)'
                        : 'rgba(110,231,183,0.75)',
                      boxShadow: isCharged
                        ? '0 0 14px rgba(255,255,255,0.4)'
                        : '0 0 12px rgba(110,231,183,0.55)',
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Fill */}
                    <motion.div
                      className="absolute inset-y-0 left-0"
                      initial={{ width: '0%' }}
                      animate={{
                        width: isCharged ? '100%' : ['12%', '82%'],
                      }}
                      transition={{
                        duration: 1.4,
                        repeat: isCharged ? 0 : Infinity,
                        ease: 'easeInOut',
                      }}
                      style={{
                        background: isCharged
                          ? 'linear-gradient(90deg, #ffffff, #e5e7eb)'
                          : 'linear-gradient(90deg, #34d399, #6ee7b7)',
                      }}
                    />

                    {/* Shimmer */}
                    {!isCharged && (
                      <motion.div
                        className="absolute inset-0"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                        style={{
                          background:
                            'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.45), transparent 70%)',
                        }}
                      />
                    )}
                  </motion.div>

                  {/* Tip */}
                  <div className="absolute right-[-4px] top-1/2 h-2 w-[3px] -translate-y-1/2 rounded bg-emerald-300/80" />

                  {/* Bolt */}
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

                <motion.span
                  animate={{
                    color: isCharged ? '#ffffff' : '#e0f2fe',
                    opacity: isCharged ? 1 : [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 1,
                    repeat: isCharged ? 0 : Infinity,
                  }}
                  className="text-[0.75rem] font-semibold uppercase tracking-[0.25em]"
                >
                  Fast charge · 10 mins = 6 hrs
                </motion.span>
              </div>
            </motion.div>

            <motion.p
              className="mt-4 text-[0.7rem] uppercase tracking-[0.25em] text-zinc-400"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
            >
              Adaptive power management · USB‑C · Smart standby
            </motion.p>
          </FadeIn>
        </div>
      </motion.div>
    </motion.section>
  );
};
