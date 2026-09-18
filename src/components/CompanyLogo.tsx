import Image from "next/image";

const logos = {
  mark: {
    src: "/company/mark.png",
    onDark: "/company/mark-on-dark.png",
    width: 968,
    height: 923,
  },
  lockup: {
    src: "/company/lockup.png",
    onDark: "/company/lockup-on-dark.png",
    width: 1024,
    height: 320,
  },
  wordmark: {
    src: "/company/wordmark.png",
    onDark: "/company/wordmark-on-dark.png",
    width: 975,
    height: 211,
  },
} as const;

export function CompanyLogo({
  variant = "lockup",
  onDark = false,
  className = "",
  priority = false,
  sizes = "240px",
}: {
  variant?: keyof typeof logos;
  onDark?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const logo = logos[variant];

  return (
    <Image
      src={onDark ? logo.onDark : logo.src}
      alt="Business Link LLC"
      fill
      sizes={sizes}
      className={`object-contain ${className}`.trim()}
      priority={priority}
    />
  );
}
