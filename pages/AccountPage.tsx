import React from 'react';
import { useStore } from '../store/useStore';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Moon, Sun, CreditCard, Shield } from 'lucide-react';

const AccountPage: React.FC = () => {
  const { user, theme, toggleTheme } = useStore();

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 dark:text-white">Account Settings</h1>

      <div className="space-y-8">
        
        {/* Profile Section */}
        <section className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
          <h2 className="text-xl font-semibold mb-6 dark:text-white">Profile</h2>
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-3xl font-bold text-white">
              {user.name[0]}
            </div>
            <div className="flex-1">
               <h3 className="font-medium text-lg dark:text-white">{user.name}</h3>
               <p className="text-gray-500">{user.email}</p>
            </div>
            <Button variant="outline">Upload Avatar</Button>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <Input label="Full Name" defaultValue={user.name} />
            <Input label="Email Address" defaultValue={user.email} />
          </div>
        </section>

        {/* Plan Section */}
        <section className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
          <h2 className="text-xl font-semibold mb-4 dark:text-white flex items-center gap-2">
            <CreditCard className="w-5 h-5" /> Subscription
          </h2>
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg flex items-center justify-between border border-primary/20">
            <div>
              <p className="font-semibold text-primary">Current Plan: {user.plan.toUpperCase()}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Next billing date: Oct 24, 2024</p>
            </div>
            <Button>Upgrade Plan</Button>
          </div>
        </section>

        {/* Appearance */}
        <section className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Appearance</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              <span className="dark:text-gray-300">Theme Mode</span>
            </div>
            <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              <button 
                onClick={() => theme === 'dark' && toggleTheme()}
                className={`px-3 py-1.5 rounded-md text-sm transition-all ${theme === 'light' ? 'bg-white shadow text-gray-900' : 'text-gray-500'}`}
              >
                Light
              </button>
              <button 
                onClick={() => theme === 'light' && toggleTheme()}
                className={`px-3 py-1.5 rounded-md text-sm transition-all ${theme === 'dark' ? 'bg-gray-700 shadow text-white' : 'text-gray-500'}`}
              >
                Dark
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AccountPage;
