import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../constants/portfolioData';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: CONTACT_INFO.linkedin,
      label: "LinkedIn",
    },
    { 
      icon: Github, 
      href: CONTACT_INFO.github, 
      label: "GitHub" 
    },
    {
      icon: Mail,
      href: `mailto:${CONTACT_INFO.email}`,
      label: "Email",
    },
  ];

  return (
    <footer className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(248,232,200,0.1),transparent_50%)]"></div>

      <div className="container-width section-padding relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-6 md:mb-8 lg:mb-0 text-center lg:text-left">
            <div className="font-display font-bold text-2xl md:text-3xl bg-gradient-to-r from-golden-400 to-orange-500 bg-clip-text text-transparent mb-3 md:mb-4">
              Mohammad Soban Shaikh
            </div>
            <p className="text-golden-200 max-w-md text-sm md:text-base">
              Transforming data into intelligent solutions, <br />one algorithm at a time.
            </p>
          </div>

          <div className="flex space-x-4 md:space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group p-3 md:p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-golden-400/50 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
              >
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-golden-400 transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 md:mt-12 pt-6 md:pt-8 text-center">
          <p className="text-golden-200/80 mb-3 md:mb-4 text-sm md:text-base">
            © 2025 Mohammad Soban Shaikh. All rights reserved.
          </p>
          <div className="flex items-center justify-center space-x-2 text-golden-200/60 text-xs md:text-sm">
            <span>Made by Soban with</span>
            <span className="text-red-400 animate-pulse">❤️</span>
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
