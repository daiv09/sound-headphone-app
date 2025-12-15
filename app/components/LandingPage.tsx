'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import SmoothScroll from './providers/SmoothScroll';
// Imports
import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { Features } from './sections/Features';
import { Lifestyle } from './sections/Lifestyle';
import { TechSpecs } from './sections/TechSpecs';
import { CTA } from './sections/CTA';
// Assuming these exist from your previous file structure
import Hero from './Hero';
import GalleryCarousel from "./Gallery";
export default function PremiumHeadphonesPage() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
    return (
        <div className="bg-black min-h-screen text-zinc-100 font-sans selection:bg-blue-500/30">
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
                style={{ scaleX }}
            />
            <Navbar />
            <SmoothScroll>
                <main>
                    {/* Hero Section */}
                    <Hero src="/video-bg.mp4" />
                    {/* Product Features */}
                    <Features />
                    {/* Battery/Lifestyle Parallax */}
                    <Lifestyle />
                    {/* Specs Grid */}
                    <TechSpecs />
                    {/* Gallery */}
                    <GalleryCarousel />
                    {/* Call to Action */}
                    <CTA />
                </main>
            </SmoothScroll>
            <Footer />
        </div>
    );
}
