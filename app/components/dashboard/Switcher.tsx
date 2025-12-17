// components/dashboard/Switcher.tsx
'use client';
import { motion } from 'framer-motion';

import { EarbudSide } from '@/app/lib/data';

interface SwitcherProps {
  activeSide: EarbudSide;
  onToggle: (side: EarbudSide) => void;
}

export default function Switcher({ activeSide, onToggle }: SwitcherProps) {
  return (
    <div className="fixed bottom-12 inset-x-0 flex justify-center z-50 pointer-events-none">
      <motion.div 
        layout 
        className="pointer-events-auto flex items-center gap-1 p-1.5 rounded-full bg-zinc-900/80 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] ring-1 ring-white/5"
      >
        {(['left', 'right'] as const).map((side) => (
          <motion.button
            key={side}
            onClick={() => onToggle(side)}
            whileTap={{ scale: 0.96 }}
            className="relative w-24 h-12 rounded-full flex items-center justify-center text-sm font-medium focus:outline-none"
          >
            {activeSide === side && (
              <motion.div
                layoutId="island-surface"
                className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-white/5 shadow-inner"
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
              />
            )}
            <span className={`relative z-10 transition-colors duration-300 ${activeSide === side ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}>
              {side === 'left' ? 'Left' : 'Right'}
            </span>
            {activeSide === side && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute -bottom-1 h-1 w-6 rounded-full bg-gradient-to-r from-transparent via-white/60 to-transparent"
              />
            )}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}