import React, { useState } from 'react';
import { Globe, Check, AlertCircle, Plus } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { useStore } from '../../store/useStore';

const DomainPage: React.FC = () => {
  const { integrations, updateIntegration } = useStore();
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleVerify = () => {
    if (!integrations.customDomain) return;
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setVerificationStatus('success');
    }, 2000);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center text-white">
          <Globe className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold dark:text-white">Custom Domain</h1>
          <p className="text-gray-500">Connect a custom domain to your project.</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 space-y-6">
        <div className="flex gap-4 items-end">
          <div className="flex-1">
            <Input 
              label="Domain Name" 
              placeholder="www.yourdomain.com"
              value={integrations.customDomain}
              onChange={(e) => updateIntegration('customDomain', e.target.value)}
            />
          </div>
          <Button onClick={handleVerify} disabled={isVerifying || !integrations.customDomain}>
            {isVerifying ? 'Verifying...' : 'Add Domain'}
          </Button>
        </div>

        {verificationStatus === 'success' && (
          <div className="p-4 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-lg flex items-start gap-3">
             <Check className="w-5 h-5 text-green-600 mt-0.5" />
             <div>
               <h4 className="font-semibold text-green-800 dark:text-green-400">Domain Verified</h4>
               <p className="text-sm text-green-700 dark:text-green-300">Your domain has been successfully connected to your project.</p>
             </div>
          </div>
        )}

        <div className="border-t border-gray-100 dark:border-gray-800 pt-6">
          <h3 className="font-semibold mb-4 dark:text-white">DNS Configuration</h3>
          <div className="bg-gray-50 dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
             <table className="w-full text-sm text-left">
               <thead className="bg-gray-100 dark:bg-gray-800 text-gray-500 font-medium">
                 <tr>
                   <th className="px-4 py-2">Type</th>
                   <th className="px-4 py-2">Name</th>
                   <th className="px-4 py-2">Value</th>
                 </tr>
               </thead>
               <tbody>
                 <tr className="border-b border-gray-200 dark:border-gray-800">
                   <td className="px-4 py-3 font-mono">A</td>
                   <td className="px-4 py-3 font-mono">@</td>
                   <td className="px-4 py-3 font-mono text-gray-500">76.76.21.21</td>
                 </tr>
                 <tr>
                   <td className="px-4 py-3 font-mono">CNAME</td>
                   <td className="px-4 py-3 font-mono">www</td>
                   <td className="px-4 py-3 font-mono text-gray-500">cname.lumina.ai</td>
                 </tr>
               </tbody>
             </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainPage;