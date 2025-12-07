import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="p-8 max-w-4xl mx-auto animate-fade text-center">
      <h1 className="text-4xl font-bold mb-6 dark:text-white">{t.nav.about} Lumina</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
        We are revolutionizing web development by combining the power of Generative AI with intuitive design tools.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
           <h3 className="text-lg font-bold mb-2 dark:text-white">Our Mission</h3>
           <p className="text-gray-500">To empower everyone to build professional software.</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
           <h3 className="text-lg font-bold mb-2 dark:text-white">Our Technology</h3>
           <p className="text-gray-500">Powered by Nano Banana Pro and Veo 3.1 models.</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
           <h3 className="text-lg font-bold mb-2 dark:text-white">Global Reach</h3>
           <p className="text-gray-500">Serving creators in over 120 countries.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
