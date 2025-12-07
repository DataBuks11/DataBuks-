import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import Background3D from '../components/three/Background3D';
import { fadeEnter } from '../lib/animations';

const HeroOnboarding: React.FC = () => {
  const navigate = useNavigate();
  const [idea, setIdea] = useState('');

  useEffect(() => {
    fadeEnter('.animate-item', 100);
  }, []);

  const handleContinue = () => {
    // Pass the idea to the next step via state or query param
    navigate('/try', { state: { initialPrompt: idea } });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col md:flex-row">
      
      {/* Left Panel - Branding */}
      <div className="w-full md:w-1/3 bg-white dark:bg-gray-900 p-8 flex flex-col justify-between border-r border-gray-200 dark:border-gray-800 z-10">
        <div>
          <div className="flex items-center gap-2 mb-12">
             <div className="w-8 h-8 bg-gradient-to-tr from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold">L</div>
             <span className="font-bold text-xl dark:text-white">Lumina</span>
          </div>
          
          <h2 className="animate-item text-3xl font-bold mb-4 dark:text-white">Let's build something amazing.</h2>
          <p className="animate-item text-gray-500 dark:text-gray-400">Your journey to a perfect website starts with a simple idea.</p>
        </div>
        
        <div className="animate-item py-8">
          <div className="flex items-center gap-4 text-sm text-gray-500">
             <div className="w-2 h-2 rounded-full bg-primary"></div>
             <span>AI-Powered Generation</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
             <div className="w-2 h-2 rounded-full bg-primary"></div>
             <span>Full Code Ownership</span>
          </div>
        </div>
      </div>

      {/* Right Panel - Input */}
      <div className="flex-1 relative flex items-center justify-center p-8">
        <Background3D className="opacity-30" color="#3b82f6" />
        
        <div className="max-w-xl w-full z-10">
          <div className="animate-item bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700">
            <h3 className="text-2xl font-semibold mb-6 dark:text-white">What do you want to build?</h3>
            
            <textarea
              className="w-full h-40 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-gray-950 outline-none transition-all resize-none text-lg mb-6 dark:text-white"
              placeholder="e.g., A minimalist portfolio for a photographer with a dark theme and gallery grid..."
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              autoFocus
            />
            
            <div className="flex justify-end">
              <Button size="lg" onClick={handleContinue} disabled={!idea.trim()}>
                Continue
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOnboarding;
