import type { Metadata } from "next";
import { CTASection } from "@/components/ui/CTASection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { AIProductBuilder } from "@/components/ui/AIProductBuilder";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Solutions & Generative AI",
  description:
    "SixthPin designs and implements AI solutions — generative AI, enterprise copilots, RAG pipelines, and LLM integration — to improve business productivity and decision-making.",
};

const capabilities = [
  "Generative AI solution design and implementation",
  "Enterprise AI assistants and copilots",
  "Retrieval-augmented generation (RAG) pipelines",
  "AI agents and workflow orchestration",
  "Large language model (LLM) integration",
  "AI readiness and solution assessment",
  "Responsible and safe AI implementation",
  "Prompt engineering and evaluation frameworks",
  "AI-assisted development workflows",
];

const useCases = [
  {
    title: "Knowledge Management",
    description:
      "Build internal AI assistants that answer questions from your documents, policies, and knowledge base using RAG.",
  },
  {
    title: "Workflow Automation",
    description:
      "Design AI agents that coordinate tasks, extract information, and reduce manual effort across business processes.",
  },
  {
    title: "Decision Support",
    description:
      "Surface insights from structured and unstructured data to help teams make faster, more informed decisions.",
  },
  {
    title: "Content and Communication",
    description:
      "Accelerate content creation, summarization, and communication drafts while maintaining accuracy and brand voice.",
  },
];

export default function AISolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#101827] pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "AI Solutions" },
              ]}
            />
          </div>
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#E7192D] mb-4">
              AI Solutions & Generative AI
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Practical AI That Creates{" "}
              <span className="text-[#E7192D]">Real Business Value.</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Identify, build, and integrate AI solutions that improve
              productivity, support decision-making, and streamline business
              operations — with a focus on security, maintainability, and
              measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left — capabilities */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#101827] mb-8">
                Our AI Capabilities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {capabilities.map((cap) => (
                  <div key={cap} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-[#E7192D] mt-0.5 flex-shrink-0"
                    />
                    <span className="text-sm text-[#697386]">{cap}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold text-[#101827] mb-6">
                  Where We Can Help
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {useCases.map((uc) => (
                    <div
                      key={uc.title}
                      className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-5"
                    >
                      <h3 className="font-semibold text-[#101827] mb-2">{uc.title}</h3>
                      <p className="text-sm text-[#697386] leading-relaxed">{uc.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — sidebar */}
            <div>
              <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-7 sticky top-24">
                <h3 className="font-bold text-[#101827] mb-4">Our Approach to AI</h3>
                <p className="text-sm text-[#697386] leading-relaxed mb-5">
                  We focus on useful, secure, maintainable AI implementations
                  rather than experimentation without a clear outcome. Every
                  engagement starts with understanding your business objectives
                  and assessing where AI can genuinely improve your operations.
                </p>
                <p className="text-sm text-[#697386] leading-relaxed mb-6">
                  We help you evaluate options, understand risks, design the
                  right solution architecture, and build implementations that
                  your team can maintain and trust.
                </p>
                <a
                  href="/contact"
                  className="block text-center px-5 py-3 bg-[#E7192D] text-white font-semibold text-sm rounded-lg hover:bg-[#c9152a] transition-colors"
                >
                  Discuss Your AI Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Product Synthesis Engine */}
      <AIProductBuilder />

      <CTASection
        heading="Ready to Explore AI for Your Business?"
        description="Let's talk about what AI can realistically do for your organisation and identify the right starting point."
        primaryLabel="Request a Consultation"
      />
    </>
  );
}
