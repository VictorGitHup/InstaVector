import React from 'react';
import { CodeBlock } from './CodeBlock';

const svgExample = `<svg width="100" height="100" viewBox="0 0 100 100" 
     xmlns="http://www.w3.org/2000/svg" 
     role="img" aria-labelledby="logoTitle logoDesc">
  <title id="logoTitle">Mi Logo</title>
  <desc id="logoDesc">Un círculo azul con una inicial 'M' blanca.</desc>
  <circle cx="50" cy="50" r="45" fill="#3498db" />
  <text x="50" y="65" font-size="50" fill="#ffffff" 
        text-anchor="middle">M</text>
</svg>
`;

const cssAnimationExample = `svg path {
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  animation: draw 3s ease-in-out forwards;
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}`;

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

const SubTitle = ({ icon, children }: { icon: string, children: React.ReactNode }) => (
    <h3 className="text-2xl font-semibold text-primary flex items-center gap-3 pt-6 pb-2">
       <span role="img" aria-label="icon">{icon}</span> {children}
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
    "<strong>Simplifica los trazados y elimina puntos innecesarios.</strong> Cuantos menos nodos tenga un vector, más eficiente será su renderizado y menor el tamaño del archivo. Utiliza herramientas como Illustrator, Inkscape o Figma para limpiar los trazos antes de exportar.",
    "<strong>Usa una paleta de colores bien definida.</strong> Declara los colores con códigos hexadecimales o RGBA para garantizar la consistencia cromática en todos los navegadores.",
    "<strong>Convierte el texto en trazados (\"paths\").</strong> Esto evita conflictos con fuentes no instaladas o incompatibles entre sistemas operativos.",
    "<strong>Optimiza el SVG antes de subirlo.</strong> Usa utilidades como <a href='https://jakearchibald.github.io/svgomg/' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>SVGOMG</a> o NanoSVG para eliminar metadatos redundantes y reducir el peso final sin afectar la calidad visual.",
    "<strong>Asegura la accesibilidad.</strong> Añade atributos role, aria-label y etiquetas <title> o <desc> para que los lectores de pantalla puedan interpretar correctamente el logo."
  ];

  return (
    <div className="space-y-12">
      <Section>
        <h2 className="text-3xl font-bold text-foreground pb-2">El poder técnico detrás de un logotipo impecable</h2>
        <p>
          El logotipo es mucho más que un elemento visual: es el núcleo simbólico de la identidad de una marca. En el entorno digital actual, donde una marca puede aparecer simultáneamente en una app móvil, una valla publicitaria, un smartwatch o un sitio web, la consistencia visual es esencial.
        </p>
        <p>
          Aquí es donde el formato SVG (Scalable Vector Graphics) se convierte en un recurso estratégico. No se trata simplemente de una alternativa más moderna al PNG o JPG, sino de un estándar abierto basado en XML que ofrece escalabilidad, accesibilidad, interactividad y optimización de rendimiento, todo en un solo archivo.
        </p>
      </Section>

      <Section>
        <SectionTitle>Por qué tu logo debe estar en formato SVG</SectionTitle>
        
        <SubTitle icon="🔹">1. Escalabilidad infinita y resolución independiente</SubTitle>
        <p>
          El SVG utiliza fórmulas matemáticas para representar formas, curvas y colores. Esto significa que su apariencia no depende de una cantidad fija de píxeles, como ocurre con los formatos rasterizados.
        </p>
        <p>
          En términos técnicos, el logo se compone de vectores definidos por coordenadas, lo que le permite renderizarse con precisión en cualquier densidad de pantalla (DPI) —ya sea un monitor 4K, una pantalla Retina o un panel LED de gran formato— sin perder calidad ni nitidez.
        </p>
        <CodeBlock code={svgExample} language="html" />
        <p className="text-sm text-center text-muted-foreground italic mt-2">Este código genera una figura vectorial escalable y editable, ideal para logotipos corporativos.</p>

        <SubTitle icon="🔹">2. Rendimiento web superior y optimización SEO</SubTitle>
        <p>
            El rendimiento en la web es un factor crítico tanto para la experiencia del usuario como para el posicionamiento orgánico. Un logotipo en SVG puede pesar hasta un 90% menos que su equivalente en PNG de alta resolución, lo que reduce significativamente los tiempos de carga y mejora los Core Web Vitals (especialmente el Largest Contentful Paint o LCP).
        </p>
        <p>
            Además, al estar basado en texto legible por el navegador, los motores de búsqueda pueden indexar el contenido del SVG, incluyendo sus atributos title, desc o aria-label, lo que contribuye indirectamente al SEO y la accesibilidad del sitio.
        </p>
         <p className="text-sm text-center text-muted-foreground italic mt-2">Este ejemplo ilustra cómo los metadatos en SVG pueden mejorar tanto la accesibilidad (a11y) como el posicionamiento en buscadores.</p>

        <SubTitle icon="🔹">3. Flexibilidad para la interactividad y animación</SubTitle>
        <p>
            Otra de las grandes ventajas del SVG es su capacidad para integrarse de manera nativa con CSS y JavaScript, permitiendo la creación de logotipos dinámicos e interactivos.
        </p>
        <p>
            Esto puede incluir efectos de hover, transiciones, microinteracciones, animaciones de carga o incluso reacciones a la interacción del usuario (scroll, clic, posición del cursor). Estas animaciones pueden implementarse de forma ligera, sin necesidad de usar videos o GIFs pesados.
        </p>
        <CodeBlock code={cssAnimationExample} language="css" />
        <p className="text-sm text-center text-muted-foreground italic mt-2">De esta forma, un logotipo puede “dibujarse” gradualmente al cargar la página, reforzando la identidad visual.</p>
        <p>
            Para animaciones más complejas, librerías como GSAP (GreenSock Animation Platform) o Lottie permiten crear efectos avanzados con control preciso sobre cada frame, tiempo y aceleración.
        </p>
      </Section>
      
      <Section>
        <SectionTitle>Consejos para un logo SVG efectivo</SectionTitle>
        <PracticeList items={practices} />
      </Section>
      
      <Section>
        <SectionTitle>Conclusión: la precisión vectorial como símbolo de profesionalismo</SectionTitle>
        <HighlightCard>
            Adoptar el formato SVG para los logotipos de una marca no es solo una cuestión estética, sino un paso técnico que impacta directamente en el rendimiento, la experiencia del usuario, la accesibilidad y la coherencia visual.
        </HighlightCard>
        <p>
          Un logotipo vectorial bien optimizado comunica innovación, cuidado por los detalles y dominio de la tecnología, tres pilares esenciales en el branding digital contemporáneo.
        </p>
        <p>
            El futuro de la identidad visual está en la precisión, la adaptabilidad y la eficiencia, y el SVG encarna exactamente esos valores.
        </p>
      </Section>
    </div>
  );
}
