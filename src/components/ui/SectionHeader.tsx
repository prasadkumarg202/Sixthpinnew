interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  heading,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  const textAlign = align === "center" ? "text-center" : "text-left";
  const maxW = align === "center" ? "max-w-3xl mx-auto" : "max-w-2xl";

  return (
    <div className={`${maxW} ${textAlign} mb-14`}>
      {eyebrow && (
        <p className="text-xs font-bold tracking-[0.15em] uppercase text-[#E7192D] mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-bold leading-tight mb-4 ${
          light ? "text-white" : "text-[#101827]"
        }`}
      >
        {heading}
      </h2>
      {description && (
        <p
          className={`text-base leading-relaxed ${
            light ? "text-slate-300" : "text-[#697386]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
