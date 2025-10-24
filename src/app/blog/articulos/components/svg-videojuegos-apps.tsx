import React from 'react';
import { Gamepad2, Smartphone, Zap, Layers, Cpu } from 'lucide-react';

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
        const parts = item.split(/(\<strong\>.*?\<\/strong\>|\<code\>.*?\<\/code\>|\<a href=.*?<\/a\>)/g);
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

export default function SvgVideojuegosApps() {
    const practices = [
        "<strong>Optimizar el SVG antes de importar:</strong> Utiliza herramientas como <a href='https://jakearchibald.github.io/svgomg/' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>SVGOMG</a> para limpiar los archivos SVG. Elimina metadatos innecesarios, reduce la precisión de los decimales y simplifica los trazados. Un SVG más limpio se traduce en un menor uso de memoria y un renderizado más rápido por parte del motor del juego. Cada byte cuenta, especialmente en plataformas móviles.",
        "<strong>Uso de Atlas de SVG o Spritesheets:</strong> Para los elementos de la interfaz, considera agrupar múltiples iconos SVG en un único archivo (un 'atlas' o 'spritesheet'). Esto reduce drásticamente el número de llamadas de dibujado (draw calls), una de las optimizaciones de rendimiento más importantes en cualquier motor gráfico, ya que minimiza los cambios de estado de la GPU.",
        "<strong>Minimizar la complejidad geométrica:</strong> Evita el uso excesivo de gradientes complejos, filtros de CSS/SVG o trazados con un número de nodos muy elevado. En muchos motores, estos efectos pueden ser más costosos de renderizar que una textura simple. Simplifica las formas siempre que sea posible sin sacrificar la calidad artística, priorizando el rendimiento en tiempo real.",
        "<strong>Rasterizar en tiempo de compilación cuando sea apropiado:</strong> No todos los SVGs necesitan ser renderizados en tiempo real. Para elementos que no cambian de tamaño ni se animan, puedes rasterizarlos a una textura en el momento de la compilación (AOT - Ahead Of Time). Esto te da la flexibilidad del SVG durante el desarrollo y el rendimiento de una textura optimizada en el juego final. Motores como Unity permiten este enfoque híbrido.",
        "<strong>Uso de clases y selectores para theming:</strong> Si tu juego o app permite personalización de la interfaz (temas claro/oscuro, skins de equipo), estructura tus SVG con clases. Esto te permitirá cambiar los colores de relleno (<code>fill</code>) y trazo (<code>stroke</code>) de múltiples elementos a la vez mediante código, sin necesidad de tener diferentes archivos de imagen, facilitando la personalización dinámica.",
        "<strong>Precarga de assets SVG:</strong> Para evitar 'tirones' (stuttering) o parpadeos al mostrar nuevos elementos de la interfaz por primera vez, asegúrate de que los assets SVG se carguen y parseen en la memoria durante las pantallas de carga del juego o de la aplicación, no en medio de la acción. Este proceso de 'pre-warming' es crucial para una experiencia de usuario fluida."
    ];

  return (
    <div className="space-y-12">
      <Section>
        <h2 className="text-3xl font-bold text-foreground pb-2">SVG en el Desarrollo de Videojuegos y Apps: La Revolución Vectorial</h2>
        <p>
            En el competitivo mundo del desarrollo de videojuegos y aplicaciones móviles, el rendimiento, la eficiencia gráfica y una experiencia de usuario (UX) pulida son los pilares del éxito. Durante años, los desarrolladores han dependido de los 'spritesheets' y atlas de texturas en formato PNG para construir las interfaces de usuario (UI). Sin embargo, con la proliferación de dispositivos con diferentes resoluciones y densidades de píxeles (desde un smartphone económico hasta una tablet 4K), gestionar múltiples versiones de cada asset se ha convertido en una pesadilla logística que infla el tamaño de las aplicaciones.
        </p>
        <HighlightCard>
            Aquí es donde el formato SVG (Scalable Vector Graphics) emerge como una solución técnica superior y cada vez más adoptada. Su naturaleza vectorial, definida por código XML en lugar de píxeles, permite que los gráficos se escalen infinitamente sin pérdida de calidad, ofreciendo una combinación inigualable de eficiencia, flexibilidad y nitidez visual que está transformando los flujos de trabajo de los desarrolladores.
        </HighlightCard>
         <p>
            Esta transición no es solo una moda, sino una respuesta directa a las demandas del hardware moderno y las expectativas de los usuarios. Un asset SVG garantiza que la interfaz de un juego se vea igual de nítida en una pantalla de móvil de 6 pulgadas que en un monitor de 32, eliminando el desenfoque y la pixelación que plagan a los gráficos rasterizados al ser escalados. Adoptar SVG es invertir en un pipeline de arte más sostenible, mantenible y preparado para el futuro.
        </p>
      </Section>

      <Section>
        <SectionTitle>Ventajas Técnicas del SVG en Motores de Juegos y Frameworks de Apps</SectionTitle>
        
        <SubTitle icon={<Zap className="h-6 w-6" />}>1. Reducción Drástica del Peso de la Aplicación</SubTitle>
        <p>
            Los archivos SVG, al almacenar instrucciones matemáticas en lugar de mapas de bits, suelen ser significativamente más ligeros que sus equivalentes en PNG, especialmente para gráficos con formas limpias como iconos, botones y logos. Por ejemplo, un icono complejo puede pesar 3 KB en SVG frente a 25 KB en PNG. Esto se traduce directamente en una reducción del tamaño total del paquete de la aplicación (APK en Android, IPA en iOS) o del build del juego. Un menor tamaño de descarga no solo es apreciado por los usuarios con planes de datos limitados, sino que también puede ser un factor en la visibilidad y las tasas de conversión en las tiendas de aplicaciones.
        </p>

        <SubTitle icon={<Layers className="h-6 w-6" />}>2. Escalabilidad Perfecta: Adiós al "Multi-Resolution Hell"</SubTitle>
        <p>
            Esta es la ventaja más celebrada del SVG. Un único archivo SVG se adapta automáticamente a cualquier densidad de píxeles (DPI) y resolución de pantalla. Esto elimina la necesidad de crear y mantener múltiples versiones de cada asset gráfico (<code>@1x</code>, <code>@2x</code>, <code>@3x</code>, etc.), un proceso conocido en la comunidad de desarrolladores como el "infierno de las múltiples resoluciones". El resultado es un flujo de trabajo de diseño y desarrollo mucho más simple, menos propenso a errores y una consistencia visual perfecta en toda la fragmentada gama de dispositivos Android e iOS.
        </p>

        <SubTitle icon={<Cpu className="h-6 w-6" />}>3. Renderizado Vectorial Acelerado por GPU</SubTitle>
        <p>
            Contrario a la creencia antigua de que el renderizado vectorial es lento, los motores de juego modernos y los frameworks de UI han mejorado enormemente su capacidad para renderizar gráficos vectoriales de manera eficiente. Motores como <strong>Unity</strong> (con su UI Toolkit), <strong>Godot</strong>, y frameworks como <strong>Flutter</strong> y <strong>React Native</strong> (a través de librerías como <code>react-native-svg</code>) pueden teselar los SVGs y renderizarlos utilizando la aceleración por hardware (GPU). Esto permite que los gráficos vectoriales se utilicen no solo para interfaces estáticas, sino también para elementos dinámicos del HUD (Head-Up Display), efectos visuales y componentes interactivos sin un impacto prohibitivo en el rendimiento.
        </p>

        <SubTitle icon={<Gamepad2 className="h-6 w-6" />}>4. Flexibilidad para Animación y Theming Dinámico</SubTitle>
        <p>
            Dado que un SVG es esencialmente un árbol de nodos (similar al DOM), cada parte del gráfico puede ser manipulada mediante código. Esto abre un abanico de posibilidades que son muy complejas de lograr con spritesheets estáticos:
        </p>
        <ul className="list-disc list-outside pl-5 space-y-3 text-foreground/80 mt-4">
            <li><strong>Animaciones procedurales:</strong> Se pueden crear animaciones de UI complejas (transiciones, efectos de 'morphing' entre formas) directamente desde el código, sin necesidad de secuencias de sprites. Librerías como Lottie, que exportan animaciones de After Effects a un formato JSON (interpretable como SVG), son un ejemplo perfecto de este poder, permitiendo animaciones de alta fidelidad con un tamaño de archivo mínimo.</li>
            <li><strong>Personalización y 'Theming':</strong> Permite cambiar dinámicamente los colores de la interfaz para adaptarse a un tema elegido por el usuario (modo claro/oscuro), al estado del juego (ej. la UI se vuelve roja cuando la salud es baja), o para ofrecer skins y personalización de equipo como una característica del juego. Esto se puede hacer cambiando una sola variable de color en el código, en lugar de reemplazar cientos de assets.</li>
        </ul>
      </Section>
      
      <Section>
        <SectionTitle>Checklist de Buenas Prácticas para Usar SVG en Producción</SectionTitle>
        <p>Para aprovechar al máximo las ventajas del SVG sin comprometer el rendimiento, es crucial seguir un conjunto de buenas prácticas técnicas durante el desarrollo, ya que un SVG mal optimizado puede ser más costoso que una imagen rasterizada:</p>
        <PracticeList items={practices} />
      </Section>
      
      <Section>
        <SectionTitle>Conclusión: El SVG como Inversión en un Flujo de Trabajo Moderno</SectionTitle>
        <HighlightCard>
            La adopción de SVG en el desarrollo de videojuegos y aplicaciones móviles no es solo una elección estilística, sino una decisión técnica estratégica. Representa una inversión en un flujo de trabajo más limpio, escalable y eficiente, que resulta en aplicaciones más ligeras, visualmente consistentes y más fáciles de mantener y actualizar.
        </HighlightCard>
        <p>
          Aunque los formatos de textura tradicionales seguirán teniendo su lugar para assets fotorrealistas complejos o entornos 3D, el SVG se ha consolidado como la solución superior para la gran mayoría de los elementos de UI y gráficos estilizados. A medida que la resolución de las pantallas continúa aumentando y la personalización se convierte en una expectativa estándar para los usuarios, el dominio del pipeline de assets vectoriales será una habilidad cada vez más indispensable en el arsenal de cualquier desarrollador de juegos o aplicaciones que busque la excelencia técnica y visual.
        </p>
      </Section>
    </div>
  );
}
