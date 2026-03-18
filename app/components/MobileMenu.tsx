"use client";

import Link from "next/link";
import WhitePaperButton from "./WhitePaperButton";
import { solutions } from "@/app/solutions/solutionsData";

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

  // Close the outer hamburger menu when a link is clicked
  function closeAll(e: React.MouseEvent) {
    const outerDetails = (e.currentTarget as HTMLElement).closest(
      "details.hamburger-menu",
    );
    if (outerDetails) outerDetails.removeAttribute("open");
  }

  return (
    <details className="hamburger-menu relative ml-auto md:hidden group">
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

      <div className="glass-panel absolute right-0 top-full mt-2 w-64 p-4 text-left" onClick={closeMenu}>

        {/* Solutions accordion */}
        <details className="group/sol mb-1">
          <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-2 py-2 text-lg text-text-secondary hover:text-navy hover:bg-bg-light">
            <span>Solutions</span>
            <svg
              className="w-4 h-4 text-text-muted transition-transform duration-200 group-open/sol:rotate-180"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="ml-2 mt-1 flex flex-col border-l border-border pl-3 pb-2">
            {solutions.map(({ slug, label }) => (
              <Link
                key={slug}
                href={`/solutions/${slug}`}
                onClick={closeAll}
                className="py-1.5 text-sm font-medium text-text-secondary hover:text-navy"
              >
                {label}
              </Link>
            ))}
          </div>
        </details>

        {/* Standard nav links */}
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block rounded-lg px-2 py-2 text-lg text-text-secondary hover:text-navy hover:bg-bg-light"
          >
            {link.label}
          </Link>
        ))}

        <div className="mt-3 flex flex-col gap-2 border-t border-border pt-3">
          <WhitePaperButton className="btn-primary w-full !text-base !bg-white !border-2 !border-[#0B1F3B] !text-[#0B1F3B] !bg-none !shadow-none hover:!bg-gray-50">
            White Paper
          </WhitePaperButton>
          <Link href="/contact" className="btn-primary mt-1 w-full !text-base text-center">
            Book a Demo
          </Link>
        </div>
      </div>
    </details>
  );
}
