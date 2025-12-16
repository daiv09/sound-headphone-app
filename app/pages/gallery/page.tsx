// app/gallery/page.tsx
'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Navbar } from '@/app/components/layout/Navbar';

const galleryItems = [
  {
    src: '/headphones.jpg',
    title: 'Midnight Studio',
    location: 'Brooklyn, NY',
    tag: 'Night Session',
  },
  {
    src: '/red.png',
    title: 'City Pulse',
    location: 'Shibuya, Tokyo',
    tag: 'Street',
  },
  {
    src: 'https://images.unsplash.com/photo-1481437642641-2f0ae875f836?q=80&w=2670&auto=format&fit=crop',
    title: 'Golden Hour',
    location: 'Dolomites, Italy',
    tag: 'Outdoor',
  },
  {
    src: '/headphone-2.png',
    title: 'Deep Focus',
    location: 'Copenhagen, DK',
    tag: 'Workspace',
  },
  {
    src: '/yellow2.png',
    title: 'Early Flight',
    location: 'San Francisco, CA',
    tag: 'Travel',
  },
];

function GalleryPageHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-40 left-[-10%] h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute -bottom-40 right-[-5%] h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col gap-8 lg:flex-row lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-xl"
        >
          <p className="mb-3 text-[0.7rem] md:text-xs font-semibold tracking-[0.3em] uppercase text-blue-200/70">
            Gallery
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-4">
            Designed for your world.
            <br />
            Captured in every light.
          </h1>
          <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
            Explore SOUND Pro X in real spaces—from late‑night studios to sunrise
            flights. Scroll to glide through the collection and see how it fits
            into the moments that matter.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="flex flex-wrap gap-4 text-xs text-zinc-400"
        >
          <span className="inline-flex items-center rounded-full border border-zinc-700/60 bg-zinc-900/70 px-3 py-1 uppercase tracking-[0.18em]">
            5 curated scenes
          </span>
          <span className="inline-flex items-center rounded-full border border-zinc-700/60 bg-zinc-900/70 px-3 py-1 uppercase tracking-[0.18em]">
            Scroll‑linked motion
          </span>
        </motion.div>
      </div>
    </section>
  );
}

function GalleryScrollerSection() {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start center', 'end start'],
  });

  const rawX = useTransform(scrollYProgress, [0, 1], ['0%', '-70%']);
  const x = useSpring(rawX, { stiffness: 80, damping: 24, mass: 0.9 });

  const bgOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.8]);

  return (
    <section
      ref={targetRef}
      className="relative h-[320vh] bg-gradient-to-b from-black via-zinc-950 to-black"
    >
      {/* subtle background wash */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.08),_transparent_55%)]" />
      </motion.div>

      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="relative flex items-center gap-14 px-10 md:px-16 lg:px-24"
        >
          {galleryItems.map((item, i) => (
            <GalleryCard
              key={item.title}
              item={item}
              index={i}
              className={
                (i === 0 ? 'ml-10 md:ml-24 ' : '') +
                (i % 2 === 0
                  ? 'h-[420px] w-[280px] md:h-[520px] md:w-[360px]'
                  : 'h-[360px] w-[240px] md:h-[460px] md:w-[320px]')
              }
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

type GalleryItem = (typeof galleryItems)[number];

function GalleryCard({
  item,
  index,
  className,
}: {
  item: GalleryItem;
  index: number;
  className: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.06 }}
      whileHover={{ y: -10, scale: 1.03 }}
      className={`group relative flex-shrink-0 cursor-pointer overflow-hidden rounded-[2.6rem] border border-zinc-700/60 bg-zinc-900/70 shadow-[0_24px_80px_rgba(0,0,0,0.9)] backdrop-blur-2xl ${className}`}
    >
      <motion.img
        src={item.src}
        alt={item.title}
        initial={{ scale: 1.06 }}
        whileHover={{ scale: 1.12 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
        <div className="rounded-3xl bg-black/45 backdrop-blur-xl border border-white/10 px-5 py-4">
          <p className="text-[0.65rem] md:text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-zinc-300/80 mb-2">
            {item.location}
          </p>
          <h3 className="text-lg md:text-xl font-semibold text-white mb-1 tracking-tight">
            {item.title}
          </h3>
          <div className="flex items-center justify-between text-[0.7rem] text-zinc-300">
            <span className="inline-flex h-6 items-center rounded-full bg-white/10 px-3 backdrop-blur">
              {item.tag}
            </span>
            <span className="uppercase tracking-[0.2em] text-zinc-400">
              Scroll →
            </span>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 rounded-[2.6rem] bg-gradient-to-r from-sky-400/20 via-cyan-300/16 to-emerald-300/20 blur-2xl" />
      </motion.div>
    </motion.article>
  );
}

function GalleryDetailsStrip() {
  return (
    <section className="border-t border-zinc-900 bg-black py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-xs md:text-sm text-zinc-400">
        <div className="flex flex-wrap gap-3">
          <span className="uppercase tracking-[0.18em] text-zinc-500">
            Shot on SOUND Pro X
          </span>
          <span className="h-px w-8 bg-zinc-700" />
          <span>Real locations · No 3D renders</span>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <span>Swipe or scroll to explore scenes</span>
          <span className="hidden md:inline text-zinc-600">·</span>
          <span className="text-zinc-500">
            Tip: Hover cards on desktop for more depth
          </span>
        </div>
      </div>
    </section>
  );
}

export default function GalleryPage() {
  return (
    <div className="bg-black min-h-screen text-zinc-100">
      <Navbar/>
      <GalleryPageHero />
      <GalleryScrollerSection />
      <GalleryDetailsStrip />
    </div>
  );
}
