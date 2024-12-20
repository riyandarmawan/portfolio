import Link from "next/link";
import React from "react";

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
      className={`hover:text-primary-300 before:content-[''] flex items-center before:inline-block gap-2 text-primary-400 uppercase before:h-[1px] before:w-10 hover:before:w-20 before:bg-primary-400 hover:before:bg-primary-300 before:duration-200 ${
        active ? "nav-active" : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default NavItem;
