// components/dashboard/Sidebar.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut, X, Zap, Smartphone, ChevronRight } from 'lucide-react';
import { usePathname } from 'next/navigation';

import DeviceProfileDropdown from './Dropdown';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const sidebarVariants = {
  closed: { x: "100%", opacity: 0 },
  open: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 30 } }
};

const containerVariants = {
  open: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
};

const itemVariants = {
  closed: { x: 20, opacity: 0 },
  open: { x: 0, opacity: 1 }
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [showSignOutConfirm, setShowSignOutConfirm] = useState(false);
  const router = useRouter();
  const isDashboard = pathname.startsWith('/pages/dashboard');
  const handleNavigation = (href: string) => {
    router.push(href);
    onClose(); // Close sidebar after navigation
  };
  const handleSignOut = () => {
    router.push("/")
  }
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }} // Custom cubic-bezier for smoothness
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-[4px] z-40" // Increased blur slightly
          />

          {/* Sidebar Panel */}
          <motion.aside
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{
              type: 'spring',
              stiffness: 300, // Increased stiffness for snappiness
              damping: 30, // Increased damping to prevent over-oscillation
              mass: 0.8, // Lighter mass for quicker initial movement
              staggerChildren: 0.05, // Stagger children animations
              delayChildren: 0.1 // Delay children slightly
            }}
            className="fixed right-0 top-0 h-full w-full max-w-[400px] z-50 bg-zinc-950/90 backdrop-blur-3xl border-l border-white/5 shadow-2xl flex flex-col" // Increased opacity slightly
            style={{ transformOrigin: '100% 50%' }}
          >
            {/* Header */}
            <motion.div
              className="flex items-center justify-between px-8 py-6 border-b border-white/5 bg-white/5"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 ring-1 ring-white/20 flex items-center justify-center text-sm font-bold text-white shadow-lg">
                    AL
                  </div>
                  <motion.div
                    className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 bg-emerald-500 border-2 border-zinc-900 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring', stiffness: 500, damping: 15 }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25, duration: 0.4, ease: "easeOut" }}
                >
                  <h3 className="text-base font-semibold text-white tracking-tight">Alex Lee</h3>
                  <p className="text-xs text-zinc-400 font-medium">Pro Member</p>
                </motion.div>
              </div>
              <motion.button
                onClick={onClose}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }} // Added rotation on hover
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <X size={20} />
              </motion.button>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={containerVariants}
              initial="closed"
              animate="open"
              className="flex-1 overflow-y-auto px-8 py-8 space-y-10 scrollbar-none"
            >
              {/* Device Card Section – only on dashboard */}
              <section className="space-y-4">
                <SectionLabel>My Device</SectionLabel>
                {isDashboard && (
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -6, scale: 1.03, rotate: -0.5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }} // Enhanced hover effect
                    whileTap={{ scale: 0.97, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="
                  relative
                  p-5
                  rounded-[2rem] // More rounded corners
                  bg-zinc-900/60 // Slightly more transparent
                  backdrop-blur-xl
                  border border-zinc-700/40
                  hover:border-zinc-500/50 // Brighter border on hover
                  shadow-xl
                  transition-all // Smooth transition for non-motion properties
                  group
                  overflow-hidden
                "
                  >
                    {/* outer vignette / halo */}
                    <motion.div
                      className="
                    pointer-events-none
                    absolute inset-0
                    rounded-[2rem]
                    bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),transparent_50%),radial-gradient(circle_at_bottom_left,_rgba(34,197,94,0.15),transparent_50%)] // Adjusted gradient
                    opacity-50
                  "
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.8 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    />

                    {/* subtle inner glass edge */}
                    <motion.div
                      className="
                    pointer-events-none
                    absolute inset-[1px]
                    rounded-[1.9rem]
                    border border-white/10
                    bg-gradient-to-br from-white/10 via-transparent to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-500 // Slower transition
                  "
                    />

                    {/* content layer */}
                    <div className="relative z-10">
                      {/* Header row + dropdown trigger */}
                      <div className="flex items-start justify-between mb-4">
                        <motion.div
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3, duration: 0.4 }}
                        >
                          <motion.div
                            className="
                          h-10 w-10 // Slightly larger icon container
                          rounded-2xl
                          bg-zinc-800/80
                          flex items-center justify-center
                          ring-1 ring-white/10
                          shadow-inner // Inner shadow for depth
                        "
                            whileHover={{ scale: 1.1, rotate: -5, backgroundColor: "rgba(39, 39, 42, 1)" }}
                            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                          >
                            <Smartphone className="text-zinc-200" size={18} />
                          </motion.div>
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold text-zinc-50">
                              SonicWare Pro
                            </span>
                            <span className="text-[11px] text-zinc-400">
                              Adaptive noise · Ultra‑low latency
                            </span>
                          </div>
                        </motion.div>

                        {/* Status pill */}
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4, type: 'spring', stiffness: 400, damping: 20 }}
                          className="
                        inline-flex items-center gap-1.5
                        px-3 py-1 // Increased padding
                        rounded-full
                        bg-emerald-500/10
                        text-emerald-400
                        text-[10px]
                        font-bold
                        uppercase tracking-wider
                        border border-emerald-500/20
                        shadow-sm
                      "
                        >
                          <motion.span
                            className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} // Slower pulse
                          />
                          Connected
                        </motion.span>
                      </div>

                      {/* Device profile dropdown */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45, duration: 0.4 }}
                      >
                        <DeviceProfileDropdown />
                      </motion.div>

                      {/* Battery section */}
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
                        className="mt-5 grid grid-cols-3 gap-3"
                      >
                        <BatteryIndicator label="L" level={82} />
                        <BatteryIndicator label="R" level={88} />
                        <BatteryIndicator
                          label="Case"
                          level={92}
                          icon={<Zap size={10} className="fill-current" />}
                        />
                      </motion.div>

                      {/* bottom meta line */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="mt-4 flex items-center justify-between text-[10px] text-zinc-500 font-medium"
                      >
                        <span>Spatial audio on</span>
                        <span>Battery health · Excellent</span>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </section>

              {/* Menu Sections (always visible) */}
              <motion.div className="space-y-8"> {/* Grouped sections for cleaner staggering */}
                <motion.section
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                >
                  <SectionLabel>Wellbeing</SectionLabel>
                  <MenuItem label="Safe Listening" value="Normal" href="/pages/account/wellbeing" onNavigate={handleNavigation} />
                  <MenuItem label="Usage Stats" href="/pages/account/wellbeing" onNavigate={handleNavigation} />
                </motion.section>

                <motion.section
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                >
                  <SectionLabel>Account</SectionLabel>
                  <MenuItem label="Personal Profile" href="/pages/account/profile" onNavigate={handleNavigation} />
                  <MenuItem label="Login & Security" href="/pages/account/security" onNavigate={handleNavigation} />
                  <MenuItem label="Subscriptions" value="Pro" href="/pages/account/subscription" onNavigate={handleNavigation} />
                </motion.section>

                <motion.section
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
                >
                  <SectionLabel>Support</SectionLabel>
                  <MenuItem label="User Manual" href="/pages/account/support" onNavigate={handleNavigation} />
                  <MenuItem label="Help & FAQ" href="/pages/account/support" onNavigate={handleNavigation} />
                </motion.section>
              </motion.div>
            </motion.div>

            {/* Footer */}
            <motion.div
              className="p-8 border-t border-white/5 bg-zinc-950/40 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
            >
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "rgba(239, 68, 68, 0.15)", borderColor: "rgba(239, 68, 68, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowSignOutConfirm(true)}
                className="w-full py-4 rounded-2xl bg-red-500/10 text-red-400 font-medium text-sm flex items-center justify-center gap-2 transition-all border border-red-500/10 shadow-sm"
              >
                <LogOut size={18} /> Sign Out
              </motion.button>
            </motion.div>
          </motion.aside>

          {/* Sign out confirm overlay */}
          <AnimatePresence>
            {showSignOutConfirm && (
              <>
                {/* Dimmed overlay over entire viewport */}
                <motion.div
                  className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]" // Higher z-index to be above sidebar
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setShowSignOutConfirm(false)}
                />

                {/* Centered dialog in viewport */}
                <div className="fixed inset-0 z-[70] flex items-center justify-center px-4 pointer-events-none"> {/* Wrapper for centering */}
                  <motion.div
                    className="w-full max-w-sm rounded-[2.5rem] bg-zinc-900 border border-white/10 shadow-2xl p-8 space-y-6 relative overflow-hidden pointer-events-auto"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  >
                    {/* subtle gradient accent */}
                    <div className="pointer-events-none absolute inset-0 opacity-30">
                      <motion.div
                        className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-red-500/30 blur-[60px]"
                        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <motion.div
                        className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-orange-500/20 blur-[60px]"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      />
                    </div>

                    <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                      <motion.div
                        className="h-16 w-16 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center text-red-400 shadow-inner border border-white/5"
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 18, delay: 0.1 }}
                      >
                        <LogOut size={28} />
                      </motion.div>

                      <div className="space-y-2">
                        <motion.h4
                          className="text-xl font-bold text-white tracking-tight"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          Sign out of SOUND?
                        </motion.h4>
                        <motion.p
                          className="text-sm text-zinc-400 leading-relaxed max-w-[280px] mx-auto"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          You'll end this session on this device. Your settings stay linked to your SOUND ID.
                        </motion.p>
                      </div>
                    </div>

                    <div className="relative z-10 pt-2 space-y-3">
                      <motion.button
                        type="button"
                        onClick={() => {
                          setShowSignOutConfirm(false);
                          handleSignOut();
                          onClose();
                        }}
                        className="w-full py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 shadow-lg shadow-red-500/20 transition-all border border-red-400/20"
                        whileHover={{ scale: 1.02, y: -1, boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.4)" }}
                        whileTap={{ scale: 0.97 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        Sign out anyway
                      </motion.button>

                      <motion.button
                        type="button"
                        onClick={() => setShowSignOutConfirm(false)}
                        className="w-full py-3.5 rounded-xl text-sm font-medium text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        Stay signed in
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}

// --- Helper Components for Sidebar ---
const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest px-2">{children}</h4>
);

const MenuItem = ({
  label,
  value,
  href,
  onNavigate
}: {
  label: string;
  value?: string;
  href?: string;
  onNavigate?: (href: string) => void;
}) => {
  const handleClick = () => {
    if (href && onNavigate) {
      onNavigate(href);
    }

  };


  return (
    <motion.button
      variants={itemVariants}
      onClick={handleClick}
      disabled={!href}
      className={`w-full group flex items-center justify-between p-3 rounded-xl transition-all hover:bg-white/5 ${!href ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-zinc-300 group-hover:text-white">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        {value && <span className="text-xs text-zinc-500 font-medium">{value}</span>}
        <ChevronRight size={14} className="text-zinc-600 group-hover:text-zinc-400" />
      </div>
    </motion.button>
  );
};


const BatteryIndicator = ({ label, level, icon }: { label: string, level: number, icon?: React.ReactNode }) => (
  <div className="flex flex-col items-center gap-2 p-2 rounded-xl bg-zinc-950/50 border border-white/5">
    <span className="text-[10px] text-zinc-500 uppercase font-bold">{label}</span>
    <div className="relative h-8 w-2 bg-zinc-800 rounded-full overflow-hidden">
      <div className={`absolute bottom-0 w-full rounded-full ${level < 20 ? 'bg-red-500' : 'bg-emerald-400'}`} style={{ height: `${level}%` }} />
    </div>
    <div className="flex items-center gap-0.5 text-[10px] text-zinc-300 font-medium">{icon} {level}%</div>
  </div>
);