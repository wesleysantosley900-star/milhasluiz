import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-2xl",
        align === "center" ? "text-center" : "text-left mx-0",
        className
      )}
    >
      <span
        className={cn(
          "inline-block text-xs font-bold uppercase tracking-[0.2em] mb-3",
          tone === "dark" ? "text-gold" : "text-premium"
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-tight tracking-tight mb-4",
          tone === "dark" ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed",
            tone === "dark" ? "text-white/70" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
