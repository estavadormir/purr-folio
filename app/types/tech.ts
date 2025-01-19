export interface TechItem {
  name: string;
  url: string;
  description?: string;
  icon?: string;
}

export interface TechCategory {
  title: string;
  items: TechItem[];
  description?: string;
}

export type TechStack = Record<string, TechCategory>;
