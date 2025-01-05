import Link from "next/link";
import React from "react";

const Breadcrumb = ({ links }: {links: {label: string, href: string, active?: boolean}[]}) => {
  return (
    <nav className="flex mb-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-2">
        {links.map(({label, href, active}, index) => (
          <React.Fragment key={index}>
            <li>
              <Link
                href={href}
                className={`text-sm font-medium hover:text-secondary-500 line-clamp-1 ${active && 'text-secondary-500'}`}
              >
                {label}
              </Link>
            </li>
            {index < links.length - 1 && (
              <li>
                <span className="mx-2 text-primary-400">&raquo;</span>
              </li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
