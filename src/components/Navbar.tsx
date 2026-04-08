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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-subtle transition-all duration-300 ${
        scrolled ? "bg-brand-bg/95 backdrop-blur-xl" : "bg-brand-bg/85 backdrop-blur-xl"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-text-primary no-underline">
          <span className="flex items-center justify-center w-9 h-9 bg-gradient-accent rounded-lg text-brand-bg text-sm font-bold">LS</span>
          <span className="text-lg font-bold tracking-tight">
            Your Life <span className="text-accent">In Seconds</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-6 list-none">
          <li>
            <Link href="/" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">Home</Link>
          </li>
          <li>
            <Link href="/tools" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">Tools</Link>
          </li>
          <li>
            <Link href="/insights" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">Insights</Link>
          </li>
          <li>
            <Link href="/about" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">Founder</Link>
          </li>
          <li>
            <Link href="/mission" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">About</Link>
          </li>
          <li>
            <Link href="/contact" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">Contact</Link>
          </li>
        </ul>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/#life-clock"
            className="flex items-center gap-2 px-4 py-2 border border-accent text-accent rounded-lg text-sm font-semibold hover:bg-accent/10 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Calculate My Time
          </Link>
          <Link
            href="/tools"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent to-accent-blue text-brand-bg rounded-lg text-sm font-semibold hover:shadow-glow transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            Start Your Dashboard
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`w-6 h-0.5 bg-text-primary rounded transition-all ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`w-6 h-0.5 bg-text-primary rounded transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-text-primary rounded transition-all ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-brand-bg/98 border-b border-subtle px-6 py-6 flex flex-col gap-4">
          <Link href="/" className="text-text-secondary hover:text-text-primary" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/tools" className="text-text-secondary hover:text-text-primary" onClick={() => setMenuOpen(false)}>Tools</Link>
          <Link href="/insights" className="text-text-secondary hover:text-text-primary" onClick={() => setMenuOpen(false)}>Insights</Link>
          <Link href="/about" className="text-text-secondary hover:text-text-primary" onClick={() => setMenuOpen(false)}>Founder</Link>
          <Link href="/mission" className="text-text-secondary hover:text-text-primary" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/contact" className="text-text-secondary hover:text-text-primary" onClick={() => setMenuOpen(false)}>Contact</Link>
          <hr className="border-subtle" />
          <Link href="/#life-clock" className="border border-accent text-accent px-4 py-2 rounded-lg font-semibold text-center" onClick={() => setMenuOpen(false)}>Calculate My Time</Link>
          <Link href="/tools" className="bg-gradient-to-r from-accent to-accent-blue text-brand-bg px-4 py-2 rounded-lg font-semibold text-center" onClick={() => setMenuOpen(false)}>Start Your Dashboard</Link>
        </div>
      )}
    </nav>
  );
}
