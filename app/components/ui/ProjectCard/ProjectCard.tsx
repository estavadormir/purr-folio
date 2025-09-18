import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  astroFeatured?: boolean;
  className?: string;
}

export const ProjectCard = ({
  title,
  description,
  url,
  astroFeatured = false,
  className
}: ProjectCardProps) => (
  <Link
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={twMerge(
      'group block transition-all duration-300 hover:scale-[1.02]',
      className
    )}
  >
    <div className="h-full bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:bg-white/90 transition-all duration-300 flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-bold text-xl text-gray-900 group-hover:text-tiktokPink transition-colors leading-tight">
          {title}
        </h3>
        <div className="flex flex-col gap-2 flex-shrink-0 ml-4">
          {astroFeatured && (
            <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-tiktokPink to-tiktokAqua rounded-full">
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
              <span className="text-xs text-white font-medium">Astro Featured</span>
            </div>
          )}
          <div className="w-3 h-3 bg-tiktokAqua rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed flex-1 mb-4">
        {description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-tiktokPink rounded-full"></div>
          <span className="text-sm text-gray-500 group-hover:text-tiktokPink transition-colors">
            Visit Project
          </span>
        </div>
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-1 h-1 bg-tiktokAqua rounded-full"></div>
          <div className="w-1 h-1 bg-tiktokPink rounded-full"></div>
          <div className="w-1 h-1 bg-tiktokAqua rounded-full"></div>
        </div>
      </div>
    </div>
  </Link>
);