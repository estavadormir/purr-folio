'use client';
import { SectionTitle } from '@estavadormir/purr-ui';
import { CategorySection } from '@/components/ui';
import { TECH_STACK } from '@/constants';
import { twMerge } from 'tailwind-merge';
import { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface TechstackSectionProps {
  bgColor?: string;
}

export const TechstackSection = ({
  bgColor = 'bg-white',
}: TechstackSectionProps) => {
  const categories = Object.values(TECH_STACK);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', checkScrollButtons);
      checkScrollButtons();
      return () =>
        scrollElement.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      const currentScroll = scrollRef.current.scrollLeft;
      const targetScroll =
        direction === 'left'
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;

      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="techstack"
      data-testid="techstackSection"
      className={twMerge('h-screen w-full flex flex-col', bgColor)}
    >
      <div className="h-full flex flex-col">
        <div className="flex-shrink-0 py-6 sm:py-8 text-center">
          <SectionTitle title="Tech Stack" variant="tech" />
          <div className="mt-4 flex items-center justify-center gap-4 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-6 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"></div>
              <span>Explore the tech realm</span>
              <div className="w-6 h-1 bg-gradient-to-r from-accent-secondary to-accent-primary rounded-full"></div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center">
            <div className="hidden sm:flex items-center bg-gray-100 rounded-full p-1 shadow-inner border border-gray-200">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={twMerge(
                  'flex items-center justify-center w-10 h-8 rounded-full transition-all duration-200',
                  canScrollLeft
                    ? 'bg-white shadow-sm hover:shadow-md text-gray-700 hover:text-gray-900 active:shadow-inner active:bg-gray-50'
                    : 'bg-transparent text-gray-400 cursor-not-allowed'
                )}
              >
                <FaChevronLeft className="w-3 h-3" />
              </button>

              <div className="mx-2 w-6 h-0.5 bg-gray-300 rounded-full"></div>

              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={twMerge(
                  'flex items-center justify-center w-10 h-8 rounded-full transition-all duration-200',
                  canScrollRight
                    ? 'bg-white shadow-sm hover:shadow-md text-gray-700 hover:text-gray-900 active:shadow-inner active:bg-gray-50'
                    : 'bg-transparent text-gray-400 cursor-not-allowed'
                )}
              >
                <FaChevronRight className="w-3 h-3" />
              </button>
            </div>

            <div className="sm:hidden flex items-center gap-2 text-gray-600">
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse"></div>
                <div
                  className="w-1 h-1 bg-gray-400 rounded-full animate-pulse"
                  style={{ animationDelay: '0.2s' }}
                ></div>
                <div
                  className="w-1 h-1 bg-gray-400 rounded-full animate-pulse"
                  style={{ animationDelay: '0.4s' }}
                ></div>
              </div>
              <span className="text-xs text-gray-500">Swipe to explore</span>
              <div className="flex items-center gap-1">
                <div
                  className="w-1 h-1 bg-gray-400 rounded-full animate-pulse"
                  style={{ animationDelay: '0.1s' }}
                ></div>
                <div
                  className="w-1 h-1 bg-gray-400 rounded-full animate-pulse"
                  style={{ animationDelay: '0.3s' }}
                ></div>
                <div
                  className="w-1 h-1 bg-gray-400 rounded-full animate-pulse"
                  style={{ animationDelay: '0.5s' }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 relative">
          <div
            ref={scrollRef}
            className="h-full overflow-x-auto overflow-y-hidden custom-scrollbar-horizontal scroll-smooth"
          >
            <div
              className="flex gap-4 sm:gap-6 lg:gap-8 h-full px-4 sm:px-6 lg:px-8 pb-8 justify-center sm:justify-start"
              style={{ width: 'max-content' }}
            >
              {categories.map((category, index) => (
                <div
                  key={category.title}
                  className="flex-shrink-0 w-72 sm:w-80 lg:w-96 h-full flex flex-col py-4"
                  style={{
                    animation: `slideInFromRight 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <CategorySection category={category} className="h-full" />
                </div>
              ))}
              <div className="flex-shrink-0 w-8"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
