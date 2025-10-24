import React from 'react';

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

export default function SvgVideojuegosApps() {
    const practices = [
        "<strong>Optimización del SVG:</strong> Antes de incluir los archivos en el proyecto, deben pasar por herramientas de optimización como SVGO o SVGOMG, que eliminan metadatos, reducen nodos innecesarios y simplifican trazos sin afectar la calidad visual.",
        "<strong>Uso de Clases y Selectores Inteligentes:</strong> Emplear clases o IDs reutilizables facilita la manipulación con JavaScript o CSS, permitiendo actualizar dinámicamente colores, tamaños o animaciones en tiempo real.",
        "<strong>Minimizar Complejidad Geométrica:</strong> Reducir la cantidad de puntos de anclaje, capas y rutas mejora la velocidad de renderizado, especialmente en dispositivos móviles.",
        "<strong>Conversión Controlada a Paths:</strong> En algunos casos, convertir elementos complejos (como texto o filtros) a paths ayuda a mantener la consistencia visual entre plataformas.",
        "<strong>Cacheo y Precarga:</strong> Implementar mecanismos de cache para SVGs recurrentes (como íconos del sistema o menús) puede reducir tiempos de renderizado en cada sesión."
    ];

  return (
    <div className="space-y-12">
      <Section>
        <p>
            En el competitivo mundo del desarrollo de videojuegos y aplicaciones móviles, el rendimiento, la eficiencia gráfica y la experiencia del usuario (UX) son factores determinantes para el éxito. En este contexto, el formato SVG (Scalable Vector Graphics) se ha posicionado como una solución versátil para la creación de interfaces de usuario (UI), íconos, animaciones y componentes interactivos. Su naturaleza basada en vectores —definida mediante XML— permite que los gráficos se escalen infinitamente sin pérdida de calidad, manteniendo la nitidez y el detalle en cualquier dispositivo o resolución.
        </p>
      </Section>

      <Section>
        <SectionTitle>Ventajas de SVG en el Desarrollo Móvil y de Videojuegos</SectionTitle>
        
        <SubTitle>1. Menor Peso y Optimización de Recursos:</SubTitle>
        <p>
            Los archivos SVG suelen tener un peso considerablemente menor que las imágenes rasterizadas (como PNG o JPG), ya que almacenan información matemática en lugar de mapas de bits. Esto se traduce en tiempos de carga más cortos, menor consumo de ancho de banda, y una reducción del tamaño total del paquete de la aplicación (APK o IPA). En motores como Unity, Godot o Flutter, esto puede marcar una diferencia significativa en el rendimiento general, especialmente en dispositivos de gama baja.
        </p>

        <SubTitle>2. Escalabilidad Perfecta y Adaptabilidad Multidispositivo:</SubTitle>
        <p>
            Gracias a su naturaleza vectorial, un solo recurso SVG se adapta automáticamente a múltiples densidades de píxeles (DPI) y resoluciones, eliminando la necesidad de generar varias versiones de un mismo gráfico (@1x, @2x, @3x). Esto simplifica el pipeline de diseño, reduce el uso de almacenamiento gráfico y mejora la consistencia visual en interfaces adaptativas (responsive UI).
        </p>

        <SubTitle>3. Integración con Sistemas de Renderizado Modernos:</SubTitle>
        <p>
            Los motores gráficos modernos, como Unity UI Toolkit, React Native SVG, Flutter SVG y WebGL, permiten renderizar SVGs con alto rendimiento, utilizando aceleración por GPU y renderizado vectorial en tiempo real. Esto habilita su uso no solo para interfaces, sino también para efectos visuales, HUDs (Head-Up Displays) y elementos dinámicos dentro del gameplay.
        </p>

        <SubTitle>4. Animaciones y Efectos Interactivos:</SubTitle>
        <p>
            Los SVG permiten animaciones precisas mediante CSS, SMIL o JavaScript, sin necesidad de texturas adicionales. Los desarrolladores pueden manipular nodos, trazos y gradientes directamente desde el código, habilitando transiciones suaves, interacciones sensibles al toque (touch events) y efectos visuales avanzados como morphing, hover dinámico, o sincronización con audio. Además, frameworks como GSAP, Lottie o Framer Motion facilitan su integración en flujos de animación complejos.
        </p>
      </Section>
      
      <Section>
        <SectionTitle>Buenas Prácticas para Assets SVG en Producción</SectionTitle>
        <p>Para garantizar un rendimiento óptimo, se recomienda seguir estas prácticas:</p>
        <PracticeList items={practices} />
      </Section>
      
      <Section>
        <SectionTitle>Conclusión</SectionTitle>
        <HighlightCard>
            El uso de SVG en videojuegos y aplicaciones móviles representa un avance significativo hacia experiencias visuales más fluidas, escalables y eficientes.
        </HighlightCard>
        <p>
          Su integración en entornos multiplataforma permite mantener una identidad visual uniforme, optimizar recursos y ofrecer una interactividad superior sin sacrificar rendimiento. A medida que los dispositivos continúan aumentando en resolución y capacidad gráfica, el formato SVG seguirá consolidándose como una herramienta esencial en el arsenal del desarrollo visual moderno.
        </p>
      </Section>
    </div>
  );
}
