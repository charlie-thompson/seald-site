"use client";

import Link from "next/link";

const navLinks = [
  { href: "/how", label: "How It Works" },
  { href: "/pilot", label: "Pilot" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function MobileMenu() {
  function closeMenu(e: React.MouseEvent) {
    const details = (e.currentTarget as HTMLElement).closest("details");
    if (details) details.removeAttribute("open");
  }

  return (
    <details className="relative md:hidden">
      <summary className="cursor-pointer list-none p-2 text-text-secondary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </summary>
      <div className="glass-panel absolute right-0 top-full mt-2 w-52 p-5" onClick={closeMenu}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block py-2 text-sm text-text-secondary hover:text-navy"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="btn-primary mt-3 w-full !text-[0.8125rem]"
        >
          Book a pilot
        </Link>
      </div>
    </details>
  );
}
