"use client";
import { useState } from "react";
import Link from "next/link";

export default function Logo() {
  const [logoError, setLogoError] = useState(false);

  return (
    <Link href="/" className="flex items-center">
      {logoError ? (
        <div className="h-10 text-[#6320ce] font-bold text-2xl">MAKKN</div>
      ) : (
        <img
          src="/makkn-logo.webp"
          alt="MAKKN Logo"
          className="h-40 w-auto"
          onError={() => setLogoError(true)}
        />
      )}
    </Link>
  );
}
