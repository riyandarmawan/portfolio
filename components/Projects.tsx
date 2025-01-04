import { projectDatas } from "@/lib/data";
import React from "react";
import TechStack from "./ui/TechStack";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects" className="py-10 lg:py-20 grid gap-4">
      <h3 className="mb-4 font-bold text-primary-800 dark:text-primary-200 text-xl md:hidden">
        Projects
      </h3>
      {projectDatas.map(
        ({ img, title, href, description, techStacks }, index) => (
          <Link
            target="_black"
            href={href || "#"}
            key={index}
            className="flex flex-col lg:flex-row gap-4 rounded-md hover:bg-secondary-500 duration-300 hover:bg-opacity-10 backdrop-blur p-4 group/project lg:items-center"
          >
            <div className="h-36 aspect-video border border-primary-900 dark:border-primary-100 shadow-md rounded-md">
              <Image
                src={img}
                alt={description}
                width={1280}
                height={720}
                className="object-cover w-full h-full rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2 justify-center">
              <h5 className="text-lg font-semibold dark:text-primary-200 text-primary-800 relative w-fit">
                {title}
                <FaExternalLinkAlt className="text-xs absolute -right-5 bottom-2 transition-all duration-300 group-hover/project:bottom-3 group-hover/project:-right-6" />
              </h5>
              <p className="text-sm">{description}</p>
              <TechStack techStacks={techStacks} />
            </div>
          </Link>
        )
      )}
    </section>
  );
};

export default Projects;
