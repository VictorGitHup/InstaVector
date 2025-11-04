import Header from '@/components/header';
import { Metadata } from 'next';
import { CheckCircle, Image as ImageIcon, Zap, Download, Target, Settings, AlertTriangle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Breadcrumb } from '@/components/breadcrumb';

export const metadata: Metadata = {
  title: 'Guía de Uso - Cómo Vectorizar como un Profesional | InstaVector',
  description: 'Aprende a usar nuestro vectorizador online para convertir imágenes a SVG. Esta guía completa te enseñará a preparar tus archivos, optimizar resultados y solucionar problemas comunes para obtener vectores perfectos.',
  keywords: ['guía de vectorización', 'cómo vectorizar una imagen', 'tutorial SVG', 'optimizar PNG para vectorizar', 'mejorar calidad de vectorización', 'consejos de diseño vectorial', 'InstaVector guía', 'preparar imagen para trazar'],
};

const Section = ({ children }: { children: React.ReactNode }) => (
  <section className="space-y-4 text-lg text-foreground/80 leading-relaxed">
    {children}
  </section>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl font-bold text-foreground pt-8 pb-4 border-b">
    {children}
  </h2>
);

const SubTitle = ({ icon: Icon, children }: { icon: React.ElementType, children: React.ReactNode }) => (
    <h3 className="text-2xl font-semibold text-primary flex items-center gap-3 pt-6 pb-2">
       <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
            <Icon className="h-5 w-5" />
       </div>
       {children}
    </h3>
);

const HighlightCard = ({ children, variant = 'default' }: { children: React.ReactNode, variant?: 'default' | 'warning' }) => {
    const baseClasses = "border-l-4 p-6 my-6 rounded-r-lg";
    const variants = {
        default: "bg-muted/50 border-primary text-foreground/80",
        warning: "bg-destructive/10 border-destructive text-destructive-foreground/90"
    };
    return (
        <div className={`${baseClasses} ${variants[variant]}`}>
            <div className="font-medium">{children}</div>
        </div>
    );
};


export default function GuiaDeUsoPage() {
  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Herramientas', href: '/herramientas/disenadores' },
    { label: 'Guía de Uso', href: '/herramientas/guia-de-uso' },
  ];

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center bg-background p-4 sm:p-8">
        <div className="w-full max-w-4xl py-12">
          <header className="mb-12">
            <Breadcrumb items={breadcrumbItems} />
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mt-4">
              Guía Definitiva de Vectorización con InstaVector
            </h1>
            <p className="mt-2 text-lg text-muted-foreground text-center">
              De principiante a profesional: domina el arte de convertir tus imágenes en vectores perfectos.
            </p>
          </header>

          <article className="space-y-12">

            <Section>
              <p>Bienvenido a la guía completa de InstaVector. Nuestro objetivo es darte el poder de crear gráficos vectoriales (SVG) de alta calidad a partir de tus imágenes rasterizadas (JPG, PNG) de la manera más simple y eficiente posible. Sin embargo, entender algunos conceptos clave y buenas prácticas puede elevar tus resultados de "buenos" a "excepcionales". Esta guía está diseñada para llevarte a través de todo el proceso, asegurando que cada vector que crees sea limpio, optimizado y listo para cualquier aplicación profesional.</p>
            </Section>

            <Section>
              <SectionTitle>El Proceso de Vectorización: Paso a Paso</SectionTitle>
              <p>Hemos diseñado InstaVector para que sea increíblemente intuitivo. El proceso se resume en tres sencillos pasos que te llevarán de una imagen estática a un gráfico vectorial escalable en segundos.</p>
              
              <ol className="space-y-6 mt-6">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-xl text-foreground mb-1">Sube tu Imagen</h4>
                    <p>Arrastra y suelta tu archivo JPG, PNG o JPEG en el área de carga, o haz clic para seleccionarlo desde tu dispositivo. Nuestro sistema está optimizado para procesar imágenes de hasta 5 MB, lo que garantiza un equilibrio entre detalle y velocidad. Para obtener los mejores resultados, asegúrate de que tu imagen sea lo más clara posible (lo veremos en detalle más adelante).</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-xl text-foreground mb-1">Conversión Automática Inteligente</h4>
                    <p>Aquí es donde ocurre la magia. Una vez que subes tu imagen, nuestra API de vectorización entra en acción. No es un simple trazado de bordes; es un análisis profundo:</p>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      <li><strong>Análisis de Contornos:</strong> Identifica los bordes y las formas de color en tu imagen.</li>
                      <li><strong>Trazado de Curvas Suaves (Spline):</strong> Reconstruye la imagen utilizando curvas de Bézier matemáticas, optimizando la cantidad de puntos de anclaje (nodos) para crear un archivo SVG limpio y ligero.</li>
                      <li><strong>Agrupación de Colores:</strong> Simplifica la paleta de colores para generar un vector con colores sólidos y bien definidos.</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-xl text-foreground mb-1">Descarga y Uso Ilimitado</h4>
                    <p>En segundos, tu archivo SVG estará listo. La descarga comenzará automáticamente. Este nuevo archivo es tuyo para usarlo como quieras: es compatible con software profesional como Adobe Illustrator, Figma e Inkscape, perfecto para desarrollo web y listo para impresión de alta calidad. Lo más importante: es infinitamente escalable.</p>
                  </div>
                </li>
              </ol>
            </Section>

            <Section>
                <SectionTitle>Cómo Preparar tu Imagen para una Vectorización Perfecta</SectionTitle>
                <p>La calidad del resultado depende en gran medida de la calidad de la imagen de origen. "Basura entra, basura sale" es un dicho que aplica perfectamente aquí. Sigue estos consejos de nivel profesional para preparar tus imágenes y obtener vectores impecables.</p>

                <SubTitle icon={Target}>1. Maximiza la Resolución y la Nitidez</SubTitle>
                <p>Aunque nuestro algoritmo es potente, funciona mejor cuando los bordes son claros. Siempre que sea posible, utiliza la imagen de mayor resolución que tengas disponible. Una imagen de 3000x3000 píxeles producirá un resultado mucho más preciso que una de 300x300. Si la imagen está borrosa, considera usar herramientas de enfoque de imagen (disponibles en la mayoría de los editores de fotos) antes de subirla.</p>

                <SubTitle icon={Settings}>2. Aumenta el Contraste</SubTitle>
                <p>El contraste es clave. Nuestro motor necesita distinguir claramente entre el sujeto principal y el fondo, o entre diferentes áreas de color. Si tu logo es gris claro sobre un fondo blanco, el algoritmo podría tener dificultades. Ajusta los niveles de la imagen para que los negros sean más negros y los blancos más blancos. Esto define los bordes de manera inequívoca y facilita un trazado limpio.</p>

                <SubTitle icon={ImageIcon}>3. Aísla el Objeto y Elimina el Fondo</SubTitle>
                <p>Un fondo complejo o "ruidoso" (como una fotografía de una camiseta con un logo) puede confundir al algoritmo de trazado. El mejor escenario es una imagen con un fondo transparente (PNG) o un fondo de color sólido y contrastante que se pueda eliminar fácilmente. Si tu imagen tiene un fondo concurrido, utiliza una herramienta de eliminación de fondos antes de subirla a InstaVector. <span className='text-primary font-semibold'>(¡Próximamente tendremos nuestra propia herramienta para esto!)</span>.</p>
                
                <SubTitle icon={Zap}>4. Reduce el Ruido y los Artefactos de Compresión</SubTitle>
                <p>Las imágenes JPG, especialmente las que se han guardado varias veces, acumulan "artefactos" de compresión, que son pequeñas imperfecciones y bloques de píxeles que rodean los bordes. Este "ruido" puede resultar en un vector con bordes irregulares o con muchos nodos innecesarios. Utiliza un filtro de reducción de ruido en tu editor de imágenes para suavizar estas imperfecciones antes de la conversión.</p>

                <HighlightCard>
                    <strong>Resumen del Checklist de Preparación:</strong>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                        <li>Usar la máxima resolución posible.</li>
                        <li>Asegurar un alto contraste entre los elementos.</li>
                        <li>Eliminar fondos complejos o innecesarios.</li>
                        <li>Limpiar el ruido digital y los artefactos de compresión.</li>
                    </ul>
                </HighlightCard>
            </Section>

            <Section>
                <SectionTitle>Solución de Problemas Comunes</SectionTitle>
                <p>A veces, el resultado puede no ser exactamente el esperado. Aquí te explicamos por qué y cómo solucionarlo.</p>

                <SubTitle icon={AlertTriangle}>Problema: "El vector tiene bordes irregulares o dentados."</SubTitle>
                <p><strong>Causa probable:</strong> La imagen original era de baja resolución, borrosa, o tenía artefactos de compresión JPG. El algoritmo interpretó esos píxeles imperfectos como parte del diseño.</p>
                <p><strong>Solución:</strong> Vuelve a la imagen original y aplica los consejos de la sección anterior. Encuentra una versión de mayor resolución o utiliza herramientas de enfoque y reducción de ruido.</p>

                <SubTitle icon={AlertTriangle}>Problema: "Faltan detalles finos o líneas delgadas."</SubTitle>
                <p><strong>Causa probable:</strong> Las líneas eran demasiado delgadas o el contraste era muy bajo, haciendo que el algoritmo las ignorara o las fusionara con el fondo. Esto también puede suceder si la resolución era insuficiente para capturar esos detalles.</p>
                <p><strong>Solución:</strong> En un editor de imágenes, haz las líneas ligeramente más gruesas o aumenta el contraste entre la línea y su fondo. Sube una versión de mayor resolución si es posible.</p>

                <SubTitle icon={AlertTriangle}>Problema: "Los colores del vector no son exactos."</SubTitle>
                <p><strong>Causa probable:</strong> El proceso de vectorización a menudo implica la cuantización de colores para simplificar la paleta y crear un archivo SVG optimizado. Los degradados sutiles o las variaciones de color muy leves se agrupan en un solo color sólido.</p>
                <p><strong>Solución:</strong> InstaVector está diseñado para crear vectores con colores planos, ideal para logotipos e ilustraciones. Si necesitas degradados, el archivo SVG generado es la base perfecta. Puedes abrirlo en Figma, Illustrator o Inkscape y aplicar los degradados manualmente con total control.</p>

                <HighlightCard variant="warning">
                  <strong>¿Por qué no vectorizamos degradados complejos?</strong> Para garantizar un SVG limpio y ligero. Los degradados vectoriales pueden aumentar significativamente el tamaño y la complejidad del archivo. Nuestro enfoque es darte una base vectorial sólida y optimizada que luego puedes enriquecer según tus necesidades.
                </HighlightCard>
            </Section>

            <Section>
              <div className="bg-muted text-center p-8 sm:p-12 rounded-lg">
                  <h2 className="text-3xl font-bold text-foreground tracking-tight">¿Listo para Crear Vectores Perfectos?</h2>
                  <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                      Ahora que conoces los secretos, es hora de ponerlos en práctica. Transforma tus imágenes en gráficos vectoriales escalables y profesionales.
                  </p>
                  <div className="mt-6">
                      <Button asChild size="lg">
                        <Link href="/">
                            Ir al Vectorizador Gratuito <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                  </div>
              </div>
            </Section>
          </article>
        </div>
      </main>
    </>
  );
}
