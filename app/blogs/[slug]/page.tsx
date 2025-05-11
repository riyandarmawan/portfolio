import Breadcrumb from "@/components/ui/Breadcrumb";
import { getBlogContent } from "@/lib/actions/blog.action";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import type { Metadata } from "next";
import { getBlogMetadata } from "@/lib/actions/blog.action";

type Params = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogMetadata(slug);

  return {
    title: blog.title,
    description: `Read ${blog.title} published on ${blog.date}`,
    openGraph: {
      title: blog.title,
      description: `Read ${blog.title}`,
      images: [{ url: blog.img, alt: blog.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: `Read ${blog.title}`,
      images: [blog.img],
    },
  };
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const blog = await getBlogContent(slug);

  if (!blog) return null;

  return (
    <div className="py-10 text-primary-700 dark:text-primary-300 blog md:w-2/3">
      <Breadcrumb
        links={[
          { label: "/", href: "/" },
          { label: "/#blogs", href: "/#blogs" },
          { label: `/${slug}`, href: `/blogs/${slug}`, active: true },
        ]}
      />
      <article className="prose dark:prose-invert">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{blog}</ReactMarkdown>
      </article>
    </div>
  );
}

