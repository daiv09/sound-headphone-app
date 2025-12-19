// components/dashboard/Header.tsx
'use client';

import { Bluetooth, Battery } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  currentData: any;
  isLeft: boolean;
  onOpenSidebar: () => void;
}

export default function Header({ currentData, isLeft, onOpenSidebar }: HeaderProps) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith('/pages/dashboard');

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-zinc-950/60 backdrop-blur-2xl supports-[backdrop-filter]:bg-zinc-950/30">
      <div className="w-full px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold tracking-tighter">
            SOUND<span className="text-blue-500">.</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          {/* Status capsule only on dashboard */}
          {isDashboard && (
            <div className="hidden md:flex items-center gap-4 rounded-full border border-white/5 bg-white/5 px-5 py-2 backdrop-blur-md hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-2.5">
                <div className="relative flex h-2 w-2">
                  <span
                    className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isLeft ? 'bg-blue-400' : 'bg-emerald-400'
                      }`}
                  />
                  <span
                    className={`relative inline-flex h-2 w-2 rounded-full ${isLeft ? 'bg-blue-500' : 'bg-emerald-500'
                      }`}
                  />
                </div>
                <Bluetooth size={13} className="text-zinc-400" />
                <span className="text-xs font-medium text-zinc-300 tracking-wide">
                  {currentData.id === 'left' ? 'L' : 'R'} connected
                </span>
              </div>
              <div className="h-3 w-px bg-white/10" />
              <div className="flex items-center gap-2">
                <Battery
                  size={13}
                  className={
                    currentData.stats?.battery < 20 ? 'text-red-400' : 'text-zinc-400'
                  }
                />
                <span className="text-xs font-medium text-zinc-300 tabular-nums">
                  {currentData.stats?.battery ?? 0}%
                </span>
              </div>
            </div>
          )}

          {/* Avatar Button */}
          <button
            onClick={onOpenSidebar}
            className="h-9 w-9 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 ring-1 ring-white/10 flex items-center justify-center text-[10px] font-bold text-zinc-300 shadow-lg hover:scale-105 transition-transform"
          >
            AL
          </button>
        </div>
      </div>
    </header>
  );
}
