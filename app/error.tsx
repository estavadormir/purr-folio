'use client';

import { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

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
    <div
      className={twMerge(
        'min-h-screen bg-slate-900 text-white flex items-center justify-center'
      )}
    >
      <div className="text-center">
        <h1 className="text-6xl font-bold text-tiktokPink mb-4">500</h1>
        <h2 className="text-2xl mb-4">Something went wrong!</h2>
        <p className="mb-8 text-gray-400">{error.message}</p>
        <button
          onClick={reset}
          className={twMerge(
            'px-6 py-3 bg-tiktokPink text-white rounded-lg',
            'hover:bg-tiktokAqua transition-colors duration-200'
          )}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
