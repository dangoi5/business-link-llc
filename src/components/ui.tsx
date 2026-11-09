import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

export function SectionLabel({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`eyebrow ${light ? "text-gold" : "text-brand"}`}>
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
        className={`display mt-3 text-3xl md:text-[2.75rem] ${light ? "text-white" : "text-ink"}`}
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
    <Link href={href} className="text-sm font-semibold text-brand transition hover:text-brand-deep">
      {children}
    </Link>
  );
}

export function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-ink transition duration-200 hover:bg-gold-hover active:translate-y-px"
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
      className={`inline-flex items-center justify-center rounded-lg border px-6 py-3 text-sm font-semibold transition ${
        light
          ? "border-white/40 text-white hover:border-white hover:bg-white/10"
          : "border-line text-ink hover:border-brand/40 hover:bg-surface"
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
      className="inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-deep"
    >
      {children}
    </Link>
  );
}

export function PageHero({
  label,
  title,
  description,
  logoSrc,
  logoAlt,
}: {
  label: string;
  title: string;
  description: string;
  logoSrc?: string;
  logoAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pt-24 pb-10 md:pt-28 md:pb-12">
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 10%, rgba(26,69,144,0.7), transparent 50%), radial-gradient(circle at 90% 0%, rgba(229,168,43,0.16), transparent 40%)",
        }}
      />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-5 px-5 md:flex-row md:items-center md:justify-between md:gap-12 md:px-8">
        <div className="min-w-0">
          <SectionLabel light>{label}</SectionLabel>
          <h1 className="display mt-4 max-w-3xl text-4xl break-words text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">{description}</p>
        </div>
        {logoSrc ? (
          // Brand logos are drawn for light backgrounds, so they sit on a white tile.
          <div className="relative order-first h-20 w-40 shrink-0 overflow-hidden rounded-xl bg-white md:order-none md:h-40 md:w-72">
            <Image
              src={logoSrc}
              alt={logoAlt ?? ""}
              fill
              priority
              unoptimized
              className="object-contain p-3 md:p-5"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
