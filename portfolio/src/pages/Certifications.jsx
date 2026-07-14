import React from 'react';
import { Award } from 'lucide-react';

export default function Certifications({ certificationsData, achievementsData }) {
  return (
    <div className="pt-6 pb-12 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16 space-y-2">
        <span className="text-xs font-semibold tracking-wider text-accent-purple uppercase">Recognition</span>
        <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight my-0">Certifications &amp; Achievements</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Certifications column */}
        <div className="lg:col-span-6 space-y-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-accent-purple/10 rounded-lg text-accent-purple">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Certifications</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certificationsData.map((cert, idx) => (
              <div
                key={idx}
                className="bg-dark-card border border-white/5 rounded-2xl p-5 hover:border-accent-purple/20 transition-all duration-300 flex flex-col justify-between gap-4 h-full shadow-lg"
              >
                <div>
                  <span className="text-[10px] font-bold text-accent-purple uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                  <h4 className="text-white font-semibold text-sm mt-1 leading-snug">
                    {cert.title}
                  </h4>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500 border-t border-white/5 pt-3">
                  <span>Verified Credentials</span>
                  <span className="font-mono text-accent-purple font-semibold">{cert.code}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements column */}
        <div className="lg:col-span-6 space-y-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-accent-blue/10 rounded-lg text-accent-blue">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Achievements &amp; Activities</h3>
          </div>

          <div className="bg-dark-card border border-white/5 rounded-3xl p-6 space-y-4 shadow-xl">
            {achievementsData.map((item, idx) => (
              <div key={idx} className="flex gap-3 text-xs leading-relaxed text-slate-300">
                <span className="text-accent-blue font-bold text-base leading-none">•</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
