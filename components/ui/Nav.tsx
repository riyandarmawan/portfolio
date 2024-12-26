"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Nav = ({show}: {show: boolean}) => {
  return (
    <nav className={`fixed right-8 bottom-20 p-4 rounded-md bg-primary-900 shadow-xl ${show ? 'flex' : 'hidden'} flex-col gap-2 px-8`}>
      <NavItem href="#profile">Profile</NavItem>
      <NavItem href="#about">About</NavItem>
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
      className={`hover:text-emerald-500 before:content-[''] text-primary-100 before:h-[1px] before:w-10 hover:before:w-20 before:bg-primary-400 hover:before:bg-emerald-500 before:duration-200 text-base font-semibold before:hidden text-center ${
        activeSection === href ? "nav-active" : ""
      }`}
    >
      {children}
    </Link>
  );
};

export const NavToggle = ({
  handleClick,
}: {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="w-14 h-14 fixed bottom-4 bg-primary-900 right-4 rounded-full grid place-items-center"
    >
      <span className="h-1 rounded-full w-6 bg-primary-100 before:rounded-full before:h-1 before:w-6 before:bg-primary-100 before:content-[''] before:translate-y-[150%] before:block after:rounded-full after:h-1 after:w-6 after:bg-primary-100 after:content-[''] after:-translate-y-[250%] after:block"></span>
    </button>
  );
};

export default Nav;
