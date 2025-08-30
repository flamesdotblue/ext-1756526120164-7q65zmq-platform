import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-20">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7bEo8T0cZ4Vks2Vb/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-24 sm:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Sleep among the stars at <span className="bg-gradient-to-r from-indigo-300 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">Spacy</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/75">
            The galaxy’s first boutique orbital hotel. Zero-gravity lounges, panoramic Earth views, and gourmet astro-cuisine—designed for wonder.
          </p>
          <div className="pointer-events-auto mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#booking"
              className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 ring-1 ring-white/10 transition hover:bg-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
            >
              Book your orbit
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full bg-white/5 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10"
            >
              See amenities
            </a>
          </div>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="pointer-events-auto grid gap-3 sm:ml-auto"
        >
          {["Orbital sunrises every 90 minutes","Zero-G spa and lounges","Personal observation domes"].map((f) => (
            <li key={f} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300 shadow shadow-indigo-500/30" />
              <span className="text-sm text-white/90">{f}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
