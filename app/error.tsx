"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Something went wrong</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          We apologize for the inconvenience. Please try again or return to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-800 transition"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
