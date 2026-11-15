"use client";

import { Drawer } from "@base-ui/react/drawer";
import { useRef, type ReactNode } from "react";

/**
 * Bottom sheet for phones and tablets, built on Base UI's Drawer: swipe down, tap the
 * backdrop or press Escape to close. The popup extends 3rem below the screen (the "bleed")
 * so pulling it up past its resting point never shows a gap underneath.
 */
export function BottomSheet({
  open,
  onOpenChange,
  title,
  closeLabel,
  footer,
  children,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Read by screen readers; not shown. */
  title: string;
  /** When set, a round close button sits in the top-right corner and takes focus on open. */
  closeLabel?: string;
  /** Pinned below the scrolling content, e.g. a "Show results" button. */
  footer?: ReactNode;
  children: ReactNode;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const ease = "ease-[cubic-bezier(0.32,0.72,0,1)]";

  return (
    <Drawer.Root open={open} onOpenChange={(next) => onOpenChange(next)}>
      <Drawer.Portal>
        <Drawer.Backdrop
          className={`fixed inset-0 z-[70] min-h-dvh bg-[rgb(10_22_48/0.55)] opacity-[calc(1-var(--drawer-swipe-progress))] backdrop-blur-[4px] transition-opacity duration-[450ms] ${ease} data-[swiping]:duration-0 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 data-[ending-style]:duration-[calc(var(--drawer-swipe-strength)*400ms)] motion-reduce:transition-none`}
        />
        <Drawer.Viewport className="fixed inset-0 z-[70] flex items-end">
          <Drawer.Popup
            initialFocus={closeLabel ? closeRef : undefined}
            className={`relative -mb-[3rem] flex max-h-[calc(92dvh+3rem)] w-full flex-col overflow-hidden rounded-t-3xl bg-white pb-[3rem] text-left outline-none [transform:translateY(var(--drawer-swipe-movement-y))] transition-transform duration-[450ms] ${ease} data-[swiping]:select-none data-[starting-style]:[transform:translateY(calc(100%-3rem+2px))] data-[ending-style]:[transform:translateY(calc(100%-3rem+2px))] data-[ending-style]:duration-[calc(var(--drawer-swipe-strength)*400ms)] motion-reduce:transition-none`}
          >
            {/* Grab handle: shows the sheet can be pulled down. */}
            <div aria-hidden="true" className="pointer-events-none absolute top-2 left-1/2 z-20 h-1 w-10 -translate-x-1/2 rounded-full bg-black/20" />
            <Drawer.Title className="sr-only">{title}</Drawer.Title>

            <Drawer.Content
              className={`min-h-0 flex-1 overflow-y-auto overscroll-contain touch-auto ${
                footer ? "" : "pb-[env(safe-area-inset-bottom,0px)]"
              }`}
            >
              {children}
            </Drawer.Content>

            {footer ? (
              <div className="border-t border-[#ede8df] bg-white px-5 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))]">
                {footer}
              </div>
            ) : null}

            {closeLabel ? (
              <Drawer.Close
                ref={closeRef}
                aria-label={closeLabel}
                className="absolute top-3 right-3 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink shadow-md transition select-none active:scale-95"
              >
                <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M3 3l10 10M13 3L3 13" />
                </svg>
              </Drawer.Close>
            ) : null}
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
