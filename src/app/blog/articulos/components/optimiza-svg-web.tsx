import React from 'react';
import { CodeBlock } from './CodeBlock';
import { Settings, Maximize, GitMerge, ShieldCheck, Zap } from 'lucide-react';

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

const codeInline = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="..."/>
</svg>`;

const codeImg = `<img src="/path/to/icon.svg" alt="Descripción del icono" width="24" height="24" />`;

const codeObject = `<object type="image/svg+xml" data="/path/to/interactive.svg" aria-label="Diagrama interactivo">
  <!-- Contenido de fallback para navegadores antiguos -->
  <img src="/path/to/fallback.png" alt="Diagrama interactivo" />
</object>`;

const codeA11y = `<svg role="img" aria-labelledby="titleId descId">
  <title id="titleId">Logo de la Empresa X</title>
  <desc id="descId">Un círculo azul con una letra 'X' blanca en el centro, representando la marca X.</desc>
  <!-- ... resto de los paths del logo ... -->
</svg>`;

export default function OptimizaSvgWeb() {
  return (
    <div className="space-y-12">
      <Section>
        <h2 className="text-3xl font-bold text-foreground pb-2">El Impacto Oculto del SVG en el Rendimiento y la Experiencia de Usuario</h2>
        <p>
            El formato SVG (Scalable Vector Graphics) se ha establecido como el estándar de oro para los gráficos web, gracias a su escalabilidad infinita y su claridad visual. Sin embargo, existe una creencia errónea de que cualquier archivo SVG es, por defecto, performante. La realidad es que los SVG exportados directamente desde herramientas de diseño como Adobe Illustrator, Figma o Sketch suelen estar repletos de código innecesario: metadatos del editor, grupos vacíos, comentarios XML, nodos de trazado redundantes y definiciones de estilo duplicadas.
        </p>
        <HighlightCard>
            Este "código basura" puede inflar el tamaño del archivo, aumentar el tiempo de procesamiento del navegador y complicar la manipulación del gráfico. Un SVG sin optimizar no solo ralentiza la velocidad de carga de la página, afectando los Core Web Vitals y el SEO, sino que también dificulta la implementación de animaciones y efectos interactivos. Por tanto, la optimización de SVG no es una opción, sino un paso crucial en el desarrollo web profesional.
        </HighlightCard>
      </Section>

      <Section>
        <SectionTitle>Estrategias Técnicas para una Optimización SVG Extrema</SectionTitle>
        
        <SubTitle icon={<Settings className="h-6 w-6" />}>1. Limpieza y Minificación Automatizada</SubTitle>
        <p>Antes de que un SVG llegue a producción, debe pasar por un proceso de limpieza riguroso. Afortunadamente, existen herramientas potentes que automatizan esta tarea:</p>
        <ul className="list-disc list-outside pl-5 space-y-3 text-foreground/80 mt-4">
            <li><strong>SVGOMG (SVGO GUI):</strong> Esta es la herramienta de referencia. SVGOMG es una interfaz web para el optimizador <a href="https://github.com/svg/svgo" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">SVGO</a>. Permite activar y desactivar diversas opciones de optimización, como eliminar metadatos, limpiar atributos, convertir formas a trazados, y redondear valores numéricos a una precisión definida. Muestra una vista previa en tiempo real y el porcentaje de reducción de tamaño, lo que la hace indispensable.</li>
            <li><strong>Integración en el Flujo de Trabajo (Build Pipeline):</strong> Para proyectos a gran escala, SVGO puede integrarse directamente en el proceso de compilación (build) utilizando herramientas como Webpack, Gulp o Grunt. Esto asegura que todos los SVGs del proyecto se optimicen automáticamente antes del despliegue.</li>
        </ul>

        <SubTitle icon={<Maximize className="h-6 w-6" />}>2. Simplificación Manual de Trazados (Paths)</SubTitle>
        <p>Aunque las herramientas automáticas son excelentes, a veces se requiere un toque manual. Los programas de diseño vectorial a menudo generan más puntos de anclaje (nodos) de los necesarios, especialmente en curvas complejas. Para optimizar:</p>
        <ul className="list-disc list-outside pl-5 space-y-3 text-foreground/80 mt-4">
            <li><strong>Reducir nodos:</strong> Utiliza las funciones de simplificación de tu editor de diseño para eliminar nodos superfluos sin alterar significativamente la forma del gráfico. Menos nodos significan menos datos que procesar.</li>
            <li><strong>Usar formas geométricas básicas:</strong> Siempre que sea posible, utiliza las etiquetas SVG nativas como <code>&lt;circle&gt;</code>, <code>&lt;rect&gt;</code>, o <code>&lt;line&gt;</code> en lugar de trazados (<code>&lt;path&gt;</code>). Estas formas son más simples y, por lo tanto, más performantes para que el navegador las renderice.</li>
        </ul>
        
        <SubTitle icon={<GitMerge className="h-6 w-6" />}>3. La Estrategia de Incrustación Correcta</SubTitle>
        <p>La forma en que cargas un SVG en tu página tiene un impacto directo en el rendimiento, el SEO y la capacidad de manipulación. Cada método tiene sus pros y sus contras:</p>
        
        <h4 className='font-semibold text-lg mt-4'>Inline <code>&lt;svg&gt;</code></h4>
        <p className='text-foreground/80'>Pegar el código SVG directamente en el HTML. Es la mejor opción para iconos críticos o gráficos que necesitan ser animados o estilizados con CSS y JavaScript. Elimina una petición HTTP adicional, reduciendo la latencia. Sin embargo, el SVG no se almacena en la caché del navegador de forma independiente.</p>
        <CodeBlock code={codeInline} language="html" />
        
        <h4 className='font-semibold text-lg mt-4'>Etiqueta <code>&lt;img&gt;</code></h4>
        <p className='text-foreground/80'>Simple y eficaz. Permite que el navegador almacene el SVG en caché, lo cual es muy eficiente si el mismo gráfico se reutiliza en múltiples páginas. La principal desventaja es que no se puede manipular el interior del SVG con CSS o JavaScript.</p>
        <CodeBlock code={codeImg} language="html" />

        <h4 className='font-semibold text-lg mt-4'>Etiqueta <code>&lt;object&gt;</code></h4>
        <p className='text-foreground/80'>Ofrece un buen equilibrio. El SVG se almacena en caché y, al mismo tiempo, su contenido puede ser manipulado con JavaScript. Es ideal para SVGs interactivos complejos (como mapas o diagramas) que necesitan su propio script o estilos, aislados del documento principal. También proporciona un mecanismo de fallback integrado.</p>
        <CodeBlock code={codeObject} language="html" />

        <SubTitle icon={<ShieldCheck className="h-6 w-6" />}>4. La Optimización más Ignorada: Accesibilidad (a11y)</SubTitle>
        <p>Un SVG optimizado no solo es rápido, sino también accesible. Esto no solo ayuda a los usuarios con discapacidad, sino que también proporciona un contexto valioso a los motores de búsqueda.</p>
        <ul className="list-disc list-outside pl-5 space-y-3 text-foreground/80 mt-4">
            <li>Añade <code>role="img"</code> al SVG para que las tecnologías de asistencia lo identifiquen como una imagen.</li>
            <li>Usa <code>&lt;title&gt;</code> para un nombre corto y descriptivo y <code>&lt;desc&gt;</code> para una descripción más larga. Vincula estos elementos con el atributo <code>aria-labelledby</code>.</li>
            <li>Asigna IDs y clases semánticas (ej. <code>class="logo-letra"</code>) a los elementos internos para facilitar su manipulación y hacer el código más mantenible.</li>
        </ul>
        <CodeBlock code={codeA11y} language="html" />
      </Section>
      
      <Section>
        <SectionTitle>Conclusión: Optimización como Pilar de la UI/UX Moderna</SectionTitle>
        <HighlightCard>
            En el desarrollo web actual, la optimización de SVG no es un "extra", sino una práctica fundamental que impacta directamente en la velocidad, la accesibilidad y la mantenibilidad de un proyecto. Dedicar tiempo a limpiar, simplificar y estructurar correctamente tus gráficos vectoriales es una inversión que se traduce en una mejor experiencia de usuario, un mejor posicionamiento SEO y un código más robusto y profesional.
        </HighlightCard>
        <p>
          Un SVG optimizado es la base para una interfaz de usuario (UI) fluida, una experiencia de usuario (UX) agradable y un sitio web técnicamente sólido. Al adoptar estas mejores prácticas, te aseguras de que tus gráficos no solo se vean bien, sino que también funcionen a la perfección en el exigente entorno web de hoy.
        </p>
      </Section>
    </div>
  );
}
