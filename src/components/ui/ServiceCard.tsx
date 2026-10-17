import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  capabilities?: string[];
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  ctaLabel,
  capabilities,
}: ServiceCardProps) {
  return (
    <div className="group relative bg-white border border-[#E5E7EB] rounded-2xl p-7 hover:border-[#E7192D]/30 hover:shadow-lg transition-all duration-300 flex flex-col">
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-[#E7192D]/8 flex items-center justify-center mb-5 group-hover:bg-[#E7192D]/12 transition-colors">
        <Icon size={22} className="text-[#E7192D]" strokeWidth={1.75} />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-[#101827] mb-3">{title}</h3>

      {/* Description */}
      <p className="text-sm text-[#697386] leading-relaxed mb-5">{description}</p>

      {/* Capabilities */}
      {capabilities && capabilities.length > 0 && (
        <ul className="space-y-1.5 mb-6 flex-1">
          {capabilities.slice(0, 5).map((cap) => (
            <li key={cap} className="flex items-start gap-2 text-sm text-[#697386]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E7192D] mt-2 flex-shrink-0" />
              {cap}
            </li>
          ))}
          {capabilities.length > 5 && (
            <li className="text-xs text-[#697386] pl-3.5">
              +{capabilities.length - 5} more
            </li>
          )}
        </ul>
      )}

      {/* CTA */}
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E7192D] hover:gap-2.5 transition-all duration-200 mt-auto"
        aria-label={`${ctaLabel} — ${title}`}
      >
        {ctaLabel}
        <ArrowRight size={15} />
      </Link>
    </div>
  );
}
