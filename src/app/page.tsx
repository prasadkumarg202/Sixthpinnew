import type { Metadata } from "next";
import Link from "next/link";
import {
  Brain,
  Cloud,
  Database,
  Server,
  BarChart3,
  Zap,
  ArrowRight,
  CheckCircle2,
  Target,
  Lightbulb,
  Shield,
  GitMerge,
} from "lucide-react";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CTASection } from "@/components/ui/CTASection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AIProductBuilder } from "@/components/ui/AIProductBuilder";
import { SpiritualMindNexus } from "@/components/ui/SpiritualMindNexus";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description:
    "SixthPin delivers AI, cloud, data engineering, database migration, and enterprise technology consulting for businesses that want to move forward.",
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description:
      "AI, Cloud & Enterprise Technology Solutions That Move Business Forward.",
  },
};

const services = [
  {
    icon: Brain,
    title: "AI Solutions & Generative AI",
    description:
      "Identify, build, and integrate AI solutions that improve productivity, support decision-making, and streamline business operations.",
    href: "/services/ai-solutions",
    ctaLabel: "Explore AI Solutions",
    capabilities: [
      "Generative AI solutions",
      "Enterprise AI assistants & copilots",
      "Retrieval-augmented generation (RAG)",
      "AI agents & workflow orchestration",
      "LLM integration",
      "Responsible AI implementation",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description:
      "Design, modernize, migrate, and manage cloud environments built for security, performance, resilience, and growth.",
    href: "/services/cloud-infrastructure",
    ctaLabel: "Explore Cloud Solutions",
    capabilities: [
      "Microsoft Azure and AWS",
      "Cloud migration & modernization",
      "Infrastructure as Code",
      "Terraform automation",
      "DevOps & deployment automation",
      "Cloud cost optimization",
    ],
  },
  {
    icon: BarChart3,
    title: "Data Engineering & Analytics",
    description:
      "Build dependable data platforms that turn fragmented information into accessible, useful business intelligence.",
    href: "/services/data-engineering",
    ctaLabel: "Explore Data Engineering",
    capabilities: [
      "Azure Data Factory",
      "Azure Databricks",
      "Microsoft Fabric & Synapse",
      "Data pipelines & integration",
      "Analytics architecture",
      "Data quality & governance",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Database Migration",
    description:
      "Modernize legacy platforms and migrate workloads to Azure and AWS with a focus on performance, reliability, security, and business continuity.",
    href: "/services/database-migration",
    ctaLabel: "Explore Cloud Migration",
    capabilities: [
      "On-premises to Azure & AWS migration",
      "Microsoft SQL Server consulting & upgrades",
      "Azure SQL Database & Managed Instance",
      "Landing zone architecture & setup",
      "Database performance tuning",
      "High availability & disaster recovery",
    ],
  },
  {
    icon: Server,
    title: "Enterprise Technology Consulting",
    description:
      "Translate business goals into practical technology roadmaps, architecture decisions, and implementation plans.",
    href: "/services/enterprise-consulting",
    ctaLabel: "Explore Consulting",
    capabilities: [
      "Technology strategy",
      "Enterprise architecture",
      "Cloud adoption roadmaps",
      "Application modernization",
      "Technical assessments",
      "Platform selection & integration",
    ],
  },
  {
    icon: Zap,
    title: "Automation & Engineering",
    description:
      "Reduce repetitive work, improve consistency, and accelerate delivery with well-designed automation and engineering practices.",
    href: "/services/automation",
    ctaLabel: "Explore Automation",
    capabilities: [
      "PowerShell automation",
      "Terraform automation",
      "Infrastructure provisioning",
      "Operational runbooks",
      "CI/CD pipelines",
      "AI-assisted development workflows",
    ],
  },
];

const differentiators = [
  {
    icon: Target,
    title: "Business-First Thinking",
    description:
      "We start with the business challenge and select technology based on the actual requirement — not the other way around.",
  },
  {
    icon: Lightbulb,
    title: "Practical AI Adoption",
    description:
      "We focus on useful, secure, maintainable AI implementations with clear business outcomes rather than experimentation without direction.",
  },
  {
    icon: Shield,
    title: "Engineering Excellence",
    description:
      "We prioritize robust architecture, automation, performance, security, and maintainability in everything we build.",
  },
  {
    icon: GitMerge,
    title: "End-to-End Perspective",
    description:
      "We connect strategy, implementation, infrastructure, data, and ongoing optimization into one coherent engagement.",
  },
];

const steps = [
  {
    num: "01",
    title: "Discover",
    description:
      "Understand business objectives, existing architecture, constraints, and success criteria through structured discovery.",
  },
  {
    num: "02",
    title: "Design",
    description:
      "Recommend the solution architecture, delivery approach, milestones, and relevant safeguards tailored to your environment.",
  },
  {
    num: "03",
    title: "Deliver",
    description:
      "Implement, integrate, test, document, and validate the agreed solution with transparency at every stage.",
  },
  {
    num: "04",
    title: "Optimize",
    description:
      "Review performance, reliability, adoption, costs, and identify opportunities for ongoing improvement.",
  },
];

const industries = [
  "Financial Services",
  "Healthcare & Life Sciences",
  "Retail & E-commerce",
  "Manufacturing",
  "Professional Services",
  "Technology Companies",
];

export default function HomePage() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SixthPin",
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    sameAs: siteConfig.linkedinUrl ? [siteConfig.linkedinUrl] : [],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SixthPin",
    url: siteConfig.url,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#101827] pt-20 pb-10 lg:pt-24 lg:pb-12 px-4 sm:px-6 lg:px-8">
        {/* Abstract background pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <svg
            className="absolute -top-24 -right-24 w-[600px] h-[600px] opacity-[0.04]"
            viewBox="0 0 600 600"
            fill="none"
          >
            <circle cx="300" cy="300" r="250" stroke="white" strokeWidth="1" />
            <circle cx="300" cy="300" r="180" stroke="white" strokeWidth="1" />
            <circle cx="300" cy="300" r="110" stroke="white" strokeWidth="1" />
            {/* Grid lines */}
            {[0, 60, 120, 180, 240].map((angle) => (
              <line
                key={angle}
                x1="300"
                y1="50"
                x2="300"
                y2="550"
                stroke="white"
                strokeWidth="0.5"
                transform={`rotate(${angle} 300 300)`}
              />
            ))}
          </svg>
          {/* Subtle red accent */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#E7192D]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left — copy */}
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#E7192D] mb-3">
                Human Mind & Consciousness // AI · Cloud · Enterprise
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-3">
                Your Next Point of{" "}
                <span className="text-[#E7192D]">Innovation.</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 font-semibold mb-2.5 leading-snug">
                The Spirituality of the Human Mind, Radiating Through Modern Technology.
              </p>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-6 max-w-xl">
                At the epicenter is human consciousness, intuition, and visionary purpose.
                Radiating outward with directional energy are our six core verticals: <strong className="text-white">AI Solutions</strong>, <strong className="text-white">Infra Automation</strong>, <strong className="text-white">Startup Apps</strong>, <strong className="text-white">Cloud Migration</strong>, <strong className="text-white">Enterprise Services</strong>, and <strong className="text-white">Data Engineering</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#E7192D] text-white font-semibold rounded-lg hover:bg-[#c9152a] transition-colors text-sm shadow-md"
                >
                  Discuss Your Project
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors text-sm"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>

            {/* Right — Spiritual Mind Nexus Symbol with 6 Verticals */}
            <div className="flex items-center justify-center">
              <SpiritualMindNexus />
            </div>
          </div>
        </div>
      </section>

      {/* ─── AI PRODUCT SYNTHESIS ENGINE ─────────────────────────────── */}
      <AIProductBuilder />

      {/* ─── SERVICES ─────────────────────────────────────────────────── */}
      <section id="services" className="bg-[#F7F8FA] py-14 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Our Services"
            heading="Technology Expertise. Business Impact."
            description="From intelligent automation to resilient infrastructure, we help organizations solve complex technology challenges with practical, scalable solutions."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY SIXTHPIN ─────────────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Why SixthPin"
            heading="One Technology Partner. A Clearer Path Forward."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.title}
                  className="bg-[#F7F8FA] rounded-2xl p-7 border border-[#E5E7EB]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#E7192D]/8 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[#E7192D]" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-base font-bold text-[#101827] mb-2">{d.title}</h3>
                  <p className="text-sm text-[#697386] leading-relaxed">{d.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── OUR APPROACH ─────────────────────────────────────────────── */}
      <section className="bg-[#101827] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="How We Work"
            heading="Our Approach"
            description="A structured engagement model that keeps your goals at the center at every stage."
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connector line (desktop) */}
            <div className="absolute top-[2.75rem] left-[12.5%] right-[12.5%] h-px bg-white/10 hidden lg:block" aria-hidden="true" />
            {steps.map((step) => (
              <div key={step.num} className="relative bg-white/5 border border-white/10 rounded-2xl p-7">
                <span className="inline-block text-3xl font-bold text-[#E7192D] mb-4 leading-none">
                  {step.num}
                </span>
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES ───────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Industries"
            heading="Technology Solutions for Real-World Challenges."
            description="We work with organizations across a range of industries to design and implement technology solutions that create lasting value."
          />
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="px-5 py-2.5 bg-[#F7F8FA] border border-[#E5E7EB] rounded-full text-sm font-medium text-[#101827]"
              >
                {industry}
              </span>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/industries"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E7192D] hover:gap-2.5 transition-all"
            >
              Learn about the industries we serve <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────────────── */}
      <CTASection />
    </>
  );
}
