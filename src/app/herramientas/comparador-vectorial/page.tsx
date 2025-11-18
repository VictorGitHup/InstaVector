import Header from '@/components/header';
import ComparadorVectorial from '@/components/comparador-vectorial';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, X, Maximize, FileDown, Edit, Camera } from 'lucide-react';
import { Breadcrumb } from '@/components/breadcrumb';
import SharePageButton from '@/components/share-page-button';

export const metadata = {
  title: 'Comparador Vectorial: Raster vs. SVG | InstaVector',
  description: 'Compara de forma interactiva la diferencia de calidad entre imágenes rasterizadas (PNG/JPG) y vectoriales (SVG) al hacer zoom. Aprende por qué los vectores son superiores para el diseño escalable.',
  keywords: ['comparador vectorial', 'raster vs vectorial', 'SVG vs PNG', 'calidad de imagen', 'zoom imagen', 'pixelación', 'gráficos escalables', 'diferencia SVG y JPG'],
};

const Feature = ({ icon: Icon, title, children }: { icon: React.ElementType, title: string, children: React.ReactNode }) => (
    <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-1">
            <Icon className="h-5 w-5" />
        </div>
        <div>
            <h4 className="font-semibold text-lg text-foreground">{title}</h4>
            <p className="text-muted-foreground text-sm sm:text-base">{children}</p>
        </div>
    </div>
);

const pageUrl = "https://www.instavector.app/herramientas/comparador-vectorial";
const pageTitle = "Comparador Vectorial: Raster vs. SVG | InstaVector";


export default function ComparadorPage() {
    const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Herramientas', href: '/herramientas/disenadores' },
    { label: 'Comparador Vectorial', href: '/herramientas/comparador-vectorial' },
  ];

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center bg-background p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-6xl py-8 sm:py-12">
          <header className="mb-8 sm:mb-12">
            <Breadcrumb items={breadcrumbItems} />
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mt-4 text-center">
              Comparador Interactivo: Raster vs. Vectorial
            </h1>
            <p className="mt-2 text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              Experimenta la diferencia de calidad al hacer zoom y descubre por qué es tan importante para tus diseños.
            </p>
          </header>

          <ComparadorVectorial />
          
          <section className="mt-16 sm:mt-20 max-w-4xl mx-auto space-y-12 sm:space-y-16">
            
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground tracking-tight">
                ¿Qué estás viendo? La batalla del Píxel contra la Ecuación
              </h2>
              <p className="mt-4 text-base sm:text-lg text-foreground/80">
                La diferencia entre una imagen que se pixela y una que permanece perfecta no es magia, es tecnología. A la izquierda, tienes una imagen <strong className="text-foreground">rasterizada</strong> (como un JPG o PNG), construida a partir de una rejilla fija de píxeles. A la derecha, su equivalente <strong className="text-foreground">vectorial</strong> (SVG), dibujada a partir de fórmulas matemáticas. Al usar el control de zoom, notarás que la imagen rasterizada se degrada rápidamente, mostrando sus componentes cuadrados (píxeles), mientras que el vector se redibuja en tiempo real, manteniendo una nitidez impecable a cualquier nivel de ampliación. Esta es la razón fundamental por la que el diseño profesional moderno se basa en vectores.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Análisis Técnico: Raster vs. Vectorial</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="border p-6 rounded-lg bg-muted/30">
                  <h4 className="font-semibold text-xl mb-3 flex items-center gap-2"><X className="text-destructive h-6 w-6"/>Imagen Rasterizada (JPG, PNG)</h4>
                  <p className="mb-4 text-foreground/80 text-sm">
                    Piensa en una imagen rasterizada como un mosaico. Está compuesta por miles o millones de pequeños cuadrados de color llamados píxeles. La calidad de la imagen está intrínsecamente ligada a su resolución.
                  </p>
                  <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2"><strong className="font-medium shrink-0">Estructura:</strong> <span>Mapa de bits (rejilla de píxeles).</span></li>
                      <li className="flex items-start gap-2"><strong className="font-medium shrink-0">Escalabilidad:</strong> <span>Limitada. Se pixela al ampliar.</span></li>
                      <li className="flex items-start gap-2"><strong className="font-medium shrink-0">Uso ideal:</strong> <span>Fotografías y pinturas digitales complejas.</span></li>
                  </ul>
                </div>
                <div className="border p-6 rounded-lg bg-muted/30">
                  <h4 className="font-semibold text-xl mb-3 flex items-center gap-2"><Check className="text-primary h-6 w-6"/>Imagen Vectorial (SVG)</h4>
                   <p className="mb-4 text-foreground/80 text-sm">
                    Una imagen vectorial, en cambio, es como un conjunto de instrucciones geométricas. En lugar de píxeles, utiliza puntos, líneas y curvas definidos por ecuaciones matemáticas.
                  </p>
                  <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2"><strong className="font-medium shrink-0">Estructura:</strong> <span>Ecuaciones matemáticas (vectores).</span></li>
                      <li className="flex items-start gap-2"><strong className="font-medium shrink-0">Escalabilidad:</strong> <span>Infinita. Calidad perfecta a cualquier tamaño.</span></li>
                      <li className="flex items-start gap-2"><strong className="font-medium shrink-0">Uso ideal:</strong> <span>Logotipos, iconos, ilustraciones, y tipografías.</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">¿Por qué es crucial para tu proyecto?</h3>
              <div className="space-y-6">
                <Feature icon={Maximize} title="Escalabilidad Universal">
                  En el mundo multidispositivo de hoy, tu logo o gráfico puede aparecer en un favicon de 16x16 píxeles, en una app móvil, en un monitor 4K o en una valla publicitaria. Un archivo vectorial garantiza que tu marca se vea profesional y nítida en todos los contextos, sin necesidad de crear múltiples versiones del mismo archivo.
                </Feature>
                <Feature icon={FileDown} title="Rendimiento Web y Optimización SEO">
                  Los archivos SVG suelen ser mucho más ligeros que sus equivalentes en PNG o JPG de alta resolución. Esto se traduce en tiempos de carga de página más rápidos, una mejor experiencia de usuario y una puntuación más alta en los Core Web Vitals de Google, lo que impacta positivamente en tu posicionamiento en buscadores (SEO).
                </Feature>
                <Feature icon={Edit} title="Flexibilidad en la Edición y Animación">
                  Dado que los vectores son objetos definidos matemáticamente, puedes cambiar fácilmente colores, grosores de línea o formas sin redibujar nada. Además, cada elemento dentro de un SVG puede ser animado individualmente con CSS o JavaScript, permitiendo crear microinteracciones y animaciones web complejas y de alto rendimiento.
                </Feature>
                <Feature icon={Camera} title="No reemplaza a las fotografías">
                  Es importante entender que los vectores no son la solución para todo. Las fotografías, con sus millones de colores y matices complejos, se representan mejor en formatos rasterizados como JPG o WebP. Los vectores destacan en gráficos con formas y colores definidos, como logotipos e ilustraciones, no en imágenes fotorrealistas.
                </Feature>
              </div>
            </div>

            <div className="bg-muted text-center p-6 sm:p-10 rounded-lg">
                <h2 className="text-3xl font-bold text-foreground tracking-tight">Convierte tus Imágenes, Eleva tu Diseño</h2>
                <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Ahora que has visto la diferencia, es hora de ponerlo en práctica. Transforma tus logotipos e ilustraciones en gráficos vectoriales escalables, profesionales y listos para cualquier desafío.
                </p>
                <div className="mt-6">
                    <Button asChild size="lg">
                        <Link href="/">
                            Ir al Vectorizador Gratuito <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
            
            <SharePageButton url={pageUrl} title={pageTitle} />

          </section>
        </div>
      </main>
    </>
  );
}
