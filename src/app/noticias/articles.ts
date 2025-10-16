
import React from 'react';
import SvgAnimacionesMarketing from './articulos/components/svg-animaciones-marketing';
import LogotiposSvgBranding from './articulos/components/logotipos-svg-branding';
import SvgVideojuegosApps from './articulos/components/svg-videojuegos-apps';
import SenaleticaImpresionSvg from './articulos/components/senaletica-impresion-svg';
import PlanosArquitectonicosSvg from './articulos/components/planos-arquitectonicos-svg';
import PersonalizacionProductosSvg from './articulos/components/personalizacion-productos-svg';
import DiagramasEducativosSvg from './articulos/components/diagramas-educativos-svg';
import OptimizaSvgWeb from './articulos/components/optimiza-svg-web';
import SvgAnimacionesWeb from './articulos/components/svg-animaciones-web';

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  authorImageUrl: string;
  coverImageUrl: string;
  coverImageHint: string;
  content?: string;
  component?: React.ComponentType;
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
    coverImageUrl: '/images/articulos/img_intavector09151025.webp',
    coverImageHint: 'interactive animation',
    component: SvgAnimacionesWeb,
    content: authorBio,
  },
  {
    slug: 'optimizacion-svg-web',
    title: 'Optimiza tus Gráficos Web: Mejores Prácticas para UI/UX con SVG',
    description: 'Un SVG bien optimizado puede mejorar drásticamente la velocidad de carga y la experiencia de usuario. Aprende a limpiar, comprimir y estructurar tus SVG para un rendimiento máximo.',
    date: '2025-05-12',
    author: 'Victor A. Botina Jojoa',
    authorImageUrl: 'https://picsum.photos/seed/author3/40/40',
    coverImageUrl: '/images/articulos/img_intavector08151025.webp',
    coverImageHint: 'fast loading',
    component: OptimizaSvgWeb,
    content: authorBio,
  },
  {
    slug: 'diagramas-educativos-svg',
    title: 'Diagramas educativos escalables con SVG',
    description: 'Convierte imágenes raster a SVG y crea diagramas interactivos y escalables para contenidos educativos y plataformas e-learning.',
    date: '2025-05-28',
    author: 'Victor A. Botina Jojoa',
    authorImageUrl: 'https://picsum.photos/seed/author4/40/40',
    coverImageUrl: '/images/articulos/img_intavector07151025.webp',
    coverImageHint: 'interactive diagram',
    component: DiagramasEducativosSvg,
    content: authorBio,
  },
  {
    slug: 'personalizacion-productos-svg',
    title: 'Personalización de productos online con SVG',
    description: 'Aprende cómo convertir imágenes raster a SVG para permitir personalización de productos en línea, desde camisetas hasta stickers.',
    date: '2025-06-15',
    author: 'Victor A. Botina Jojoa',
    authorImageUrl: 'https://picsum.photos/seed/author5/40/40',
    coverImageUrl: '/images/articulos/img_intavector06151025.webp',
    coverImageHint: 'custom product',
    component: PersonalizacionProductosSvg,
    content: authorBio,
  },
  {
    slug: 'planos-arquitectonicos-svg',
    title: 'Planos arquitectónicos escalables con SVG',
    description: 'Aprende a convertir planos CAD rasterizados a SVG y visualiza planos interactivos en web y presentaciones sin perder detalle.',
    date: '2025-06-30',
    author: 'Victor A. Botina Jojoa',
    authorImageUrl: 'https://picsum.photos/seed/author6/40/40',
    coverImageUrl: '/images/articulos/img_intavector05151025.webp',
    coverImageHint: 'architectural plan',
    component: PlanosArquitectonicosSvg,
    content: authorBio,
  },
  {
    slug: 'senaletica-e-impresion-svg',
    title: 'Señalética e impresión: ventajas del formato SVG',
    description: 'Convierta imágenes raster a SVG para impresión y señalética escalable, garantizando calidad en banners, posters y vallas publicitarias.',
    date: '2025-07-15',
    author: 'Victor A. Botina Jojoa',
    authorImageUrl: 'https://picsum.photos/seed/author7/40/40',
    coverImageUrl: '/images/articulos/img_intavector04151025.webp',
    coverImageHint: 'large format printing',
    component: SenaleticaImpresionSvg,
    content: authorBio,
  },
  {
    slug: 'svg-en-videojuegos-y-apps',
    title: 'Uso de SVG en videojuegos y apps móviles',
    description: 'Aprende cómo convertir assets raster a SVG para aplicaciones y videojuegos, mejorando escalabilidad y rendimiento en dispositivos móviles.',
    date: '2025-07-30',
    author: 'Victor A. Botina Jojoa',
    authorImageUrl: 'https://picsum.photos/seed/author8/40/40',
    coverImageUrl: '/images/articulos/img_intavector03151025.webp',
    coverImageHint: 'mobile game ui',
    component: SvgVideojuegosApps,
    content: authorBio,
  },
  {
    slug: 'logotipos-svg-branding',
    title: 'Logotipos perfectos: ventajas de usar SVG en branding',
    description: 'Descubre cómo la conversión de logotipos de raster a SVG mejora la escalabilidad y calidad de tu branding en todos los medios.',
    date: '2025-08-15',
    author: 'Victor A. Botina Jojoa',
    authorImageUrl: 'https://picsum.photos/seed/author9/40/40',
    coverImageUrl: '/images/articulos/img_intavector02151025.webp',
    coverImageHint: 'logo branding',
    component: LogotiposSvgBranding,
    content: authorBio,
  },
  {
    slug: 'svg-animaciones-marketing-digital',
    title: 'Cómo usar SVG para animaciones interactivas en marketing digital',
    description: 'Aprende a convertir imágenes raster a SVG y crear animaciones vectoriales interactivas que mejoran la experiencia en campañas digitales.',
    date: '2025-09-05',
    author: 'Victor A. Botina Jojoa',
    authorImageUrl: 'https://picsum.photos/seed/author10/40/40',
    coverImageUrl: '/images/articulos/img_intavector001151025.webp',
    coverImageHint: 'digital marketing',
    component: SvgAnimacionesMarketing,
    content: authorBio,
  },
];

    
