import { cn } from "@/lib/utils";
import { Container } from "./Container";

export function Section({
  className,
  innerClassName,
  children,
  bg = "default",
  id,
}: {
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
  bg?: "default" | "soft" | "ink" | "cream";
  id?: string;
}) {
  const bgClass =
    bg === "ink"
      ? "bg-[var(--color-ink)] text-white"
      : bg === "soft"
        ? "bg-[var(--color-surface)]"
        : bg === "cream"
          ? "bg-[var(--color-cream)]"
          : "bg-white";
  return (
    <section id={id} className={cn("py-16 md:py-24", bgClass, className)}>
      <Container className={innerClassName}>{children}</Container>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <div
          className={cn(
            "uppercase tracking-[0.18em] text-xs font-bold mb-3",
            light ? "text-[var(--color-orange)]" : "text-[var(--color-orange)]"
          )}
        >
          {eyebrow}
        </div>
      ) : null}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight",
          light ? "text-white" : "text-[var(--color-ink)]"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            light ? "text-white/80" : "text-[var(--color-steel)]"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
