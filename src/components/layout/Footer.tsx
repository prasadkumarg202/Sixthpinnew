import Link from "next/link";
import { siteConfig, serviceLinks } from "@/lib/config";
import { CurrentYear } from "@/components/ui/CurrentYear";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export function Footer() {

  return (
    <footer className="bg-[#101827] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" aria-label="SixthPin — Home" className="inline-flex items-center gap-2 mb-4">
              <FooterLogo />
            </Link>
            <p className="text-[#697386] text-sm leading-relaxed max-w-sm mt-4">
              Helping businesses innovate through AI, cloud, data, and enterprise
              technology. Your next point of innovation starts here.
            </p>
            {siteConfig.linkedinUrl && (
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SixthPin on LinkedIn"
                className="inline-flex items-center gap-2 mt-5 text-[#697386] hover:text-white transition-colors"
              >
                {/* LinkedIn brand icon */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                <span className="text-sm">LinkedIn</span>
              </a>
            )}
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold text-[#697386] uppercase tracking-widest mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold text-[#697386] uppercase tracking-widest mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#697386]">
            &copy; <CurrentYear /> SixthPin. All rights reserved.
          </p>
          <p className="text-xs text-[#697386]">
            AI. Cloud. Enterprise Technology.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLogo() {
  return (
    <div className="group flex items-center gap-2.5 cursor-pointer">
      <svg
        width="24"
        height="28"
        viewBox="0 0 28 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-105 filter group-hover:drop-shadow-[0_4px_10px_rgba(231,25,45,0.5)]"
      >
        <path
          d="M14 0C6.268 0 0 6.268 0 14C0 21.732 14 32 14 32C14 32 28 21.732 28 14C28 6.268 21.732 0 14 0Z"
          fill="#E7192D"
        />
        <circle cx="14" cy="14" r="5.5" fill="white" className="transition-transform duration-300 group-hover:scale-110" />
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
      <span className="text-white font-bold text-base tracking-tight group-hover:text-slate-100 transition-colors">
        SIXTHPIN
      </span>
    </div>
  );
}
