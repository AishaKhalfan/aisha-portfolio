import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Terminal } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-navy-900 border-t border-navy-800 text-slate-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1: Bio summary */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-cyan-400" />
              <span className="font-heading text-lg font-bold text-slate-100">
                Aisha Kauma Khalifan
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md font-sans leading-relaxed">
              AWS Certified Cloud Practitioner & Software Engineer building reliable backend systems and cloud infrastructure. Based in Nairobi, Kenya.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Nairobi, Kenya (EAT / UTC+3)</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-mono text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-cyan-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors">
                  Experience & Skills
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-cyan-400 transition-colors">
                  Technical Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-cyan-400 transition-colors">
                  Admin CMS
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Connect & Socials */}
          <div>
            <h4 className="font-mono text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:aishakhalfan45@gmail.com"
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>aishakhalfan45@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+254714551030"
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+254 714 551 030</span>
                </a>
              </li>
              <li className="pt-2 flex items-center gap-3">
                <a
                  href="https://github.com/AishaKhalfan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded bg-navy-800 border border-navy-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aisha-khalifan-433227b5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded bg-navy-800 border border-navy-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com/_aishakhalfan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded bg-navy-800 border border-navy-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition-all"
                  aria-label="Twitter/X Profile"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-navy-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} Aisha Kauma Khalifan. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">AWS Always-Free Tier Architecture</span>
            <span className="text-slate-400">•</span>
            <span className="text-cyan-400">Nairobi, Kenya</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
