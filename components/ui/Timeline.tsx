import React from "react";
import TechStack from "./TechStack";
import { JourneyDataType } from "@/lib/types";

const Timeline = ({ journeyDatas }: { journeyDatas: JourneyDataType }) => {
  return (
    <>
      {journeyDatas.map(
        ({ icon, period, title, description, techStacks }, index) => (
          <div key={index} className="flex gap-2">
            {icon}
            <div className="w-full">
              <span className="font-medium text-primary-700 dark:text-primary-300">
                {period}
              </span>
              <h5 className="text-lg font-semibold dark:text-primary-200 text-primary-800 mt-2">
                {title}
              </h5>
              <p className="mt-1 mb-2">{description}</p>
                <TechStack techStacks={techStacks} />
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Timeline;
