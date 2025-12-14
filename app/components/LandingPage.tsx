'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import {
    Zap,
    Bluetooth,
    Battery,
    Speaker,
    Radio,
    Activity,
    ChevronRight,
    Music,
    Scale
} from 'lucide-react';
import ParallaxVideo from './ParallaxVideo';
import GalleryCarousel from "./Gallery"

// --- Reusable Components ---
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} // Bezier for that "smooth" feel
            className={className}
        >
            {children}
        </motion.div>
    );
};

const ParallaxImage = ({ src, alt }: { src: string, alt: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <div ref={ref} className="absolute inset-0 z-0">
            <motion.img
                src={src}
                alt={alt}
                className="object-cover w-full h-full opacity-60"
                style={{ y }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        </div>
    );
};

const InteractiveImage = ({ src, alt, children }: { src: string, alt: string, children?: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x, { stiffness: 300, damping: 40 });
    const ySpring = useSpring(y, { stiffness: 300, damping: 40 });

    const rotateX = useTransform(ySpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
    const glareX = useTransform(x, [-0.5, 0.5], [500, -500]);
    const glareY = useTransform(y, [-0.5, 0.5], [300, -700]);


    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden group"
        >
            <img
                src={src}
                alt={alt}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
            />
            <motion.div
                style={{
                    transform: "translateZ(50px)",
                    background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 60%)",
                    x: glareX,
                    y: glareY,
                }}
                className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
            />
            {children}
        </motion.div>
    );
};


// --- Main Page Component ---

export default function PremiumHeadphonesPage() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    // Handle Navbar Scroll Effect
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 5);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-black min-h-screen text-zinc-100 font-sans selection:bg-blue-500/30">

            {/* Scroll Progress Bar */}
            <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50" style={{ scaleX }} />

            {/* --- Navbar --- */}
            <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div className="text-2xl font-bold tracking-tighter">SOUND<span className="text-blue-500">.</span></div>

                    <div className="hidden md:flex gap-8 text-sm font-light text-zinc-300">
                        {['Overview', 'Specs', 'Gallery', 'Support'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors cursor-pointer">{item}</a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="text-sm font-medium hover:text-blue-400 transition-colors hidden md:block">Log In</button>
                        <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-medium transition-all">
                            Buy Now
                        </button>
                    </div>
                </div>
            </nav>

            {/* --- Hero Section --- */}
            <main> {/* adjust 20 to match nav height */}
                <ParallaxVideo src="/video-bg.mp4" />
            </main>

            {/* --- Cinematic Feature (The DJI Split) --- */}
            <section className="py-32 bg-zinc-950">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Feature 1: Video Left, Text Right */}
                    <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
                        <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden group">
                            <video
                                src="/video.mp4" // update to your actual video path
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

                        <div className="md:pl-10">
                            <FadeIn delay={0.2}>
                                <h3 className="text-3xl md:text-5xl font-bold mb-6">
                                    Active Noise <br />Cancellation 3.0
                                </h3>
                                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                                    Our proprietary algorithm processes sound 48,000 times per second,
                                    effectively erasing the world around you. Focus on what matters—your music.
                                </p>
                                <div className="flex gap-12 border-t border-white/10 pt-8">
                                    <div>
                                        <div className="text-3xl font-bold text-white mb-1">-45dB</div>
                                        <div className="text-xs text-zinc-500 uppercase tracking-wider">Reduction</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-white mb-1">2x</div>
                                        <div className="text-xs text-zinc-500 uppercase tracking-wider">Processing Power</div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>

                    {/* Feature 2: Text Left, Image Right */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* 1. TEXT SECTION (First in code = Left side) */}
                        {/* Removed 'order-2 md:order-1' so it stays first naturally */}
                        <div className="md:pr-10">
                            <FadeIn>
                                <h3 className="text-3xl md:text-5xl font-bold mb-6">Featherlight <br />Titanium Frame</h3>
                                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                                    Forged from aerospace-grade titanium, the SOUND Pro X is 30% lighter than its predecessor while maintaining robust structural integrity.
                                </p>
                                <ul className="space-y-4 text-zinc-300">
                                    {['Memory Foam Earcups', 'Adaptive Headband', 'Sweat Resistant'].map((item) => (
                                        <li key={item} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </FadeIn>
                        </div>

                        {/* 2. IMAGE SECTION (Second in code = Right side) */}
                        <InteractiveImage
                            src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=2568&auto=format&fit=crop"
                            alt="Material Detail"
                        />
                    </div>
                </div>
            </section>

            {/* --- Full Width Cinematic Parallax --- */}
            <section className="relative h-[80vh] overflow-hidden flex items-center justify-center">
                <ParallaxImage src="https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=2670&auto=format&fit=crop" alt="Lifestyle" />
                <div className="relative z-10 text-center">
                    <FadeIn>
                        <h2 className="text-5xl md:text-7xl font-bold mb-6">40 Hours of Playtime</h2>
                        <p className="text-xl text-zinc-300 max-w-xl mx-auto mb-8">
                            From New York to Tokyo and back. One charge is all you need.
                        </p>
                        <div className="inline-flex items-center gap-2 text-blue-400 uppercase tracking-widest text-xs font-bold border border-blue-400/30 px-4 py-2 rounded-full">
                            <Battery size={14} /> Fast Charge Supported
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* --- Tech Specs Grid (DJI Modular Style) --- */}
            <section id="specs" className="py-32 bg-black border-t border-zinc-900">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeIn>
                        <h2 className="text-4xl font-bold mb-16 text-center">Technical Specifications</h2>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-zinc-800 rounded-2xl overflow-hidden">
                        {[
                            { icon: Speaker, title: "Driver Unit", val: "40mm Beryllium" },

                            // Bluetooth: Standard connection icon
                            { icon: Bluetooth, title: "Connectivity", val: "Bluetooth 5.4" },

                            // Battery: Standard power icon
                            { icon: Battery, title: "Battery Life", val: "40 Hours ANC On" },

                            // Radio: Represents wireless transmission distance/signal
                            { icon: Radio, title: "Range", val: "100m Line of Sight" },

                            // Activity: Represents sound waves/frequency Hertz
                            { icon: Activity, title: "Frequency", val: "4Hz - 40,000Hz" },

                            // Zap: Represents electricity/fast charging
                            { icon: Zap, title: "Charging", val: "USB-C Fast Charge" },

                            // Music: Represents audio formats and quality
                            { icon: Music, title: "Codecs", val: "LDAC, aptX HD, AAC" },

                            // Scale: Represents physical weight
                            { icon: Scale, title: "Weight", val: "240g" },
                        ].map((spec, i) => (
                            // Note: The hover background color change (hover:bg-zinc-900) remains here.
                            <FadeIn delay={i * 0.05} key={i} className="group p-8 border-b md:border-b-0 border-r border-zinc-800 last:border-r-0 hover:bg-zinc-900 transition-colors">
                                {/* Removed whileHover={{ scale: 1.05 }} and transition={{ duration: 0.3 }} 
                       from the motion.div below to stop the enlarging effect.
                       You could also just replace motion.div with a standard div here.
                    */}
                                <div>
                                    <spec.icon className="text-blue-500 mb-4" size={24} />
                                    <h4 className="text-zinc-500 text-sm uppercase tracking-wide mb-2">{spec.title}</h4>
                                    <p className="text-white text-lg font-medium">{spec.val}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            <GalleryCarousel />

            {/* --- CTA Section --- */}
            <section className="py-32 bg-blue-600 text-center px-6 relative overflow-hidden">
                <div className="relative z-10 max-w-3xl mx-auto">
                    <div className="backdrop-blur-md p-8 rounded-xl">
                        <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white">Hear the Impossible.</h2>
                        <p className="text-blue-100 text-xl mb-10">Free shipping. 30-day money-back guarantee. 2-year warranty.</p>
                        <button className="bg-white text-blue-600 px-12 py-5 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all">
                            Buy SOUND Pro X - $399
                        </button>
                    </div>
                </div>
                {/* Abstract Background Element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500 rounded-full blur-3xl opacity-50 pointer-events-none" />
            </section>

            {/* --- Footer --- */}
            <footer className="bg-black py-20 border-t border-zinc-900 text-sm">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-zinc-500">
                    <div>
                        <h5 className="text-white font-bold mb-6">Product</h5>
                        <ul className="space-y-4">
                            <li className="hover:text-blue-400 cursor-pointer transition-colors">SOUND Pro X</li>
                            <li className="hover:text-blue-400 cursor-pointer transition-colors">SOUND Mini</li>
                            <li className="hover:text-blue-400 cursor-pointer transition-colors">Accessories</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-white font-bold mb-6">Support</h5>
                        <ul className="space-y-4">
                            <li className="hover:text-blue-400 cursor-pointer transition-colors">Downloads</li>
                            <li className="hover:text-blue-400 cursor-pointer transition-colors">Help Center</li>
                            <li className="hover:text-blue-400 cursor-pointer transition-colors">Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-white font-bold mb-6">Company</h5>
                        <ul className="space-y-4">
                            <li className="hover:text-blue-400 cursor-pointer transition-colors">About SOUND</li>
                            <li className="hover:text-blue-400 cursor-pointer transition-colors">Careers</li>
                            <li className="hover:text-blue-400 cursor-pointer transition-colors">Press</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-white font-bold mb-6">Subscribe</h5>
                        <p className="mb-4">Get the latest news and updates.</p>
                        <div className="flex border border-zinc-800 rounded-full overflow-hidden p-1">
                            <input type="email" placeholder="Email address" className="bg-transparent px-4 py-2 w-full focus:outline-none text-white" />
                            <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-full transition-colors"><ChevronRight size={16} /></button>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-zinc-900 flex justify-between items-center">
                    <div>© 2025 SOUND Audio. All rights reserved.</div>
                    <div className="flex gap-6">
                        <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
                        <span className="cursor-pointer hover:text-white transition-colors">Terms of Use</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}