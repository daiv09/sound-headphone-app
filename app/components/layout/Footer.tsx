// components/layout/Footer.tsx
'use client';

import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";

export const Footer = () => {
  const router = useRouter();
  const goTo = (path: string) => router.push(path);

  return (
    <footer className="bg-black py-20 border-t border-zinc-900 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-12 text-zinc-500">
        {/* Product */}
        <div>
          <h5 className="text-white font-bold mb-6">Product</h5>
          <ul className="space-y-4">
            <li
              className="hover:text-blue-400 cursor-pointer transition-colors"
              onClick={() => goTo("/")}
            >
              SOUND Pro X
            </li>
            <li
              className="hover:text-blue-400 cursor-pointer transition-colors"
              onClick={() => goTo("/mini")}
            >
              SOUND Mini
            </li>
            <li
              className="hover:text-blue-400 cursor-pointer transition-colors"
              onClick={() => goTo("/pages/accessories")}
            >
              Accessories
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h5 className="text-white font-bold mb-6">Support</h5>
          <ul className="space-y-4">
            <li
              className="hover:text-blue-400 cursor-pointer transition-colors"
              onClick={() => goTo("/support/downloads")}
            >
              Downloads
            </li>
            <li
              className="hover:text-blue-400 cursor-pointer transition-colors"
              onClick={() => goTo("/pages/account/support")}
            >
              Help & FAQ
            </li>
            <li
              className="hover:text-blue-400 cursor-pointer transition-colors"
              onClick={() => goTo("/support/contact")}
            >
              Contact us
            </li>
          </ul>
        </div>

        {/* Subscribe / Account hint */}
        <div>
          <h5 className="text-white font-bold mb-6">Stay in sync</h5>
          <p className="mb-3">
            Sign in on the web and get updates about new SOUND features.
          </p>
          <div className="flex border border-zinc-800 rounded-full overflow-hidden p-1 mb-3">
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent px-4 py-2 w-full focus:outline-none text-white"
            />
            <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-full transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
          <button
            className="text-xs text-zinc-400 hover:text-blue-400 transition-colors"
            onClick={() => goTo("/pages/account/profile")}
          >
            Manage your SOUND account
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-6 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500">
        <div>© 2025 SOUND Audio. All rights reserved.</div>
        <div className="flex gap-6">
          <span
            className="cursor-pointer hover:text-white transition-colors"
            onClick={() => goTo("/pages/legal/privacy")}
          >
            Privacy
          </span>
          <span
            className="cursor-pointer hover:text-white transition-colors"
            onClick={() => goTo("/pages/legal/terms")}
          >
            Terms
          </span>
        </div>
      </div>
    </footer>
  );
};
