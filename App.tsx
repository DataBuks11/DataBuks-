import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useStore } from './store/useStore';
import { Sidebar } from './components/layout/Sidebar';
import { LanguageProvider } from './contexts/LanguageContext';

// Pages
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import HeroOnboarding from './pages/HeroOnboarding';
import TryPage from './pages/TryPage';
import EditorPage from './pages/EditorPage';
import DashboardPage from './pages/DashboardPage';
import AccountPage from './pages/AccountPage';
import SettingsPage from './pages/SettingsPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import MediaPage from './pages/MediaPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HelpPage from './pages/HelpPage';
import AnalyticsPage from './pages/AnalyticsPage';

// Integrations
import SupabasePage from './pages/integrations/SupabasePage';
import DomainPage from './pages/integrations/DomainPage';
import GithubPage from './pages/integrations/GithubPage';
import PublishPage from './pages/integrations/PublishPage';

// Layout Wrapper
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const showSidebar = !['/', '/hero', '/try', '/auth'].includes(location.pathname);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {showSidebar && <Sidebar />}
      <div className={`flex-1 flex flex-col ${showSidebar ? 'ml-64' : ''}`}>
        {children}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const { theme } = useStore();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <LanguageProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/hero" element={<HeroOnboarding />} />
            <Route path="/try" element={<TryPage />} />
            <Route path="/editor" element={<EditorPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailsPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/help" element={<HelpPage />} />
            
            <Route path="/account" element={<AccountPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            
            {/* Integrations */}
            <Route path="/integrations/supabase" element={<SupabasePage />} />
            <Route path="/integrations/domain" element={<DomainPage />} />
            <Route path="/integrations/github" element={<GithubPage />} />
            <Route path="/integrations/publish" element={<PublishPage />} />
          </Routes>
        </Layout>
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;
