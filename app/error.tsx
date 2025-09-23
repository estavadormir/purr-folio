'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { RefreshCw, Home, AlertTriangle } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="relative mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <AlertTriangle className="w-16 h-16 text-accent-primary animate-pulse" />
              <div className="absolute inset-0 w-16 h-16 border-2 border-accent-secondary rounded-full animate-spin"></div>
            </div>
          </div>

          <h1 className="text-6xl sm:text-7xl font-light text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary mb-4 font-mono">
            500
          </h1>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="title-section">
              Oops! Something broke
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto"></div>
          </div>

          <div className="space-y-4">
            <p className="subtitle text-gray-400 max-w-md mx-auto">
              Looks like we hit a snag. Don't worry, these things happen —
              even the most robust systems have their off days.
            </p>

            {error.message && (
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 max-w-md mx-auto">
                <p className="text-sm text-gray-300 break-words">
                  <span className="font-medium text-accent-secondary">Error:</span> {error.message}
                </p>
                {error.digest && (
                  <p className="text-xs text-gray-500 mt-2">
                    ID: {error.digest}
                  </p>
                )}
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={reset}
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-lg hover:from-accent-secondary hover:to-accent-primary transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              Try again
            </button>

            <Link
              href="/"
              className="group flex items-center gap-2 px-6 py-3 border border-gray-700 text-gray-300 rounded-lg hover:border-accent-primary hover:text-accent-primary transition-all duration-300 hover:scale-105"
            >
              <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Go home
            </Link>
          </div>

          <div className="pt-8 text-xs text-gray-500">
            <p>Error 500 • Internal server error</p>
          </div>
        </div>
      </div>
    </div>
  );
}
