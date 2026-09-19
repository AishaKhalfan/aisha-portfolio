'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { ProjectCard } from '@aisha/ui';
import { REAL_PROJECTS, Project } from '../../lib/projectsData';
import {
  FolderGit2,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Terminal,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ITEMS_PER_PAGE = 4;

export default function ProjectsPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  const totalItems = REAL_PROJECTS.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  // Check prefers-reduced-motion on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (mediaQuery.matches) {
        setIsPlaying(false);
      }
    }
  }, []);

  const handleNext = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const handlePrev = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  // Manual navigation handlers (permanently pause autoplay for session)
  const handleManualNext = () => {
    setUserInteracted(true);
    setIsPlaying(false);
    handleNext();
  };

  const handleManualPrev = () => {
    setUserInteracted(true);
    setIsPlaying(false);
    handlePrev();
  };

  const handleManualPageSelect = (pageIndex: number) => {
    setUserInteracted(true);
    setIsPlaying(false);
    setCurrentPage(pageIndex);
  };

  // Autoplay 12-second timer
  useEffect(() => {
    if (totalPages <= 1) return;
    if (!isPlaying || isHovered || isFocused || userInteracted) return;

    const timer = setInterval(() => {
      handleNext();
    }, 12000);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, isFocused, userInteracted, totalPages, handleNext]);

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handleManualPrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleManualNext();
    }
  };

  // Current page projects
  const currentProjects = REAL_PROJECTS.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  return (
    <div className="min-h-screen flex flex-col bg-navy-950 text-slate-100">
      <Navbar />

      <main className="flex-grow py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 font-mono text-xs font-semibold mb-4">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>PRODUCTION & OPEN SOURCE BUILDS</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Featured Engineering <span className="text-cyan-400">Projects</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mt-3 font-sans leading-relaxed">
              A collection of backend platforms, AWS cloud infrastructure blueprints, database architectures, and low-level Unix systems software.
            </p>
          </div>

          {/* Grid Container with Hover & Focus Handlers */}
          <div
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 rounded-lg"
          >
            {/* Animated 2x2 Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {currentProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    number={project.number}
                    title={project.title}
                    category={project.category}
                    description={project.description}
                    tech={project.tech}
                    repoUrl={project.repoUrl}
                    isPlaceholder={project.isPlaceholder}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Controls & Autoplay Controls Row (Only rendered if > 4 items) */}
          {totalPages > 1 && (
            <div className="mt-10 pt-6 border-t border-navy-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Left: Previous / Next Arrow Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handleManualPrev}
                  aria-label="Previous Projects Page"
                  className="inline-flex items-center justify-center p-2.5 rounded-md bg-navy-850 border border-navy-700/80 hover:border-cyan-400/50 hover:bg-navy-800 text-cyan-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={handleManualNext}
                  aria-label="Next Projects Page"
                  className="inline-flex items-center justify-center p-2.5 rounded-md bg-navy-850 border border-navy-700/80 hover:border-cyan-400/50 hover:bg-navy-800 text-cyan-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <span className="font-mono text-xs text-slate-400">
                  Page {currentPage + 1} of {totalPages}
                </span>
              </div>

              {/* Center: Dot Indicators */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleManualPageSelect(idx)}
                    aria-label={`Go to projects page ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                      currentPage === idx
                        ? 'w-7 bg-cyan-400'
                        : 'w-2 bg-navy-700 hover:bg-slate-500'
                    }`}
                  />
                ))}
              </div>

              {/* Right: Autoplay Pause/Play Toggle Button */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? 'Pause Autoplay' : 'Start Autoplay'}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-navy-850 border border-navy-700 hover:border-cyan-400 text-xs font-mono text-slate-300 hover:text-cyan-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  {isPlaying && !userInteracted ? (
                    <>
                      <Pause className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Autoplay (12s)</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-slate-400" />
                      <span>Paused</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Terminal Box Info */}
          <div className="mt-12 p-6 rounded-lg bg-navy-900 border border-navy-700 font-mono text-xs text-slate-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Terminal className="w-5 h-5 text-cyan-400 shrink-0" />
              <div>
                <span className="text-slate-100 font-semibold">Want to inspect code or run locally?</span>
                <p className="text-slate-400 text-[11px]">All repositories include setup instructions, tests, and documentation on GitHub.</p>
              </div>
            </div>
            <a
              href="https://github.com/AishaKhalfan"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded bg-navy-800 border border-navy-600 hover:border-cyan-400 text-cyan-400 font-semibold transition-colors shrink-0"
            >
              github.com/AishaKhalfan →
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
