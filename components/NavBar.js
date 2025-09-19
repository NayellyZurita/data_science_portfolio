'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#2A363B] text-[#DAD7CD] sticky top-0 z-50 shadow">
      {/* Top Row: brand (image + name) and hamburger */}
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Left: Image + Name (together, on the same side) */}
        <div className="flex items-center gap-3">
          <Image
            src="/neural.png"
            alt="Nayelly Zurita logo"
            width={44}
            height={44}
            className="rounded-full"
            priority
          />
          <span className="text-xl sm:text-2xl font-bold tracking-wide">
            Nayelly Zurita
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-base font-semibold">
            <li>
              <Link href="/" className="hover:underline underline-offset-4">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline underline-offset-4">
                About
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:underline underline-offset-4">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline underline-offset-4">
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#355C7D] focus:ring-[#DAD7CD]"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            {open ? (
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile slide-down bar */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out bg-[#2e4e6a] ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="px-6 py-3 border-t border-white/10">
          <ul className="flex flex-col gap-4 text-lg font-semibold">
            <li>
              <Link
                href="/"
                className="block py-2"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="block py-2"
                onClick={() => setOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="block py-2"
                onClick={() => setOpen(false)}
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
