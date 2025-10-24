import React from 'react';
import { CodeBlock } from './CodeBlock';
import { Rocket, Gem, BarChart, MousePointerClick } from 'lucide-react';

const cssExample = `/* Pasa el cursor sobre el cohete para ver la interacción */
#rocket-icon {
  transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
}
#rocket-icon:hover {
  transform: translateY(-5px) rotate(5deg);
}
/* Animación de la estela */
#rocket-icon:hover .estela {
  stroke-dashoffset: 0;
  opacity: 1;
}
.estela {
  stroke-dasharray: 50;
  stroke-dashoffset: 50;
  opacity: 0;
  transition: stroke-dashoffset 0.5s ease-out, opacity 0.5s;
}`;

const cssPreview = (
    <>
        <style dangerouslySetInnerHTML={{ __html: `
             #rocket-icon {
                transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
                cursor: pointer;
             }
             #rocket-icon:hover {
                transform: translateY(-5px) rotate(5deg);
             }
             #rocket-icon:hover .estela {
              stroke-dashoffset: 0;
              opacity: 1;
            }
            .estela {
              stroke-dasharray: 50;
              stroke-dashoffset: 50;
              opacity: 0;
              transition: stroke-dashoffset 0.5s ease-out, opacity 0.5s;
            }
        `}} />
        <svg id="rocket-icon" className="h-24 w-24 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.11.65-.9.03-2.3-.85-3.05-1.14-.94-2.56-.9-3.1 0-.81.66-1.43 2.16-.78 3.15z"></path>
          <path d="M12 12.5c.7-.53 1.22-.53 1.94.04.72.57 1.22 1.63.9 2.56-.32.93-1.34 1.6-2.56 1.33-.9-.2-1.6-.8-1.87-1.6-.27-.8.38-1.73 1.5-2.33z"></path>
          <path d="M17.5 10.5c1.5-1.26 2-5 2-5s-3.74.5-5 2c-.71.84-.7 2.3-.05 3.11-.65.9-.03 2.3.85 3.05 1.14.94 2.56.9 3.1 0 .81-.66 1.43-2.16.78-3.15z"></path>
          <path className="estela" stroke="hsl(var(--primary))" strokeWidth="1.5" d="M12 15l-3 6h6l-3-6z"></path>
        </svg>
    </>
);


const jsExample = `// Ejemplo conceptual de animación con GSAP (requiere la librería)
// Anima la aparición del logo y luego lo hace girar
const tl = gsap.timeline();
tl.from("#gem-logo", { 
    duration: 1, 
    opacity: 0, 
    scale: 0.5, 
    ease: "back.out(1.7)" 
  })
  .to("#gem-logo", { 
    duration: 1.5, 
    rotation: 360, 
    ease: "elastic.out(1, 0.5)", 
    delay: 0.5 
  });`;

const jsPreview = (
     <>
        <style dangerouslySetInnerHTML={{ __html: `
             #gem-logo-container:hover #gem-logo {
                transform: rotate(360deg) scale(1.1);
            }
             #gem-logo {
                transition: transform 1s cubic-bezier(0.34, 1.56, 0.64, 1);
                cursor: pointer;
             }
        `}} />
        <div id="gem-logo-container">
            <Gem id="gem-logo" className="h-24 w-24 text-primary" strokeWidth={1.5} />
        </div>
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

export default function SvgAnimacionesMarketing() {
  return (
    <div className="space-y-12">
      <Section>
        <h2 className="text-3xl font-bold text-foreground pb-2">SVG Animado: El Arma Secreta del Marketing Digital Moderno</h2>
        <p>
          En un entorno digital saturado, captar y retener la atención del usuario es el desafío más grande para cualquier estratega de marketing. El contenido estático ya no es suficiente. El marketing digital de hoy exige velocidad, interactividad y experiencias visuales memorables. Es en este escenario donde el formato SVG (Scalable Vector Graphics), combinado con animación, se convierte en una herramienta estratégica de inmenso poder.
        </p>
        <HighlightCard>
          A diferencia de los GIFs pesados o los vídeos que requieren tiempo de carga, las animaciones SVG son increíblemente ligeras, escalables y totalmente interactivas. Al estar basadas en código XML, sus elementos pueden ser manipulados directamente por el navegador mediante CSS y JavaScript, abriendo un abanico de posibilidades creativas para mejorar drásticamente el engagement y la conversión.
        </HighlightCard>
      </Section>

      <Section>
        <SectionTitle>¿Por Qué el SVG es Técnicamente Superior para Animaciones en Marketing?</SectionTitle>
        
        <SubTitle icon={<Rocket className="h-6 w-6" />}>1. Rendimiento Extremo y Optimización SEO</SubTitle>
        <p>
          Las animaciones SVG se componen de vectores matemáticos, no de una secuencia de imágenes de píxeles. Esto las hace extremadamente ligeras, lo que se traduce en tiempos de carga de página más rápidos. Un sitio web rápido no solo mejora la experiencia del usuario (reduciendo la tasa de rebote), sino que también es un factor clave de posicionamiento para Google (Core Web Vitals). Un banner publicitario o un héroe de landing page animado con SVG no penalizará el rendimiento de tu sitio, a diferencia de un vídeo o un GIF de alta calidad.
        </p>

        <SubTitle icon={<BarChart className="h-6 w-6" />}>2. Escalabilidad Perfecta para Campañas Multicanal</SubTitle>
        <p>
          Una de las mayores ventajas del SVG es su resolución independiente. La misma animación puede adaptarse perfectamente a un banner en un sitio web, un post en redes sociales, una pantalla en un punto de venta o una aplicación móvil, sin perder absolutamente nada de calidad. La nitidez se mantiene impecable en cualquier pantalla, desde un móvil de baja resolución hasta un monitor 4K, garantizando una presentación de marca consistente y profesional en todos los canales.
        </p>

        <SubTitle icon={<MousePointerClick className="h-6 w-6" />}>3. Interactividad Nativa para un Engagement Activo</SubTitle>
        <p>
          Los SVG pueden reaccionar a las acciones del usuario (hover, clic, scroll) de formas que los formatos de vídeo o GIF no pueden. Cada elemento dentro de un SVG puede ser un objetivo para eventos de JavaScript, permitiendo crear experiencias donde el usuario participa activamente en la animación.
        </p>
        <p>Con CSS, se pueden crear microinteracciones simples pero efectivas:</p>
        <CodeBlock code={cssExample} language="css" preview={cssPreview} />
        <p>
          Para animaciones más complejas y coreografiadas, librerías de JavaScript como GSAP (GreenSock Animation Platform) ofrecen un control total sobre el timing, la secuencia y la física de la animación, permitiendo crear storytelling visual impactante.
        </p>
        <CodeBlock code={jsExample} language="javascript" preview={jsPreview}/>
      </Section>

      <Section>
        <SectionTitle>Aplicaciones Estratégicas de Animaciones SVG en Marketing</SectionTitle>
        
        <SubTitle icon="✨">1. Aumentar el Engagement y la Retención</SubTitle>
        <p>
          Las animaciones sutiles y bien ejecutadas guían la atención del usuario y hacen que la navegación sea más agradable. Iconos que cobran vida al pasar el cursor, botones que ofrecen una respuesta visual al ser presionados, o infografías que revelan datos a medida que el usuario hace scroll, son formas efectivas de aumentar el tiempo de permanencia en la página y mejorar la retención del mensaje.
        </p>

        <SubTitle icon="⚡️">2. Mejorar las Tasas de Conversión (CRO)</SubTitle>
        <p>
          Una animación puede ser una poderosa llamada a la acción (CTA). Un botón de "Comprar ahora" que pulsa sutilmente o un formulario que guía al usuario paso a paso con transiciones animadas puede reducir la fricción y aumentar significativamente las tasas de conversión. Las animaciones pueden destacar ofertas, mostrar la facilidad de uso de un producto o simplemente hacer que el proceso de compra sea más gratificante.
        </p>
        
        <SubTitle icon="🎬">3. Storytelling Visual e Inmersivo</SubTitle>
        <p>
          Mediante técnicas como la animación de trazados (path animation) o el morphing de formas, se pueden contar historias complejas de manera simple y visual. Por ejemplo, puedes mostrar la evolución de un producto, explicar un proceso complejo, o visualizar el impacto de un servicio, todo ello dentro de un único y ligero SVG animado. Esto crea una narrativa de marca memorable que conecta emocionalmente con la audiencia.
        </p>
      </Section>
      
      <Section>
        <SectionTitle>Checklist para Implementar Animaciones SVG con Éxito</SectionTitle>
        <ul className="space-y-4 list-disc list-outside pl-5 text-foreground/80">
          <li>
            <strong>Optimiza el SVG base:</strong> Antes de animar, pasa tu archivo SVG por una herramienta como <a href="https://jakearchibald.github.io/svgomg/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">SVGOMG</a>. Un SVG limpio y ligero es la base de una animación performante.
          </li>
          <li>
            <strong>Estructura semántica para la animación:</strong> Nombra tus capas y elementos con IDs y clases descriptivas en tu software de diseño. Esto hará que seleccionarlos con CSS o JavaScript sea mucho más fácil y mantenible.
          </li>
          <li>
            <strong>La sutileza es clave:</strong> No sobrecargues la página con animaciones. Las mejores animaciones son aquellas que sirven a un propósito: guiar al usuario, proporcionar feedback o deleitar sin distraer. Menos es casi siempre más.
          </li>
          <li>
            <strong>Elige la herramienta adecuada:</strong> Para interacciones simples, CSS es suficiente y muy eficiente. Para secuencias complejas o animaciones basadas en el scroll, utiliza librerías especializadas como GSAP, que están altamente optimizadas para el rendimiento.
          </li>
          <li>
            <strong>Prueba en múltiples dispositivos y navegadores:</strong> Asegúrate de que tus animaciones se vean y funcionen bien en todos los entornos. Presta especial atención al rendimiento en dispositivos móviles.
          </li>
           <li>
            <strong>No olvides la accesibilidad:</strong> Si una animación es puramente decorativa, ocúltala de las tecnologías de asistencia con `aria-hidden="true"`. Si transmite información, asegúrate de que esa información esté disponible en formato de texto. Considera añadir una opción para reducir o desactivar el movimiento (`prefers-reduced-motion`).
          </li>
        </ul>
      </Section>
      
      <Section>
        <SectionTitle>Conclusión: El SVG Animado como Diferenciador Competitivo</SectionTitle>
        <HighlightCard>
            El uso estratégico de animaciones SVG representa un salto cualitativo en el marketing digital. Ya no se trata solo de tener un sitio web bonito, sino de crear experiencias de usuario rápidas, interactivas y memorables. En un mercado donde los usuarios tienen una capacidad de atención limitada, las animaciones ligeras y con propósito pueden ser el factor diferenciador que convierta una visita fugaz en una conversión y un cliente leal.
        </HighlightCard>
        <p>
          Adoptar esta tecnología no solo optimiza el rendimiento técnico de tus activos digitales, sino que también refuerza la identidad visual, mejora la comunicación y fortalece la conexión emocional de tu marca con su audiencia.
        </p>
      </Section>
    </div>
  );
}
