"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid business email"),
  company: z.string().min(1, "Please enter your company name"),
  service: z.string().min(1, "Please select a service of interest"),
  message: z.string().min(20, "Please describe your challenge in at least 20 characters"),
  budget: z.string().optional(),
  consent: z.literal(true, { errorMap: () => ({ message: "You must accept the privacy notice to continue" }) }),
});

type FormData = z.infer<typeof schema>;

const services = [
  { value: "ai-solutions", label: "AI Solutions" },
  { value: "cloud-infrastructure", label: "Cloud & Infrastructure" },
  { value: "data-engineering", label: "Data Engineering" },
  { value: "cloud-migration", label: "Cloud Migration" },
  { value: "enterprise-consulting", label: "Enterprise Consulting" },
  { value: "automation", label: "Automation" },
  { value: "other", label: "Other" },
];

const budgets = [
  { value: "", label: "Prefer not to say" },
  { value: "under-10k", label: "Under £10,000 / $10,000" },
  { value: "10k-50k", label: "£10,000 – £50,000" },
  { value: "50k-150k", label: "£50,000 – £150,000" },
  { value: "150k-plus", label: "£150,000+" },
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("submitting");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message ?? "Submission failed");
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "An unexpected error occurred.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle2 size={48} className="text-green-500 mb-4" />
        <h3 className="text-xl font-bold text-[#101827] mb-2">Message Received</h3>
        <p className="text-[#697386] max-w-sm">
          Thank you for reaching out. We will review your message and get back to you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-[#E7192D] font-semibold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#101827] mb-1.5">
            Full Name <span className="text-[#E7192D]">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={!!errors.name}
            {...register("name")}
            className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg text-sm text-[#101827] placeholder-[#697386] focus:outline-none focus:border-[#E7192D] focus:ring-1 focus:ring-[#E7192D] transition-colors"
            placeholder="Jane Smith"
          />
          {errors.name && (
            <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#101827] mb-1.5">
            Business Email <span className="text-[#E7192D]">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={!!errors.email}
            {...register("email")}
            className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg text-sm text-[#101827] placeholder-[#697386] focus:outline-none focus:border-[#E7192D] focus:ring-1 focus:ring-[#E7192D] transition-colors"
            placeholder="jane@company.com"
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Company + Service */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-[#101827] mb-1.5">
            Company <span className="text-[#E7192D]">*</span>
          </label>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            aria-describedby={errors.company ? "company-error" : undefined}
            aria-invalid={!!errors.company}
            {...register("company")}
            className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg text-sm text-[#101827] placeholder-[#697386] focus:outline-none focus:border-[#E7192D] focus:ring-1 focus:ring-[#E7192D] transition-colors"
            placeholder="Acme Corporation"
          />
          {errors.company && (
            <p id="company-error" role="alert" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.company.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-[#101827] mb-1.5">
            Service of Interest <span className="text-[#E7192D]">*</span>
          </label>
          <select
            id="service"
            aria-describedby={errors.service ? "service-error" : undefined}
            aria-invalid={!!errors.service}
            {...register("service")}
            className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg text-sm text-[#101827] focus:outline-none focus:border-[#E7192D] focus:ring-1 focus:ring-[#E7192D] transition-colors bg-white"
          >
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
          {errors.service && (
            <p id="service-error" role="alert" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.service.message}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#101827] mb-1.5">
          Project or Business Challenge <span className="text-[#E7192D]">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={!!errors.message}
          {...register("message")}
          className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg text-sm text-[#101827] placeholder-[#697386] focus:outline-none focus:border-[#E7192D] focus:ring-1 focus:ring-[#E7192D] transition-colors resize-none"
          placeholder="Describe the business problem you are trying to solve or the technology challenge you're facing…"
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle size={12} /> {errors.message.message}
          </p>
        )}
      </div>

      {/* Budget (optional) */}
      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-[#101827] mb-1.5">
          Approximate Budget Range <span className="text-[#697386] font-normal">(optional)</span>
        </label>
        <select
          id="budget"
          {...register("budget")}
          className="w-full sm:w-72 px-4 py-3 border border-[#E5E7EB] rounded-lg text-sm text-[#101827] focus:outline-none focus:border-[#E7192D] focus:ring-1 focus:ring-[#E7192D] transition-colors bg-white"
        >
          {budgets.map((b) => (
            <option key={b.value} value={b.value}>{b.label}</option>
          ))}
        </select>
      </div>

      {/* Consent */}
      <div>
        <div className="flex items-start gap-3">
          <input
            id="consent"
            type="checkbox"
            aria-describedby={errors.consent ? "consent-error" : undefined}
            aria-invalid={!!errors.consent}
            {...register("consent")}
            className="mt-1 w-4 h-4 rounded border-[#E5E7EB] text-[#E7192D] focus:ring-[#E7192D] flex-shrink-0"
          />
          <label htmlFor="consent" className="text-sm text-[#697386] leading-relaxed">
            I accept the{" "}
            <a href="/privacy-policy" className="text-[#E7192D] hover:underline" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>{" "}
            and consent to SixthPin processing my information to respond to this enquiry.
          </label>
        </div>
        {errors.consent && (
          <p id="consent-error" role="alert" className="mt-1.5 text-xs text-red-600 flex items-center gap-1 ml-7">
            <AlertCircle size={12} /> {errors.consent.message}
          </p>
        )}
      </div>

      {/* Server error */}
      {status === "error" && (
        <div role="alert" className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">
          <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
          <span>{errorMessage || "Something went wrong. Please try again or contact us directly."}</span>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#E7192D] text-white font-semibold text-sm rounded-lg hover:bg-[#c9152a] disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
        aria-busy={status === "submitting"}
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
