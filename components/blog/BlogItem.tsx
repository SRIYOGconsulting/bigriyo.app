import type { Blog } from "@/types";
import { CalendarIcon, UserIcon, ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogItemProps {
  blog: Blog;
}

const BlogItem: React.FC<BlogItemProps> = ({ blog }) => (
  <Link
    key={blog.id}
    href={`/blogs/${blog.slug}`}
    className="group bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden">
    <div className="p-6 flex-1 flex flex-col justify-between">
      <div>
        <div className="flex items-center text-xs text-muted-foreground gap-1 mb-2">
          <CalendarIcon className="w-3.5 h-3.5" />
          <time dateTime={blog.published_date}>{blog.published_date}</time>
        </div>
        <h2 className="text-xl font-bold leading-snug mb-4 line-clamp-2">{blog.title}</h2>
        <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-muted">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {blog.tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-md">
            {tag}
          </span>
        ))}
      </div>
    </div>
    <div className="px-6 py-4 bg-muted/50 text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors border-t border-border flex items-center justify-between text-xs">
      <div className="flex items-center gap-1.5 font-medium">
        <UserIcon className="w-4 h-4" />
        {blog.author}
      </div>
      <div className="inline-flex items-center gap-1 font-semibold">
        Read <ArrowRightIcon className="w-3.5 h-3.5" />
      </div>
    </div>
  </Link>
);

export default BlogItem;
