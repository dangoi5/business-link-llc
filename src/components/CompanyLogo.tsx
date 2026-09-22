import Image from "next/image";

/** Gears mark — from squarelogo_onlygears */
const brandIcon = {
  src: "/branding/square-logo-only-gears.png",
  width: 937,
  height: 647,
} as const;

/** Full lockup — gears_andbusinesslinktextfull (darker blue for light backgrounds) */
const lockup = {
  src: "/branding/gears-and-business-link-text-full.png",
  /** gearsandbusinesslinktextfull_lighterblue — for dark / hero backgrounds */
  onDark: "/branding/gears-and-business-link-text-full-lighter-blue.png",
  width: 988,
  height: 202,
} as const;

const wordmark = {
  src: "/company/wordmark.png",
  onDark: "/company/wordmark-on-dark.png",
  width: 975,
  height: 211,
} as const;

function BrandIcon({
  className = "",
  priority = false,
  decorative = false,
}: {
  className?: string;
  priority?: boolean;
  decorative?: boolean;
}) {
  return (
    <Image
      src={brandIcon.src}
      alt={decorative ? "" : "Business Link LLC"}
      width={brandIcon.width}
      height={brandIcon.height}
      className={`h-full w-auto object-contain ${className}`.trim()}
      sizes="80px"
      priority={priority}
    />
  );
}

function LockupImage({
  onDark = false,
  className = "",
  priority = false,
}: {
  onDark?: boolean;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={onDark ? lockup.onDark : lockup.src}
      alt="Business Link LLC"
      width={lockup.width}
      height={lockup.height}
      className={`h-full w-auto object-contain object-left ${className}`.trim()}
      sizes="(max-width: 640px) 200px, 280px"
      priority={priority}
    />
  );
}

function WordmarkImage({
  onDark = false,
  className = "",
  priority = false,
}: {
  onDark?: boolean;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={onDark ? wordmark.onDark : wordmark.src}
      alt="Business Link LLC"
      width={wordmark.width}
      height={wordmark.height}
      className={`h-full w-auto object-contain object-left ${className}`.trim()}
      sizes="240px"
      priority={priority}
    />
  );
}

export function CompanyLogo({
  variant = "lockup",
  onDark = false,
  className = "",
  priority = false,
}: {
  variant?: "mark" | "lockup" | "wordmark";
  onDark?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (variant === "lockup") {
    return <LockupImage onDark={onDark} className={className} priority={priority} />;
  }

  if (variant === "mark") {
    return <BrandIcon className={className} priority={priority} />;
  }

  return <WordmarkImage onDark={onDark} className={className} priority={priority} />;
}
