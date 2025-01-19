'use client';

import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 100; // Adjust this value to change when the indicator disappears

      setIsVisible(scrollY < threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={twMerge(
        'fixed bottom-8 left-[50%] -translate-x-[50%] animate-bounce w-8 mx-auto'
      )}
      aria-hidden="true"
    >
      <div className={twMerge('relative')}>
        <div
          className={twMerge(
            'absolute -inset-0.5 bg-tiktokAqua rounded-full blur opacity-75 animate-pulse'
          )}
        ></div>
        <ChevronDown className={twMerge('relative h-8 w-8 text-white')} />
      </div>
      <span className={twMerge('sr-only')}>Scroll down for more content</span>
    </div>
  );
};
