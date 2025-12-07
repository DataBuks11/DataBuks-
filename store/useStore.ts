import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { FileNode, Project, UserProfile, Theme, IntegrationConfig } from '../types';

interface AppState {
  theme: Theme;
  toggleTheme: () => void;
  
  user: UserProfile;
  projects: Project[];
  
  activeProjectId: string | null;
  activeFileId: string | null;
  files: FileNode[];
  previewHtml: string;
  
  integrations: IntegrationConfig;
  
  setProjects: (projects: Project[]) => void;
  addProject: (project: Project) => void;
  deleteProject: (id: string) => void;
  setActiveProject: (id: string | null) => void;
  
  updateFileContent: (id: string, content: string) => void;
  setActiveFile: (id: string) => void;
  setPreviewHtml: (html: string) => void;
  
  updateIntegration: (key: keyof IntegrationConfig, value: string) => void;
}

const INITIAL_FILES: FileNode[] = [
  {
    id: 'root',
    name: 'src',
    type: 'folder',
    children: [
      {
        id: 'index.html',
        name: 'index.html',
        type: 'file',
        language: 'html',
        content: '<!DOCTYPE html>\n<html>\n<head>\n<title>My Generated Site</title>\n<script src="https://cdn.tailwindcss.com"></script>\n</head>\n<body class="bg-gray-100 flex items-center justify-center h-screen">\n  <div class="text-center">\n    <h1 class="text-4xl font-bold text-blue-600 mb-4">Hello World</h1>\n    <p class="text-gray-600">This is your AI generated preview.</p>\n  </div>\n</body>\n</html>'
      },
      {
        id: 'styles.css',
        name: 'styles.css',
        type: 'file',
        language: 'css',
        content: 'body { margin: 0; padding: 0; }'
      },
      {
        id: 'script.js',
        name: 'script.js',
        type: 'file',
        language: 'javascript',
        content: 'console.log("Hello from Lumina AI");'
      }
    ]
  }
];

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'dark',
      toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
      
      user: {
        name: 'Demo User',
        email: 'demo@lumina.ai',
        plan: 'pro'
      },
      
      projects: [
        { id: '1', name: 'E-commerce Landing', lastEdited: '2 mins ago' },
        { id: '2', name: 'Portfolio Site', lastEdited: '2 days ago' },
        { id: '3', name: 'SaaS Dashboard', lastEdited: '5 days ago' }
      ],
      
      activeProjectId: null,
      activeFileId: 'index.html',
      files: INITIAL_FILES,
      previewHtml: INITIAL_FILES[0].children![0].content!, // Initial load
      
      integrations: {
        supabaseUrl: '',
        supabaseKey: '',
        githubRepo: '',
        customDomain: ''
      },

      setProjects: (projects) => set({ projects }),
      addProject: (project) => set((state) => ({ projects: [project, ...state.projects] })),
      deleteProject: (id) => set((state) => ({ projects: state.projects.filter(p => p.id !== id) })),
      setActiveProject: (id) => set({ activeProjectId: id }),
      
      updateFileContent: (id, content) => set((state) => {
        // Deep update helper could be here, for now simple implementation assuming flat-ish structure or known IDs
        const newFiles = [...state.files];
        const updateNode = (nodes: FileNode[]): boolean => {
          for (let node of nodes) {
            if (node.id === id) {
              node.content = content;
              return true;
            }
            if (node.children && updateNode(node.children)) return true;
          }
          return false;
        };
        updateNode(newFiles);
        
        // Also update preview if it's the HTML file
        let newPreview = state.previewHtml;
        if (id === 'index.html') newPreview = content;

        return { files: newFiles, previewHtml: newPreview };
      }),
      
      setActiveFile: (id) => set({ activeFileId: id }),
      setPreviewHtml: (html) => set({ previewHtml: html }),
      
      updateIntegration: (key, value) => set((state) => ({
        integrations: { ...state.integrations, [key]: value }
      }))
    }),
    {
      name: 'lumina-storage',
    }
  )
);
