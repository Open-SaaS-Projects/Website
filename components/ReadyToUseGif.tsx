import React from "react";

interface ReadyToUseGifProps {
  gifUrl: string;
  title: string;
  gifPosition?: "left" | "right";
}

export default function ReadyToUseGif({
  gifUrl,
  title,
  gifPosition = "left",
}: ReadyToUseGifProps) {
  return (
    <div className="flex items-start w-auto justify-center">
      <img
        src={gifUrl}
        alt={title}
        className="max-w-xs md:max-w-md max-h-full object-contain rounded-lg shadow-md"
      />
    </div>
  );
}
