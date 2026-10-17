import type { Metadata } from "next";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "About SixthPin",
  description:
    "SixthPin is a technology consulting company that helps businesses modernize infrastructure, adopt AI, and build reliable data platforms. Learn more about our approach.",
};

const values = [
  { title: "Precision", description: "We think carefully before we act. Clear requirements, considered architecture, and well-tested implementation." },
  { title: "Innovation", description: "We keep pace with emerging technology and apply it where it creates genuine value — not for the sake of novelty." },
  { title: "Trust", description: "We say what we mean, communicate clearly, and tell you when something is not the right fit." },
  { title: "Security", description: "Security and reliability are built into how we design and deliver — not added at the end." },
  { title: "Engineering Excellence", description: "We care about code quality, documentation, and implementations that teams can maintain." },
  { title: "Measurable Outcomes", description: "Every engagement has clear objectives. We care about whether the work creates the expected result." },
];

const principles = [
  "Clear communication throughout every engagement",
  "Practical architecture suited to your environment and team",
  "Responsible, secure use of technology",
  "Close collaboration with your internal teams",
  "Documentation and knowledge transfer as standard",
  "Honest assessments — including when something is not the right fit",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#101827] pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#E7192D] mb-4">About SixthPin</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Technology Should Create Possibilities,{" "}
            <span className="text-[#E7192D]">Not Complexity.</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
            SixthPin provides technology consulting and implementation services across AI, cloud, data, infrastructure, and enterprise systems. We help organisations make sense of technology choices, implement solutions that work, and build foundations that support long-term growth.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-8">
              <div className="w-8 h-1 bg-[#E7192D] rounded mb-5" />
              <h2 className="text-xl font-bold text-[#101827] mb-4">Our Mission</h2>
              <p className="text-[#697386] leading-relaxed">
                To empower businesses with intelligent, secure, and scalable technology solutions that simplify complexity, accelerate innovation, and create measurable business value.
              </p>
            </div>
            <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-8">
              <div className="w-8 h-1 bg-[#E7192D] rounded mb-5" />
              <h2 className="text-xl font-bold text-[#101827] mb-4">Our Vision</h2>
              <p className="text-[#697386] leading-relaxed">
                To become a trusted global technology partner that enables organisations to innovate faster, operate smarter, and achieve more through AI and modern enterprise technology.
              </p>
            </div>
          </div>

          {/* How we work */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#101827] mb-5">How We Work</h2>
              <p className="text-[#697386] leading-relaxed mb-5">
                We work closely with client teams, not in parallel to them. That means regular communication, clear documentation, and making sure knowledge stays with your organisation after the engagement ends.
              </p>
              <p className="text-[#697386] leading-relaxed mb-5">
                Our projects begin with understanding — the business objective, the existing environment, and the constraints that matter. We recommend solutions that fit your situation, not the most technically interesting option.
              </p>
              <p className="text-[#697386] leading-relaxed">
                We believe good technology consulting means saying no when something is not the right fit, and being honest about risk, complexity, and what success looks like.
              </p>
            </div>
            <div className="bg-[#101827] rounded-2xl p-8">
              <h3 className="text-white font-bold mb-5">Our Working Principles</h3>
              <ul className="space-y-3">
                {principles.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E7192D] mt-2 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Values */}
          <div>
            <h2 className="text-2xl font-bold text-[#101827] mb-8 text-center">What We Stand For</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v) => (
                <div key={v.title} className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl p-6">
                  <div className="w-6 h-0.5 bg-[#E7192D] mb-4" />
                  <h3 className="font-bold text-[#101827] mb-2">{v.title}</h3>
                  <p className="text-sm text-[#697386] leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection heading="Ready to Work With a Technology Partner You Can Trust?" description="Let's start with a conversation about your business goals and where technology can help." primaryLabel="Start a Conversation" />
    </>
  );
}
