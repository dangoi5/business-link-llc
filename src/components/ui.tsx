import Link from "next/link";
import type { ReactNode } from "react";

export function SectionLabel({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`eyebrow ${light ? "text-orange" : "text-teal"}`}>
      <span>{children}</span>
    </p>
  );
}

export function SectionHeading({
  label,
  title,
  description,
  light = false,
}: {
  label?: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      {label ? <SectionLabel light={light}>{label}</SectionLabel> : null}
      <h2
        className={`mt-3 text-3xl font-bold tracking-tight md:text-4xl ${light ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-relaxed md:text-lg ${light ? "text-white/70" : "text-slate"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-sm font-semibold text-teal transition hover:text-teal-deep">
      {children}
    </Link>
  );
}

export function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-hover"
    >
      {children}
    </Link>
  );
}

export function SecondaryButton({
  href,
  children,
  light = false,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition ${
        light
          ? "border-white/40 text-white hover:border-white hover:bg-white/10"
          : "border-line text-ink hover:border-teal/40 hover:bg-surface"
      }`}
    >
      {children}
    </Link>
  );
}

export function TealButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-deep"
    >
      {children}
    </Link>
  );
}

export function PageHero({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pt-28 pb-16 md:pt-36 md:pb-20">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(11,110,117,0.45), transparent 45%), radial-gradient(circle at 80% 0%, rgba(224,107,44,0.2), transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionLabel light>{label}</SectionLabel>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">{description}</p>
      </div>
    </section>
  );
}
