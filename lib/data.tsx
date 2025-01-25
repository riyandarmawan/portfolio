import { HiBuildingOffice2 } from "react-icons/hi2";
import {
  BlogType,
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

export const resume: string = {
  href: "/resume.pdf"
}

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
  { content: "About", href: "/#about" },
  { content: "Projects", href: "/#projects" },
  { content: "Blogs", href: "/#blogs" },
  { content: "Contact", href: "/#contact" },
];

export const projectDatas: ProjectType = [
  {
    img: "/img/projects/list-of-lit.png",
    title: "List of Lit",
    href: "https://riyandarmawan.github.io/list-of-lit",
    description:
      "This is an efficient method for locating a book of interest. Simply enter the title and author, and you will receive a description, publisher, and additional information.",
    techStacks: ["React JS", "Tailwind CSS", "Google Books API"],
  },
  {
    img: "/img/projects/ruang-baca.png",
    title: "Ruang Baca",
    href: "https://github.com/riyandarmawan/ruang-baca",
    description:
      "This web application is designed to assist school librarians in managing their book collections and facilitating user borrowing.",
    techStacks: ["Laravel", "Tailwind CSS", "Alpine JS"],
  },
  {
    img: "/img/projects/table-service.png",
    title: "Table Service",
    href: "https://github.com/riyandarmawan/table-service",
    description:
      "This application dashboard is designed to help manage your restaurant. It offers features such as order management, transaction tracking, and separate roles for different users.",
    techStacks: ["Laravel", "Tailwind CSS", "Alpine JS", "SweetAlert2"],
  },
];

export const blogDatas: BlogType = [{
  img: "/img/blogs/5-tips-to-boost-productivity-in-your-daily-routine.jpg",
  title: "5 Tips to Boost Productivity in Your Daily Routine",
  slug: "5-tips-to-boost-productivity-in-your-daily-routine",
  author: 'Riyan Darmawan',
  date: new Date(2025, 0, 5),
  content: (
    <>
      <section>
        <p>
          In today’s fast-paced world, staying productive can feel like an
          uphill battle. Whether you&apos;re a student, professional, or
          entrepreneur, finding ways to maximize your time and energy is
          crucial. In this blog post, we’ll explore five practical tips that can
          help you supercharge your daily routine and get more done without
          burning out.
        </p>
      </section>

      <section>
        <h2>Tip 1: Start Your Day with a Plan</h2>
        <p>
          Planning your day the night before can help you wake up with a clear
          focus. Create a to-do list with your top priorities and allocate time
          blocks for each task. Tools like Google Calendar or productivity apps
          like Todoist can make this process seamless.
        </p>
      </section>

      <section>
        <h2>Tip 2: Practice the 80/20 Rule</h2>
        <p>
          The Pareto Principle, or 80/20 rule, suggests that 80% of your results
          come from 20% of your efforts. Identify the tasks that yield the most
          significant outcomes and focus your energy there. This helps eliminate
          time-wasting activities.
        </p>
      </section>

      <section>
        <h2>Tip 3: Take Breaks Using the Pomodoro Technique</h2>
        <p>
          Working for long periods without breaks can lead to fatigue. Try the
          Pomodoro Technique: work for 25 minutes, then take a 5-minute break.
          After four cycles, take a longer 15-30 minute break. This method
          improves focus while preventing burnout.
        </p>
      </section>

      <section>
        <h2>Tip 4: Eliminate Distractions</h2>
        <p>
          Distractions are the enemy of productivity. Turn off non-essential
          notifications, set boundaries with coworkers or family members, and
          designate a clutter-free workspace. Apps like Freedom or Focus@Will
          can help block digital distractions.
        </p>
      </section>

      <section>
        <h2>Tip 5: Reflect and Adjust</h2>
        <p>
          At the end of each day, spend 5-10 minutes reflecting on what worked
          and what didn’t. Adjust your approach for the next day to continuously
          improve your productivity strategies.
        </p>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          Boosting productivity doesn’t require a complete life overhaul—it’s
          about making small, intentional changes to your daily habits. By
          incorporating these tips into your routine, you’ll not only achieve
          more but also enjoy greater balance and fulfillment.
        </p>
      </section>

      <section>
        <h3>Call to Action</h3>
        <p>
          What’s your go-to productivity hack? Share it in the comments below!
          And if you found these tips helpful, don’t forget to subscribe to our
          blog for more insights.
        </p>
      </section>
    </>
  ),
  tags: [
    "Productivity",
    "Time Management",
    "Self-Improvement",
    "Daily Habits",
    "Pomodoro Technique",
    "Goal Setting",
    "Work-Life Balance",
  ],
}];
