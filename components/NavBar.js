'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="bg-dark text-grey sticky top-0 z-50 shadow">
      {/* Top Row: brand (image + name) and hamburger */}
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Left: Image + Name (linked to home) */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/neural.png"
            alt="Nayelly Zurita logo"
            width={44}
            height={44}
            className="rounded-full"
            priority
          />
          <span
            className={`text-xl sm:text-2xl font-bold tracking-wide transition-colors ${
              pathname === "/" ? "text-teal" : "text-grey hover:text-teal"
            }`}
          >
            Nayelly Zurita
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-base font-semibold">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`transition-colors hover:text-teal ${
                    isActive(link.href) ? "text-teal" : "text-grey"
                  }`}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-ocean focus:ring-sand"
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
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out bg-midnight ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="px-6 py-3 border-t border-white/10">
          <ul className="flex flex-col gap-4 text-lg font-semibold">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-lg px-2 py-2 transition-colors ${
                    isActive(link.href) ? "bg-teal/20 text-teal" : "text-grey hover:text-teal"
                  }`}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
