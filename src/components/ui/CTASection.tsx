import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  heading?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  heading = "Ready to Move Your Business Forward?",
  description = "Let's explore how AI, cloud, data, and enterprise technology can help you achieve your goals.",
  primaryLabel = "Start a Conversation",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="bg-[#101827] py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
          {heading}
        </h2>
        <p className="text-[#697386] text-lg mb-8 leading-relaxed">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#E7192D] text-white font-semibold rounded-lg hover:bg-[#c9152a] transition-colors"
          >
            {primaryLabel}
            <ArrowRight size={16} />
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center px-7 py-3.5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
