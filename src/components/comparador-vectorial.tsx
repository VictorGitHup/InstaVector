'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { ZoomIn, ZoomOut, Move } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// NOTA: Reemplaza estas rutas con tus imágenes en la carpeta public/images/herramientas/
const imageSets = [
  {
    name: 'Baja Complejidad',
    description: 'Icono monocromático simple.',
    rasterSrc: '/herramientas/instavector_tool_com_easy.png',
    vectorSrc: '/herramientas/instavector_tool_com_easy.svg',
  },
  {
    name: 'Complejidad Media',
    description: 'Logo con colores sólidos y formas definidas.',
    rasterSrc: '/herramientas/instavector_tool_com_medium.png',
    vectorSrc: '/herramientas/instavector_tool_com_medium.svg',
  },
  {
    name: 'Alta Complejidad',
    description: 'Ilustración con degradados y más detalles.',
    rasterSrc: 'https://picsum.photos/seed/illustration/1024/1024',
    vectorSrc: 'https://picsum.photos/seed/illustration/1024/1024', // Idealmente sería un .svg
  },
];

const MIN_ZOOM = 1;
const MAX_ZOOM = 10;
const ZOOM_STEP = 0.1;

const ImageViewer = ({ src, zoom, pan, onPan, isVector }: { src: string; zoom: number; pan: { x: number; y: number }; onPan: (pan: {x:number, y:number}) => void; isVector: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const lastPosition = useRef({ x: 0, y: 0 });

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    lastPosition.current = { x: e.clientX, y: e.clientY };
    containerRef.current?.classList.add('cursor-grabbing');
  };

  const onMouseUp = () => {
    isDragging.current = false;
    containerRef.current?.classList.remove('cursor-grabbing');
  };
  
  const onMouseLeave = () => {
    isDragging.current = false;
    containerRef.current?.classList.remove('cursor-grabbing');
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - lastPosition.current.x;
    const dy = e.clientY - lastPosition.current.y;
    lastPosition.current = { x: e.clientX, y: e.clientY };

    onPan({
        x: pan.x + dx,
        y: pan.y + dy,
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden bg-muted/20 border-2 border-dashed rounded-lg cursor-grab"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={cn("absolute transition-transform duration-100 ease-linear", isVector ? "image-rendering-auto" : "image-rendering-pixelated")}
        style={{
          width: '100%',
          height: '100%',
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
          willChange: 'transform'
        }}
      >
        <img src={src} alt={isVector ? 'Vector version' : 'Raster version'} className="h-full w-full object-contain" />
      </div>
      {zoom > 1.2 && (
        <div className="absolute top-2 left-2 bg-background/80 p-2 rounded-lg text-xs flex items-center gap-1">
          <Move className="w-3 h-3"/> Arrastra para mover
        </div>
      )}
    </div>
  );
};

export default function ComparadorVectorial() {
  const [activeTab, setActiveTab] = useState(imageSets[0].name);
  const [zoom, setZoom] = useState(MIN_ZOOM);
  const [pan, setPan] = useState({ x: 0, y: 0 });

  const currentSet = imageSets.find(set => set.name === activeTab) || imageSets[0];

  useEffect(() => {
    setZoom(MIN_ZOOM);
    setPan({ x: 0, y: 0 });
  }, [activeTab]);

  const handleZoomChange = (newZoom: number) => {
    setZoom(Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, newZoom)));
  };
  
  const handlePanChange = (newPan: {x: number, y: number}) => {
    const BORDER_MARGIN = 200 * (zoom); // Adjust margin based on zoom

    const constrainedX = Math.max(-BORDER_MARGIN, Math.min(BORDER_MARGIN, newPan.x));
    const constrainedY = Math.max(-BORDER_MARGIN, Math.min(BORDER_MARGIN, newPan.y));
    setPan({x: constrainedX, y: constrainedY });
  }

  return (
    <div className="w-full">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          {imageSets.map(set => (
            <TabsTrigger key={set.name} value={set.name}>
              {set.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start h-[500px] mt-8">
            <div className="flex flex-col h-full gap-4">
                <h3 className="font-semibold text-xl text-center">Raster (PNG/JPG)</h3>
                <ImageViewer src={currentSet.rasterSrc} zoom={zoom} pan={pan} onPan={handlePanChange} isVector={false} />
            </div>
            <div className="flex flex-col h-full gap-4">
                <h3 className="font-semibold text-xl text-center">Vectorial (SVG)</h3>
                <ImageViewer src={currentSet.vectorSrc} zoom={zoom} pan={pan} onPan={handlePanChange} isVector={true} />
            </div>
        </div>

        <div className="mt-8 max-w-lg mx-auto flex flex-col items-center gap-4">
            <p className="font-medium">Nivel de Zoom: {zoom.toFixed(1)}x</p>
            <div className="flex w-full items-center gap-4">
                <Button variant="outline" size="icon" onClick={() => handleZoomChange(zoom - ZOOM_STEP)} disabled={zoom <= MIN_ZOOM}>
                    <ZoomOut className="w-4 h-4"/>
                </Button>
                <Slider
                    value={[zoom]}
                    min={MIN_ZOOM}
                    max={MAX_ZOOM}
                    step={ZOOM_STEP}
                    onValueChange={(value) => handleZoomChange(value[0])}
                />
                <Button variant="outline" size="icon" onClick={() => handleZoomChange(zoom + ZOOM_STEP)} disabled={zoom >= MAX_ZOOM}>
                    <ZoomIn className="w-4 h-4"/>
                </Button>
            </div>
        </div>
      </Tabs>
    </div>
  );
}
