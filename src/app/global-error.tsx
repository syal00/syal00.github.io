'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-8">
          <div className="text-center max-w-md">
            <h2 className="text-3xl font-bold mb-4 text-red-400">Something went wrong!</h2>
            <p className="text-gray-400 mb-6">
              An unexpected error occurred. Please try again or contact support if the problem persists.
            </p>
            <button
              onClick={() => reset()}
              className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}


