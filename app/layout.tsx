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
  title: "Seald Healthcare | End-to-End Encryption for PHI",
  description:
    "Keep PHI encrypted everywhere while controlling access after it's shared. Enterprise encryption and access control for healthcare.",
};

const navLinks = [
  { href: "/how", label: "How It Works" },
  { href: "/pilot", label: "Pilot" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function Header() {
  return (
    <header className="glass-nav sticky top-0 z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center">
          <Image
            src="/brand/seald-shield-icon.png"
            alt="Seald"
            width={44}
            height={44}
            className="h-10 w-auto"
            priority
          />
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
          <Link href="/contact" className="btn-primary !px-5 !py-2 !text-[0.8125rem]">
            Book a pilot
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
              <span className="font-semibold text-white">Seald Healthcare</span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-text-muted">
              End-to-end encryption and policy-based access control for
              protected health information.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
              Platform
            </p>
            <div className="mt-4 flex flex-col gap-2.5">
              <Link
                href="/how"
                className="text-sm text-text-secondary transition-colors duration-200 hover:text-blue-primary"
              >
                How It Works
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
