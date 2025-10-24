import React from 'react';
import { Layers, Maximize, FileJson, Edit, Film } from 'lucide-react';

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

const ComparisonTable = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <div className="border p-6 rounded-lg bg-card/50">
            <h4 className="font-bold text-xl mb-4 text-center">Raster (JPEG, PNG, GIF)</h4>
            <ul className="space-y-3 text-foreground/80">
                <li><strong>Estructura:</strong> Rejilla de píxeles (mapa de bits).</li>
                <li><strong>Escalabilidad:</strong> Limitada. Se pixela al ampliar.</li>
                <li><strong>Edición:</strong> A nivel de píxel (difícil modificar formas individuales).</li>
                <li><strong>Tamaño de archivo:</strong> Grande para alta resolución.</li>
                <li><strong>Uso ideal:</strong> Fotografías, pinturas digitales, texturas complejas.</li>
            </ul>
        </div>
        <div className="border p-6 rounded-lg bg-card/50">
            <h4 className="font-bold text-xl mb-4 text-center">Vectorial (SVG, AI, EPS)</h4>
            <ul className="space-y-3 text-foreground/80">
                <li><strong>Estructura:</strong> Ecuaciones matemáticas y geometría.</li>
                <li><strong>Escalabilidad:</strong> Infinita, sin pérdida de calidad.</li>
                <li><strong>Edición:</strong> A nivel de objeto (fácil modificar formas, colores y líneas).</li>
                <li><strong>Tamaño de archivo:</strong> Pequeño y eficiente.</li>
                <li><strong>Uso ideal:</strong> Logotipos, iconos, ilustraciones, tipografía, animaciones.</li>
            </ul>
        </div>
    </div>
);

export default function QueEsVectorial() {
  return (
    <div className="space-y-12">
      <Section>
        <h2 className="text-3xl font-bold text-foreground pb-2">Gráficos Digitales: El Duelo entre Píxeles y Vectores</h2>
        <p>
            En el vasto universo del diseño digital, todas las imágenes se pueden clasificar en dos grandes familias: <strong>rasterizadas</strong> y <strong>vectoriales</strong>. Comprender la diferencia fundamental entre ambas no es un mero detalle técnico; es un conocimiento esencial que define la calidad, la eficiencia y la escalabilidad de cualquier proyecto gráfico profesional. La elección incorrecta puede llevar a logotipos pixelados, sitios web lentos y una frustrante falta de flexibilidad.
        </p>
        <HighlightCard>
            En esencia, la diferencia radica en cómo se almacena y se renderiza la información de la imagen. Mientras que las imágenes rasterizadas son un mosaico de píxeles estáticos, las imágenes vectoriales son un conjunto de instrucciones matemáticas dinámicas que el ordenador "dibuja" en tiempo real.
        </HighlightCard>
      </Section>
      
      <ComparisonTable />

      <Section>
        <SectionTitle>La Magia de los Vectores: Gráficos Definidos por la Lógica</SectionTitle>
        <p>Para entender por qué los vectores son tan poderosos, debemos pensar en ellos no como una imagen, sino como una receta. Cada elemento en una imagen vectorial (como un archivo SVG) está definido mediante código y geometría:</p>
        <ul className="list-disc list-outside pl-5 space-y-3 text-foreground/80 mt-4">
            <li><strong>Líneas y Curvas:</strong> Se definen mediante coordenadas y curvas de Bézier, que son ecuaciones paramétricas que permiten trazar curvas suaves y precisas con muy pocos puntos de control. Esto es lo que permite que una curva se mantenga perfecta sin importar cuánto la amplíes.</li>
            <li><strong>Formas Geométricas:</strong> Un círculo no es un conjunto de píxeles, sino una instrucción matemática que define su centro, su radio y su color. Un rectángulo se define por su posición, su ancho y su alto.</li>
            <li><strong>Colores y Degradados:</strong> El color de relleno (<code>fill</code>) y el trazo (<code>stroke</code>) son propiedades de estos objetos matemáticos. Se pueden cambiar fácilmente modificando un simple atributo en el código, sin necesidad de "repintar" píxeles.</li>
        </ul>
        <p className="mt-4">
            Esta estructura basada en la lógica significa que cuando escalas una imagen vectorial, el ordenador simplemente recalcula las ecuaciones para el nuevo tamaño. No estira píxeles; redibuja la imagen desde cero con la misma precisión, garantizando una nitidez absoluta, ya sea en un favicon de 16x16 píxeles o en una lona publicitaria de 20 metros.
        </p>
      </Section>

      <Section>
        <SectionTitle>Ventajas Técnicas Clave de las Imágenes Vectoriales</SectionTitle>
        
        <SubTitle icon={<Maximize className="h-6 w-6" />}>1. Escalabilidad Infinita y Consistencia de Marca</SubTitle>
        <p>Esta es la ventaja más conocida y crítica. Un único archivo vectorial de un logotipo puede ser usado para la tarjeta de visita, el sitio web, la aplicación móvil y una valla publicitaria. Esto garantiza una consistencia de marca impecable en todos los medios, un pilar fundamental del branding profesional. No hay necesidad de gestionar múltiples archivos de diferentes tamaños y resoluciones.</p>

        <SubTitle icon={<FileJson className="h-6 w-6" />}>2. Tamaño de Archivo Drásticamente Reducido</SubTitle>
        <p>Almacenar ecuaciones es mucho más eficiente que almacenar información para millones de píxeles individuales. Por ello, los archivos vectoriales, especialmente los SVG optimizados para la web, son increíblemente ligeros en comparación con imágenes rasterizadas de alta resolución. Esto se traduce directamente en un mejor rendimiento web, tiempos de carga más rápidos y una mejor puntuación en los Core Web Vitals de Google, lo que favorece el SEO.</p>

        <SubTitle icon={<Edit className="h-6 w-6" />}>3. Edición No Destructiva y Flexible</SubTitle>
        <p>En un editor vectorial, cada forma, línea o texto es un objeto independiente. Puedes seleccionar, mover, redimensionar, rotar o cambiar el color de cualquier elemento sin afectar al resto de la imagen. Este flujo de trabajo no destructivo es ideal para iteraciones rápidas de diseño, creación de variaciones de un logotipo o ajuste de ilustraciones complejas, ofreciendo una flexibilidad que es imposible de lograr con imágenes rasterizadas.</p>

        <SubTitle icon={<Film className="h-6 w-6" />}>4. Potencial Ilimitado para Animación e Interactividad</SubTitle>
        <p>Dado que los elementos de un SVG son objetos del DOM (Document Object Model) en un navegador, pueden ser manipulados con CSS y JavaScript. Esto abre un mundo de posibilidades:</p>
        <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80 mt-2">
            <li>Crear animaciones vectoriales complejas y de alto rendimiento.</li>
            <li>Implementar microinteracciones y efectos hover que mejoran la experiencia de usuario.</li>
            <li>Desarrollar visualizaciones de datos interactivas y dinámicas.</li>
        </ul>

        <SubTitle icon={<Layers className="h-6 w-6" />}>5. Estándar Abierto y Compatibilidad Universal</SubTitle>
        <p>Formatos como SVG son estándares abiertos del W3C, lo que garantiza su compatibilidad con todos los navegadores modernos y una amplia gama de software de diseño y desarrollo. Esto facilita la integración de gráficos en cualquier flujo de trabajo, desde el diseño de UI/UX hasta la impresión profesional y el marketing digital, sin depender de software propietario.</p>
      </Section>
      
      <Section>
        <SectionTitle>Conclusión: Vectores como Lenguaje del Diseño Profesional</SectionTitle>
        <HighlightCard>
            Las imágenes vectoriales no son simplemente un "tipo" de imagen; son la base del diseño gráfico profesional y escalable. Su combinación única de precisión matemática, eficiencia de archivo, flexibilidad de edición y potencial interactivo las convierte en la herramienta indispensable para cualquier proyecto de branding, desarrollo web, UI/UX o animación.
        </HighlightCard>
        <p>
            Comprender y saber cuándo utilizar gráficos vectoriales frente a los rasterizados es lo que distingue a un aficionado de un profesional. En un mundo multidispositivo y enfocado en el rendimiento, dominar los vectores no es una opción, sino una necesidad para crear experiencias digitales de alta calidad, rápidas y visualmente impecables.
        </p>
      </Section>
    </div>
  );
}
