import Header from '@/components/header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import SharePageButton from '@/components/share-page-button';

export const metadata: Metadata = {
  title: 'Cómo Funciona y FAQ | InstaVector',
  description: 'Aprende cómo funciona nuestro conversor de imágenes a SVG en tres simples pasos. Consulta nuestras preguntas frecuentes para resolver todas tus dudas sobre vectorización.',
  keywords: ['cómo funciona InstaVector', 'FAQ vectorizador', 'proceso de vectorización', 'preguntas frecuentes SVG', 'vectorizar online guía', 'subir imagen para vectorizar', 'descargar SVG'],
};

const faqData = [
    {
        question: "¿Qué es exactamente InstaVector?",
        answer: "InstaVector es una herramienta en línea que transforma imágenes raster (como PNG o JPG) en gráficos vectoriales escalables (SVG). Su principal ventaja es que convierte tus archivos en cuestión de segundos, sin necesidad de instalar software ni tener conocimientos técnicos avanzados."
    },
    {
        question: "¿Qué formatos de archivo son compatibles?",
        answer: "Actualmente, InstaVector acepta imágenes en formato PNG, JPG y JPEG con un tamaño máximo de 5 MB por archivo.\nEstos formatos son los más comunes para fotografías, logotipos e ilustraciones, y garantizan una conversión precisa y de alta calidad."
    },
    {
        question: "¿Necesito registrarme o crear una cuenta?",
        answer: "No. InstaVector es 100% gratuito y sin registro obligatorio. Solo debes subir tu imagen, esperar unos segundos y descargar el archivo vectorial resultante. No solicitamos datos personales ni almacenamos tus archivos."
    },
    {
        question: "¿Cómo funciona el proceso de vectorización?",
        answer: "El proceso se realiza en tres pasos:\n\n1. Sube tu imagen: arrastra o selecciona tu archivo desde tu dispositivo.\n2. Vectorización automática: nuestra API analiza los contornos y colores para reconstruir la imagen en formato SVG mediante algoritmos de trazado inteligente.\n3. Descarga inmediata: en segundos obtendrás tu vector escalable listo para usar en cualquier software de diseño."
    },
    {
        question: "¿Qué diferencia hay entre una imagen raster y una imagen vectorial?",
        answer: "Las imágenes raster (PNG, JPG) están formadas por píxeles, lo que hace que se distorsionen al ampliarlas.\nLos vectores (SVG) están basados en fórmulas matemáticas, por lo que puedes escalarlos infinitamente sin perder calidad. Esto los hace ideales para logotipos, impresión, diseño web o animaciones."
    },
    {
        question: "¿Qué calidad tienen los vectores generados?",
        answer: "El motor de InstaVector genera vectores limpios y optimizados, con un número mínimo de nodos, líneas suaves y colores bien definidos.\nEl resultado es un SVG profesional, apto para su edición en programas como Adobe Illustrator, Figma, Inkscape o CorelDRAW, y compatible con navegadores y sistemas modernos."
    },
    {
        question: "¿Mis archivos están seguros al subirlos?",
        answer: "Sí. La seguridad y privacidad son una prioridad:\n\n- Todas las conversiones se realizan bajo conexión HTTPS segura.\n- Los archivos se eliminan automáticamente de nuestros servidores una vez completada la conversión.\n- No almacenamos ni compartimos tus imágenes con terceros. Tu trabajo sigue siendo 100% tuyo."
    },
    {
        question: "¿Puedo usar los vectores generados para uso comercial?",
        answer: "Sí ✅. Los archivos SVG generados te pertenecen completamente y puedes utilizarlos libremente en proyectos personales, profesionales o comerciales.\nSin embargo, el usuario es responsable del contenido y origen del archivo original (PNG o JPG) que suba a la plataforma. InstaVector actúa únicamente como una herramienta de conversión técnica, que transforma imágenes rasterizadas en gráficos vectoriales, sin alterar ni reclamar derechos sobre el contenido procesado.\nEl uso comercial del resultado dependerá de que el material original no infrinja derechos de autor, marcas registradas u otros derechos de terceros."
    },
    {
        question: "¿Cuánto tarda el proceso de conversión?",
        answer: "La mayoría de las imágenes se convierten en menos de 10 segundos, dependiendo del tamaño y la complejidad del archivo. Nuestro sistema está optimizado para ofrecer la máxima velocidad sin comprometer la precisión."
    },
    {
        question: "¿Qué puedo hacer si el resultado no es el esperado?",
        answer: "Algunas imágenes con muchos degradados o texturas complejas pueden requerir ajustes.\nTe recomendamos:\n\n- Utilizar imágenes nítidas, sin fondo y con alto contraste.\n- Reducir el ruido o los bordes difusos antes de subirlas.\n- Consultar nuestras guías en la sección de Blog donde explicamos cómo preparar tus archivos para obtener los mejores resultados."
    },
    {
        question: "¿InstaVector es completamente gratuito?",
        answer: "Sí. InstaVector es una herramienta libre y sin costes ocultos. No hay suscripciones ni límites de uso. Nuestra misión es hacer accesible la tecnología de vectorización a todos los creadores, diseñadores y emprendedores."
    },
    {
        question: "¿Qué puedo hacer con el archivo SVG resultante?",
        answer: "El archivo vectorial puede usarse para:\n\n- Diseños de logotipos y branding.\n- Impresión profesional y bordado.\n- Gráficos en sitios web y apps.\n- Animaciones y efectos interactivos.\n- Cualquier proyecto que requiera imágenes escalables y ligeras."
    },
    {
        question: "¿Puedo vectorizar varias imágenes a la vez?",
        answer: "Por el momento, InstaVector procesa una imagen por conversión, para garantizar la precisión de cada archivo. Sin embargo, estamos trabajando en una versión avanzada que permitirá procesamiento por lotes para usuarios frecuentes."
    },
    {
        question: "¿Qué navegadores o dispositivos son compatibles?",
        answer: "InstaVector funciona en todos los navegadores modernos (Chrome, Edge, Firefox, Safari, Opera) y en dispositivos móviles, tablets o escritorio. No requiere instalación de plugins adicionales."
    },
    {
        question: "¿Dónde puedo aprender más sobre vectorización?",
        answer: "En nuestra sección de Blog, encontrarás artículos y tutoriales sobre:\n\n- Técnicas para mejorar tus imágenes antes de convertirlas.\n- Comparativas entre formatos raster y vectorial.\n- Trucos de diseño profesional para SVG.\n- Consejos sobre animación y optimización web con gráficos vectoriales."
    }
];

const pageUrl = "https://www.instavector.com/como-funciona";
const pageTitle = "Cómo Funciona y FAQ | InstaVector";


export default function HowItWorksPage() {
  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Cómo Funciona', href: '/como-funciona' },
  ];

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center bg-background p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-3xl py-8 sm:py-12">
          <header className="mb-8 sm:mb-12">
            <Breadcrumb items={breadcrumbItems} />
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mt-4 text-center">
              ¿Cómo Funciona la Conversión?
            </h1>
            <p className="mt-2 text-lg text-muted-foreground text-center">
              Vectorizar es tan fácil como 1, 2, 3
            </p>
          </header>

          <section className="space-y-8 text-base sm:text-lg text-foreground/80">
            <p className="text-center">Nuestra tecnología de conversión ha sido simplificada para que cualquier persona, sin necesidad de software complejo, pueda obtener archivos vectoriales profesionales.</p>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg sm:text-xl font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-lg sm:text-xl text-foreground mb-1">Paso 1: Sube tu Imagen (JPG, PNG o JPEG)</h3>
                <p>
                  Selecciona el archivo de imagen que deseas vectorizar. Aceptamos los formatos más comunes, asegurando que tu imagen tenga un máximo de 5MB para una velocidad de procesamiento óptima.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg sm:text-xl font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-lg sm:text-xl text-foreground mb-1">Paso 2: Conversión Inteligente y Automática</h3>
                <p>
                  Una vez subida, nuestro motor de vectorización, basado en algoritmos avanzados, toma el control.
                </p>
                <ul className="mt-2 list-disc list-inside space-y-1">
                    <li><strong className="font-semibold">Análisis de Contornos:</strong> Identifica los bordes y las formas de color en tu imagen.</li>
                    <li><strong className="font-semibold">Trazado de Spline:</strong> Genera automáticamente rutas vectoriales suaves y eficientes, optimizadas para la máxima calidad.</li>
                </ul>
                <p className="mt-2">
                  Este proceso es extremadamente rápido y está configurado para producir archivos SVG limpios y listos para usar en diseño gráfico, web o impresión.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg sm:text-xl font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-lg sm:text-xl text-foreground mb-1">Paso 3: Descarga y Uso Ilimitado</h3>
                <p>
                  El archivo SVG final se genera instantáneamente y se inicia la descarga automática en tu dispositivo. Tu nuevo gráfico vectorial es totalmente escalable: puedes ampliarlo o reducirlo infinitamente sin perder ni un solo detalle de calidad.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-12 sm:mt-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Preguntas Frecuentes (FAQ)</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((item, index) => (
                <AccordionItem value={`item-${index + 1}`} key={index}>
                  <AccordionTrigger className="text-left text-base sm:text-lg">
                    <span className="mr-2 text-primary">🔹</span>{item.question}
                  </AccordionTrigger>
                  <AccordionContent className="whitespace-pre-line text-sm sm:text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <SharePageButton url={pageUrl} title={pageTitle} className="mt-12" />
        </div>
      </main>
    </>
  );
}
