import React from 'react';
import { CodeBlock } from './CodeBlock';

const jsExample = `const svgElement = document.getElementById("manga-izquierda");
if (svgElement) {
  svgElement.setAttribute("fill", "#FF5722"); // Cambia color de la manga
}`;

const TshirtPreview = () => (
    <>
        <style dangerouslySetInnerHTML={{ __html: `
            #camiseta-preview:hover #manga-izquierda {
                fill: #FF5722;
                transition: fill 0.3s ease-in-out;
            }
        `}} />
        <svg id="camiseta-preview" width="120" height="120" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
            <title>Previsualización de Camiseta</title>
            <path d="M10,10 L40,10 L40,45 L10,45 Z" fill="#E0E0E0" stroke="#BDBDBD" strokeWidth="0.5" />
            <path id="manga-izquierda" d="M2,12 L10,10 L10,20 L2,18 Z" fill="#BDBDBD" stroke="#9E9E9E" strokeWidth="0.5" />
            <path d="M48,12 L40,10 L40,20 L48,18 Z" fill="#BDBDBD" stroke="#9E9E9E" strokeWidth="0.5" />
            <path d="M20,10 C 20,16 30,16 30,10" fill="none" stroke="#BDBDBD" strokeWidth="0.5" />
            <text x="25" y="35" fontFamily="Arial" fontSize="8" fill="#424242" textAnchor="middle">SVG</text>
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
    { icon: '🧩', text: '<strong>Mantener archivos SVG modulares:</strong> Separar elementos editables en grupos (<code>&lt;g&gt;</code>) y asignar IDs y clases semánticas (<code>logo-central</code>, <code>manga-izquierda</code>) para un control preciso con código.' },
    { icon: '🎨', text: '<strong>Optimización y reducción de tamaño:</strong> Utilizar herramientas como SVGO o SVGOMG para eliminar metadatos innecesarios y nodos redundantes, garantizando tiempos de carga rápidos.' },
    { icon: '🔠', text: '<strong>Compatibilidad de fuentes y paths:</strong> Convertir texto a paths cuando sea necesario para asegurar consistencia en todos los navegadores y sistemas operativos.' },
    { icon: '🧱', text: '<strong>Gestión de eventos e interactividad:</strong> Manejar eventos <code>mouseover</code>, <code>click</code> o <code>drag</code> para una UX dinámica sin afectar el rendimiento.' },
    { icon: '♿', text: '<strong>Preparación para exportación o impresión:</strong> Generar SVG finales listos para producción o impresión bajo demanda, conservando proporciones, colores y resolución vectorial.' },
  ];

  return (
    <div className="space-y-12">
      <Section>
        <h2 className="text-3xl font-bold text-foreground pb-2">SVG: La Base Técnica de la Personalización Interactiva</h2>
        <p>
            En el comercio electrónico moderno, la experiencia de usuario (UX) es un factor crítico para diferenciarse de la competencia. La personalización de productos en tiempo real se ha consolidado como una estrategia poderosa para aumentar la retención, conversión y fidelización de clientes. En este contexto, el formato SVG (Scalable Vector Graphics) ofrece ventajas técnicas únicas para implementar herramientas de personalización de manera eficiente, escalable y altamente interactiva.
        </p>
        <p>
            A diferencia de imágenes rasterizadas (PNG, JPG), los SVG están basados en XML vectorial, lo que significa que cada componente del gráfico puede ser manipulado de forma independiente, permitiendo modificaciones dinámicas en tiempo real dentro del navegador sin comprometer la calidad visual.
        </p>
      </Section>

      <Section>
        <SectionTitle>Aplicaciones Técnicas del SVG en Personalización Online</SectionTitle>
        
        <SubTitle>1. Edición Dinámica de Productos</SubTitle>
        <p>Los SVG permiten que los usuarios modifiquen los productos en línea de manera inmediata:</p>
         <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80 mt-4">
            <li><strong>Cambio de colores y degradados:</strong> Selección de paletas personalizadas que se aplican a elementos específicos mediante CSS o JavaScript.</li>
            <li><strong>Añadir texto o tipografía personalizada:</strong> Las etiquetas, nombres o frases se pueden insertar como paths o elementos <code>&lt;text&gt;</code> dentro del SVG, manteniendo nitidez en cualquier resolución.</li>
            <li><strong>Aplicación de patrones y gráficos:</strong> Logos, iconos o estampados se pueden superponer o combinar con los elementos existentes de manera modular.</li>
            <li><strong>Transformaciones geométricas:</strong> Redimensionar, rotar o distorsionar elementos dentro del producto sin pérdida de calidad ni pixelación.</li>
        </ul>
        <p className="mt-4">Ejemplo de manipulación con JavaScript:</p>
        <CodeBlock code={jsExample} language="javascript" preview={<TshirtPreview />} />
        <p className="text-sm text-center text-muted-foreground italic mt-2">Pasa el cursor sobre la camiseta para ver el efecto.</p>

        <SubTitle>2. Escalabilidad Perfecta</SubTitle>
        <p>Una de las principales ventajas del SVG es su resolución independiente:</p>
        <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80 mt-4">
            <li>El producto personalizado se puede previsualizar con total nitidez en miniaturas, zoom en 3D o vistas a pantalla completa.</li>
            <li>Permite generar renders para impresión o mockups de marketing directamente desde el navegador sin pérdida de definición.</li>
            <li>Compatible con pantallas de alta densidad de píxeles (Retina, 4K, 8K), asegurando que la experiencia visual sea consistente en cualquier dispositivo.</li>
        </ul>

        <SubTitle>3. Integración Fluida en E-commerce</SubTitle>
        <p>El SVG se integra de manera sencilla en aplicaciones web modernas:</p>
        <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80 mt-4">
            <li>Manipulación directa mediante DOM y JavaScript.</li>
            <li>Compatible con frameworks como React, Vue o Angular, y librerías de animación como GSAP o Anime.js, permitiendo crear transiciones suaves y microinteracciones.</li>
            <li>Posibilidad de sincronizar configuraciones con el backend, guardando la personalización en bases de datos para generar órdenes o archivos de producción automáticamente.</li>
        </ul>
      </Section>
      
      <Section>
        <SectionTitle>Buenas Prácticas para la Personalización con SVG</SectionTitle>
        <p>Para construir un sistema de personalización robusto y mantenible:</p>
        <PracticeList items={practices} />
      </Section>
      
      <Section>
        <SectionTitle>Conclusión</SectionTitle>
        <HighlightCard>
            El uso de SVG en la personalización de productos online no solo mejora la experiencia del usuario, sino que también optimiza rendimiento, escalabilidad y consistencia visual.
        </HighlightCard>
        <p>
          Al ofrecer interactividad en tiempo real y total nitidez en cualquier resolución, el SVG se convierte en una herramienta esencial para e-commerce moderno, diseño de productos y marketing digital, facilitando procesos de personalización, renderizado y producción bajo demanda.
        </p>
      </Section>
    </div>
  );
}
