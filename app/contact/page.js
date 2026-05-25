import { Mail, MessageCircle, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact | Fleazo",
};

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto px-5 py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold tracking-tight mb-3">
          Get in touch
        </h1>
        <p className="text-md text-[var(--color-text-secondary)] font-normal">
          We reply on WhatsApp faster than on email — fair warning.
        </p>
      </header>

      <ul className="grid md:grid-cols-3 gap-4">
        <ContactCard
          Icon={MessageCircle}
          label="WhatsApp"
          value="+91 99999 00001"
          href="https://wa.me/919999900001"
        />
        <ContactCard
          Icon={Mail}
          label="Email"
          value="hello@fleazo.com"
          href="mailto:hello@fleazo.com"
        />
        <ContactCard
          Icon={MapPin}
          label="Based in"
          value="Jaipur, India"
        />
      </ul>
    </section>
  );
}

function ContactCard({ Icon, label, value, href }) {
  const inner = (
    <article className="bg-white border border-[var(--color-border-muted)] rounded-xs p-6 shadow-1 hover:shadow-2 hover:border-accent transition-all duration-instant h-full">
      <Icon
        className="w-5 h-5 text-[var(--color-text-primary)] mb-3"
        aria-hidden="true"
      />
      <p className="text-xs uppercase tracking-wider text-[var(--color-text-tertiary)]">
        {label}
      </p>
      <p className="font-bold text-md text-[var(--color-text-primary)] mt-1 break-all">
        {value}
      </p>
    </article>
  );
  return (
    <li>
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="block h-full"
        >
          {inner}
        </a>
      ) : (
        inner
      )}
    </li>
  );
}
