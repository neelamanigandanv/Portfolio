import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Download, ArrowUpRight, Mail } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';
import myPhoto from '../assets/myphoto.png';

export default function Home({ handleDownloadResume }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden pt-4 pb-12">
      {/* Glow circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center px-4">
        {/* Text details */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <span className="text-sm font-semibold tracking-widest text-accent-purple uppercase">
            Welcome to my portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight my-0 leading-tight">
            Hi, I'm <br />
            <span className="text-gradient">Neelamanigandan V</span>
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-slate-200">
            Frontend Developer &amp; Computer Science Student
          </p>
          <p className="text-slate-400 text-sm max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Motivated and enthusiastic Computer Science undergraduate with strong skills in web development and problem solving. Looking for an opportunity to apply my knowledge and contribute to impactful projects.
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
            <button
              onClick={handleDownloadResume}
              className="px-6 py-3 bg-accent-purple text-white text-sm font-semibold rounded-xl shadow-lg hover:bg-accent-purple/90 transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Download Resume</span>
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate('/projects')}
              className="px-6 py-3 bg-white/5 border border-white/10 text-white text-sm font-semibold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Socials */}
          <div className="flex justify-center lg:justify-start gap-6 pt-6 text-slate-400">
            <a href="https://github.com/Neelamanigandan" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/neelamanigandan-v" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:neelamanigandan2005@gmail.com" className="hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Picture with glowing borders */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full p-2 bg-gradient-to-tr from-accent-purple to-accent-blue shadow-[0_0_40px_rgba(139,92,246,0.3)] group">
            <div className="w-full h-full rounded-full overflow-hidden bg-dark-bg border-4 border-dark-bg">
              <img
                src={myPhoto}
                alt="Neelamanigandan V"
                style={{ objectPosition: '85% center' }}
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            {/* Outer orbit stats badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-dark-card border border-white/5 px-6 py-2.5 rounded-2xl flex items-center gap-3 shadow-2xl">
              <div className="text-center border-r border-white/10 pr-3">
                <p className="text-[10px] text-slate-400 uppercase">CGPA</p>
                <p className="text-sm font-bold text-emerald-400">8.21</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] text-slate-400 uppercase">Projects</p>
                <p className="text-sm font-bold text-white">4+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
