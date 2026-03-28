import { HiBuildingOffice2 } from "react-icons/hi2";
import {
  JourneyDataType,
  NavType,
  ProjectType,
  SocialMediaDataType,
} from "./types";
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
    icon: <HiBuildingOffice2 className={iconClass} />,
    period: "Jan 2026 - Present",
    title: "HIMATRONIKA-AI - Science, Research, and Technology Department",
    description: "Leading technical initiatives within the student association to bridge the gap between academic theory and practical robotics applications.",
    techStacks: [
      "ESP8266",
      "Computer Vision",
      "Leadership",
      "People Management",
    ]
  },
  {
    icon: <FaGraduationCap className={iconClass} />,
    period: "Jul 2025 - Present",
    title: "Universitas Pendidikan Indonesia - Mechatronics and AI",
    description: "Focused on the intersection of procedural logic and data persistence. Engineered a CLI-based Village Administration System using C, implementing relational data structures with 'structs' and a Primary Key (NIK) system to maintain referential integrity across population and tax modules. Developed a 'Load-Modify-Save' lifecycle for persistent file storage, ensuring consistent state management between system memory and disk data.",
    techStacks: [
      "C",
      "micro:bit",
      "Wiring",
      "Engineering Mathematics",
      "Electrical Circuits",
      "Elektronics",
    ],
  },
  {
    icon: <FaGraduationCap className={iconClass} />,
    period: "Jul 2022 - May 2025",
    title: "SMK Bina Kerja Purwakarta - Software Engineering",
    description:
      "Studied web development at SMK Bina Kerja Purwakarta, focusing on building and designing websites and learning to create functional and user-friendly web applications.",
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
    period: "Oct 2023 - Dec 2023",
    title: "PT. Pratama Solusi Teknologi - Web Developer Intern",
    description:
      "Completed an internship focusing on developing a company profile website, gaining experience in web design and development.",
    techStacks: ["CodeIgniter 4", "Bootstrap"],
  },
];

export const socialMediaDatas: SocialMediaDataType = [
  {
    icon: <FaGithub />,
    link: "https://github.com/riyandarmawan",
  },
  {
    icon: <FaLinkedin />,
    link: "https://linkedin.com/in/riyandarmawan",
  },
  {
    icon: <FaInstagram />,
    link: "https://instagram.com/riyandarmawan",
  },
  {
    icon: <FaYoutube />,
    link: "https://youtube.com/@riyandarmawan",
  },
];

export const resume: string = "https://riyandarmawan-resume.vercel.app";

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
  "nestjs",
];

export const navDatas: NavType = [
  { content: "About", href: "/#about" },
  { content: "Projects", href: "/#projects" },
  { content: "Blogs", href: "/#blogs" },
  { content: "Contact", href: "/#contact" },
];

export const projectDatas: ProjectType = [
  {
    img: "/img/projects/next-gen-portfolio.png",
    title: "Next Gen Portfolio",
    href: "https://github.com/riyandarmawan/portfolio",
    description: "This is the next-generation portfolio of Riyan Darmawan, designed to showcase my skills and projects in a modern and interactive way.",
    techStacks: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    img: "/img/projects/list-of-lit.png",
    title: "List of Lit",
    href: "https://riyandarmawan.github.io/list-of-lit",
    description:
      "This is an efficient method for locating a book of interest, created by Riyan Darmawan. Simply enter the title and author, and you will receive a description, publisher, and additional information.",
    techStacks: ["React JS", "Tailwind CSS", "Google Books API"],
  },
  {
    img: "/img/projects/ruang-baca.png",
    title: "Ruang Baca",
    href: "https://github.com/riyandarmawan/ruang-baca",
    description:
      "This web application, developed by Riyan Darmawan, is designed to assist school librarians in managing their book collections and facilitating user borrowing.",
    techStacks: ["Laravel", "Tailwind CSS", "Alpine JS"],
  },
  {
    img: "/img/projects/table-service.png",
    title: "Table Service",
    href: "https://github.com/riyandarmawan/table-service",
    description:
      "This application dashboard, a project by Riyan Darmawan, is designed to help manage your restaurant. It offers features such as order management, transaction tracking, and separate roles for different users.",
    techStacks: ["Laravel", "Tailwind CSS", "Alpine JS", "SweetAlert2"],
  },
];
