import React from 'react';
import { BarChart, ArrowUp, Users, Eye, MousePointer } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AnalyticsPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="p-8 max-w-7xl mx-auto animate-fade">
      <h1 className="text-3xl font-bold mb-8 dark:text-white">{t.nav.analytics}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
           <div className="flex items-center justify-between mb-4">
             <span className="text-gray-500">Total Views</span>
             <Eye className="w-5 h-5 text-blue-500" />
           </div>
           <div className="flex items-end gap-2">
             <h3 className="text-3xl font-bold dark:text-white">24.5k</h3>
             <span className="text-green-500 text-sm flex items-center mb-1"><ArrowUp className="w-3 h-3" /> 12%</span>
           </div>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
           <div className="flex items-center justify-between mb-4">
             <span className="text-gray-500">Unique Visitors</span>
             <Users className="w-5 h-5 text-purple-500" />
           </div>
           <div className="flex items-end gap-2">
             <h3 className="text-3xl font-bold dark:text-white">11.2k</h3>
             <span className="text-green-500 text-sm flex items-center mb-1"><ArrowUp className="w-3 h-3" /> 8%</span>
           </div>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
           <div className="flex items-center justify-between mb-4">
             <span className="text-gray-500">Click Rate</span>
             <MousePointer className="w-5 h-5 text-orange-500" />
           </div>
           <div className="flex items-end gap-2">
             <h3 className="text-3xl font-bold dark:text-white">4.3%</h3>
             <span className="text-red-500 text-sm flex items-center mb-1"><ArrowUp className="w-3 h-3 rotate-180" /> 1%</span>
           </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-800 h-96 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <BarChart className="w-16 h-16 mx-auto mb-4 opacity-20" />
          <p>Detailed chart visualization would be rendered here using Recharts or Chart.js</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
