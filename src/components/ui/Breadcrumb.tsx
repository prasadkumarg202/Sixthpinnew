import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: Crumb[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-[#697386]">
        {items.map((item, i) => (
          <span key={item.label} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight size={13} className="text-[#697386]/50" />}
            {item.href && i < items.length - 1 ? (
              <Link href={item.href} className="hover:text-[#E7192D] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span aria-current={i === items.length - 1 ? "page" : undefined} className={i === items.length - 1 ? "text-[#101827] font-medium" : ""}>
                {item.label}
              </span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
