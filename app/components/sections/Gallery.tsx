import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const GalleryCarousel = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // smaller horizontal travel
    const rawX = useTransform(scrollYProgress, [0.05, 1], ["0%", "-55%"]);

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
            // shorter scroll experience and smaller padding
            className="relative h-[220vh] bg-linear-to-b from-zinc-950 via-zinc-900 to-zinc-950 py-16"
        >
            {/* subtle background glow */}
            <div className="pointer-events-none absolute inset-0 opacity-40">
                <div className="absolute -left-32 top-10 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
                <div className="absolute right-0 bottom-10 h-56 w-56 rounded-full bg-purple-500/20 blur-3xl" />
            </div>

            <div className="sticky top-16 flex h-[calc(100vh-4rem)] items-center overflow-hidden">
                <motion.div
                    style={{ x }}
                    className="relative flex items-center gap-10 lg:gap-14 px-6 md:px-10 lg:px-14"
                >
                    {/* Header Block */}
                    <div className="flex flex-col justify-center min-w-[260px] md:min-w-[300px] pr-6 mr-16 z-10 relative">
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-400 shadow-[0_0_20px_rgba(59,130,246,0.35)]">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            Featured gallery
                        </div>

                        <div className="relative mb-4 inline-block">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
                                In the <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-sky-300 to-emerald-400">
                                    Wild.
                                </span>
                            </h2>
                            <div className="absolute -inset-2 -z-10 rounded-3xl bg-linear-to-r from-blue-500/10 via-cyan-500/5 to-emerald-500/10 blur-xl" />
                        </div>

                        <p className="text-sm md:text-base text-zinc-400 max-w-xs leading-relaxed">
                            Scroll to glide through the collection. Hover a frame to reveal
                            where each shot was captured.
                        </p>
                    </div>

                    {/* Cards */}
                    {items.map((item, i) => (
                        <Card
                            key={i}
                            item={item}
                            className={
                                (i === 0 ? "ml-24 " : "") +
                                (i % 2 === 0
                                    ? "h-[340px] w-[230px] md:h-[400px] md:w-[280px]"
                                    : "h-[300px] w-[210px] md:h-[360px] md:w-[260px]")
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
            whileHover={{ scale: 1.04, y: -8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={`group relative shrink-0 cursor-pointer overflow-hidden rounded-[2.2rem] border border-zinc-800/70 bg-zinc-900/80 shadow-[0_14px_40px_rgba(0,0,0,0.6)] backdrop-blur-md ${className}`}
        >
            {/* image */}
            <motion.img
                src={item.src}
                alt={item.title}
                initial={{ scale: 1.05 }}
                whileHover={{ scale: 1.12, rotate: -1.5 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/55 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

            {/* bottom content */}
            <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 bg-linear-to-t from-black/70 via-black/40 to-transparent">
                <p className="text-[0.68rem] md:text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-zinc-300/80 mb-1.5">
                    {item.location}
                </p>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1.5">
                    {item.title}
                </h3>
                <div className="flex items-center gap-2 text-[0.7rem] text-zinc-400">
                    <span className="inline-flex h-6 items-center rounded-full bg-white/5 px-3 backdrop-blur">
                        View details
                    </span>
                    <span className="h-px w-6 bg-zinc-600/70" />
                    <span className="uppercase tracking-[0.18em] text-zinc-500">
                        Scroll →
                    </span>
                </div>
            </div>

            {/* glow on hover */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <div className="absolute inset-0 rounded-[2.2rem] bg-linear-to-r from-blue-500/15 via-sky-400/10 to-emerald-400/15 blur-2xl" />
            </div>
        </motion.div>
    );
};

export default GalleryCarousel;
