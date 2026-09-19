import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { WORK_EXPERIENCES, EDUCATION, CERTIFICATIONS, TECHNICAL_SKILLS } from '../../lib/aboutData';
import { TechBadge } from '@aisha/ui';
import { Briefcase, GraduationCap, Award, Cpu, CheckCircle2, MapPin, Calendar, FileText } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About & Experience | Aisha Kauma Khalifan',
  description:
    'Work experience timeline, technical skills grid, education, and cloud certifications for Aisha Kauma Khalifan.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-navy-950 text-slate-100">
      <Navbar />

      <main className="flex-grow py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Header */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 font-mono text-xs font-semibold mb-4">
              <Briefcase className="w-3.5 h-3.5" />
              <span>CAREER & TECHNICAL BACKGROUND</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              About & <span className="text-cyan-400">Experience</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mt-3 font-sans leading-relaxed">
              AWS Certified Cloud Practitioner and Software Engineer with proven expertise across enterprise system development, cloud automation, financial fraud detection algorithms, and technical education.
            </p>
          </div>

          {/* Work Experience Timeline */}
          <section className="space-y-8">
            <div className="flex items-center gap-3 border-b border-navy-800 pb-4">
              <Briefcase className="w-6 h-6 text-cyan-400" />
              <h2 className="font-heading text-2xl font-bold text-slate-100">
                Work Experience
              </h2>
            </div>

            <div className="relative border-l-2 border-navy-800 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
              {WORK_EXPERIENCES.map((exp, idx) => (
                <div key={exp.company + idx} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-navy-950 border-2 border-cyan-400 group-hover:scale-125 transition-transform" />

                  <div className="bg-navy-850 border border-navy-700/80 hover:border-cyan-400/40 rounded-lg p-6 sm:p-7 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-heading text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                          {exp.role}
                        </h3>
                        <span className="font-mono text-sm text-cyan-400 font-semibold">
                          {exp.company}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                        <span className="flex items-center gap-1.5 bg-navy-900 px-2.5 py-1 rounded border border-navy-700">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2 mt-4 text-slate-300 text-sm sm:text-base font-sans">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <span className="text-cyan-400 font-mono text-xs mt-1 shrink-0">▸</span>
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills Grid */}
          <section className="space-y-8">
            <div className="flex items-center gap-3 border-b border-navy-800 pb-4">
              <Cpu className="w-6 h-6 text-cyan-400" />
              <h2 className="font-heading text-2xl font-bold text-slate-100">
                Technical Skills Grid
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TECHNICAL_SKILLS.map((group) => (
                <div
                  key={group.category}
                  className="bg-navy-850 border border-navy-700/80 rounded-lg p-5 space-y-3"
                >
                  <h3 className="font-mono text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <TechBadge key={skill} name={skill} variant="slate" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications & Education Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Certifications */}
            <section className="bg-navy-850 border border-navy-700/80 rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3 border-b border-navy-700 pb-3">
                <Award className="w-6 h-6 text-cyan-400" />
                <h2 className="font-heading text-xl font-bold text-slate-100">
                  Certifications
                </h2>
              </div>
              <div className="space-y-4">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.name} className="flex items-start gap-3 p-4 bg-navy-900 rounded border border-navy-700">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-heading text-base font-bold text-slate-100">
                        {cert.name}
                      </h3>
                      <p className="font-mono text-xs text-slate-400 mt-1">
                        Issuer: {cert.issuer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="bg-navy-850 border border-navy-700/80 rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3 border-b border-navy-700 pb-3">
                <GraduationCap className="w-6 h-6 text-cyan-400" />
                <h2 className="font-heading text-xl font-bold text-slate-100">
                  Education
                </h2>
              </div>
              <div className="space-y-4">
                {EDUCATION.map((edu) => (
                  <div key={edu.degree} className="p-4 bg-navy-900 rounded border border-navy-700">
                    <h3 className="font-heading text-base font-bold text-slate-100">
                      {edu.degree}
                    </h3>
                    <p className="font-mono text-xs text-cyan-400 mt-1 font-semibold">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-slate-400 mt-1 font-sans">
                      {edu.graduationDate}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
