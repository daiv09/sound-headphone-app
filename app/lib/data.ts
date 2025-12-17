// lib/data.ts
import { Volume2, Mic, Zap, Wind } from 'lucide-react';

export type EarbudSide = 'left' | 'right';

export const EARBUD_DATA = {
  left: {
    id: 'left',
    title: 'Left Channel',
    subtitle: 'Ambient & Focus Control',
    description: 'Fine-tune Active Noise Cancellation intensities and ambient passthrough specific to your left ear.',
    accentColor: 'text-blue-400',
    bgGradient: 'from-blue-500/20 via-blue-900/10',
    glow: 'bg-blue-500',
    stats: { battery: 82, connection: 'Excellent' },
    features: [
      { label: 'ANC Level', icon: Wind, value: 75 },
      { label: 'Voice Focus', icon: Mic, value: 40 },
    ]
  },
  right: {
    id: 'right',
    title: 'Right Channel',
    subtitle: 'Media & Voice Assistant',
    description: 'Manage touch gestures, voice assistant latency, and call clarity settings for the right earbud.',
    accentColor: 'text-emerald-400',
    bgGradient: 'from-emerald-500/20 via-emerald-900/10',
    glow: 'bg-emerald-500',
    stats: { battery: 88, connection: 'Stable' },
    features: [
      { label: 'Volume Boost', icon: Volume2, value: 60 },
      { label: 'Transparency', icon: Zap, value: 90 },
    ]
  }
};