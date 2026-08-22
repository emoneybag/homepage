"use client";

import { useState } from "react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        {/* Logo */}
        <a href="/" className="group flex flex-col leading-none">
          <span className="text-3xl font-bold tracking-[-0.08em] text-slate-900 dark:text-white">
            S<span className="text-blue-500">&</span>R
          </span>

          <span className="mt-1 text-[9px] font-medium tracking-[0.45em] text-slate-900 dark:text-white/60">
            GROUP
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-sm font-medium transition-colors ${
                index === 0
                  ? "text-slate-900 dark:text-white"
                  : "text-slate-900/65 dark:text-white/65 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {link.name}

              {index === 0 && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-blue-500" />
              )}
            </a>
          ))}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-lg text-white transition-all hover:bg-white/10 dark:border-slate-200 dark:bg-slate-100 dark:text-slate-800 dark:hover:bg-slate-200"
            >
            {theme === "dark" ? "☀" : "☾"}
          </button>

          <a
            href="/contact"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-slate-900 dark:text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-500 hover:shadow-blue-500/30"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 md:hidden"
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full rounded-full bg-white transition-transform ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`h-0.5 w-full rounded-full bg-white transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-0.5 w-full rounded-full bg-white transition-transform ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`border-t border-white/10 bg-[#050b17]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
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
              className="border-b border-white/5 py-4 text-sm font-medium text-white/75 transition-colors hover:text-white"
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