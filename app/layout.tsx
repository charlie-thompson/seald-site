import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "@/app/components/MobileMenu";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seald Healthcare | Secure PHI at the Data Layer",
  description:
    "Seald Healthcare encrypts patient health information (PHI) at the source, keeping PHI secure and unreadable across systems, vendors, and workflows. Seamlessly integrate end-to-end encryption with full access control and audit visibility into your healthcare organization.",
  icons: {
    icon: '/brand/seald_shield_icon_clean.svg',
    apple: '/brand/seald_shield_icon_clean.svg',
  },
};

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="relative mx-auto flex max-w-6xl items-center px-6 py-5 md:justify-between">
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 md:static md:translate-x-0">
          <Image
            src="/brand/seald-shield-icon.png"
            alt="Seald"
            width={115}
            height={100}
            className="h-9 w-auto md:h-[52px]"
            priority
          />
          <div className="flex flex-col items-start">
            <span className="text-xl font-bold text-navy md:text-5xl">Seald</span>
            <span className="text-sm font-semibold text-[#1677FF] md:text-xl">Healthcare</span>
          </div>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg text-navy transition-colors duration-200 hover:text-blue-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary !px-8 !py-3 !text-lg">
            Book a Demo
          </Link>
        </div>

        <MobileMenu />
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="section-dark border-t border-white/15">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <Image
              src="/brand/seald-logo-white.svg"
              alt="Seald Healthcare"
              width={176}
              height={40}
              className="w-44 h-auto"
            />
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-text-muted">
              Protecting patient safety with security.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6">
            <Link
              href="/about"
              className="text-lg text-white transition-colors duration-200 hover:text-blue-primary"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-lg text-white transition-colors duration-200 hover:text-blue-primary"
            >
              Contact
            </Link>
            <Link href="/contact" className="btn-primary !px-8 !py-3 !text-lg">
              Book a Demo
            </Link>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Seald Healthcare Inc. All rights
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
