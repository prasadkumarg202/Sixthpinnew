import type { Metadata } from "next";
import { CTASection } from "@/components/ui/CTASection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Data Engineering & Analytics",
  description:
    "SixthPin builds data pipelines, analytics platforms, and data engineering solutions using Azure Data Factory, Databricks, Microsoft Fabric, and Synapse.",
};

const capabilities = [
  "Azure Data Factory pipelines",
  "Azure Databricks",
  "Microsoft Fabric and Synapse where appropriate",
  "Data pipelines and integration",
  "Data platform modernization",
  "Analytics architecture design",
  "Data quality and governance",
  "ETL / ELT development",
  "Data lakehouse implementation",
  "Reporting and BI integration",
];

const useCases = [
  {
    title: "Data Platform Modernization",
    description:
      "Migrate legacy data warehouses and fragmented pipelines to a modern, scalable platform that's easier to operate and extend.",
  },
  {
    title: "Data Pipeline Development",
    description:
      "Design and build reliable pipelines that ingest, transform, and deliver data to the right place at the right time.",
  },
  {
    title: "Analytics Architecture",
    description:
      "Define and implement the right architecture — lakehouse, warehouse, or hybrid — for your reporting and analytics needs.",
  },
  {
    title: "Data Quality & Governance",
    description:
      "Implement monitoring, validation, and governance practices so your data remains accurate, trusted, and compliant.",
  },
];

export default function DataEngineeringPage() {
  return (
    <>
      <section className="bg-[#101827] pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Data Engineering" }]} />
          </div>
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#E7192D] mb-4">Data Engineering & Analytics</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Turn Data Into a <span className="text-[#E7192D]">Reliable Business Asset.</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Build dependable data platforms that turn fragmented information into accessible, useful business intelligence.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#101827] mb-8">Our Data Engineering Capabilities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
                {capabilities.map((cap) => (
                  <div key={cap} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#E7192D] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#697386]">{cap}</span>
                  </div>
                ))}
              </div>
              <h2 className="text-2xl font-bold text-[#101827] mb-6">Where We Can Help</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {useCases.map((uc) => (
                  <div key={uc.title} className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-5">
                    <h3 className="font-semibold text-[#101827] mb-2">{uc.title}</h3>
                    <p className="text-sm text-[#697386] leading-relaxed">{uc.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-7 sticky top-24">
                <h3 className="font-bold text-[#101827] mb-4">Technologies We Work With</h3>
                <div className="space-y-2 mb-6">
                  {["Azure Data Factory", "Azure Databricks", "Microsoft Fabric", "Azure Synapse Analytics", "Azure Data Lake Storage", "Power BI", "dbt (data build tool)"].map((t) => (
                    <div key={t} className="flex items-center gap-2 text-sm text-[#697386]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E7192D] flex-shrink-0" />
                      {t}
                    </div>
                  ))}
                </div>
                <a href="/contact" className="block text-center px-5 py-3 bg-[#E7192D] text-white font-semibold text-sm rounded-lg hover:bg-[#c9152a] transition-colors">
                  Discuss Your Data Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection heading="Ready to Build a Better Data Platform?" description="Talk to us about your current data challenges and let's identify a practical path forward." primaryLabel="Request a Consultation" />
    </>
  );
}
