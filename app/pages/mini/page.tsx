// app/pages/mini/page.tsx (or app/mini/page.tsx)
'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import SmoothScroll from '@/app/components/providers/SmoothScroll';
import { Navbar } from '@/app/components/layout/Navbar';
import { Footer } from '@/app/components/layout/Footer';
import Hero from '@/app/components/Hero';
// import { FeaturesMini } from '@/app/components/sections/FeaturesMini';
// import { LifestyleMini } from '@/app/components/sections/LifestyleMini';
// import { TechSpecsMini } from '@/app/components/sections/TechSpecsMini';
// import { CTAMini } from '@/app/components/sections/CTAMini';
import GalleryCarousel from '@/app/components/sections/Gallery';

export default function SoundMiniPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-black min-h-screen text-zinc-100 font-sans selection:bg-emerald-500/30">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-50"
        style={{ scaleX }}
      />

      <Navbar />

      <SmoothScroll>
        <main>
          {/* Scroll‑scrubbed hero but with MINI video */}
          <Hero src="/video-2.mp4" />

          {/* Compact, pocket‑first features */}
          {/* <FeaturesMini /> */}

          {/* Lifestyle shots focused on commuting / pockets */}
          {/* <LifestyleMini /> */}

          {/* Specs section with id for navbar (#mini-specs) */}
          <section id="mini-specs">
            {/* <TechSpecsMini /> */}
          </section>    

          {/* You can reuse the same gallery, or filter it for MINI‑specific shots */}
          <GalleryCarousel />

          {/* CTA tuned for MINI */}
          {/* <CTAMini /> */}
        </main>
      </SmoothScroll>

      <Footer />
    </div>
  );
}
