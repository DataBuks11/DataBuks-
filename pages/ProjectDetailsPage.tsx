import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Edit, Globe, Activity } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useStore } from '../store/useStore';

const ProjectDetailsPage: React.FC = () => {
  const { id } = useParams();
  const { projects } = useStore();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) return <div className="p-8">Project not found</div>;

  return (
    <div className="p-8 max-w-7xl mx-auto animate-fade">
      <Button variant="ghost" onClick={() => navigate('/projects')} className="mb-6 pl-0">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
      </Button>

      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold dark:text-white">{project.name}</h1>
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => window.open('about:blank', '_blank')}>
            <Globe className="w-4 h-4 mr-2" /> View Live
          </Button>
          <Button onClick={() => navigate('/editor')}>
            <Edit className="w-4 h-4 mr-2" /> Open Editor
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
           <h3 className="text-lg font-semibold mb-4 dark:text-white">Project Overview</h3>
           <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 mb-4">
             Project Thumbnail Preview
           </div>
           <p className="text-gray-600 dark:text-gray-400">
             This project was created using Lumina AI. It features a responsive layout, dark mode support, and integrated authentication.
           </p>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-lg font-semibold mb-4 dark:text-white flex items-center gap-2">
              <Activity className="w-5 h-5" /> Quick Stats
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-500">Status</span>
                <span className="text-green-500 font-medium">Active</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Framework</span>
                <span className="dark:text-white">React + Vite</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Last Deploy</span>
                <span className="dark:text-white">{project.lastEdited}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
