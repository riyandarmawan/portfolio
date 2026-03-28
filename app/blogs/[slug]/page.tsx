import Breadcrumb from "@/components/ui/Breadcrumb";
import { getBlogContent, getBlogMetadata } from "@/lib/actions/blog.action";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import type { Metadata } from "next";

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = params;
  const blog = await getBlogMetadata(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

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
  const { slug } = params;
  const blogContent = await getBlogContent(slug);
  const blogMetadata = await getBlogMetadata(slug);

  if (!blogContent || !blogMetadata) return null;

  const { title, description, date, img } = blogMetadata;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    image: img,
    author: {
      "@type": "Person",
      name: "Riyan Darmawan", 
    },
    publisher: {
      "@type": "Organization",
      name: "Riyan Darmawan's Portfolio",
      logo: {
        "@type": "ImageObject",
        url: "https://riyandarmawan.vercel.app/img/logo.png",
      },
    },
    datePublished: new Date(date).toISOString(),
    description: description,
  };

  return (
    <div className="py-10 text-primary-700 dark:text-primary-300 blog md:w-2/3">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumb
        links={[
          { label: "/", href: "/" },
          { label: "/#blogs", href: "/#blogs" },
          { label: `/${slug}`, href: `/blogs/${slug}`, active: true },
        ]}
      />
      <article className="prose dark:prose-invert blog">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{blogContent}</ReactMarkdown>
      </article>
    </div>
  );
}
