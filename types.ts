export interface FileNode {
  id: string;
  name: string;
  type: 'file' | 'folder';
  content?: string;
  children?: FileNode[];
  language?: string;
}

export interface Project {
  id: string;
  name: string;
  lastEdited: string;
  thumbnail?: string;
}

export interface UserProfile {
  name: string;
  email: string;
  plan: 'free' | 'pro' | 'enterprise';
  avatarUrl?: string;
}

export type Theme = 'light' | 'dark';

export interface IntegrationConfig {
  supabaseUrl: string;
  supabaseKey: string;
  githubRepo: string;
  customDomain: string;
}
