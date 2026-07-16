import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Code, CheckCircle2, Zap } from 'lucide-react';
import { projectsData } from '../data/projects';

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-slate-300">
        <h2 className="text-2xl font-bold text-white mb-4">Project Not Found</h2>
        <button
          onClick={() => navigate('/projects')}
          className="px-5 py-2.5 bg-accent-purple text-white rounded-xl shadow-lg hover:bg-accent-purple/90 transition-all"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  const getCorrectUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    const base = import.meta.env.BASE_URL || '/';
    const cleanBase = base.endsWith('/') ? base : `${base}/`;
    if (url === '/todolist') {
      return `${cleanBase}#/todolist`;
    }
    const cleanUrl = url.startsWith('/') ? url.slice(1) : url;
    return `${cleanBase}${cleanUrl}`;
  };

  return (
    <div className="min-h-screen bg-dark-bg text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors group text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </button>

        {/* Title and Action Buttons */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-semibold px-3 py-1 rounded-full bg-accent-purple/10 text-accent-purple border border-accent-purple/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl font-medium text-white tracking-tight my-0">
              {project.title}
            </h1>
          </div>

          <div className="flex gap-4">
            {project.liveUrl && (
              <button
                onClick={() => setShowConfirmModal(true)}
                className="px-5 py-2.5 bg-accent-purple text-white text-sm font-semibold rounded-xl shadow-lg hover:bg-accent-purple/90 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            )}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 bg-white/5 border border-white/10 text-white text-sm font-semibold rounded-xl hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <span>View Code</span>
                <Code className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Details Section */}
          <div className="lg:col-span-7 space-y-8">
            {/* Overview */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white tracking-tight m-0">Overview</h2>
              <p className="text-slate-300 text-sm leading-relaxed">{project.overview}</p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white tracking-tight m-0 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-purple" />
                <span>Key Features</span>
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-accent-purple mt-0.5">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white tracking-tight m-0 flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent-blue" />
                <span>Technologies Used</span>
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techUsed.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-dark-card border border-white/5 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges & Learning */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-dark-card border border-white/5 rounded-2xl p-5 space-y-2">
                <h3 className="text-white font-semibold text-sm">Challenges</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{project.challenges}</p>
              </div>
              <div className="bg-dark-card border border-white/5 rounded-2xl p-5 space-y-2">
                <h3 className="text-white font-semibold text-sm">What I Learned</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{project.learning}</p>
              </div>
            </div>
          </div>

          {/* Visual Showcase (Mockup) */}
          <div className="lg:col-span-5">
            <div className="bg-dark-card border border-white/5 rounded-3xl p-4 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/10 to-accent-blue/10 pointer-events-none" />
              
              {/* Window Header */}
              <div className="flex items-center gap-1.5 border-b border-white/5 pb-3 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-[10px] text-slate-500 ml-2 font-mono">{project.title.toLowerCase().replace(/\s+/g, '-')}.com</span>
              </div>

              {/* Dynamic Interactive Render */}
              <div className="aspect-[3/4] bg-dark-bg rounded-2xl border border-white/5 p-6 flex flex-col relative overflow-hidden">
                {project.id === 'weather' ? (
                  <div className="flex-1 flex flex-col justify-between text-center">
                    <div className="space-y-1">
                      <h4 className="text-white font-bold text-lg">New Delhi</h4>
                      <p className="text-slate-400 text-xs">Scattered Clouds</p>
                    </div>
                    
                    <div className="my-auto space-y-2">
                      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-xl opacity-30 animate-pulse" />
                      <p className="text-5xl font-extrabold text-white tracking-tighter">32°C</p>
                      <p className="text-xs text-accent-blue font-medium">Feels like 35°C</p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 bg-white/5 p-3 rounded-xl border border-white/5">
                      <div>
                        <p className="text-[10px] text-slate-400">Humidity</p>
                        <p className="text-xs font-semibold text-white">64%</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-400">Wind</p>
                        <p className="text-xs font-semibold text-white">12 km/h</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-400">Visibility</p>
                        <p className="text-xs font-semibold text-white">6 km</p>
                      </div>
                    </div>
                  </div>
                ) : project.id === 'todo' ? (
                  <div className="flex-1 flex flex-col gap-4">
                    <h4 className="text-white font-bold text-base text-center">Project Tracker</h4>
                    
                    <div className="space-y-2 flex-1">
                      {[
                        { text: 'Design new landing page layout', done: true },
                        { text: 'Integrate OpenWeather API keys', done: true },
                        { text: 'Configure Tailwind CSS build process', done: false },
                        { text: 'Deploy live application to Vercel', done: false },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between bg-white/5 px-3 py-2.5 rounded-lg border border-white/5">
                          <span className={`text-xs ${item.done ? 'line-through text-slate-500' : 'text-white'}`}>
                            {item.text}
                          </span>
                          <span className={`w-3.5 h-3.5 rounded border flex items-center justify-center text-[8px] ${item.done ? 'bg-accent-purple border-accent-purple text-white' : 'border-slate-600'}`}>
                            {item.done && '✓'}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <div className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-slate-500">
                        Add a task...
                      </div>
                      <button className="px-3 bg-accent-purple text-white text-xs rounded-lg font-bold">
                        Add
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col justify-between items-center text-center">
                    <div className="space-y-1">
                      <h4 className="text-white font-bold text-base">{project.title}</h4>
                      <p className="text-slate-400 text-xs">Live Interactive Simulator</p>
                    </div>

                    <div className="w-24 h-24 rounded-full border border-dashed border-accent-purple/40 flex items-center justify-center text-accent-purple text-xs font-bold font-mono animate-spin-slow">
                      SYSTEM
                    </div>

                    <p className="text-xs text-slate-400 max-w-[200px]">
                      Complete interface module loaded. Press buttons below to check online repository.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-dark-card border border-white/10 rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-6 transform scale-100 transition-transform">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-accent-purple/10 text-accent-purple">
                <Zap className="w-6.5 h-6.5 animate-pulse" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg leading-tight">
                  Launch {project.title}?
                </h3>
                <p className="text-slate-400 text-xs mt-1">
                  Would you like to open the live interactive application in a new window?
                </p>
              </div>
            </div>

            <div className="flex gap-3 justify-end pt-2">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <a
                href={getCorrectUrl(project.liveUrl)}
                target="_blank"
                rel="noreferrer"
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-accent-purple text-white hover:bg-accent-purple/90 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Go to live application</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
