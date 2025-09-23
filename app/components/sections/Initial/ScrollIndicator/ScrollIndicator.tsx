'use client';

import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 100;
      setIsVisible(scrollY < threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      data-testid="scroll-indicator"
      className={twMerge(
        'fixed inset-x-0 bottom-8 flex justify-center animate-bounce'
      )}
      aria-hidden="true"
    >
      <div className={twMerge('relative')}>
        <div
          className={twMerge(
            'absolute -inset-0.5 bg-accent-secondary rounded-full blur opacity-75 animate-pulse'
          )}
        />
        <ChevronDown
          data-testid="scroll-indicator-icon"
          className={twMerge('relative h-10 w-10 text-white')}
        />
      </div>
      <span className={twMerge('sr-only')}>Scroll down for more content</span>
    </div>
  );
};
