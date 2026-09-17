import Link from "next/link";
import { company, navLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-3 md:px-8 md:py-14">
        <div>
          <p className="text-sm font-semibold tracking-[-0.02em] text-black">Business Link LLC</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{company.tagline}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-black">Company</p>
          <ul className="mt-3 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted transition hover:text-black">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium text-black">Get in touch</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Manufacturers, distributors, and buyers evaluating new market opportunities.
          </p>
          <Link href="/contact" className="mt-4 inline-block text-sm font-medium text-navy hover:underline">
            Contact us
          </Link>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 text-xs text-muted md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Business Link LLC</p>
          <p>International food & beverage market development</p>
        </div>
      </div>
    </footer>
  );
}
