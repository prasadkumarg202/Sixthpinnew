import type { Metadata } from "next";
import { CTASection } from "@/components/ui/CTASection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "SixthPin works with organisations across financial services, healthcare, retail, manufacturing, professional services, and technology to solve real technology challenges.",
};

const industries = [
  {
    name: "Financial Services",
    description:
      "Financial organisations face pressure to modernize legacy infrastructure, improve data quality, meet regulatory requirements, and adopt AI responsibly. We help design and implement solutions that balance innovation with security and compliance.",
    focus: ["Core system modernization", "Data platform and analytics", "Security and compliance architecture", "Automation of operational processes"],
  },
  {
    name: "Healthcare & Life Sciences",
    description:
      "Healthcare technology must be reliable, secure, and interoperable. We support organisations looking to modernize data infrastructure, improve clinical and operational analytics, and evaluate where AI can help — safely.",
    focus: ["Data platform development", "Cloud infrastructure for regulated environments", "Analytics and reporting", "Workflow automation"],
  },
  {
    name: "Retail & E-commerce",
    description:
      "Retail and e-commerce businesses need scalable infrastructure, actionable data, and the ability to adapt quickly. We help organizations improve their data foundations, automate operations, and explore how AI can support customer and operational outcomes.",
    focus: ["Scalable cloud infrastructure", "Data pipelines and analytics", "Automation of inventory and logistics processes", "AI for customer intelligence"],
  },
  {
    name: "Manufacturing",
    description:
      "Manufacturers are modernizing operations through cloud, IoT, and data-driven decision-making. We help design the technology foundation — from infrastructure to analytics — needed to support operational improvement and digital initiatives.",
    focus: ["Cloud and infrastructure modernization", "Operational data platforms", "Process automation", "Technology strategy and planning"],
  },
  {
    name: "Professional Services",
    description:
      "Professional services firms compete on knowledge, efficiency, and client experience. We help these organisations improve internal knowledge management through AI, modernize their technology stack, and automate time-consuming processes.",
    focus: ["AI knowledge management tools", "Cloud infrastructure", "Workflow and document automation", "Enterprise technology consulting"],
  },
  {
    name: "Technology Companies",
    description:
      "Technology companies need partners who understand engineering quality, architecture trade-offs, and the demands of building and operating software products. We work with technology teams on infrastructure, data, AI integration, and delivery automation.",
    focus: ["Infrastructure and DevOps", "Data platform development", "AI and LLM integration", "CI/CD and automation"],
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#101827] pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#E7192D] mb-4">Industries</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Technology Solutions for{" "}
            <span className="text-[#E7192D]">Real-World Challenges.</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We work with organisations across a range of industries to design and implement technology solutions that create lasting business value.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry) => (
              <div key={industry.name} className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-8 bg-[#E7192D] rounded-full" />
                  <h2 className="text-xl font-bold text-[#101827]">{industry.name}</h2>
                </div>
                <p className="text-sm text-[#697386] leading-relaxed mb-5">{industry.description}</p>
                <div>
                  <p className="text-xs font-semibold text-[#101827] uppercase tracking-wider mb-3">Areas of focus</p>
                  <ul className="space-y-1.5">
                    {industry.focus.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-[#697386]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E7192D] mt-2 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Working in a Different Industry?" description="Tell us about your business and technology challenge. We'll let you know if and how we can help." primaryLabel="Start a Conversation" />
    </>
  );
}
