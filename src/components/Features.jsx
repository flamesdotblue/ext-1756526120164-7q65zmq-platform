import React from 'react';
import { Rocket, Star, Shield, Wifi } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Orbital Transfers',
    desc: 'Seamless shuttle service from major spaceports with concierge boarding.',
  },
  {
    icon: Star,
    title: 'Cosmic Dining',
    desc: 'Multi-course tasting menus crafted by Michelin-star chefs adapted for microgravity.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    desc: 'State-of-the-art radiation shielding, AI monitoring, and redundant life support.',
  },
  {
    icon: Wifi,
    title: 'Quantum Fast Wi‑Fi',
    desc: 'Stay connected across the solar system with ultra-low latency relays.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Amenities beyond Earthly standards</h2>
          <p className="mt-3 text-white/70">
            Designed for comfort in microgravity with panoramic views, curated experiences, and thoughtful safety systems.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-indigo-400/30 hover:bg-white/[0.06]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 ring-1 ring-indigo-400/30">
                <Icon className="text-indigo-300" size={20} />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}
