import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  FileText,
  Cloud,
  Terminal,
  Server,
  Database,
  ShieldCheck,
  Code2,
  Cpu,
  Globe,
  CheckCircle2,
} from 'lucide-react';
import { Button, TechBadge } from '@aisha/ui';

export const Hero = () => {
  const skillsList = [
    { name: 'Python', category: 'Backend & Automation' },
    { name: 'JavaScript', category: 'Web' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'React', category: 'Frontend' },
    { name: 'AWS (EC2, S3, RDS, IAM)', category: 'Cloud' },
    { name: 'CloudFormation / SAM', category: 'IaC' },
    { name: 'Linux (Ubuntu/CentOS)', category: 'OS & Systems' },
    { name: 'SQL (MySQL/Oracle)', category: 'Database' },
    { name: 'Bash Scripting', category: 'Automation' },
    { name: 'Docker / CI-CD', category: 'DevOps' },
  ];

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 border-b border-navy-800/60 bg-gradient-to-b from-navy-950 via-navy-900/40 to-navy-950">
      {/* Background Subtle Tech Matrix Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#22D3EE 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-850 border border-cyan-400/30 text-cyan-400 text-xs font-mono mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>AWS Certified Cloud Practitioner • Based in Nairobi, Kenya</span>
          </div>

          {/* Name Header */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.1] mb-4">
            Aisha Kauma <span className="text-cyan-400">Khalifan</span>
          </h1>

          {/* Title Subheader */}
          <h2 className="font-heading text-xl sm:text-2xl font-semibold text-slate-300 mb-6 flex items-center gap-3">
            <span className="text-cyan-400 font-mono text-lg">&gt;_</span>
            <span>Software Engineer & Cloud Engineer</span>
          </h2>

          {/* Bio Text */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 font-sans">
            Aisha Kauma Khalifan is an AWS Certified Cloud Practitioner with a solid foundation in software engineering and cloud computing. She builds reliable backend systems and cloud infrastructure, with hands-on experience across AWS core services (EC2, S3, RDS, IAM), Python automation, and full-stack web development. Based in Nairobi, Kenya.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <Button
              variant="primary"
              size="lg"
              asLink
              href="#projects"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Projects
            </Button>

            <Button
              variant="secondary"
              size="lg"
              asLink
              href="/resume.pdf"
              icon={<FileText className="w-4 h-4 text-cyan-400" />}
            >
              Download Resume (PDF)
            </Button>

            <Button
              variant="outline"
              size="lg"
              asLink
              href="/contact"
            >
              Contact Me
            </Button>
          </div>

          {/* Tech Stack Row */}
          <div className="pt-6 border-t border-navy-800/80">
            <div className="flex items-center gap-2 mb-3">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="font-mono text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Core Tech Stack & Ecosystem
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {skillsList.map((skill, index) => (
                <TechBadge
                  key={skill.name}
                  name={skill.name}
                  variant={index % 3 === 0 ? 'cyan' : 'slate'}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
