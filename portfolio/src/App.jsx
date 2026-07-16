import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ArrowUp, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import ProjectDetails from './components/ProjectDetails';
import { 
  Home, 
  About, 
  Skills, 
  Projects, 
  Education, 
  Certifications, 
  Contact,
  TodoListPage
} from './pages';
import { Github, Linkedin } from './components/Icons';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for Back-to-top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    const base = import.meta.env.BASE_URL || '/';
    const cleanBase = base.endsWith('/') ? base : `${base}/`;
    link.href = `${cleanBase}Neelamanigandan_Resume.pdf`;
    link.download = 'Neelamanigandan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const certificationsData = [
    { title: 'CSS Certificate', issuer: 'HackerRank', code: 'CSS' },
    { title: 'JavaScript Certificate', issuer: 'HackerRank', code: 'JS' },
    { title: 'Problem Solving Certificate', issuer: 'HackerRank', code: 'PS' },
    { title: 'Introduction to Frontend Development', issuer: 'Meta (Coursera)', code: 'Meta' }
  ];

  const achievementsData = [
    'National Service Scheme (NSS): Actively involved in community development activities and social service campaigns.',
    'Represented the university Kho-Kho team at inter-university tournaments, demonstrating strong teamwork, discipline, and competitive spirit.',
    'Volunteered in college-level technical events and seminars, gaining organizational and leadership experience.',
    'Passionate about exploring and contributing to open-source projects, with a keen interest in collaborative learning and technology-driven impact.'
  ];

  return (
    <div className="bg-dark-bg min-h-screen text-slate-300 relative selection:bg-accent-purple/30 selection:text-white flex flex-col justify-between">
      <div>
        {/* Navigation Bar */}
        <Navbar />

        {/* Dynamic Page Router */}
        <main className="pt-16 pb-16">
          <Routes>
            <Route path="/" element={<Home handleDownloadResume={handleDownloadResume} />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/todolist" element={<TodoListPage />} />
            <Route path="/education" element={<Education />} />
            <Route 
              path="/certifications" 
              element={<Certifications certificationsData={certificationsData} achievementsData={achievementsData} />} 
            />
            <Route path="/contact" element={<Contact handleDownloadResume={handleDownloadResume} />} />
            <Route path="*" element={<Home handleDownloadResume={handleDownloadResume} />} />
          </Routes>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-dark-bg border-t border-white/5 py-8 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 Neelamanigandan V. All rights reserved.</p>
          
          <div className="flex gap-4">
            <a href="https://github.com/Neelamanigandan" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/neelamanigandan-v" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:neelamanigandan2005@gmail.com" className="hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Trigger */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 p-3 bg-accent-purple text-white rounded-full shadow-lg hover:bg-accent-purple/90 transition-all hover:scale-110 active:scale-95 z-30"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
