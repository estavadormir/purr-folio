'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="relative">
          <h1 className="text-8xl sm:text-9xl font-light text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary mb-4 font-mono">
            404
          </h1>
          <div className="absolute inset-0 text-8xl sm:text-9xl font-light text-accent-primary/20 font-mono animate-pulse">
            404
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="title-section">
              Lost in cyberspace?
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto"></div>
          </div>

          <p className="subtitle text-gray-400 max-w-md mx-auto">
            The page you're looking for seems to have wandered off into the digital void.
            Don't worry though — even the best developers get lost sometimes!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="/"
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-lg hover:from-accent-secondary hover:to-accent-primary transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Take me home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="group flex items-center gap-2 px-6 py-3 border border-gray-700 text-gray-300 rounded-lg hover:border-accent-primary hover:text-accent-primary transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Go back
            </button>
          </div>

          <div className="pt-8 text-xs text-gray-500">
            <p>Error 404 • Page not found</p>
          </div>
        </div>
      </div>
    </div>
  );
}
