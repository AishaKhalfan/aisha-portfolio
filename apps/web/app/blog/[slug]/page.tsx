import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '../../../components/Navbar';
import { Footer } from '../../../components/Footer';
import { REAL_BLOG_POSTS } from '../../../lib/blogData';
import { TechBadge } from '@aisha/ui';
import { Calendar, Clock, ArrowLeft, ExternalLink, BookOpen, Terminal, Sparkles } from 'lucide-react';

export async function generateStaticParams() {
  return REAL_BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostDetail({
  params,
}: {
  params: { slug: string };
}) {
  const post = REAL_BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-navy-950 text-slate-100">
      <Navbar />

      <main className="flex-grow py-12 sm:py-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Articles</span>
            </Link>

            <a
              href="https://medium.com/@aishakk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-navy-900 border border-navy-700 hover:border-cyan-400 text-xs font-mono text-cyan-400 transition-all"
            >
              <span>Read on Medium</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Article Header */}
          <header className="mb-10 pb-8 border-b border-navy-800">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-4">
              <span className="flex items-center gap-1.5 bg-navy-900 px-2.5 py-1 rounded border border-navy-700 text-cyan-400 font-semibold">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-100 leading-tight mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-2 pt-2">
              {post.tags.map((tag) => (
                <TechBadge key={tag} name={tag} variant="cyan" />
              ))}
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-invert prose-slate max-w-none text-slate-300 font-sans space-y-6 text-base sm:text-lg leading-relaxed">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('# ')) {
                return null;
              }
              if (paragraph.startsWith('## ')) {
                return (
                  <h2
                    key={index}
                    className="font-heading text-2xl font-bold text-slate-100 mt-8 mb-4 border-b border-navy-800 pb-2"
                  >
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('```')) {
                const lines = paragraph.split('\n');
                const lang = lines[0].replace('```', '');
                const code = lines.slice(1, -1).join('\n');
                return (
                  <div
                    key={index}
                    className="my-6 bg-navy-900 border border-navy-700/80 rounded-lg overflow-hidden"
                  >
                    <div className="bg-navy-850 px-4 py-2 border-b border-navy-700/80 flex items-center justify-between text-xs font-mono text-slate-400">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Snippet ({lang || 'code'})</span>
                      </div>
                    </div>
                    <pre className="p-4 font-mono text-xs sm:text-sm text-cyan-300 overflow-x-auto">
                      <code>{code}</code>
                    </pre>
                  </div>
                );
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n- ');
                return (
                  <ul key={index} className="space-y-2 my-4">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-mono text-xs mt-1 shrink-0">
                          ▸
                        </span>
                        <span>{item.replace('- ', '')}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return <p key={index}>{paragraph}</p>;
            })}
          </div>

          {/* Bottom Medium Banner */}
          <div className="mt-12 p-6 rounded-lg bg-navy-900 border border-navy-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-slate-300">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
              <div>
                <span className="text-slate-100 font-semibold">Published by Aisha Khalifan on Medium</span>
                <p className="text-slate-400 text-[11px]">Follow @aishakk on Medium for more DevSecOps, AWS, and cloud engineering insights.</p>
              </div>
            </div>
            <a
              href="https://medium.com/@aishakk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded bg-cyan-400 text-navy-950 font-bold hover:bg-cyan-300 transition-colors shrink-0"
            >
              Follow on Medium ↗
            </a>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
