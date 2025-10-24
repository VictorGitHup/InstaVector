import React from 'react';
import { Printer, Scaling, Palette, Scissors, CheckCircle } from 'lucide-react';

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
        "<strong>Convertir todos los textos en trazados (outlines):</strong> Este es el paso más crítico. Asegura que la tipografía se renderice exactamente como fue diseñada, eliminando cualquier dependencia de fuentes que puedan no estar instaladas en la máquina de impresión.",
        "<strong>Especificar el perfil de color adecuado:</strong> Para impresión, los gráficos deben estar en modo de color CMYK. Aunque los SVG son nativos de RGB, es crucial trabajar con equivalencias CMYK en el diseño y asegurarse de que la imprenta pueda gestionar la conversión correctamente. Para colores corporativos específicos, utiliza referencias Pantone.",
        "<strong>Simplificar geometrías y reducir nodos:</strong> Un SVG con menos puntos de anclaje y trazados más simples será procesado más rápidamente por el software RIP (Raster Image Processor) de la impresora y por las máquinas de corte, reduciendo la probabilidad de errores.",
        "<strong>Expandir trazos y contornos:</strong> Los trazos (strokes) deben convertirse en formas rellenas (fills). Esto asegura que el grosor de las líneas se mantenga proporcional al escalar y no se interprete incorrectamente por el software de producción.",
        "<strong>Evitar efectos rasterizados dentro del SVG:</strong> Efectos como sombras paralelas complejas o desenfoques gaussianos a menudo se rasterizan durante la exportación. Es preferible recrear estos efectos utilizando gradientes vectoriales nativos para mantener la naturaleza 100% vectorial del archivo.",
        "<strong>Optimizar el archivo final:</strong> Antes de enviarlo a producción, utiliza herramientas como SVGO o la función 'Guardar como' optimizada de tu editor para eliminar metadatos innecesarios, comentarios y definiciones no utilizadas, resultando en un archivo más limpio y ligero.",
        "<strong>Comunicación con la imprenta:</strong> Consulta siempre las especificaciones técnicas del proveedor de impresión. Pregunta sobre sus formatos preferidos (SVG, PDF vectorial, EPS), perfiles de color y cualquier requisito específico de su flujo de trabajo.",
    ];

  return (
    <div className="space-y-12">
      <Section>
        <h2 className="text-3xl font-bold text-foreground pb-2">El SVG como Estándar de Precisión para la Impresión y la Señalética</h2>
        <p>
            En el mundo de la señalética, la rotulación y la impresión a gran formato, la calidad y la precisión no son negociables. Ya sea para un banner publicitario que cubrirá la fachada de un edificio, un vinilo para vehículos con cortes complejos o una simple señal de interior, el resultado final debe ser impecable. Durante años, formatos como EPS y PDF vectorial dominaron este campo, pero el SVG (Scalable Vector Graphics) ha emergido como una alternativa moderna, flexible y altamente eficiente.
        </p>
        <HighlightCard>
            A diferencia de los formatos rasterizados como JPG o TIFF, que se basan en una rejilla fija de píxeles y se degradan al escalar, el SVG describe los gráficos mediante código y ecuaciones matemáticas. Esto le confiere la propiedad de la escalabilidad infinita, garantizando que un diseño mantenga una nitidez absoluta sin importar si se imprime en una tarjeta de visita o en una lona de diez metros.
        </HighlightCard>
      </Section>

      <Section>
        <SectionTitle>Ventajas Técnicas del Formato SVG en Flujos de Producción</SectionTitle>
        
        <SubTitle icon={<Scaling className="h-6 w-6" />}>1. Escalabilidad Perfecta y Precisión Matemática</SubTitle>
        <p>
            El corazón del SVG es su naturaleza vectorial. Cada línea, curva y forma se define por coordenadas matemáticas, no por píxeles. Esto significa que el archivo no tiene una "resolución" inherente. Al enviarlo a una impresora de gran formato o a una máquina de corte por plotter, el software interpreta estas instrucciones y renderiza el gráfico al tamaño exacto requerido, con bordes perfectamente definidos y sin ningún tipo de artefacto de compresión o pixelación. Esta es la razón por la que el SVG es ideal para logotipos y textos en cualquier escala.
        </p>

        <SubTitle icon={<Printer className="h-6 w-6" />}>2. Compatibilidad con Software Profesional y Maquinaria</SubTitle>
        <p>
            Los archivos SVG son compatibles con todo el ecosistema de diseño y producción profesional. Se pueden crear y editar en Adobe Illustrator, CorelDRAW, Affinity Designer o el software de código abierto Inkscape. Más importante aún, son interpretados correctamente por el software RIP (Raster Image Processor) que utilizan las impresoras de gran formato y por los sistemas que controlan las máquinas de corte láser, routers CNC y plotters de corte de vinilo. Esto asegura una transición fluida desde el diseño en pantalla hasta el producto físico.
        </p>

        <SubTitle icon={<Palette className="h-6 w-6" />}>3. Gestión del Color y Consistencia de Marca</SubTitle>
        <p>
            Aunque el SVG es un formato nativo para web (RGB), puede ser diseñado teniendo en cuenta el espacio de color de impresión (CMYK). Los diseñadores pueden trabajar con paletas CMYK y, al exportar a un formato de producción como PDF vectorial desde el SVG, los perfiles de color ICC pueden ser incrustados para garantizar una correspondencia cromática fiel. Para el branding, esto es crucial, ya que permite mantener la consistencia de los colores corporativos (incluso especificando valores Pantone) en todos los materiales impresos.
        </p>

        <SubTitle icon={<Scissors className="h-6 w-6" />}>4. Eficiencia en Producción y Procesos de Corte</SubTitle>
        <p>
            La estructura XML del SVG lo hace ligero y fácil de procesar. Para la señalética que requiere corte (como letras corpóreas o vinilos adhesivos), el archivo SVG contiene los trazados exactos que la máquina de corte seguirá. Un archivo SVG limpio y optimizado, con un número mínimo de nodos, permite que la máquina funcione de manera más rápida y precisa, reduciendo el tiempo de producción y minimizando el riesgo de errores en los cortes complejos.
        </p>
      </Section>
      
      <Section>
        <SectionTitle>Checklist de Buenas Prácticas para Preparar SVG para Impresión</SectionTitle>
        <p>Para garantizar que tu archivo SVG se traduzca en un resultado impreso o cortado de alta calidad, es fundamental seguir un riguroso proceso de preparación técnica:</p>
        <div className="my-6">
            <PracticeList items={practices} />
        </div>
      </Section>
      
      <Section>
        <SectionTitle>Conclusión: SVG como Garantía de Calidad Física</SectionTitle>
        <HighlightCard>
            El uso del formato SVG en la señalética y la impresión profesional no es solo una tendencia, es una evolución hacia flujos de trabajo más eficientes, precisos y versátiles. Su capacidad para mantener una calidad impecable a cualquier escala, junto con su compatibilidad con el software y la maquinaria de producción, lo posiciona como el estándar ideal para cualquier proyecto que deba pasar del mundo digital al físico.
        </HighlightCard>
        <p>
            Adoptar el SVG es apostar por un estándar gráfico que garantiza resultados profesionales, optimiza los costos de producción y asegura la coherencia de marca en cualquier soporte. En un campo donde la precisión es la medida de la calidad, el SVG ofrece la certeza matemática de un trabajo bien hecho.
        </p>
      </Section>
    </div>
  );
}
