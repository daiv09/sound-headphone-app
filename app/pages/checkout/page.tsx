'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Truck, ShieldCheck, ShoppingBag } from 'lucide-react';

const CART_ITEMS = [
    {
        id: 'left',
        name: 'SonicWare Pro – Left Earbud',
        desc: 'Spatial-tuned left channel with adaptive ANC.',
        price: 149,
        qty: 1,
    },
    {
        id: 'right',
        name: 'SonicWare Pro – Right Earbud',
        desc: 'Voice-forward right channel with low-latency link.',
        price: 149,
        qty: 1,
    },
];

const SHIPPING = 8;
const TAX_RATE = 0.18;

export default function CheckoutPage() {
    const [isPlacing, setIsPlacing] = useState(false);
    const [orderSuccess, setOrderSuccess] = useState(false);

    const subtotal = CART_ITEMS.reduce((sum, item) => sum + item.price * item.qty, 0);
    const tax = Math.round(subtotal * TAX_RATE);
    const total = subtotal + SHIPPING + tax;

    const handlePlaceOrder = (e: React.FormEvent) => {
        e.preventDefault();
        if (isPlacing) return;
        setIsPlacing(true);

        setTimeout(() => {
            setIsPlacing(false);
            setOrderSuccess(true);
        }, 1200);
    };

    return (
        <div className="min-h-screen bg-black text-zinc-100">
            {/* Top bar */}
            <header className="border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl">
                <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-semibold tracking-tight">
                            SOUND<span className="text-blue-500">.</span>
                        </span>
                        <span className="hidden text-xs text-zinc-500 sm:inline">
                            Secure checkout
                        </span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-zinc-400">
                        <ShieldCheck className="h-4 w-4 text-emerald-400" />
                        <span>End-to-end encrypted · Stripe ready</span>
                    </div>
                </div>
            </header>

            <motion.main
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 md:flex-row md:px-6 md:py-10"
            >                {/* LEFT: forms */}
                <section className="flex-1 space-y-6">
                    {/* Breadcrumb / title */}
                    <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                            Checkout
                        </p>
                        <h1 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                            Complete your order
                        </h1>
                        <p className="mt-2 text-sm text-zinc-400">
                            SonicWare Pro, tuned to your profile. Enter your details and choose a payment
                            method to finalize your purchase.
                        </p>
                    </div>

                    <form onSubmit={handlePlaceOrder} className="space-y-6">
                        {/* Contact */}
                        <motion.div
                            initial={{ opacity: 0, y: 16, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }} // “Apple-ish” spring
                            className="rounded-2xl border border-white/5 bg-zinc-950/80 p-4 sm:p-5 space-y-4 shadow-[0_18px_60px_rgba(0,0,0,0.7)]"
                        >
                            <div className="flex items-center justify-between gap-2">
                                <h2 className="text-sm font-semibold">Contact information</h2>
                                <span className="text-[11px] text-zinc-500">
                                    Already have an account?{' '}
                                    <button type="button" className="text-blue-400 hover:text-blue-300">
                                        Log in
                                    </button>
                                </span>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-2">
                                <div className="space-y-1">
                                    <label className="text-xs text-zinc-400">First name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-blue-500"
                                        placeholder="Alex"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs text-zinc-400">Last name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-blue-500"
                                        placeholder="Chen"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs text-zinc-400">Email address</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-blue-500"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </motion.div>

                        {/* Shipping */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25, delay: 0.05 }}
                            className="rounded-2xl border border-white/5 bg-zinc-950/80 p-4 sm:p-5 space-y-4"
                        >
                            <div className="flex items-center gap-2">
                                <Truck className="h-4 w-4 text-sky-400" />
                                <h2 className="text-sm font-semibold">Shipping address</h2>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-2">
                                <div className="space-y-1 sm:col-span-2">
                                    <label className="text-xs text-zinc-400">Street address</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-blue-500"
                                        placeholder="221B Baker Street"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs text-zinc-400">City</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-blue-500"
                                        placeholder="London"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs text-zinc-400">State / Region</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-blue-500"
                                        placeholder="Greater London"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs text-zinc-400">Postal code</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-blue-500"
                                        placeholder="NW1 6XE"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs text-zinc-400">Country</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-blue-500"
                                        placeholder="United Kingdom"
                                    />
                                </div>
                            </div>

                            <div className="mt-2 flex items-center justify-between text-[11px] text-zinc-500">
                                <span>Standard delivery · 2–4 business days</span>
                                <span className="text-zinc-300">&#36;{SHIPPING.toLocaleString()} shipping</span>
                            </div>
                        </motion.div>

                        {/* Payment */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25, delay: 0.1 }}
                            className="rounded-2xl border border-white/5 bg-zinc-950/80 p-4 sm:p-5 space-y-4"
                        >
                            <div className="flex items-center gap-2">
                                <CreditCard className="h-4 w-4 text-emerald-400" />
                                <h2 className="text-sm font-semibold">Payment method</h2>
                            </div>

                            <div className="flex flex-wrap gap-2 text-[11px] text-zinc-400">
                                <span className="rounded-full bg-zinc-900/80 px-3 py-1 border border-zinc-700">
                                    Card
                                </span>
                                <span className="rounded-full bg-zinc-900/40 px-3 py-1 border border-zinc-800">
                                    UPI
                                </span>
                                <span className="rounded-full bg-zinc-900/40 px-3 py-1 border border-zinc-800">
                                    Netbanking
                                </span>
                            </div>

                            <div className="grid gap-3">
                                <div className="space-y-1">
                                    <label className="text-xs text-zinc-400">Card number</label>
                                    <input
                                        type="text"
                                        inputMode="numeric"
                                        maxLength={19}
                                        className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-emerald-500"
                                        placeholder="4242 4242 4242 4242"
                                    />
                                </div>

                                <div className="grid gap-3 sm:grid-cols-3">
                                    <div className="space-y-1">
                                        <label className="text-xs text-zinc-400">Expiry</label>
                                        <input
                                            type="text"
                                            inputMode="numeric"
                                            maxLength={5}
                                            className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-emerald-500"
                                            placeholder="MM/YY"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs text-zinc-400">CVC</label>
                                        <input
                                            type="text"
                                            inputMode="numeric"
                                            maxLength={4}
                                            className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-emerald-500"
                                            placeholder="123"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs text-zinc-400">Name on card</label>
                                        <input
                                            type="text"
                                            className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm outline-none focus:border-emerald-500"
                                            placeholder="Alex Chen"
                                        />
                                    </div>
                                </div>
                            </div>

                            <p className="text-[11px] text-zinc-500">
                                Your card will be securely processed. We never store full card details on
                                our servers.
                            </p>

                            <motion.button
                                type="submit"
                                disabled={isPlacing}
                                whileHover={!isPlacing ? { scale: 1.02, y: -1 } : undefined}
                                whileTap={!isPlacing ? { scale: 0.97 } : undefined}
                                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-blue-800/70"
                            >
                                {isPlacing ? 'Placing your order…' : 'Place order'}
                            </motion.button>
                        </motion.div>
                    </form>
                </section>

                {/* RIGHT: order summary */}
                <aside className="w-full md:w-80 lg:w-96 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25 }}
                        className="rounded-2xl border border-white/5 bg-zinc-950/80 p-4 sm:p-5 space-y-4"
                    >
                        <div className="flex items-center gap-2">
                            <ShoppingBag className="h-4 w-4 text-zinc-300" />
                            <h2 className="text-sm font-semibold">Order summary</h2>
                        </div>

                        <ul className="space-y-3 text-sm">
                            {CART_ITEMS.map(item => (
                                <li key={item.id} className="flex items-start justify-between gap-3">
                                    <div>
                                        <p className="text-zinc-100">{item.name}</p>
                                        <p className="text-[11px] text-zinc-500">{item.desc}</p>
                                        <p className="mt-1 text-[11px] text-zinc-500">Qty · {item.qty}</p>
                                    </div>
                                    <span className="text-sm font-medium text-zinc-100">
                                        &#36;{item.price.toLocaleString()}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                        <div className="space-y-1 text-sm">
                            <div className="flex justify-between text-zinc-400">
                                <span>Subtotal</span>
                                <span>&#36;{subtotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-zinc-400">
                                <span>Shipping</span>
                                <span>&#36;{SHIPPING.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-zinc-400">
                                <span>Tax (18%)</span>
                                <span>&#36;{tax.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between pt-2 text-sm font-semibold text-zinc-100">
                                <span>Total</span>
                                <span>&#36;{total.toLocaleString()}</span>
                            </div>
                        </div>

                        <p className="text-[11px] text-zinc-500">
                            By placing your order, you agree to the SOUND Terms of Sale and Privacy
                            Policy.
                        </p>
                    </motion.div>
                </aside>
            </motion.main>
        </div>
    );
}
