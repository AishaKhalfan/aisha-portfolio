import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Button, ProjectCard, TechBadge } from '@aisha/ui';
import { Github, ExternalLink, Sparkles, Check, FileText, ArrowUpRight, Terminal, Layers, Code } from 'lucide-react';

export default function HomePage() {
  // Real project 1 from user prompt for visual preview sample
  const projectSample = {
    number: '1',
    title: 'HomeMadeGrub',
    category: 'Full-Stack Web Platform',
    description:
      'A full-stack web platform connecting home cooks with customers, letting users discover and order homemade meals from local kitchens. Built as a team project (with Irungu Josphat and Hazi Adan).',
    tech: [
      'React',
      'Redux',
      'Node.js',
      'Express',
      'MySQL',
      'HTML',
      'CSS',
      'JavaScript',
    ],
    repoUrl: 'https://github.com/AishaKhalfan/Webstack_Portfolio_Project',
  };

  return (
    <div className="min-h-screen flex flex-col bg-navy-950 text-slate-100">
      <Navbar />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Visual Sample Section (Requested by user before full build) */}
        <section id="sample-preview" className="py-16 bg-navy-900/50 border-b border-navy-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 font-mono text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>DESIGN SYSTEM & VISUAL COMPONENT PREVIEW</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-100">
                Design Tokens, Buttons & Real Project Card Sample
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl font-sans">
                Reviewing the exact Space Grotesk + Inter + JetBrains Mono design hierarchy, dark navy background (#0A0E17), cyan primary button, and real content project card.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: UI Controls & Buttons Showcase */}
              <div className="lg:col-span-5 bg-navy-850 border border-navy-700/80 rounded-lg p-6 space-y-6">
                <div>
                  <h3 className="font-mono text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    Deliberate UI Buttons (No Pill Shapes)
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="primary">
                      Primary Solid Cyan
                    </Button>
                    <Button variant="secondary">
                      Secondary Outlined
                    </Button>
                    <Button variant="outline">
                      Ghost / Border
                    </Button>
                  </div>
                </div>

                <div className="pt-4 border-t border-navy-700/60">
                  <h3 className="font-mono text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    Monospace Tech Badges (JetBrains Mono)
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <TechBadge name="AWS EC2" variant="cyan" />
                    <TechBadge name="Python" variant="slate" />
                    <TechBadge name="DynamoDB" variant="violet" />
                    <TechBadge name="React.js" variant="slate" />
                    <TechBadge name="Linux" variant="cyan" />
                  </div>
                </div>

                <div className="pt-4 border-t border-navy-700/60">
                  <h3 className="font-mono text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Resume Download Flag
                  </h3>
                  <div className="p-3 rounded bg-navy-900 border border-amber-500/30 text-xs font-mono text-slate-300 space-y-1">
                    <div className="text-amber-400 font-semibold flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>Placeholder Flag:</span>
                    </div>
                    <div>Target path: <code className="text-cyan-400">/resume.pdf</code></div>
                    <div className="text-slate-400 text-[11px]">Swap in Aisha's real PDF file before deploying to Vercel.</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Real Project Card Sample #1 */}
              <div className="lg:col-span-7">
                <div className="mb-2 font-mono text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                  <span>Project Card #1 (Real Content)</span>
                  <span className="text-cyan-400">1 of 4 Real Projects</span>
                </div>
                <ProjectCard
                  number={projectSample.number}
                  title={projectSample.title}
                  category={projectSample.category}
                  description={projectSample.description}
                  tech={projectSample.tech}
                  repoUrl={projectSample.repoUrl}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
