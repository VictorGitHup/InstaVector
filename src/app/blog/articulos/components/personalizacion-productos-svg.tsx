import React from 'react';
import { CodeBlock } from './CodeBlock';
import { Paintbrush, Scaling, GitMerge, Settings } from 'lucide-react';

const jsExample = `// Selecciona el elemento SVG por su ID
const svgElement = document.getElementById("manga-izquierda");

// Verifica si el elemento existe antes de manipularlo
if (svgElement) {
  // Cambia el color de relleno (fill) a un nuevo valor
  svgElement.setAttribute("fill", "#D32F2F"); // Un rojo intenso
  
  // Añade un evento para feedback visual al pasar el cursor
  svgElement.addEventListener('mouseover', () => {
    svgElement.style.opacity = '0.8';
  });
  svgElement.addEventListener('mouseout', () => {
    svgElement.style.opacity = '1';
  });
}`;

const TshirtPreview = () => (
    <>
        <style dangerouslySetInnerHTML={{ __html: `
            #camiseta-preview #manga-izquierda {
                transition: fill 0.3s ease-in-out, transform 0.3s ease;
            }
            #camiseta-preview:hover #manga-izquierda {
                fill: #D32F2F;
                transform: scale(1.05);
                transform-origin: center;
            }
        `}} />
        <svg id="camiseta-preview" width="120" height="120" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
            <title>Previsualización de Camiseta Personalizable</title>
            <g id="cuerpo-camiseta">
              <path d="M10,10 L40,10 L40,45 L10,45 Z" fill="#E0E0E0" stroke="#BDBDBD" strokeWidth="0.5" />
              <path d="M20,10 C 20,16 30,16 30,10" fill="none" stroke="#BDBDBD" strokeWidth="0.5" />
              <text x="25" y="35" fontFamily="Arial" fontSize="8" fill="#424242" textAnchor="middle">SVG</text>
            </g>
            <g id="mangas">
              <path id="manga-izquierda" d="M2,12 L10,10 L10,20 L2,18 Z" fill="#BDBDBD" stroke="#9E9E9E" strokeWidth="0.5" />
              <path id="manga-derecha" d="M48,12 L40,10 L40,20 L48,18 Z" fill="#BDBDBD" stroke="#9E9E9E" strokeWidth="0.5" />
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

const PracticeList = ({ items }: { items: { icon: string; text: string }[] }) => (
  <ul className="space-y-4">
    {items.map((item, index) => (
      <li key={index} className="flex items-start gap-4">
        <span className="text-2xl pt-1">{item.icon}</span>
        <div>
          {item.text.split(/(\<strong\>.*?\<\/strong\>|\<code\>.*?\<\/code\>)/g).map((part, i) =>
            part.match(/^<.*>$/) ? (
              <span key={i} dangerouslySetInnerHTML={{ __html: part }} />
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </div>
      </li>
    ))}
  </ul>
);

export default function PersonalizacionProductosSvg() {
  const practices = [
    { icon: '🧩', text: '<strong>Diseñar SVG modulares y semánticos:</strong> Estructura tu SVG base separando cada parte personalizable en grupos (<code>&lt;g&gt;</code>) y asigna IDs y clases descriptivas (ej. <code>id="logo-central"</code>, <code>class="costuras"</code>). Esto es fundamental para un control preciso y mantenible a través de código.' },
    { icon: '🎨', text: '<strong>Optimizar antes de integrar:</strong> Utiliza herramientas como <a href="https://jakearchibald.github.io/svgomg/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">SVGOMG</a> para limpiar y minificar tus archivos SVG. Eliminar metadatos innecesarios, nodos redundantes y código del editor puede reducir drásticamente el tamaño del archivo, garantizando tiempos de carga rápidos y una experiencia fluida.' },
    { icon: '🔠', text: '<strong>Gestionar fuentes de forma inteligente:</strong> Si permites texto personalizable, asegúrate de cargar solo las fuentes web necesarias. Para textos estáticos o logotipos, conviértelos a trazados (paths) para garantizar una consistencia visual perfecta en todos los navegadores y sistemas operativos, evitando problemas de renderizado de fuentes.' },
    { icon: '⚡️', text: '<strong>Delegación de eventos eficiente:</strong> En lugar de añadir un listener de eventos a cada elemento individual del SVG, utiliza la delegación de eventos en el contenedor principal. Esto mejora el rendimiento, especialmente en SVGs complejos con muchos elementos interactivos.' },
    { icon: '♿', text: '<strong>Asegurar la accesibilidad (a11y):</strong> Un producto personalizable debe ser usable por todos. Asegúrate de que los controles (como los selectores de color) sean accesibles desde el teclado y que el SVG tenga etiquetas <code>&lt;title&gt;</code> y <code>&lt;desc&gt;</code> para que los lectores de pantalla puedan interpretarlo. Actualiza dinámicamente los atributos ARIA cuando el usuario realice cambios.' },
    { icon: '🖼️', text: '<strong>Preparar para la exportación y producción:</strong> El sistema debe ser capaz de generar un SVG "limpio" final que contenga solo la personalización del usuario, listo para ser enviado a un sistema de impresión bajo demanda (Print on Demand) o para guardarlo en el perfil del cliente. Este SVG debe conservar las proporciones, los perfiles de color (si aplica) y la resolución vectorial.' },
  ];

  return (
    <div className="space-y-12">
      <Section>
        <h2 className="text-3xl font-bold text-foreground pb-2">SVG: La Arquitectura Técnica detrás de la Personalización de Productos</h2>
        <p>
            En el competitivo panorama del comercio electrónico, la personalización de productos en tiempo real ha pasado de ser una novedad a una expectativa del cliente. Ofrecer a los usuarios la capacidad de co-crear sus propios productos no solo aumenta la participación y la conversión, sino que también fomenta una conexión más profunda con la marca. Para implementar estas experiencias interactivas de manera eficiente y escalable, el formato SVG (Scalable Vector Graphics) se erige como la tecnología superior.
        </p>
        <HighlightCard>
            A diferencia de las imágenes rasterizadas (PNG, JPG), que son estáticas y basadas en píxeles, los SVG son documentos XML que describen gráficos mediante código. Esto significa que cada componente de un producto —desde el color de una manga hasta la posición de un logotipo— puede ser manipulado de forma independiente y en tiempo real directamente en el navegador, sin comprometer la calidad visual.
        </HighlightCard>
      </Section>

      <Section>
        <SectionTitle>Capacidades Técnicas del SVG en Configuradores de Productos</SectionTitle>
        
        <SubTitle icon={<Paintbrush className="h-6 w-6" />}>1. Edición Dinámica a Nivel de Componente</SubTitle>
        <p>El verdadero poder del SVG radica en su estructura similar al DOM. Cada elemento (<code>&lt;path&gt;</code>, <code>&lt;circle&gt;</code>, <code>&lt;text&gt;</code>) es un nodo que puede ser seleccionado y modificado con JavaScript, permitiendo a los usuarios:</p>
         <ul className="list-disc list-outside pl-5 space-y-3 text-foreground/80 mt-4">
            <li><strong>Cambiar colores y texturas:</strong> Aplicar paletas de colores personalizadas a elementos específicos del producto. Mediante el uso de patrones SVG (<code>&lt;pattern&gt;</code>), incluso se pueden aplicar texturas complejas de forma repetible.</li>
            <li><strong>Añadir y editar texto:</strong> Los usuarios pueden insertar nombres, iniciales o frases. Los elementos <code>&lt;text&gt;</code> del SVG permiten controlar la tipografía, el tamaño y la alineación, manteniendo siempre la nitidez vectorial.</li>
            <li><strong>Superponer gráficos y logotipos:</strong> Se pueden cargar otros SVGs (como un logotipo) y colocarlos dinámicamente sobre el producto, permitiendo al usuario ajustar su posición, tamaño y rotación.</li>
            <li><strong>Aplicar transformaciones geométricas:</strong> Redimensionar, rotar, inclinar o mover cualquier parte del diseño, todo ello sin pérdida de calidad ni pixelación.</li>
        </ul>
        <p className="mt-4">Este ejemplo de JavaScript muestra lo sencillo que es seleccionar un componente del producto (en este caso, una manga de camiseta) y cambiar su color. Pasa el cursor sobre la camiseta para ver un efecto similar implementado con CSS.</p>
        <CodeBlock code={jsExample} language="javascript" preview={<TshirtPreview />} />

        <SubTitle icon={<Scaling className="h-6 w-6" />}>2. Escalabilidad Perfecta y Vistas Previas de Alta Fidelidad</SubTitle>
        <p>La resolución independiente del SVG es una ventaja crítica en el e-commerce. Un único archivo SVG puede:</p>
        <ul className="list-disc list-outside pl-5 space-y-3 text-foreground/80 mt-4">
            <li>Generar vistas previas nítidas del producto personalizado, ya sea en una pequeña miniatura del carrito de compras, en un zoom detallado, o en una vista 3D simulada.</li>
            <li>Producir archivos listos para producción (renders para impresión, mockups de marketing) directamente desde la configuración del usuario en el navegador, sin pérdida de definición.</li>
            <li>Garantizar una experiencia visual consistente y de alta calidad en todos los dispositivos, desde móviles hasta monitores 4K o pantallas de alta densidad de píxeles (Retina).</li>
        </ul>

        <SubTitle icon={<GitMerge className="h-6 w-6" />}>3. Integración Fluida con el Ecosistema Web Moderno</SubTitle>
        <p>El SVG no es una tecnología aislada; se integra de forma nativa con las herramientas de desarrollo web más utilizadas:</p>
        <ul className="list-disc list-outside pl-5 space-y-3 text-foreground/80 mt-4">
            <li><strong>Manipulación con JavaScript puro y Frameworks:</strong> Se puede controlar cada aspecto del SVG usando el DOM estándar. Además, es totalmente compatible con frameworks como React, Vue o Angular, permitiendo crear componentes de personalización reutilizables y reactivos.</li>
            <li><strong>Animaciones y transiciones:</strong> Es posible añadir transiciones suaves y microinteracciones con CSS, o crear animaciones complejas con librerías como GSAP o Anime.js para, por ejemplo, mostrar cómo se "arma" el producto personalizado.</li>
            <li><strong>Sincronización con el Backend:</strong> La configuración del SVG (colores, textos, posiciones) puede ser serializada a formato JSON, guardada en una base de datos y recuperada posteriormente. Esto permite que los usuarios guarden sus diseños o que el sistema genere automáticamente órdenes de producción.</li>
        </ul>
      </Section>
      
      <Section>
        <SectionTitle>Checklist de Buenas Prácticas para un Configurador SVG</SectionTitle>
        <p>Para construir un sistema de personalización de productos robusto, performante y mantenible con SVG, es esencial seguir estas pautas técnicas:</p>
        <PracticeList items={practices} />
      </Section>
      
      <Section>
        <SectionTitle>Conclusión: SVG como Motor de la Co-creación Digital</SectionTitle>
        <HighlightCard>
            El uso de SVG para la personalización de productos online trasciende la simple mejora visual. Optimiza el rendimiento, garantiza la escalabilidad y ofrece una flexibilidad técnica que permite a las marcas construir experiencias de co-creación verdaderamente interactivas y memorables.
        </HighlightCard>
        <p>
          Al proporcionar a los usuarios las herramientas para diseñar sus propios productos en tiempo real, las empresas no solo aumentan las tasas de conversión, sino que también fortalecen la lealtad a la marca. En el e-commerce moderno, el SVG se ha convertido en un componente esencial para el diseño de productos, el marketing digital y la producción bajo demanda, demostrando que la mejor experiencia de cliente es aquella que se construye en conjunto.
        </p>
      </Section>
    </div>
  );
}
