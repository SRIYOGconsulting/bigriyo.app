import { Home, Info, Briefcase, MessageSquare, Users, Phone } from "lucide-react";

export const navLinks = [
  { href: "/", title: "Home", icon: Home },
  { href: "/about", title: "About", icon: Info },
  { href: "/repair", title: "Services", icon: Briefcase },
  { href: "/contact/feedback", title: "Feedback", icon: MessageSquare },
  { href: "/about/team", title: "Team", icon: Users },
  { href: "/contact", title: "Contact", icon: Phone }
];

export const socialLinks = [
  { href: "https://www.facebook.com/", label: "Facebook", path: "/icons/facebook.svg" },
  { href: "https://www.youtube.com/", label: "YouTube", path: "/icons/youtube.svg" },
  { href: "https://www.x.com/", label: "X (Twitter)", path: "/icons/x.svg" },
  { href: "https://www.linkedin.com/company/", label: "LinkedIn", path: "/icons/linkedin.svg" }
];
