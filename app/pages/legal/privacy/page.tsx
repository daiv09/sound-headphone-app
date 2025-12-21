'use client';

import { Navbar } from '@/app/components/layout/Navbar';
import { Footer } from '@/app/components/layout/Footer';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-50">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 pt-24 pb-24 space-y-10">
        <header className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.25em] text-zinc-500">
            Legal
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-zinc-400">
            This Privacy Policy explains what information SOUND collects and how
            it is used, stored, and protected.
          </p>
        </header>

        <section className="space-y-6 text-sm leading-relaxed text-zinc-300">
          <div>
            <h2 className="text-base font-semibold text-zinc-100 mb-1">
              1. Information we collect
            </h2>
            <p>
              We collect information you provide when creating a SOUND ID (such
              as name and email), basic device information, app usage data, and
              optional diagnostics to help improve performance.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-zinc-100 mb-1">
              2. How we use your data
            </h2>
            <p>
              Your data is used to provide and personalize SOUND features,
              process orders, send important service updates, and improve the
              app and firmware experience.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-zinc-100 mb-1">
              3. Analytics and third parties
            </h2>
            <p>
              We may use privacy‑focused analytics and payment providers. They
              only receive the minimum data necessary to perform their services
              and are bound by data‑protection agreements.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-zinc-100 mb-1">
              4. Your choices and rights
            </h2>
            <p>
              You can update your account details, manage marketing preferences,
              and request deletion of your SOUND ID from within the app or by
              contacting support@sound.app.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-zinc-100 mb-1">
              5. Data security & retention
            </h2>
            <p>
              We use industry‑standard security measures to protect your data.
              Information is retained only as long as needed for the purposes
              described here or as required by law.
            </p>
          </div>

          <p className="text-xs text-zinc-500">
            Last updated: December 2025. For full details or region‑specific
            disclosures, refer to the complete policy included in the SOUND app.
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
}
