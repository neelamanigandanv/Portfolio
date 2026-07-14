import React from 'react';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';

export default function Contact({ handleDownloadResume }) {
  return (
    <div className="pt-6 pb-12 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16 space-y-2">
        <span className="text-xs font-semibold tracking-wider text-accent-purple uppercase">Connect</span>
        <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight my-0">Get In Touch</h2>
      </div>

      <div className="flex justify-center">
        {/* Quick Contact Info */}
        <div className="w-full max-w-lg space-y-6">
          <div className="bg-dark-card border border-white/5 rounded-3xl p-8 space-y-6 shadow-xl">
            <h3 className="text-lg font-bold text-white m-0">Contact Details</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              I'm always open to discussing new opportunities, projects, or collaborations. Send a message or get in touch directly!
            </p>

            <div className="space-y-4">
              {[
                { label: 'Email', val: 'neelamanigandan2005@gmail.com', icon: Mail, link: 'mailto:neelamanigandan2005@gmail.com' },
                { label: 'Phone', val: '+91 9360867522', icon: Phone },
                { label: 'Location', val: 'Mayiladuthurai, Tamil Nadu, India', icon: MapPin },
                { label: 'LinkedIn', val: 'linkedin.com/in/neelamanigandan-v', icon: Linkedin, link: 'https://linkedin.com/in/neelamanigandan-v' },
                { label: 'GitHub', val: 'github.com/Neelamanigandan', icon: Github, link: 'https://github.com/Neelamanigandan' }
              ].map((info, idx) => {
                const Icon = info.icon;
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="p-2 bg-white/5 rounded-lg text-slate-400 flex items-center justify-center h-10 w-10 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-medium">{info.label}</p>
                      {info.link ? (
                        <a href={info.link} target="_blank" rel="noreferrer" className="text-sm font-semibold text-white hover:text-accent-purple hover:underline transition-colors mt-0.5 block">
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

            <button
              onClick={handleDownloadResume}
              className="w-full py-3 bg-accent-purple text-white text-xs font-semibold rounded-xl shadow-lg hover:bg-accent-purple/90 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] mt-2"
            >
              <span>Download Resume</span>
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
