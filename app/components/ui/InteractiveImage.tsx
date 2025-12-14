'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

export const InteractiveImage = ({ src, alt, children }: { src: string, alt: string, children?: React.ReactNode }) => {
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
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / rect.width - 0.5;
        const yPct = mouseY / rect.height - 0.5;
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
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
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