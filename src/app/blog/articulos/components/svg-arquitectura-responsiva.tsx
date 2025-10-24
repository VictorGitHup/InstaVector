import React from 'react';
import { CodeBlock } from './CodeBlock';
import { Maximize, Search, GitMerge, Accessibility } from 'lucide-react';

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
  <source srcset="diagram-complex.svg" type="image/svg+xml" media="(min-width: 1024px)" />
  <source srcset="diagram-simple.svg" type="image/svg+xml" media="(min-width: 640px)" />
  <source srcset="diagram.webp" type="image/webp" />
  <source srcset="diagram.png" type="image/png" />
  <img src="diagram.png" width="620" height="540" alt="Diagrama de flujo de datos" />
</picture>`;

const FallbackPreview = () => (
    <div className="text-center p-4 border border-dashed rounded-lg bg-background">
        <p className="font-semibold text-lg">Ejemplo de Art Direction con <code>&lt;picture&gt;</code></p>
        <p className="text-muted-foreground text-sm">El navegador elegirá la fuente más apropiada según el tamaño de la pantalla y el soporte de formato, mostrando un SVG complejo en pantallas grandes, uno simple en medianas, y un WebP o PNG como fallback.</p>
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
            En el desarrollo frontend moderno, la optimización del rendimiento y la accesibilidad universal no son opciones, son imperativos. La elección del formato de imagen es una de las decisiones técnicas con mayor impacto en la velocidad de carga de un sitio (un factor clave para el SEO y la retención de usuarios) y en la experiencia de usuario final. En este contexto, el formato Scalable Vector Graphics (SVG) se ha consolidado como una tecnología fundamental para cualquier gráfico que no sea una fotografía, especialmente en el marco de una arquitectura de imágenes verdaderamente responsiva.
        </p>
        <HighlightCard>
            El SVG no es solo un formato de imagen más; es un estándar abierto del W3C basado en XML que describe gráficos bidimensionales mediante código. Esta naturaleza programática le confiere propiedades de escalabilidad, rendimiento y accesibilidad que son inalcanzables para los formatos ráster tradicionales.
        </HighlightCard>
      </Section>

      <Section>
        <SectionTitle>SVG: La Piedra Angular de la Escalabilidad y la Optimización</SectionTitle>
        <p>
            A diferencia de formatos como JPEG, PNG o WebP, que almacenan información en una rejilla de píxeles, un SVG define la imagen mediante un conjunto de comandos matemáticos que representan líneas, formas, trazos y colores. Esta diferencia es la clave de sus superpoderes técnicos.
        </p>

        <SubTitle icon={<Maximize className="h-6 w-6" />}>1. Escalabilidad Infinita y Calidad Perfecta</SubTitle>
        <p>
            Los archivos SVG son ideales para logotipos, iconos, diagramas y cualquier elemento de interfaz de usuario. Al no depender de píxeles, pueden escalarse a cualquier tamaño, desde un diminuto favicon hasta una valla publicitaria, sin la más mínima pérdida de calidad o nitidez. En un entorno de diseño responsivo, donde los elementos deben adaptarse a una infinidad de tamaños de pantalla y densidades de píxeles (DPI), esta propiedad es esencial. Un único archivo SVG puede reemplazar a múltiples versiones de un mismo gráfico (<code>@1x</code>, <code>@2x</code>, <code>@3x</code>), simplificando drásticamente la gestión de activos.
        </p>

        <SubTitle icon={<Search className="h-6 w-6" />}>2. Optimización de Rendimiento por Naturaleza</SubTitle>
        <p>
            Al ser un formato de texto, el código SVG puede ser comprimido muy eficientemente con algoritmos como Gzip o Brotli durante su transmisión HTTP, reduciendo drásticamente el tamaño de la transferencia. Además, el código puede ser minificado y "limpiado" con herramientas como SVGO para eliminar metadatos del editor, comentarios y código redundante, logrando archivos extremadamente ligeros. En sistemas avanzados, es posible incluso generar SVG dinámicamente desde el backend o manipularlos con JavaScript para crear animaciones fluidas que consumen muchos menos recursos que un GIF o un vídeo.
        </p>

        <SubTitle icon={<GitMerge className="h-6 w-6" />}>3. Flexibilidad de Integración y Manipulación</SubTitle>
        <p>El SVG puede integrarse de múltiples maneras en un proyecto web, cada una con sus ventajas:</p>
         <ul className="list-disc list-outside pl-5 space-y-3 text-foreground/80 mt-4">
            <li><strong>Inline (en línea):</strong> Incrustar el código <code>&lt;svg&gt;</code> directamente en el HTML. Esto elimina una petición HTTP, reduciendo la latencia, y permite manipular cada parte del SVG con CSS y JavaScript (ideal para animaciones o cambios de color temáticos).</li>
            <li><strong>Como imagen (<code>&lt;img&gt;</code>):</strong> Referenciarlo externamente (<code>&lt;img src="logo.svg"&gt;</code>). Esto permite que el navegador almacene el archivo en caché, lo cual es muy eficiente si el gráfico se reutiliza en varias páginas.</li>
            <li><strong>Como objeto (<code>&lt;object&gt;</code>):</strong> Útil para SVGs complejos e interactivos que contienen sus propios scripts. Permite un buen aislamiento y ofrece un mecanismo de fallback integrado.</li>
        </ul>
        <p className="mt-2">Esta flexibilidad permite a los desarrolladores elegir la estrategia óptima para cada caso de uso, equilibrando rendimiento, interactividad y mantenibilidad.</p>
      </Section>

      <Section>
        <SectionTitle>Arquitectura de Imágenes Híbrida: Coexistencia de Formatos</SectionTitle>
        <p>
            Aunque el SVG es superior para gráficos vectoriales, no es la solución para todo. Las fotografías o imágenes con texturas y gradaciones de color complejas se representan de manera más eficiente con formatos ráster optimizados. Una arquitectura de imágenes verdaderamente moderna y responsiva debe ser híbrida, permitiendo la coexistencia inteligente de formatos para usar siempre la herramienta adecuada para cada trabajo.
        </p>
        <SubTitle>Art Direction y Fallbacks con el Elemento <code>&lt;picture&gt;</code></SubTitle>
        <p>Para garantizar una experiencia óptima y universal, se utilizan mecanismos de "art direction" y fallback. El elemento <code>&lt;picture&gt;</code> de HTML5 es el estándar de oro para esta tarea. Permite al navegador elegir la fuente de imagen más adecuada basándose en reglas como el tamaño de la pantalla, la resolución o el soporte de formato del navegador.</p>
        <p className="mt-4 font-semibold">Ejemplo de implementación robusta:</p>
        <CodeBlock code={fallbackExample} language="html" preview={<FallbackPreview />} />
        <p className='mt-4'>Este enfoque, conocido como "mejora progresiva", asegura que:</p>
        <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80 mt-4">
            <li>Los navegadores modernos y de escritorio carguen la versión SVG más detallada y rica.</li>
            <li>Los dispositivos más pequeños carguen una versión SVG simplificada para mejorar el rendimiento y la legibilidad.</li>
            <li>Los navegadores que no soportan SVG (o para imágenes fotográficas) intenten cargar formatos de nueva generación como WebP o AVIF.</li>
            <li>Como último recurso, todos los navegadores cargarán un formato universalmente compatible como PNG, garantizando que el contenido sea siempre accesible.</li>
        </ul>
      </Section>

      <Section>
        <SectionTitle>El Rol Crucial del SVG en la Accesibilidad Web (a11y)</SectionTitle>
        <p>Más allá del rendimiento, el SVG es un pilar de la inclusión digital. Su estructura basada en texto lo hace inherentemente accesible:</p>
         <ul className="list-disc list-outside pl-5 space-y-3 text-foreground/80 mt-4">
            <li><strong>Descripciones Semánticas:</strong> Permite incluir texto alternativo y descripciones dentro del propio archivo usando las etiquetas <code>&lt;title&gt;</code> y <code>&lt;desc&gt;</code>. Esto permite que las tecnologías de asistencia, como los lectores de pantalla, describan el contenido del gráfico a usuarios con discapacidad visual.</li>
            <li><strong>Contraste y Estilos Adaptables:</strong> Al poder ser estilizado con CSS, los colores de un SVG pueden adaptarse a las preferencias del usuario, como los modos de alto contraste. Las variables CSS pueden usarse para cambiar dinámicamente la paleta de colores del SVG para cumplir con los ratios de contraste WCAG.</li>
            <li><strong>Interactividad Accesible:</strong> Los elementos interactivos dentro de un SVG pueden ser controlados mediante el teclado y se les pueden asignar roles y atributos ARIA, haciendo que los gráficos complejos, como mapas o diagramas, sean navegables y comprensibles para todos.</li>
        </ul>
      </Section>

      <Section>
        <SectionTitle>Conclusión: SVG como Fundamento de la Web Sostenible e Inclusiva</SectionTitle>
        <HighlightCard>
            El formato SVG es mucho más que una simple imagen. Es una pieza esencial en la construcción de sitios web rápidos, responsivos, accesibles y sostenibles. Su escalabilidad ilimitada, su naturaleza ligera y su capacidad de manipulación programática lo convierten en el formato predilecto para la gran mayoría de los activos gráficos de una interfaz moderna.
        </HighlightCard>
        <p>
            Una arquitectura de imágenes bien diseñada, que combina inteligentemente el poder del SVG con las ventajas de los formatos ráster modernos a través de técnicas como el elemento <code>&lt;picture&gt;</code>, no solo optimiza el rendimiento y mejora el SEO, sino que también democratiza el acceso a la información visual. En un panorama digital donde la experiencia del usuario es el rey, el SVG se erige como una tecnología fundamental para construir la web del futuro: una web universal, inclusiva y visualmente impactante.
        </p>
      </Section>
    </div>
  );
}
