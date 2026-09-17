import Link from "next/link";
import { company, navLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.3fr_1fr_1fr] md:px-8">
        <div>
          <p className="text-lg font-bold tracking-tight">Business Link LLC</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65">{company.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              href="/contact?audience=manufacturer"
              className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white/15"
            >
              Manufacturers
            </Link>
            <Link
              href="/contact?audience=buyer"
              className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white/15"
            >
              Buyers
            </Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Explore</p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/65 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Contact</p>
          <a href={`mailto:${company.email}`} className="mt-4 block text-sm text-orange hover:underline">
            {company.email}
          </a>
          <p className="mt-3 text-sm leading-relaxed text-white/65">
            International food & beverage market development, distribution and sourcing.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 text-xs text-white/45 md:flex-row md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Business Link LLC. All rights reserved.</p>
          <p>Americas · Caribbean · Africa · Europe · Asia-Pacific</p>
        </div>
      </div>
    </footer>
  );
}
