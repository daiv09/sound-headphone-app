'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowRight, Play } from 'lucide-react';

const TOTAL_FRAMES = 240;
const FRAME_PATH = (index: number) =>
  `/frames-2/ezgif-frame-${String(index).padStart(3, '0')}.jpg`;

export function ScrollExplodeCanvas() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // 1. SCROLL SETUP
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // 2. SMOOTHING PHYSICS
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  const frameIndex = useTransform(smoothProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  // --- TRANSITIONS ---

  // 1. Text Movement & Opacity
  const textOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const textY = useTransform(smoothProgress, [0, 0.15], [0, -50]);
  const textScale = useTransform(smoothProgress, [0, 0.15], [1, 0.95]);

  // 2. Dynamic Backdrop Blur (NEW)
  // Starts at 24px (approx equal to backdrop-blur-2xl) and drops to 0px
  const dynamicBlur = useTransform(smoothProgress, [0, 0.15], ["blur(24px)", "blur(0px)"]);

  // 3. IMAGE PRELOADING
  const framesToLoad = useMemo(() =>
    Array.from({ length: TOTAL_FRAMES }, (_, i) => ({
      index: i,
      src: FRAME_PATH(i + 1),
    })), []
  );

  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    framesToLoad.forEach(({ index, src }) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedImages[index] = img;
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setImages(loadedImages);
          setIsLoaded(true);
        }
      };
    });
  }, [framesToLoad]);

  // 4. CANVAS RENDERING
  useEffect(() => {
    if (!isLoaded || images.length === 0) return;

    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    const render = (indexFloat: number) => {
      const idx = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(indexFloat)));
      const image = images[idx];
      if (!image) return;

      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        context.scale(dpr, dpr);
      }

      const cvsW = rect.width;
      const cvsH = rect.height;
      const imgW = image.width;
      const imgH = image.height;

      const imgRatio = imgW / imgH;
      const cvsRatio = cvsW / cvsH;

      let renderW, renderH, offsetX, offsetY;

      if (cvsRatio > imgRatio) {
        renderW = cvsW;
        renderH = cvsW / imgRatio;
        offsetX = 0;
        offsetY = (cvsH - renderH) / 2;
      } else {
        renderW = cvsH * imgRatio;
        renderH = cvsH;
        offsetX = (cvsW - renderW) / 2;
        offsetY = 0;
      }

      context.clearRect(0, 0, cvsW, cvsH);
      context.drawImage(image, offsetX, offsetY, renderW, renderH);
    };

    const unsubscribe = frameIndex.on("change", (latest) => {
      requestAnimationFrame(() => render(latest));
    });

    render(frameIndex.get());

    return () => unsubscribe();
  }, [isLoaded, images, frameIndex]);

  return (
    <div ref={containerRef} className="relative h-[800vh] bg-neutral-950">

      {/* LOADING STATE */}
      {!isLoaded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950 text-white">
          <div className="flex flex-col items-center gap-4">
            <div className="h-px w-24 bg-neutral-800 overflow-hidden">
              <div className="h-full w-full bg-white animate-progress origin-left" />
            </div>
            <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono">Loading Assets</p>
          </div>
        </div>
      )}

      {/* CANVAS LAYER */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="h-full w-full block object-cover" />
      </div>

      {/* MINIMALIST HERO TEXT */}
      <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center pointer-events-none z-10">
        <motion.div
          style={{ opacity: textOpacity, y: textY, scale: textScale }}
          className="flex flex-col items-center text-center px-4 w-full max-w-4xl"
        >
          {/* VISION OS CONTAINER 
              Changed 'div' to 'motion.div' to animate backdropFilter.
              Removed 'backdrop-blur-2xl' class because we are now controlling it via style.
          */}
          <motion.div
            style={{ backdropFilter: dynamicBlur }}
            className="pointer-events-auto relative px-10 py-12 md:px-16 md:py-14 rounded-[2.5rem] bg-white/40 border border-white/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]"
          >

            {/* Content Group */}
            <div className="relative flex flex-col items-center">

              {/* 1. TOP BADGE */}
              <div className="mb-6 inline-flex items-center gap-2 overflow-hidden rounded-full border border-neutral-500/10 bg-white/50 px-3 py-1 backdrop-blur-md">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600">
                  Gen 2 Series
                </span>
              </div>

              {/* 2. MAIN TITLE */}
              <h1 className="whitespace-nowrap text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-neutral-950 mb-6 leading-[0.9]">
                SOUND  <span className="text-white">X</span> PRO
              </h1>

              {/* 3. DESCRIPTION TEXT */}
              <p className="max-w-lg mx-auto text-sm md:text-lg text-neutral-700 font-medium leading-relaxed mb-8 tracking-wide">
                Experience the anatomy of silence. <br />
                <span className="text-white">Scroll to deconstruct.</span>
              </p>

              {/* 4. BUTTONS */}
              <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
                <button
                  onClick={() => router.push('/pre-order')}
                  className="group relative flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-8 py-4 text-sm font-bold text-white transition-all hover:scale-105 hover:bg-neutral-800 shadow-xl shadow-black/10"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Pre-order Now <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </button>

                <button
                  onClick={() => router.push('/pages/film')}
                  className="group flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-transparent px-8 py-4 text-sm font-bold text-neutral-900 transition-all hover:bg-white/80"
                >
                  <Play size={14} className="fill-current" />
                  Watch Film
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </div>
  );
}