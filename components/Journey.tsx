import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import TechStack from "./ui/TechStack";
import { BsSuitcaseLgFill } from "react-icons/bs";

const Journey = () => {
  return (
    <div id="journey" className="py-10 text-primary-400 text-sm lg:text-base grid gap-6">
      <div className="flex gap-2">
        <FaGraduationCap className="text-2xl text-primary-300" />
        <div className="w-full">
          <span className="font-medium text-primary-300">2022 - Present</span>
          <h5 className="text-lg font-semibold text-primary-200 mt-2">
            SMK Bina Kerja Purwakarta
          </h5>
          <p className="mt-1">
            Currently studying web development at SMK Bina Kerja Purwakarta,
            focusing on building and designing websites and learning to create
            functional and user-friendly web applications.
          </p>
          <div className="mt-4 flex gap-1 flex-wrap">
            <TechStack text="HTML" />
            <TechStack text="CSS" />
            <TechStack text="Bootstrap" />
            <TechStack text="JavaScript" />
            <TechStack text="PHP" />
            <TechStack text="Laravel" />
            <TechStack text="Java" />
            <TechStack text="Figma" />
          </div>
        </div>
      </div>
      <div className="flex gap-2 ">
        <BsSuitcaseLgFill className="text-2xl text-primary-300" />
        <div className="w-full">
          <span className="font-medium text-primary-300">Oct - Dec 2023</span>
          <h5 className="text-lg font-semibold text-primary-200 mt-2">
            PT. Pratama Solusi Teknologi (Internship)
          </h5>
          <p className="mt-1">
            Completed an internship focusing on developing a company profile
            website, gaining experience in web design and development.
          </p>
          <div className="mt-4 flex gap-1 flex-wrap">
            <TechStack text="CodeIgniter 4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
