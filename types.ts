
export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface PublicationItem {
  type: 'book' | 'lecture' | 'interview';
  title: string;
  year?: string;
  details: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  tags?: string[];
  partner?: string;
  partnersList?: string[];
  image: string;
}

export interface SkillCategory {
  name: string;
  items: string[];
  color: string;
}
