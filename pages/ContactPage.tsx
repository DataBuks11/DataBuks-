import React from 'react';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../contexts/LanguageContext';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="p-8 max-w-xl mx-auto animate-fade">
      <h1 className="text-3xl font-bold mb-2 dark:text-white">{t.nav.contact}</h1>
      <p className="text-gray-500 mb-8">Have questions? We'd love to hear from you.</p>

      <form className="space-y-6 bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
        <Input label="Name" placeholder="Your name" />
        <Input label="Email" type="email" placeholder="you@company.com" />
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
          <textarea className="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-32 resize-none" placeholder="How can we help?"></textarea>
        </div>
        
        <Button className="w-full">Send Message</Button>
      </form>
    </div>
  );
};

export default ContactPage;
