'use client';

import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export default function NotFound() {
  return (
    <div
      className={twMerge(
        'min-h-screen bg-slate-900 text-white flex items-center justify-center'
      )}
    >
      <div className="text-center">
        <h1 className="text-6xl font-bold text-accent-primary mb-4">404</h1>
        <h2 className="text-2xl mb-4">Page Not Found</h2>
        <p className="mb-8">
          {`The page you're looking for doesn't exist or has been moved.`}
        </p>
        <Link
          href="/"
          className={twMerge(
            'px-6 py-3 bg-accent-primary text-white rounded-lg',
            'hover:bg-accent-secondary transition-colors duration-200'
          )}
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
