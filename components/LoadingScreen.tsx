"use client";

export default function LoadingScreen() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="animate-pulse text-[#6320ce] text-xl font-bold">
        Loading...
      </div>
    </div>
  );
}
