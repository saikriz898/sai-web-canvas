export interface Project {
  id: string;
  title: string;
  category: string;
  date: string;
  tagline: string;
  desc: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  tech: string[];
  featured: boolean;
  link: string;
  github: string;
  color: string;
  iconName: string;
  metrics?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: string;
  duration: string;
  location: string;
  desc: string;
  details: string[];
  tech: string[];
  link: string;
  github: string;
  impact: string;
}

export interface SkillItem {
  name: string;
  level?: string;
  iconName: string;
  badge?: string;
}

export interface SkillDomain {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  desc: string;
  link: string;
  tags: string[];
  hours?: string;
  score?: string;
  credentialUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  year: string;
  desc: string;
  stat: string;
  badge: string;
  iconName: string;
}

export interface EducationItem {
  id: string;
  year: string;
  degree: string;
  school: string;
  desc: string;
  highlights: string;
  accent: string;
}

export interface CodingProfile {
  id: string;
  platform: string;
  username: string;
  link: string;
  stats: string;
  rating: string;
  color: string;
  iconName: string;
}

export interface NavLink {
  name: string;
  href: string;
  iconName: string;
}
