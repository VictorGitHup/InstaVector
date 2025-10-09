export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: React.ReactNode;
}

export const articles: Article[] = [
  {
    slug: 'que-es-vectorial',
    title: '¿Qué es una Imagen Vectorial y por qué es Crucial para el Diseño?',
    description: 'Descubre los fundamentos de los gráficos vectoriales, sus ventajas sobre las imágenes rasterizadas y por qué son el estándar de la industria para logos y diseños escalables.',
    date: '2024-07-28',
    content: (
      <>
        <h2>La Magia de los Vectores</h2>
        <p>A diferencia de las imágenes JPEG o PNG, que están compuestas por una rejilla de píxeles, las imágenes vectoriales se basan en fórmulas matemáticas. Cada línea, curva y punto se define mediante una ecuación, lo que permite que la imagen se redimensione a cualquier tamaño sin perder absolutamente nada de calidad. Un logo vectorial se verá igual de nítido en una tarjeta de visita que en una valla publicitaria gigante.</p>
        <h3>Ventajas Clave:</h3>
        <ul className="space-y-2">
          <li><strong>Escalabilidad Infinita:</strong> Sin pixelación, sin importar cuánto amplíes la imagen.</li>
          <li><strong>Tamaño de Archivo Reducido:</strong> Los archivos SVG suelen ser más ligeros que sus equivalentes en alta resolución (PNG, JPG), optimizando la velocidad de carga web.</li>
          <li><strong>Edición Flexible:</strong> Puedes modificar fácilmente colores, formas y grosores de línea sin redibujar nada.</li>
          <li><strong>Ideal para Animación e Interactividad:</strong> Los elementos de un SVG pueden ser manipulados con CSS y JavaScript para crear experiencias dinámicas.</li>
        </ul>
      </>
    ),
  },
  {
    slug: 'svg-para-animaciones',
    title: 'Cómo Usar SVG para Crear Animaciones Web Interactivas',
    description: 'Sumérgete en el mundo de las animaciones SVG. Aprende a dar vida a tus ilustraciones y logos usando CSS y JavaScript para crear experiencias de usuario memorables.',
    date: '2024-07-27',
    content: (
       <>
        <h2>Dando Vida a tus Gráficos</h2>
        <p>El formato SVG (Scalable Vector Graphics) no es solo para imágenes estáticas. Su estructura basada en XML te permite acceder y manipular cada parte de la imagen con código. Esto abre un universo de posibilidades para la animación web.</p>
        <h3>Técnicas de Animación:</h3>
        <ul className="space-y-2">
          <li><strong>Animaciones con CSS:</strong> Usa transiciones y keyframes para animar atributos como el color de relleno (<code>fill</code>), el trazo (<code>stroke</code>) o la posición (<code>transform</code>). Es la forma más sencilla y performante para animaciones simples.</li>
          <li><strong>Animación de Trazados (Path Animation):</strong> Con propiedades como <code>stroke-dasharray</code> y <code>stroke-dashoffset</code>, puedes crear efectos de "dibujado en tiempo real", muy populares para logos y tutoriales.</li>
          <li><strong>JavaScript para Interactividad:</strong> Para animaciones complejas o que responden a la interacción del usuario (como seguir el cursor o reaccionar a un clic), bibliotecas como GSAP (GreenSock Animation Platform) ofrecen un control total y una gran compatibilidad entre navegadores.</li>
        </ul>
        <p>Al combinar la escalabilidad de los vectores con el poder de la animación web, puedes crear interfaces más atractivas y contar historias de una manera visualmente impactante.</p>
      </>
    ),
  },
  {
    slug: 'optimizacion-svg-web',
    title: 'Optimiza tus Gráficos Web: Mejores Prácticas para UI/UX con SVG',
    description: 'Un SVG bien optimizado puede mejorar drásticamente la velocidad de carga y la experiencia de usuario. Aprende a limpiar, comprimir y estructurar tus SVG para un rendimiento máximo.',
    date: '2024-07-26',
    content: (
       <>
        <h2>Rendimiento y Experiencia de Usuario</h2>
        <p>No todos los archivos SVG son iguales. Un SVG exportado directamente desde un software de diseño puede contener código innecesario, metadatos y nodos redundantes que aumentan su peso y complejidad. Optimizarlo es clave para una web rápida.</p>
        <h3>Mejores Prácticas:</h3>
        <ul className="space-y-2">
          <li><strong>Limpia el Código:</strong> Usa herramientas como SVGOMG para eliminar editores de metadatos, comentarios y grupos vacíos.</li>
          <li><strong>Simplifica los Trazados:</strong> Reduce el número de puntos de anclaje (nodos) sin afectar significativamente la forma. Menos nodos significan un renderizado más rápido.</li>
          <li><strong>Usa IDs Semánticos:</strong> Asigna IDs descriptivos a los elementos importantes de tu SVG. Esto facilita su manipulación con CSS y JavaScript.</li>
          <li><strong>Define un `viewBox`:</strong> Asegúrate de que tu SVG tenga un atributo <code>viewBox</code> bien definido. Esto es crucial para que sea escalable y responsivo.</li>
          <li><strong>Incrusta con Inteligencia:</strong> Decide si es mejor incrustar el SVG directamente en el HTML (inline) para reducir peticiones HTTP o usar una etiqueta <code>&lt;img&gt;</code> para aprovechar el cache del navegador.</li>
        </ul>
        <p>Un SVG optimizado no solo carga más rápido, sino que también es más accesible y fácil de mantener a largo plazo.</p>
      </>
    ),
  },
];
