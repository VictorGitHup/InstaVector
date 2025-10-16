import React from 'react';
import { CodeBlock } from './CodeBlock';

const cssExample = `svg path:hover {
  stroke: #00BFFF;
  stroke-width: 3;
  transition: stroke 0.3s ease;
}`;

const jsExample = `gsap.to("#logo", { 
  duration: 2, 
  rotation: 360, 
  ease: "elastic" 
});`;

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

export default function SvgAnimacionesMarketing() {
  return (
    <div className="space-y-12">
      <Section>
        <h2 className="text-3xl font-bold text-foreground pb-2">El poder del SVG en el marketing digital moderno</h2>
        <p>
          El marketing digital actual depende cada vez más de la velocidad, la interactividad y la experiencia visual del usuario. En este contexto, el formato SVG (Scalable Vector Graphics) se ha convertido en una herramienta clave para diseñadores, desarrolladores y estrategas de marketing que buscan crear animaciones livianas, escalables y totalmente interactivas.
        </p>
        <p>
          A diferencia de los formatos rasterizados tradicionales como JPEG o PNG, los archivos SVG están basados en código XML, lo que significa que sus elementos pueden ser manipulados directamente mediante CSS, JavaScript o incluso librerías como GSAP y Anime.js. Esto abre un abanico de posibilidades creativas para crear animaciones fluidas, iconos interactivos, infografías dinámicas, y microinteracciones que mejoran drásticamente el engagement del usuario.
        </p>
      </Section>

      <Section>
        <SectionTitle>Por qué el SVG es ideal para campañas digitales</SectionTitle>
        
        <SubTitle icon="🔹">1. Ligereza y rendimiento optimizado</SubTitle>
        <p>
          Las animaciones SVG son increíblemente livianas porque se componen de vectores matemáticos y no de píxeles. Esto no solo reduce los tiempos de carga, sino que también mejora la puntuación de Core Web Vitals, un factor clave en el posicionamiento SEO.
        </p>
        <p>
          Además, los SVG se renderizan de forma nativa en el navegador sin necesidad de complementos, lo que garantiza una mayor compatibilidad y accesibilidad en cualquier dispositivo o resolución.
        </p>

        <SubTitle icon="🔹">2. Escalabilidad sin pérdida de calidad</SubTitle>
        <p>
          Ya sea en una pantalla Full HD, Retina o 4K, las imágenes SVG conservan su nitidez y definición. Esto es crucial en campañas multicanal donde los mismos recursos se adaptan a banners, redes sociales, sitios web o apps móviles.
        </p>

        <SubTitle icon="🔹">3. Interactividad con CSS y JavaScript</SubTitle>
        <p>
          Los SVG pueden reaccionar a eventos del usuario (hover, click, scroll, etc.) mediante animaciones o transformaciones dinámicas. Por ejemplo, con CSS:
        </p>
        <CodeBlock code={cssExample} language="css" />
        <p>
          O incluso integrar animaciones más avanzadas con JavaScript:
        </p>
        <CodeBlock code={jsExample} language="javascript" />
        <p>
          Esto permite crear landing pages inmersivas donde cada interacción genera una respuesta visual inmediata, fortaleciendo el vínculo emocional con la marca.
        </p>
      </Section>

      <Section>
        <SectionTitle>Beneficios de las animaciones SVG en marketing</SectionTitle>
        
        <SubTitle icon="✨">1. Mejora del Engagement</SubTitle>
        <p>
          Las animaciones vectoriales permiten transmitir dinamismo sin distraer al usuario. Pequeños efectos —como íconos que cobran vida o botones que responden con microtransiciones— aumentan el tiempo de permanencia en la página y favorecen la conversión.
        </p>

        <SubTitle icon="⚡️">2. Rendimiento optimizado</SubTitle>
        <p>
          A diferencia de los GIFs o videos en loop, los SVG animados pesan hasta un 80% menos, y se cargan instantáneamente incluso en conexiones móviles. Esto garantiza que tus campañas publicitarias y sitios web no sean penalizados por tiempos de carga lentos, una ventaja competitiva clave.
        </p>
        
        <SubTitle icon="🎬">3. Narrativa visual o Storytelling interactivo</SubTitle>
        <p>
          Mediante transiciones, morphing o trazados animados, puedes contar historias visuales que reflejen la evolución de un producto o servicio. Por ejemplo, mostrar cómo una idea se transforma en innovación, todo dentro de un mismo SVG animado.
        </p>
      </Section>
      
      <Section>
        <SectionTitle>Buenas prácticas al usar SVG</SectionTitle>
        <ul className="space-y-4 list-disc list-outside pl-5 text-foreground/80">
          <li>
            <strong>Optimiza tus SVGs antes de subirlos a la web:</strong> Utiliza herramientas como <a href="https://jakearchibald.github.io/svgomg/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">SVGOMG</a> o Vectornator para eliminar metadatos y reducir el tamaño del archivo.
          </li>
          <li>
            <strong>Mantén una estructura semántica:</strong> Usa etiquetas descriptivas (<code>&lt;title&gt;</code>, <code>&lt;desc&gt;</code>) para mejorar la accesibilidad y el SEO.
          </li>
          <li>
            <strong>Evita la sobrecarga visual:</strong> Las animaciones deben complementar el contenido, no distraerlo. Prioriza la fluidez y la intención.
          </li>
          <li>
            <strong>Aprovecha librerías especializadas:</strong> Frameworks como Lottie, GSAP, o Vivus.js permiten crear efectos complejos con código optimizado.
          </li>
          <li>
            <strong>Prueba en diferentes dispositivos:</strong> Asegura una experiencia consistente validando el comportamiento del SVG en los principales navegadores y en móviles.
          </li>
        </ul>
      </Section>
      
      <Section>
        <SectionTitle>Conclusión: El SVG como motor de experiencias memorables</SectionTitle>
        <HighlightCard>
            El uso inteligente del SVG representa un salto cualitativo en la forma en que las marcas comunican su mensaje. En un mundo saturado de contenido, las animaciones interactivas y ligeras pueden ser el factor diferenciador que convierta una simple visita en una experiencia memorable y una conversión exitosa.
        </HighlightCard>
        <p>
          Adoptar esta tecnología no solo optimiza el rendimiento técnico de tus campañas, sino que refuerza la identidad visual y emocional de tu marca.
        </p>
      </Section>
    </div>
  );
}

    