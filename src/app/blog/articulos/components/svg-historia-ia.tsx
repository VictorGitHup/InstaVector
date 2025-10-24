import React from 'react';
import { Clock, Code, Cpu, Bot, Globe, Zap } from 'lucide-react';

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

const TimelineItem = ({ year, title, children }: { year: string, title: string, children: React.ReactNode }) => (
    <li className="flex gap-4">
        <div className="flex flex-col items-center">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">{year}</div>
            <div className="w-px h-full bg-border"></div>
        </div>
        <div className="pb-10">
            <h4 className="font-semibold text-xl text-foreground mb-1">{title}</h4>
            <div className="text-foreground/80">{children}</div>
        </div>
    </li>
);

export default function SvgHistoriaIa() {
  return (
    <div className="space-y-12">
      <Section>
        <p>
            El formato SVG (Scalable Vector Graphics) es hoy una de las tecnologías fundamentales de la web moderna, pero su camino hasta convertirse en un estándar universal ha sido una fascinante travesía de innovación, competencia y visión a largo plazo. A diferencia de las imágenes rasterizadas (como JPEG o PNG), que son un mosaico estático de píxeles, los SVG son documentos de texto basados en XML que describen gráficos mediante vectores matemáticos.
        </p>
        <HighlightCard>
            Esta naturaleza programática le confiere al SVG sus superpoderes: escalabilidad infinita sin pérdida de calidad, un tamaño de archivo optimizado, y la capacidad de ser manipulado y animado con código. Hoy, esta evolución se acelera exponencialmente gracias a la inteligencia artificial, que está redefiniendo los límites de lo que es posible crear y automatizar en el diseño vectorial.
        </HighlightCard>
      </Section>

      <Section>
        <SectionTitle>El Origen: La Batalla por un Estándar Vectorial para la Web</SectionTitle>
        <p>
            A finales de los años 90, la web era un lugar estático. El diseño gráfico avanzado y las animaciones dependían casi exclusivamente de tecnologías propietarias y plugins externos, principalmente Adobe Flash (SWF). Flash era potente, pero también una "caja negra" que no se integraba con el HTML, era inaccesible para los motores de búsqueda y planteaba problemas de seguridad y rendimiento.
        </p>
        <p>
            En este contexto, el World Wide Web Consortium (W3C), el organismo de estandarización de la web, reconoció la necesidad de un formato vectorial abierto que fuera nativo de la web. En 1998, se formó el grupo de trabajo de SVG, que evaluó varias propuestas, incluyendo VML (Vector Markup Language) de Microsoft y PGML (Precision Graphics Markup Language) de Adobe. El resultado fue la creación de SVG, un nuevo lenguaje que combinaba lo mejor de estas propuestas en un estándar unificado basado en XML.
        </p>
        
        <SubTitle icon={<Clock className="h-6 w-6" />}>Línea de Tiempo Técnica del SVG</SubTitle>
        <ul className="mt-6 -ml-4">
            <TimelineItem year="1998" title="Nacimiento del Estándar">El W3C inicia el grupo de trabajo para desarrollar un formato vectorial para la web, buscando una alternativa abierta a las tecnologías propietarias.</TimelineItem>
            <TimelineItem year="2001" title="SVG 1.0: La Primera Recomendación">Se publica la primera versión oficial del estándar SVG. Define la sintaxis XML para describir formas, trazados y texto, pero su adopción por los navegadores es lenta y requiere plugins.</TimelineItem>
            <TimelineItem year="2003" title="SVG 1.1: Modularidad y Mejoras">Se lanza SVG 1.1, que refina la especificación y la divide en módulos, sentando las bases para perfiles más específicos como SVG Tiny y Basic, diseñados para dispositivos móviles con recursos limitados.</TimelineItem>
            <TimelineItem year="2011" title="La Revolución de HTML5">Con el auge de HTML5 y el declive de Flash, los navegadores modernos comienzan a implementar el soporte nativo para SVG. Esto marca un punto de inflexión: los SVG ahora pueden ser incrustados directamente en el HTML y manipulados con CSS y JavaScript, sin necesidad de plugins.</TimelineItem>
            <li className="flex gap-4">
                <div className="flex flex-col items-center">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">Hoy</div>
                </div>
                <div className="pb-10">
                    <h4 className="font-semibold text-xl text-foreground mb-1">SVG 2 y la Integración Total</h4>
                    <div className="text-foreground/80">La especificación de SVG 2 (aún en desarrollo) busca alinear SVG aún más con los estándares web modernos como CSS3, mejorando la integración de filtros, gradientes y animaciones. SVG es ahora una tecnología madura y omnipresente en el desarrollo web.</div>
                </div>
            </li>
        </ul>
      </Section>

       <Section>
        <SectionTitle>La Convergencia de SVG y la Inteligencia Artificial</SectionTitle>
        <p>Si la historia del SVG ha sido una evolución constante, la llegada de la inteligencia artificial (IA) representa una revolución. Los modelos de IA, especialmente en el campo de la visión por computadora (Computer Vision), están transformando radicalmente la forma en que creamos y trabajamos con gráficos vectoriales.</p>
        <SubTitle icon={<Bot className="h-6 w-6" />}>1. Vectorización Inteligente Automatizada</SubTitle>
        <p>La conversión de una imagen rasterizada a vectorial (proceso conocido como vectorización o trazado) ha sido tradicionalmente un trabajo manual y tedioso. Las primeras herramientas automáticas, como el calco de imagen de Illustrator, a menudo producían resultados con demasiados nodos o imprecisiones. La IA ha cambiado esto.</p>
        <p>Herramientas modernas como <strong>Vectorizer.AI</strong>, <strong>Vector Magic</strong>, e incluso nuestro propio <strong>InstaVector</strong>, utilizan redes neuronales convolucionales (CNNs) entrenadas con millones de imágenes. Estos modelos no solo detectan bordes y colores; "comprenden" las formas subyacentes, permitiéndoles reconstruir una imagen rasterizada en vectores limpios, optimizados y geométricamente precisos con una calidad que rivaliza con el trabajo manual, pero en cuestión de segundos.</p>

        <SubTitle icon={<Cpu className="h-6 w-6" />}>2. Diseño Generativo: de Texto a Vector</SubTitle>
        <p>La IA generativa, popularizada por modelos como DALL·E y Midjourney, también está llegando al mundo vectorial. Plataformas como Adobe Firefly o herramientas especializadas están comenzando a ofrecer la capacidad de generar gráficos vectoriales a partir de descripciones de texto (prompts). Un diseñador puede escribir "un logotipo minimalista de un zorro en estilo origami" y recibir un archivo SVG editable como resultado. Esto acelera drásticamente la fase de ideación y prototipado, permitiendo a los creativos explorar docenas de conceptos en minutos.</p>

        <SubTitle icon={<Zap className="h-6 w-6" />}>3. Optimización y Compresión Semántica</SubTitle>
        <p>La IA también puede optimizar los SVG existentes. Un algoritmo puede analizar el código XML de un SVG y realizar optimizaciones semánticas: identificar nodos redundantes en un trazado, combinar formas superpuestas, o simplificar curvas complejas sin una pérdida visual perceptible. Esto va más allá de la simple minificación, ya que la IA "entiende" el impacto visual de sus cambios, resultando en archivos más pequeños y performantes.</p>
      </Section>
      
      <Section>
        <SectionTitle>Conclusión: El Futuro del SVG es Inteligente y Automatizado</SectionTitle>
        <HighlightCard>
            El SVG ha recorrido un largo camino desde ser una prometedora especificación del W3C hasta convertirse en una tecnología indispensable para el diseño web, la visualización de datos y las interfaces interactivas. Su naturaleza abierta, programable y performante lo ha hecho el formato ideal para la web moderna.
        </HighlightCard>
        <p>
            Hoy, estamos en el umbral de una nueva era. La fusión del SVG con la inteligencia artificial está automatizando tareas que antes requerían horas de trabajo manual, abriendo nuevas fronteras para la creatividad con el diseño generativo y optimizando nuestros activos gráficos de maneras que antes eran impensables. El SVG ya no es solo un formato de archivo; se está convirtiendo en un lenguaje visual inteligente, capaz de adaptarse, optimizarse y ser generado por sistemas que entienden el diseño. El futuro del diseño gráfico es, sin duda, vectorial, y será impulsado por la IA.
        </p>
      </Section>
    </div>
  );
}
