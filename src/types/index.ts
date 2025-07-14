export interface NavItem {
  name: string;
  to: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string[];
  achievements?: string[];
  tags?: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  categories: string[];
  github?: string;
  livewebsite?: string;
  presentation?: string;
  simulation?: string;
  video?: string;
  link?: string;
}


export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'technical' | 'design' | 'soft';
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  organization: string;
  content: string;
  image: string;
}
