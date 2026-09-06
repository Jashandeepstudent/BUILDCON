"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";

const links = [
  { href: "#why-us", label: "Why Us" },
  { href: "#process", label: "Process" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-navy shadow-lg shadow-black/20" : "bg-navy/0"
      }`}
    >
      <div
        className={`absolute inset-0 -z-10 transition-opacity duration-300 ${
          scrolled ? "opacity-0" : "opacity-100"
        } bg-gradient-to-b from-navy-deep/80 to-transparent`}
      />
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo.png"
            alt="Indian Buildcon"
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
            priority
          />
          <span className="text-offwhite font-extrabold tracking-tight text-lg leading-none">
            INDIAN
            <span className="block text-orange text-sm font-bold tracking-[0.15em]">
              BUILDCON
            </span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-offwhite/90 hover:text-orange text-[15px] font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="tel:09779767675"
          className="hidden lg:inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-bold text-sm px-5 py-2.5 rounded-sm transition-colors"
        >
          <Phone size={16} strokeWidth={2.5} />
          09779767675
        </a>

        <button
          className="lg:hidden text-offwhite p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-navy border-t border-white/10 px-5 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-offwhite/90 text-base font-medium py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:09779767675"
            className="inline-flex items-center justify-center gap-2 bg-orange text-white font-bold text-sm px-5 py-3 rounded-sm mt-1"
          >
            <Phone size={16} strokeWidth={2.5} />
            Call 09779767675
          </a>
        </div>
      )}
    </header>
  );
}
