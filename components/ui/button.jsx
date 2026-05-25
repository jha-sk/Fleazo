import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

// State coverage: default, hover, focus-visible, active, disabled, loading.
const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap select-none",
    "font-bold tracking-wide transition-all duration-instant",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
    "active:scale-[0.97]",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-text-primary)] text-white shadow-2 hover:bg-accent hover:text-[var(--color-text-primary)] hover:-translate-y-0.5",
        accent:
          "bg-accent text-[var(--color-text-primary)] shadow-2 hover:brightness-110",
        outline:
          "bg-white border border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-[var(--color-text-primary)] hover:shadow-1",
        ghost:
          "bg-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-raised)]",
        pill:
          "bg-white border border-[var(--color-border-default)] text-[var(--color-text-inverse)] hover:border-[var(--color-text-primary)] hover:text-[var(--color-text-primary)] hover:shadow-1",
      },
      size: {
        xs: "h-7 px-3 text-xs rounded-sm",
        sm: "h-8 px-4 text-xs rounded-sm",
        md: "h-10 px-5 text-md rounded-sm",
        lg: "h-12 px-6 text-md rounded-sm",
        icon: "h-10 w-10 rounded-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export function Button({
  className,
  variant,
  size,
  loading = false,
  disabled,
  children,
  ...props
}) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading && (
        <span
          aria-hidden="true"
          className="h-3 w-3 rounded-full border-2 border-current border-r-transparent animate-spin"
        />
      )}
      {children}
    </button>
  );
}

export { buttonVariants };
