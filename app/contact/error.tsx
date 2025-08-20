"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Contact page error:", error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md">
        <h2 className="text-2xl font-bold text-[#6320ce]">Something went wrong</h2>
        <p className="text-gray-600">
          We apologize for the inconvenience. Please try refreshing the page or contact our support team if the problem
          persists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={reset} className="px-4 py-2 bg-[#6320ce] text-white rounded-full hover:bg-[#6320ce]/90">
            Try again
          </button>
          <Link
            href="/"
            className="px-4 py-2 border border-[#6320ce] text-[#6320ce] rounded-full hover:bg-[#6320ce]/10"
          >
            Go to homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
