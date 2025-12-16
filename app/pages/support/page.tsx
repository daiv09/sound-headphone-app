// app/support/page.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Headphones,
  MessageCircle,
  Mail,
  Phone,
  ShieldCheck,
  AlertTriangle,
  BookOpen,
  ArrowRight,
  Clock,
  Globe2,
  Sparkles,
} from 'lucide-react';
import { Navbar } from '@/app/components/layout/Navbar';

const quickLinks = [
  {
    icon: Headphones,
    title: 'Product setup',
    body: 'Pairing, firmware updates, ANC tuning, and app walkthroughs.',
    cta: 'Open setup guide',
  },
  {
    icon: ShieldCheck,
    title: 'Warranty & repairs',
    body: 'Coverage details, claim process, and service center locations.',
    cta: 'View warranty info',
  },
  {
    icon: BookOpen,
    title: 'Documentation',
    body: 'Download the full user manual and safety information in PDF.',
    cta: 'Download manual',
  },
];

const faqs = [
  {
    question: 'How do I pair SOUND Pro X with a new device?',
    answer:
      'Turn the headphones on, then hold the power button for 3 seconds until the status LED pulses blue. On your phone or laptop, open Bluetooth settings, select “SOUND Pro X” from the list, and confirm pairing. The headphones can remember up to 8 devices.',
  },
  {
    question: 'What is covered under the standard warranty?',
    answer:
      'The standard 2‑year limited warranty covers manufacturing defects, battery failures beyond normal wear, and ANC hardware issues. It does not cover cosmetic damage or faults caused by liquid ingress or unauthorized modifications.',
  },
  {
    question: 'Can I use SOUND Pro X with multiple devices at once?',
    answer:
      'Yes. Multipoint allows you to stay connected to two devices simultaneously—for example, your laptop and phone. Audio automatically switches to the device that starts playing or receives a call.',
  },
  {
    question: 'How long does a full charge take?',
    answer:
      'A full charge from 0% typically takes about 2 hours using the included USB‑C cable and a 20 W or higher adapter. A 10‑minute fast charge can provide up to 6 hours of playback in most scenarios.',
  },
  {
    question: 'Is there a desktop or web app?',
    answer:
      'SOUND Studio is available for iOS, Android, and as a web app. You can sync presets, update firmware, and manage your profile from any supported platform.',
  },
];

const supportHours = [
  { region: 'Americas', hours: 'Mon–Fri · 8:00–20:00 PST' },
  { region: 'Europe & Middle East', hours: 'Mon–Fri · 8:00–18:00 CET' },
  { region: 'Asia Pacific', hours: 'Mon–Sat · 9:00–19:00 SGT' },
];

function FAQAccordion() {
  const [active, setActive] = useState<string | null>(faqs[0]?.question ?? null);

  return (
    <div className="space-y-3">
      {faqs.map((item) => {
        const isOpen = active === item.question;
        return (
          <div
            key={item.question}
            className="border border-zinc-800/80 rounded-2xl bg-zinc-950/60 overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setActive(isOpen ? null : item.question)}
              className="w-full flex items-center justify-between px-5 py-4 text-left"
            >
              <span className="text-sm md:text-base font-medium text-zinc-50">
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
                className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full border border-zinc-700 text-xs text-zinc-300"
              >
                ▶
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="px-5 pb-4"
                >
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

function ContactForm() {
  return (
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium uppercase tracking-[0.2em] text-zinc-400 mb-2">
            Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full rounded-xl border border-zinc-800 bg-zinc-950/70 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-xs font-medium uppercase tracking-[0.2em] text-zinc-400 mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-xl border border-zinc-800 bg-zinc-950/70 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium uppercase tracking-[0.2em] text-zinc-400 mb-2">
          Topic
        </label>
        <select className="w-full rounded-xl border border-zinc-800 bg-zinc-950/70 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
          <option>Order & shipping</option>
          <option>Technical issue</option>
          <option>App & connectivity</option>
          <option>Warranty & repair</option>
          <option>General question</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-medium uppercase tracking-[0.2em] text-zinc-400 mb-2">
          Message
        </label>
        <textarea
          rows={4}
          placeholder="Tell us what’s happening and what you’ve already tried…"
          className="w-full rounded-xl border border-zinc-800 bg-zinc-950/70 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
        />
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <p className="text-[0.7rem] text-zinc-500">
          By submitting, you agree that our support team may contact you by email regarding this request.
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-500 transition-colors"
        >
          Submit request
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </form>
  );
}

function StatusPanel() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Systems operational
          </p>
        </div>
        <span className="text-[0.65rem] text-zinc-500 flex items-center gap-1">
          <Clock className="h-3 w-3" />
          Updated just now
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-zinc-300">
        <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/60 px-3 py-3">
          <p className="mb-1 flex items-center gap-2 text-zinc-400">
            <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
            SOUND Studio app
          </p>
          <p className="text-[0.7rem] text-zinc-300">
            No incidents reported. Latest version: 2.3.1.
          </p>
        </div>
        <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/60 px-3 py-3">
          <p className="mb-1 flex items-center gap-2 text-zinc-400">
            <Globe2 className="h-3.5 w-3.5 text-sky-300" />
            Firmware update channel
          </p>
          <p className="text-[0.7rem] text-zinc-300">
            Updates delivering normally to all regions.
          </p>
        </div>
        <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/60 px-3 py-3">
          <p className="mb-1 flex items-center gap-2 text-zinc-400">
            <AlertTriangle className="h-3.5 w-3.5 text-amber-300" />
            Known issues
          </p>
          <p className="text-[0.7rem] text-zinc-300">
            Minor pairing delay on some Android 13 devices. Fix in progress.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SupportPage() {
  return (
    <div className="bg-black min-h-screen text-zinc-100">
      <Navbar/>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -top-40 left-[-10%] h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute -bottom-40 right-[-5%] h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col gap-10 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-xl"
          >
            <p className="mb-3 text-[0.7rem] md:text-xs font-semibold tracking-[0.3em] uppercase text-blue-200/70">
              Support
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-4">
              Here to keep your sound
              <br />
              effortless, every day.
            </h1>
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
              Find quick answers, chat with our team, or submit a detailed request. From device setup to
              warranty claims, the SOUND support team is here to help.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-zinc-300"
          >
            <div className="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-950/70 px-4 py-3">
              <MessageCircle className="h-4 w-4 text-emerald-300" />
              <div>
                <p className="font-medium">Live chat</p>
                <p className="text-[0.7rem] text-zinc-500">Avg. response · 2 minutes</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-950/70 px-4 py-3">
              <Mail className="h-4 w-4 text-sky-300" />
              <div>
                <p className="font-medium">Email support</p>
                <p className="text-[0.7rem] text-zinc-500">Replies within 24 hours</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick links & status */}
      <section className="border-t border-zinc-900 bg-black py-14">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[2fr,minmax(0,1.2fr)] gap-10">
          <div className="space-y-4">
            <h2 className="text-sm font-semibold tracking-[0.22em] uppercase text-zinc-400">
              Start with quick answers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {quickLinks.map((link) => (
                <div
                  key={link.title}
                  className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-4 flex flex-col gap-3"
                >
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                    <link.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-50 mb-1">{link.title}</p>
                    <p className="text-[0.78rem] text-zinc-400 leading-relaxed">{link.body}</p>
                  </div>
                  <button className="mt-auto inline-flex items-center gap-1 text-[0.75rem] font-medium text-blue-300 hover:text-blue-200">
                    {link.cta}
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-semibold tracking-[0.22em] uppercase text-zinc-400">
              Service status
            </h2>
            <StatusPanel />
          </div>
        </div>
      </section>

      {/* FAQ + contact */}
      <section className="border-t border-zinc-900 bg-gradient-to-b from-black via-zinc-950 to-black py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr),minmax(0,1fr)] gap-10">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
              Frequently asked questions
            </h2>
            <p className="text-sm text-zinc-400 mb-6">
              Answers to common questions about connectivity, power, and your SOUND Pro X experience.
            </p>
            <FAQAccordion />
          </div>

          <div className="space-y-5">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-1">
              Still need help?
            </h2>
            <p className="text-sm text-zinc-400">
              Share a few details and our specialists will get back to you with tailored steps—usually
              within one business day.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Regional support info */}
      <section className="border-t border-zinc-900 bg-black py-14">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[minmax(0,1.5fr),minmax(0,1fr)] gap-10">
          <div className="space-y-4">
            <h2 className="text-sm font-semibold tracking-[0.22em] uppercase text-zinc-400">
              Global support coverage
            </h2>
            <p className="text-sm text-zinc-300">
              SOUND operates distributed support teams across three main regions, so you can reach a
              human in your time zone. During peak launches, hours may be extended and additional
              channels may appear in the app.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              {supportHours.map((r) => (
                <div
                  key={r.region}
                  className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-4 flex flex-col gap-1"
                >
                  <p className="font-medium text-zinc-50">{r.region}</p>
                  <p className="text-[0.8rem] text-zinc-400 flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {r.hours}
                  </p>
                  <p className="text-[0.75rem] text-zinc-500 flex items-center gap-1">
                    <Phone className="h-3.5 w-3.5" />
                    Phone support available in English. Additional languages via chat.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 px-4 py-5 text-sm text-zinc-300 flex flex-col gap-3">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-zinc-400">
              Response expectations
            </p>
            <p>
              For most requests, you will receive a first response within 24 hours. Complex hardware or
              warranty investigations may require additional time for review, especially if shipping or
              diagnostic logs are involved.
            </p>
            <p>
              You can always reply to an existing support thread to add more details, screenshots, or
              logs—this helps the team resolve your issue faster.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
