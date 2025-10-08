
'use client';

import React, { useEffect, useState } from 'react';

interface IconoProps extends React.SVGProps<SVGSVGElement> {}

const Icono: React.FC<IconoProps> = (props) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    fetch('/ico_instavector.svg')
      .then((res) => res.text())
      .then((text) => {
        // Manipulate the SVG text to ensure it uses currentColor
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(text, 'image/svg+xml');
        const svgElement = svgDoc.getElementsByTagName('svg')[0];
        if (svgElement) {
          // Remove default width and height to allow Tailwind classes to take over
          svgElement.removeAttribute('width');
          svgElement.removeAttribute('height');

          // Ensure all paths use currentColor for fill
          svgElement.querySelectorAll('path').forEach(path => {
            path.setAttribute('fill', 'currentColor');
          });
          setSvgContent(svgElement.outerHTML);
        }
      })
      .catch(console.error);
  }, []);

  if (!svgContent) {
    return <div style={{ width: 24, height: 24 }} />; // Placeholder while loading
  }

  // Pass the props to a div that will contain the SVG
  return <div {...props} dangerouslySetInnerHTML={{ __html: svgContent }} />;
};

export default Icono;
