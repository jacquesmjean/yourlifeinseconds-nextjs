"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/tools", label: "Tools" },
    { href: "/membership", label: "Circle" },
    { href: "/insights", label: "Library" },
    { href: "/tools/legacy-letter", label: "Letter" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-subtle transition-all duration-300 ${
        scrolled ? "bg-brand-bg/95 backdrop-blur-xl" : "bg-brand-bg/85 backdrop-blur-xl"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-text-primary no-underline">
          <span className="flex items-center justify-center w-9 h-9 bg-gradient-accent rounded-lg text-brand-bg text-sm font-bold">
            LS
          </span>
          <span className="text-lg font-bold tracking-tight">
            Your Life <span className="text-accent">In Seconds</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-6 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/#life-clock"
            className="flex items-center gap-2 px-4 py-2 border border-accent text-accent rounded-lg text-sm font-semibold hover:bg-accent/10 transition-colors"
          >
            Start Counting
          </Link>
          <Link
            href="/membership"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent to-accent-blue text-brand-bg rounded-lg text-sm font-semibold hover:shadow-glow transition-all"
          >
            Become a Member
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span
            className={`w-6 h-0.5 bg-text-primary rounded transition-all ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-text-primary rounded transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-text-primary rounded transition-all ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-brand-bg/98 border-b border-subtle px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-secondary hover:text-text-primary"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <hr className="border-subtle" />
          <Link
            href="/#life-clock"
            className="border border-accent text-accent px-4 py-2 rounded-lg font-semibold text-center"
            onClick={() => setMenuOpen(false)}
          >
            Start Counting
          </Link>
          <Link
            href="/membership"
            className="bg-gradient-to-r from-accent to-accent-blue text-brand-bg px-4 py-2 rounded-lg font-semibold text-center"
            onClick={() => setMenuOpen(false)}
          >
            Become a Member
          </Link>
        </div>
      )}
    </nav>
  );
}

