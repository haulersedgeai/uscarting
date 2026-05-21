import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ServiceCard({
  href,
  title,
  description,
  className,
}: {
  href: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group block rounded-2xl border border-[var(--color-line)] bg-white p-6 transition-all hover:border-[var(--color-orange)] hover:shadow-md",
        className
      )}
    >
      <h3 className="text-xl font-bold text-[var(--color-ink)] mb-2">{title}</h3>
      <p className="text-[var(--color-steel)] text-sm leading-relaxed">{description}</p>
      <div className="mt-4 flex items-center gap-1.5 text-sm font-bold text-[var(--color-orange)] group-hover:gap-2.5 transition-all">
        Learn more <ArrowRight size={14} />
      </div>
    </Link>
  );
}
