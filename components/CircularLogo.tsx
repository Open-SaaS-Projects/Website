"use client";
import { useState } from "react";
import Link from "next/link";

interface CircularLogoProps {
  size?: "small" | "medium" | "large";
  asLink?: boolean;
}

export default function CircularLogo({
  size = "medium",
  asLink = false,
}: CircularLogoProps) {
  const [logoError, setLogoError] = useState(false);

  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "w-16 h-16";
      case "large":
        return "w-32 h-32";
      default:
        return "w-24 h-24";
    }
  };

  const logoContent = (
    <>
      {logoError ? (
        <div className={`${getSizeClasses()} mx-auto bg-[#6320ce] rounded-full flex items-center justify-center text-white text-2xl font-bold`}>
          M
        </div>
      ) : (
        <img
          src="/makkn-logo-m.webp"
          alt="MAKKN Logo"
          className={`${getSizeClasses()} mx-auto`}
          onError={() => setLogoError(true)}
        />
      )}
    </>
  );

  if (asLink) {
    return (
      <Link href="/" className="flex items-center justify-center">
        {logoContent}
      </Link>
    );
  }

  return (
    <div className="flex items-center justify-center">
      {logoContent}
    </div>
  );
}
