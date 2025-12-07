import React from 'react';
import { Image, Film, Upload } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../contexts/LanguageContext';

const MediaPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="p-8 max-w-7xl mx-auto animate-fade">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold dark:text-white">{t.nav.media}</h1>
        <Button>
          <Upload className="w-4 h-4 mr-2" /> Upload Assets
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {/* Placeholder Items */}
        {[...Array(10)].map((_, i) => (
          <div key={i} className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center relative group cursor-pointer overflow-hidden">
            {i % 3 === 0 ? <Film className="w-8 h-8 opacity-40" /> : <Image className="w-8 h-8 opacity-40" />}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-sm font-medium">
              View
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaPage;
