'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

export const ParallaxImage = ({ src, alt }: { src: string, alt: string }) => {
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