// components/dashboard/DeviceProfileDropdown.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export const DEVICE_PROFILES = [
  { id: 'default', label: 'Primary profile', sub: 'This iPhone · Personalized ANC' },
  { id: 'work', label: 'Work MacBook', sub: 'Office presets · Soft notifications' },
  { id: 'travel', label: 'Travel preset', sub: 'Max ANC · Flight-optimized EQ' },
] as const;

type ProfileId = (typeof DEVICE_PROFILES)[number]['id'];

export default function DeviceProfileDropdown() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<ProfileId>('default');

  const active = DEVICE_PROFILES.find(p => p.id === activeId)!;

  return (
    <div className="relative mt-1">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-zinc-900/70 px-3 py-2 text-left text-[11px] text-zinc-300 hover:bg-zinc-900 transition-colors"
      >
        <div className="flex flex-col">
          <span className="font-medium text-zinc-100">{active.label}</span>
          <span className="text-[10px] text-zinc-500">{active.sub}</span>
        </div>
        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.18 }}
          className="ml-2 text-zinc-500"
        >
          <ChevronRight size={14} />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 2, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute z-10 mt-1 w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/95 shadow-[0_16px_60px_rgba(0,0,0,0.7)]"
          >
            {DEVICE_PROFILES.map(profile => (
              <li key={profile.id}>
                <button
                  type="button"
                  onClick={() => {
                    setActiveId(profile.id);
                    setOpen(false);
                  }}
                  className={`flex w-full items-start justify-between px-3 py-2 text-[11px] transition-colors ${
                    profile.id === activeId
                      ? 'bg-zinc-900/80 text-zinc-100'
                      : 'text-zinc-300 hover:bg-zinc-900/60'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-medium">{profile.label}</span>
                    <span className="text-[10px] text-zinc-500">{profile.sub}</span>
                  </div>
                  {profile.id === activeId && (
                    <span className="mt-0.5 rounded-full bg-emerald-400/20 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
                      Active
                    </span>
                  )}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
