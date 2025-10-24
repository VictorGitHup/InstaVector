import React from 'react';
import { CodeBlock } from './CodeBlock';
import { Maximize, Zap, Film, Settings } from 'lucide-react';

const svgExample = `<svg width="100" height="100" viewBox="0 0 100 100" 
     xmlns="http://www.w3.org/2000/svg" 
     role="img" aria-labelledby="logoTitle logoDesc">
  <title id="logoTitle">Mi Logo Corporativo</title>
  <desc id="logoDesc">Un círculo azul que contiene la letra 'M' en blanco, representando la marca 'MiMarca'.</desc>
  <circle cx="50" cy="50" r="45" fill="var(--color-primary, #3498db)" />
  <text x="50" y="65" font-family="Arial, sans-serif" font-size="50" fill="var(--color-foreground, #ffffff)" 
        text-anchor="middle" font-weight="bold">M</text>
</svg>
`;

const svgExamplePreview = (
    <svg width="100" height="100" viewBox="0 0 100 100" 
         xmlns="http://www.w3.org/2000/svg" 
         role="img" aria-labelledby="logoTitle logoDesc">
      <title id="logoTitle">Mi Logo</title>
      <desc id="logoDesc">Un círculo azul con una inicial 'M' blanca.</desc>
      <circle cx="50" cy="50" r="45" fill="#3498db" />
      <text x="50" y="65" fontSize="50" fill="#ffffff" 
            textAnchor="middle" fontWeight="bold">M</text>
    </svg>
);

const cssAnimationExample = `/* Pasa el cursor sobre el logo para ver la animación */
.logo-animado:hover .circulo-externo {
  stroke-dashoffset: 0;
}
.logo-animado:hover .letra-interna {
  transform: scale(1);
  opacity: 1;
}

.circulo-externo {
  stroke-dasharray: 283;
  stroke-dashoffset: 283;
  transition: stroke-dashoffset 1s ease-in-out;
}
.letra-interna {
  transform: scale(0.5);
  opacity: 0;
  transition: transform 0.5s 0.5s ease-out, opacity 0.5s 0.5s;
  transform-origin: center;
}`;

const animatedSvgPreview = (
    <>
        <style dangerouslySetInnerHTML={{ __html: `
            .logo-animado:hover .circulo-externo {
              stroke-dashoffset: 0;
            }
            .logo-animado:hover .letra-interna {
              transform: scale(1);
              opacity: 1;
            }

            .circulo-externo {
              stroke: #3498db;
              stroke-width: 10;
              fill: none;
              stroke-dasharray: 283;
              stroke-dashoffset: 283;
              transition: stroke-dashoffset 1s ease-in-out;
            }
            .letra-interna {
              fill: #3498db;
              transform: scale(0.5);
              opacity: 0;
              transition: transform 0.5s 0.5s ease-out, opacity 0.5s 0.5s;
              transform-origin: center;
            }
        `}} />
        <svg className="logo-animado" width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path className="circulo-externo"
                d="M50,5 A45,45 0 1,1 49.9,5 Z"
            />
             <text className="letra-interna" x="50" y="68" fontSize="60" textAnchor="middle" fontWeight="bold">L</text>
        </svg>
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

const SubTitle = ({ icon, children }: { icon: React.ReactNode, children: React.ReactNode }) => (
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
        const parts = item.split(/(\<[a-zA-Z0-9\/\s='"-]+\>.*?\<\/[a-zA-Z0-9]+\>)/g);
        return (
          <li key={index}>
            {parts.map((part, i) =>
              part.startsWith('<') ? (
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

export default function LogotiposSvgBranding() {
  const practices = [
    "<strong>Simplifica los trazados y reduce nodos.</strong> Antes de exportar, utiliza las herramientas de tu software de diseño (como 'Simplificar' en Illustrator) para eliminar puntos de anclaje redundantes. Un logotipo con menos nodos no solo pesa menos, sino que también se renderiza más rápido en el navegador, mejorando el rendimiento.",
    "<strong>Usa una paleta de colores CSS-friendly.</strong> En lugar de colores directos, define los colores del logo usando variables CSS (<code>var(--color-primary)</code>). Esto permite que el logotipo se adapte automáticamente a temas (claro/oscuro) y facilita el mantenimiento de la coherencia de marca en todo el sitio.",
    "<strong>Convierte el texto en trazados (paths).</strong> Para asegurar que la tipografía de tu logotipo se muestre de manera idéntica en cualquier dispositivo, independientemente de las fuentes que tenga instaladas, convierte siempre el texto en trazados. Esto es crucial para la consistencia visual del branding.",
    "<strong>Optimiza el SVG antes de publicarlo.</strong> Usa herramientas online como <a href='https://jakearchibald.github.io/svgomg/' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>SVGOMG</a> (basada en SVGO) para limpiar el código. Estas herramientas eliminan metadatos innecesarios, comentarios del editor, IDs irrelevantes y aplican otras optimizaciones que pueden reducir el tamaño del archivo hasta en un 80%.",
    "<strong>Implementa la accesibilidad (a11y).</strong> Un logotipo no es solo un elemento visual. Añade <code>role='img'</code> al SVG y las etiquetas <code>&lt;title&gt;</code> y <code>&lt;desc&gt;</code> con texto descriptivo. Esto permite que los lectores de pantalla interpreten correctamente el logotipo, haciendo tu marca accesible para todos los usuarios.",
    "<strong>Estructura con IDs y clases semánticas.</strong> Si planeas animar o interactuar con partes del logo, asigna IDs descriptivos (ej. <code>#logo-circulo-externo</code>) y clases a los elementos. Esto hará que la selección y manipulación con CSS o JavaScript sea mucho más limpia y mantenible."
  ];

  return (
    <div className="space-y-12">
      <Section>
        <h2 className="text-3xl font-bold text-foreground pb-2">El Logotipo como Pilar Técnico del Branding Moderno</h2>
        <p>
          En el ecosistema digital contemporáneo, un logotipo es mucho más que un simple identificador visual; es el activo más versátil y fundamental de la identidad de una marca. Debe funcionar con la misma claridad y consistencia en un diminuto favicon de navegador, una app móvil, un monitor 4K, una valla publicitaria gigante o incluso en animaciones interactivas. Esta exigencia de adaptabilidad ha convertido a los formatos de imagen tradicionales, como PNG y JPG, en soluciones obsoletas para el branding.
        </p>
        <HighlightCard>
          Aquí es donde el formato SVG (Scalable Vector Graphics) se consolida como el estándar técnico indispensable. No es solo una alternativa, sino una evolución estratégica. Basado en XML, el SVG describe el logotipo mediante código y matemáticas, no píxeles, ofreciendo una combinación inigualable de escalabilidad, rendimiento, accesibilidad e interactividad en un único y eficiente archivo.
        </HighlightCard>
      </Section>

      <Section>
        <SectionTitle>Las Ventajas Técnicas Irrefutables del SVG para Logotipos</SectionTitle>
        
        <SubTitle icon={<Maximize className="h-6 w-6" />}>1. Escalabilidad Infinita y Perfección en Cualquier Resolución</SubTitle>
        <p>
          A diferencia de las imágenes rasterizadas, que se degradan y pixelan al ampliar, un SVG utiliza vectores (líneas y curvas definidas por coordenadas matemáticas) para construir la imagen. Esto significa que su renderizado es independiente de la resolución. El navegador o dispositivo "dibuja" el logotipo en tiempo real basándose en estas instrucciones, garantizando una nitidez absoluta en cualquier densidad de pantalla (DPI), desde un smartwatch hasta un proyector de alta definición.
        </p>
        <p>Esta propiedad elimina la necesidad de mantener múltiples versiones de un logotipo (<code>logo@1x.png</code>, <code>logo@2x.png</code>, etc.), simplificando drásticamente la gestión de activos y asegurando que la marca siempre se presente con la máxima calidad.</p>
        <CodeBlock
            code={svgExample}
            language="html"
            preview={svgExamplePreview}
        />

        <SubTitle icon={<Zap className="h-6 w-6" />}>2. Rendimiento Web Superior y Beneficios SEO</SubTitle>
        <p>
            El rendimiento de un sitio web es un factor crucial tanto para la experiencia del usuario (UX) como para el posicionamiento en motores de búsqueda (SEO). Un logotipo en SVG es, por naturaleza, un archivo de texto, lo que lo hace extremadamente ligero. Un SVG bien optimizado puede pesar hasta un 90% menos que su equivalente en PNG de alta resolución, lo que se traduce en tiempos de carga de página más rápidos y una mejora en los Core Web Vitals de Google (especialmente en métricas como el Largest Contentful Paint, LCP).
        </p>
        <p>
            Además, como el contenido del SVG es texto legible por el navegador, los motores de búsqueda pueden indexar las etiquetas <code>&lt;title&gt;</code> y <code>&lt;desc&gt;</code>, así como cualquier texto dentro del propio gráfico. Esto proporciona un contexto adicional sobre la marca y contribuye a la accesibilidad y al SEO de una manera que los formatos de imagen binarios no pueden.
        </p>
         <p className="text-sm text-center text-muted-foreground italic mt-2">Este ejemplo ilustra cómo un SVG puede contener metadatos que mejoran tanto la accesibilidad (a11y) como el posicionamiento.</p>

        <SubTitle icon={<Film className="h-6 w-6" />}>3. Potencial Ilimitado para Interactividad y Animación</SubTitle>
        <p>
            Quizás la ventaja más emocionante del SVG es su capacidad nativa para ser manipulado con CSS y JavaScript. Esto transforma el logotipo de un elemento estático a una experiencia interactiva y dinámica.
        </p>
        <p>
            Se pueden implementar efectos de hover, transiciones de color, microinteracciones o incluso animaciones complejas que reaccionan a las acciones del usuario (scroll, clic, movimiento del cursor). Estas animaciones, al ser vectoriales, son mucho más eficientes y fluidas que los GIFs o los vídeos. Por ejemplo, se puede hacer que un logotipo se "dibuje" a sí mismo al cargar la página, creando un impacto visual memorable.
        </p>
        <CodeBlock code={cssAnimationExample} language="css" preview={animatedSvgPreview} />
        <p className="text-sm text-center text-muted-foreground italic mt-2">Pasa el cursor sobre el logo para ver cómo un simple efecto CSS puede darle vida, reforzando la identidad de la marca.</p>
        <p>
            Para animaciones más sofisticadas, librerías como GSAP (GreenSock Animation Platform) o Lottie permiten un control granular sobre cada elemento del SVG, abriendo la puerta a logotipos que cuentan historias o que se transforman para reflejar diferentes estados de la aplicación.
        </p>
      </Section>
      
      <Section>
        <SectionTitle>Checklist de Optimización para un Logo SVG Profesional</SectionTitle>
        <p>Para asegurar que tu logotipo SVG sea robusto, eficiente y profesional, sigue estas buenas prácticas técnicas:</p>
        <PracticeList items={practices} />
      </Section>
      
      <Section>
        <SectionTitle>Conclusión: El SVG como Sello de Calidad y Profesionalismo</SectionTitle>
        <HighlightCard>
            Adoptar el formato SVG para los logotipos y el branding de una marca no es una simple elección estética; es una decisión técnica estratégica que tiene un impacto directo y positivo en el rendimiento, la experiencia del usuario, la accesibilidad y la consistencia visual a través de todas las plataformas.
        </HighlightCard>
        <p>
          Un logotipo vectorial bien diseñado y optimizado comunica implícitamente innovación, atención al detalle y un dominio de la tecnología, tres pilares fundamentales en el branding digital moderno. En un mercado competitivo, cada detalle cuenta, y la precisión, adaptabilidad y eficiencia del SVG lo convierten en el formato definitivo para la identidad visual del futuro.
        </p>
      </Section>
    </div>
  );
}
