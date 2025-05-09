import { getAllBlogs } from "@/lib/actions/blog.action";
import Link from "next/link";
import React from "react";

const Blogs = async () => {
  const blogs = await getAllBlogs();

  return (
    <section id="blogs" className="py-10 lg:py-20 grid gap-4 main-section">
      <h3 className="mb-4 font-bold text-primary-800 dark:text-primary-200 text-xl md:hidden">
        Blogs
      </h3>
      {blogs.map(({ img, title, slug, date }, index) => (
        <Link
          href={`/blogs/${slug}`}
          key={index}
          className="flex flex-col lg:flex-row gap-2 rounded-md hover:bg-secondary-500 duration-300 hover:bg-opacity-10 backdrop-blur p-2 md:p-4 group/blog lg:items-center overflow-hidden"
          style={{
            transition: "background 0.3s ease",
          }}
        >
          <p className="mix-blend-difference">{date}</p>
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center opacity-0 group-hover/blog:opacity-100"
            style={{
              backgroundImage: `url(${img})`,
              transition: "opacity 0.3s ease",
            }}
          ></div>

          <div
            className="absolute inset-0 -z-10 group-hover/blog:bg-primary-400/60 group-hover/blog:dark:bg-primary-900/60"
            style={{
              transition: "background-color 0.3s ease",
            }}
          ></div>

          <h5 className="text-lg font-semibold dark:text-primary-200 text-primary-800 lg:line-clamp-1">
            {title}
          </h5>
        </Link>
      ))}
    </section>
  );
};

export default Blogs;
