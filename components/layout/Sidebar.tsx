import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Layers, Code2, Settings, User, Database, Globe, Github, LogOut, Zap } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { playNav } from '../../lib/sounds';

const NavItem = ({ to, icon: Icon, label }: { to: string, icon: any, label: string }) => {
  return (
    <NavLink
      to={to}
      onClick={() => playNav()}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 rounded-md transition-all group ${
          isActive 
            ? 'bg-primary/10 text-primary' 
            : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
        }`
      }
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium text-sm">{label}</span>
    </NavLink>
  );
};

export const Sidebar: React.FC = () => {
  const { user } = useStore();
  const location = useLocation();

  // Don't show sidebar on landing page
  if (location.pathname === '/') return null;

  return (
    <aside className="w-64 h-screen bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 flex flex-col fixed left-0 top-0 z-50 transition-all duration-300">
      <div className="p-6 flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-tr from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold text-lg">
          L
        </div>
        <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">Lumina</span>
      </div>

      <div className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3">Platform</div>
        <NavItem to="/dashboard" icon={Home} label="Dashboard" />
        <NavItem to="/hero" icon={Zap} label="New Project" />
        <NavItem to="/editor" icon={Code2} label="Editor" />
        
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-8 mb-2 px-3">Integrations</div>
        <NavItem to="/integrations/supabase" icon={Database} label="Supabase" />
        <NavItem to="/integrations/domain" icon={Globe} label="Custom Domain" />
        <NavItem to="/integrations/github" icon={Github} label="GitHub" />
        <NavItem to="/integrations/publish" icon={Layers} label="Publish" />
        
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-8 mb-2 px-3">Settings</div>
        <NavItem to="/account" icon={User} label="Account" />
        <NavItem to="/settings" icon={Settings} label="Settings" />
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-50 dark:bg-gray-900">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
            {user.name[0]}
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-medium truncate text-gray-900 dark:text-gray-100">{user.name}</p>
            <p className="text-xs text-gray-500 truncate">{user.plan.toUpperCase()} Plan</p>
          </div>
          <LogOut className="w-4 h-4 text-gray-400 cursor-pointer hover:text-red-500" />
        </div>
      </div>
    </aside>
  );
};
