"use client";

import { useRef, type ReactNode } from "react";

/**
 * Tap target covering a product card that opens the product's details window:
 * a bottom sheet on phones and tablets, a centered window on desktop.
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
        className="product-modal mt-auto max-h-[92dvh] w-full max-w-none overflow-y-auto overscroll-contain rounded-t-3xl bg-white text-left lg:m-auto lg:max-h-none lg:w-[min(1280px,calc(100vw-4rem))] lg:overflow-hidden lg:rounded-3xl"
      >
        <div className="relative">
          {children}
          <button
            type="button"
            aria-label={closeLabel}
            // Start focus here rather than on the first link, so nothing looks pre-selected.
            autoFocus
            onClick={() => dialogRef.current?.close()}
            className="absolute top-3 right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink shadow-md transition hover:bg-surface lg:top-5 lg:right-5 lg:h-12 lg:w-12"
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
