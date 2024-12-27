import React from "react";

const TechStack = ({ text }: { text: string }) => {
  return (
    <span className="py-1 px-3 bg-secondary-500 bg-opacity-30 rounded-full inline-block text-primary-300 font-medium shadow text-sm">
      {text}
    </span>
  );
};

export default TechStack;
