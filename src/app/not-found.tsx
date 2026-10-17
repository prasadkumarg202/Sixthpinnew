import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-[#101827] flex-1 flex items-center justify-center px-4 py-32">
      <div className="text-center max-w-lg">
        <p className="text-[#E7192D] font-bold text-6xl mb-4">404</p>
        <h1 className="text-3xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-slate-400 mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#E7192D] text-white font-semibold rounded-lg hover:bg-[#c9152a] transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
