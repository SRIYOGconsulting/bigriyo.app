export interface QuickContact {
  hotline: {
    label: string;
    value: string;
    icon: string;
    url: string;
  };
  email: {
    value: string;
    icon: string;
    url: string;
  };
  socials: SocialLink[];
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
  value?: string;
}
