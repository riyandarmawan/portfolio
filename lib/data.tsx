import { HiBuildingOffice2 } from "react-icons/hi2";
import { JourneyDataType, SocialMediaDataType } from "./types";
import {
  FaGithub,
  FaGraduationCap,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const iconClass: string = "text-2xl text-primary-300";

export const journeyDatas: JourneyDataType = [
  {
    id: 1,
    icon: <FaGraduationCap className={iconClass} />,
    period: "2022 - Present",
    title: "SMK Bina Kerja Purwakarta - Software Engineering",
    description:
      "Currently studying web development at SMK Bina Kerja Purwakarta, focusing on building and designing websites and learning to create functional and user-friendly web applications.",
    techStacks: [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS" },
      { id: 3, name: "Bootstrap" },
      { id: 4, name: "Javascript" },
      { id: 5, name: "PHP" },
      { id: 6, name: "Laravel" },
      { id: 7, name: "Java" },
      { id: 8, name: "Figma" },
      { id: 9, name: "Git" },
      { id: 10, name: "GitHub" },
    ],
  },
  {
    id: 2,
    icon: <HiBuildingOffice2 className={iconClass} />,
    period: "Oct - Dec 2023",
    title: "PT. Pratama Solusi Teknologi (Internship) - Web Developer",
    description:
      "Completed an internship focusing on developing a company profile website, gaining experience in web design and development.",
    techStacks: [{ id: 1, name: "CodeIgniter 4" }],
  },
];

export const socialMediaDatas: SocialMediaDataType = [
  {
    id: 1,
    icon: <FaGithub />,
    link: "https://github.com/riyandaramwan",
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    link: "https://linkedin.com/in/riyandaramwan",
  },
  {
    id: 3,
    icon: <FaInstagram />,
    link: "https://instagram.com/riyandaramwan",
  },
  {
    id: 4,
    icon: <FaYoutube />,
    link: "https://youtube.com/@riyandaramwan",
  },
];

export const skills = [
  "javascript",
  "typescript",
  "alpinedotjs",
  "java",
  "react",
  "html5",
  "css3",
  "tailwindcss",
  "bootstrap",
  "nodedotjs",
  "nextdotjs",
  "nginx",
  "vercel",
  "git",
  "github",
  "figma",
  "php",
  "laravel",
  "codeigniter",
  "mysql",
  "sqlite",
  "visualstudiocode",
  "linux",
  "archlinux",
  "neovim",
  "bspwm",
  "codewars",
];
