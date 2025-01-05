import Breadcrumb from "@/components/ui/Breadcrumb";
import TechStack from "@/components/ui/TechStack";
import { blogDatas } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaUserAlt } from "react-icons/fa";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const blog = blogDatas.find((blog) => blog.slug === slug);

  if (!blog) {
    return;
  }

  const { img, title, author, date, content, tags } = blog;

  return (
    <div className="container py-10 text-primary-300 blog">
      <Breadcrumb
        links={[
          { label: "/", href: "/" },
          { label: "/blogs", href: "/#blogs" },
          { label: `/${slug}`, href: `/blogs/${slug}`, active: true },
        ]}
      />
      <header>
        <h1 className="text-xl font-bold text-primary-100">{title}</h1>
        <Image
          src={img}
          alt={title}
          width={1280}
          height={720}
          className="rounded mt-4 shadow aspect-video object-cover object-center"
        />
        <p className="mt-3 text-xs flex justify-between font-medium text-primary-400">
          <Link
            href="https://instagram.com/riyandarmawan"
            className="flex items-center gap-1"
          >
            <FaUserAlt /> {author}
          </Link>
          <span className="flex items-center gap-1">
            <FaCalendarAlt />{" "}
            {new Intl.DateTimeFormat("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            }).format(date)}
          </span>
        </p>
      </header>
      <main className="mt-6">{content}</main>
      <footer className="mt-6">
        <h3>Tags: </h3>
        <TechStack techStacks={tags} />
      </footer>
    </div>
  );
}
