import React from "react";
import TechStack from "./TechStack";
import { JourneyDataType } from "@/lib/types";

const Timeline = ({ journeyDatas }: { journeyDatas: JourneyDataType }) => {
  return (
    <>
      {journeyDatas.map(
        ({ id, icon, period, title, description, techStacks }) => (
          <div key={id} className="flex gap-2">
            {icon}
            <div className="w-full">
              <span className="font-medium text-primary-300">{period}</span>
              <h5 className="text-lg font-semibold text-primary-200 mt-2">
                {title}
              </h5>
              <p className="mt-1">{description}</p>
              <div className="mt-4 flex gap-1 flex-wrap">
                <TechStack techStacks={techStacks} />
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Timeline;
