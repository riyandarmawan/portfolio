import { JSX } from "react";

export type TechStackType = string[];

export type JourneyDataType = {
  icon: JSX.Element;
  period: string;
  title: string;
  description: string;
  techStacks: TechStackType | [];
}[];

export type SocialMediaDataType = {
  icon: JSX.Element;
  link: string;
}[];

export type NavType = {
  content: string,
  href: string,
}[];