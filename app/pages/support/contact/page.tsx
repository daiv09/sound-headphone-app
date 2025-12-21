// app/support/contact/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, HeadphonesIcon } from 'lucide-react';
import { Navbar } from '@/app/components/layout/Navbar';
import { Footer } from '@/app/components/layout/Footer';

const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-zinc-50">
      <Navbar />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-24">
        {/* background glow */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -top-32 left-1/3 h-64 w-64 rounded-full bg-sky-500/30 blur-3xl" />
          <div className="absolute -bottom-40 right-0 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        </div>

        <motion.section
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.08, delayChildren: 0.1 }}
          className="relative z-10 grid gap-10 md:grid-cols-[1.1fr_0.9fr] items-start"
        >
          {/* Left: form */}
          <div className="space-y-6">
            <motion.div variants={fadeInUp} className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold tracking-[0.25em] uppercase text-emerald-300">
                <HeadphonesIcon size={12} />
                Support
              </div>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Talk to the SOUND team.
              </h1>
              <p className="text-sm text-zinc-400 max-w-xl">
                Questions about your SOUND Pro X or Mini, order issues, or feature
                feedback—we usually reply within one business day.
              </p>
            </motion.div>

            <motion.form
              variants={fadeInUp}
              className="space-y-5 rounded-3xl border border-zinc-800 bg-zinc-950/70 p-6 md:p-7 shadow-[0_26px_80px_rgba(0,0,0,0.85)]"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2 text-sm">
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Alex Lee"
                    className="w-full rounded-2xl border border-zinc-800 bg-black/40 px-3 py-2.5 text-sm text-zinc-100 outline-none focus:border-emerald-500"
                  />
                </div>
                <div className="space-y-2 text-sm">
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-zinc-800 bg-black/40 px-3 py-2.5 text-sm text-zinc-100 outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <label className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                  Topic
                </label>
                <select
                  className="w-full rounded-2xl border border-zinc-800 bg-black/40 px-3 py-2.5 text-sm text-zinc-100 outline-none focus:border-emerald-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose a topic
                  </option>
                  <option>Order & billing</option>
                  <option>Technical issue</option>
                  <option>App & account</option>
                  <option>Feedback / feature request</option>
                </select>
              </div>

              <div className="space-y-2 text-sm">
                <label className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us what’s going on and how we can help."
                  className="w-full rounded-2xl border border-zinc-800 bg-black/40 px-3 py-2.5 text-sm text-zinc-100 outline-none focus:border-emerald-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full md:w-auto items-center justify-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-black hover:bg-emerald-400 transition-colors"
              >
                Send message
              </button>

              <p className="text-[11px] text-zinc-500">
                By submitting, you agree to let SOUND store your details to follow
                up on this request.
              </p>
            </motion.form>
          </div>

          {/* Right: contact details */}
          <motion.aside
            variants={fadeInUp}
            className="space-y-5 rounded-3xl border border-zinc-800 bg-zinc-950/70 p-6 md:p-7 text-sm text-zinc-300"
          >
            <h2 className="text-base font-semibold mb-2">Other ways to reach us</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-xl bg-zinc-900 p-2">
                  <Mail size={16} className="text-emerald-300" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Email
                  </p>
                  <p className="text-sm">support@sound.app</p>
                  <p className="text-[11px] text-zinc-500">
                    Best for detailed questions and order help.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-xl bg-zinc-900 p-2">
                  <Phone size={16} className="text-emerald-300" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Phone (IST)
                  </p>
                  <p className="text-sm">+91‑20‑5555‑0101</p>
                  <p className="text-[11px] text-zinc-500">
                    Mon–Fri, 10:00–18:00 IST for urgent support.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-xl bg-zinc-900 p-2">
                  <MapPin size={16} className="text-emerald-300" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Office
                  </p>
                  <p className="text-sm">SOUND Audio, Pune, Maharashtra</p>
                  <p className="text-[11px] text-zinc-500">
                    Visits by appointment only.
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-zinc-800 bg-black/40 px-4 py-3 text-[11px] text-zinc-400">
                Tip: For app bugs, include your device model, OS version, and app
                version so the team can reproduce the issue faster.
              </div>
            </div>
          </motion.aside>
        </motion.section>
      </div>

      <Footer />
    </main>
  );
}
