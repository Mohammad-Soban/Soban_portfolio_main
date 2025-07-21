export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'core' | 'library' | 'tool';
  icon: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
  impact: string;
  gradient: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  companyLogo: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  credentialId: string;
  skills: string[];
  logo: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface MousePosition {
  x: number;
  y: number;
}

export interface VisibilityState {
  [key: string]: boolean;
}
