export type Project = {
  slug: string;
  title: string;
  type?: string;
  tech: string[];
  description?: string;
  image?: string;
  playable?: string;
  github?: string;
  download?: string;
  status?: 'completed' | 'in-progress';
};
