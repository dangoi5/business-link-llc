"use client";

import { useRef, useState, type ReactNode } from "react";
import { BottomSheet } from "@/components/BottomSheet";

/** Matches Tailwind's `lg` breakpoint, where the details window becomes a centered window. */
const DESKTOP_QUERY = "(min-width: 1024px)";

/**
 * Tap target covering a product card that opens the product's details window.
 * Desktop: a native modal <dialog>, centered. Its content is server-rendered, so the
 * details stay in the page's HTML. Phones and tablets: a swipe-to-dismiss bottom sheet.
 */
export function ProductSheet({
  label,
  closeLabel,
  title,
  children,
}: {
  label: string;
  closeLabel: string;
  title: string;
  children: ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  function open() {
    if (!window.matchMedia(DESKTOP_QUERY).matches) {
      setSheetOpen(true);
      return;
    }
    dialogRef.current?.showModal();
    // A modal dialog doesn't stop the page behind it from scrolling on iOS.
    document.documentElement.style.overflow = "hidden";
  }

  return (
    <>
      <button
        type="button"
        aria-label={label}
        aria-haspopup="dialog"
        onClick={open}
        className="absolute inset-0 z-10 cursor-pointer rounded-2xl"
      />
      <dialog
        ref={dialogRef}
        aria-label={title}
        onClose={() => {
          document.documentElement.style.overflow = "";
        }}
        // Clicks on the backdrop land on the dialog element itself.
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current.close();
        }}
        className="product-modal m-auto w-[min(1280px,calc(100vw-4rem))] max-w-none overflow-hidden rounded-3xl bg-white text-left"
      >
        <div className="relative">
          {children}
          <button
            type="button"
            aria-label={closeLabel}
            // Start focus here rather than on the first link, so nothing looks pre-selected.
            autoFocus
            onClick={() => dialogRef.current?.close()}
            className="absolute top-5 right-5 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-ink shadow-md transition hover:bg-surface"
          >
            <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 3l10 10M13 3L3 13" />
            </svg>
          </button>
        </div>
      </dialog>
      <BottomSheet open={sheetOpen} onOpenChange={setSheetOpen} title={title} closeLabel={closeLabel}>
        {children}
      </BottomSheet>
    </>
  );
}
