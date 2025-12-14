"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Play, ShoppingBag } from "lucide-react";

// --- Reusable Components ---
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Button = ({ children, primary = false, icon: Icon }: { children: React.ReactNode, primary?: boolean, icon?: any }) => (
  <button className={`
    group flex items-center gap-2 px-8 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300
    ${primary
      ? 'bg-white text-black hover:bg-zinc-200 shadow-xl shadow-white/10'
      : 'bg-black/30 border border-white/20 text-white hover:bg-black/50 backdrop-blur-md'}
  `}>
    {children}
    {Icon && <Icon size={16} className="group-hover:translate-x-1 transition-transform" />}
  </button>
);

export default function ParallaxVideo({ src }: { src: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [duration, setDuration] = useState(0);

  // 1. Create a tall scroll timeline
  // We use 500vh to give the video more "room" to breathe, making the playback slower and smoother
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 2. Heavy smooth spring physics
  // High damping (40) and mass (1) make the video scrubbing feel weighted and cinematic, not jittery
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.8,
    stiffness: 60,
    damping: 35
  });

  const targetTimeRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const latestProgress = useRef(0);
  useEffect(() => {
    return smoothProgress.on("change", (latest) => {
      latestProgress.current = latest;
      targetTimeRef.current = latest * duration;

      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(() => {
          if (!videoRef.current) {
            rafRef.current = null;
            return;
          }

          const video = videoRef.current;

          if (duration > 0) {
            const diff = Math.abs(video.currentTime - targetTimeRef.current);
            if (diff > 0.08) {
              video.currentTime = targetTimeRef.current;
            }
          }

          rafRef.current = null;
        });
      }
    });
  }, [smoothProgress, duration]);

  // 4. Text Transitions
  // Scale down the text slightly as it fades out for a "warp speed" effect
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const contentY = useTransform(scrollYProgress, [0, 0.2], ["0%", "-10%"]);

  return (
    <section ref={containerRef} className="relative h-[500vh]" id="overview">
      <div className="sticky top-17 h-screen w-full overflow-hidden bg-black">
        {/* Video Layer */}
        <video
          ref={videoRef}
          src={src}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          preload="metadata"
          disablePictureInPicture
          disableRemotePlayback
          onLoadedMetadata={(e) => {
            const d = e.currentTarget.duration;
            setDuration(d);

            // 🔥 FORCE INITIAL SYNC
            e.currentTarget.currentTime = latestProgress.current * d;
          }}
        />

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        {/* Content Layer */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY, scale: contentScale }}
          className="relative z-10 flex h-full items-center justify-center will-change-transform"
        >
          <div className="relative z-10 text-center max-w-5xl px-6">
            <div className="p-10 md:p-16 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl">

              <FadeIn>
                <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10">
                  <h2 className="text-indigo-400 font-bold tracking-[0.2em] text-xs uppercase">
                    The Future of Sound
                  </h2>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.9] text-white mix-blend-overlay">
                  SOUND <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">PRO X</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.4}>
                <p className="text-xl md:text-2xl text-white font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                  Engineered for <span className="text-white font-medium">silence</span>.
                  Designed for <span className="text-white font-medium">immersion</span>. <br />
                  Experience audio in its purest form.
                </p>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                  <Button primary icon={ShoppingBag}>Pre-order Now</Button>
                  <Button icon={Play}>Watch the Film</Button>
                </div>
              </FadeIn>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}