import type { Metadata } from "next";
import { blogs } from "@/data";
import BlogItem from "@/components/blog/BlogItem";

export const metadata: Metadata = {
  title: "Our Blogs | BIGRIYO",
  description: "Browse our complete list of blogs."
};

const Blogs = () => {
  return (
    <>
      {/* Header Section */}
      <header className="text-center my-12">
        <h1 className="hidden md:block text-4xl font-bold tracking-tight">Tech Insights & Repair Guides</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
          Expert maintenance tips, hardware advice, and news from Kathmandu’s trusted repair service center.
        </p>
      </header>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {blogs.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </div>
    </>
  );
};

export default Blogs;
