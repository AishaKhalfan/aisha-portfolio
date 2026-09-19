import React from 'react';
import { ExternalLink, Github, FolderGit2, Clock } from 'lucide-react';
import { TechBadge } from './TechBadge';

export interface ProjectCardProps {
  number?: string;
  title: string;
  description: string;
  tech: string[];
  repoUrl: string;
  liveUrl?: string;
  category?: string;
  isPlaceholder?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  number,
  title,
  description,
  tech,
  repoUrl,
  liveUrl,
  category,
  isPlaceholder,
}) => {
  if (isPlaceholder) {
    return (
      <article className="group relative flex flex-col justify-between bg-navy-900/40 border border-dashed border-navy-700/80 hover:border-slate-500 rounded-lg p-6 sm:p-7 transition-all duration-300 opacity-80 hover:opacity-100">
        <div>
          {/* Top Header Row */}
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded bg-navy-900/80 text-slate-500 border border-navy-700/60">
                <FolderGit2 className="w-5 h-5" />
              </div>
              {number && (
                <span className="font-mono text-xs font-semibold text-slate-400 tracking-wider">
                  PROJ-0{number}
                </span>
              )}
              {category && (
                <span className="font-mono text-xs text-slate-500 bg-navy-900/80 px-2 py-0.5 rounded border border-navy-700/60">
                  {category}
                </span>
              )}
            </div>

            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-navy-900/80 border border-navy-700/60 text-[11px] font-mono text-slate-400">
              <Clock className="w-3 h-3 text-amber-400/80" />
              <span>In Development</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-300 mb-3">
            {title}
          </h3>

          {/* Description */}
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6 font-sans">
            {description}
          </p>
        </div>

        {/* Tech Tags */}
        <div className="pt-4 border-t border-navy-700/40">
          <div className="flex flex-wrap gap-2">
            {tech.length > 0 ? (
              tech.map((item) => (
                <TechBadge key={item} name={item} variant="slate" />
              ))
            ) : (
              <span className="font-mono text-xs text-slate-500 italic">
                Tech stack & repo release coming soon...
              </span>
            )}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative flex flex-col justify-between bg-navy-850 border border-navy-700/70 hover:border-cyan-400/40 rounded-lg p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-400/5">
      {/* Top Header Row */}
      <div>
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded bg-navy-900 text-cyan-400 border border-navy-700 group-hover:border-cyan-400/30 transition-colors">
              <FolderGit2 className="w-5 h-5" />
            </div>
            {number && (
              <span className="font-mono text-xs font-semibold text-cyan-400 tracking-wider">
                PROJ-0{number}
              </span>
            )}
            {category && (
              <span className="font-mono text-xs text-slate-400 bg-navy-900 px-2 py-0.5 rounded border border-navy-700">
                {category}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${title}`}
                className="text-slate-400 hover:text-cyan-400 transition-colors p-1.5 rounded hover:bg-navy-800"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live site for ${title}`}
                className="text-slate-400 hover:text-cyan-400 transition-colors p-1.5 rounded hover:bg-navy-800"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mb-3">
          {repoUrl ? (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>

        {/* Description */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-sans">
          {description}
        </p>
      </div>

      {/* Tech Tags */}
      <div className="pt-4 border-t border-navy-700/50">
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <TechBadge key={item} name={item} variant="slate" />
          ))}
        </div>
      </div>
    </article>
  );
};
