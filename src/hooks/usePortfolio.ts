import { useState, useEffect } from 'react';
import { getProjects } from '../services/firestore';
import { type Project } from '../types';

const MOCK_PROJECTS: Project[] = [
  {
    id: 'mock-1',
    title: 'Nexus AI Dashboard',
    description: 'A high-performance neural network visualization dashboard for real-time model monitoring and hyperparameter tuning.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda546697a?auto=format&fit=crop&q=80&w=800&h=600',
    techStack: ['React', 'D3.js', 'PyTorch', 'Node.js'],
    previewUrl: 'https://nexus-ai.example.com',
    githubUrl: 'https://github.com',
    userId: 'mock'
  },
  {
    id: 'mock-2',
    title: 'Quantum Ledger',
    description: 'DeFi infrastructure for institutional grade asset management with sub-millisecond atomic swap capabilities.',
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800&h=600',
    techStack: ['Solidity', 'Next.js', 'Ethers.js', 'Hardhat'],
    previewUrl: 'https://quantum-ledger.example.com',
    githubUrl: 'https://github.com',
    userId: 'mock'
  },
  {
    id: 'mock-3',
    title: 'Aura SaaS Framework',
    description: 'A modular boilerplate for rapid enterprise-level deployment with integrated multi-tenancy and RBAC.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600',
    techStack: ['TypeScript', 'Tailwind', 'PostgreSQL', 'Docker'],
    previewUrl: 'https://aura-saas.example.com',
    githubUrl: 'https://github.com',
    userId: 'mock'
  },
  {
    id: 'mock-4',
    title: 'Velocity E-Commerce',
    description: 'Next-generation headless commerce platform with 10ms page loads and advanced AR product visualization.',
    imageUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4bacea4?auto=format&fit=crop&q=80&w=800&h=600',
    techStack: ['Next.js', 'Shopify API', 'Three.js', 'Framer Motion'],
    previewUrl: 'https://velocity-commerce.example.com',
    githubUrl: 'https://github.com',
    userId: 'mock'
  },
  {
    id: 'mock-5',
    title: 'Pulse Analytics',
    description: 'Real-time telemetry and user tracking platform processing millions of events per second with an elegant UI.',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800&h=600',
    techStack: ['Vue.js', 'Go', 'ClickHouse', 'Kafka'],
    previewUrl: 'https://pulse-analytics.example.com',
    githubUrl: 'https://github.com',
    userId: 'mock'
  },
  {
    id: 'mock-6',
    title: 'Cipher Security Hub',
    description: 'Centralized cybersecurity command center for enterprise threat detection and automated response protocols.',
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800&h=600',
    techStack: ['React', 'Python', 'Elasticsearch', 'Redis'],
    previewUrl: 'https://cipher-security.example.com',
    githubUrl: 'https://github.com',
    userId: 'mock'
  }
];

export function usePortfolio() {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await getProjects();
        if (data && data.length > 0) {
          // If there are firestore projects, append the mock ones to show off a busy portfolio
          setProjects([...(data as Project[]), ...MOCK_PROJECTS]);
        }
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return { projects, loading };
}
