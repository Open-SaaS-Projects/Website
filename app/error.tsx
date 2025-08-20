"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
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
          <Button onClick={reset} className="bg-[#6320ce] hover:bg-[#6320ce]/90 rounded-full">
            Try again
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-[#6320ce] text-[#6320ce] hover:bg-[#6320ce]/10"
            onClick={() => (window.location.href = "/")}
          >
            Go to homepage
          </Button>
        </div>
      </div>
    </div>
  )
}
