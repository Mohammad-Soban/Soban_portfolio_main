import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../../constants/portfolioData';

export const SocialLinks: React.FC = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: CONTACT_INFO.linkedin,
      color: "hover:text-blue-600",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: CONTACT_INFO.github,
      color: "hover:text-gray-800 dark:hover:text-white",
      label: "GitHub",
    },
    {
      icon: Mail,
      href: `mailto:${CONTACT_INFO.email}`,
      color: "hover:text-red-600",
      label: "Email",
    },
  ];

  return (
    <div className="flex justify-center space-x-4 md:space-x-6">
      {socialLinks.map(({ icon: Icon, href, color, label }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`group p-3 md:p-4 rounded-2xl bg-white/80 dark:bg-charcoal-800/80 backdrop-blur-xl border border-golden-200/50 hover:border-golden-400/50 transition-all duration-300 transform hover:scale-110 hover:rotate-6 ${color}`}
          style={{ animationDelay: `${index * 200}ms` }}
        >
          <Icon className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300" />
        </a>
      ))}
    </div>
  );
};
