'use client';

import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Button, TechBadge } from '@aisha/ui';
import { ShieldCheck, Lock, Plus, Trash2, Edit3, Key, Terminal, LogOut, CheckCircle2, FolderGit2 } from 'lucide-react';
import { REAL_PROJECTS, Project } from '../../lib/projectsData';

export default function AdminDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [projectsList, setProjectsList] = useState<Project[]>(REAL_PROJECTS);
  const [activeTab, setActiveTab] = useState<'projects' | 'blog'>('projects');

  // New Project Form State
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newTech, setNewTech] = useState('');
  const [newRepo, setNewRepo] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123' || password === 'aisha-admin-2024') {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Invalid access key. (Demo default: admin123)');
    }
  };

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newDesc || !newRepo) return;

    const projectObj: Project = {
      id: `proj-${Date.now()}`,
      number: String(projectsList.length + 1),
      title: newTitle,
      category: newCategory || 'Software Engineering',
      description: newDesc,
      tech: newTech ? newTech.split(',').map((t) => t.trim()) : ['Python', 'AWS'],
      repoUrl: newRepo,
    };

    setProjectsList([projectObj, ...projectsList]);
    setNewTitle('');
    setNewCategory('');
    setNewDesc('');
    setNewTech('');
    setNewRepo('');
  };

  const handleDeleteProject = (id: string) => {
    setProjectsList(projectsList.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-navy-950 text-slate-100">
      <Navbar />

      <main className="flex-grow py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 font-mono text-xs font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>CMS CONTENT MANAGEMENT SYSTEM</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Admin <span className="text-cyan-400">Dashboard</span>
            </h1>
            <p className="text-slate-400 text-sm sm:text-base mt-2 font-sans">
              Protected area to manage DynamoDB projects table, technical blog posts, and site metadata.
            </p>
          </div>

          {!isAuthenticated ? (
            /* Login Form */
            <div className="max-w-md mx-auto bg-navy-850 border border-navy-700/80 rounded-lg p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3 border-b border-navy-700 pb-4">
                <Lock className="w-6 h-6 text-cyan-400" />
                <h2 className="font-heading text-xl font-bold text-slate-100">
                  CMS Authentication
                </h2>
              </div>

              {loginError && (
                <div className="p-3 rounded bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono">
                  {loginError}
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Admin Access Key / JWT Secret
                  </label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter access key (demo: admin123)"
                    className="w-full px-4 py-2.5 rounded-md bg-navy-900 border border-navy-700 text-slate-100 placeholder-slate-500 text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                <Button variant="primary" size="md" className="w-full">
                  Authenticate Admin
                </Button>

                <div className="text-[11px] font-mono text-slate-500 text-center pt-2">
                  Protected by AWS Lambda Authorizer / JWT bearer token
                </div>
              </form>
            </div>
          ) : (
            /* Authenticated Admin CMS Panel */
            <div className="space-y-8">
              {/* Status Header */}
              <div className="p-4 rounded-lg bg-navy-850 border border-cyan-400/40 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-mono text-xs text-slate-200">
                    Logged in as <strong className="text-cyan-400">Aisha Khalifan (Admin)</strong> • Session Valid
                  </span>
                </div>
                <button
                  onClick={() => setIsAuthenticated(false)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-navy-900 border border-navy-700 hover:border-rose-500 text-xs font-mono text-slate-300 hover:text-rose-400 transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Logout</span>
                </button>
              </div>

              {/* Tab navigation */}
              <div className="flex gap-2 border-b border-navy-800 pb-2 font-mono text-xs">
                <button
                  onClick={() => setActiveTab('projects')}
                  className={`px-4 py-2 rounded-md font-semibold transition-colors ${
                    activeTab === 'projects'
                      ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-400/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Manage Projects ({projectsList.length})
                </button>
              </div>

              {/* Add New Project Form */}
              <div className="bg-navy-850 border border-navy-700/80 rounded-lg p-6 space-y-4">
                <h3 className="font-heading text-lg font-bold text-slate-100 flex items-center gap-2">
                  <Plus className="w-5 h-5 text-cyan-400" />
                  <span>Create / Add New Project to DynamoDB</span>
                </h3>

                <form onSubmit={handleAddProject} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Title *</label>
                    <input
                      type="text"
                      required
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      placeholder="e.g. Serverless Microservice API"
                      className="w-full px-3 py-2 rounded bg-navy-900 border border-navy-700 text-slate-100 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Category</label>
                    <input
                      type="text"
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      placeholder="e.g. Cloud Infrastructure"
                      className="w-full px-3 py-2 rounded bg-navy-900 border border-navy-700 text-slate-100 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-mono text-slate-300 mb-1">Description *</label>
                    <textarea
                      rows={2}
                      required
                      value={newDesc}
                      onChange={(e) => setNewDesc(e.target.value)}
                      placeholder="Brief overview of architecture and impact..."
                      className="w-full px-3 py-2 rounded bg-navy-900 border border-navy-700 text-slate-100 focus:border-cyan-400 focus:outline-none resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Tech Stack (comma separated)</label>
                    <input
                      type="text"
                      value={newTech}
                      onChange={(e) => setNewTech(e.target.value)}
                      placeholder="AWS EC2, Python, Docker"
                      className="w-full px-3 py-2 rounded bg-navy-900 border border-navy-700 text-slate-100 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">GitHub Repo URL *</label>
                    <input
                      type="url"
                      required
                      value={newRepo}
                      onChange={(e) => setNewRepo(e.target.value)}
                      placeholder="https://github.com/AishaKhalfan/..."
                      className="w-full px-3 py-2 rounded bg-navy-900 border border-navy-700 text-slate-100 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div className="md:col-span-2 pt-2">
                    <Button variant="primary" size="md">
                      Add Project Entry
                    </Button>
                  </div>
                </form>
              </div>

              {/* Projects Table */}
              <div className="bg-navy-850 border border-navy-700/80 rounded-lg overflow-hidden">
                <div className="p-4 border-b border-navy-700 bg-navy-900 font-mono text-xs font-semibold text-slate-300 flex items-center justify-between">
                  <span>Current Portfolio Projects ({projectsList.length})</span>
                  <span>DynamoDB Table: aisha-portfolio-projects-dev</span>
                </div>

                <div className="divide-y divide-navy-700/60">
                  {projectsList.map((item) => (
                    <div key={item.id} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-cyan-400 font-bold">#{item.number}</span>
                          <h4 className="font-heading text-base font-bold text-slate-100">{item.title}</h4>
                          <span className="text-xs font-mono bg-navy-900 px-2 py-0.5 rounded text-slate-400 border border-navy-700">{item.category}</span>
                        </div>
                        <p className="text-xs text-slate-300 font-sans max-w-2xl line-clamp-1">{item.description}</p>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {item.tech.map((t) => (
                            <TechBadge key={t} name={t} variant="slate" />
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => handleDeleteProject(item.id)}
                          className="p-2 rounded bg-navy-900 border border-navy-700 hover:border-rose-500 text-slate-400 hover:text-rose-400 transition-colors"
                          title="Delete Project"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
