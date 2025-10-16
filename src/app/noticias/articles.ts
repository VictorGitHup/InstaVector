
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
import QueEsVectorial from './articulos/components/que-es-vectorial';
import CiberseguridadSvg from './articulos/components/ciberseguridad-svg';

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
    coverImageUrl: '/images/articulos/img_intavector10151025.webp',
    coverImageHint: 'vector editor',
    component: QueEsVectorial,
    content: authorBio,
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
  {
    slug: 'ciberseguridad-svg',
    title: 'Archivos SVG: Ciberseguridad aplicada a imágenes SVG',
    description: 'Descubre cómo los ciberdelincuentes aprovechan los archivos SVG para lanzar ataques de phishing y aprende a protegerte de esta creciente amenaza.',
    date: '2025-10-16',
    author: 'Victor A. Botina Jojoa',
    authorImageUrl: 'https://picsum.photos/seed/author11/40/40',
    coverImageUrl: '/images/articulos/img_intavector11161025.webp',
    coverImageHint: 'cyber security',
    component: CiberseguridadSvg,
    content: authorBio,
  },
];

    
