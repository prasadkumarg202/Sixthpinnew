import type { Metadata } from "next";
import { CTASection } from "@/components/ui/CTASection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise Technology Consulting",
  description:
    "SixthPin translates business objectives into practical technology roadmaps, architecture decisions, and implementation strategies for enterprise organizations.",
};

const capabilities = [
  "Technology strategy and roadmaps",
  "Enterprise architecture",
  "Cloud adoption planning",
  "Application modernization",
  "Technical assessments and audits",
  "Platform selection and integration",
  "Security and operational readiness",
  "Technology project advisory",
  "Vendor and tooling evaluation",
  "Digital transformation planning",
];

const deliverables = [
  {
    title: "Technology Assessments",
    description: "A structured review of your current technology landscape to identify gaps, risks, and opportunities for improvement.",
  },
  {
    title: "Architecture Recommendations",
    description: "Clear, documented recommendations for platform, integration, and deployment architecture tailored to your requirements.",
  },
  {
    title: "Cloud Adoption Roadmaps",
    description: "A phased plan for adopting or expanding cloud capabilities — aligned with your team's capacity, budget, and timeline.",
  },
  {
    title: "Project Advisory",
    description: "Embedded advisory support across planning, design, and delivery to help your team make better technology decisions.",
  },
];

export default function EnterpriseConsultingPage() {
  return (
    <>
      <section className="bg-[#101827] pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Enterprise Consulting" }]} />
          </div>
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#E7192D] mb-4">Enterprise Technology Consulting</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Technology Strategy That <span className="text-[#E7192D]">Drives Real Outcomes.</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Translate business goals into practical technology roadmaps, architecture decisions, and implementation plans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#101827] mb-8">Consulting Capabilities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
                {capabilities.map((cap) => (
                  <div key={cap} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#E7192D] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#697386]">{cap}</span>
                  </div>
                ))}
              </div>
              <h2 className="text-2xl font-bold text-[#101827] mb-6">What We Deliver</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {deliverables.map((d) => (
                  <div key={d.title} className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-5">
                    <h3 className="font-semibold text-[#101827] mb-2">{d.title}</h3>
                    <p className="text-sm text-[#697386] leading-relaxed">{d.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-7 sticky top-24">
                <h3 className="font-bold text-[#101827] mb-3">Our Consulting Approach</h3>
                <p className="text-sm text-[#697386] leading-relaxed mb-4">
                  We start with business objectives, not technology preferences. Our recommendations are based on your actual environment, constraints, and goals — not what works best as a default.
                </p>
                <p className="text-sm text-[#697386] leading-relaxed mb-6">
                  We work closely with your team, share knowledge throughout the engagement, and focus on outcomes that are clear and measurable.
                </p>
                <a href="/contact" className="block text-center px-5 py-3 bg-[#E7192D] text-white font-semibold text-sm rounded-lg hover:bg-[#c9152a] transition-colors">
                  Talk to Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection heading="Ready to Define Your Technology Roadmap?" description="Let's start with a conversation about your business goals and current technology challenges." primaryLabel="Request a Consultation" />
    </>
  );
}
