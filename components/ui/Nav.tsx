import React from "react";
import NavItem from "./NavItem";

const Nav = () => {
  return (
    <nav className="flex flex-col gap-4">
      <NavItem href="#about" active>About</NavItem>
      <NavItem href="#projects">Projects</NavItem>
      <NavItem href="#blogs">Blogs</NavItem>
      <NavItem href="#contact">Contact</NavItem>
    </nav>
  );
};

export default Nav;
