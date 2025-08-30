import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Suites from './components/Suites';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-indigo-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Suites />

        {/* CTA Section */}
        <section id="booking" className="relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-6 py-24 text-center">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to check in above the clouds?</h2>
              <p className="mt-4 text-lg text-white/70">
                Reserve your orbit and experience sunrise every 90 minutes. Book now and get complimentary shuttle transfer from the spaceport.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <a
                  href="#suites"
                  className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 ring-1 ring-white/10 transition hover:bg-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
                >
                  Explore Suites
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-white/5 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10"
                >
                  Contact Concierge
                </a>
              </div>
            </div>
          </div>
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-[0] bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(99,102,241,0.25),transparent)]" />
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Spacy Orbital Hotels. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <a href="#features" className="hover:text-white">Amenities</a>
            <a href="#suites" className="hover:text-white">Suites</a>
            <a href="#booking" className="hover:text-white">Book</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
