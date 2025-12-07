import React from 'react';
import { useStore } from '../store/useStore';
import { Plus, MoreVertical, Clock, Folder } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { playClick } from '../lib/sounds';

const DashboardPage: React.FC = () => {
  const { projects, user } = useStore();
  const navigate = useNavigate();

  const handleNewProject = () => {
    playClick();
    navigate('/hero');
  };

  return (
    <div className="p-8 max-w-7xl mx-auto animate-fade">
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold dark:text-white">Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Welcome back, {user.name}</p>
        </div>
        <Button onClick={handleNewProject}>
          <Plus className="w-4 h-4 mr-2" />
          New Project
        </Button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Create Card */}
        <div 
          onClick={handleNewProject}
          className="group cursor-pointer border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl flex flex-col items-center justify-center p-8 hover:border-primary hover:bg-primary/5 transition-all h-64"
        >
          <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors mb-4">
            <Plus className="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-white" />
          </div>
          <h3 className="font-semibold text-lg dark:text-white">Create New Website</h3>
          <p className="text-sm text-gray-500 mt-2 text-center">Start from scratch with AI</p>
        </div>

        {/* Project Cards */}
        {projects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-shadow group flex flex-col h-64">
            <div className="flex-1 bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
              {/* Mock Thumbnail */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-300 dark:text-gray-600">
                 <Folder className="w-16 h-16 opacity-50" />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors cursor-pointer" onClick={() => navigate('/editor')}></div>
            </div>
            
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-lg truncate dark:text-white">{project.name}</h3>
                <button className="text-gray-400 hover:text-gray-600 dark:hover:text-white">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center text-sm text-gray-500 gap-2">
                <Clock className="w-3 h-3" />
                <span>Edited {project.lastEdited}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
