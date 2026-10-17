import type { Metadata } from "next";
import { CTASection } from "@/components/ui/CTASection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CheckCircle2, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Database Solutions & Migration",
  description:
    "SixthPin helps businesses modernize SQL Server, migrate databases to Azure SQL, and improve performance, availability, and reliability of database platforms.",
};

const capabilities = [
  "Microsoft SQL Server consulting",
  "SQL Server version upgrades",
  "On-premises to Azure migration",
  "SQL Server to Azure SQL migration assessments",
  "Azure SQL Database and Managed Instance",
  "Database performance tuning",
  "High availability and disaster recovery",
  "Database automation",
  "Migration planning and validation",
  "Database security review",
];

const migrationApproach = [
  {
    step: "01",
    title: "Assessment",
    description: "Inventory and assess your current database environment, identify compatibility issues, and document dependencies.",
  },
  {
    step: "02",
    title: "Planning",
    description: "Define the migration strategy, target architecture, testing approach, rollback plan, and timeline aligned with your business requirements.",
  },
  {
    step: "03",
    title: "Migration & Testing",
    description: "Execute the migration with validation at each stage, test application compatibility, and verify data integrity.",
  },
  {
    step: "04",
    title: "Cutover & Stabilization",
    description: "Coordinate the production cutover and provide post-migration support during the stabilization period.",
  },
];

export default function DatabaseMigrationPage() {
  return (
    <>
      <section className="bg-[#101827] pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Database Migration" }]} />
          </div>
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#E7192D] mb-4">Database Solutions & Migration</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Modernize Your Database Platform <span className="text-[#E7192D]">with Confidence.</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Modernize database platforms and migrate workloads with a focus on performance, reliability, security, and business continuity.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Important notice */}
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-5 mb-12 max-w-4xl">
            <AlertCircle size={18} className="text-amber-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>A note on downtime:</strong> Migration strategies and expected downtime depend on your specific environment, database size, application architecture, and business requirements. We work with you to define the approach that balances risk, complexity, and continuity for your situation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#101827] mb-8">Our Database Capabilities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
                {capabilities.map((cap) => (
                  <div key={cap} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#E7192D] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#697386]">{cap}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-[#101827] mb-6">Our Migration Approach</h2>
              <div className="space-y-4">
                {migrationApproach.map((s) => (
                  <div key={s.step} className="flex gap-5 bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-5">
                    <span className="text-2xl font-bold text-[#E7192D] leading-none flex-shrink-0">{s.step}</span>
                    <div>
                      <h3 className="font-semibold text-[#101827] mb-1">{s.title}</h3>
                      <p className="text-sm text-[#697386] leading-relaxed">{s.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-7 sticky top-24">
                <h3 className="font-bold text-[#101827] mb-4">Platforms & Technologies</h3>
                <div className="space-y-2 mb-6">
                  {["Microsoft SQL Server (2012–2022)", "Azure SQL Database", "Azure SQL Managed Instance", "Azure Database Migration Service", "SQL Server Migration Assistant (SSMA)", "Database Experimentation Assistant (DEA)"].map((t) => (
                    <div key={t} className="flex items-center gap-2 text-sm text-[#697386]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E7192D] flex-shrink-0" />
                      {t}
                    </div>
                  ))}
                </div>
                <a href="/contact" className="block text-center px-5 py-3 bg-[#E7192D] text-white font-semibold text-sm rounded-lg hover:bg-[#c9152a] transition-colors">
                  Discuss Your Database Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection heading="Ready to Modernize Your Database Platform?" description="Start with an assessment. We'll help you understand your options and define the right migration approach." primaryLabel="Request a Consultation" />
    </>
  );
}
