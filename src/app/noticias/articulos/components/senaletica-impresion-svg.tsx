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

export default function SenaleticaImpresionSvg() {
    const practices = [
        "<strong>Convertir textos en trazados (outlines):</strong> Evita la dependencia de fuentes externas y asegura que las tipografías se mantengan exactas en todos los sistemas.",
        "<strong>Usar perfiles de color CMYK o Pantone:</strong> Asegura una correspondencia cromática fiel al diseño original.",
        "<strong>Simplificar geometrías complejas:</strong> Menos nodos implican un renderizado más rápido y preciso en equipos de corte o impresión.",
        "<strong>Evitar efectos rasterizados dentro del SVG:</strong> Sombras o desenfoques deben aplicarse mediante gradientes o filtros vectoriales nativos.",
        "<strong>Comprimir y optimizar el archivo:</strong> Utiliza herramientas como SVGO o NanoSVG para reducir peso sin alterar la calidad visual.",
    ];

  return (
    <div className="space-y-12">
      <Section>
        <h2 className="text-3xl font-bold text-foreground pb-2">El poder del SVG en la impresión moderna</h2>
        <p>
            En el ámbito de la señalética y la impresión a gran formato, la precisión visual y la consistencia de los colores son factores determinantes para garantizar resultados de alta calidad. Ya sea un banner publicitario, una lona, un vinilo vehicular o un letrero institucional, el formato SVG (Scalable Vector Graphics) se ha convertido en una herramienta esencial para asegurar gráficos nítidos, escalables y listos para producción en cualquier tamaño o soporte.
        </p>
        <p>
            A diferencia de los formatos rasterizados como JPG, PNG o TIFF, que dependen de una resolución fija en píxeles, el SVG describe las imágenes mediante instrucciones matemáticas y coordenadas vectoriales (paths, shapes, strokes, fills). Esto significa que cada elemento del diseño —líneas, textos, curvas o gradientes— se representa de forma infinitamente escalable, sin pérdida de definición ni artefactos de interpolación al ampliarse.
        </p>
      </Section>

      <Section>
        <SectionTitle>Ventajas Técnicas del Formato SVG en Impresión</SectionTitle>
        
        <SubTitle>1. Escalabilidad y Precisión Matemática</SubTitle>
        <p>
            El SVG utiliza ecuaciones paramétricas para definir cada punto, curva y contorno, lo que garantiza que el resultado impreso conserve su nitidez sin importar el tamaño del soporte. Este principio lo convierte en el formato ideal para señales de gran formato, rotulación vehicular o gráficas urbanas, donde la precisión de los bordes es esencial.
        </p>

        <SubTitle>2. Integración con Software de Producción Profesional</SubTitle>
        <p>
            Los archivos SVG son compatibles con los principales entornos de diseño y producción como Adobe Illustrator, CorelDRAW, Affinity Designer e Inkscape, así como con flujos de trabajo de impresión digital o corte por plotter. Además, permiten una exportación directa a PDF vectorial o EPS, formatos ampliamente utilizados en preimpresión.
        </p>

        <SubTitle>3. Optimización de Colores y Capas</SubTitle>
        <p>
            Los SVG pueden incorporar perfiles de color ICC y configuraciones CMYK, permitiendo una representación fiel del color durante la impresión. Esta característica es clave para mantener la identidad cromática de la marca, especialmente en materiales corporativos donde la coherencia visual es un estándar.
        </p>

        <SubTitle>4. Eficiencia en Producción y Procesamiento</SubTitle>
        <p>
            Debido a su estructura basada en XML, los SVG son ligeros y modulares, facilitando su manipulación, edición o automatización mediante scripts o software de impresión asistida. Esto reduce los tiempos de procesamiento y mejora la velocidad de renderizado en máquinas de corte láser, routers CNC o impresoras UV de gran formato.
        </p>
      </Section>
      
      <Section>
        <SectionTitle>Buenas Prácticas para Imprimir con SVG</SectionTitle>
        <p>Para garantizar resultados profesionales al imprimir o producir señalética a partir de archivos SVG, se recomienda seguir ciertas pautas técnicas:</p>
        <PracticeList items={practices} />
      </Section>
      
      <Section>
        <SectionTitle>Conclusión</SectionTitle>
        <HighlightCard>
            El uso del formato SVG en la señalética y la impresión profesional no solo mejora la calidad visual, sino que también optimiza los flujos de trabajo, reduce los costos de producción y asegura la coherencia de marca a cualquier escala.
        </HighlightCard>
        <p>
            Adoptar SVG es apostar por un estándar gráfico moderno, flexible y preparado para el futuro, donde la frontera entre lo digital y lo físico se difumina, y la precisión vectorial se convierte en sinónimo de excelencia visual.
        </p>
      </Section>
    </div>
  );
}
