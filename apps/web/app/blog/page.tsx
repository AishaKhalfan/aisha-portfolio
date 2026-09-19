'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { REAL_BLOG_POSTS, BlogPost } from '../../lib/blogData';
import { TechBadge } from '@aisha/ui';
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BlogListPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Responsive items per view detection
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalItems = REAL_BLOG_POSTS.length;
  const maxIndex = Math.max(0, totalItems - visibleCount);

  // Keep index within bounds if window resizes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCount, maxIndex, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-navy-950 text-slate-100">
      <Navbar />

      <main className="flex-grow py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header — 1:1 Height & Spacing Match with Contact Page */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 font-mono text-xs font-semibold mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>MEDIUM ARTICLES & ARCHITECTURE GUIDES</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Technical <span className="text-cyan-400">Notes & Blog</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mt-3 font-sans leading-relaxed">
              Published articles on Medium covering DevSecOps, AWS serverless architectures, Linux command-line workflows, and system incident postmortems.
            </p>
          </div>

          {/* Carousel Header Controls Row */}
          <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-navy-800">
            <div className="flex items-center gap-3">
              <a
                href="https://medium.com/@aishakk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-navy-850 border border-navy-700 hover:border-cyan-400 text-slate-200 hover:text-cyan-400 font-mono text-xs font-semibold transition-all shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>medium.com/@aishakk</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <span className="hidden sm:inline font-mono text-xs text-slate-400">
                • Showing {visibleCount} of {totalItems} articles
              </span>
            </div>

            {/* Carousel Navigation Arrow Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                aria-label="Previous Articles"
                className="p-2.5 rounded-md bg-navy-850 border border-navy-700/80 hover:border-cyan-400/50 hover:bg-navy-800 text-cyan-400 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-navy-700/80 disabled:hover:bg-navy-850 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                aria-label="Next Articles"
                className="p-2.5 rounded-md bg-navy-850 border border-navy-700/80 hover:border-cyan-400/50 hover:bg-navy-800 text-cyan-400 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-navy-700/80 disabled:hover:bg-navy-850 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Horizontal Sliding Carousel Container */}
          <div
            ref={carouselRef}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            className="relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 rounded-lg"
          >
            <motion.div
              className="flex gap-6 sm:gap-8 cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ right: 0, left: -1000 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -40 && currentIndex < maxIndex) {
                  handleNext();
                } else if (info.offset.x > 40 && currentIndex > 0) {
                  handlePrev();
                }
              }}
              animate={{
                x: `-${currentIndex * (100 / visibleCount)}%`,
              }}
              transition={{
                type: 'tween',
                ease: 'easeOut',
                duration: 0.35,
              }}
            >
              {REAL_BLOG_POSTS.map((post) => (
                <div
                  key={post.slug}
                  className="shrink-0 flex flex-col justify-between"
                  style={{
                    width:
                      visibleCount === 3
                        ? 'calc((100% - 2 * 1.5rem) / 3)'
                        : visibleCount === 2
                        ? 'calc((100% - 1.5rem) / 2)'
                        : '100%',
                  }}
                >
                  <article className="group h-full flex flex-col justify-between bg-navy-850 border border-navy-700/80 hover:border-cyan-400/40 rounded-lg p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div>
                      {/* Date & Read time */}
                      <div className="flex items-center justify-between gap-2 text-xs font-mono text-slate-400 mb-3">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                            {post.date}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                          </span>
                        </div>

                        <a
                          href="https://medium.com/@aishakk"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-cyan-400 transition-colors"
                          aria-label="View on Medium"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>

                      {/* Title */}
                      <h2 className="font-heading text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mb-3 line-clamp-2">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>

                      {/* Excerpt */}
                      <p className="text-slate-300 text-sm font-sans leading-relaxed mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {post.tags.slice(0, 3).map((tag) => (
                          <TechBadge key={tag} name={tag} variant="slate" />
                        ))}
                      </div>

                      {/* Link row */}
                      <div className="flex items-center justify-between pt-3 border-t border-navy-700/50">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <span>Read Article</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <a
                          href="https://medium.com/@aishakk"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] font-mono text-slate-400 hover:text-slate-200 transition-colors"
                        >
                          Medium.com ↗
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Dot Pagination Indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  currentIndex === idx
                    ? 'w-7 bg-cyan-400'
                    : 'w-2 bg-navy-700 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
