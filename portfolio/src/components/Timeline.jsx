import React from 'react';
import { Calendar, MapPin, Award, Briefcase } from 'lucide-react';

export default function Timeline() {
  const educationItems = [
    {
      title: 'Bachelor of Science in Computer Science',
      institution: 'A.V.C. College of Arts and Science',
      period: '2023 - 2026',
      score: 'CGPA: 8.21',
      location: 'Mayiladuthurai, Tamil Nadu, India',
    }
  ];

  const experienceItems = [
    {
      title: 'Web Developer Intern',
      institution: 'Nexia Digital',
      period: 'July 2026 - Present',
      location: 'Bengaluru, India',
      description: [
        'Developed responsive and interactive frontend applications using React.js, JavaScript, HTML, Tailwind CSS, and CSS.',
        'Planning to expand into backend development using Node.js and Express.js to build full-stack applications and integrate APIs and databases.',
      ],
    },
    {
      title: 'IoT Training Program',
      institution: 'Kaushal Vikas Yojana',
      period: 'Feb 2025 - Sept 2025',
      location: 'Tamil Nadu, India',
      description: [
        'Hands-on training on IoT devices, sensors, and embedded programming.',
        'Built small-scale IoT prototypes integrating hardware and explored applications of IoT in smart home automation.',
      ],
    },
    {
      title: 'Web Developer Intern',
      institution: 'Scopic Edutech Pvt. Ltd.',
      period: 'May 2024 - June 2024',
      location: 'Tamil Nadu, India',
      description: [
        'Developed a Weather Application using HTML, CSS, and JavaScript with real-time API integration.',
        'Worked closely with a team, enhancing collaboration and debugging skills.',
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Education Column */}
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-accent-purple/10 rounded-lg text-accent-purple">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white">Education</h3>
        </div>

        <div className="relative border-l border-white/10 pl-6 ml-4 space-y-8">
          {educationItems.map((item, idx) => (
            <div key={idx} className="relative">
              {/* Point indicator */}
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-accent-purple border-4 border-dark-bg" />
              
              <div className="bg-dark-card border border-white/5 rounded-2xl p-6 space-y-3 hover:border-accent-purple/20 transition-all duration-300">
                <div className="flex justify-between items-start gap-4 flex-wrap">
                  <div>
                    <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                    <p className="text-accent-purple text-sm font-medium mt-0.5">{item.institution}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-accent-purple/10 text-accent-purple text-xs font-semibold">
                    {item.period}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-4 text-xs text-slate-400 pt-1">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </span>
                  <span className="text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/10">
                    {item.score}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Column */}
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-accent-blue/10 rounded-lg text-accent-blue">
            <Briefcase className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white">Experience</h3>
        </div>

        <div className="relative border-l border-white/10 pl-6 ml-4 space-y-8">
          {experienceItems.map((item, idx) => (
            <div key={idx} className="relative">
              {/* Point indicator */}
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-accent-blue border-4 border-dark-bg" />
              
              <div className="bg-dark-card border border-white/5 rounded-2xl p-6 space-y-3 hover:border-accent-blue/20 transition-all duration-300">
                <div className="flex justify-between items-start gap-4 flex-wrap">
                  <div>
                    <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                    <p className="text-accent-blue text-sm font-medium mt-0.5">{item.institution}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-semibold">
                    {item.period}
                  </span>
                </div>
                
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <MapPin className="w-3.5 h-3.5" />
                  {item.location}
                </div>

                <ul className="list-disc list-inside space-y-1.5 text-slate-300 text-xs pl-1 pt-1 leading-relaxed">
                  {item.description.map((desc, dIdx) => (
                    <li key={dIdx}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
