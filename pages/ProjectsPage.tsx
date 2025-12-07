import React from 'react';
import { useStore } from '../store/useStore';
import { Folder, Search, Filter } from 'lucide-react';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const ProjectsPage: React.FC = () => {
  const { projects } = useStore();
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="p-8 max-w-7xl mx-auto animate-fade">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h1 className="text-3xl font-bold dark:text-white">{t.nav.projects}</h1>
        <div className="flex gap-4">
          <div className="w-64">
             <Input placeholder="Search projects..." className="bg-white dark:bg-gray-900" />
          </div>
          <Button variant="outline"><Filter className="w-4 h-4 mr-2" /> Filter</Button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all"
            onClick={() => navigate(`/projects/${project.id}`)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                <Folder className="w-6 h-6" />
              </div>
              <span className="text-xs text-gray-400">{project.lastEdited}</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 dark:text-white group-hover:text-primary transition-colors">{project.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Production ready build available.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
