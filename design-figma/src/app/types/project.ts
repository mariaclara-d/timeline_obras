export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  city: string;
  year: number;
  imageUrl: string;
  instagramUrl?: string;
  likes: number;
  comments: number;
  date: string;
}

export type ViewMode = 'carousel' | 'gallery';
