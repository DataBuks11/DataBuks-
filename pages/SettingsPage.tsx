import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { AlertTriangle, Key, Monitor, Sliders } from 'lucide-react';

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', label: 'General', icon: Sliders },
    { id: 'appearance', label: 'Appearance', icon: Monitor },
    { id: 'api', label: 'API Keys', icon: Key },
    { id: 'danger', label: 'Danger Zone', icon: AlertTriangle },
  ];

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 dark:text-white">Settings</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Settings Sidebar */}
        <div className="w-full md:w-64 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.id 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="flex-1 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          {activeTab === 'general' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold dark:text-white">General Settings</h2>
              <Input label="Workspace Name" defaultValue="My Awesome Workspace" />
              <div className="flex items-center justify-between py-4 border-t border-gray-100 dark:border-gray-800">
                <div>
                   <h4 className="font-medium dark:text-white">Auto-Save</h4>
                   <p className="text-sm text-gray-500">Automatically save changes in the editor.</p>
                </div>
                <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'api' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold dark:text-white">API Configuration</h2>
              <p className="text-sm text-gray-500 mb-4">Manage keys for external services.</p>
              <Input label="OpenAI API Key" type="password" placeholder="sk-..." />
              <Input label="Anthropic API Key" type="password" placeholder="sk-ant-..." />
              <Button>Save Keys</Button>
            </div>
          )}
          
           {activeTab === 'danger' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-red-600">Danger Zone</h2>
              <div className="p-4 border border-red-200 bg-red-50 dark:bg-red-900/10 rounded-lg flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-red-800 dark:text-red-400">Delete Workspace</h4>
                  <p className="text-sm text-red-600 dark:text-red-300">Permanently remove this workspace and all projects.</p>
                </div>
                <Button variant="danger" size="sm">Delete</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
