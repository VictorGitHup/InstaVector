
import React from 'react';
import { CodeBlock } from './CodeBlock';
import { Settings, Maximize, GitMerge, ShieldCheck } from 'lucide-react';

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

const codeInline = `<svg>
  <!-- ... Contenido del SVG ... -->
</svg>`;

const codeImg = `<img src="/path/to/icon.svg" alt="Descripción del icono" />`;

const codeObject = `<object type="image/svg+xml" data="/path/to/interactive.svg">
  <!-- Fallback content -->
</object>`;

const codeA11y = `<svg role="img" aria-labelledby="titleId descId">
  <title id="titleId">Logo de la Empresa</title>
  <desc id="descId">Un círculo azul con una letra 'E' blanca en el centro.</desc>
  <!-- ... resto de los paths ... -->
</svg>`;

export default function OptimizaSvgWeb() {
  const practices = [
    "Usa herramientas de optimización automática como <strong>SVGOMG</strong>.",
    "Simplifica trazados (paths) para reducir el número de nodos.",
    "Configura el <code>viewBox</code> y elimina atributos <code>width</code> y <code>height</code> para un diseño fluido.",
    "Elige la estrategia de incrustación adecuada: <code>inline</code>, <code>&lt;img&gt;</code>, o <code>&lt;object&gt;</code>.",
    "Asegura la accesibilidad con atributos <code>role</code>, <code>&lt;title&gt;</code>, y <code>&lt;desc&gt;</code>."
  ];

  return (
    <div className="space-y-12">
      <Section>
        <h2 className="text-3xl font-bold text-foreground pb-2">SVG y su Impacto en Rendimiento y Experiencia de Usuario</h2>
        <p>
            El SVG (Scalable Vector Graphics) se ha consolidado como un estándar para gráficos web debido a su escalabilidad infinita, claridad visual y ligereza relativa. Sin embargo, no todos los SVG son iguales. Al exportar directamente desde herramientas de diseño como Adobe Illustrator, Figma o Sketch, los archivos suelen incluir código innecesario, metadatos internos, grupos vacíos, comentarios y nodos redundantes, que incrementan el tamaño del archivo y afectan negativamente la experiencia de usuario (UX) y el rendimiento de la página.
        </p>
        <HighlightCard>
            Un SVG optimizado garantiza tiempos de carga más rápidos, mejor puntaje SEO, y una manipulación sencilla mediante CSS o JavaScript, permitiendo animaciones y efectos interactivos sin complicaciones.
        </HighlightCard>
      </Section>

      <Section>
        <SectionTitle>Mejores Prácticas Técnicas para Optimizar SVG</SectionTitle>
        
        <SubTitle icon={<Settings className="h-6 w-6" />}>1. Usar Herramientas de Optimización Automática</SubTitle>
        <p>Antes de incluir un SVG en tu proyecto, es crucial pasarlo por herramientas que limpien el código:</p>
        <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80 mt-4">
            <li><strong>SVGOMG:</strong> Es una interfaz web para el optimizador SVGO. Permite eliminar metadatos, definiciones no utilizadas, comentarios y atributos por defecto, mostrando una vista previa en tiempo real.</li>
            <li><strong>Otras herramientas:</strong> SVGO CLI, ImageOptim o plugins para Grunt/Gulp pueden automatizar este proceso en pipelines de desarrollo.</li>
        </ul>

        <SubTitle icon={<Maximize className="h-6 w-6" />}>2. Simplificar Trazados (Paths)</SubTitle>
        <p>Los programas de diseño a menudo crean más nodos de los necesarios. Para optimizar:</p>
        <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80 mt-4">
            <li>Reduce los nodos innecesarios sin sacrificar la forma del gráfico.</li>
            <li>Usa algoritmos de simplificación de curvas para suavizar trazados complejos.</li>
            <li>Mantén el mínimo número de segmentos para formas geométricas, reduciendo la carga de procesamiento del navegador.</li>
        </ul>
        
        <SubTitle icon={<GitMerge className="h-6 w-6" />}>3. Estrategia de Incrustación (Inline vs. &lt;img&gt; vs. &lt;object&gt;)</SubTitle>
        <p>La forma en que cargas un SVG tiene un gran impacto en el rendimiento y la funcionalidad:</p>
        
        <h4 className='font-semibold text-lg mt-4'>Inline &lt;svg&gt;</h4>
        <p className='text-foreground/80'>Permite manipulación directa con CSS y JS, ideal para iconos críticos o animaciones. Evita una petición HTTP adicional.</p>
        <CodeBlock code={codeInline} language="html" />
        
        <h4 className='font-semibold text-lg mt-4'>Etiqueta &lt;img&gt;</h4>
        <p className='text-foreground/80'>Permite el cacheo del navegador, lo que es eficiente si el gráfico se reutiliza en varias páginas. Es menos flexible para manipulación dinámica.</p>
        <CodeBlock code={codeImg} language="html" />

        <h4 className='font-semibold text-lg mt-4'>Etiqueta &lt;object&gt;</h4>
        <p className='text-foreground/80'>Útil para SVGs interactivos complejos que requieren su propio JavaScript o animaciones aisladas del documento principal.</p>
        <CodeBlock code={codeObject} language="html" />

        <SubTitle icon={<ShieldCheck className="h-6 w-6" />}>4. Accesibilidad y Mantenimiento</SubTitle>
        <p>Un SVG optimizado también es más accesible y fácil de mantener:</p>
        <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80 mt-4">
            <li>Añade <code>role="img"</code> y etiquetas <code>&lt;title&gt;</code>/<code>&lt;desc&gt;</code> para compatibilidad con lectores de pantalla.</li>
            <li>Usa IDs y clases semánticas para facilitar la manipulación y animación con frameworks como React, Vue o Angular.</li>
        </ul>
        <CodeBlock code={codeA11y} language="html" />
      </Section>
      
      <Section>
        <SectionTitle>Conclusión</SectionTitle>
        <HighlightCard>
            En la era del desarrollo web moderno, dedicar tiempo a limpiar y optimizar tus SVG es un paso crítico para gráficos eficientes, escalables y técnicamente robustos.
        </HighlightCard>
        <p>
          Un SVG optimizado no solo mejora la velocidad de carga, sino que también permite una UI/UX más fluida y responsiva, facilita la interactividad y contribuye a mejorar el SEO y la accesibilidad, manteniendo la consistencia visual en todos los dispositivos.
        </p>
      </Section>
    </div>
  );
}
