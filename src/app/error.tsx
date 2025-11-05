'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error caught by error boundary:', error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#1B1B1B] text-white p-8">
      <div className="max-w-md w-full text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#9FE2BF]">Something went wrong!</h2>
        <p className="text-gray-400 mb-6">
          {error?.message || 'An unexpected error occurred. Please try again.'}
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-[#9FE2BF] text-[#1B1B1B] rounded-lg font-semibold hover:bg-[#7FD9A3] transition-colors"
          >
            Try again
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="px-6 py-3 bg-transparent border border-[#9FE2BF] text-[#9FE2BF] rounded-lg font-semibold hover:bg-[#9FE2BF]/10 transition-colors"
          >
            Go Home
          </button>
        </div>
        {process.env.NODE_ENV === 'development' && error?.digest && (
          <p className="mt-4 text-xs text-gray-500">Error ID: {error.digest}</p>
        )}
      </div>
    </div>
  );
}

