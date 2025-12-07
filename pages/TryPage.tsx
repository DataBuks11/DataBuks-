import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Wand2, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import Background3D from '../components/three/Background3D';
import { fadeEnter } from '../lib/animations';
import { useStore } from '../store/useStore';

const TryPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { updateFileContent } = useStore();
  
  const [prompt, setPrompt] = useState(location.state?.initialPrompt || '');
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    fadeEnter('.animate-fade', 0);
  }, []);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);

    // Simulate AI Generation Delay
    setTimeout(() => {
      // Mock generated content based on prompt
      const mockGeneratedHTML = `
<!DOCTYPE html>
<html>
<head>
<title>Generated Site</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 text-gray-900 font-sans">
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-indigo-600">Brand</h1>
      <nav>
        <ul class="flex space-x-6">
          <li><a href="#" class="hover:text-indigo-600">Home</a></li>
          <li><a href="#" class="hover:text-indigo-600">Services</a></li>
          <li><a href="#" class="hover:text-indigo-600">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
  
  <main>
    <section class="py-20 bg-indigo-600 text-white text-center">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-5xl font-extrabold mb-6">Built based on: "${prompt.substring(0, 30)}..."</h2>
        <p class="text-xl mb-8 opacity-90">This is a fully generated responsive layout ready for customization.</p>
        <button class="bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">Get Started</button>
      </div>
    </section>

    <section class="py-16 max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
      <div class="p-6 bg-white rounded-xl shadow-md">
        <h3 class="text-xl font-bold mb-2">Feature One</h3>
        <p class="text-gray-600">Detailed description of the first feature goes here.</p>
      </div>
      <div class="p-6 bg-white rounded-xl shadow-md">
        <h3 class="text-xl font-bold mb-2">Feature Two</h3>
        <p class="text-gray-600">Detailed description of the second feature goes here.</p>
      </div>
      <div class="p-6 bg-white rounded-xl shadow-md">
        <h3 class="text-xl font-bold mb-2">Feature Three</h3>
        <p class="text-gray-600">Detailed description of the third feature goes here.</p>
      </div>
    </section>
  </main>
</body>
</html>`;
      
      updateFileContent('index.html', mockGeneratedHTML);
      setIsGenerating(false);
      navigate('/editor');
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col items-center justify-center relative overflow-hidden p-4">
      <Background3D className="opacity-40" />
      
      <div className="max-w-3xl w-full z-10 text-center animate-fade">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-8 shadow-lg shadow-primary/30">
          <Wand2 className="w-8 h-8 text-white" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">Describe your dream website</h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 mb-10">We'll generate the design, code, and copy in seconds.</p>
        
        <div className="relative">
          <textarea
            className="w-full h-48 p-6 pr-32 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-lg resize-none shadow-xl dark:text-white"
            placeholder="Describe the layout, colors, sections, and purpose..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <div className="absolute bottom-6 right-6">
            <Button 
              size="lg" 
              onClick={handleGenerate} 
              disabled={isGenerating || !prompt.trim()}
              className="shadow-lg shadow-primary/25"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  Building...
                </>
              ) : (
                <>
                  Generate Website
                  <Wand2 className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </div>
        
        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400">
           <span>Suggested:</span>
           <button className="hover:text-primary transition" onClick={() => setPrompt("A landing page for a coffee shop with a menu section")}>Coffee Shop</button>
           <button className="hover:text-primary transition" onClick={() => setPrompt("Portfolio for a UX designer with gallery")}>UX Portfolio</button>
           <button className="hover:text-primary transition" onClick={() => setPrompt("SaaS pricing page with 3 tiers")}>SaaS Pricing</button>
        </div>
      </div>
    </div>
  );
};

export default TryPage;
