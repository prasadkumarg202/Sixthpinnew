import type { Metadata } from "next";
import Link from "next/link";
import { Brain, Cloud, Database, Server, BarChart3, Zap, ArrowRight } from "lucide-react";
import { CTASection } from "@/components/ui/CTASection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Technology Services",
  description:
    "Explore SixthPin's AI, cloud, data engineering, database migration, enterprise consulting, and automation services for modern businesses.",
};

const services = [
  {
    icon: Brain,
    title: "AI Solutions & Generative AI",
    description:
      "Identify, build, and integrate AI solutions that improve productivity, support decision-making, and streamline business operations.",
    href: "/services/ai-solutions",
    ctaLabel: "Explore AI Solutions",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description:
      "Design, modernize, migrate, and manage cloud environments built for security, performance, resilience, and growth.",
    href: "/services/cloud-infrastructure",
    ctaLabel: "Explore Cloud Solutions",
  },
  {
    icon: BarChart3,
    title: "Data Engineering & Analytics",
    description:
      "Build dependable data platforms that turn fragmented information into accessible, useful business intelligence.",
    href: "/services/data-engineering",
    ctaLabel: "Explore Data Engineering",
  },
  {
    icon: Database,
    title: "Database Solutions & Migration",
    description:
      "Modernize database platforms and migrate workloads with a focus on performance, reliability, security, and business continuity.",
    href: "/services/database-migration",
    ctaLabel: "Explore Database Solutions",
  },
  {
    icon: Server,
    title: "Enterprise Technology Consulting",
    description:
      "Translate business goals into practical technology roadmaps, architecture decisions, and implementation plans.",
    href: "/services/enterprise-consulting",
    ctaLabel: "Explore Consulting",
  },
  {
    icon: Zap,
    title: "Automation & Engineering",
    description:
      "Reduce repetitive work, improve consistency, and accelerate delivery with well-designed automation and engineering practices.",
    href: "/services/automation",
    ctaLabel: "Explore Automation",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#101827] pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#E7192D] mb-4">
            What We Do
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Technology Expertise.{" "}
            <span className="text-[#E7192D]">Business Impact.</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From intelligent automation to resilient infrastructure, we help
            organizations solve complex technology challenges with practical,
            scalable solutions.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-[#F7F8FA] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.href}
                  className="group bg-white border border-[#E5E7EB] rounded-2xl p-7 hover:border-[#E7192D]/30 hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#E7192D]/8 flex items-center justify-center mb-5 group-hover:bg-[#E7192D]/12 transition-colors">
                    <Icon size={22} className="text-[#E7192D]" strokeWidth={1.75} />
                  </div>
                  <h2 className="text-lg font-bold text-[#101827] mb-3">{service.title}</h2>
                  <p className="text-sm text-[#697386] leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E7192D] hover:gap-2.5 transition-all mt-auto"
                  >
                    {service.ctaLabel}
                    <ArrowRight size={15} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
