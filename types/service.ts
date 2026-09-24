export interface ServiceItem {
  slug: string;
  name: string;
  shortDesc: string;
  description: string;
  image: string;
  features: string[];
}

export interface ServiceCategory {
  slug: string;
  name: string;
  description: string;
  services: ServiceItem[];
  image: string;
}
