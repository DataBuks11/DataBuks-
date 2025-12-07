import React, { useState, useEffect } from 'react';
import { useStore } from '../store/useStore';
import { Editor } from '@monaco-editor/react';
import { 
  Smartphone, Monitor, Play, ExternalLink, Settings, Mic, 
  ChevronLeft, ChevronRight, Download, Save, RefreshCw 
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { playClick, playSuccess } from '../lib/sounds';
import { fadeEnter } from '../lib/animations';

const EditorPage: React.FC = () => {
  const { activeFileId, files, previewHtml, updateFileContent, theme } = useStore();
  const [activeTab, setActiveTab] = useState<'code' | 'design'>('code');
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [editorContent, setEditorContent] = useState('');

  // Find active file content
  const getActiveFileContent = () => {
    // Simplified lookup for demo
    const file = files[0].children?.find(f => f.id === activeFileId);
    return file?.content || '';
  };

  useEffect(() => {
    setEditorContent(getActiveFileContent());
    fadeEnter('.animate-fade');
  }, [activeFileId]);

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setEditorContent(value);
      // Debounced update could go here
    }
  };

  const handleSave = () => {
    playClick();
    setIsSaving(true);
    if (activeFileId) {
      updateFileContent(activeFileId, editorContent);
    }
    setTimeout(() => {
      setIsSaving(false);
      playSuccess();
    }, 800);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="h-screen w-full flex flex-col bg-gray-50 dark:bg-gray-950 overflow-hidden">
      
      {/* Top Bar */}
      <header className="h-14 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 flex items-center justify-between px-4 z-20">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            {sidebarOpen ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </Button>
          <div className="h-6 w-px bg-gray-200 dark:bg-gray-800 mx-2"></div>
          <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            <button 
              onClick={() => setDeviceMode('desktop')}
              className={`p-1.5 rounded-md transition-all ${deviceMode === 'desktop' ? 'bg-white dark:bg-gray-700 shadow-sm text-primary' : 'text-gray-500'}`}
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setDeviceMode('mobile')}
              className={`p-1.5 rounded-md transition-all ${deviceMode === 'mobile' ? 'bg-white dark:bg-gray-700 shadow-sm text-primary' : 'text-gray-500'}`}
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button 
            variant={activeTab === 'code' ? 'primary' : 'ghost'} 
            size="sm" 
            onClick={() => setActiveTab('code')}
          >
            Code
          </Button>
          <Button 
            variant={activeTab === 'design' ? 'primary' : 'ghost'} 
            size="sm" 
            onClick={() => setActiveTab('design')}
          >
            Design
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Mic className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => window.open('about:blank', '_blank')}>
            <ExternalLink className="w-4 h-4" />
          </Button>
           <Button variant="primary" size="sm" onClick={handleSave} disabled={isSaving}>
            {isSaving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
            {isSaving ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden relative">
        
        {/* File Tree Sidebar */}
        <div 
          className={`bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 flex-shrink-0 flex flex-col ${sidebarOpen ? 'w-64' : 'w-0 opacity-0 overflow-hidden'}`}
        >
          <div className="p-4 font-semibold text-sm text-gray-500 uppercase tracking-wider">Explorer</div>
          <div className="flex-1 overflow-y-auto">
             {files[0].children?.map(file => (
               <div 
                 key={file.id}
                 onClick={() => useStore.getState().setActiveFile(file.id)}
                 className={`px-4 py-2 cursor-pointer text-sm flex items-center gap-2 ${activeFileId === file.id ? 'bg-primary/10 text-primary border-r-2 border-primary' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
               >
                 <span className="opacity-70">{file.language === 'html' ? '<>' : '{}'}</span>
                 {file.name}
               </div>
             ))}
          </div>
        </div>

        {/* Center: Preview */}
        <div className={`flex-1 bg-gray-100 dark:bg-gray-950 flex flex-col items-center justify-center relative p-4 transition-all duration-300 ${activeTab === 'code' ? 'w-1/2' : 'w-full'}`}>
           <div 
             className={`bg-white shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-800 ${
               deviceMode === 'mobile' 
                 ? 'w-[375px] h-[812px] rounded-[3rem] border-8 border-gray-900' 
                 : 'w-full h-full rounded-xl'
             }`}
           >
             <iframe 
               srcDoc={previewHtml}
               title="Live Preview"
               className="w-full h-full bg-white"
               sandbox="allow-scripts"
             />
           </div>
        </div>

        {/* Right: Monaco Editor */}
        <div className={`bg-[#1e1e1e] border-l border-gray-800 flex flex-col transition-all duration-300 ${activeTab === 'code' ? 'w-1/2' : 'w-0 opacity-0 overflow-hidden'}`}>
           <Editor
             height="100%"
             language="html"
             theme={theme === 'dark' ? "vs-dark" : "light"}
             value={editorContent}
             onChange={handleEditorChange}
             options={{
               minimap: { enabled: false },
               fontSize: 14,
               padding: { top: 16 },
               scrollBeyondLastLine: false,
               smoothScrolling: true,
             }}
           />
        </div>

      </div>
    </div>
  );
};

export default EditorPage;
