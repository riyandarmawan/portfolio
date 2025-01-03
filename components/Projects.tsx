import { projectDatas } from "@/lib/data";
import React from "react";
import TechStack from "./ui/TechStack";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects" className="py-10 lg:py-20">
      {projectDatas.map(({ img, title, href, description, techStacks }, index) => (
        <Link
          href={href || "#"}
          key={index}
          className="flex gap-2 rounded-md shadow-md bg-primary-700 bg-opacity-20 backdrop-blur p-4 group/project"
        >
          <Image src={img} alt={description} width="1280" height="720" className="bg-cover aspect-video"/>
          <div className="flex flex-col gap-2">
          <h5 className="text-lg font-semibold dark:text-primary-200 text-primary-800 relative w-fit">
            {title}
            <FaExternalLinkAlt className="text-xs absolute -right-5 bottom-2 transition-all duration-300 group-hover/project:bottom-3 group-hover/project:-right-6" />
          </h5>
          <p className="text-sm">{description}</p>
          <TechStack techStacks={techStacks} />
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Projects;
