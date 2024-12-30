"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { forwardRef, useEffect, useState } from "react";

type NavProps = {
  show: boolean;
};

const Nav = forwardRef<HTMLDivElement, NavProps>(({ show }, ref) => {
  return (
    <nav
      ref={ref}
      className={`fixed md:relative md:!flex md:items-start md:bg-transparent md:inset-0 md:p-0 md:shadow-none right-8 bottom-20 p-4 rounded-md bg-primary-900 shadow-xl ${
        show ? "flex" : "hidden"
      } flex-col gap-2 px-8`}
    >
      <NavItem href="#profile" className="md:hidden">
        Profile
      </NavItem>
      <NavItem href="#about">About</NavItem>
      <NavItem href="#projects">Projects</NavItem>
      <NavItem href="#blogs">Blogs</NavItem>
      <NavItem href="#contact">Contact</NavItem>
    </nav>
  );
});

Nav.displayName = `NavComponent`;

const NavItem = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const [activeSection, setActiveSection] = useState<string>("#about");

  useEffect(() => {
    const main = document.getElementById("main") || document;
    const sections = main.querySelectorAll("section");
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
      className={cn(
        `hover:text-secondary-500 before:content-[''] text-primary-100 before:h-[1px] before:w-10 hover:before:w-20 before:bg-primary-400 hover:before:bg-secondary-500 before:duration-200 text-base md:text-sm font-semibold text-center px-4 md:p-0 before:hidden md:before:inline-block md:flex md:items-center md:gap-4 md:uppercase lg:text-lg ${
          activeSection === href ? "nav-active" : ""
        }`,
        className
      )}
    >
      {children}
    </Link>
  );
};

type NavToggleProps = {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const NavToggle = forwardRef<HTMLButtonElement, NavToggleProps>(
  ({ handleClick }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        onClick={handleClick}
        className="w-14 h-14 fixed bottom-4 bg-primary-900 right-4 rounded-full grid place-items-center md:hidden"
      >
        <span className="h-1 rounded-full w-6 bg-primary-100 before:rounded-full before:h-1 before:w-6 before:bg-primary-100 before:content-[''] before:translate-y-[150%] before:block after:rounded-full after:h-1 after:w-6 after:bg-primary-100 after:content-[''] after:-translate-y-[250%] after:block"></span>
      </button>
    );
  }
);

NavToggle.displayName = "Nav Toggle Component";

export default Nav;
