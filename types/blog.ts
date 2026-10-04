export interface Blog {
  id: number;
  title: string;
  slug: string;
  image: string;
  category: string;
  author: string;
  published_date: string;
  summary: string;
  tags: string[];
  content: {
    heading: string;
    paragraphs: string[];
  }[];
}
