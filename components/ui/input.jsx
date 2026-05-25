import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Input = forwardRef(function Input(
  { className, type = "text", error = false, ...props },
  ref
) {
  return (
    <input
      ref={ref}
      type={type}
      aria-invalid={error || undefined}
      className={cn(
        "w-full h-10 rounded-xs border bg-white px-4 text-md font-medium",
        "text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] placeholder:font-normal",
        "transition-all duration-instant",
        error
          ? "border-red-500"
          : "border-[var(--color-border-default)] hover:border-[var(--color-text-tertiary)] focus:border-[var(--color-text-primary)]",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    />
  );
});
