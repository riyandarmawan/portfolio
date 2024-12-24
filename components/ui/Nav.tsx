import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex flex-col gap-4">
      <NavItem href="#about" active>
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
  active,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) => {
  return (
    <Link
      href={href}
      className={`hover:text-primary-300 before:content-[''] flex items-center before:inline-block gap-2 text-primary-400 uppercase before:h-[1px] before:w-10 hover:before:w-20 before:bg-primary-400 hover:before:bg-primary-300 before:duration-200 text-sm font-semibold ${
        active ? "nav-active" : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default Nav;
