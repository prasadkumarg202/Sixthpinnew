import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/ai-solutions`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/cloud-infrastructure`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/data-engineering`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/database-migration`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/enterprise-consulting`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/automation`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/industries`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
