export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  tech: string[];
  features: string[];
}

export interface Skill {
  name: string;
  icon: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface SkillCategory {
  [key: string]: Skill[];
}

export interface NavLink {
  name: string;
  href: string;
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}