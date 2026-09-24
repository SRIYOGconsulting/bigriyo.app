export interface ServiceDetail {
  slug: string;
  name: string;
  shortDesc: string;
  description: string;
  features: string[];
  startingPrice: string;
}

export interface ServiceCategory {
  slug: string;
  name: string;
  description: string;
  services: ServiceDetail[];
}
