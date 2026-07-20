"use client";

interface ProductLogoProps {
  slug: string;
  size?: number;
  className?: string;
}

function renderGlyph(slug: string) {
  switch (slug) {
    case "insight":
      return (
        <g stroke="#fff" strokeWidth="4" strokeLinecap="round">
          <line x1="24" y1="52" x2="24" y2="34" />
          <line x1="40" y1="52" x2="40" y2="24" />
          <line x1="56" y1="52" x2="56" y2="40" />
        </g>
      );
    case "desk":
      return (
        <path
          d="M22 26h36a4 4 0 0 1 4 4v18a4 4 0 0 1-4 4H36l-10 8v-8h-4a4 4 0 0 1-4-4V30a4 4 0 0 1 4-4Z"
          fill="#fff"
        />
      );
    case "guard":
      return (
        <path
          d="M40 20l16 6v12c0 11-6.8 18.7-16 22-9.2-3.3-16-11-16-22V26l16-6Z"
          fill="#fff"
        />
      );
    case "docs":
      return (
        <g>
          <path
            d="M28 20h16l8 8v32a2 2 0 0 1-2 2H28a2 2 0 0 1-2-2V22a2 2 0 0 1 2-2Z"
            fill="#fff"
          />
          <path d="M44 20l8 8h-6a2 2 0 0 1-2-2v-6Z" fill="#D8CCFF" />
          <rect x="30" y="36" width="20" height="3" rx="1.5" fill="#6320ce" />
          <rect x="30" y="44" width="20" height="3" rx="1.5" fill="#6320ce" />
          <rect x="30" y="52" width="14" height="3" rx="1.5" fill="#6320ce" />
        </g>
      );
    default:
      return null;
  }
}

export default function ProductLogo({
  slug,
  size = 64,
  className = "",
}: ProductLogoProps) {
  const gradientId = `makkn-logo-gradient-${slug}`;

  return (
    <div
      className={`transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_18px_rgba(99,32,206,0.55)] ${className}`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1="0"
            y1="0"
            x2="80"
            y2="80"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6320ce" />
            <stop offset="1" stopColor="#7C4DFF" />
          </linearGradient>
        </defs>
        <rect width="80" height="80" rx="20" fill={`url(#${gradientId})`} />
        {renderGlyph(slug)}
      </svg>
    </div>
  );
}
