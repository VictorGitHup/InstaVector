'use client';

import React from 'react';
import { CodeBlock } from './CodeBlock';
import { Sparkles, Bot, Wind, Settings } from 'lucide-react';

const cssHoverExample = `/* Pasa el cursor sobre el icono para ver la interacción */
#icono-interactivo {
  transition: transform 0.3s ease-in-out, fill 0.3s;
}
#icono-interactivo:hover {
  fill: hsl(var(--primary));
  transform: scale(1.2) rotate(15deg);
}`;

const cssHoverPreview = (
    <>
        <style dangerouslySetInnerHTML={{ __html: `
            #icono-interactivo {
                transition: transform 0.3s ease-in-out, fill 0.3s;
                cursor: pointer;
                fill: hsl(var(--foreground));
            }
            #icono-interactivo:hover {
              fill: hsl(var(--primary));
              transform: scale(1.2) rotate(15deg);
            }
        `}} />
        <Sparkles id="icono-interactivo" className="h-24 w-24" strokeWidth={1} />
    </>
);

const pathAnimationExample = `/* Pasa el cursor sobre el SVG para reiniciar la animación */
#trazado-animado path {
  stroke-dasharray: 500; /* Longitud del trazado */
  stroke-dashoffset: 500; /* Inicio del trazado (oculto) */
  animation: dibujar 2s ease-in-out forwards;
}

@keyframes dibujar {
  to {
    stroke-dashoffset: 0; /* Fin del trazado (visible) */
  }
}

/* Reiniciar al pasar el cursor */
#trazado-animado:hover path {
  animation: none;
  animation: dibujar 2s ease-in-out forwards;
}`;

const pathAnimationPreview = (
    <>
        <style dangerouslySetInnerHTML={{ __html: `
            #trazado-animado path {
              stroke-dasharray: 500;
              stroke-dashoffset: 500;
              animation: dibujar 2s ease-in-out forwards;
            }
            #trazado-animado:hover path {
              animation: none;
            }
            #trazado-animado:hover path {
                animation: dibujar 2s ease-in-out forwards;
            }
            @keyframes dibujar {
              to { stroke-dashoffset: 0; }
            }
        `}} />
        <svg id="trazado-animado" width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
            <title>Animación de Trazado de Logo</title>
            <path 
                d="M25,75 C40,25 60,25 75,75 S50,100 50,50 S25,25 25,75"
                stroke="hsl(var(--primary))" 
                strokeWidth="4" 
                fill="none" 
            />
        </svg>
    </>
);


const jsExample = `// Ejemplo conceptual de animación con GSAP (requiere la librería)
// Anima la entrada del icono y añade una rotación infinita
gsap.fromTo("#robot-icono", 
  { y: -50, opacity: 0 }, 
  { y: 0, opacity: 1, duration: 1, ease: "bounce.out" }
);

gsap.to("#robot-icono", {
  rotation: 360,
  duration: 5,
  repeat: -1, // Repetir infinitamente
  ease: "linear"
});`;

const jsPreview = (
     <>
        <style dangerouslySetInnerHTML={{ __html: `
             #robot-icono-container:hover #robot-icono {
                transform: translateX(20px) rotate(360deg) scale(1.1);
             }
             #robot-icono {
                transition: transform 1.2s cubic-bezier(0.68, -0.55, 0.27, 1.55);
                cursor: pointer;
             }
        `}} />
        <div id="robot-icono-container">
            <Bot id="robot-icono" className="h-24 w-24 text-primary" strokeWidth={1.5} />
        </div>
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

const SubTitle = ({ children, icon }: { children: React.ReactNode, icon?: React.ReactNode }) => (
    <h3 className="text-2xl font-semibold text-primary flex items-center gap-3 pt-6 pb-2">
       {icon} {children}
    </h3>
);

const HighlightCard = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-muted/50 border-l-4 border-primary p-4 my-6 rounded-r-lg">
        <p className="font-medium text-foreground/80">{children}</p>
    </div>
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
        "<strong>Optimizar el SVG base:</strong> Antes de animar, pasa tu SVG por una herramienta como <a href='https://jakearchibald.github.io/svgomg/' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>SVGOMG</a>. Un SVG con código limpio, sin metadatos innecesarios y con trazados simplificados consumirá menos CPU y memoria durante la animación.",
        "<strong>Usar clases e IDs semánticos:</strong> Asigna nombres descriptivos a los elementos y grupos dentro de tu SVG (ej. <code>id='brazo-robot'</code>). Esto hará que seleccionar y manipular los elementos con CSS o JavaScript sea infinitamente más fácil y mantenible.",
        "<strong>Preferir transformaciones CSS:</strong> Siempre que sea posible, anima las propiedades <code>transform</code> (<code>translate</code>, <code>scale</code>, <code>rotate</code>) y <code>opacity</code>. Los navegadores están altamente optimizados para animar estas propiedades en la GPU, lo que resulta en animaciones mucho más fluidas que si animas propiedades como <code>width</code> o <code>height</code>.",
        "<strong>Elige la herramienta adecuada para el trabajo:</strong> No necesitas una librería de JavaScript para un simple efecto hover. Usa <strong>CSS</strong> para interacciones y bucles sencillos. Reserva <strong>JavaScript y librerías como GSAP</strong> para animaciones complejas, secuencias coreografiadas o interacciones que dependen del estado de la aplicación o del scroll del usuario.",
        "<strong>Considerar la accesibilidad:</strong> Implementa la media query <code>prefers-reduced-motion</code> para desactivar o reducir las animaciones para usuarios que lo prefieran. Si una animación es puramente decorativa, ocúltala de los lectores de pantalla con <code>aria-hidden='true'</code>.",
        "<strong>Probar el rendimiento:</strong> Usa las herramientas de desarrollo de tu navegador (especialmente el panel de 'Performance' o 'Rendering') para analizar cómo impacta tu animación en el rendimiento de la página. Busca 'layout shifts' o un uso excesivo de la CPU y optimiza en consecuencia."
    ];

  return (
    <div className="space-y-12">
      <Section>
        <h2 className="text-3xl font-bold text-foreground pb-2">SVG: El Lienzo Dinámico para Animaciones Web Modernas</h2>
        <p>
            El SVG (Scalable Vector Graphics) ha trascendido su rol como simple formato de imagen para convertirse en una de las herramientas más potentes y versátiles para la creación de animaciones web. A diferencia de los GIFs pesados o los vídeos, que son esencialmente cajas negras, los SVG son documentos basados en XML. Esto significa que cada elemento de la imagen —cada línea, curva, forma o texto— es un objeto del DOM que puede ser accedido, modificado y, lo más importante, animado mediante código.
        </p>
        <HighlightCard>
            Esta naturaleza programable transforma los gráficos estáticos en experiencias interactivas, ligeras y escalables. Las animaciones SVG no solo mejoran la estética de un sitio, sino que también pueden mejorar la experiencia de usuario (UX), guiar la atención y contar historias de una manera visualmente atractiva y altamente performante.
        </HighlightCard>
      </Section>

      <Section>
        <SectionTitle>Técnicas Fundamentales de Animación con SVG</SectionTitle>
        
        <SubTitle icon={<Sparkles className="h-6 w-6" />}>1. Animaciones con CSS: La Vía Directa y Eficiente</SubTitle>
        <p>La forma más sencilla y, a menudo, más eficiente de animar SVGs es utilizando CSS. Al poder asignar clases e IDs a los elementos de un SVG, puedes aplicarles transiciones y animaciones <code>@keyframes</code> como a cualquier otro elemento HTML. Este método es ideal para:</p>
        <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80 mt-2">
            <li><strong>Efectos de hover e interacciones simples:</strong> Cambiar el color (<code>fill</code>), el trazo (<code>stroke</code>), la opacidad o aplicar transformaciones (<code>scale</code>, <code>rotate</code>, <code>translate</code>).</li>
            <li><strong>Bucles de animación sencillos:</strong> Crear animaciones que se repiten, como un icono que pulsa suavemente para llamar la atención.</li>
        </ul>
        <CodeBlock code={cssHoverExample} language="css" preview={cssHoverPreview} />

        <SubTitle icon={<Wind className="h-6 w-6" />}>2. Animación de Trazados (Path Animation)</SubTitle>
        <p>Esta es una de las técnicas más icónicas del SVG. Da la sensación de que el gráfico se está "dibujando" en tiempo real. Se logra manipulando dos propiedades CSS del trazo: <code>stroke-dasharray</code> y <code>stroke-dashoffset</code>. La primera crea un patrón de guiones en el trazo, y la segunda desplaza el inicio de ese patrón. Animando <code>stroke-dashoffset</code>, puedes hacer que el trazo aparezca o desaparezca gradualmente a lo largo de su propia ruta. Es extremadamente efectivo para:</p>
         <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80 mt-2">
            <li>Animar la carga de logotipos y firmas.</li>
            <li>Visualizar el progreso en gráficos y diagramas.</li>
            <li>Guiar la atención del usuario a través de una ilustración compleja.</li>
        </ul>
        <CodeBlock code={pathAnimationExample} language="css" preview={pathAnimationPreview} />

        <SubTitle icon={<Bot className="h-6 w-6" />}>3. JavaScript para Interactividad y Control Avanzado</SubTitle>
        <p>Cuando las animaciones necesitan responder a eventos complejos del usuario, sincronizarse con el scroll de la página o seguir una secuencia coreografiada, JavaScript es la herramienta necesaria. Aunque se puede manipular el SVG directamente con el DOM API, es altamente recomendable usar librerías especializadas que optimizan el rendimiento y simplifican el código:</p>
         <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80 mt-2">
            <li><strong>GSAP (GreenSock Animation Platform):</strong> Es el estándar de la industria para animaciones web de alto rendimiento. Ofrece un control granular sobre cada aspecto de la animación, una sintaxis intuitiva y plugins para efectos complejos como morphing (transformar una forma en otra).</li>
            <li><strong>Anime.js:</strong> Una alternativa ligera y potente a GSAP, con una API flexible y muy popular en la comunidad de desarrolladores.</li>
            <li><strong>Snap.svg:</strong> Una librería específica para SVG que facilita la manipulación y animación de gráficos vectoriales, ideal para proyectos que giran en torno a un único SVG interactivo.</li>
        </ul>
        <CodeBlock code={jsExample} language="javascript" preview={jsPreview} />
      </Section>
      
      <Section>
        <SectionTitle>Checklist de Buenas Prácticas para Animaciones SVG Performantes</SectionTitle>
        <p>Una animación mal implementada puede ser peor que ninguna animación. Para asegurar que tus creaciones sean fluidas y no degraden la experiencia del usuario, sigue estas pautas técnicas:</p>
        <PracticeList items={practices} />
      </Section>
      
      <Section>
        <SectionTitle>Conclusión: La Animación como Herramienta de Comunicación</SectionTitle>
        <HighlightCard>
            El SVG animado ha dejado de ser un truco visual para convertirse en una herramienta fundamental de comunicación y diseño de experiencia de usuario. Al combinar la precisión del diseño vectorial, la ligereza del código y el poder de la animación programática, los diseñadores y desarrolladores pueden crear interfaces que no solo capturan la atención, sino que también informan, guían y deleitan al usuario.
        </HighlightCard>
        <p>
            Dominar las técnicas de animación SVG es esencial para cualquier profesional web que busque construir experiencias digitales modernas, memorables y, sobre todo, de alto rendimiento.
        </p>
      </Section>
    </div>
  );
}
