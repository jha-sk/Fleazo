import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="max-w-xl mx-auto px-5 py-24 text-center">
      <p className="text-xs font-bold text-accent uppercase tracking-wider mb-4">
        404
      </p>
      <h1 className="text-4xl font-serif font-bold tracking-tight mb-4">
        We couldn't find that page.
      </h1>
      <p className="text-md font-normal text-[var(--color-text-secondary)] mb-8">
        The listing may have moved or never existed. Try the directory.
      </p>
      <Link href="/">
        <Button variant="primary" size="lg">
          Back to the Market
        </Button>
      </Link>
    </section>
  );
}
