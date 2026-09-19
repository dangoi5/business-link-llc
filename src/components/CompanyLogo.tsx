import Image from "next/image";

const brandIcon = {
  src: "/branding/business-link-icon.png",
  width: 996,
  height: 628,
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
    return (
      <span className={`inline-flex items-center gap-2 sm:gap-2.5 ${className}`.trim()}>
        <BrandIcon decorative priority={priority} className="shrink-0" />
        <WordmarkImage onDark={onDark} priority={priority} />
      </span>
    );
  }

  if (variant === "mark") {
    return <BrandIcon className={className} priority={priority} />;
  }

  return <WordmarkImage onDark={onDark} className={className} priority={priority} />;
}
