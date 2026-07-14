import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <div className="pt-6 pb-12 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12 space-y-2">
        <span className="text-xs font-semibold tracking-wider text-accent-purple uppercase">Showcase</span>
        <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight my-0">My Projects</h2>
      </div>

      {/* Filter Categories */}
      <div className="flex justify-center gap-3 mb-10">
        {['All', 'Web Development', 'JavaScript'].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all duration-300 ${
              activeFilter === cat
                ? 'bg-accent-purple border-accent-purple text-white shadow-lg shadow-accent-purple/20'
                : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </div>
  );
}
