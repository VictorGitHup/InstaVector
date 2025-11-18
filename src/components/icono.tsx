'use client';

import React from 'react';
import IconoSVG from './icono-svg';

interface IconoProps extends React.SVGProps<SVGSVGElement> {}

const Icono: React.FC<IconoProps> = (props) => {
  return <IconoSVG {...props} />;
};

export default Icono;
