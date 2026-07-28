"use client";
import { useState } from "react";
import Link from "next/link";

export default function Logo() {
  const [logoError, setLogoError] = useState(false);

  return (
    <Link href="/" className="relative flex h-12 w-40 shrink-0 items-center justify-center">
      {logoError ? (
        <div className="text-2xl font-bold text-[#6320ce]">MAKKN</div>
      ) : (
        <img
          src="/makkn-logo.webp"
          alt="MAKKN Logo"
          className="pointer-events-none absolute h-40 w-auto max-w-none"
          onError={() => setLogoError(true)}
        />
      )}
    </Link>
  );
}
