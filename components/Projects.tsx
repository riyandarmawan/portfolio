import { projectDatas } from "@/lib/data";
import React from "react";
import TechStack from "./ui/TechStack";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="py-10 lg:py-20">
      {projectDatas.map(({ title, href, description, techStacks }, index) => (
        <div key={index} className="flex flex-col gap-2 p-2">
          <h5 className="text-lg font-semibold dark:text-primary-200 text-primary-800 mt-2">
            <Link href={href || "#"} target="_blank" className="relative group">
              {title}
              <FaExternalLinkAlt className="text-xs absolute -right-5 bottom-1 transition-all duration-300 group-hover:bottom-2 group-hover:-right-6" />
            </Link>
          </h5>
          <p className="text-sm">{description}</p>
          <TechStack techStacks={techStacks} />
        </div>
      ))}
    </section>
  );
};

export default Projects;
