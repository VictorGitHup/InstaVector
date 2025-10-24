
'use client';

import React from 'react';
import { CodeBlock } from './CodeBlock';
import { Sparkles, Bot } from 'lucide-react';

const cssHoverExample = `/* Pasa el cursor sobre el icono */
#icono-hover:hover {
  fill: #FF5722;
  transform: scale(1.2) rotate(10deg);
  transition: all 0.3s ease-in-out;
}`;

const cssHoverPreview = (
    <>
        <style dangerouslySetInnerHTML={{ __html: `
            #icono-hover {
                transition: all 0.3s ease-in-out;
                cursor: pointer;
            }
            #icono-hover:hover {
              fill: #FF5722;
              transform: scale(1.2) rotate(10deg);
            }
        `}} />
        <Sparkles id="icono-hover" className="h-24 w-24 text-primary" strokeWidth={1} />
    </>
);

const pathAnimationExample = `/* Pasa el cursor para reiniciar */
#logo-path path {
  stroke-dasharray: 500;
  stroke-dashoffset: 500;
  animation: dibujar 2s forwards;
}
#logo-path:hover path {
  animation: none;
  animation: dibujar 2s forwards;
}
@keyframes dibujar {
  to { stroke-dashoffset: 0; }
}`;

const pathAnimationPreview = (
    <>
        <style dangerouslySetInnerHTML={{ __html: `
            #logo-path path {
              stroke-dasharray: 500;
              stroke-dashoffset: 500;
              animation: dibujar 2s forwards;
            }
            #logo-path:hover path {
              animation: none;
            }
            #logo-path:hover path {
                animation: dibujar 2s forwards;
            }
            @keyframes dibujar {
              to { stroke-dashoffset: 0; }
            }
        `}} />
        <svg id="logo-path" width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
            <title>Logo Path Animation</title>
            <path 
                d="M25,75 C40,25 60,25 75,75 S50,100 50,50 S25,25 25,75"
                stroke="hsl(var(--primary))" 
                strokeWidth="4" 
                fill="none" 
            />
        </svg>
    </>
);


const jsExample = `// Animación con GSAP (ejemplo conceptual)
// Requiere la librería GSAP en el proyecto.
gsap.to("#icono-js", { 
  duration: 2, 
  x: 100, 
  rotation: 360, 
  ease: "power2.inOut" 
});`;

const jsPreview = (
     <>
        <style dangerouslySetInnerHTML={{ __html: `
             #icono-js {
                transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);
                cursor: pointer;
             }
             #icono-js:hover {
                transform: translateX(50px) rotate(360deg) scale(1.1);
            }
        `}} />
        <Bot id="icono-js" className="h-24 w-24 text-primary" strokeWidth={1.5} />
    </>
);


const Section = ({ children }: { children: React.ReactNode }) => (
  <section className="space-y-4 text-foreground/90 leading-relaxed">
    {children}
  </section>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl font-bold text-foreground pt-8 pb-2">
    {children}
  </h2>
);

const SubTitle = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-2xl font-semibold text-primary flex items-center gap-3 pt-6 pb-2">
       {children}
    </h3>
);

const PracticeList = ({ items }: { items: string[] }) => (
  <ul className="space-y-4 list-disc list-outside pl-5 text-foreground/80">
    {items.map((item, index) => {
        const parts = item.split(/(\<strong\>.*?\<\/strong\>|\<code\>.*?\<\/code\>)/g);
        return (
          <li key={index}>
            {parts.map((part, i) =>
              part.match(/^<.*>$/) ? (
                <span key={i} dangerouslySetInnerHTML={{ __html: part }} />
              ) : (
                <React.Fragment key={i}>{part}</React.Fragment>
              )
            )}
          </li>
        );
    })}
  </ul>
);

export default function SvgAnimacionesWeb() {
    const practices = [
        "Mantener <strong>paths y nodos simples</strong> para reducir el consumo de CPU y memoria.",
        "Usar <strong>clases e IDs semánticos</strong> para facilitar la manipulación mediante CSS o JS.",
        "<strong>Optimizar SVGs</strong> antes de publicarlos usando herramientas como SVGO o SVGOMG.",
        "Combinar animaciones CSS y JS según el nivel de interactividad deseado.",
        "Probar <strong>compatibilidad</strong> en todos los navegadores modernos y dispositivos móviles, asegurando una experiencia consistente."
    ];

  return (
    <div className="space-y-12">
      <Section>
        <h2 className="text-3xl font-bold text-foreground pb-2">SVG: Más que Imágenes Estáticas</h2>
        <p>
            El SVG (Scalable Vector Graphics) es un formato basado en XML vectorial, lo que significa que cada elemento de la imagen —líneas, curvas, formas, textos— puede ser accedido, modificado y animado mediante código. Esta característica convierte al SVG en una herramienta ideal para la animación web avanzada, permitiendo experiencias interactivas más ligeras, escalables y precisas que los GIFs o los vídeos tradicionales.
        </p>
        <p>
            Al trabajar con SVG, cada <code>path</code>, grupo (<code>&lt;g&gt;</code>), <code>circle</code>, <code>rect</code> o <code>polygon</code> se convierte en un objeto manipulable, lo que abre posibilidades para microinteracciones, storytelling visual y interfaces dinámicas.
        </p>
      </Section>

      <Section>
        <SectionTitle>Técnicas de Animación SVG</SectionTitle>
        
        <SubTitle>1. Animaciones con CSS (Transiciones y Keyframes)</SubTitle>
        <p>La forma más sencilla y eficiente de animar SVGs. Puedes modificar propiedades de estilo como <code>fill</code> (color de relleno), <code>stroke</code> (trazo), <code>opacity</code> (opacidad) o <code>transform</code> (rotación, traslación, escalado). Es ideal para efectos de hover, animaciones repetitivas o secuencias simples.</p>
        <CodeBlock code={cssHoverExample} language="css" preview={cssHoverPreview} />

        <SubTitle>2. Animación de Trazados (Path Animation)</SubTitle>
        <p>Conocida como “efecto de dibujado”, da la sensación de que un SVG se está dibujando en tiempo real. Se logra mediante <code>stroke-dasharray</code> y <code>stroke-dashoffset</code>. Es muy útil para logos, firmas, o para guiar la atención del usuario.</p>
        <CodeBlock code={pathAnimationExample} language="css" preview={pathAnimationPreview} />

        <SubTitle>3. JavaScript para Interactividad Avanzada</SubTitle>
        <p>Cuando se necesita control dinámico y respuesta a eventos del usuario, JavaScript es la opción ideal. Permite animaciones que siguen el cursor, secuencias sincronizadas con el scroll, etc. Bibliotecas como <strong>GSAP (GreenSock Animation Platform)</strong>, <strong>Anime.js</strong>, o <strong>Snap.svg</strong> facilitan la creación de animaciones complejas con excelente rendimiento.</p>
        <CodeBlock code={jsExample} language="javascript" preview={jsPreview} />

      </Section>
      
      <Section>
        <SectionTitle>Beneficios de Animar SVGs</SectionTitle>
         <ul className="list-disc list-outside pl-5 space-y-4 text-foreground/80 mt-4">
            <li><strong>Escalabilidad y nitidez infinita:</strong> No importa el tamaño de la pantalla, la calidad se mantiene perfecta.</li>
            <li><strong>Interactividad y microinteracciones:</strong> Las animaciones sutiles mejoran la experiencia de usuario (UX) y aumentan el engagement.</li>
            <li><strong>Optimización de rendimiento:</strong> Los archivos son más ligeros que vídeos o GIFs, lo que reduce tiempos de carga y mejora el SEO.</li>
            <li><strong>Storytelling visual:</strong> Permite contar historias o explicar procesos complejos mediante secuencias animadas.</li>
            <li><strong>Diferenciación de marca:</strong> Las interfaces dinámicas generan experiencias memorables, aumentando la retención y conversión.</li>
        </ul>
      </Section>

      <Section>
        <SectionTitle>Buenas Prácticas para Animaciones SVG</SectionTitle>
        <PracticeList items={practices} />
      </Section>
      
      <Section>
        <SectionTitle>Conclusión</SectionTitle>
        <p>
            El SVG animado es una herramienta poderosa para la web moderna. Al combinar vectorización, animación ligera y control programático, los diseñadores y desarrolladores pueden crear experiencias que capturan la atención, transmiten información de manera efectiva y optimizan el rendimiento web.
        </p>
      </Section>
    </div>
  );
}
