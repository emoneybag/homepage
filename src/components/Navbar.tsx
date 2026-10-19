"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const ThemeButton = (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="flex h-8 w-8 items-center justify-center rounded-full text-base text-fg transition hover:bg-fg/10"
    >
      {theme === "dark" ? "☀" : "☾"}
    </button>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-fg/10 bg-nav backdrop-blur-xl backdrop-saturate-180">
      <nav className="mx-auto flex h-11 max-w-5xl items-center justify-between px-5 md:px-6">
        {/* Logo */}
        <Link href="/" aria-label="S&R Group home" className="shrink-0">
          <Image
            src="/images/sr-logo.svg"
            alt="S&R Group"
            width={177}
            height={100}
            priority
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop links, centered like apple.com */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-xs tracking-[0.01em] transition-colors ${
                pathname === link.href ? "font-semibold text-fg" : "text-muted hover:text-fg"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden items-center gap-3 md:flex">
          {ThemeButton}
          <Link
            href="/contact"
            className="rounded-full bg-amber-400 px-3.5 py-1.5 text-xs font-medium text-black transition hover:bg-amber-300"
          >
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          {ThemeButton}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-8 w-8 items-center justify-center"
          >
            <div className="flex w-4.5 flex-col gap-1.5">
              <span className={`h-px w-full bg-fg transition-transform ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
              <span className={`h-px w-full bg-fg transition-transform ${menuOpen ? "translate-y-[-3.5px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu: full-width panel with large links */}
      <div
        className={`overflow-hidden border-t border-fg/10 bg-nav backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen ? "visible max-h-96 opacity-100" : "invisible max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`border-b border-fg/10 py-3 text-2xl font-semibold tracking-tight ${
                pathname === link.href ? "text-fg" : "text-muted"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-5 rounded-full bg-amber-400 px-5 py-3 text-center text-sm font-semibold text-black"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </header>
  );
}
