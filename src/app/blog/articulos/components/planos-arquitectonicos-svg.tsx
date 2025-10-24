import React from 'react';
import { CodeBlock } from './CodeBlock';

const svgExample = `<svg width="150" height="100" viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Capa de Muros -->
  <g id="capa-muros" stroke="black" stroke-width="2" fill="none">
    <rect x="10" y="10" width="130" height="80" />
    <line x1="60" y1="10" x2="60" y2="50" />
    <line x1="100" y1="10" x2="100" y2="50" />
  </g>
  
  <!-- Capa de Mobiliario (ej. Mesa) -->
  <g id="capa-mobiliario" fill="#a0522d">
    <rect id="mesa-01" x="70" y="20" width="20" height="20" data-material="roble" />
    <title>Mesa de Roble</title>
  </g>
</svg>
`;

const planoPreview = (
    <svg width="150" height="100" viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
      {/* Capa de Muros */}
      <g id="capa-muros" stroke="hsl(var(--foreground))" strokeWidth="2" fill="none">
        <rect x="10" y="10" width="130" height="80" />
        <line x1="60" y1="10" x2="60" y2="50" />
        <line x1="100" y1="10" x2="100" y2="50" />
      </g>
      
      {/* Capa de Mobiliario (ej. Mesa) */}
      <g id="capa-mobiliario" fill="hsl(var(--primary))">
        <rect id="mesa-01" x="70" y="20" width="20" height="20" data-material="roble" />
        <title>Mesa de Roble</title>
      </g>
    </svg>
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

const HighlightCard = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-muted/50 border-l-4 border-primary p-4 my-6 rounded-r-lg">
        <p className="font-medium text-foreground/80">{children}</p>
    </div>
);

const PracticeList = ({ items }: { items: string[] }) => (
  <ul className="space-y-4 list-disc list-outside pl-5 text-foreground/80">
    {items.map((item, index) => {
        const parts = item.split(/(\<strong\>.*?\<\/strong\>)/g);
        return (
          <li key={index}>
            {parts.map((part, i) =>
              part.startsWith('<strong>') ? (
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

export default function PlanosArquitectonicosSvg() {
    const practices = [
        "<strong>Mantener la precisión de los trazos:</strong> Evitar aproximaciones excesivas que alteren dimensiones críticas.",
        "<strong>Simplificar geometrías complejas:</strong> Reducir nodos y paths redundantes para optimizar la velocidad de renderizado sin sacrificar exactitud.",
        "<strong>Optimización de archivos:</strong> Usar herramientas como SVGO, SVGOMG o scripts automatizados para reducir el tamaño del archivo y mejorar tiempos de carga.",
        "<strong>Gestión de capas y semántica:</strong> Asignar IDs y clases claros a cada capa para permitir manipulaciones dinámicas mediante JS o frameworks como D3.js.",
        "<strong>Conversión de texto a paths cuando sea necesario:</strong> Para evitar problemas de compatibilidad de fuentes y garantizar consistencia en todas las plataformas.",
    ];

  return (
    <div className="space-y-12">
      <Section>
        <h2 className="text-3xl font-bold text-foreground pb-2">SVG: Precisión y Escalabilidad para la Arquitectura Moderna</h2>
        <p>
            En arquitectura e ingeniería, la exactitud, la claridad y la escalabilidad son fundamentales en cada proyecto. Tradicionalmente, los planos generados en programas CAD (AutoCAD, Revit, ArchiCAD, Vectorworks) se exportan como imágenes rasterizadas (PNG, JPG, TIFF) para visualización rápida o intercambio, lo que limita la interactividad y la precisión al escalar.
        </p>
        <p>
            El uso del formato SVG (Scalable Vector Graphics) transforma estos planos en recursos interactivos, escalables y altamente precisos, capaces de integrarse en web, aplicaciones móviles o dashboards de gestión de proyectos, ofreciendo un flujo de trabajo más dinámico y colaborativo.
        </p>
      </Section>

      <Section>
        <SectionTitle>Aplicaciones Técnicas del SVG en Planos Arquitectónicos</SectionTitle>
        
        <SubTitle>1. Visualización Web Interactiva</SubTitle>
        <p>Los planos SVG pueden incrustarse en páginas web o aplicaciones de arquitectura, permitiendo funcionalidades avanzadas como:</p>
        <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80 mt-4">
            <li><strong>Zoom y Pan dinámico:</strong> Inspección de detalles minuciosos sin pérdida de nitidez, crucial para planos de gran complejidad.</li>
            <li><strong>Capas activables/desactivables:</strong> Separar información de diferentes disciplinas (eléctrica, fontanería, HVAC, mobiliario), facilitando la revisión por especialidad y el análisis técnico.</li>
            <li><strong>Tooltip y metadatos:</strong> Mostrar información contextual al interactuar con elementos específicos (dimensiones, materiales, referencias), aprovechando que SVG soporta atributos semánticos y accesibles.</li>
        </ul>
        <p className='mt-4'>Ejemplo de estructura SVG con capas y metadatos:</p>
        <CodeBlock code={svgExample} language='html' preview={planoPreview} />


        <SubTitle>2. Escalabilidad sin pérdida de precisión</SubTitle>
        <p>El SVG mantiene la fidelidad absoluta de líneas, medidas y trazados, independientemente de la resolución de visualización. Esto es crítico cuando:</p>
        <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80 mt-4">
            <li>Se proyecta un plano en pantallas de gran formato o se imprime en posters arquitectónicos.</li>
            <li>Se visualiza en dispositivos con diferentes densidades de píxeles (DPI), como tablets de alta resolución o monitores Retina.</li>
            <li>Se requiere inspección detallada de elementos técnicos sin distorsión de proporciones ni pérdida de definición.</li>
        </ul>

        <SubTitle>3. Integración en Dashboards y Presentaciones Técnicas</SubTitle>
        <p>Los planos en SVG pueden integrarse en herramientas de gestión de proyectos (BIM dashboards), presentaciones interactivas o aplicaciones educativas:</p>
        <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80 mt-4">
            <li><strong>Indicadores dinámicos:</strong> Colorear áreas según avances de construcción, estado de inspecciones o alertas técnicas.</li>
            <li><strong>Animaciones:</strong> Destacar rutas de evacuación, flujos de aire o recorridos eléctricos mediante animaciones SVG ligeras controladas con CSS o JavaScript.</li>
            <li><strong>Exportación y colaboración:</strong> Facilita la colaboración remota, ya que SVG es un formato abierto y multiplataforma, compatible con navegadores y software de edición vectorial.</li>
        </ul>
      </Section>
      
      <Section>
        <SectionTitle>Buenas Prácticas para Planos SVG</SectionTitle>
        <p>Para maximizar la eficiencia y la claridad técnica de los planos arquitectónicos en SVG:</p>
        <PracticeList items={practices} />
      </Section>
      
      <Section>
        <SectionTitle>Conclusión</SectionTitle>
        <HighlightCard>
            El formato SVG revoluciona la manera en que los profesionales de arquitectura e ingeniería visualizan, comparten y presentan planos. Al combinar escalabilidad infinita, interactividad avanzada y precisión vectorial, los planos SVG no solo mejoran la calidad visual, sino que también facilitan la colaboración, optimizan el flujo de trabajo y abren la puerta a nuevas formas de análisis técnico en entornos digitales.
        </HighlightCard>
        <p>
            Adoptar SVG es un paso hacia planos inteligentes, escalables y dinámicos, que se adaptan a los retos de la arquitectura y la ingeniería modernas.
        </p>
      </Section>
    </div>
  );
}
