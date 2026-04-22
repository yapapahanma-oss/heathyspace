export interface BlogPost {
  id: string;
  category: 'FITNESS' | 'NUTRITION' | 'MENTAL HEALTH' | 'LIFESTYLE';
  date: string;
  title: string;
  description?: string;
  imageUrl: string;
  featured?: boolean;
}
