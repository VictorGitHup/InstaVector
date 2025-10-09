
export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  authorImageUrl: string;
  coverImageUrl: string;
  coverImageHint: string;
  content: string; 
}

export const articles: Article[] = [
  {
    slug: 'que-es-vectorial',
    title: '¿Qué es una Imagen Vectorial y por qué es Crucial para el Diseño?',
    description: 'Descubre los fundamentos de los gráficos vectoriales, sus ventajas sobre las imágenes rasterizadas y por qué son el estándar de la industria para logos y diseños escalables.',
    date: '2024-07-28',
    author: 'Elena Diz',
    authorImageUrl: 'https://picsum.photos/seed/author1/40/40',
    coverImageUrl: 'https://picsum.photos/seed/vector1/1200/630',
    coverImageHint: 'abstract vector',
    content: `
        <p class="lead">En el mundo del diseño digital, existen dos grandes familias de imágenes: las rasterizadas y las vectoriales. Comprender su diferencia no es solo un detalle técnico, es la clave para crear gráficos profesionales, eficientes y escalables.</p>
        <h2>La Magia de los Vectores: Gráficos basados en Matemáticas</h2>
        <p>A diferencia de las imágenes JPEG o PNG, que están compuestas por una rejilla de píxeles (puntos de color), las imágenes vectoriales se basan en fórmulas matemáticas. Cada línea, curva, punto y color se define mediante una ecuación. Esto significa que no existen píxeles; en su lugar, el ordenador "dibuja" la imagen en tiempo real basándose en estas instrucciones.</p>
        <p>El resultado es una calidad de imagen perfecta, sin importar cuánto la amplíes. Un logo vectorial se verá igual de nítido en una pequeña tarjeta de visita que en una valla publicitaria gigante.</p>
        <h3>Ventajas Clave de las Imágenes Vectoriales:</h3>
        <ul class="space-y-2 list-disc list-inside">
          <li><strong>Escalabilidad Infinita:</strong> La ventaja más conocida. Sin pixelación ni pérdida de calidad, sin importar el tamaño.</li>
          <li><strong>Tamaño de Archivo Reducido:</strong> Almacenan ecuaciones, no miles de píxeles. Por ello, los archivos SVG (Scalable Vector Graphics) suelen ser mucho más ligeros que sus equivalentes en alta resolución (PNG, JPG), optimizando drásticamente la velocidad de carga de una página web.</li>
          <li><strong>Edición Flexible:</strong> Puedes modificar fácilmente colores, formas, grosores de línea y cualquier otro atributo de un objeto vectorial de forma independiente, sin afectar al resto del diseño y sin necesidad de redibujar nada.</li>
          <li><strong>Ideal para Animación e Interactividad:</strong> Los elementos de un SVG pueden ser manipulados individualmente con CSS y JavaScript para crear animaciones complejas y experiencias de usuario dinámicas.</li>
        </ul>
        <h2>¿Cuándo usar Gráficos Vectoriales?</h2>
        <p>Los gráficos vectoriales son el estándar de oro para logotipos, iconografía, ilustraciones y cualquier diseño que necesite ser versátil y aplicarse en múltiples tamaños y medios. Son la base del branding moderno y del diseño de interfaces (UI/UX).</p>
    `,
  },
  {
    slug: 'svg-para-animaciones',
    title: 'Cómo Usar SVG para Crear Animaciones Web Interactivas',
    description: 'Sumérgete en el mundo de las animaciones SVG. Aprende a dar vida a tus ilustraciones y logos usando CSS y JavaScript para crear experiencias de usuario memorables.',
    date: '2024-07-27',
    author: 'Marcos Ruiz',
    authorImageUrl: 'https://picsum.photos/seed/author2/40/40',
    coverImageUrl: 'https://picsum.photos/seed/anim2/1200/630',
    coverImageHint: 'dynamic animation',
    content: `
        <p class="lead">El formato SVG (Scalable Vector Graphics) no es solo para imágenes estáticas. Su estructura, basada en XML, es su superpoder, ya que te permite acceder y manipular cada parte de la imagen con código. Esto abre un universo de posibilidades para la animación web que va mucho más allá de los GIFs o los vídeos.</p>
        <h2>Dando Vida a tus Gráficos con Código</h2>
        <p>Animar un SVG es, en esencia, cambiar sus propiedades a lo largo del tiempo. Puedes hacerlo principalmente de dos maneras: con CSS, la opción más sencilla y performante, o con JavaScript, para un control total y una interactividad avanzada.</p>
        <h3>Técnicas de Animación Populares:</h3>
        <ul class="space-y-2 list-disc list-inside">
          <li><strong>Animaciones con CSS (Transiciones y Keyframes):</strong> Es la forma más directa. Puedes animar atributos como el color de relleno (<code>fill</code>), el trazo (<code>stroke</code>), la opacidad (<code>opacity</code>) o la posición (<code>transform</code>). Es ideal para efectos de hover, bucles simples o secuencias predefinidas.</li>
          <li><strong>Animación de Trazados (Path Animation):</strong> Esta técnica, a menudo llamada "efecto de dibujado", es muy popular. Utilizando las propiedades CSS <code>stroke-dasharray</code> y <code>stroke-dashoffset</code>, puedes hacer que las líneas de un SVG parezcan dibujarse en tiempo real. Es perfecta para logos, firmas o para guiar la atención del usuario.</li>
          <li><strong>JavaScript para Interactividad Avanzada:</strong> Para animaciones que necesitan responder a la interacción del usuario (como seguir el cursor, reaccionar a un clic o cambiar según el scroll), JavaScript es la herramienta. Bibliotecas como <strong>GSAP (GreenSock Animation Platform)</strong> se han convertido en el estándar de la industria, ya que ofrecen un control granular sobre cada aspecto de la animación, una gran compatibilidad entre navegadores y un rendimiento excepcional.</li>
        </ul>
        <h2>¿Por qué animar SVGs?</h2>
        <p>Al combinar la escalabilidad de los vectores con el poder de la animación web, puedes crear interfaces más atractivas, contar historias de una manera visualmente impactante y diferenciar tu sitio del resto. Las microinteracciones y las animaciones sutiles mejoran enormemente la experiencia de usuario.</p>
    `,
  },
  {
    slug: 'optimizacion-svg-web',
    title: 'Optimiza tus Gráficos Web: Mejores Prácticas para UI/UX con SVG',
    description: 'Un SVG bien optimizado puede mejorar drásticamente la velocidad de carga y la experiencia de usuario. Aprende a limpiar, comprimir y estructurar tus SVG para un rendimiento máximo.',
    date: '2024-07-26',
    author: 'Laura Navarro',
    authorImageUrl: 'https://picsum.photos/seed/author3/40/40',
    coverImageUrl: 'https://picsum.photos/seed/perf3/1200/630',
    coverImageHint: 'fast loading',
    content: `
        <p class="lead">No todos los archivos SVG son iguales. Un SVG exportado directamente desde un software de diseño como Adobe Illustrator o Figma a menudo contiene código innecesario, metadatos, grupos vacíos y nodos redundantes que aumentan su peso y complejidad. Optimizarlo es un paso crucial para una web rápida y una buena experiencia de usuario.</p>
        <h2>Rendimiento y Experiencia de Usuario: El Impacto de un SVG Limpio</h2>
        <p>Un SVG pesado puede ralentizar el tiempo de renderizado de tu página, afectando negativamente al SEO y a la percepción del usuario. Un archivo limpio y optimizado, por otro lado, se carga casi instantáneamente.</p>
        <h3>Mejores Prácticas para la Optimización:</h3>
        <ul class="space-y-2 list-disc list-inside">
          <li><strong>Usa Herramientas de Optimización Automática:</strong> Antes de hacer cualquier cosa, pasa tu SVG por una herramienta como <strong>SVGOMG</strong> de Jake Archibald. Es una interfaz web para SVGO (SVG Optimizer) que te permite visualizar los cambios y eliminar elementos innecesarios como metadatos del editor, comentarios, definiciones no utilizadas y atributos por defecto.</li>
          <li><strong>Simplifica los Trazados (Paths):</strong> Reduce el número de puntos de anclaje (nodos) de tus trazados. Los programas de diseño a menudo crean más puntos de los necesarios. Simplificar las curvas sin afectar significativamente la forma puede reducir drásticamente el tamaño del archivo.</li>
          <li><strong>Define un \`viewBox\` y elimina \`width\` y \`height\`:</strong> El atributo <code>viewBox</code> es crucial para que el SVG sea escalable y responsivo. Define el sistema de coordenadas del SVG. Al eliminar los atributos <code>width</code> y <code>height</code> del tag <code>&lt;svg&gt;</code>, te aseguras de que el SVG se adapte al tamaño de su contenedor, haciéndolo verdaderamente fluido.</li>
          <li><strong>Incrusta con Inteligencia (Inline vs. \`<img>\`):</strong> Decide cómo cargarás el SVG. Si lo incrustas directamente en el HTML (inline), ahorras una petición HTTP, lo cual es genial para iconos críticos. Sin embargo, si usas una etiqueta <code>&lt;img src="logo.svg"&gt;</code>, el navegador puede cachear el archivo, lo que es más eficiente si el mismo gráfico se usa en múltiples páginas.</li>
        </ul>
        <p>Un SVG optimizado no solo carga más rápido, sino que también es más accesible, más fácil de mantener y más sencillo de manipular con CSS o JavaScript.</p>
    `,
  },
];
