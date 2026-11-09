import type { ReactNode } from "react";

/**
 * Eases content into place as it enters the viewport. Pure CSS (scroll-driven
 * animation, see globals.css): no JS, and content simply stays put in browsers
 * that don't support it or when reduced motion is requested.
 */
export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
  /** Kept for call-site compatibility; scroll-driven reveals can't be delayed. */
  delay?: number;
}) {
  return <div className={`reveal ${className}`.trim()}>{children}</div>;
}
