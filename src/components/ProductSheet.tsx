"use client";

import { useRef, type ReactNode } from "react";

/**
 * Phone-only tap target covering a product tile; opens the full details in a
 * bottom sheet. Tablet and desktop show the details on the card instead.
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

  function open() {
    dialogRef.current?.showModal();
    // A modal dialog doesn't stop the page behind it from scrolling on iOS.
    document.documentElement.style.overflow = "hidden";
  }

  return (
    <>
      <button type="button" aria-label={label} onClick={open} className="absolute inset-0 sm:hidden" />
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
        className="mt-auto max-h-[85dvh] w-full max-w-none overflow-y-auto overscroll-contain rounded-t-2xl bg-white text-left backdrop:bg-ink/60"
      >
        <div className="relative">
          {children}
          <button
            type="button"
            aria-label={closeLabel}
            onClick={() => dialogRef.current?.close()}
            className="absolute top-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-md"
          >
            <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 3l10 10M13 3L3 13" />
            </svg>
          </button>
        </div>
      </dialog>
    </>
  );
}
