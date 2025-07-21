import React from 'react';
import { Coffee, Download } from 'lucide-react';

interface HeroContentProps {
  onResumeDownload: () => void;
}

export const HeroContent: React.FC<HeroContentProps> = ({ onResumeDownload }) => {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Status Badge */}
      <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-charcoal-800/80 backdrop-blur-xl border border-golden-200/50 rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8 animate-fade-in-up">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-xs md:text-sm font-medium">
          Available for new opportunities
        </span>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold mb-6 md:mb-8 leading-tight">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-golden-500 via-golden-600 to-orange-500 bg-clip-text text-transparent animate-gradient">
          Mohammad
        </span>
        <br />
        <span className="bg-gradient-to-r from-golden-600 via-orange-500 to-red-500 bg-clip-text text-transparent animate-gradient">
          Soban Shaikh
        </span>
      </h1>

      {/* Tagline */}
      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-charcoal-600 dark:text-charcoal-300 mb-4 md:mb-6 font-medium">
        I craft intelligent systems with{" "}
        <span className="text-golden-600 font-semibold">data</span>,{" "}
        <span className="text-golden-600 font-semibold">code</span> &{" "}
        <span className="text-golden-600 font-semibold">curiosity</span>
      </div>

      {/* Description */}
      <p className="text-base sm:text-lg md:text-xl text-charcoal-600 dark:text-charcoal-300 mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
        Transforming complex datasets into actionable insights and building
        AI-powered solutions that drive real-world impact across industries.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-12 md:mb-16 px-4">
        <button
          onClick={onResumeDownload}
          className="group bg-gradient-to-r from-golden-500 to-orange-500 hover:from-golden-600 hover:to-orange-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-golden-500/25 flex items-center justify-center space-x-3"
        >
          <Download className="w-5 h-5 group-hover:animate-bounce" />
          <span>Download Resume</span>
        </button>
        <a
          href="#contact"
          className="group border-2 border-charcoal-800 dark:border-golden-400 text-charcoal-800 dark:text-golden-400 hover:bg-charcoal-800 hover:text-white dark:hover:bg-golden-400 dark:hover:text-charcoal-900 px-6 md:px-8 py-3 md:py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3"
        >
          <Coffee className="w-5 h-5 group-hover:animate-pulse" />
          <span>Let's Connect</span>
        </a>
      </div>
    </div>
  );
};
