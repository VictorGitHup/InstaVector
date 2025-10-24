import React from 'react';
import { CodeBlock } from './CodeBlock';
import { Layers, MousePointerClick, Scaling, Share2 } from 'lucide-react';

const svgExample = `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" role="graphics-document" aria-labelledby="planoTitle">
  <title id="planoTitle">Plano de una oficina</title>
  <!-- Capa de Muros y Estructura -->
  <g id="capa-muros" stroke="black" stroke-width="2" fill="none">
    <rect x="10" y="10" width="180" height="130" />
    <line x1="80" y1="10" x2="80" y2="90" />
  </g>
  
  <!-- Capa de Mobiliario con metadatos -->
  <g id="capa-mobiliario" fill="#a0522d" class="interactive-object">
    <rect id="mesa-01" x="90" y="20" width="40" height="30" data-material="roble" data-id="M-01" />
    <title>Mesa de Roble (ID: M-01)</title>
  </g>
  
  <!-- Capa de Anotaciones -->
  <g id="capa-anotaciones" font-size="10" fill="blue">
     <text x="15" y="25">Zona de Trabajo A</text>
  </g>
</svg>
`;

const planoPreview = (
    <>
      <style>{`
        .interactive-object:hover {
            cursor: pointer;
            opacity: 0.7;
            stroke: #ff0000;
            stroke-width: 2px;
        }
      `}</style>
      <svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" role="graphics-document" aria-labelledby="planoTitle">
        <title id="planoTitle">Plano de una oficina</title>
        {/* Capa de Muros y Estructura */}
        <g id="capa-muros" stroke="hsl(var(--foreground))" strokeWidth="1.5" fill="none">
          <rect x="10" y="10" width="180" height="130" />
          <line x1="80" y1="10" x2="80" y2="90" />
        </g>
        
        {/* Capa de Mobiliario con metadatos */}
        <g id="capa-mobiliario" fill="hsl(var(--primary))" className="interactive-object">
          <rect id="mesa-01" x="90" y="20" width="40" height="30" data-material="roble" data-id="M-01" />
          <title>Mesa de Roble (ID: M-01)</title>
        </g>
        
        {/* Capa de Anotaciones */}
        <g id="capa-anotaciones" fontSize="10" fill="hsl(var(--muted-foreground))">
           <text x="15" y="25">Zona de Trabajo A</text>
        </g>
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

export default function PlanosArquitectonicosSvg() {
    const practices = [
        "<strong>Mantener la precisión matemática:</strong> Al convertir desde CAD, asegúrate de que el proceso de exportación no aplique una simplificación excesiva que altere dimensiones críticas o ángulos. La precisión es la principal virtud de un plano técnico.",
        "<strong>Simplificar geometrías sin sacrificar detalle:</strong> Utiliza herramientas de optimización para reducir nodos y paths redundantes, especialmente en elementos decorativos. Sin embargo, preserva la complejidad en detalles técnicos importantes. El objetivo es equilibrar el rendimiento con la exactitud.",
        "<strong>Estructura semántica con capas (<code>&lt;g&gt;</code>):</strong> Organiza el SVG en grupos lógicos (<code>&lt;g&gt;</code>) con IDs descriptivos como <code>#capa-electrica</code>, <code>#capa-fontaneria</code> o <code>#capa-mobiliario</code>. Esto es fundamental para permitir manipulaciones dinámicas, como alternar la visibilidad de las capas.",
        "<strong>Uso de metadatos (<code>data-*</code>):</strong> Incrusta información técnica relevante directamente en los elementos del plano usando atributos <code>data-*</code>. Por ejemplo, un elemento de mobiliario podría tener <code>data-material='roble'</code> y <code>data-proveedor='empresa-x'</code>. Estos datos pueden ser leídos y utilizados por JavaScript.",
        "<strong>Optimización para la web:</strong> Antes de publicar, pasa siempre el archivo SVG por herramientas como <a href='https://jakearchibald.github.io/svgomg/' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>SVGOMG</a> para eliminar código innecesario, reducir el tamaño del archivo y mejorar los tiempos de carga.",
        "<strong>Conversión de texto a trazados:</strong> Para anotaciones y leyendas, convierte el texto en trazados (paths) para evitar problemas de compatibilidad de fuentes entre diferentes sistemas y asegurar que la tipografía se renderice de manera consistente en todas las plataformas.",
        "<strong>Asegurar la accesibilidad:</strong> Usa <code>&lt;title&gt;</code> y <code>&lt;desc&gt;</code> para describir el plano y sus componentes. Implementa roles ARIA para que los usuarios con tecnologías de asistencia puedan navegar e interpretar la información del plano de manera efectiva."
    ];

  return (
    <div className="space-y-12">
      <Section>
        <h2 className="text-3xl font-bold text-foreground pb-2">SVG en Arquitectura: La Evolución de los Planos Técnicos a Documentos Inteligentes</h2>
        <p>
            En la arquitectura, la ingeniería y la construcción (AEC), la precisión, la claridad y la escalabilidad son los pilares de cualquier proyecto exitoso. Tradicionalmente, los planos generados en software CAD (como AutoCAD, Revit o ArchiCAD) se distribuían como imágenes rasterizadas (PNG, JPG, TIFF) o PDFs estáticos. Si bien estos formatos son útiles para la visualización, carecen de interactividad y pierden calidad drásticamente al escalar, limitando su utilidad en un entorno digital y colaborativo.
        </p>
        <HighlightCard>
            El formato SVG (Scalable Vector Graphics) está revolucionando este paradigma, transformando los planos estáticos en recursos interactivos, escalables y ricos en datos. Un plano en SVG no es solo un dibujo, es un "documento inteligente" que puede integrarse en plataformas web, aplicaciones móviles o dashboards de gestión de proyectos (BIM), ofreciendo un flujo de trabajo más dinámico, preciso y colaborativo.
        </HighlightCard>
      </Section>

      <Section>
        <SectionTitle>Capacidades Técnicas del SVG para Planos Arquitectónicos</SectionTitle>
        
        <SubTitle icon={<MousePointerClick className="h-6 w-6" />}>1. Visualización Web Interactiva y Rica en Datos</SubTitle>
        <p>Al incrustar un plano SVG en una página web o aplicación, se desbloquean funcionalidades imposibles con formatos estáticos:</p>
        <ul className="list-disc list-outside pl-5 space-y-3 text-foreground/80 mt-4">
            <li><strong>Zoom y Pan sin Pérdida de Calidad:</strong> La principal ventaja del SVG es su escalabilidad infinita. Los usuarios pueden inspeccionar los detalles más minuciosos de un plano complejo —como conexiones eléctricas o detalles estructurales— sin experimentar pixelación ni pérdida de nitidez.</li>
            <li><strong>Capas Conmutables:</strong> La estructura de grupos (<code>&lt;g&gt;</code>) del SVG permite organizar el plano en capas lógicas (eléctrica, fontanería, HVAC, mobiliario). Con JavaScript, se puede dar al usuario la capacidad de activar y desactivar estas capas, facilitando la revisión por especialidad y evitando la sobrecarga de información.</li>
            <li><strong>Tooltips y Metadatos Contextuales:</strong> Cada elemento del SVG puede contener atributos de datos (<code>data-*</code>) que almacenan información técnica. Al pasar el cursor o hacer clic en un elemento, una aplicación puede mostrar sus propiedades: dimensiones, materiales, número de serie del proveedor, estado de la instalación, etc.</li>
        </ul>
        <p className='mt-4'>Este ejemplo de código SVG muestra cómo un plano puede estructurarse con capas y metadatos, haciendo que cada objeto sea potencialmente interactivo.</p>
        <CodeBlock code={svgExample} language='html' preview={planoPreview} />


        <SubTitle icon={<Scaling className="h-6 w-6" />}>2. Escalabilidad y Precisión Matemática Absoluta</SubTitle>
        <p>Un SVG mantiene una fidelidad del 100% de las líneas, medidas y trazados, independientemente de la resolución de la pantalla. Esto es crítico en escenarios como:</p>
        <ul className="list-disc list-outside pl-5 space-y-3 text-foreground/80 mt-4">
            <li><strong>Proyecciones y Presentaciones:</strong> Al proyectar un plano en pantallas de gran formato para reuniones de equipo o presentaciones a clientes, la nitidez se mantiene intacta.</li>
            <li><strong>Impresión a Gran Escala:</strong> Para la impresión de posters arquitectónicos, vallas o planos de obra, el SVG garantiza que cada línea sea tan nítida como en el archivo original.</li>
            <li><strong>Dispositivos de Alta Densidad de Píxeles:</strong> En tabletas de alta resolución (iPads con pantalla Retina) o monitores 4K/8K, los planos se visualizan sin distorsión, permitiendo una inspección detallada en campo.</li>
        </ul>

        <SubTitle icon={<Share2 className="h-6 w-6" />}>3. Integración en Dashboards y Plataformas de Colaboración</SubTitle>
        <p>Los planos en formato SVG pueden convertirse en el núcleo de herramientas de gestión de proyectos y colaboración en tiempo real:</p>
        <ul className="list-disc list-outside pl-5 space-y-3 text-foreground/80 mt-4">
            <li><strong>Indicadores de Estado Dinámicos:</strong> Se puede colorear áreas del plano en tiempo real para reflejar el avance de la construcción, el estado de las inspecciones, o alertas de mantenimiento, todo ello controlado por una base de datos backend.</li>
            <li><strong>Animaciones para Análisis Técnico:</strong> Es posible crear animaciones ligeras con CSS o JavaScript para visualizar rutas de evacuación, simular flujos de aire (HVAC), o demostrar secuencias de construcción, haciendo la información más fácil de comprender.</li>
            <li><strong>Facilidad de Colaboración Remota:</strong> Al ser un formato abierto basado en texto (XML), los archivos SVG son fáciles de compartir, versionar (con sistemas como Git) y visualizar en cualquier navegador web, eliminando las barreras de software propietario.</li>
        </ul>
      </Section>
      
      <Section>
        <SectionTitle>Buenas Prácticas para la Conversión y Uso de Planos SVG</SectionTitle>
        <p>Para maximizar la eficiencia, la claridad técnica y el rendimiento de los planos arquitectónicos en formato SVG, es crucial seguir un conjunto de buenas prácticas durante la conversión y la implementación:</p>
        <PracticeList items={practices} />
      </Section>
      
      <Section>
        <SectionTitle>Conclusión: Planos Inteligentes para una Arquitectura Inteligente</SectionTitle>
        <HighlightCard>
            El formato SVG está redefiniendo lo que puede ser un plano técnico. Al pasar de ser un simple dibujo estático a un documento interactivo y rico en datos, el SVG no solo mejora la calidad de la visualización, sino que también optimiza drásticamente los flujos de trabajo, facilita la colaboración y abre nuevas posibilidades para el análisis y la gestión de proyectos en tiempo real.
        </HighlightCard>
        <p>
            Adoptar el SVG es dar un paso hacia una arquitectura más inteligente, donde los planos son tan dinámicos y adaptables como los proyectos que representan. En la era del BIM (Building Information Modeling) y la construcción digital, el SVG se posiciona como una tecnología clave para conectar el diseño con la ejecución de manera más eficiente y precisa que nunca.
        </p>
      </Section>
    </div>
  );
}
