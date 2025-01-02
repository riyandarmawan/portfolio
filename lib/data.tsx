import { HiBuildingOffice2 } from "react-icons/hi2";
import { JourneyDataType, NavType, ProjectType, SocialMediaDataType } from "./types";
import {
  FaGithub,
  FaGraduationCap,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const iconClass: string = "text-2xl dark:text-primary-300 text-primary-700";

export const journeyDatas: JourneyDataType = [
  {
    icon: <FaGraduationCap className={iconClass} />,
    period: "2022 - Present",
    title: "SMK Bina Kerja Purwakarta - Software Engineering",
    description:
      "Currently studying web development at SMK Bina Kerja Purwakarta, focusing on building and designing websites and learning to create functional and user-friendly web applications.",
    techStacks: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Javascript",
      "PHP",
      "Laravel",
      "Java",
      "Figma",
      "Git",
      "GitHub",
    ],
  },
  {
    icon: <HiBuildingOffice2 className={iconClass} />,
    period: "Oct - Dec 2023",
    title: "PT. Pratama Solusi Teknologi (Internship) - Web Developer",
    description:
      "Completed an internship focusing on developing a company profile website, gaining experience in web design and development.",
    techStacks: ["CodeIgniter 4"],
  },
];

export const socialMediaDatas: SocialMediaDataType = [
  {
    icon: <FaGithub />,
    link: "https://github.com/riyandaramwan",
  },
  {
    icon: <FaLinkedin />,
    link: "https://linkedin.com/in/riyandaramwan",
  },
  {
    icon: <FaInstagram />,
    link: "https://instagram.com/riyandaramwan",
  },
  {
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
  "vim",
  "bspwm",
  "codewars",
];

export const navDatas: NavType = [
  { content: "About", href: "#about" },
  { content: "Projects", href: "#projects" },
  { content: "Blogs", href: "#blogs" },
  { content: "Contact", href: "#contact" },
];

export const projectDatas: ProjectType = [
  {
    title: "List of Lit",
    href: "https://riyandarmawan.github.io/list-of-lit",
    description:
      "It's an easy way to find any book you're interested in. Just enter the title and author, and you'll get a description, publisher, and more!",
    techStacks: [
      "Next.js",
      "Tailwind CSS",
      "Aceternity UI",
      "Framer Motion",
      "Magic UI",
      "Shadcn UI",
    ],
  },
];
