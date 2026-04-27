export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  previewUrl: string;
  imageUrl: string;
  featured: boolean;
  createdAt: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  period: 'month' | 'project';
  features: string[];
  isPopular: boolean;
  order: number;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export interface Profile {
  name: string;
  bio: string;
  avatarUrl: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
  }
}
