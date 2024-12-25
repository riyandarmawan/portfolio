'use client';

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Nav = () => {
  return (
    <nav className="flex flex-col gap-4">
      <NavItem href="#about">
        About
      </NavItem>
      <NavItem href="#projects">Projects</NavItem>
      <NavItem href="#blogs">Blogs</NavItem>
      <NavItem href="#contact">Contact</NavItem>
    </nav>
  );
};

const NavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const [activeSection, setActiveSection] = useState<string>("#about");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <Link
      href={href}
      className={`hover:text-primary-300 before:content-[''] flex items-center before:inline-block gap-2 text-primary-400 uppercase before:h-[1px] before:w-10 hover:before:w-20 before:bg-primary-400 hover:before:bg-primary-300 before:duration-200 text-sm font-semibold ${
        activeSection === href ? "nav-active" : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default Nav;
