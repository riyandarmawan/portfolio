import { JSX } from "react";

export type TechStackType = {
  id: number;
  name: string;
}[];

export type JourneyDataType = {
  id: number;
  icon: JSX.Element;
  period: string;
  title: string;
  description: string;
  techStacks: TechStackType;
}[];
