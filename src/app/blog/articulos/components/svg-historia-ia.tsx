
import React from 'react';
import { Clock, Code, Cpu, Puzzle, Bot, Globe } from 'lucide-react';

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

const TimelineItem = ({ year, children }: { year: string, children: React.ReactNode }) => (
    <li className="flex gap-4">
        <div className="flex flex-col items-center">
            <span className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">{year}</span>
            <div className="w-px h-full bg-border"></div>
        </div>
        <div className="pb-8">{children}</div>
    </li>
);

export default function SvgHistoriaIa() {
  return (
    <div className="space-y-12">
      <Section>
        <p>
            El formato SVG (Scalable Vector Graphics) representa uno de los avances más importantes en la visualización de gráficos en la web moderna. A diferencia de las imágenes rasterizadas —como JPEG, PNG o WebP— que se basan en píxeles, los SVG utilizan vectores matemáticos definidos por coordenadas y curvas Bézier para representar formas, líneas, colores y tipografía.
        </p>
        <HighlightCard>
            Esto significa que un SVG no almacena la imagen como una cuadrícula de píxeles, sino como instrucciones de dibujo en código XML, lo que le otorga propiedades como escalabilidad infinita, capacidad de animación, accesibilidad semántica y bajo peso de archivo.
        </HighlightCard>
        <p>
            Su importancia radica en que puede ser interpretado directamente por el navegador sin necesidad de plugins, integrarse con HTML5 y CSS3, y manipularse dinámicamente mediante JavaScript o frameworks modernos como React, Next.js, o D3.js.
        </p>
      </Section>

      <Section>
        <SectionTitle>Origen y evolución del formato SVG</SectionTitle>
        <p>
            El desarrollo del formato SVG se remonta a finales de los años 90, en un contexto donde el diseño web dependía de tecnologías cerradas y propietarias como Adobe Flash (SWF) o VML (Vector Markup Language). En 1998, el W3C (World Wide Web Consortium) inició un esfuerzo por estandarizar un formato vectorial abierto que pudiera integrarse nativamente con la estructura del Document Object Model (DOM) de la web.
        </p>
        
        <SubTitle icon={<Clock className="h-6 w-6" />}>Línea de tiempo técnica del SVG</SubTitle>
        <ul className="mt-6">
            <TimelineItem year="1998">El W3C crea el grupo de trabajo para desarrollar un formato vectorial basado en XML.</TimelineItem>
            <TimelineItem year="2001">Se publica la recomendación oficial del estándar SVG 1.0, que define la sintaxis XML para representar gráficos bidimensionales escalables.</TimelineItem>
            <TimelineItem year="2003">Se lanza SVG 1.1, introduciendo modularidad y soporte extendido para tipografía y texto internacionalizado.</TimelineItem>
            <TimelineItem year="2008">Aparecen las versiones SVG Tiny 1.2 y SVG Basic, diseñadas para dispositivos móviles y sistemas embebidos.</TimelineItem>
            <TimelineItem year="2011">Con la llegada de HTML5, el SVG se integra plenamente en el DOM, permitiendo interactividad nativa mediante CSS y JavaScript.</TimelineItem>
            <li className="flex gap-4">
                <div className="flex flex-col items-center">
                    <span className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2018</span>
                </div>
                <div className="pb-8">La especificación SVG 2.0, aún en proceso de adopción, mejora la compatibilidad con CSS3 y agrega soporte para gradientes complejos, filtros avanzados, clip-paths y eventos mejorados.</div>
            </li>
        </ul>

        <SubTitle icon={<Code className="h-6 w-6" />}>Características técnicas destacadas</SubTitle>
         <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80 mt-4">
            <li>Basado en XML (Extensible Markup Language).</li>
            <li>Estructura jerárquica compatible con el DOM.</li>
            <li>Soporte de animaciones declarativas (SMIL) y control por JavaScript.</li>
            <li>Integración nativa con CSS3, permitiendo aplicar clases, transiciones y efectos visuales.</li>
            <li>Capacidad de incrustarse directamente dentro de documentos HTML (<code>&lt;svg&gt;...&lt;/svg&gt;</code>) o referenciarse como archivo externo (<code>&lt;img src="..."&gt;</code>).</li>
        </ul>
        <p className="mt-4">
            En su evolución, SVG se ha convertido en un estándar abierto y extensible, adoptado por la mayoría de los navegadores modernos (Chrome, Firefox, Edge, Safari, Opera), así como por editores vectoriales y motores de renderizado gráfico.
        </p>
      </Section>

      <Section>
        <SectionTitle>Ventajas del formato SVG</SectionTitle>
        <p>El formato SVG no solo es una herramienta visual, sino también un lenguaje gráfico declarativo. Esto lo convierte en un recurso sumamente flexible tanto para diseñadores como para desarrolladores. A continuación, se detallan sus principales ventajas desde una perspectiva técnica:</p>
        
        <ol className="list-decimal list-outside pl-5 space-y-6 mt-6 text-foreground/80">
            <li><strong>Escalabilidad infinita:</strong> El SVG utiliza coordenadas vectoriales, lo que permite escalar imágenes a cualquier resolución sin pérdida de nitidez o distorsión. Esto es fundamental para entornos responsive o de alta densidad de píxeles (Retina Displays), donde los formatos raster pierden calidad.</li>
            <li><strong>Peso optimizado y compresión:</strong> Los SVG pueden comprimirse eficientemente mediante GZIP o Brotli, reduciendo drásticamente su tamaño en comparación con formatos bitmap. Además, permiten optimización semántica mediante herramientas como SVGO, SVGOMG o NanoSVG.</li>
            <li><strong>Interactividad y animaciones:</strong> El SVG puede ser manipulado con JavaScript y APIs DOM, permitiendo agregar animaciones, efectos hover, y eventos (onClick, onMouseOver, etc.). También soporta animaciones declarativas (SMIL) y transiciones controladas con CSS o GSAP (GreenSock Animation Platform).</li>
            <li><strong>Accesibilidad y SEO:</strong> Al ser un formato basado en texto, los SVG pueden contener atributos <code>title</code>, <code>desc</code> y <code>aria-label</code>, haciéndolos accesibles para lectores de pantalla y robots de indexación, lo que favorece la optimización SEO.</li>
            <li><strong>Compatibilidad multiplataforma:</strong> Pueden ser renderizados en navegadores, aplicaciones móviles (mediante React Native SVG), entornos de escritorio, o incluso compilados en sistemas embebidos de baja memoria.</li>
        </ol>
      </Section>

      <Section>
        <SectionTitle>Librerías y herramientas para la conversión raster → vector (SVG)</SectionTitle>
        <p>Transformar imágenes rasterizadas (basadas en píxeles) a vectores escalables es una operación que combina procesamiento de bordes, segmentación de colores y ajuste de curvas Bézier. Este proceso, conocido como vectorización, puede ejecutarse mediante librerías locales o servicios en la nube.</p>
        <SubTitle icon={<Cpu className="h-6 w-6" />}>Principales librerías técnicas</SubTitle>
        <ul className="list-disc list-outside pl-5 space-y-4 text-foreground/80 mt-4">
            <li><strong>Potrace:</strong> Escrito en C, detecta contornos binarios y los convierte en curvas suaves. Es la base de herramientas como Inkscape y Autotrace.</li>
            <li><strong>Imagetracer.js:</strong> Basada en JavaScript puro, permite vectorización directamente en el navegador, ideal para proyectos web sin backend.</li>
            <li><strong>VTracer (Rust):</strong> Implementa algoritmos modernos de segmentación de color y ajuste de contornos, con un rendimiento altamente concurrente.</li>
            <li><strong>Autotrace:</strong> Software libre multipropósito con opciones de suavizado y cuantización de color, integrable en pipelines de imagen.</li>
            <li><strong>Vectorizer.AI / InstaVector / Vector Magic:</strong> Herramientas SaaS que utilizan modelos de visión computacional (CNNs) para reconstruir líneas y bordes con un nivel de detalle superior a los métodos clásicos.</li>
        </ul>
      </Section>

      <Section>
        <SectionTitle>SVG y la inteligencia artificial: una alianza creativa</SectionTitle>
        <p>La convergencia entre el formato SVG y la inteligencia artificial (IA) está redefiniendo la forma en que se crean, interpretan y optimizan los gráficos vectoriales. Gracias al aprendizaje profundo (Deep Learning) y al uso de modelos de visión por computadora (Computer Vision), las herramientas de IA pueden analizar una imagen rasterizada y reconstruir sus componentes vectoriales con una precisión sin precedentes.</p>
        <SubTitle icon={<Bot className="h-6 w-6" />}>Aplicaciones principales de la IA en SVG</SubTitle>
        <ul className="list-disc list-outside pl-5 space-y-4 text-foreground/80 mt-4">
            <li><strong>Vectorización inteligente:</strong> Modelos entrenados con redes convolucionales (CNN) detectan bordes, texturas y regiones de color, generando vectores limpios y bien estructurados.</li>
            <li><strong>Compresión semántica:</strong> La IA puede optimizar el código SVG eliminando nodos redundantes o combinando trazos similares, manteniendo la fidelidad visual pero reduciendo el peso final.</li>
            <li><strong>Diseño generativo:</strong> Herramientas como DALL·E, Firefly o Runway permiten generar gráficos vectoriales a partir de descripciones textuales (text-to-vector), produciendo resultados en formato SVG listos para usar.</li>
            <li><strong>Análisis y detección automatizada:</strong> Los SVG generados pueden incluir metadatos semánticos interpretables por algoritmos, permitiendo clasificar, agrupar o modificar gráficos de forma dinámica.</li>
        </ul>
      </Section>
      
      <Section>
        <SectionTitle>Conclusión</SectionTitle>
        <HighlightCard>
            El Scalable Vector Graphics (SVG) ha evolucionado desde su definición inicial en el año 2001 hasta convertirse en una piedra angular del diseño web moderno, la visualización de datos y las interfaces interactivas.
        </HighlightCard>
        <p>
            Hoy, impulsado por la inteligencia artificial y la automatización, el SVG está alcanzando un nuevo nivel de integración entre diseño, semántica y computación visual, donde los gráficos ya no son simples ilustraciones, sino entidades digitales inteligentes, capaces de adaptarse, optimizarse y comunicarse con los sistemas que los procesan.
        </p>
        <p>
            La próxima generación de herramientas gráficas no solo convertirá imágenes en vectores, sino que también comprenderá su contenido. Y en ese punto, el SVG no será solo un formato de archivo, sino un lenguaje visual universal para la web inteligente.
        </p>
      </Section>
    </div>
  );
}
