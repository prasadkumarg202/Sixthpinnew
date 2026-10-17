// Site-wide configuration constants
// All sensitive values must be loaded from environment variables

export const siteConfig = {
  name: "SixthPin",
  tagline: "Your Next Point of Innovation.",
  description:
    "SixthPin helps businesses modernize infrastructure, unlock the value of data, automate complex workflows, and turn AI opportunities into practical business solutions.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sixthpin.com",
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
  ogImage: "/og-image.png",
} as const;

export const contactConfig = {
  emailTo: process.env.CONTACT_EMAIL_TO ?? "hello@sixthpin.com",
  emailFrom: process.env.CONTACT_EMAIL_FROM ?? "no-reply@sixthpin.com",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
] as const;

export const serviceLinks = [
  { label: "AI Solutions", href: "/services/ai-solutions" },
  { label: "Cloud & Infrastructure", href: "/services/cloud-infrastructure" },
  { label: "Data Engineering", href: "/services/data-engineering" },
  { label: "Cloud Migration", href: "/services/database-migration" },
  { label: "Enterprise Consulting", href: "/services/enterprise-consulting" },
  { label: "Automation", href: "/services/automation" },
] as const;
