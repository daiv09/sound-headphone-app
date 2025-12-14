import { motion, useTransform, useScroll } from "framer-motion";
import { useSpring } from "framer-motion";
import { useRef } from "react";

const GalleryCarousel = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

const rawX = useTransform(scrollYProgress, [0, 1], ["4%", "-78%"]);

    const x = useSpring(rawX, {
        stiffness: 60,
        damping: 25,
        mass: 0.8,
    });
    const items = [
        { src: "/headphones.jpg", title: "Highlands", location: "Iceland" },
        { src: "/red.png", title: "Misty Peaks", location: "Pacific Northwest" },
        { src: "https://images.unsplash.com/photo-1481437642641-2f0ae875f836?q=80&w=2670&auto=format&fit=crop", title: "Golden Hour", location: "Dolomites, Italy" },
        { src: "/headphone-2.png", title: "Coastal Edge", location: "Big Sur, CA" },
        { src: "/yellow2.png", title: "Desert Solitude", location: "Utah" },
    ];

    return (
        // Increased height slightly for a more relaxed scroll pace
        <section ref={targetRef} className="relative h-[350vh] bg-zinc-950">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden py-20">

                <motion.div style={{ x }} className="flex items-center gap-12 px-12">

                    {/* Header Header Block */}
                    <div className="flex flex-col justify-center min-w-[350px] pr-8 z-10 relative">
                        <div className="absolute -left-10 -top-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight relative">
                            In the <br /> Wild.
                        </h2>
                        <p className="text-xl text-zinc-400 max-w-sm relative leading-relaxed">
                            Explore our gallery captured around the globe. Hover to discover locations.
                        </p>
                    </div>

                    {/* Images with Staggered Layout */}
                    {items.map((item, i) => (
                        <Card
                            key={i}
                            item={item}
                            // Stagger effect: Even indexes are taller, odd are shorter
                            className={i % 2 === 0
                                ? "h-[550px] w-[400px] md:h-[650px] md:w-[500px] mt-0"
                                : "h-[450px] w-[350px] md:h-[550px] md:w-[450px] mt-24" // Add margin top to stagger
                            }
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

// --- Improved Card Component ---
const Card = ({ item, className }: { item: any, className: string }) => {
    return (
        <motion.div
            // Hover animation for scale
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`relative rounded-[2rem] overflow-hidden bg-zinc-900 flex-shrink-0 border border-zinc-800 group cursor-pointer ${className}`}
        >
            <img
                src={item.src}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay & Text Content - Appears on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 p-8">
                    <p className="text-blue-400 text-sm uppercase tracking-wider font-medium mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        {item.location}
                    </p>
                    <h3 className="text-3xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {item.title}
                    </h3>
                </div>
            </div>
        </motion.div>
    );
};

export default GalleryCarousel;