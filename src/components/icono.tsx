'use client';

import React from 'react';
import Image from 'next/image';

interface IconoProps {
  className?: string;
}

const Icono: React.FC<IconoProps> = ({ className }) => {
  return (
    <div className={className}>
      <Image 
        src="/ico_instavector.svg" 
        alt="InstaVector Logo" 
        width={24} 
        height={24} 
        className="h-full w-full"
      />
    </div>
  );
};

export default Icono;
