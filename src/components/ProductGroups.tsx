"use client";

import { useRef, useState, type ReactNode } from "react";

export type ProductGroup = {
  id: string;
  label: string;
  count: number;
  content: ReactNode;
};

/** Same height as the fixed site header (h-[4.5rem]). */
const HEADER_PX = 72;

/**
 * On phones, shows one product group at a time behind sticky tabs. From tablet
 * up every group stays on the page, stacked as before.
 */
export function ProductGroups({
  groups,
  label,
  className = "",
  gap = "gap-14",
}: {
  groups: ProductGroup[];
  label: string;
  className?: string;
  gap?: string;
}) {
  const [activeId, setActiveId] = useState(groups[0]?.id);
  const rootRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLElement>(null);

  function select(id: string, button: HTMLButtonElement) {
    setActiveId(id);

    const tabs = tabsRef.current;
    if (tabs) {
      tabs.scrollTo({
        left: button.offsetLeft - (tabs.clientWidth - button.offsetWidth) / 2,
        behavior: "smooth",
      });
    }

    // Once the tabs are stuck, a new group should start from its first product.
    const root = rootRef.current;
    if (root && root.getBoundingClientRect().top < HEADER_PX) {
      requestAnimationFrame(() => {
        window.scrollTo({ top: root.getBoundingClientRect().top + window.scrollY - HEADER_PX });
      });
    }
  }

  return (
    <div ref={rootRef} className={className}>
      {groups.length > 1 ? (
        <nav
          ref={tabsRef}
          aria-label={label}
          className="sticky top-[4.5rem] z-30 -mx-5 mb-5 flex gap-2 overflow-x-auto border-b border-line bg-white px-5 py-3 [scrollbar-width:none] sm:hidden [&::-webkit-scrollbar]:hidden"
        >
          {groups.map((group) => {
            const active = group.id === activeId;
            return (
              <button
                key={group.id}
                type="button"
                aria-pressed={active}
                onClick={(event) => select(group.id, event.currentTarget)}
                className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors ${
                  active ? "bg-brand text-white" : "bg-surface text-ink"
                }`}
              >
                {group.label}
                <span className={`ml-1.5 font-normal ${active ? "text-white/75" : "text-slate"}`}>{group.count}</span>
              </button>
            );
          })}
        </nav>
      ) : null}

      <div className={`grid ${gap}`}>
        {groups.map((group) => (
          <div key={group.id} className={group.id === activeId ? "" : "hidden sm:block"}>
            {group.content}
          </div>
        ))}
      </div>
    </div>
  );
}
