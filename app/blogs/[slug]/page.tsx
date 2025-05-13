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
  const { slug } = params;
  const blog = await getBlogMetadata(slug);

  const title = blog.title ?? "Untitled Blog";
  const description =
    blog.description ??
    `Explore insights from "${title}", published on ${blog.date}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: new Date(blog.date).toISOString(),
      images: [
        {
          url: blog.img,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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
      <article className="prose dark:prose-invert blog">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{blog}</ReactMarkdown>
      </article>
    </div>
  );
}

