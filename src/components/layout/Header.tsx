"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { navLinks, serviceLinks } from "@/lib/config";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-[#101827]/95 backdrop-blur-md shadow-lg border-b border-white/10"
          : "bg-[#101827]/85 backdrop-blur-sm border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 flex-shrink-0"
            aria-label="SixthPin — Home"
          >
            <SixthPinLogo />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) =>
              link.label === "Services" ? (
                <div key={link.href} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setServicesOpen((v) => !v)}
                    onKeyDown={(e) => {
                      if (e.key === "Escape") setServicesOpen(false);
                    }}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-[#E7192D]"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    Services
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {servicesOpen && (
                    <div
                      role="menu"
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-[#171B23] rounded-xl shadow-2xl border border-white/15 py-2 z-50"
                    >
                      <div className="px-3 pb-2 pt-1">
                        <Link
                          href="/services"
                          role="menuitem"
                          className="block px-3 py-2 text-xs font-semibold text-[#E7192D] uppercase tracking-wider hover:underline"
                        >
                          All Services →
                        </Link>
                      </div>
                      <div className="border-t border-white/10" />
                      {serviceLinks.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          role="menuitem"
                          className="block px-5 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-[#E7192D]"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-[#E7192D] text-white text-sm font-semibold rounded-lg hover:bg-[#c9152a] transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="lg:hidden p-2 rounded-lg text-[#101827] hover:bg-[#F7F8FA] transition-colors"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-white border-t border-[#E5E7EB] overflow-y-auto max-h-[calc(100vh-4rem)]"
        >
          <nav className="px-4 py-4 space-y-1" aria-label="Mobile navigation">
            {navLinks.map((link) =>
              link.label === "Services" ? (
                <div key={link.href}>
                  <button
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    aria-expanded={mobileServicesOpen}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-[#101827] hover:bg-[#F7F8FA] transition-colors"
                  >
                    Services
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-[#E7192D]/30 pl-4">
                      <Link
                        href="/services"
                        className="block py-2 text-sm font-semibold text-[#E7192D]"
                      >
                        All Services
                      </Link>
                      {serviceLinks.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block py-2 text-sm text-[#697386] hover:text-[#E7192D] transition-colors"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-[#E7192D] bg-[#F7F8FA]"
                      : "text-[#101827] hover:bg-[#F7F8FA]"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
          <div className="px-4 pb-6 pt-2 border-t border-[#E5E7EB]">
            <Link
              href="/contact"
              className="block w-full text-center px-5 py-3 bg-[#E7192D] text-white text-sm font-semibold rounded-lg hover:bg-[#c9152a] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

// Inline SVG logo component with mind vibrations
function SixthPinLogo() {
  return (
    <div className="group flex items-center gap-2.5 cursor-pointer" aria-hidden="true">
      {/* Pin icon with animated mind vibrations & float */}
      <div className="relative flex items-center justify-center">
        {/* Continuous Mind Vibration ripple wave 1 */}
        <span
          className="absolute -inset-1 rounded-full bg-[#FFD700]/30 animate-ping pointer-events-none"
          style={{ animationDuration: "3s" }}
        />
        {/* Continuous Mind Vibration ripple wave 2 */}
        <span
          className="absolute -inset-2 rounded-full bg-[#E7192D]/20 animate-ping pointer-events-none"
          style={{ animationDuration: "3s", animationDelay: "1.5s" }}
        />

        <svg
          width="30"
          height="34"
          viewBox="0 0 28 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="relative z-10 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-105 filter group-hover:drop-shadow-[0_4px_12px_rgba(231,25,45,0.45)]"
        >
          <path
            d="M14 0C6.268 0 0 6.268 0 14C0 21.732 14 32 14 32C14 32 28 21.732 28 14C28 6.268 21.732 0 14 0Z"
            fill="#E7192D"
          />
          {/* White outer portal */}
          <circle cx="14" cy="14" r="5.5" fill="white" className="transition-transform duration-300 group-hover:scale-110" />
          {/* Navy inner core with subtle 6 */}
          <circle cx="14" cy="14" r="4" fill="#101827" />
          <text
            x="14"
            y="16"
            textAnchor="middle"
            fill="#E7192D"
            fontSize="5.5"
            fontWeight="900"
            fontFamily="system-ui, sans-serif"
            className="select-none"
          >
            6
          </text>
        </svg>
      </div>

      {/* Wordmark with subtle tracking hover */}
      <span className="text-white font-bold text-lg tracking-tight group-hover:text-red-400 transition-all duration-300">
        SIXTHPIN
      </span>
    </div>
  );
}
