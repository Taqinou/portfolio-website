export type Project = {
  slug: string;
  title: string;
  titleKey?: string;
  type?: string;
  tech: string[];
  descriptionKey?: string;
  image?: string;
  playable?: string;
  github?: string;
  download?: string;
  status?: 'completed' | 'in-progress';
  visit?: string;
};
