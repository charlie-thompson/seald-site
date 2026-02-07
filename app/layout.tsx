import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seald Healthcare | End-to-End Encryption for PHI",
  description:
    "Keep PHI encrypted everywhere while controlling access after it's shared. Enterprise encryption and access control for healthcare.",
};

const navLinks = [
  { href: "/product", label: "Product" },
  { href: "/security", label: "Security" },
  { href: "/pilot", label: "Pilot" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function Header() {
  return (
    <header className="glass-nav sticky top-0 z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/brand/Seald_Logo_Square_300_White (1).png"
            alt="Seald logo"
            width={32}
            height={32}
            className="rounded-lg"
            priority
          />
          <span className="text-[0.95rem] font-semibold tracking-tight text-navy">
            Seald Healthcare
          </span>
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.8125rem] text-text-secondary transition-colors duration-200 hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary !py-2 !px-5 !text-[0.8125rem]">
            Book a pilot
          </Link>
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
}

function MobileMenu() {
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
      <div className="glass-panel absolute right-0 top-full mt-2 w-52 p-5">
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

function Footer() {
  return (
    <footer className="border-t border-border bg-white/50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <Image
                src="/brand/Seald_Logo_Square_300_White (1).png"
                alt="Seald logo"
                width={28}
                height={28}
                className="rounded-lg"
              />
              <span className="font-semibold text-navy">Seald Healthcare</span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-text-muted">
              End-to-end encryption and policy-based access control for
              protected health information.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
              Product
            </p>
            <div className="mt-4 flex flex-col gap-2.5">
              <Link
                href="/product"
                className="text-sm text-text-secondary transition-colors duration-200 hover:text-blue-primary"
              >
                Overview
              </Link>
              <Link
                href="/security"
                className="text-sm text-text-secondary transition-colors duration-200 hover:text-blue-primary"
              >
                Security
              </Link>
              <Link
                href="/pilot"
                className="text-sm text-text-secondary transition-colors duration-200 hover:text-blue-primary"
              >
                Pilot program
              </Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
              Company
            </p>
            <div className="mt-4 flex flex-col gap-2.5">
              <Link
                href="/about"
                className="text-sm text-text-secondary transition-colors duration-200 hover:text-blue-primary"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm text-text-secondary transition-colors duration-200 hover:text-blue-primary"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Seald Healthcare. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
