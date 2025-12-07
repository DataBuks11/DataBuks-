import React, { useState } from 'react';
import { Layers, Rocket, CheckCircle, Clock } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useStore } from '../../store/useStore';

const PublishPage: React.FC = () => {
  const { previewHtml } = useStore();
  const [deployState, setDeployState] = useState<'idle' | 'deploying' | 'deployed'>('idle');
  const [lastDeployed, setLastDeployed] = useState<string | null>(null);

  const handleDeploy = () => {
    setDeployState('deploying');
    setTimeout(() => {
      setDeployState('deployed');
      setLastDeployed(new Date().toLocaleTimeString());
    }, 3000);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white">
          <Layers className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold dark:text-white">Publish</h1>
          <p className="text-gray-500">Deploy your website to the edge.</p>
        </div>
      </div>

      <div className="grid gap-6">
        {/* Main Deploy Card */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold dark:text-white">Production Deployment</h3>
              <p className="text-sm text-gray-500">Make your latest changes live.</p>
            </div>
            {deployState === 'deployed' && (
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <CheckCircle className="w-4 h-4" /> Live
              </span>
            )}
          </div>

          <div className="bg-gray-900 rounded-lg p-4 mb-6 font-mono text-sm text-gray-300">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <p>$ lumina deploy --prod</p>
            {deployState === 'deploying' && (
              <>
                <p className="text-blue-400">Building production bundle...</p>
                <p className="text-blue-400">Optimizing assets...</p>
                <p className="text-blue-400">Uploading to edge network...</p>
              </>
            )}
            {deployState === 'deployed' && (
              <p className="text-green-400">Success! Deployed in 2.4s</p>
            )}
          </div>

          <div className="flex gap-4">
            <Button onClick={handleDeploy} disabled={deployState === 'deploying'} size="lg" className="w-full sm:w-auto">
              {deployState === 'deploying' ? 'Deploying...' : 'Deploy Website'}
              <Rocket className="ml-2 w-4 h-4" />
            </Button>
            {deployState === 'deployed' && (
              <Button variant="outline" onClick={() => window.open('about:blank', '_blank')}>
                View Live Site
              </Button>
            )}
          </div>
        </div>

        {/* History */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="text-lg font-semibold mb-4 dark:text-white">Deployment History</h3>
          <div className="space-y-4">
            {lastDeployed && (
              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                 <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-green-500"></div>
                   <div>
                     <p className="font-medium text-sm dark:text-white">Commit: Update homepage copy</p>
                     <p className="text-xs text-gray-500">master • {lastDeployed}</p>
                   </div>
                 </div>
                 <Button variant="ghost" size="sm">Rollback</Button>
              </div>
            )}
            <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
               <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                 <div>
                   <p className="font-medium text-sm dark:text-white">Initial Deploy</p>
                   <p className="text-xs text-gray-500">master • 2 days ago</p>
                 </div>
               </div>
               <Button variant="ghost" size="sm">Rollback</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishPage;