import { journeyDatas } from "@/lib/data";
import React from "react";
import Timeline from "./ui/Timeline";

const Journey = () => {
  return (
    <div
      id="journey"
      className="py-10 text-primary-400 text-sm lg:text-base grid gap-6"
    >
      <Timeline journeyDatas={journeyDatas} />
    </div>
  );
};

export default Journey;
