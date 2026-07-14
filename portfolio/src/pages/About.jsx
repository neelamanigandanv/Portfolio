import React from 'react';
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';

export default function About() {
  return (
    <div className="pt-6 pb-12 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16 space-y-2">
        <span className="text-xs font-semibold tracking-wider text-accent-purple uppercase">Discovery</span>
        <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight my-0">About Me</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Bio Card */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-dark-card border border-white/5 rounded-3xl p-8 space-y-4 shadow-xl">
            <h3 className="text-xl font-bold text-white m-0">Career Objective</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              I am a motivated and enthusiastic Computer Science undergraduate who loves building web applications and solving real-world problems. I enjoy learning new technologies and turning ideas into responsive and user-friendly websites.
            </p>
            <p className="text-slate-400 text-xs leading-relaxed">
              Seeking an entry-level role to apply technical knowledge, contribute to impactful projects, and grow as a software professional in a dynamic organization.
            </p>
          </div>

          {/* Quick Education Summary Card */}
          <div className="bg-dark-card border border-white/5 rounded-3xl p-8 flex items-center gap-6 shadow-xl">
            <div className="p-4 bg-accent-purple/10 rounded-2xl text-accent-purple hidden sm:block">
              <BookOpen className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base">A.V.C. College of Arts and Science</h4>
              <p className="text-sm text-slate-400 mt-1">Bachelor of Science in Computer Science (2023 - 2026)</p>
              <p className="text-accent-purple text-xs font-semibold mt-2">Graduating with 8.21 CGPA</p>
            </div>
          </div>
        </div>

        {/* Right Contact Details Card */}
        <div className="lg:col-span-5">
          <div className="bg-dark-card border border-white/5 rounded-3xl p-8 space-y-6 shadow-xl">
            <h3 className="text-lg font-bold text-white m-0">Personal Information</h3>
            
            <div className="space-y-4">
              {[
                { label: 'Name', val: 'Neelamanigandan V', icon: Github },
                { label: 'Email', val: 'neelamanigandan2005@gmail.com', icon: Mail, link: 'mailto:neelamanigandan2005@gmail.com' },
                { label: 'Phone', val: '+91 9360867522', icon: Phone },
                { label: 'Location', val: 'Mayiladuthurai, Tamil Nadu, India', icon: MapPin }
              ].map((info, idx) => {
                const Icon = info.icon;
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="p-2 bg-white/5 rounded-lg text-slate-400 flex items-center justify-center h-10 w-10">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-medium">{info.label}</p>
                      {info.link ? (
                        <a href={info.link} className="text-sm font-semibold text-white hover:text-accent-purple hover:underline transition-colors mt-0.5 block">
                          {info.val}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-white mt-0.5">{info.val}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
