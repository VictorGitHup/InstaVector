
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

const authorBio = `
    <div class="mt-12 pt-8 border-t">
        <h3 class="font-semibold text-xl mb-4">Sobre el Autor</h3>
        <p class="font-bold">Victor A. Botina Jojoa</p>
        <p class="text-base text-foreground/80 mt-2">
            Ingeniero Informático, con especialización en modelos de negocio online y tecnología en comunicación comercial. Cuenta con más de 8 años de experiencia en comunicaciones y mercadeo, combinando su formación técnica con habilidades estratégicas en el desarrollo de proyectos digitales. Desarrollador web y de aplicaciones móviles, con amplio manejo de herramientas para la creación y edición de imágenes, tanto de licencia como de código libre.
        </p>
    </div>
`;

export const articles: Article[] = [
  {
    slug: 'que-es-vectorial',
    title: '¿Qué es una Imagen Vectorial y por qué es Crucial para el Diseño?',
    description: 'Descubre los fundamentos de los gráficos vectoriales, sus ventajas sobre las imágenes rasterizadas y por qué son el estándar de la industria para logos y diseños escalables.',
    date: '2025-04-10',
    author: 'Victor A. Botina Jojoa',
    authorImageUrl: 'https://picsum.photos/seed/author1/40/40',
    coverImageUrl: 'https://picsum.photos/seed/vector_editor/1200/630',
    coverImageHint: 'vector editor',
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
        ${authorBio}
    `,
  },
  {
    slug: 'svg-para-animaciones',
    title: 'Cómo Usar SVG para Crear Animaciones Web Interactivas',
    description: 'Sumérgete en el mundo de las animaciones SVG. Aprende a dar vida a tus ilustraciones y logos usando CSS y JavaScript para crear experiencias de usuario memorables.',
    date: '2025-04-25',
    author: 'Victor A. Botina Jojoa',
    authorImageUrl: 'https://picsum.photos/seed/author2/40/40',
    coverImageUrl: 'https://picsum.photos/seed/web_animation/1200/630',
    coverImageHint: 'interactive animation',
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
        ${authorBio}
    `,
  },
  {
    slug: 'optimizacion-svg-web',
    title: 'Optimiza tus Gráficos Web: Mejores Prácticas para UI/UX con SVG',
    description: 'Un SVG bien optimizado puede mejorar drásticamente la velocidad de carga y la experiencia de usuario. Aprende a limpiar, comprimir y estructurar tus SVG para un rendimiento máximo.',
    date: '2025-05-12',
    author: 'Victor A. Botina Jojoa',
    authorImageUrl: 'https://picsum.photos/seed/author3/40/40',
    coverImageUrl: 'https://picsum.photos/seed/web_performance/1200/630',
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
        ${authorBio}
    `,
  },
  {
    slug: 'diagramas-educativos-svg',
    title: 'Diagramas educativos escalables con SVG',
    description: 'Convierte imágenes raster a SVG y crea diagramas interactivos y escalables para contenidos educativos y plataformas e-learning.',
    date: '2025-05-28',
    author: 'Victor A. Botina Jojoa',
    authorImageUrl: 'https://picsum.photos/seed/author4/40/40',
    coverImageUrl: 'https://picsum.photos/seed/education_diagram/1200/630',
    coverImageHint: 'interactive diagram',
    content: `
      <p class="lead">La transformación digital de la educación exige herramientas que sean a la vez flexibles, accesibles y potentes. Los gráficos vectoriales (SVG) se han convertido en un aliado clave para educadores y creadores de contenido que buscan superar las limitaciones de las imágenes estáticas.</p>
      <h2>El Poder del SVG en el E-learning</h2>
      <p>Al convertir imágenes rasterizadas (como JPG o PNG) a SVG, abrimos un mundo de posibilidades para el contenido educativo interactivo. El SVG permite a educadores y creadores de contenido:</p>
      <ul class="space-y-2 list-disc list-inside">
          <li><strong>Crear diagramas y mapas interactivos:</strong> Los estudiantes pueden hacer clic, pasar el cursor o interactuar con partes específicas de un diagrama para obtener más información, todo ello con una nitidez perfecta sin importar el zoom.</li>
          <li><strong>Desarrollar animaciones educativas ligeras:</strong> Explicar procesos complejos, como el ciclo del agua o el funcionamiento de un motor, se vuelve más sencillo con animaciones SVG que son mucho más ligeras y rápidas que los vídeos.</li>
          <li><strong>Garantizar una visualización clara en cualquier dispositivo:</strong> Desde un móvil hasta una pizarra digital, el contenido se verá impecable, mejorando la accesibilidad y la experiencia de aprendizaje.</li>
      </ul>
      <h3>Buenas Prácticas para SVG Educativos</h3>
      <p>Para maximizar el impacto, es crucial seguir buenas prácticas: usar IDs semánticos en los elementos del SVG para una fácil manipulación, asegurar la accesibilidad con etiquetas ARIA y reducir la complejidad de los nodos para un rendimiento óptimo.</p>
      ${authorBio}
    `,
  },
  {
    slug: 'personalizacion-productos-svg',
    title: 'Personalización de productos online con SVG',
    description: 'Aprende cómo convertir imágenes raster a SVG para permitir personalización de productos en línea, desde camisetas hasta stickers.',
    date: '2025-06-15',
    author: 'Victor A. Botina Jojoa',
    authorImageUrl: 'https://picsum.photos/seed/author5/40/40',
    coverImageUrl: 'https://picsum.photos/seed/custom_product/1200/630',
    coverImageHint: 'custom product',
    content: `
      <p class="lead">El e-commerce moderno exige experiencias de usuario únicas. La personalización de productos en tiempo real es una de las tendencias más potentes, y los gráficos SVG son la tecnología ideal para implementarla de manera eficiente y escalable.</p>
      <h2>SVG: El Motor de la Personalización</h2>
      <p>Convertir imágenes base de productos a formato SVG te permite ofrecer un nivel de interacción que las imágenes rasterizadas no pueden igualar. Esto facilita la edición dinámica de productos directamente en el navegador.</p>
      <ul class="space-y-2 list-disc list-inside">
          <li><strong>Edición Dinámica:</strong> Permite a los usuarios cambiar colores, añadir texto personalizado, aplicar diseños o modificar formas en tiempo real, viendo una previsualización instantánea de sus cambios.</li>
          <li><strong>Escalabilidad Perfecta:</strong> El producto personalizado se puede previsualizar con total nitidez, ya sea en una miniatura o en una vista a pantalla completa, sin pérdida de calidad.</li>
          <li><strong>Integración Sencilla:</strong> Al ser un formato basado en XML, los elementos de un SVG son accesibles y manipulables a través de JavaScript, lo que permite una integración fluida con el front-end de cualquier tienda online.</li>
      </ul>
      <h3>Buenas Prácticas para la Personalización</h3>
      <p>Para crear una herramienta de personalización robusta, es fundamental mantener los archivos SVG modulares y optimizados. Asigna IDs y clases claras a las diferentes partes del objeto (ej. "manga-izquierda", "logo-central") para que tu código JavaScript pueda seleccionarlas y modificarlas fácilmente.</p>
      ${authorBio}
    `,
  },
  {
    slug: 'planos-arquitectonicos-svg',
    title: 'Planos arquitectónicos escalables con SVG',
    description: 'Aprende a convertir planos CAD rasterizados a SVG y visualiza planos interactivos en web y presentaciones sin perder detalle.',
    date: '2025-06-30',
    author: 'Victor A. Botina Jojoa',
    authorImageUrl: 'https://picsum.photos/seed/author6/40/40',
    coverImageUrl: 'https://picsum.photos/seed/architectural_plan/1200/630',
    coverImageHint: 'architectural plan',
    content: `
      <p class="lead">La precisión y la escalabilidad son fundamentales en la arquitectura y la ingeniería. Convertir planos de CAD, a menudo guardados como imágenes rasterizadas para una visualización rápida, a formato SVG, abre nuevas posibilidades para la colaboración y presentación de proyectos.</p>
      <h2>SVG en la Visualización Técnica</h2>
      <p>Los arquitectos, ingenieros y diseñadores técnicos pueden aprovechar el formato SVG para:</p>
      <ul class="space-y-2 list-disc list-inside">
        <li><strong>Visualización Web Interactiva:</strong> Incrustar planos en sitios web donde los clientes o colaboradores pueden hacer zoom hasta el más mínimo detalle, activar o desactivar capas (como la eléctrica o la de fontanería) y obtener información de elementos específicos.</li>
        <li><strong>Escalabilidad sin Pérdida de Precisión:</strong> Un plano vectorial mantiene una nitidez absoluta, ya sea que se muestre en un dispositivo móvil o se proyecte en una pantalla de gran formato. Las líneas y medidas permanecen perfectas.</li>
        <li><strong>Dashboards y Presentaciones Técnicas:</strong> Integrar planos dinámicos en dashboards de gestión de proyectos o en presentaciones interactivas, ofreciendo una experiencia mucho más rica que un simple PDF o una imagen estática.</li>
      </ul>
      <h3>Buenas Prácticas para Planos en SVG</h3>
      <p>Para obtener los mejores resultados, es vital mantener la precisión de los trazos durante la conversión. Se deben simplificar geometrías donde sea posible sin sacrificar la exactitud y optimizar el archivo final para asegurar una carga rápida en la web.</p>
      ${authorBio}
    `,
  },
  {
    slug: 'senaletica-e-impresion-svg',
    title: 'Señalética e impresión: ventajas del formato SVG',
    description: 'Convierta imágenes raster a SVG para impresión y señalética escalable, garantizando calidad en banners, posters y vallas publicitarias.',
    date: '2025-07-15',
    author: 'Victor A. Botina Jojoa',
    authorImageUrl: 'https://picsum.photos/seed/author7/40/40',
    coverImageUrl: 'https://picsum.photos/seed/signage/1200/630',
    coverImageHint: 'large format printing',
    content: `
      <p class="lead">Cuando se trata de impresión a gran escala, como banners, pósters y señalética, la calidad es innegociable. El formato SVG es la tecnología superior para garantizar que tus diseños se vean perfectos, sin importar el tamaño.</p>
      <h2>¿Por qué SVG es ideal para la Impresión?</h2>
      <p>A diferencia de los formatos rasterizados, el SVG mantiene una claridad impecable al escalar. Esto es crucial para la impresión, donde los diseños deben adaptarse a múltiples formatos sin perder definición.</p>
      <ul class="space-y-2 list-disc list-inside">
          <li><strong>Escalabilidad sin Pérdida de Calidad:</strong> Un logo o gráfico en SVG puede imprimirse en una tarjeta de visita o en una valla publicitaria con la misma nitidez.</li>
          <li><strong>Precisión en Trazos y Formas:</strong> Los vectores garantizan que las líneas, curvas y bordes sean nítidos y definidos, algo esencial para la señalética y el branding profesional.</li>
          <li><strong>Compatibilidad Profesional:</strong> Los archivos SVG son compatibles con la mayoría del software de diseño e impresión profesional, facilitando un flujo de trabajo sin problemas.</li>
      </ul>
      <h3>Buenas Prácticas para la Impresión con SVG</h3>
      <p>Para asegurar una transición fluida del diseño a la impresión, es importante verificar los perfiles de color (CMYK), convertir todas las tipografías a trazados para evitar problemas de fuentes, y simplificar geometrías complejas que podrían dificultar el proceso de impresión.</p>
      ${authorBio}
    `,
  },
  {
    slug: 'svg-en-videojuegos-y-apps',
    title: 'Uso de SVG en videojuegos y apps móviles',
    description: 'Aprende cómo convertir assets raster a SVG para aplicaciones y videojuegos, mejorando escalabilidad y rendimiento en dispositivos móviles.',
    date: '2025-07-30',
    author: 'Victor A. Botina Jojoa',
    authorImageUrl: 'https://picsum.photos/seed/author8/40/40',
    coverImageUrl: 'https://picsum.photos/seed/mobile_game/1200/630',
    coverImageHint: 'mobile game ui',
    content: `
      <p class="lead">En el competitivo mundo de los videojuegos y las aplicaciones móviles, el rendimiento y la calidad visual son clave. Los assets gráficos en formato SVG (Scalable Vector Graphics) se están convirtiendo en un estándar para interfaces de usuario (UI) debido a su flexibilidad y eficiencia.</p>
      <h2>Ventajas de SVG en Desarrollo Móvil y de Videojuegos</h2>
      <p>Al utilizar SVG para los elementos de la interfaz, los desarrolladores pueden obtener beneficios significativos:</p>
      <ul class="space-y-2 list-disc list-inside">
          <li><strong>Menor Peso de Recursos:</strong> Los archivos SVG son inherentemente más ligeros que sus contrapartes rasterizadas (como PNG), reduciendo el tamaño final de la aplicación o juego.</li>
          <li><strong>Escalabilidad Perfecta:</strong> Un solo asset SVG se adapta a cualquier resolución de pantalla, desde un teléfono pequeño hasta una tableta de alta densidad de píxeles, sin necesidad de múltiples versiones del mismo gráfico (@1x, @2x, @3x).</li>
          <li><strong>Facilita Animaciones y Efectos:</strong> Los elementos dentro de un SVG pueden ser animados individualmente mediante código, permitiendo crear interfaces dinámicas, transiciones suaves y efectos visuales complejos con un coste de rendimiento bajo.</li>
      </ul>
      <h3>Buenas Prácticas para Assets SVG</h3>
      <p>Para un rendimiento óptimo, es crucial simplificar la cantidad de nodos y trazados, usar clases o IDs reutilizables para poder estilizarlos y manipularlos con código, y pasar los archivos SVG por herramientas de optimización antes de incluirlos en el proyecto final.</p>
      ${authorBio}
    `,
  },
  {
    slug: 'logotipos-svg-branding',
    title: 'Logotipos perfectos: ventajas de usar SVG en branding',
    description: 'Descubre cómo la conversión de logotipos de raster a SVG mejora la escalabilidad y calidad de tu branding en todos los medios.',
    date: '2025-08-15',
    author: 'Victor A. Botina Jojoa',
    authorImageUrl: 'https://picsum.photos/seed/author9/40/40',
    coverImageUrl: 'https://picsum.photos/seed/logo_branding/1200/630',
    coverImageHint: 'logo branding',
    content: `
      <p class="lead">Los logotipos son la piedra angular de la identidad de una marca, y su calidad debe ser impecable en todos los medios. Convertir un logo de un formato rasterizado (como PNG o JPG) a SVG no es una simple mejora técnica, es un paso estratégico fundamental.</p>
      <h2>¿Por qué tu Logo debe ser SVG?</h2>
      <p>Un logotipo en formato SVG asegura que tu marca se vea profesional y consistente, sin importar dónde se muestre. Las ventajas son claras:</p>
      <ul class="space-y-2 list-disc list-inside">
        <li><strong>Escalabilidad Infinita:</strong> Desde un pequeño favicon en una pestaña del navegador hasta una valla publicitaria gigante, tu logo se verá siempre nítido y sin pixelación.</li>
        <li><strong>Rendimiento Web Superior:</strong> Los archivos SVG suelen ser mucho más ligeros que los PNG de alta resolución, lo que se traduce en tiempos de carga más rápidos para tu sitio web, mejorando la experiencia de usuario y el SEO.</li>
        <li><strong>Flexibilidad para la Interactividad:</strong> Al ser código, los logos en SVG pueden ser animados fácilmente con CSS o JavaScript, permitiendo crear efectos de hover, microinteracciones o animaciones de carga que refuercen tu identidad de marca.</li>
      </ul>
      <h3>Consejos para un Logo en SVG Efectivo</h3>
      <p>Al diseñar o convertir un logotipo a SVG, es importante mantener los trazados simples, utilizar una paleta de colores definida y, crucialmente, convertir cualquier texto a trazados (o "paths") para evitar problemas de compatibilidad de fuentes en diferentes dispositivos.</p>
      ${authorBio}
    `,
  },
  {
    slug: 'svg-animaciones-marketing-digital',
    title: 'Cómo usar SVG para animaciones interactivas en marketing digital',
    description: 'Aprende a convertir imágenes raster a SVG y crear animaciones vectoriales interactivas que mejoran la experiencia en campañas digitales.',
    date: '2025-09-05',
    author: 'Victor A. Botina Jojoa',
    authorImageUrl: 'https://picsum.photos/seed/author10/40/40',
    coverImageUrl: 'https://picsum.photos/seed/digital_marketing/1200/630',
    coverImageHint: 'digital marketing',
    content: `
      <p class="lead">El marketing digital se beneficia enormemente de los SVG para crear animaciones atractivas y ligeras que capturan la atención del usuario. Al convertir tus imágenes raster a SVG, puedes aplicar animaciones CSS o JS, reducir drásticamente los tiempos de carga de tus páginas y implementar microinteracciones en landing pages y banners, mejorando la experiencia y la conversión.</p>
      <h2>Beneficios de las Animaciones SVG en Marketing</h2>
      <ul class="space-y-2 list-disc list-inside">
          <li><strong>Mejora del Engagement:</strong> Las animaciones sutiles y los elementos interactivos captan la atención del usuario y aumentan el tiempo de permanencia en la página.</li>
          <li><strong>Rendimiento Optimizado:</strong> A diferencia de los GIFs o los vídeos, las animaciones SVG son extremadamente ligeras, lo que garantiza que tus campañas no se vean penalizadas por tiempos de carga lentos.</li>
          <li><strong>Narrativa Visual (Storytelling):</strong> Utiliza animaciones para contar la historia de tu marca o producto de una manera dinámica y memorable, guiando al usuario a través de un flujo visual.</li>
      </ul>
      <h3>Buenas Prácticas</h3>
      <p>Para obtener los mejores resultados, es crucial mantener los SVGs simples, optimizarlos para la web eliminando metadatos innecesarios, y asegurar que sean semánticos y accesibles para no perjudicar el SEO.</p>
      ${authorBio}
    `,
  },
];
