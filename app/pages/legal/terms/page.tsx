'use client';

import { Navbar } from '@/app/components/layout/Navbar';
import { Footer } from '@/app/components/layout/Footer';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-50">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 pt-24 pb-24 space-y-10">
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.25em] text-zinc-500">
            Legal
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Terms of Use
          </h1>
          <p className="text-sm text-zinc-400">
            These Terms of Use describe how you can use the SOUND website, app,
            and services.
          </p>
        </header>

        <section className="space-y-6 text-sm leading-relaxed text-zinc-300">
          <div>
            <h2 className="text-base font-semibold text-zinc-100 mb-1">
              1. Your SOUND account
            </h2>
            <p>
              You are responsible for keeping your SOUND ID and password secure
              and for all activity that happens under your account. Do not share
              your login credentials with others.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-zinc-100 mb-1">
              2. Acceptable use
            </h2>
            <p>
              You agree not to misuse SOUND services, attempt to access systems
              without permission, or interfere with other users&apos; experience.
              SOUND may suspend or terminate access if misuse is detected.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-zinc-100 mb-1">
              3. Software and updates
            </h2>
            <p>
              The SOUND app and firmware are licensed, not sold. We may
              automatically install updates to improve performance, security, or
              add new features.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-zinc-100 mb-1">
              4. Warranties and limitations
            </h2>
            <p>
              SOUND is provided “as is” to the fullest extent permitted by law.
              We do not guarantee uninterrupted or error‑free operation, and our
              liability is limited to the amount you paid for the product or
              service.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-zinc-100 mb-1">
              5. Changes to these terms
            </h2>
            <p>
              We may update these Terms from time to time. If changes are
              material, we will notify you in the app or by email before they
              take effect.
            </p>
          </div>

          <p className="text-xs text-zinc-500">
            Last updated: December 2025. This summary is for convenience only
            and does not replace the full legal text provided with your
            purchase or in‑app.
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
}
