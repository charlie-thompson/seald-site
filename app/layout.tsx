import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "@/app/components/MobileMenu";
import SolutionsDropdown from "@/app/components/SolutionsDropdown";
import WhitePaperButton from "@/app/components/WhitePaperButton";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seald Healthcare | Secure and Control Your Patient Data",
  description:
    "Seald Healthcare encrypts patient health information (PHI) at the source, keeping PHI secure and unreadable across systems, vendors, and workflows. Seamlessly integrate end-to-end encryption with full access control and audit visibility into your healthcare organization.",
  icons: {
    icon: [
      { url: '/images/seald_favicon_32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/seald_favicon_16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/images/seald_favicon_180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="relative mx-auto flex max-w-6xl items-center px-6 py-4 md:py-2 md:justify-between">
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 md:static md:translate-x-0">
          <Image
            src="/images/seald_logo_light.svg"
            alt="Seald Healthcare | Logo"
            width={240}
            height={78}
            className="w-48 h-auto md:w-[240px]"
            priority
          />
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          <SolutionsDropdown />
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg text-navy transition-colors duration-200 hover:text-blue-primary"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-3">
            <WhitePaperButton className="inline-flex items-center justify-center rounded-xl bg-white border-2 border-[#0B1F3B] px-8 py-3 text-lg font-medium text-[#0B1F3B] transition-all duration-200 hover:bg-gray-50 hover:-translate-y-[1px] hover:shadow-[0_2px_4px_rgba(11,31,59,0.15),0_8px_24px_rgba(11,31,59,0.1),0_0_0_3px_rgba(11,31,59,0.05)]">
              White Paper
            </WhitePaperButton>
            <Link href="/contact" className="btn-primary !px-8 !py-3 !text-lg">
              Book a Demo
            </Link>
          </div>
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
        {/* Main footer row */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between md:items-start">

          {/* Logo + tagline */}
          <div className="shrink-0">
            <Image
              src="/images/seald_logo_dark.svg"
              alt="Seald Healthcare | Logo"
              width={176}
              height={40}
              className="w-44 h-auto"
            />
            <p className="mt-3 max-w-[220px] text-sm leading-relaxed text-text-muted">
              If it&apos;s not Seald, it&apos;s not secure.
            </p>
          </div>

          {/* Link columns + CTA */}
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-12 md:items-start">

            {/* Company */}
            <div>
              <p className="mb-4 text-xs font-bold tracking-widest uppercase text-text-muted">
                Company
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { href: '/about', label: 'About' },
                  { href: '/resources', label: 'Resources' },
                  { href: '/contact', label: 'Contact' },
                ].map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-base text-white/80 transition-colors duration-200 hover:text-white"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div>
              <p className="mb-4 text-xs font-bold tracking-widest uppercase text-text-muted">
                Legal
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { href: '/privacy-policy', label: 'Privacy Policy' },
                  { href: '/terms', label: 'Terms and Conditions' },
                  { href: '/cookie-policy', label: 'Cookie Policy' },
                ].map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-base text-white/80 transition-colors duration-200 hover:text-white"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3 sm:pt-9">
              <Link href="/contact" className="btn-primary !px-7 !py-3 !text-base text-center">
                Book a Demo
              </Link>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Seald Healthcare Inc. All rights reserved.
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
