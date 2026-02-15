"use client";

import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function MobileMenu() {
  function closeMenu(e: React.MouseEvent) {
    const details = (e.currentTarget as HTMLElement).closest("details");
    if (details) details.removeAttribute("open");
  }

  return (
    <details className="relative ml-auto md:hidden group">
      <summary className="cursor-pointer list-none p-2 text-text-secondary">
        <svg
          className="block w-6 h-6 group-open:hidden"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          className="hidden w-6 h-6 group-open:block"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </summary>
      <div className="glass-panel absolute right-0 top-full mt-2 w-52 p-5 text-center" onClick={closeMenu}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block py-2 text-lg text-text-secondary hover:text-navy"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/resources"
          className="btn-primary mt-3 w-full !text-base !bg-white !border-2 !border-[#0B1F3B] !text-[#0B1F3B] !bg-none !shadow-none hover:!bg-gray-50"
        >
          White Paper
        </Link>
        <Link
          href="/contact"
          className="btn-primary mt-3 w-full !text-base"
        >
          Book a Demo
        </Link>
      </div>
    </details>
  );
}
