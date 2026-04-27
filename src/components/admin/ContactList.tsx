import { useState, useEffect } from 'react';
import { Mail, Calendar, MessageSquare, User, Trash2 } from 'lucide-react';
import { getContacts } from '../../services/firestore';
import { type ContactSubmission } from '../../types';
import { toast } from 'react-hot-toast';

export default function ContactList() {
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);
    const data = await getContacts();
    if (data) setContacts(data as any[]);
    setLoading(false);
  }

  const handleDelete = async (id: string) => {
    // In a real app we'd have a deleteContact service
    toast.error('Deletion not yet implemented in service');
  };

  if (loading) {
    return (
      <div className="flex justify-center py-20">
         <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Recent Inquiries</h2>
        <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-bold text-slate-500 uppercase tracking-widest">
           {contacts.length} Submissions
        </span>
      </div>

      <div className="space-y-6">
        {contacts.map((contact) => (
          <div key={contact.id} className="bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center text-blue-500">
                    <User size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{contact.name}</h4>
                    <a href={`mailto:${contact.email}`} className="text-sm text-blue-500 hover:underline flex items-center gap-1">
                      <Mail size={14} /> {contact.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                  <Calendar size={14} />
                  {contact.createdAt ? new Date((contact.createdAt as any).seconds * 1000).toLocaleDateString() : 'N/A'}
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm whitespace-pre-wrap leading-relaxed">
                {contact.message}
              </div>
            </div>
            <div className="px-6 py-3 bg-slate-100 dark:bg-slate-800/50 flex justify-end">
               <button 
                onClick={() => handleDelete(contact.id)}
                className="text-xs font-bold text-slate-400 hover:text-red-500 transition-colors uppercase tracking-widest flex items-center gap-1"
               >
                <Trash2 size={14} /> Archive
               </button>
            </div>
          </div>
        ))}

        {contacts.length === 0 && (
          <div className="text-center py-20 text-slate-500 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl">
            No inquiries yet. Use the contact form to test!
          </div>
        )}
      </div>
    </div>
  );
}
