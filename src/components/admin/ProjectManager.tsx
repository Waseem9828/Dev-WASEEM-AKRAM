import { useState, useEffect } from 'react';
import { Plus, Trash2, Edit2, Check, X, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { getProjects, addProject, updateProject, deleteProject } from '../../services/firestore';
import { type Project } from '../../types';
import { toast } from 'react-hot-toast';

export default function ProjectManager() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    techStack: '',
    previewUrl: '',
    imageUrl: '',
    featured: false
  });

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);
    const data = await getProjects();
    if (data) setProjects(data as Project[]);
    setLoading(false);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...formData,
      techStack: formData.techStack.split(',').map(s => s.trim()).filter(Boolean)
    };

    try {
      if (editingId) {
        await updateProject(editingId, payload);
        toast.success('Project updated');
      } else {
        await addProject(payload);
        toast.success('Project added');
      }
      setFormData({ title: '', description: '', techStack: '', previewUrl: '', imageUrl: '', featured: false });
      setIsAdding(false);
      setEditingId(null);
      load();
    } catch (error) {
      toast.error('Operation failed');
    }
  };

  const startEdit = (project: Project) => {
    setFormData({
      title: project.title,
      description: project.description,
      techStack: project.techStack.join(', '),
      previewUrl: project.previewUrl,
      imageUrl: project.imageUrl,
      featured: project.featured
    });
    setEditingId(project.id);
    setIsAdding(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure?')) return;
    try {
      await deleteProject(id);
      toast.success('Project deleted');
      load();
    } catch (error) {
      toast.error('Deletion failed');
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Manage Projects</h2>
        <button
          onClick={() => {
            setIsAdding(!isAdding);
            if (!isAdding) setEditingId(null);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all"
        >
          {isAdding ? <X size={20} /> : <Plus size={20} />}
          {isAdding ? 'Cancel' : 'Add Project'}
        </button>
      </div>

      {isAdding && (
        <form onSubmit={handleSubmit} className="mb-12 bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Project Title</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Tech Stack (comma separated)</label>
                <input
                  type="text"
                  required
                  value={formData.techStack}
                  onChange={(e) => setFormData({...formData, techStack: e.target.value})}
                  placeholder="React, Tailwind, Firebase"
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Preview URL</label>
                <input
                  type="url"
                  required
                  value={formData.previewUrl}
                  onChange={(e) => setFormData({...formData, previewUrl: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Thumbnail URL</label>
                <input
                  type="url"
                  required
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({...formData, imageUrl: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Description</label>
                <textarea
                  required
                  rows={8}
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                />
                <label htmlFor="featured" className="text-sm font-bold text-slate-600 dark:text-slate-400">Featured Project</label>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 flex items-center gap-2"
            >
              <Check size={20} />
              {editingId ? 'Update Project' : 'Publish Project'}
            </button>
          </div>
        </form>
      )}

      {loading ? (
        <div className="flex justify-center py-12">
           <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="space-y-4">
          {projects.map(project => (
            <div key={project.id} className="group flex items-center justify-between p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-blue-500 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-16 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden shrink-0">
                  {project.imageUrl ? (
                    <img src={project.imageUrl} className="w-full h-full object-cover" />
                  ) : (
                    <div className="flex items-center justify-center h-full text-slate-400"><ImageIcon size={16} /></div>
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{project.title}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    {project.featured && <span className="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-bold">FEATURED</span>}
                    <span className="text-xs text-slate-500">{project.techStack.slice(0, 3).join(', ')}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => startEdit(project)}
                  className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg"
                >
                  <Edit2 size={18} />
                </button>
                <button 
                  onClick={() => handleDelete(project.id)}
                  className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg"
                >
                  <Trash2 size={18} />
                </button>
                <a 
                  href={project.previewUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
          {projects.length === 0 && (
            <div className="text-center py-20 text-slate-500 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl">
              No projects added yet.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
