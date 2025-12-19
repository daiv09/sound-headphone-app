import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const GalleryCarousel = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const rawX = useTransform(scrollYProgress, [0.1, 1], ["0%", "-90%"]);

    const x = useSpring(rawX, {
        stiffness: 60,
        damping: 25,
        mass: 0.8,
    });

    const items = [
        { src: "/headphones.jpg", title: "Highlands", location: "Iceland" },
        { src: "/red.png", title: "Misty Peaks", location: "Pacific Northwest" },
        {
            src: "https://images.unsplash.com/photo-1481437642641-2f0ae875f836?q=80&w=2670&auto=format&fit=crop",
            title: "Golden Hour",
            location: "Dolomites, Italy",
        },
        { src: "/headphone-2.png", title: "Coastal Edge", location: "Big Sur, CA" },
        { src: "/yellow2.png", title: "Desert Solitude", location: "Utah" },
    ];

    return (
        <section
            ref={targetRef}
            className="relative h-[350vh] bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 py-24"
        >
            {/* subtle background glow */}
            <div className="pointer-events-none absolute inset-0 opacity-40">
                <div className="absolute -left-40 top-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
                <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
            </div>

            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div
                    style={{ x }}
                    className="relative flex items-center gap-16 lg:gap-24 px-8 md:px-16 lg:px-24"
                >
                    {/* Header Block */}
                    <div className="flex flex-col justify-center min-w-[320px] md:min-w-[360px] pr-8 mr-24 z-10 relative">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-zinc-400 shadow-[0_0_25px_rgba(59,130,246,0.35)]">
                            <span className="h-1.   5 w-1.5 rounded-full bg-emerald-400" />
                            Featured Gallery
                        </div>

                        <div className="relative mb-6 inline-block">
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight">
                                In the <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400">
                                    Wild.
                                </span>
                            </h2>
                            <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-r from-blue-500/10 via-cyan-500/5 to-emerald-500/10 blur-xl" />
                        </div>

                        <p className="text-base md:text-lg text-zinc-400 max-w-sm leading-relaxed">
                            Explore cinematic shots from around the world. Scroll to glide
                            through the collection, hover to reveal each location.
                        </p>
                    </div>

                    {/* Cards */}
                    {items.map((item, i) => (
                        <Card
                            key={i}
                            item={item}
                            className={
                                (i === 0 ? "ml-40 " : "") + // big gap between text and first card
                                (i % 2 === 0
                                    ? "h-[420px] w-[280px] md:h-[520px] md:w-[360px]"
                                    : "h-[360px] w-[240px] md:h-[460px] md:w-[320px]")
                            }
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ item, className }: { item: any; className: string }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className={`relative flex-shrink-0 cursor-pointer overflow-hidden rounded-[3rem] border border-zinc-800/70 bg-zinc-900/80 shadow-[0_18px_60px_rgba(0,0,0,0.65)] backdrop-blur-md ${className}`}
        >
            {/* image with subtle tilt on hover */}
            <motion.img
                src={item.src}
                alt={item.title}
                initial={{ scale: 1.05 }}
                whileHover={{ scale: 1.15, rotate: -1.5 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* bottom content */}
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                <p className="text-[0.7rem] md:text-xs font-semibold uppercase tracking-[0.25em] text-zinc-300/80 mb-2">
                    {item.location}
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {item.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <span className="inline-flex h-6 items-center rounded-full bg-white/5 px-3 backdrop-blur">
                        View details
                    </span>
                    <span className="h-px w-8 bg-zinc-600/70" />
                    <span className="text-[0.7rem] uppercase tracking-[0.2em] text-zinc-500">
                        Scroll →
                    </span>
                </div>
            </div>

            {/* glow on hover */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-r from-blue-500/15 via-sky-400/10 to-emerald-400/15 blur-2xl" />
            </div>
        </motion.div>
    );
};

export default GalleryCarousel;
