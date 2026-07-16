import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

export default function ProjectCard({ project }) {
  const CardLink = ({ children }) => {
    return (
      <Link
        to={`/projects/${project.id}`}
        className="bg-dark-card border border-white/5 rounded-2xl overflow-hidden cursor-pointer group hover:border-accent-purple/30 hover:shadow-[0_10px_30px_rgba(139,92,246,0.1)] transition-all duration-300 flex flex-col h-full"
      >
        {children}
      </Link>
    );
  };

  return (
    <CardLink>
      {/* Project Mock Preview */}
      <div className="relative aspect-video w-full bg-slate-900 flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/20 to-accent-blue/10 mix-blend-overlay group-hover:scale-105 transition-transform duration-500" />
        
        {/* Generative UI Mock */}
        <div className="w-[85%] h-[80%] rounded-t-lg bg-dark-bg border border-white/10 shadow-2xl p-2 relative flex flex-col gap-1.5 overflow-hidden">
          <div className="flex items-center gap-1 border-b border-white/5 pb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="text-[8px] text-slate-500 ml-1 font-mono">{project.title.toLowerCase().replace(/\s+/g, '-')}.local</span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center p-2">
            <span className="text-white font-bold text-xs">{project.title}</span>
            <span className="text-[9px] text-slate-400 mt-1 max-w-[160px] line-clamp-2">{project.description}</span>
          </div>
        </div>

        {/* Hover overlay button */}
        <div className="absolute inset-0 bg-dark-bg/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <span className="px-4 py-2 bg-accent-purple text-white text-xs font-semibold rounded-lg shadow-lg hover:bg-accent-purple/90 transition-colors flex items-center gap-1.5">
            <span>View Details</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-accent-purple transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed flex-1">
          {project.description}
        </p>
        <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-[11px] text-slate-500">
          <span>Category: {project.category}</span>
          <span className="text-accent-purple font-medium group-hover:underline">Explore →</span>
        </div>
      </div>
    </CardLink>
  );
}
