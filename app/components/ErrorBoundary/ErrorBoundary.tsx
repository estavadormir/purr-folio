'use client';

import { Component, ErrorInfo, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div
            className={twMerge(
              'min-h-screen bg-slate-900 text-white flex items-center justify-center'
            )}
          >
            <div className="text-center">
              <h1 className="text-6xl font-bold text-tiktokPink mb-4">Oops!</h1>
              <h2 className="text-2xl mb-4">Something went wrong</h2>
              <p className="mb-8 text-gray-400">{this.state.error?.message}</p>
              <button
                onClick={() => this.setState({ hasError: false })}
                className={twMerge(
                  'px-6 py-3 bg-tiktokPink text-white rounded-lg',
                  'hover:bg-tiktokAqua transition-colors duration-200'
                )}
              >
                Try again
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
