import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Code, Zap } from 'lucide-react';
import { Button } from '../components/ui/Button';
import Background3D from '../components/three/Background3D';
import { fadeEnter } from '../lib/animations';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fadeEnter('.animate-enter', 200);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white relative overflow-hidden">
      <Background3D color="#8b5cf6" className="opacity-50" />
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-gray-200/50 dark:border-gray-800/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 bg-gradient-to-tr from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold">L</div>
             <span className="font-bold text-xl">Lumina</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate('/dashboard')}>Login</Button>
            <Button onClick={() => navigate('/hero')}>Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="animate-enter inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4" />
          <span>The Future of Web Development</span>
        </div>
        
        <h1 ref={titleRef} className="animate-enter text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
          Build Websites <br />
          <span className="text-primary">at the Speed of Thought</span>
        </h1>
        
        <p className="animate-enter text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-10 delay-100">
          Describe your dream website in plain English. Lumina's advanced AI generates production-ready code, deploys instantly, and scales effortlessly.
        </p>
        
        <div ref={btnRef} className="animate-enter flex flex-col sm:flex-row gap-4 delay-200">
          <Button size="lg" onClick={() => navigate('/hero')} className="group">
            Try AI Builder
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" onClick={() => navigate('/dashboard')}>
            View Demo Projects
          </Button>
        </div>

        {/* Feature Grid */}
        <div className="animate-enter mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div className="p-6 rounded-2xl bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 backdrop-blur-sm">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Clean Code Export</h3>
            <p className="text-gray-500 dark:text-gray-400">Get clean, maintainable React & Tailwind code. No vendor lock-in.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 backdrop-blur-sm">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Instant Preview</h3>
            <p className="text-gray-500 dark:text-gray-400">See changes in real-time as the AI writes code before your eyes.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 backdrop-blur-sm">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4 text-green-600 dark:text-green-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">AI-Powered Design</h3>
            <p className="text-gray-500 dark:text-gray-400">Professional aesthetics generated automatically based on your brand.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
