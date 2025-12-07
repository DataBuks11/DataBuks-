import React, { useState } from 'react';
import { Github, GitBranch, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { useStore } from '../../store/useStore';

const GithubPage: React.FC = () => {
  const { integrations, updateIntegration } = useStore();
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    // Mock OAuth flow
    const width = 600;
    const height = 700;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    
    // In a real app, this would redirect to GitHub OAuth
    setTimeout(() => {
       setIsConnected(true);
       updateIntegration('githubRepo', 'user/repo-name');
    }, 1000);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-white">
          <Github className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold dark:text-white">GitHub Integration</h1>
          <p className="text-gray-500">Sync your code and deploy to GitHub Pages.</p>
        </div>
      </div>

      {!isConnected ? (
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-8 text-center">
           <Github className="w-16 h-16 mx-auto mb-4 text-gray-400" />
           <h3 className="text-xl font-bold mb-2 dark:text-white">Connect to GitHub</h3>
           <p className="text-gray-500 mb-6 max-w-md mx-auto">
             Authorize Lumina to access your repositories. We'll create a new repository for your project and push updates automatically.
           </p>
           <Button onClick={handleConnect} size="lg">
             Connect GitHub Account
             <ArrowRight className="ml-2 w-4 h-4" />
           </Button>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 space-y-6">
           <div className="flex items-center justify-between pb-6 border-b border-gray-100 dark:border-gray-800">
             <div className="flex items-center gap-3">
               <img src="https://github.com/github.png" className="w-10 h-10 rounded-full" alt="GH" />
               <div>
                 <p className="font-semibold dark:text-white">demo-user</p>
                 <p className="text-sm text-green-500 flex items-center gap-1">
                   <span className="w-2 h-2 rounded-full bg-green-500"></span> Connected
                 </p>
               </div>
             </div>
             <Button variant="outline" size="sm" onClick={() => setIsConnected(false)}>Disconnect</Button>
           </div>

           <div className="space-y-4">
             <h4 className="font-semibold dark:text-white">Repository Settings</h4>
             <Input 
               label="Repository Name" 
               value={integrations.githubRepo} 
               onChange={(e) => updateIntegration('githubRepo', e.target.value)}
             />
             <div className="flex gap-4">
               <Button className="flex-1">Create & Push</Button>
               <Button variant="outline" onClick={() => window.open('https://github.com', '_blank')}>
                 Open on GitHub <ExternalLink className="ml-2 w-4 h-4" />
               </Button>
             </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default GithubPage;