export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
}

export interface Project {
  id: string;
  name: string;
  category: string[];
  imageUrl: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string; // lucide icon name
}

export interface PricingPlan {
  id: string;
  title: string;
  price: string;
  description?: string;
  features: string[];
  isPremium?: boolean;
}
