import { NextRequest, NextResponse } from "next/server";
import { isLocale, localizedHref, preferredLocale } from "@/i18n/config";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return;
  }

  const first = pathname.split("/")[1];
  if (isLocale(first)) return;

  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  const locale = isLocale(cookieLocale)
    ? cookieLocale
    : preferredLocale(request.headers.get("accept-language"));
  const url = request.nextUrl.clone();
  url.pathname = localizedHref(locale, pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"],
};
