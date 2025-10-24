
import React from 'react';
import { CodeBlock } from './CodeBlock';
import { BookOpen, Share2 } from 'lucide-react';

const svgDiagramExample = `<svg width="150" height="100" viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Capa de conceptos -->
  <g id="capa-conceptos">
    <rect id="concepto-a" x="10" y="30" width="50" height="40" rx="5" />
    <text x="35" y="55" text-anchor="middle">A</text>
    
    <rect id="concepto-b" x="90" y="30" width="50" height="40" rx="5" />
    <text x="115" y="55" text-anchor="middle">B</text>
  </g>
  
  <!-- Capa de conexión -->
  <g id="capa-conexion">
    <line x1="60" y1="50" x2="90" y2="50" stroke-dasharray="2" />
    <circle cx="75" cy="50" r="3" fill="currentColor" />
  </g>
</svg>
`;

const diagramPreview = (
    <>
        <style dangerouslySetInnerHTML={{ __html: `
            #interactive-diagram #concepto-a, #interactive-diagram #concepto-b {
                fill: hsl(var(--card));
                stroke: hsl(var(--border));
                transition: fill 0.2s ease-in-out;
            }
            #interactive-diagram text {
                fill: hsl(var(--card-foreground));
                font-family: sans-serif;
                font-size: 16px;
            }
            #interactive-diagram line, #interactive-diagram circle {
                 stroke: hsl(var(--primary));
            }
            #interactive-diagram #concepto-a:hover, #interactive-diagram #concepto-b:hover {
                fill: hsl(var(--accent));
            }
             #interactive-diagram #concepto-a:hover ~ text, #interactive-diagram #concepto-b:hover ~ text {
                fill: hsl(var(--accent-foreground));
            }
        `}} />
        <svg id="interactive-diagram" width="150" height="100" viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
            <title>Diagrama Interactivo Simple</title>
            <g id="capa-conceptos">
                <rect id="concepto-a" x="10" y="30" width="50" height="40" rx="5" />
                <text x="35" y="55" textAnchor="middle">A</text>
                
                <rect id="concepto-b" x="90" y="30" width="50" height="40" rx="5" />
                <text x="115" y="55" textAnchor="middle">B</text>
            </g>
            <g id="capa-conexion">
                <line x1="60" y1="50" x2="90" y2="50" strokeWidth="1.5" strokeDasharray="2" />
                <circle cx="75" cy="50" r="3" fill="currentColor" />
            </g>
        </svg>
    </>
);

const cssAnimationExample = `@keyframes mover {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}
#ciclo-agua {
  animation: mover 2s infinite ease-in-out;
}`;

const animationPreview = (
    <>
        <style dangerouslySetInnerHTML={{ __html: `
            @keyframes mover {
              0% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
              100% { transform: translateY(0); }
            }
            #ciclo-agua {
              animation: mover 2s infinite ease-in-out;
            }
        `}} />
        <svg id="ciclo-agua" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
            <title>Gota de agua animada</title>
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.32 0L12 2.69z" />
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

export default function DiagramasEducativosSvg() {
  const practices = [
    "<strong>IDs y clases semánticas:</strong> Facilitan la manipulación mediante JavaScript y permiten organizar elementos por temática o función.",
    "<strong>Optimización de nodos y paths:</strong> Reducir la complejidad geométrica para mejorar el rendimiento y tiempos de carga.",
    "<strong>Accesibilidad:</strong> Implementar etiquetas <code>&lt;title&gt;</code>, <code>&lt;desc&gt;</code> y roles ARIA para compatibilidad con lectores de pantalla.",
    "<strong>Separación de capas:</strong> Mantener elementos interactivos, decorativos y de fondo en capas distintas para una edición y animación más sencilla.",
    "<strong>Integración con librerías:</strong> Combinar SVG con frameworks como D3.js, Snap.svg o GSAP para crear interacciones avanzadas y visualizaciones dinámicas.",
  ];

  return (
    <div className="space-y-12">
      <Section>
        <h2 className="text-3xl font-bold text-foreground pb-2">SVG: Transformando la Educación Digital</h2>
        <p>
            La transformación digital en educación requiere herramientas que sean flexibles, interactivas y eficientes. Las imágenes estáticas tradicionales (JPG, PNG) limitan la interactividad y la escalabilidad de los recursos educativos. El formato SVG (Scalable Vector Graphics), basado en XML vectorial, se ha convertido en un recurso clave para diagramas, mapas conceptuales y visualizaciones técnicas, ya que permite interactividad, animaciones ligeras y adaptabilidad a cualquier resolución.
        </p>
        <p>
            Al aprovechar SVG, los educadores y diseñadores pueden crear contenidos que no solo sean visualmente claros, sino también dinámicos, accesibles y fácilmente integrables en plataformas de e-learning.
        </p>
      </Section>

      <Section>
        <SectionTitle>Aplicaciones Técnicas del SVG en E-learning</SectionTitle>
        
        <SubTitle icon={<BookOpen className="h-6 w-6" />}>1. Diagramas y Mapas Interactivos</SubTitle>
        <p>El SVG permite que cada elemento de un diagrama sea independiente y manipulable, ofreciendo funcionalidades avanzadas:</p>
         <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80 mt-4">
            <li><strong>Interacción con elementos:</strong> Los estudiantes pueden hacer clic, pasar el cursor o seleccionar nodos de un diagrama para obtener información adicional mediante tooltips, pop-ups o enlaces a recursos externos.</li>
            <li><strong>Capas y grupos semánticos:</strong> Elementos organizados mediante <code>&lt;g&gt;</code> y asignación de <code>id</code> o <code>class</code> permiten controlar la visibilidad, color o animación de cada componente.</li>
            <li><strong>Soporte de metadatos:</strong> Los atributos <code>data-*</code> pueden almacenar información complementaria, como definiciones, fórmulas o referencias académicas.</li>
        </ul>
        <p className="mt-4">Ejemplo de código SVG para un diagrama interactivo:</p>
        <CodeBlock code={svgDiagramExample} language="html" preview={diagramPreview} />

        <SubTitle icon={<Share2 className="h-6 w-6" />}>2. Animaciones Educativas Ligeras</SubTitle>
         <p>Los SVG permiten animaciones vectoriales controladas por CSS o JavaScript, lo que hace posible:</p>
        <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80 mt-4">
            <li><strong>Explicar procesos complejos:</strong> Ciclos biológicos, reacciones químicas, o diagramas de sistemas eléctricos se pueden animar sin necesidad de vídeos pesados.</li>
            <li><strong>Microinteracciones y transiciones suaves:</strong> Resaltar pasos del proceso, mostrar cambios de estado o simular movimientos con bajo impacto en el rendimiento.</li>
            <li><strong>Compatibilidad multiplataforma:</strong> Animaciones que funcionan en navegadores web, dispositivos móviles y pizarras digitales, manteniendo nitidez y escalabilidad.</li>
        </ul>
         <p className="mt-4">Ejemplo de animación SVG simple con CSS:</p>
        <CodeBlock code={cssAnimationExample} language="css" preview={animationPreview} />

        <SubTitle>3. Visualización Escalable y Accesible</SubTitle>
        <p>El SVG garantiza que los diagramas educativos se vean claros en cualquier dispositivo o resolución, mejorando la accesibilidad y la experiencia de aprendizaje:</p>
        <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80 mt-4">
            <li><strong>Responsive y adaptable:</strong> Se ajusta automáticamente al tamaño de la pantalla sin pérdida de definición.</li>
            <li><strong>Compatibilidad con pantallas de alta densidad de píxeles (Retina, 4K):</strong> Ideal para tablets, laptops, proyectores y pizarras interactivas.</li>
            <li><strong>Accesibilidad:</strong> Uso de atributos ARIA, descripciones <code>&lt;title&gt;</code> y <code>&lt;desc&gt;</code> para estudiantes con discapacidad visual, asegurando conformidad con estándares de accesibilidad web (WCAG 2.1).</li>
        </ul>
      </Section>
      
      <Section>
        <SectionTitle>Buenas Prácticas para SVG Educativos</SectionTitle>
        <p>Para optimizar diagramas y animaciones SVG en educación digital:</p>
        <PracticeList items={practices} />
      </Section>
      
      <Section>
        <SectionTitle>Conclusión</SectionTitle>
        <HighlightCard>
            El uso de SVG en diagramas educativos permite que la educación digital evolucione hacia contenidos interactivos, escalables y accesibles, ofreciendo a estudiantes y educadores una experiencia más rica y flexible.
        </HighlightCard>
        <p>
          Al combinar precisión vectorial, animación ligera y capacidad de interacción, SVG se posiciona como la herramienta ideal para e-learning moderno, superando las limitaciones de las imágenes estáticas y potenciando la comprensión de conceptos complejos de manera visual e intuitiva.
        </p>
      </Section>
    </div>
  );
}
