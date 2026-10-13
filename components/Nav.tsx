"use client";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

const links = [
  { href: "#about",      label: "About" },
  { href: "#work",       label: "Work" },
  { href: "#projects",   label: "Projects" },
  { href: "#services",   label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#contact",    label: "Contact" },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Nav({ profile }: { profile: any }) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        setDark(true);
      }
    } catch {}
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-ink-900/95 backdrop-blur-sm shadow-sm border-b border-navy-900/10 dark:border-mist-700/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          className="font-serif font-semibold text-navy-900 dark:text-white text-lg tracking-tight hover:text-ember-500 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ember-500 rounded"
          aria-label="Back to top"
        >
          {profile?.name ?? "Adeel Sarwar"}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-600 dark:text-mist-300 hover:text-navy-900 dark:hover:text-white transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ember-500 rounded"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={toggleDark}
            className="ml-2 p-2 rounded-full text-ink-500 dark:text-mist-400 hover:text-navy-900 dark:hover:text-white hover:bg-navy-900/5 dark:hover:bg-white/10 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ember-500"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="#contact"
            className="ml-2 px-4 py-2 text-sm font-semibold bg-navy-900 dark:bg-ember-500 text-white rounded hover:bg-ember-500 dark:hover:bg-ember-600 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ember-500"
          >
            Let&rsquo;s Talk
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleDark}
            className="p-2 rounded-full text-ink-500 dark:text-mist-400 hover:text-navy-900 dark:hover:text-white transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ember-500"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded text-ink-700 dark:text-mist-300 hover:bg-navy-900/5 dark:hover:bg-white/10 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ember-500"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white dark:bg-ink-900 border-t border-navy-900/10 dark:border-mist-700/20 px-4 pb-6 pt-4">
          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink-700 dark:text-mist-200 hover:text-ember-500 dark:hover:text-ember-400 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ember-500 rounded"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-3 text-center text-sm font-semibold bg-navy-900 dark:bg-ember-500 text-white rounded hover:bg-ember-500 transition-all duration-200 cursor-pointer"
            >
              Let&rsquo;s Talk
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
