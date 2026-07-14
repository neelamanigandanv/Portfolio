import { Code2, Database, Terminal, Cpu, Brain, Users, MessageSquare, Award, GitBranch, Atom } from 'lucide-react';
import { Github } from './Icons';

export default function SkillsGrid() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 'Intermediate', icon: Code2, color: 'text-amber-500 bg-amber-500/10' },
        { name: 'JavaScript', level: 'Advanced', icon: Terminal, color: 'text-yellow-400 bg-yellow-400/10' },
      ],
    },
    {
      title: 'Web Technologies & Core Concepts',
      skills: [
        { name: 'HTML5', level: 'Advanced', icon: Cpu, color: 'text-orange-500 bg-orange-500/10' },
        { name: 'CSS3', level: 'Advanced', icon: Cpu, color: 'text-blue-500 bg-blue-500/10' },
        { name: 'React', level: 'Advanced', icon: Atom, color: 'text-sky-400 bg-sky-400/10' },
        { name: 'JavaScript', level: 'Advanced', icon: Terminal, color: 'text-yellow-400 bg-yellow-400/10' },
        { name: 'OOP', level: 'Concept', icon: Brain, color: 'text-purple-400 bg-purple-400/10' },
      ],
    },
    {
      title: 'Databases & Tools',
      skills: [
        { name: 'MySQL', level: 'Database', icon: Database, color: 'text-cyan-500 bg-cyan-500/10' },
        { name: 'VS Code', level: 'Tool', icon: Code2, color: 'text-blue-400 bg-blue-400/10' },
        { name: 'Git', level: 'Tool', icon: GitBranch, color: 'text-orange-600 bg-orange-600/10' },
        { name: 'GitHub', level: 'Tool', icon: Github, color: 'text-slate-300 bg-slate-300/10' },
      ],
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Problem Solving', level: 'Expert', icon: Award, color: 'text-emerald-400 bg-emerald-400/10' },
        { name: 'Teamwork', level: 'Collaborative', icon: Users, color: 'text-indigo-400 bg-indigo-400/10' },
        { name: 'Communication', level: 'Fluent', icon: MessageSquare, color: 'text-pink-400 bg-pink-400/10' },
        { name: 'Leadership', level: 'Proactive', icon: Award, color: 'text-teal-400 bg-teal-400/10' },
      ],
    },
  ];

  return (
    <div className="space-y-12">
      {skillCategories.map((category, idx) => (
        <div key={idx} className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-200 border-l-2 border-accent-purple pl-3">
            {category.title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {category.skills.map((skill, sIdx) => {
              const Icon = skill.icon;
              return (
                <div
                  key={sIdx}
                  className="bg-dark-card border border-white/5 rounded-xl p-5 hover:border-accent-purple/30 hover:bg-dark-card-hover transition-all duration-300 group flex items-center gap-4 shadow-lg shadow-black/40"
                >
                  <div className={`p-3 rounded-lg ${skill.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-base group-hover:text-accent-purple transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">{skill.level}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
