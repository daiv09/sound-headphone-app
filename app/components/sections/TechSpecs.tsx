'use client';
import React from 'react';
import {
    Speaker, Bluetooth, Battery, Radio,
    Activity, Zap, Music, Scale
} from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

const specs = [
    { icon: Speaker, title: "Driver Unit", val: "40mm Beryllium" },
    { icon: Bluetooth, title: "Connectivity", val: "Bluetooth 5.4" },
    { icon: Battery, title: "Battery Life", val: "40 Hours ANC On" },
    { icon: Radio, title: "Range", val: "100m Line of Sight" },
    { icon: Activity, title: "Frequency", val: "4Hz - 40,000Hz" },
    { icon: Zap, title: "Charging", val: "USB-C Fast Charge" },
    { icon: Music, title: "Codecs", val: "LDAC, aptX HD, AAC" },
    { icon: Scale, title: "Weight", val: "240g" },
];

export const TechSpecs = () => {
    return (
        <section id="specs" className="py-32 bg-black border-t border-zinc-900">
            <div className="max-w-7xl mx-auto px-6">
                <FadeIn>
                    <h2 className="text-4xl font-bold mb-16 text-center">Technical Specifications</h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-zinc-800 rounded-2xl overflow-hidden">
                    {specs.map((spec, i) => (
                        <FadeIn delay={i * 0.05} key={i} className="group p-8 border-b md:border-b-0 border-r border-zinc-800 last:border-r-0 hover:bg-zinc-900 transition-colors">
                            <div>
                                <spec.icon className="text-blue-500 mb-4" size={24} />
                                <h4 className="text-zinc-500 text-sm uppercase tracking-wide mb-2">{spec.title}</h4>
                                <p className="text-white text-lg font-medium">{spec.val}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};