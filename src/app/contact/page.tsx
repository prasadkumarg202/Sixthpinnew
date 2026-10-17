import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { MapPin, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Talk to the SixthPin team about your AI, cloud, data, or enterprise technology project. Tell us your challenge and we'll help identify a practical next step.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#101827] pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#E7192D] mb-4">Get in Touch</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Let&apos;s Find Your Next Point of{" "}
            <span className="text-[#E7192D]">Innovation.</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Tell us about your business challenge. We&apos;ll help you identify a practical next step.
          </p>
        </div>
      </section>

      {/* Form section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2 bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#101827] mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-7">
                <h3 className="font-bold text-[#101827] mb-4">What Happens Next?</h3>
                <div className="space-y-4">
                  {[
                    { n: "01", t: "We review your message", d: "We read every enquiry carefully to understand your situation." },
                    { n: "02", t: "We'll be in touch", d: "A member of the SixthPin team will respond within 1–2 business days." },
                    { n: "03", t: "Discovery conversation", d: "If there's a potential fit, we'll arrange a call to learn more." },
                  ].map((s) => (
                    <div key={s.n} className="flex gap-3">
                      <span className="text-sm font-bold text-[#E7192D] w-6 flex-shrink-0">{s.n}</span>
                      <div>
                        <p className="text-sm font-semibold text-[#101827]">{s.t}</p>
                        <p className="text-xs text-[#697386] leading-relaxed mt-0.5">{s.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-7">
                <h3 className="font-bold text-[#101827] mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-sm text-[#697386]">
                    <Mail size={16} className="text-[#E7192D] mt-0.5 flex-shrink-0" />
                    <span>
                      Contact details will be displayed here once configured.{" "}
                      <span className="text-xs text-[#697386]/70">(See .env.example)</span>
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-[#697386]">
                    <MapPin size={16} className="text-[#E7192D] mt-0.5 flex-shrink-0" />
                    <span>Serving clients globally.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
