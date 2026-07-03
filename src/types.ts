export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  link?: string;
  description: string;
}

export interface TimelineItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  type: 'experience' | 'education';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  link?: string;
  credentialId?: string;
}
