"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  const navBase =
    "fixed inset-x-0 top-0 z-50 transition-colors duration-200 border-b";
  const bgClass = isScrolled
    ? "bg-white/90 backdrop-blur border-zinc-200 text-zinc-800 dark:bg-zinc-950/90 dark:border-zinc-800 dark:text-zinc-100"
    : "bg-transparent border-transparent text-zinc-100";

  return (
    <header className={`${navBase} ${bgClass}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleScrollTo("hero")}
          className="text-sm font-semibold tracking-tight text-inherit focus:outline-none"
        >
          <span className="rounded-full bg-zinc-900/90 px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-100 shadow-sm dark:bg-zinc-100 dark:text-zinc-900">
            DS Portfolio
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 text-sm font-medium md:flex">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => handleScrollTo(section.id)}
              className="text-zinc-700 underline-offset-4 hover:text-blue-600 hover:underline dark:text-zinc-200 dark:hover:text-blue-300"
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center justify-center rounded-md px-2 py-1 text-sm text-inherit hover:bg-zinc-100/70 dark:hover:bg-zinc-800/70 md:hidden"
          aria-label="Toggle navigation"
        >
          <span className="text-lg">☰</span>
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-zinc-200 bg-white/95 px-4 py-3 text-sm shadow-sm dark:border-zinc-800 dark:bg-zinc-950/95 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => handleScrollTo(section.id)}
                className="w-full text-left text-zinc-700 underline-offset-4 hover:text-blue-600 hover:underline dark:text-zinc-200 dark:hover:text-blue-300"
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;


