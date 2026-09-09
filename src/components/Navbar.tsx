"use client";

import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex flex-col leading-none">
          <span className="text-3xl font-bold tracking-[-0.08em] text-slate-900 transition-colors dark:text-white">
            S<span className="text-blue-500">&</span>R
          </span>

          <span className="mt-1 text-[9px] font-medium tracking-[0.45em] text-slate-500 transition-colors dark:text-white/60">
            GROUP
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-sm font-medium transition-colors ${
                index === 0
                  ? "text-slate-900 dark:text-white"
                  : "text-slate-500 hover:text-slate-900 dark:text-white/65 dark:hover:text-white"
              }`}
            >
              {link.name}

              {index === 0 && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-blue-500" />
              )}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${
              theme === "dark" ? "light" : "dark"
            } mode`}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-100 text-lg text-slate-700 transition-all hover:bg-slate-200 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>

          {/* Contact CTA */}
          <a
            href="/contact"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-500/30"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${
              theme === "dark" ? "light" : "dark"
            } mode`}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-100 text-lg text-slate-700 transition-all hover:bg-slate-200 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-100 transition-all hover:bg-slate-200 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
          >
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-0.5 w-full rounded-full bg-slate-700 transition-all dark:bg-white ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />

              <span
                className={`h-0.5 w-full rounded-full bg-slate-700 transition-opacity dark:bg-white ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`h-0.5 w-full rounded-full bg-slate-700 transition-all dark:bg-white ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`border-t border-slate-200 bg-white/95 backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-[#050b17]/95 md:hidden ${
          menuOpen
            ? "visible max-h-96 opacity-100"
            : "invisible max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col px-6 py-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-slate-200 py-4 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:border-white/5 dark:text-white/75 dark:hover:text-white"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-5 rounded-lg bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-500"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </header>
  );
}