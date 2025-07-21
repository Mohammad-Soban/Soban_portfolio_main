import React from 'react';

interface RoleCyclerProps {
  currentRole: string;
}

export const RoleCycler: React.FC<RoleCyclerProps> = ({ currentRole }) => {
  return (
    <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 h-12 md:h-16 flex items-center justify-center">
      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {currentRole}
      </span>
    </div>
  );
};
