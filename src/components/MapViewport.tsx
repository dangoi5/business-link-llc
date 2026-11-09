"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const MAX_ZOOM = 20;
const LABEL_BASE_PX = 11;
const LEADER_DOT_PX = 1.75;
/** When the desktop shape trims the world, how much comes off the top (the empty Arctic). */
const CROP_TOP_SHARE = 0.78;
const DOUBLE_TAP_MS = 300;
const MOVE_THRESHOLD_PX = 6;

type View = { x: number; y: number; w: number };
type ZoomState = { zoomed: boolean; atMax: boolean };
type Tip = { name: string; status: string | null; x: number; y: number; width: number };

type Controller = {
  zoomBy: (factor: number) => void;
  reset: () => void;
  destroy: () => void;
};

/**
 * All gesture handling lives outside React: the map has hundreds of heavy
 * paths, so each frame writes straight to the SVG instead of re-rendering.
 */
function createController(
  svg: SVGSVGElement,
  worldW: number,
  worldH: number,
  onZoom: (state: ZoomState) => void,
  onTip: (tip: Tip | null) => void,
): Controller {
  const events = new AbortController();
  const listen = { signal: events.signal };
  const active = { signal: events.signal, passive: false };

  const labelGroup = svg.querySelector("[data-map-labels]");
  const labels = Array.from(svg.querySelectorAll<SVGTextElement>("[data-min-scale]")).map((el) => ({
    el,
    min: Number(el.dataset.minScale),
    minZoom: Number(el.dataset.minZoom),
    shown: false,
  }));
  const scaleStart = Number(labelGroup?.getAttribute("data-scale-start"));
  const scaleRatio = Number(labelGroup?.getAttribute("data-scale-ratio"));
  const marketLabels = Array.from(svg.querySelectorAll<SVGGElement>("[data-placements]")).map((el) => ({
    el,
    line: el.querySelector("line"),
    dot: el.querySelector("circle"),
    text: el.querySelector("text"),
    x: Number(el.dataset.x),
    y: Number(el.dataset.y),
    minZoom: Number(el.dataset.minZoom),
    placements: (el.dataset.placements ?? "")
      .split(";")
      .map((entry) => (entry ? entry.split(",").map(Number) : null)),
    shown: false,
  }));
  const markers = Array.from(svg.querySelectorAll<SVGCircleElement>("[data-map-marker]")).map((el) => ({
    el,
    radius: Number(el.dataset.mapMarker),
  }));

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const desktop = window.matchMedia("(min-width: 1024px)");
  const minW = worldW / MAX_ZOOM;
  const clampNumber = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

  const naturalAspect = worldH / worldW;

  /** Height/width of the rendered map; wider than the world on desktop. */
  function measureAspect() {
    const rect = svg.getBoundingClientRect();
    if (!rect.width) return naturalAspect;
    const measured = rect.height / rect.width;
    // Ignore pixel rounding, which would otherwise feed back into the layout.
    return Math.abs(measured - naturalAspect) < 0.01 ? naturalAspect : Math.min(measured, naturalAspect);
  }

  let aspect = measureAspect();
  const homeY = () => (worldH - worldW * aspect) * CROP_TOP_SHARE;
  const homeView = (): View => ({ x: 0, y: homeY(), w: worldW });

  function clampView(next: View): View {
    const w = clampNumber(next.w, minW, worldW);
    const h = w * aspect;
    const free = Math.max(worldH - h, 0);
    // At full size the view sits on the home crop; zooming opens up the trimmed edges.
    const opened = clampNumber((worldW - w) / (worldW / 2), 0, 1);
    const home = Math.min(homeY(), free);
    return {
      w,
      x: clampNumber(next.x, 0, worldW - w),
      y: clampNumber(next.y, home * (1 - opened), home + (free - home) * opened),
    };
  }

  let view: View = homeView();
  let target: View | null = null;
  let screenWidth = svg.getBoundingClientRect().width;
  let frame = 0;
  let animationFrame = 0;
  let lastZoomState: ZoomState = { zoomed: false, atMax: false };

  function paint() {
    frame = 0;
    if (!screenWidth) return;
    svg.setAttribute("viewBox", `${view.x} ${view.y} ${view.w} ${view.w * aspect}`);

    const scale = screenWidth / view.w;
    const zoom = worldW / view.w;
    labelGroup?.setAttribute("font-size", String(LABEL_BASE_PX / scale));
    for (const marker of markers) marker.el.setAttribute("r", String(marker.radius / scale));
    for (const label of labels) {
      const shown = zoom >= label.minZoom && scale >= label.min;
      if (shown !== label.shown) {
        label.shown = shown;
        label.el.setAttribute("display", shown ? "inline" : "none");
      }
    }

    const step = Math.floor(Math.log(scale / scaleStart) / Math.log(scaleRatio) + 1e-9);
    for (const label of marketLabels) {
      const placement = step < 0 ? null : label.placements[Math.min(step, label.placements.length - 1)];
      // Desktop has room for market names at full view; phones and tablets wait for zoom.
      const shown = (zoom >= label.minZoom || desktop.matches) && placement !== null;
      if (shown !== label.shown) {
        label.shown = shown;
        label.el.setAttribute("display", shown ? "inline" : "none");
      }
      if (!shown || !placement) continue;

      const [offsetX, offsetY, leaderX, leaderY] = placement;
      label.text?.setAttribute("x", String(label.x + offsetX / scale));
      label.text?.setAttribute("y", String(label.y + offsetY / scale));
      const hasLeader = leaderX !== 0 || leaderY !== 0;
      label.line?.setAttribute("display", hasLeader ? "inline" : "none");
      label.dot?.setAttribute("display", hasLeader ? "inline" : "none");
      if (hasLeader) {
        label.line?.setAttribute("x2", String(label.x + leaderX / scale));
        label.line?.setAttribute("y2", String(label.y + leaderY / scale));
        label.dot?.setAttribute("r", String(LEADER_DOT_PX / scale));
      }
    }

    const zoomState = { zoomed: zoom > 1.01, atMax: zoom >= MAX_ZOOM - 0.01 };
    if (zoomState.zoomed !== lastZoomState.zoomed || zoomState.atMax !== lastZoomState.atMax) {
      lastZoomState = zoomState;
      onZoom(zoomState);
    }
  }

  function requestPaint() {
    if (!frame) frame = requestAnimationFrame(paint);
  }

  function setView(next: View) {
    view = clampView(next);
    requestPaint();
  }

  function stopAnimation() {
    if (animationFrame) cancelAnimationFrame(animationFrame);
    animationFrame = 0;
    target = null;
  }

  function animateTo(next: View) {
    stopAnimation();
    const goal = clampView(next);
    if (reducedMotion.matches) {
      setView(goal);
      return;
    }
    target = goal;
    const from = view;
    const startedAt = performance.now();
    const step = (now: number) => {
      const t = Math.min((now - startedAt) / 260, 1);
      const eased = 1 - (1 - t) ** 3;
      setView({
        x: from.x + (goal.x - from.x) * eased,
        y: from.y + (goal.y - from.y) * eased,
        w: from.w + (goal.w - from.w) * eased,
      });
      if (t < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        animationFrame = 0;
        target = null;
      }
    };
    animationFrame = requestAnimationFrame(step);
  }

  /** The new view that keeps the map point under (clientX, clientY) in place. */
  function viewAround(base: View, clientX: number, clientY: number, factor: number): View {
    const rect = svg.getBoundingClientRect();
    const fx = (clientX - rect.left) / rect.width;
    const fy = (clientY - rect.top) / rect.height;
    const w = clampNumber(base.w / factor, minW, worldW);
    return { w, x: base.x + fx * base.w - fx * w, y: base.y + fy * base.w * aspect - fy * w * aspect };
  }

  function zoomAtPoint(clientX: number, clientY: number, factor: number, animated: boolean) {
    const next = viewAround(target ?? view, clientX, clientY, factor);
    if (animated) {
      animateTo(next);
    } else {
      stopAnimation();
      setView(next);
    }
  }

  function zoomBy(factor: number) {
    const rect = svg.getBoundingClientRect();
    zoomAtPoint(rect.left + rect.width / 2, rect.top + rect.height / 2, factor, true);
  }

  const isZoomed = () => view.w < worldW - 0.01;
  const unitsPerPx = () => view.w / screenWidth;

  let highlighted: Element | null = null;

  function setHighlight(el: Element | null) {
    if (el === highlighted) return;
    highlighted?.removeAttribute("data-active");
    el?.setAttribute("data-active", "");
    highlighted = el;
  }

  function hideTip() {
    setHighlight(null);
    onTip(null);
  }

  function showTipFor(eventTarget: EventTarget | null, clientX: number, clientY: number) {
    const el = eventTarget instanceof Element ? eventTarget.closest<SVGElement>("[data-name]") : null;
    if (!el) {
      hideTip();
      return;
    }
    setHighlight(el);
    const rect = svg.getBoundingClientRect();
    onTip({
      name: el.dataset.name ?? "",
      status: el.dataset.status ?? null,
      x: clientX - rect.left,
      y: clientY - rect.top,
      width: rect.width,
    });
  }

  let lastTap = { time: 0, x: 0, y: 0 };

  function handleTap(eventTarget: EventTarget | null, clientX: number, clientY: number) {
    const now = performance.now();
    const isDouble =
      now - lastTap.time < DOUBLE_TAP_MS &&
      Math.hypot(clientX - lastTap.x, clientY - lastTap.y) < 30;
    if (isDouble) {
      lastTap = { time: 0, x: 0, y: 0 };
      hideTip();
      zoomAtPoint(clientX, clientY, 2, true);
      return;
    }
    lastTap = { time: now, x: clientX, y: clientY };
    showTipFor(eventTarget, clientX, clientY);
  }

  // Mouse and pen.
  let drag: { x: number; y: number; start: View; moved: boolean; pointerId: number } | null = null;
  let suppressClick = false;

  svg.addEventListener(
    "pointerdown",
    (event) => {
      if (event.pointerType === "touch" || event.button !== 0 || !isZoomed()) return;
      stopAnimation();
      drag = { x: event.clientX, y: event.clientY, start: view, moved: false, pointerId: event.pointerId };
    },
    listen,
  );

  svg.addEventListener(
    "pointermove",
    (event) => {
      if (event.pointerType === "touch") return;
      if (!drag) {
        showTipFor(event.target, event.clientX, event.clientY);
        return;
      }
      const dx = event.clientX - drag.x;
      const dy = event.clientY - drag.y;
      if (!drag.moved) {
        if (Math.hypot(dx, dy) < MOVE_THRESHOLD_PX) return;
        drag.moved = true;
        svg.setPointerCapture(drag.pointerId);
        hideTip();
      }
      const units = drag.start.w / screenWidth;
      setView({ ...drag.start, x: drag.start.x - dx * units, y: drag.start.y - dy * units });
    },
    listen,
  );

  const endDrag = () => {
    if (drag?.moved) suppressClick = true;
    drag = null;
  };
  svg.addEventListener("pointerup", endDrag, listen);
  svg.addEventListener("pointercancel", endDrag, listen);
  svg.addEventListener(
    "pointerleave",
    (event) => {
      if (event.pointerType !== "touch" && !drag) hideTip();
    },
    listen,
  );

  svg.addEventListener(
    "click",
    (event) => {
      if (suppressClick) {
        suppressClick = false;
        return;
      }
      handleTap(event.target, event.clientX, event.clientY);
    },
    listen,
  );

  // Plain scrolling keeps moving the page; Ctrl/Cmd + scroll and trackpad pinch zoom the map.
  svg.addEventListener(
    "wheel",
    (event) => {
      if (!event.ctrlKey && !event.metaKey) return;
      event.preventDefault();
      hideTip();
      zoomAtPoint(event.clientX, event.clientY, Math.exp(-event.deltaY * 0.01), false);
    },
    active,
  );

  // Touch.
  type TouchGesture =
    | { kind: "pan"; x: number; y: number; start: View; moved: boolean; target: EventTarget | null }
    | { kind: "pinch"; distance: number; midX: number; midY: number; start: View };
  let gesture: TouchGesture | null = null;

  const distanceBetween = (a: Touch, b: Touch) => Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);

  function beginPinch(touches: TouchList) {
    const [a, b] = [touches[0], touches[1]];
    stopAnimation();
    hideTip();
    gesture = {
      kind: "pinch",
      distance: Math.max(distanceBetween(a, b), 1),
      midX: (a.clientX + b.clientX) / 2,
      midY: (a.clientY + b.clientY) / 2,
      start: view,
    };
  }

  function beginPan(touch: Touch, moved: boolean) {
    gesture = {
      kind: "pan",
      x: touch.clientX,
      y: touch.clientY,
      start: view,
      moved,
      target: touch.target,
    };
  }

  svg.addEventListener(
    "touchstart",
    (event) => {
      if (event.touches.length >= 2) {
        if (event.cancelable) event.preventDefault();
        beginPinch(event.touches);
      } else {
        stopAnimation();
        beginPan(event.touches[0], false);
      }
    },
    active,
  );

  svg.addEventListener(
    "touchmove",
    (event) => {
      if (!gesture) return;
      if (gesture.kind === "pinch") {
        if (event.touches.length < 2) return;
        if (event.cancelable) event.preventDefault();
        const [a, b] = [event.touches[0], event.touches[1]];
        const factor = distanceBetween(a, b) / gesture.distance;
        const next = viewAround(gesture.start, gesture.midX, gesture.midY, factor);
        const rect = svg.getBoundingClientRect();
        const unitsAfter = next.w / rect.width;
        // Follow the fingers' midpoint so a pinch can drag as well as scale.
        setView({
          ...next,
          x: next.x - ((a.clientX + b.clientX) / 2 - gesture.midX) * unitsAfter,
          y: next.y - ((a.clientY + b.clientY) / 2 - gesture.midY) * unitsAfter,
        });
        return;
      }

      const touch = event.touches[0];
      const dx = touch.clientX - gesture.x;
      const dy = touch.clientY - gesture.y;
      if (!gesture.moved && Math.hypot(dx, dy) >= MOVE_THRESHOLD_PX) {
        gesture.moved = true;
        hideTip();
      }
      // At full size one finger must keep scrolling the page.
      if (gesture.start.w < worldW - 0.01) {
        if (event.cancelable) event.preventDefault();
        if (gesture.moved) {
          const units = gesture.start.w / screenWidth;
          setView({ ...gesture.start, x: gesture.start.x - dx * units, y: gesture.start.y - dy * units });
        }
      }
    },
    active,
  );

  svg.addEventListener(
    "touchend",
    (event) => {
      if (!gesture) return;
      if (event.touches.length >= 2) {
        beginPinch(event.touches);
        return;
      }
      if (event.touches.length === 1) {
        beginPan(event.touches[0], true);
        return;
      }
      const finished = gesture;
      gesture = null;
      if (finished.kind === "pan" && !finished.moved) {
        // Handled here rather than via click, which iOS can drop on SVG shapes.
        if (event.cancelable) event.preventDefault();
        const touch = event.changedTouches[0];
        handleTap(finished.target, touch.clientX, touch.clientY);
      }
    },
    active,
  );

  svg.addEventListener(
    "touchcancel",
    () => {
      gesture = null;
    },
    listen,
  );

  // Stops Safari zooming the whole page when a pinch starts on the map.
  svg.addEventListener("gesturestart", (event) => event.preventDefault(), active);

  svg.addEventListener(
    "keydown",
    (event) => {
      const step = unitsPerPx() * 60;
      const pans: Record<string, [number, number]> = {
        ArrowLeft: [-step, 0],
        ArrowRight: [step, 0],
        ArrowUp: [0, -step],
        ArrowDown: [0, step],
      };
      const pan = pans[event.key];
      if (pan) {
        if (!isZoomed()) return;
        event.preventDefault();
        hideTip();
        animateTo({ ...view, x: view.x + pan[0], y: view.y + pan[1] });
      } else if (event.key === "+" || event.key === "=") {
        event.preventDefault();
        zoomBy(2);
      } else if (event.key === "-") {
        event.preventDefault();
        zoomBy(0.5);
      } else if (event.key === "0") {
        event.preventDefault();
        hideTip();
        animateTo(homeView());
      }
    },
    active,
  );

  const resizeObserver = new ResizeObserver(() => {
    screenWidth = svg.getBoundingClientRect().width;
    const nextAspect = measureAspect();
    if (nextAspect !== aspect) {
      // Crossing the desktop breakpoint changes the map's shape.
      aspect = nextAspect;
      stopAnimation();
      view = homeView();
    }
    hideTip();
    requestPaint();
  });
  resizeObserver.observe(svg);
  requestPaint();

  return {
    zoomBy: (factor) => {
      hideTip();
      zoomBy(factor);
    },
    reset: () => {
      hideTip();
      animateTo(homeView());
    },
    destroy: () => {
      events.abort();
      resizeObserver.disconnect();
      stopAnimation();
      if (frame) cancelAnimationFrame(frame);
    },
  };
}

const controlClass =
  "flex h-10 w-10 items-center justify-center bg-white text-ink transition-colors hover:bg-surface disabled:cursor-not-allowed disabled:text-slate/40";

export function MapViewport({
  width,
  height,
  label,
  variant,
  strings,
  children,
}: {
  width: number;
  height: number;
  label: string;
  variant: "dark" | "light";
  strings: { zoomIn: string; zoomOut: string; reset: string; hint: string };
  children: ReactNode;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const controllerRef = useRef<Controller | null>(null);
  const [zoomState, setZoomState] = useState<ZoomState>({ zoomed: false, atMax: false });
  const [tip, setTip] = useState<Tip | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const controller = createController(svg, width, height, setZoomState, setTip);
    controllerRef.current = controller;
    return () => {
      controller.destroy();
      controllerRef.current = null;
    };
  }, [width, height]);

  const dark = variant === "dark";

  return (
    <div>
      <div className="relative">
        <svg
          ref={svgRef}
          role="img"
          aria-label={label}
          tabIndex={0}
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio="xMidYMax slice"
          // Below full zoom the page still scrolls; once zoomed, one finger moves the map.
          style={{ touchAction: zoomState.zoomed ? "none" : "pan-x pan-y" }}
          className={`h-auto w-full rounded-lg outline-none lg:aspect-[1.9/1] select-none focus-visible:ring-2 focus-visible:ring-accent [&_[data-active]]:opacity-70 [&_[data-name]]:cursor-pointer ${
            zoomState.zoomed ? "cursor-grab active:cursor-grabbing" : ""
          }`}
        >
          {children}
        </svg>

        <div className="absolute bottom-2 left-2 flex flex-col divide-y divide-line overflow-hidden rounded-lg border border-line shadow-sm">
          <button
            type="button"
            aria-label={strings.zoomIn}
            title={strings.zoomIn}
            disabled={zoomState.atMax}
            onClick={() => controllerRef.current?.zoomBy(2)}
            className={controlClass}
          >
            <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M8 3v10M3 8h10" />
            </svg>
          </button>
          <button
            type="button"
            aria-label={strings.zoomOut}
            title={strings.zoomOut}
            disabled={!zoomState.zoomed}
            onClick={() => controllerRef.current?.zoomBy(0.5)}
            className={controlClass}
          >
            <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 8h10" />
            </svg>
          </button>
          {zoomState.zoomed ? (
            <button
              type="button"
              aria-label={strings.reset}
              title={strings.reset}
              onClick={() => controllerRef.current?.reset()}
              className={controlClass}
            >
              <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8a5 5 0 1 0 1.6-3.7M3 2.5v3h3" />
              </svg>
            </button>
          ) : null}
        </div>

        {tip ? (
          <div
            role="status"
            className={`pointer-events-none absolute z-10 max-w-40 rounded-md px-2.5 py-1.5 text-center shadow-lg ${
              dark ? "bg-white text-ink" : "bg-ink text-white"
            }`}
            style={{
              left: Math.min(Math.max(tip.x, Math.min(84, tip.width / 2)), Math.max(tip.width - 84, tip.width / 2)),
              top: tip.y,
              transform: tip.y > 70 ? "translate(-50%, calc(-100% - 12px))" : "translate(-50%, 16px)",
            }}
          >
            <p className="text-xs font-semibold leading-tight">{tip.name}</p>
            {tip.status ? <p className="mt-0.5 text-[11px] leading-tight opacity-75">{tip.status}</p> : null}
          </div>
        ) : null}
      </div>

      <p className={`mt-2 px-1 text-xs leading-relaxed ${dark ? "text-white/60" : "text-slate"}`}>{strings.hint}</p>
    </div>
  );
}
