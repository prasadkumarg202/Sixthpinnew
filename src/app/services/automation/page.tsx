import type { Metadata } from "next";
import { CTASection } from "@/components/ui/CTASection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Automation & Engineering",
  description:
    "SixthPin designs automation solutions using PowerShell, Terraform, CI/CD pipelines, and workflow automation to reduce manual effort and improve operational consistency.",
};

const capabilities = [
  "PowerShell automation and scripting",
  "Terraform infrastructure automation",
  "Workflow automation design",
  "Infrastructure provisioning automation",
  "Operational runbooks",
  "API integration",
  "CI/CD pipeline design",
  "AI-assisted development workflows",
  "Configuration management",
  "Scheduled task and job automation",
];

const examples = [
  {
    title: "Infrastructure Provisioning",
    description: "Automate the creation and configuration of cloud resources so environments are consistent, auditable, and easy to replicate.",
  },
  {
    title: "Operational Runbooks",
    description: "Turn manual operational procedures into automated, documented runbooks that reduce errors and free up engineering time.",
  },
  {
    title: "CI/CD Pipelines",
    description: "Design continuous integration and deployment pipelines that make releases reliable, repeatable, and faster.",
  },
  {
    title: "API Integration",
    description: "Connect systems and services through well-designed API integrations that automate data flow and reduce manual hand-offs.",
  },
];

export default function AutomationPage() {
  return (
    <>
      <section className="bg-[#101827] pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Automation" }]} />
          </div>
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#E7192D] mb-4">Automation & Engineering</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Automate the Repetitive. <span className="text-[#E7192D]">Accelerate the Important.</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Reduce repetitive work, improve consistency, and accelerate delivery with well-designed automation and engineering practices.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#101827] mb-8">Our Automation Capabilities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
                {capabilities.map((cap) => (
                  <div key={cap} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#E7192D] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#697386]">{cap}</span>
                  </div>
                ))}
              </div>
              <h2 className="text-2xl font-bold text-[#101827] mb-6">Automation in Practice</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {examples.map((ex) => (
                  <div key={ex.title} className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-5">
                    <h3 className="font-semibold text-[#101827] mb-2">{ex.title}</h3>
                    <p className="text-sm text-[#697386] leading-relaxed">{ex.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-7 sticky top-24">
                <h3 className="font-bold text-[#101827] mb-4">Tools & Technologies</h3>
                <div className="space-y-2 mb-6">
                  {["PowerShell", "Terraform", "Azure DevOps", "GitHub Actions", "Azure Automation", "Logic Apps", "REST APIs"].map((t) => (
                    <div key={t} className="flex items-center gap-2 text-sm text-[#697386]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E7192D] flex-shrink-0" />
                      {t}
                    </div>
                  ))}
                </div>
                <a href="/contact" className="block text-center px-5 py-3 bg-[#E7192D] text-white font-semibold text-sm rounded-lg hover:bg-[#c9152a] transition-colors">
                  Discuss Your Automation Needs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection heading="Ready to Reduce Manual Work and Improve Consistency?" description="Let's identify the automation opportunities that will have the biggest impact on your team." primaryLabel="Request a Consultation" />
    </>
  );
}
