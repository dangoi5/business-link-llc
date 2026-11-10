"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export type ReelItem = {
  key: string;
  name: string;
  image: string;
  category: string;
  href: string;
};

/** Seconds for one full loop of the list. */
const LOOP_SECONDS_DESKTOP = 125;
const LOOP_SECONDS_PHONE = 92;
/** How far a pointer must move before a press counts as a drag rather than a tap. */
const DRAG_THRESHOLD = 6;

/**
 * Moving product shelf. The list is rendered twice and the offset wraps at half the track,
 * so it loops seamlessly. It drifts on its own, pauses only while held or keyboard-focused,
 * and can be dragged sideways with a finger or mouse.
 */
export function ProductReel({ items }: { items: ReelItem[] }) {
  const reelRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reel = reelRef.current;
    const track = trackRef.current;
    if (!reel || !track) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const phone = window.matchMedia("(max-width: 767px)");

    let offset = 0;
    let last = performance.now();
    let frame = 0;
    let focused = false;
    let pressed = false;
    let dragging = false;
    let justDragged = false;
    let pointerId = -1;
    let startX = 0;
    let startOffset = 0;

    const half = () => track.scrollWidth / 2;
    const wrapOffset = (value: number) => {
      const h = half();
      return h > 0 ? ((value % h) + h) % h : 0;
    };
    const render = () => {
      track.style.transform = `translate3d(${-offset}px, 0, 0)`;
    };

    const tick = (now: number) => {
      const elapsed = Math.min(now - last, 100);
      last = now;
      if (!pressed && !focused && !reduceMotion.matches && !document.hidden) {
        const loopMs = (phone.matches ? LOOP_SECONDS_PHONE : LOOP_SECONDS_DESKTOP) * 1000;
        offset = wrapOffset(offset + (half() * elapsed) / loopMs);
        render();
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      pressed = true;
      dragging = false;
      pointerId = event.pointerId;
      startX = event.clientX;
      startOffset = offset;
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!pressed || event.pointerId !== pointerId) return;
      const dx = event.clientX - startX;
      if (!dragging) {
        if (Math.abs(dx) < DRAG_THRESHOLD) return;
        dragging = true;
        reel.setPointerCapture(pointerId);
        reel.classList.add("is-dragging");
      }
      offset = wrapOffset(startOffset - dx);
      render();
    };

    const endPress = (event: PointerEvent) => {
      if (event.pointerId !== pointerId) return;
      if (dragging) {
        justDragged = true;
        // A click follows pointerup; let it be swallowed, then clear the flag.
        setTimeout(() => {
          justDragged = false;
        }, 0);
      }
      pressed = false;
      dragging = false;
      pointerId = -1;
      reel.classList.remove("is-dragging");
      last = performance.now();
    };

    // A drag should not also open the product it ended on.
    const onClick = (event: MouseEvent) => {
      if (!justDragged) return;
      event.preventDefault();
      event.stopPropagation();
    };

    // Only keyboard focus pauses the reel; a mouse press also focuses the link it lands on.
    const onFocusIn = (event: FocusEvent) => {
      focused = (event.target as Element).matches(":focus-visible");
    };
    const onFocusOut = (event: FocusEvent) => {
      if (!reel.contains(event.relatedTarget as Node | null)) focused = false;
    };
    const onResize = () => {
      offset = wrapOffset(offset);
      render();
    };

    reel.addEventListener("pointerdown", onPointerDown);
    reel.addEventListener("pointermove", onPointerMove);
    reel.addEventListener("pointerup", endPress);
    reel.addEventListener("pointercancel", endPress);
    reel.addEventListener("click", onClick, true);
    reel.addEventListener("focusin", onFocusIn);
    reel.addEventListener("focusout", onFocusOut);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      reel.removeEventListener("pointerdown", onPointerDown);
      reel.removeEventListener("pointermove", onPointerMove);
      reel.removeEventListener("pointerup", endPress);
      reel.removeEventListener("pointercancel", endPress);
      reel.removeEventListener("click", onClick, true);
      reel.removeEventListener("focusin", onFocusIn);
      reel.removeEventListener("focusout", onFocusOut);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div ref={reelRef} className="reel overflow-hidden border-y-2 border-ink bg-white">
      <div ref={trackRef} className="reel-track">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0">
            {items.map((item, index) => (
              <li key={item.key} className="w-[8.5rem] shrink-0 border-r border-ink md:w-[min(14rem,31vh)]">
                <Link
                  href={item.href}
                  tabIndex={copy === 1 ? -1 : undefined}
                  draggable={false}
                  className="group block"
                >
                  <span className="relative block aspect-square overflow-hidden bg-white">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      draggable={false}
                      loading={copy === 0 && index < 10 ? "eager" : "lazy"}
                      className="object-cover"
                      sizes="224px"
                    />
                  </span>
                  <span className="block border-t border-ink px-3 py-2.5 transition-colors duration-150 group-hover:bg-gold">
                    <span className="block truncate text-sm font-semibold text-ink">{item.name}</span>
                    <span className="hero-tag mt-0.5 block truncate text-slate group-hover:text-ink">
                      {item.category}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
