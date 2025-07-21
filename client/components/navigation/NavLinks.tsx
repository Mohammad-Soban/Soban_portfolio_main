import React from 'react';

interface NavLinksProps {
  onLinkClick?: () => void;
}

export const NavLinks: React.FC<NavLinksProps> = ({ onLinkClick }) => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={onLinkClick}
          className="text-sm font-medium hover:text-golden-500 transition-all duration-300 relative group"
        >
          {link.name}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-golden-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
      ))}
    </>
  );
};
