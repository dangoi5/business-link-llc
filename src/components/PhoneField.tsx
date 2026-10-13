"use client";

import "flag-icons/css/flag-icons.min.css";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { Locale } from "@/i18n/config";
import { t } from "@/i18n/t";
import { ui } from "@/i18n/ui";
import {
  DEFAULT_PHONE_COUNTRY,
  digitCount,
  exampleFromFormat,
  formatNational,
  phoneCountries,
} from "@/lib/phone-countries";

// Total E.164 length is capped at 15 digits including the country code.
const E164_MAX = 15;

function Flag({ iso }: { iso: string }) {
  return (
    <span
      aria-hidden="true"
      className={`fi fi-${iso.toLowerCase()} !h-4 !w-6 shrink-0 rounded-[3px] bg-cover shadow-[0_0_0_1px_rgba(0,0,0,0.08)]`}
    />
  );
}

export function PhoneField({
  locale,
  disabled,
  name = "phone",
}: {
  locale: Locale;
  disabled?: boolean;
  name?: string;
}) {
  const id = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const [iso, setIso] = useState(DEFAULT_PHONE_COUNTRY);
  const [national, setNational] = useState("");
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const options = useMemo(() => {
    let names: Intl.DisplayNames | null = null;
    try {
      names = new Intl.DisplayNames([locale], { type: "region" });
    } catch {
      names = null;
    }
    return phoneCountries
      .map((country) => ({ ...country, label: names?.of(country.iso) ?? country.iso }))
      .sort((a, b) => a.label.localeCompare(b.label, locale));
  }, [locale]);

  const country = options.find((option) => option.iso === iso) ?? options[0];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase().replace(/^\+/, "");
    if (!q) return options;
    return options.filter(
      (option) =>
        option.label.toLowerCase().includes(q) ||
        option.iso.toLowerCase() === q ||
        option.dial.startsWith(q),
    );
  }, [options, query]);

  const maxDigitsFor = (c: { format: string; dial: string }) =>
    Math.min(Math.max(digitCount(c.format), 10), E164_MAX - c.dial.length);

  useEffect(() => {
    if (!open) return;
    searchRef.current?.focus();
    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function choose(next: (typeof options)[number]) {
    setIso(next.iso);
    setNational((current) => formatNational(current, next.format, maxDigitsFor(next)));
    setOpen(false);
    setQuery("");
  }

  const value = national ? `+${country.dial} ${national}` : "";

  return (
    <div ref={rootRef} className="relative block text-sm">
      <label htmlFor={`${id}-number`} className="font-medium text-ink">
        {t(locale, ui.form.phone)}
      </label>

      <div
        className={`mt-1.5 flex items-stretch rounded-lg border border-line bg-white transition focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/25 ${
          disabled ? "opacity-70" : ""
        }`}
      >
        <button
          type="button"
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={`${id}-list`}
          aria-label={`${t(locale, ui.form.phoneCountry)}: ${country.label} +${country.dial}`}
          onClick={() => setOpen((current) => !current)}
          className="flex shrink-0 items-center gap-2 rounded-l-lg border-r border-line px-3 py-2.5 transition hover:bg-surface focus-visible:outline-none"
        >
          <Flag iso={country.iso} />
          <span className="tabular-nums text-ink">+{country.dial}</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className={`h-4 w-4 text-slate transition ${open ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m5 8 5 5 5-5" />
          </svg>
        </button>
        <input
          id={`${id}-number`}
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          value={national}
          disabled={disabled}
          placeholder={exampleFromFormat(country.format)}
          onChange={(event) =>
            setNational(formatNational(event.target.value, country.format, maxDigitsFor(country)))
          }
          className="min-w-0 flex-1 rounded-r-lg bg-transparent px-3 py-2.5 tabular-nums outline-none placeholder:text-slate/50"
        />
      </div>
      <input type="hidden" name={name} value={value} />

      {open ? (
        <div className="absolute left-0 right-0 z-30 mt-2 overflow-hidden rounded-xl border border-line bg-white shadow-xl shadow-ink/10 sm:right-auto sm:w-80">
          <div className="border-b border-line p-2">
            <input
              ref={searchRef}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  if (filtered[0]) choose(filtered[0]);
                }
              }}
              placeholder={t(locale, ui.form.phoneSearch)}
              aria-label={t(locale, ui.form.phoneSearch)}
              className="w-full rounded-md bg-surface px-3 py-2 text-sm outline-none placeholder:text-slate/60 focus:ring-2 focus:ring-brand/25"
            />
          </div>
          <ul id={`${id}-list`} role="listbox" className="max-h-64 overflow-y-auto py-1">
            {filtered.length === 0 ? (
              <li className="px-3 py-3 text-sm text-slate">{t(locale, ui.form.phoneNoResults)}</li>
            ) : (
              filtered.map((option) => {
                const selected = option.iso === iso;
                return (
                  <li key={option.iso} role="option" aria-selected={selected}>
                    <button
                      type="button"
                      onClick={() => choose(option)}
                      className={`flex w-full items-center gap-3 px-3 py-2 text-left transition hover:bg-surface ${
                        selected ? "bg-brand/5 font-semibold text-brand" : "text-ink"
                      }`}
                    >
                      <Flag iso={option.iso} />
                      <span className="min-w-0 flex-1 truncate">{option.label}</span>
                      <span className="tabular-nums text-slate">+{option.dial}</span>
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
