import React from 'react';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/90 ring-1 ring-white/20">
            <Rocket size={18} className="text-white" />
          </span>
          <span className="text-lg font-semibold tracking-tight">Spacy</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
          <a href="#features" className="transition hover:text-white">Amenities</a>
          <a href="#suites" className="transition hover:text-white">Suites</a>
          <a href="#booking" className="transition hover:text-white">Book</a>
        </nav>
        <a
          href="#booking"
          className="hidden rounded-full bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow shadow-indigo-500/20 ring-1 ring-white/10 transition hover:bg-indigo-400 sm:inline-flex"
        >
          Reserve
        </a>
      </div>
    </header>
  );
}
