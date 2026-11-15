"use client";

import "flag-icons/css/flag-icons.min.css";
import { Combobox } from "@base-ui/react/combobox";
import { useId, useMemo, useRef, useState } from "react";
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

type CountryOption = (typeof phoneCountries)[number] & { label: string };

function Flag({ iso }: { iso: string }) {
  return (
    <span
      aria-hidden="true"
      className={`fi fi-${iso.toLowerCase()} !h-4 !w-6 shrink-0 rounded-[3px] bg-cover shadow-[0_0_0_1px_rgba(0,0,0,0.08)]`}
    />
  );
}

/** Matches a country by name, ISO code, or dial code (with or without the leading +). */
function matchesCountry(option: CountryOption, query: string) {
  const q = query.trim().toLowerCase().replace(/^\+/, "");
  if (!q) return true;
  return option.label.toLowerCase().includes(q) || option.iso.toLowerCase() === q || option.dial.startsWith(q);
}

/**
 * Phone number with a searchable country-code picker. Base UI's Combobox supplies the
 * listbox keyboard behaviour (arrow keys, Enter, Escape, focus return).
 */
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
  const fieldRef = useRef<HTMLDivElement>(null);
  const [iso, setIso] = useState(DEFAULT_PHONE_COUNTRY);
  const [national, setNational] = useState("");

  const options = useMemo<CountryOption[]>(() => {
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

  const maxDigitsFor = (c: { format: string; dial: string }) =>
    Math.min(Math.max(digitCount(c.format), 10), E164_MAX - c.dial.length);

  function choose(next: CountryOption | null) {
    if (!next) return;
    setIso(next.iso);
    setNational((current) => formatNational(current, next.format, maxDigitsFor(next)));
  }

  const value = national ? `+${country.dial} ${national}` : "";

  return (
    <div className="relative block text-sm">
      <label htmlFor={`${id}-number`} className="font-medium text-ink">
        {t(locale, ui.form.phone)}
      </label>

      <div
        ref={fieldRef}
        className={`mt-1.5 flex items-stretch rounded-lg border border-line bg-white transition focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/25 ${
          disabled ? "opacity-70" : ""
        }`}
      >
        <Combobox.Root
          items={options}
          value={country}
          onValueChange={choose}
          filter={matchesCountry}
          isItemEqualToValue={(a, b) => a.iso === b.iso}
          itemToStringLabel={(option) => option.label}
          autoHighlight
          disabled={disabled}
        >
          <Combobox.Trigger
            aria-label={`${t(locale, ui.form.phoneCountry)}: ${country.label} +${country.dial}`}
            className="group flex shrink-0 items-center gap-2 rounded-l-lg border-r border-line px-3 py-2.5 transition select-none hover:bg-surface focus-visible:outline-none"
          >
            <Flag iso={country.iso} />
            <span className="tabular-nums text-ink">+{country.dial}</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className="h-4 w-4 text-slate transition group-data-[popup-open]:rotate-180"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m5 8 5 5 5-5" />
            </svg>
          </Combobox.Trigger>

          <Combobox.Portal>
            {/* Anchored to the whole field so the list lines up with it on phones. */}
            <Combobox.Positioner anchor={fieldRef} align="start" sideOffset={8} className="z-30 outline-none">
              <Combobox.Popup
                aria-label={t(locale, ui.form.phoneSearch)}
                className="w-[var(--anchor-width)] origin-[var(--transform-origin)] overflow-hidden rounded-xl border border-line bg-white text-sm shadow-xl shadow-ink/10 outline-none transition-[scale,opacity] duration-150 ease-out data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0 sm:w-80"
              >
                <div className="border-b border-line p-2">
                  <Combobox.Input
                    placeholder={t(locale, ui.form.phoneSearch)}
                    aria-label={t(locale, ui.form.phoneSearch)}
                    enterKeyHint="search"
                    // 16px keeps iOS from zooming the page when the field gains focus.
                    className="w-full rounded-md bg-surface px-3 py-2 text-base outline-none placeholder:text-slate/60 focus:ring-2 focus:ring-brand/25 sm:text-sm"
                  />
                </div>
                <Combobox.Empty className="px-3 py-3 text-sm text-slate empty:hidden">
                  {t(locale, ui.form.phoneNoResults)}
                </Combobox.Empty>
                <Combobox.List className="max-h-64 overflow-y-auto overscroll-contain py-1 empty:hidden">
                  {(option: CountryOption) => (
                    <Combobox.Item
                      key={option.iso}
                      value={option}
                      className="flex w-full cursor-default items-center gap-3 px-3 py-2 text-left text-ink outline-none select-none data-[highlighted]:bg-surface data-[selected]:bg-brand/5 data-[selected]:font-semibold data-[selected]:text-brand"
                    >
                      <Flag iso={option.iso} />
                      <span className="min-w-0 flex-1 truncate">{option.label}</span>
                      <span className="tabular-nums text-slate">+{option.dial}</span>
                    </Combobox.Item>
                  )}
                </Combobox.List>
              </Combobox.Popup>
            </Combobox.Positioner>
          </Combobox.Portal>
        </Combobox.Root>

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
    </div>
  );
}
