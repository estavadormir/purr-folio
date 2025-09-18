import type { TechCategory } from '@/types';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface CategorySectionProps {
  category: TechCategory;
  className?: string;
}

export const CategorySection = ({
  category,
  className,
}: CategorySectionProps) => (
  <div className={twMerge('h-full flex flex-col bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/80 shadow-lg', className)}>
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-2 h-2 bg-tiktokPink rounded-full"></div>
        <h3 className="font-bold text-xl lg:text-2xl text-gray-900">
          {category.title}
        </h3>
        <div className="flex-1 h-0.5 bg-gradient-to-r from-tiktokPink to-tiktokAqua rounded-full ml-2"></div>
      </div>
      <p className="text-sm text-gray-600">{category.items.length} technologies</p>
    </div>

    <div className="flex-1 overflow-y-auto space-y-3 custom-scrollbar-vertical">
      {category.items.map((item, index) => (
        <Link
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block transition-all duration-300 hover:scale-[1.02]"
          style={{
            animation: `slideInFromRight 0.4s ease-out ${index * 0.05}s both`
          }}
        >
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-xl p-4 shadow-sm hover:shadow-md hover:bg-white/90 transition-all duration-300">
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-semibold text-base text-gray-900 group-hover:text-tiktokPink transition-colors leading-tight">
                {item.name}
              </h4>
              <div className="w-2 h-2 bg-tiktokAqua rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  </div>
);
