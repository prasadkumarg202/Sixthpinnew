import type { Metadata } from "next";
import { CTASection } from "@/components/ui/CTASection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Cloud & Infrastructure",
  description:
    "SixthPin designs and manages cloud environments on Microsoft Azure and AWS — migrations, Infrastructure as Code, DevOps, and cloud cost optimization.",
};

const capabilities = [
  "Microsoft Azure and AWS cloud solutions",
  "Cloud migration and modernization",
  "Virtual machines and networking",
  "Infrastructure as Code (IaC)",
  "Terraform automation",
  "DevOps and deployment automation",
  "Monitoring and operational improvements",
  "Cloud cost optimization",
  "Security and compliance configuration",
  "Hybrid and multi-cloud architecture",
];

const highlights = [
  {
    title: "Cloud Migration",
    description:
      "We assess your existing environment, plan the migration approach, and manage the transition to minimize disruption and risk.",
  },
  {
    title: "Infrastructure as Code",
    description:
      "We automate infrastructure provisioning using Terraform and other IaC tools so environments are repeatable, auditable, and easier to manage.",
  },
  {
    title: "DevOps Practices",
    description:
      "We help teams adopt CI/CD pipelines, automated testing, and deployment automation to improve delivery consistency and speed.",
  },
  {
    title: "Cost Optimization",
    description:
      "We analyze your cloud spending, right-size resources, and implement governance policies to bring costs under control.",
  },
];

export default function CloudInfrastructurePage() {
  return (
    <>
      <section className="bg-[#101827] pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Cloud & Infrastructure" },
              ]}
            />
          </div>
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#E7192D] mb-4">
              Cloud & Infrastructure
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Cloud Environments Built for{" "}
              <span className="text-[#E7192D]">Performance and Resilience.</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Design, modernize, migrate, and manage cloud environments built
              for security, performance, resilience, and growth.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#101827] mb-8">Our Cloud Capabilities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
                {capabilities.map((cap) => (
                  <div key={cap} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#E7192D] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#697386]">{cap}</span>
                  </div>
                ))}
              </div>
              <h2 className="text-2xl font-bold text-[#101827] mb-6">Key Areas of Focus</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {highlights.map((h) => (
                  <div key={h.title} className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-5">
                    <h3 className="font-semibold text-[#101827] mb-2">{h.title}</h3>
                    <p className="text-sm text-[#697386] leading-relaxed">{h.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-7 sticky top-24">
                <h3 className="font-bold text-[#101827] mb-4">Platforms We Work With</h3>
                <div className="space-y-2 mb-6">
                  {["Microsoft Azure", "Amazon Web Services (AWS)", "Terraform", "Bicep / ARM Templates", "GitHub Actions", "Azure DevOps"].map((p) => (
                    <div key={p} className="flex items-center gap-2 text-sm text-[#697386]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E7192D] flex-shrink-0" />
                      {p}
                    </div>
                  ))}
                </div>
                <a href="/contact" className="block text-center px-5 py-3 bg-[#E7192D] text-white font-semibold text-sm rounded-lg hover:bg-[#c9152a] transition-colors">
                  Discuss Your Cloud Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection heading="Ready to Modernize Your Cloud Infrastructure?" description="Let's assess your current environment and define a clear path forward." primaryLabel="Request a Consultation" />
    </>
  );
}
