"use client";

import Link from "next/link";
import { useEffect, useId, useMemo, useRef, useState, type ReactNode } from "react";
import { BottomSheet } from "@/components/BottomSheet";

export type CatalogItem = {
  slug: string;
  name: string;
  brand?: string;
  /** Size-range ids the product's pack sizes fall into. */
  sizes: string[];
  searchText: string;
  card: ReactNode;
};

/** A category in the sidebar: a link to that category's page, not a filter. */
export type CategoryLink = {
  href: string;
  label: string;
  count: number;
  active: boolean;
};

export type CatalogLabels = {
  filters: string;
  clear: string;
  search: string;
  category: string;
  brand: string;
  size: string;
  /** Uses {count}. */
  productCount: string;
  sort: string;
  sortFeatured: string;
  sortAz: string;
  sortZa: string;
  noResults: string;
  showFilters: string;
  /** Uses {count}. Button that closes the filter sheet on phones. */
  showResults: string;
};

type SortKey = "featured" | "az" | "za";

function toggle(list: string[], value: string) {
  return list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className={`h-4 w-4 text-slate transition-transform ${open ? "" : "rotate-180"}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10l4-4 4 4" />
    </svg>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  const [open, setOpen] = useState(true);
  const bodyId = useId();

  return (
    <div className="border-t border-[#ede8df] px-5 py-4">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={bodyId}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between text-[15px] font-semibold text-ink"
      >
        {title}
        <Chevron open={open} />
      </button>
      <div id={bodyId} hidden={!open} className="mt-3">
        {children}
      </div>
    </div>
  );
}

function CheckboxList({
  options,
  selected,
  onToggle,
}: {
  options: { id: string; label: string; count: number }[];
  selected: string[];
  onToggle: (id: string) => void;
}) {
  return (
    <ul className="space-y-0.5">
      {options.map((option) => (
        <li key={option.id}>
          <label className="flex cursor-pointer items-center gap-3 rounded-lg px-1 py-1.5 text-[15px] text-ink/85 hover:bg-[#f7f4ee]">
            <input
              type="checkbox"
              checked={selected.includes(option.id)}
              onChange={() => onToggle(option.id)}
              className="h-[18px] w-[18px] shrink-0 cursor-pointer rounded accent-brand"
            />
            <span className="min-w-0 flex-1 leading-snug">{option.label}</span>
            <span className="text-xs text-slate/70 tabular-nums">{option.count}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}

/** One row per category; the current one is highlighted and the others go to their own page. */
function CategoryNav({ links }: { links: CategoryLink[] }) {
  return (
    <ul className="space-y-1">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            aria-current={link.active ? "page" : undefined}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] leading-snug transition-colors ${
              link.active
                ? "bg-brand font-semibold text-white"
                : "text-ink/85 hover:bg-[#f4f1ea] hover:text-ink"
            }`}
          >
            <span className="min-w-0 flex-1">{link.label}</span>
            <span className={`text-xs tabular-nums ${link.active ? "text-white/75" : "text-slate/70"}`}>
              {link.count}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/**
 * Product catalog with a filter sidebar. Categories are links to their own pages;
 * within the current page, visitors narrow the products by search, brand and size.
 * Cards arrive server-rendered; this only decides which to show and in what order.
 */
export function ProductCatalog({
  items,
  categoryLinks,
  sizeOptions,
  labels,
}: {
  items: CatalogItem[];
  categoryLinks: CategoryLink[];
  /** Every size range, in order; only those used on this page are shown. */
  sizeOptions: { id: string; label: string }[];
  labels: CatalogLabels;
}) {
  const [query, setQuery] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [sort, setSort] = useState<SortKey>("featured");
  const [sheetOpen, setSheetOpen] = useState(false);
  const chipsRef = useRef<HTMLElement>(null);

  // Phones: bring the current category's chip into view in the scrolling row.
  useEffect(() => {
    const row = chipsRef.current;
    const active = row?.querySelector<HTMLElement>('[aria-current="page"]');
    if (row && active) row.scrollLeft = active.offsetLeft - (row.clientWidth - active.offsetWidth) / 2;
  }, []);

  // Only brands and sizes that exist among this page's products.
  const brandOptions = useMemo(() => {
    const counts = new Map<string, number>();
    for (const item of items) {
      if (item.brand) counts.set(item.brand, (counts.get(item.brand) ?? 0) + 1);
    }
    return [...counts]
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([brand, count]) => ({ id: brand, label: brand, count }));
  }, [items]);

  const sizeCounts = useMemo(
    () =>
      sizeOptions
        .map((option) => ({ ...option, count: items.filter((item) => item.sizes.includes(option.id)).length }))
        .filter((option) => option.count > 0),
    [items, sizeOptions],
  );

  const visible = useMemo(() => {
    const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const filtered = items.filter(
      (item) =>
        (selectedBrands.length === 0 || (item.brand !== undefined && selectedBrands.includes(item.brand))) &&
        (selectedSizes.length === 0 || item.sizes.some((id) => selectedSizes.includes(id))) &&
        words.every((word) => item.searchText.includes(word)),
    );
    if (sort === "featured") return filtered;
    const sorted = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    return sort === "za" ? sorted.reverse() : sorted;
  }, [items, query, selectedBrands, selectedSizes, sort]);

  const activeCount = selectedBrands.length + selectedSizes.length + (query.trim() ? 1 : 0);

  function clearAll() {
    setQuery("");
    setSelectedBrands([]);
    setSelectedSizes([]);
  }

  // Desktop shows it as a card in the sidebar; phones show it bare inside the bottom sheet.
  const filterPanel = (inSheet: boolean) => (
    <div
      className={
        inSheet
          ? "pt-3"
          : "overflow-hidden rounded-2xl border border-[#ede8df] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.05)]"
      }
    >
      <div className="flex items-center justify-between px-5 pt-5 pb-4">
        <p className="text-[15px] font-semibold text-ink">{labels.filters}</p>
        {activeCount > 0 ? (
          <button type="button" onClick={clearAll} className="text-sm font-semibold text-brand hover:text-brand-deep">
            {labels.clear}
          </button>
        ) : null}
      </div>
      <div className="border-t border-[#ede8df] px-5 py-4">
        <label className="relative block">
          <span className="sr-only">{labels.search}</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate/70"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <circle cx="9" cy="9" r="5.5" />
            <path d="M13.5 13.5L17 17" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={labels.search}
            enterKeyHint="search"
            // 16px on phones keeps iOS from zooming the page when the field gains focus.
            className="w-full rounded-xl border border-[#e3ddd1] bg-white py-2.5 pr-3 pl-10 text-base text-ink lg:text-[15px] outline-none placeholder:text-slate/60 focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </label>
      </div>
      <Section title={labels.category}>
        <CategoryNav links={categoryLinks} />
      </Section>
      {brandOptions.length > 1 ? (
        <Section title={labels.brand}>
          <CheckboxList
            options={brandOptions}
            selected={selectedBrands}
            onToggle={(id) => setSelectedBrands((list) => toggle(list, id))}
          />
        </Section>
      ) : null}
      {sizeCounts.length > 1 ? (
        <Section title={labels.size}>
          <CheckboxList
            options={sizeCounts}
            selected={selectedSizes}
            onToggle={(id) => setSelectedSizes((list) => toggle(list, id))}
          />
        </Section>
      ) : null}
    </div>
  );

  return (
    <div className="items-start lg:grid lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-7">
      <aside className="sticky top-24 hidden max-h-[calc(100dvh-7rem)] overflow-y-auto overscroll-contain rounded-2xl [scrollbar-width:thin] lg:block">
        {filterPanel(false)}
      </aside>

      <div>
        {/* Phones and tablets: categories stay one tap away above the products. */}
        <nav
          ref={chipsRef}
          aria-label={labels.category}
          className="relative -mx-5 mb-4 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] md:-mx-8 md:px-8 lg:hidden [&::-webkit-scrollbar]:hidden"
        >
          {categoryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={link.active ? "page" : undefined}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap ${
                link.active ? "bg-brand text-white" : "border border-[#e3ddd1] bg-white text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-[15px] font-medium text-slate" aria-live="polite">
            {labels.productCount.replace("{count}", String(visible.length))}
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-haspopup="dialog"
              onClick={() => setSheetOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl border border-[#e3ddd1] bg-white px-3.5 py-2 text-sm font-semibold text-ink transition select-none active:scale-[0.97] lg:hidden"
            >
              {labels.showFilters}
              {activeCount > 0 ? (
                <span className="rounded-full bg-brand px-1.5 text-xs text-white">{activeCount}</span>
              ) : null}
            </button>
            <label className="flex items-center gap-2 text-sm text-slate">
              <span className="hidden sm:inline">{labels.sort}</span>
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value as SortKey)}
                className="rounded-xl border border-[#e3ddd1] bg-white px-3 py-2 text-sm font-medium text-ink outline-none focus:border-brand"
              >
                <option value="featured">{labels.sortFeatured}</option>
                <option value="az">{labels.sortAz}</option>
                <option value="za">{labels.sortZa}</option>
              </select>
            </label>
          </div>
        </div>

        <BottomSheet
          open={sheetOpen}
          onOpenChange={setSheetOpen}
          title={labels.filters}
          footer={
            <button
              type="button"
              onClick={() => setSheetOpen(false)}
              className="w-full rounded-xl bg-brand px-4 py-3 text-[15px] font-semibold text-white transition select-none active:scale-[0.98]"
            >
              {labels.showResults.replace("{count}", String(visible.length))}
            </button>
          }
        >
          {filterPanel(true)}
        </BottomSheet>

        {visible.length > 0 ? (
          <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {visible.map((item) => (
              <div key={item.slug}>{item.card}</div>
            ))}
          </div>
        ) : (
          <div className="mt-5 rounded-2xl border border-dashed border-[#e3ddd1] bg-white px-6 py-16 text-center">
            <p className="text-slate">{labels.noResults}</p>
            <button type="button" onClick={clearAll} className="mt-3 text-sm font-semibold text-brand">
              {labels.clear}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
