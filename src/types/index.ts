export interface NavItem {
  label: string;
  href: string;
}

export interface SkillItem {
  name: string;
  icon: string; // react-icons key resolved in SkillCard
  status?: "learning" | "basic";
}

export interface SkillGroup {
  title: string;
  items: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;

  image?: string;
  images?: string[];
  demoVideo?: string; 

  tech: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  contribution?: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  duration: string;
  technology: string;
  responsibilities: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution?: string;
  duration?: string;
  location?: string;
  description?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
