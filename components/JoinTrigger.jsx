"use client";

import { Button } from "@/components/ui/button";
import { useJoinDialog } from "@/components/JoinDialog";

// Renders a styled shadcn Button that opens the Join dialog.
// All Button props (variant, size, className) pass through.
export function JoinButton({ onClick, children, ...props }) {
  const { open } = useJoinDialog();
  return (
    <Button
      type="button"
      onClick={(e) => {
        onClick?.(e);
        if (!e.defaultPrevented) open();
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

// Renders a plain <button> with any className — for inline / text-link CTAs.
export function JoinTrigger({ onClick, children, className, ...props }) {
  const { open } = useJoinDialog();
  return (
    <button
      type="button"
      onClick={(e) => {
        onClick?.(e);
        if (!e.defaultPrevented) open();
      }}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
}
