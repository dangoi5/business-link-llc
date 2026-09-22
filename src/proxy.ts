import { geolocation } from "@vercel/functions";
import { NextRequest, NextResponse } from "next/server";
import { isLocale, localizedHref, resolveVisitorLocale } from "@/i18n/config";

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

  const geo = geolocation(request);
  const locale = resolveVisitorLocale({
    cookieLocale: request.cookies.get("NEXT_LOCALE")?.value,
    countryCode: geo.country ?? request.headers.get("x-vercel-ip-country"),
    acceptLanguage: request.headers.get("accept-language"),
  });

  const url = request.nextUrl.clone();
  url.pathname = localizedHref(locale, pathname);
  const response = NextResponse.redirect(url);
  // Persist geo/language choice so subsequent visits stay consistent
  if (!request.cookies.get("NEXT_LOCALE")) {
    response.cookies.set("NEXT_LOCALE", locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });
  }
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"],
};
