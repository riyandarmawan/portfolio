import Breadcrumb from "@/components/ui/Breadcrumb";
import { getBlogContent } from "@/lib/actions/blog.action";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { getBlogMetadata } from "@/lib/actions/blog.action";
import type {Metadata} from "next"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = await getBlogMetadata((await params).slug);

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

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const blog = await getBlogContent(slug);

  if (!blog) {
    return;
  }

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
