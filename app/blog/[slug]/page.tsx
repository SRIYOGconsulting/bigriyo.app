import type { Metadata } from "next";
import { CalendarIcon, UserIcon, TagIcon } from "lucide-react";
import { notFound } from "next/navigation";
import { blogs } from "@/data";
import ClapButton from "@/components/ui/ClapButton";
import Image from "next/image";
import Link from "next/link";

interface BlogDetailProps {
  params: Promise<{ slug: string }>;
}

function getBlogBySlug(slug: string) {
  return blogs.find((b) => b.slug === slug) || null;
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug
  }));
}

export async function generateMetadata({ params }: BlogDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) return { title: "Blog Not Found" };

  return {
    title: `${blog.title} | BIGRIYO Blog`,
    description: blog.summary
  };
}

const BlogDetails = async ({ params }: BlogDetailProps) => {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) notFound();

  return (
    <div className="pb-16">
      {/* Banner / Hero Section */}
      <div className="relative left-[50%] right-[50%] -mx-[50vw] mb-12 flex min-h-[360px] w-screen items-end overflow-hidden bg-muted">
        <Image src={blog.image} alt={blog.title} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
        <div className="container relative z-10 mx-auto max-w-7xl px-4 pb-12 md:px-8">
          <nav className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Link href="/blogs" className="transition-colors hover:text-primary-foreground">
              Blogs
            </Link>
            <span>/</span>
            <span className="font-medium text-primary-foreground">{blog.category}</span>
          </nav>

          <div className="max-w-3xl text-primary-foreground">
            <h1 className="text-3xl font-bold tracking-tight drop-shadow-sm sm:text-4xl md:text-5xl">{blog.title}</h1>

            {/* Author and Date Meta */}
            <div className="mt-4 flex flex-wrap items-center gap-6 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <UserIcon className="h-4 w-4" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" />
                <time dateTime={blog.published_date}>
                  {new Date(blog.published_date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                  })}
                </time>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <Link
                href="/repair/book"
                className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-colors hover:bg-primary/90">
                Book a Repair
              </Link>
              <ClapButton />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container pt-10">
        <div className="max-w-4xl">
          <section>
            <h2 className="text-2xl font-bold tracking-tight">Summary</h2>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{blog.summary}</p>
          </section>

          <hr className="my-8 border-border" />

          {/* Tag Badges */}
          <section>
            <h2 className="text-2xl font-bold tracking-tight">Related Topics</h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {blog.tags.map((tag, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium shadow-sm">
                  <TagIcon className="h-4 w-4 shrink-0 text-primary" />
                  <span>{tag}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
