import React, { useState } from 'react';
import { Database, CheckCircle, AlertCircle, Save } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { useStore } from '../../store/useStore';
import { testSupabaseConnection } from '../../lib/supabase';

const SupabasePage: React.FC = () => {
  const { integrations, updateIntegration } = useStore();
  const [status, setStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');

  const handleTest = async () => {
    setStatus('testing');
    const success = await testSupabaseConnection(integrations.supabaseUrl, integrations.supabaseKey);
    setStatus(success ? 'success' : 'error');
  };

  const handleSave = () => {
    // Save logic handled by store auto-persist, visual feedback here
    setStatus('idle');
    // alert('Saved');
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white">
          <Database className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold dark:text-white">Supabase Integration</h1>
          <p className="text-gray-500">Connect your project to a Supabase backend.</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 space-y-6">
        <Input 
          label="Project URL" 
          placeholder="https://xyz.supabase.co" 
          value={integrations.supabaseUrl}
          onChange={(e) => updateIntegration('supabaseUrl', e.target.value)}
        />
        
        <Input 
          label="Anon API Key" 
          type="password"
          placeholder="eyJh..." 
          value={integrations.supabaseKey}
          onChange={(e) => updateIntegration('supabaseKey', e.target.value)}
        />

        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-2">
            {status === 'success' && <span className="text-green-600 flex items-center gap-1 text-sm font-medium"><CheckCircle className="w-4 h-4" /> Connected</span>}
            {status === 'error' && <span className="text-red-600 flex items-center gap-1 text-sm font-medium"><AlertCircle className="w-4 h-4" /> Connection Failed</span>}
            {status === 'testing' && <span className="text-gray-500 text-sm">Testing connection...</span>}
          </div>
          
          <div className="flex gap-3">
             <Button variant="outline" onClick={handleTest}>Test Connection</Button>
             <Button onClick={handleSave}><Save className="w-4 h-4 mr-2" /> Save Settings</Button>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 rounded-lg p-4">
        <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">How to find these keys?</h4>
        <ol className="list-decimal list-inside space-y-1 text-sm text-blue-700 dark:text-blue-400">
          <li>Go to your Supabase Dashboard</li>
          <li>Select your project</li>
          <li>Navigate to Settings &gt; API</li>
          <li>Copy the URL and Anon Public Key</li>
        </ol>
      </div>
    </div>
  );
};

export default SupabasePage;
