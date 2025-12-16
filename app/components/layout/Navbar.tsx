'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 5);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    router.push(path);
  };

  // smooth in‑page scroll for current route
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${isScrolled
          ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/5'
          : 'bg-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button
          onClick={() => handleNavClick('/')}
          className="text-2xl font-bold tracking-tighter"
        >
          SOUND<span className="text-blue-500">.</span>
        </button>

        <div className="hidden md:flex gap-8 text-sm font-light text-zinc-300">
          <button
            onClick={() => handleNavClick('/pages/overview')}
            className="hover:text-white transition-colors"
          >
            Overview
          </button>

          {/* Specs lives on the main page, so we scroll to the section with id="specs" */}
          <button
            onClick={() => {
              if (window.location.pathname === '/') {
                handleScrollTo('specs');
              } else {
                router.push('/#specs');
              }
            }}
            className="hover:text-white transition-colors"
          >
            Specs
          </button>

          <button
            onClick={() => handleNavClick('/pages/gallery')}
            className="hover:text-white transition-colors"
          >
            Gallery
          </button>

          <Link href="/pages/support" className="hover:text-white transition-colors">
            Support
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-sm font-medium hover:text-blue-400 transition-colors hidden md:block">
            <Link href="/pages/login">
              Log In
            </Link>
          </button>
          <button
            onClick={() => handleNavClick('/pages/checkout')}
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-medium transition-all"
          >
            Buy Now
          </button>
        </div>
      </div>
    </nav>
  );
};
