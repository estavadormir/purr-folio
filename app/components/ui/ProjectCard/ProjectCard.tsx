import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  featured?: boolean;
  technologies: string[];
  image?: string;
  className?: string;
}

export const ProjectCard = ({
  title,
  description,
  url,
  featured = false,
  technologies,
  image,
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
    <div className="relative h-64 sm:h-80 overflow-hidden rounded-lg border border-gray-700 bg-gray-800">
      {/* Background Image with Overlay */}
      {image ? (
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-gray-900/30" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-gradient-to-br from-tiktokPink/10 to-tiktokAqua/10" />
        </div>
      )}

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col justify-between p-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-light text-white group-hover:text-tiktokAqua transition-colors">
              {title}
            </h3>
          </div>
          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-tiktokPink transition-colors opacity-0 group-hover:opacity-100" />
        </div>

        {/* Footer */}
        <div className="space-y-3">
          <p className="body-small text-gray-300 line-clamp-3">
            {description}
          </p>

          <div className="flex flex-wrap gap-1">
            {technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="tech-tag px-2 py-1 bg-gray-800/80 text-gray-400 rounded border border-gray-700"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className="tech-tag px-2 py-1 text-gray-500">
                +{technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-tiktokPink/20 to-tiktokAqua/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  </Link>
);