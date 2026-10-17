import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "SixthPin Privacy Policy — how we collect, use, and protect personal information submitted through our website.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#101827] mb-4">Privacy Policy</h1>
        <p className="text-sm text-[#697386] mb-10">
          Last updated: this policy will be updated with a specific date once the company's legal review is complete.
        </p>

        <div className="prose prose-slate max-w-none">
          <p className="text-[#697386] leading-relaxed mb-6">
            This Privacy Policy explains how SixthPin (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) collects, uses, and protects information you provide when using our website and services.
          </p>

          {[
            {
              heading: "1. Information We Collect",
              content: `When you submit the contact form on our website, we collect the information you provide, which may include your name, business email address, company name, description of your project or challenge, and optionally a budget range. We do not collect any personal data through cookies or tracking technologies beyond what is necessary for the website to function correctly.`,
            },
            {
              heading: "2. How We Use Your Information",
              content: `We use the information you submit solely to respond to your enquiry, assess whether we can help with your project, and communicate with you during and after that process. We do not sell, rent, or share your personal information with third parties for marketing purposes.`,
            },
            {
              heading: "3. Legal Basis for Processing",
              content: `We process the information you submit on the basis of your consent (given when you check the consent box and submit the form) and our legitimate interest in responding to business enquiries. You may withdraw your consent at any time by contacting us.`,
            },
            {
              heading: "4. Data Retention",
              content: `We retain your contact form submissions for a period necessary to manage the enquiry and any subsequent business relationship. If no engagement is initiated, enquiry data is reviewed and deleted periodically.`,
            },
            {
              heading: "5. Data Security",
              content: `We take reasonable technical and organisational measures to protect the personal information we hold from unauthorized access, loss, or disclosure. Contact form submissions are transmitted over encrypted connections (HTTPS) and stored securely.`,
            },
            {
              heading: "6. Third-Party Services",
              content: `We use Resend (resend.com) to deliver email notifications when you submit the contact form. Resend may process your email address and message content as part of this delivery. Please refer to Resend's privacy policy for details of how they process data.`,
            },
            {
              heading: "7. Your Rights",
              content: `Depending on your location, you may have rights to access, correct, or delete the personal information we hold about you. To exercise any of these rights, please contact us using the details on our Contact page.`,
            },
            {
              heading: "8. Changes to This Policy",
              content: `We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Your continued use of the website after changes are posted constitutes acceptance of the updated policy.`,
            },
            {
              heading: "9. Contact",
              content: `If you have questions about this Privacy Policy or how we handle your information, please use the contact form on our website. Contact email details will be published here once the company's contact information has been finalized.`,
            },
          ].map((section) => (
            <div key={section.heading} className="mb-8">
              <h2 className="text-lg font-bold text-[#101827] mb-3">{section.heading}</h2>
              <p className="text-[#697386] leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
