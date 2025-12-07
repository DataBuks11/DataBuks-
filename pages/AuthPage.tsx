import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import Background3D from '../components/three/Background3D';
import { useLanguage } from '../contexts/LanguageContext';

const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder auth logic
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
      <Background3D className="opacity-30" color="#6366f1" />
      
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 z-10 animate-fade">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-gradient-to-tr from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">L</div>
          <h1 className="text-2xl font-bold dark:text-white">{t.auth.title}</h1>
          <p className="text-gray-500">{t.auth.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input label={t.auth.email} type="email" placeholder="you@example.com" required />
          <Input label={t.auth.password} type="password" required />
          
          <Button className="w-full" type="submit">
            {t.auth.submit}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          {t.auth.noAccount}
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
