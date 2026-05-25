"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Store, Users, UserPlus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useJoinDialog } from "@/components/JoinDialog";

const items = [
  { href: "/", label: "Explore", Icon: Compass, type: "link" },
  { href: "/about", label: "Why Join", Icon: Store, type: "link" },
  { href: "/faq", label: "FAQ", Icon: Users, type: "link" },
  { label: "Join", Icon: UserPlus, type: "join" },
];

export function MobileNav() {
  const pathname = usePathname();
  const { open } = useJoinDialog();

  return (
    <nav
      aria-label="Mobile primary"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 glass glass-top pb-safe"
    >
      <ul className="grid grid-cols-4 h-16">
        {items.map((item) => {
          const { label, Icon } = item;
          if (item.type === "join") {
            return (
              <li key={label}>
                <button
                  type="button"
                  onClick={open}
                  className="w-full h-full flex flex-col items-center justify-center gap-1 text-xs font-bold text-[var(--color-text-primary)] hover:opacity-70 transition-opacity duration-instant"
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                  {label}
                </button>
              </li>
            );
          }
          const active = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "h-full flex flex-col items-center justify-center gap-1 text-xs font-bold transition-colors duration-instant",
                  active
                    ? "text-[var(--color-text-primary)]"
                    : "text-[var(--color-text-primary)] opacity-70 hover:opacity-100"
                )}
              >
                <Icon className="w-5 h-5" aria-hidden="true" />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
