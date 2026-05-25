import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 px-3 py-1 rounded-sm text-xs font-bold tracking-wide uppercase",
  {
    variants: {
      variant: {
        accent: "bg-accent text-[var(--color-text-primary)]",
        dark: "bg-[var(--color-text-primary)] text-white",
        soft: "bg-[var(--color-surface-raised)] text-[var(--color-text-inverse)] border border-[var(--color-border-muted)]",
        outline: "bg-white border border-[var(--color-border-default)] text-[var(--color-text-secondary)]",
      },
    },
    defaultVariants: { variant: "soft" },
  }
);

export function Badge({ className, variant, ...props }) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { badgeVariants };
