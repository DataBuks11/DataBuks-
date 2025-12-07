import React from 'react';
import { Search, Book, MessageCircle } from 'lucide-react';
import { Input } from '../components/ui/Input';
import { useLanguage } from '../contexts/LanguageContext';

const HelpPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="p-8 max-w-5xl mx-auto animate-fade">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4 dark:text-white">{t.nav.help}</h1>
        <div className="max-w-xl mx-auto">
          <Input placeholder="Search for help articles..." />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-primary transition-colors cursor-pointer">
          <Book className="w-8 h-8 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2 dark:text-white">Documentation</h3>
          <p className="text-gray-500">Read comprehensive guides on how to use the builder, integrate APIs, and deploy your sites.</p>
        </div>
        
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-primary transition-colors cursor-pointer">
          <MessageCircle className="w-8 h-8 text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2 dark:text-white">Community Support</h3>
          <p className="text-gray-500">Join our Discord server to chat with other creators and get real-time help.</p>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-6 dark:text-white">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <h4 className="font-medium dark:text-white mb-2">How do I export my code?</h4>
              <p className="text-sm text-gray-500">You can export your code anytime from the editor by clicking the 'Export' button in the top right corner.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
