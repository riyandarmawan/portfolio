import { TechStackType } from "@/lib/types";
import React from "react";

const TechStack = ({ techStacks }: { techStacks: TechStackType }) => {
  return (
    <>
      {techStacks.map((name, index) => (
        <span
          key={index}
          className="py-1 px-3 bg-secondary-500 bg-opacity-30 rounded-full inline-block text-primary-300 font-medium shadow text-sm"
        >
          {name}
        </span>
      ))}
    </>
  );
};

export default TechStack;
