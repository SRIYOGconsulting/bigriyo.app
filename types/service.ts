export interface ServiceReview {
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Service {
  slug: string;
  name: string;
  shortDesc: string;
  description: string;
  image: string;
  features: string[];
  startingPrice: number;
  rating: number;
  reviewCount: number;
  reviews: ServiceReview[];
}

export interface ServiceCategory {
  slug: string;
  name: string;
  description: string;
  services: Service[];
  image: string;
}
