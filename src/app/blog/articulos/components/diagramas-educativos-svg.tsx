import React from 'react';
import { CodeBlock } from './CodeBlock';
import { BookOpen, Share2, Accessibility, Cpu } from 'lucide-react';

const svgDiagramExample = `<svg width="200" height="120" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" role="graphics-document" aria-labelledby="diagramTitle">
  <title id="diagramTitle">Diagrama de Flujo Simple</title>
  <!-- Capa de conceptos -->
  <g id="capa-conceptos">
    <rect id="concepto-a" x="10" y="40" width="60" height="40" rx="5" />
    <text x="40" y="65" text-anchor="middle">Inicio</text>
    
    <rect id="concepto-b" x="130" y="40" width="60" height="40" rx="5" />
    <text x="160" y="65" text-anchor="middle">Fin</text>
  </g>
  
  <!-- Capa de conexión -->
  <g id="capa-conexion">
    <line x1="70" y1="60" x2="130" y2="60" stroke-dasharray="3,3" />
    <polygon points="125,55 135,60 125,65" fill="currentColor" />
  </g>
</svg>
`;

const diagramPreview = (
    <>
        <style dangerouslySetInnerHTML={{ __html: `
            #interactive-diagram .concept {
                fill: hsl(var(--card));
                stroke: hsl(var(--border));
                transition: all 0.3s ease-in-out;
            }
            #interactive-diagram text {
                fill: hsl(var(--card-foreground));
                font-family: sans-serif;
                font-size: 14px;
                pointer-events: none;
            }
            #interactive-diagram .connection, #interactive-diagram polygon {
                 stroke: hsl(var(--primary));
                 fill: hsl(var(--primary));
            }
            #interactive-diagram .concept:hover {
                fill: hsl(var(--accent));
                stroke: hsl(var(--primary));
                transform: scale(1.05);
            }
             #interactive-diagram .concept:hover + text {
                fill: hsl(var(--accent-foreground));
                font-weight: bold;
            }
        `}} />
        <svg id="interactive-diagram" width="200" height="120" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" role="graphics-document" aria-labelledby="diagramTitle">
            <title id="diagramTitle">Diagrama de Flujo Simple</title>
            <g id="capa-conceptos">
                <rect id="concepto-a" class="concept" x="10" y="40" width="60" height="40" rx="5" />
                <text x="40" y="65" textAnchor="middle">Inicio</text>
                
                <rect id="concepto-b" class="concept" x="130" y="40" width="60" height="40" rx="5" />
                <text x="160" y="65" textAnchor="middle">Fin</text>
            </g>
            <g id="capa-conexion">
                <line class="connection" x1="70" y1="60" x2="130" y2="60" strokeWidth="1.5" strokeDasharray="3,3" />
                <polygon points="125,55 135,60 125,65" />
            </g>
        </svg>
    </>
);

const cssAnimationExample = `@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.05); }
}
#elemento-destacado {
  animation: pulse 2s infinite cubic-bezier(0.4, 0, 0.6, 1);
}`;

const animationPreview = (
    <>
        <style dangerouslySetInnerHTML={{ __html: `
            @keyframes pulse {
              0%, 100% { opacity: 1; transform: scale(1); }
              50% { opacity: 0.7; transform: scale(1.05); }
            }
            #elemento-destacado {
              animation: pulse 2s infinite cubic-bezier(0.4, 0, 0.6, 1);
              transform-origin: center;
            }
        `}} />
        <svg id="elemento-destacado" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
            <title>Elemento animado</title>
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
    "<strong>IDs y clases semánticas:</strong> Asigna identificadores únicos (<code>id</code>) a los elementos principales y clases (<code>class</code>) a grupos de elementos con funciones similares. Esto no solo facilita la manipulación mediante JavaScript y CSS, sino que también añade una capa de significado estructural.",
    "<strong>Optimización de la geometría:</strong> Antes de exportar el SVG, utiliza herramientas para simplificar trazados y reducir el número de nodos. Una geometría más simple se traduce en un archivo más ligero y un renderizado más rápido por parte del navegador, crucial en dispositivos móviles.",
    "<strong>Accesibilidad (a11y) desde el diseño:</strong> Implementa etiquetas <code>&lt;title&gt;</code> y <code>&lt;desc&gt;</code> dentro del SVG para proporcionar un contexto a los lectores de pantalla. Usa atributos <code>role</code> (ej. <code>role='graphics-document'</code>) y <code>aria-labelledby</code> para vincular los elementos con sus descripciones, cumpliendo con los estándares de WCAG.",
    "<strong>Estructura en capas (<code>&lt;g&gt;</code>):</strong> Organiza los elementos del diagrama en grupos lógicos (<code>&lt;g&gt;</code>) como 'muros', 'mobiliario' o 'anotaciones'. Esto no solo hace que el código SVG sea más legible y mantenible, sino que también facilita la aplicación de transformaciones o animaciones a conjuntos de elementos.",
    "<strong>Uso de CSS para estilos:</strong> En lugar de definir colores, grosores de línea y otras propiedades de estilo directamente en los atributos de cada elemento, utiliza hojas de estilo CSS (internas o externas). Esto permite cambiar la apariencia de todo el diagrama de forma centralizada y facilita la creación de temas (ej. modo claro/oscuro).",
    "<strong>Integración progresiva con librerías:</strong> Para interacciones complejas, combina el poder del SVG con librerías especializadas como D3.js para visualización de datos, GSAP para animaciones de alto rendimiento, o interact.js para manipulación de objetos (arrastrar, soltar, redimensionar).",
  ];

  return (
    <div className="space-y-12">
      <Section>
        <h2 className="text-3xl font-bold text-foreground pb-2">SVG: El Futuro del Contenido Educativo Interactivo</h2>
        <p>
            En la era de la educación digital, la necesidad de herramientas que sean flexibles, interactivas, accesibles y eficientes es más imperativa que nunca. Las imágenes estáticas tradicionales, como JPG y PNG, aunque útiles, imponen severas limitaciones en la interactividad y la escalabilidad de los recursos educativos. Aquí es donde el formato SVG (Scalable Vector Graphics), un estándar abierto basado en XML, se erige como una tecnología transformadora para crear diagramas, mapas conceptuales, visualizaciones científicas y cualquier tipo de contenido técnico.
        </p>
        <HighlightCard>
            El SVG permite que cada componente de un gráfico sea un objeto independiente y manipulable, abriendo un universo de posibilidades para la interactividad, la animación ligera y una adaptabilidad perfecta a cualquier resolución de pantalla, desde un móvil hasta una pizarra digital interactiva.
        </HighlightCard>
        <p>
            Al aprovechar el SVG, los educadores, diseñadores instruccionales y desarrolladores de e-learning pueden construir contenidos que no solo son visualmente claros y precisos, sino también dinámicos, accesibles y perfectamente integrables en las plataformas de aprendizaje más modernas.
        </p>
      </Section>

      <Section>
        <SectionTitle>Capacidades Técnicas del SVG en Plataformas de E-learning</SectionTitle>
        
        <SubTitle icon={<BookOpen className="h-6 w-6" />}>1. Diagramas y Mapas Conceptuales Interactivos</SubTitle>
        <p>La estructura del SVG, similar al DOM de HTML, permite que cada elemento sea un nodo que puede ser seleccionado y manipulado. Esto habilita funcionalidades pedagógicas avanzadas:</p>
         <ul className="list-disc list-outside pl-5 space-y-3 text-foreground/80 mt-4">
            <li><strong>Exploración activa:</strong> Los estudiantes pueden interactuar directamente con los elementos del diagrama. Al hacer clic, pasar el cursor o seleccionar un nodo, se pueden desplegar tooltips con definiciones, mostrar información adicional en paneles laterales, o enlazar a recursos externos y lecturas complementarias.</li>
            <li><strong>Organización semántica:</strong> Utilizando etiquetas <code>&lt;g&gt;</code>, los elementos se pueden agrupar en capas lógicas (ej. "sistema circulatorio", "sistema nervioso"). Esto permite al usuario controlar la visibilidad de cada capa para enfocarse en áreas específicas, o al educador resaltar secuencialmente partes del diagrama durante una explicación.</li>
            <li><strong>Almacenamiento de metadatos:</strong> Se pueden utilizar atributos <code>data-*</code> para incrustar información relevante directamente en los elementos del SVG, como fórmulas matemáticas, referencias bibliográficas o preguntas de evaluación, que pueden ser leídas y utilizadas por el JavaScript de la plataforma de e-learning.</li>
        </ul>
        <p className="mt-4">Este ejemplo de código SVG muestra una estructura básica con capas y elementos identificables, lista para ser manipulada con CSS o JavaScript para crear una experiencia interactiva.</p>
        <CodeBlock code={svgDiagramExample} language="html" preview={diagramPreview} />

        <SubTitle icon={<Share2 className="h-6 w-6" />}>2. Animaciones Explicativas Ligeras y Eficientes</SubTitle>
         <p>Con SVG, es posible crear animaciones vectoriales fluidas controladas por CSS o JavaScript, eliminando la necesidad de vídeos pesados o GIFs de baja calidad. Esto es ideal para:</p>
        <ul className="list-disc list-outside pl-5 space-y-3 text-foreground/80 mt-4">
            <li><strong>Visualizar procesos complejos:</strong> Se pueden animar ciclos biológicos (como la fotosíntesis), reacciones químicas, algoritmos informáticos o el funcionamiento de un motor. La animación de trazados (path animation) puede guiar la vista del estudiante a través de un proceso paso a paso.</li>
            <li><strong>Microinteracciones para el feedback:</strong> Pequeñas animaciones pueden confirmar una acción del usuario, resaltar la respuesta correcta en un cuestionario o simular cambios de estado en un sistema, mejorando la experiencia de aprendizaje sin sobrecargar la interfaz.</li>
            <li><strong>Rendimiento y compatibilidad:</strong> Las animaciones SVG son renderizadas por el navegador, lo que las hace extremadamente eficientes en cuanto a rendimiento y garantiza que funcionen en cualquier dispositivo, desde ordenadores de escritorio hasta tabletas y móviles, manteniendo siempre una nitidez perfecta.</li>
        </ul>
         <p className="mt-4">El siguiente código CSS demuestra cómo una simple animación de `keyframes` puede dar vida a un elemento SVG para captar la atención del estudiante.</p>
        <CodeBlock code={cssAnimationExample} language="css" preview={animationPreview} />

        <SubTitle icon={<Accessibility className="h-6 w-6" />}>3. Visualización Escalable y Universalmente Accesible</SubTitle>
        <p>Una de las mayores fortalezas del SVG es su capacidad para garantizar que los diagramas se vean con una claridad impecable en cualquier contexto, lo que es fundamental para la accesibilidad y una experiencia de aprendizaje inclusiva:</p>
        <ul className="list-disc list-outside pl-5 space-y-3 text-foreground/80 mt-4">
            <li><strong>Diseño inherentemente adaptable:</strong> Un único archivo SVG se ajusta automáticamente al tamaño de la pantalla, eliminando la necesidad de crear múltiples versiones de una imagen para diferentes dispositivos.</li>
            <li><strong>Perfecto para alta resolución:</strong> Es ideal para su uso en pantallas de alta densidad de píxeles (Retina, 4K), proyectores de aula y pizarras interactivas, donde la claridad de los detalles es crucial.</li>
            <li><strong>Cumplimiento de estándares de accesibilidad:</strong> Al ser un formato basado en texto, se puede estructurar para ser completamente accesible. El uso de atributos ARIA y etiquetas descriptivas como <code>&lt;title&gt;</code> y <code>&lt;desc&gt;</code> permite que los estudiantes con discapacidad visual puedan navegar y comprender el contenido del diagrama a través de lectores de pantalla.</li>
        </ul>
      </Section>
      
      <Section>
        <SectionTitle>Buenas Prácticas para la Creación de SVG Educativos</SectionTitle>
        <p>Para maximizar el impacto y la eficiencia de los diagramas y animaciones SVG en un contexto educativo, es fundamental seguir un conjunto de buenas prácticas técnicas:</p>
        <PracticeList items={practices} />
      </Section>
      
      <Section>
        <SectionTitle>Conclusión: Hacia una Nueva Frontera en el Aprendizaje Visual</SectionTitle>
        <HighlightCard>
            El formato SVG no es simplemente una alternativa a las imágenes estáticas; es un pilar fundamental para la próxima generación de contenido educativo digital. Su capacidad para fusionar gráficos precisos, interactividad y animación ligera lo convierte en la herramienta ideal para un e-learning moderno, dinámico y, sobre todo, inclusivo.
        </HighlightCard>
        <p>
          Al adoptar SVG, los creadores de contenido pueden superar las limitaciones de los formatos tradicionales y construir experiencias de aprendizaje más ricas y efectivas. La capacidad de explorar, manipular y visualizar conceptos complejos de manera intuitiva potencia la comprensión y retención del conocimiento, posicionando al SVG como un aliado indispensable en la misión de hacer que la educación sea más atractiva y accesible para todos.
        </p>
      </Section>
    </div>
  );
}
