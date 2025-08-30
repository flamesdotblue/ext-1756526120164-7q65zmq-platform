import React from 'react';
import { motion } from 'framer-motion';

const suites = [
  {
    name: 'Aurora Suite',
    desc: 'Wraparound viewport with electrochromic dimming and a private stargazing nook.',
    img: 'https://images.unsplash.com/photo-1519682577862-22b62b24e493?q=80&w=1800&auto=format&fit=crop',
    price: '12,500 / night',
  },
  {
    name: 'Nebula Loft',
    desc: 'Two-level microgravity loft with zero-G hammock and floating workspace.',
    img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1800&auto=format&fit=crop',
    price: '18,900 / night',
  },
  {
    name: 'Celestial Grand',
    desc: 'Panoramic dome bedroom, private observation pod, and hydroponic tea garden.',
    img: 'https://images.unsplash.com/photo-1518306727298-4c17e1bf6942?q=80&w=1800&auto=format&fit=crop',
    price: '29,000 / night',
  },
];

export default function Suites() {
  return (
    <section id="suites" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Suites crafted for orbit</h2>
          <p className="mt-3 text-white/70">
            Every room offers uninterrupted Earth views, acoustic tranquility, and intuitive microgravity design.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {suites.map((suite, i) => (
            <motion.article
              key={suite.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={suite.img}
                  alt={suite.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
                <div className="absolute bottom-3 left-3 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/10 backdrop-blur">
                  From {suite.price}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{suite.name}</h3>
                <p className="mt-2 text-sm text-white/70">{suite.desc}</p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href="#booking"
                    className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-4 py-2 text-xs font-semibold text-white shadow shadow-indigo-500/20 ring-1 ring-white/10 transition hover:bg-indigo-400"
                  >
                    Reserve Suite
                  </a>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10"
                    onClick={() => alert('A concierge will reach out with a holographic tour shortly!')}
                  >
                    Holo Tour
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}
