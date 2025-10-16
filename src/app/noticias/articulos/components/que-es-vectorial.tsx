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

export default function QueEsVectorial() {
  return (
    <div className="space-y-12">
      <Section>
        <h2 className="text-3xl font-bold text-foreground pb-2">Imágenes Vectoriales vs Rasterizadas</h2>
        <p>
            En el diseño digital, existen dos grandes familias de imágenes: rasterizadas y vectoriales. Comprender la diferencia entre ellas no es solo un detalle técnico; es un conocimiento fundamental para crear gráficos profesionales, eficientes y escalables.
        </p>
        <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80 mt-4">
            <li><strong>Imágenes Rasterizadas (JPEG, PNG, GIF):</strong> Compuestas por una rejilla de píxeles. Cada píxel contiene información de color. Escalar una imagen rasterizada más allá de su resolución original genera pixelación y pérdida de nitidez.</li>
            <li><strong>Imágenes Vectoriales (SVG, AI, EPS):</strong> Basadas en fórmulas matemáticas y geometría, donde cada línea, curva y color se representa mediante ecuaciones. El ordenador "dibuja" la imagen en tiempo real siguiendo estas instrucciones, eliminando el concepto de píxeles.</li>
        </ul>
      </Section>

      <Section>
        <SectionTitle>La Magia de los Vectores: Precisión Matemática</SectionTitle>
        <p>Cada elemento en una imagen vectorial está definido mediante coordenadas, curvas de Bézier y ecuaciones algebraicas:</p>
        <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80 mt-4">
            <li><strong>Líneas y curvas:</strong> Controladas con Bézier curves (curvas paramétricas que permiten suavidad y control preciso).</li>
            <li><strong>Formas geométricas:</strong> Círculos, rectángulos, polígonos, cada uno definido por coordenadas exactas.</li>
            <li><strong>Colores y degradados:</strong> Representados como propiedades independientes de cada objeto, permitiendo ajustes rápidos y consistentes.</li>
        </ul>
        <p className="mt-4">
            Esto significa que una imagen vectorial puede escalar infinitamente sin perder definición, desde un favicon de 16x16 px hasta un cartel de 20 metros de ancho, con nitidez absoluta.
        </p>
      </Section>

      <Section>
        <SectionTitle>Ventajas Técnicas de las Imágenes Vectoriales</SectionTitle>
        
        <SubTitle>1. Escalabilidad Infinita</SubTitle>
        <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80">
            <li>Perfecta para branding, señalética y publicidad.</li>
            <li>Garantiza que logos, iconos e ilustraciones mantengan nitidez en cualquier dispositivo o resolución, incluyendo pantallas retina y 4K.</li>
        </ul>

        <SubTitle>2. Tamaño de Archivo Reducido</SubTitle>
        <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80">
            <li>Al almacenar ecuaciones y no píxeles, los archivos vectoriales (como SVG) son mucho más ligeros que imágenes rasterizadas de alta resolución.</li>
            <li>Esto optimiza el rendimiento web, mejora el tiempo de carga, y favorece el SEO en páginas con gráficos intensivos.</li>
        </ul>

        <SubTitle>3. Edición Flexible</SubTitle>
        <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80">
            <li>Cada objeto dentro de un SVG puede ser seleccionado y modificado independientemente, sin afectar otros elementos.</li>
            <li>Cambiar colores, grosores de línea, formas o aplicar máscaras es rápido y preciso, ideal para iteraciones rápidas de diseño y versiones alternativas de un mismo gráfico.</li>
        </ul>

        <SubTitle>4. Ideal para Animación e Interactividad</SubTitle>
        <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80">
            <li>Los elementos de un SVG son manipulables con CSS y JavaScript, permitiendo:</li>
            <li className="ml-5">Animaciones vectoriales complejas (rotaciones, traslaciones, escalados).</li>
            <li className="ml-5">Microinteracciones y efectos hover en interfaces web.</li>
            <li className="ml-5">Integración con frameworks modernos como React, Vue o Angular para interfaces dinámicas.</li>
        </ul>

        <SubTitle>5. Compatibilidad y Estándar de la Industria</SubTitle>
        <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80">
            <li>Formatos como SVG, AI, EPS y PDF vectorial son ampliamente soportados en software de diseño, herramientas de maquetación y navegadores modernos.</li>
            <li>Facilitan la integración de gráficos en UI/UX, impresión profesional y marketing digital.</li>
        </ul>
      </Section>

      <Section>
        <SectionTitle>Casos de Uso Recomendados</SectionTitle>
        <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80">
            <li><strong>Logotipos y branding:</strong> Garantiza consistencia visual en todos los medios.</li>
            <li><strong>Iconografía e interfaces:</strong> Perfecto para UI/UX escalable y responsive.</li>
            <li><strong>Ilustraciones y gráficos técnicos:</strong> Diagramas, mapas y planos que requieren precisión absoluta.</li>
            <li><strong>Animaciones web:</strong> SVG permite crear experiencias interactivas y microinteracciones ligeras, esenciales para e-commerce y aplicaciones modernas.</li>
        </ul>
      </Section>
      
      <Section>
        <SectionTitle>Conclusión</SectionTitle>
        <HighlightCard>
            Las imágenes vectoriales representan la base del diseño profesional moderno. Su combinación de precisión matemática, escalabilidad infinita, tamaño eficiente y manipulación programática las hace esenciales para branding, UI/UX, animación web y aplicaciones multiplataforma.
        </HighlightCard>
        <p>
            Entender y aplicar vectores correctamente no solo mejora la calidad visual, sino que también optimiza el rendimiento, la interactividad y la experiencia de usuario, posicionando cualquier proyecto digital a un nivel superior.
        </p>
      </Section>
    </div>
  );
}
