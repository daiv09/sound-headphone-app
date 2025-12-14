'use client';
import React, { useState, useEffect } from 'react';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 5);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-4'}`}>
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
    );
};