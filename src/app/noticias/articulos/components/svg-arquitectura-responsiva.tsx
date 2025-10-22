import React from 'react';
import { CodeBlock } from './CodeBlock';
import { Maximize, ShieldCheck, GitMerge, Search } from 'lucide-react';

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

const SubTitle = ({ icon, children }: { icon?: React.ReactNode, children: React.ReactNode }) => (
    <h3 className="text-2xl font-semibold text-primary flex items-center gap-3 pt-6 pb-2">
       {icon} {children}
    </h3>
);

const HighlightCard = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-muted/50 border-l-4 border-primary p-4 my-6 rounded-r-lg">
        <p className="font-medium text-foreground/80">{children}</p>
    </div>
);

const fallbackExample = `<picture>
  <source srcset="diagram.svg" type="image/svg+xml" />
  <source srcset="diagram.png" type="image/png" />
  <img src="diagram.gif" width="620" height="540" alt="Diagrama que muestra los canales de datos" />
</picture>`;

const FallbackPreview = () => (
    <div className="text-center p-4 border border-dashed rounded-lg bg-background">
        <p className="font-semibold text-lg">Ejemplo de Fallback</p>
        <p className="text-muted-foreground text-sm">El navegador cargaría el SVG si es compatible, si no, el PNG, y como último recurso, el GIF.</p>
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mt-2 text-primary">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
    </div>
);


export default function SvgArquitecturaResponsiva() {
  return (
    <div className="space-y-12">
      <Section>
        <p>
            La optimización de sitios web y la accesibilidad son imperativos cruciales en el desarrollo frontend moderno, donde la elección del formato de imagen impacta directamente en el rendimiento de la página y en la experiencia del usuario. En este contexto, el formato Scalable Vector Graphics (SVG) emerge como una tecnología fundamental para elementos de interfaz y gráficos que requieren adaptabilidad absoluta, especialmente en entornos donde la escalabilidad, la nitidez visual y la eficiencia en la carga son determinantes.
        </p>
      </Section>

      <Section>
        <SectionTitle>SVG: La Columna Vertebral de la Escalabilidad y la Accesibilidad</SectionTitle>
        <p>
            SVG es un formato de gráficos vectoriales basado en XML, que se distingue de los formatos ráster tradicionales (como JPEG o PNG) porque no almacena información de píxeles, sino que define la imagen mediante un conjunto de comandos matemáticos y vectores que representan líneas, formas, trazos, degradados y filtros.
        </p>
        <p>
            Esta naturaleza vectorial confiere al SVG una serie de ventajas técnicas que lo posicionan como una herramienta clave para la optimización de interfaces responsivas, la reducción del peso visual del sitio y la accesibilidad universal.
        </p>

        <SubTitle icon={<Maximize className="h-6 w-6" />}>1. Escalabilidad Ilimitada</SubTitle>
        <p>
            Los archivos SVG son ideales para iconos, diagramas, logotipos, gráficos interactivos y elementos de interfaz de usuario. Gracias a su estructura vectorial, pueden escalarse a cualquier tamaño sin pérdida de calidad ni pixelación, garantizando una experiencia visual óptima en pantallas Retina, 4K o móviles de alta densidad de píxeles (DPI). En un entorno de diseño responsivo, esta propiedad es esencial: el mismo archivo SVG puede adaptarse perfectamente a un favicon, un icono en una barra de navegación o una ilustración a pantalla completa.
        </p>

        <SubTitle icon={<Search className="h-6 w-6" />}>2. Optimización por Naturaleza</SubTitle>
        <p>
            Al ser un formato basado en texto, el contenido SVG puede ser comprimido con gzip o Brotli durante su transmisión HTTP, reduciendo drásticamente el tamaño final sin sacrificar calidad. Además, el código puede minificarse o limpiarse para eliminar metadatos innecesarios. En sistemas avanzados, es posible incluso generar SVG dinámicos desde el backend o manipularlos con JavaScript o CSS para crear animaciones fluidas y ligeras.
        </p>

        <SubTitle icon={<GitMerge className="h-6 w-6" />}>3. Integración Flexible</SubTitle>
        <p>El SVG puede integrarse en múltiples niveles del flujo de trabajo web:</p>
         <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80 mt-4">
            <li><strong>Inline (en línea)</strong>, dentro del HTML, utilizando la etiqueta <code>&lt;svg&gt;</code>.</li>
            <li>Referenciado externamente, mediante <code>&lt;img&gt;</code>, <code>background-image</code> en CSS o <code>&lt;object&gt;</code>.</li>
            <li>Incrustado dinámicamente, usando <code>&lt;iframe&gt;</code> o <code>&lt;embed&gt;</code>.</li>
        </ul>
        <p className="mt-2">Esta flexibilidad permite adaptar la estrategia de implementación según la complejidad del proyecto y los requerimientos de accesibilidad o SEO. Además, al estar basado en texto, el contenido del SVG puede indexarse por los motores de búsqueda y ser leído por tecnologías asistivas, lo que refuerza su rol en la accesibilidad digital.</p>

      </Section>

      <Section>
        <SectionTitle>Estrategias de Optimización Mediante la Coexistencia de Formatos</SectionTitle>
        <p>
            Aunque SVG es la opción óptima para gráficos vectoriales, no es la solución universal para todos los tipos de imágenes. Las fotografías o imágenes con texturas complejas siguen necesitando formatos ráster más adecuados. En este contexto, una arquitectura de imágenes verdaderamente optimizada debe permitir la coexistencia de formatos, combinando la precisión de SVG con la eficiencia de formatos modernos como WebP, AVIF o los tradicionales PNG y JPEG.
        </p>
        <SubTitle>El Rol del Fallback en la Compatibilidad</SubTitle>
        <p>Para garantizar que los usuarios de todos los navegadores y dispositivos visualicen correctamente el contenido, se implementan mecanismos de fallback, donde el navegador selecciona automáticamente la mejor versión del recurso disponible. El elemento <code>&lt;picture&gt;</code> es el estándar actual para esta estrategia, permitiendo especificar múltiples fuentes de imagen y condiciones de uso.</p>
        <p className="mt-4 font-semibold">Ejemplo Técnico de Fallback:</p>
        <CodeBlock code={fallbackExample} language="html" preview={<FallbackPreview />} />
        <p className='mt-4'>Este enfoque garantiza que:</p>
        <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80 mt-4">
            <li>Los navegadores modernos rendericen el SVG escalable y optimizado.</li>
            <li>Los navegadores antiguos o entornos restringidos utilicen automáticamente la versión ráster disponible (PNG o GIF).</li>
        </ul>
        <p>De esta manera, se logra una compatibilidad progresiva sin sacrificar la eficiencia visual.</p>
      </Section>
      
      <Section>
        <SectionTitle>El Formato Complementario Clave para SVG</SectionTitle>
        <p>En un entorno de diseño adaptativo, el formato ráster que mejor complementa al SVG es el PNG (Portable Network Graphics). Su compresión sin pérdida (lossless), su soporte para transparencia (canal alfa) y su fidelidad cromática lo convierten en la alternativa ideal cuando un SVG no puede renderizarse correctamente o cuando se requiere un fallback visual inmediato.</p>
        <SubTitle>Justificación Técnica de la Sinergia SVG/PNG</SubTitle>
         <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80 mt-4">
            <li><strong>Tipología de Gráficos:</strong> SVG domina en representaciones vectoriales puras (diagramas, íconos, gráficos animados). Cuando estos elementos contienen detalles rasterizados o necesitan una alternativa visual estática, PNG es la opción más fiel y estable.</li>
            <li><strong>Calidad y Transparencia:</strong> PNG reproduce con exactitud los bordes y colores definidos en el SVG, incluyendo transparencias. Esto lo hace idóneo para entornos UI/UX donde la consistencia visual es esencial, como botones, logotipos o pictogramas interactivos.</li>
            <li><strong>Compatibilidad Histórica y Soporte Universal:</strong> Aunque WebP y AVIF ofrecen mejor compresión, su soporte más reciente y limitado en ciertos entornos corporativos o navegadores antiguos hace que PNG siga siendo el fallback más confiable para asegurar una accesibilidad universal. En cambio, WebP es una opción excelente como formato intermedio en arquitecturas que priorizan el rendimiento en navegadores modernos.</li>
        </ul>
      </Section>

      <Section>
        <SectionTitle>SVG en el Marco de la Accesibilidad Web</SectionTitle>
        <p>Más allá de la optimización visual, SVG tiene un papel clave en la inclusión digital. El formato permite:</p>
         <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80 mt-4">
            <li>Incluir descripciones accesibles mediante etiquetas <code>&lt;title&gt;</code> y <code>&lt;desc&gt;</code>, lo que facilita la lectura por tecnologías asistivas.</li>
            <li>Controlar contraste, color y escala con CSS variables, lo cual favorece la adaptación para usuarios con deficiencias visuales.</li>
            <li>Interactividad semántica, integrando roles y atributos ARIA para gráficos interactivos, diagramas informativos o dashboards dinámicos.</li>
        </ul>
        <p>Estas características consolidan el SVG como una herramienta que no solo mejora la velocidad y estética, sino que también amplía el alcance de los contenidos web a todas las audiencias.</p>
      </Section>

      <Section>
        <SectionTitle>Conclusión</SectionTitle>
        <HighlightCard>
            El formato SVG representa una pieza esencial en la arquitectura moderna de imágenes responsivas, fusionando eficiencia, accesibilidad y flexibilidad técnica. Su escalabilidad ilimitada y su naturaleza ligera lo posicionan como el formato predilecto para interfaces adaptables y visualmente coherentes en cualquier dispositivo.
        </HighlightCard>
        <p>
            Sin embargo, su uso óptimo requiere una estrategia de coexistencia inteligente con formatos ráster. En particular, la combinación SVG/PNG ofrece un equilibrio perfecto entre compatibilidad histórica, fidelidad visual y rendimiento. Implementar mecanismos como <code>&lt;picture&gt;</code> permite garantizar una experiencia consistente para todos los usuarios, independientemente del navegador o dispositivo utilizado.
        </p>
        <p>
            En un panorama digital donde el rendimiento web y la accesibilidad son factores determinantes, el SVG no solo optimiza la carga y la experiencia visual, sino que también democratiza el acceso a la información visual, alineándose con los principios de la web universal, inclusiva y sostenible.
        </p>
      </Section>
    </div>
  );
}
