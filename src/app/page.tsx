
import ImageUploader from '@/components/image-uploader';
import Header from '@/components/header';
import { CheckCircle, ShieldCheck, Users, ArrowRight } from 'lucide-react';
import ComparadorVectorial from '@/components/comparador-vectorial';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { articles } from './blog/articles';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'InstaVector | Vectorizador Online Gratuito de PNG/JPG a SVG',
  description: 'Convierte tus imágenes PNG y JPG a formato SVG vectorial de alta calidad, online y gratis. Nuestra herramienta es rápida, segura y perfecta para diseñadores y desarrolladores.',
  keywords: ['vectorizar imagen', 'conversor PNG a SVG', 'conversor JPG a SVG', 'vectorizador online', 'SVG gratis', 'trazar imagen', 'vectorización rápida', 'herramienta de diseño vectorial', 'imágenes seguras'],
};

export default function Home() {

  const recentArticles = [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center bg-background p-4 sm:p-8">
        <div className="w-full max-w-6xl py-12">
          <header className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
              Vectorizador Online: Vectorización al Instante
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Convierte, Escala, Diseña. Sin Límites.
            </p>
          </header>
          <div className="max-w-2xl mx-auto">
            <ImageUploader />
          </div>
          
          <section className="mt-16 text-left space-y-16">
            <div>
                <h2 className="text-3xl font-bold text-foreground tracking-tight">
                    Funcionalidad / Cómo Funciona
                </h2>
                <p className="mt-2 text-xl text-muted-foreground">
                    Transforma tus Imágenes en Vectores con un Solo Clic
                </p>
                <div className="mt-6 space-y-6 text-foreground/80">
                    <p>En InstaVector, hemos simplificado el complejo proceso de vectorización en una experiencia intuitiva y accesible para todos. Nuestra plataforma está diseñada para que puedas obtener gráficos vectoriales de alta calidad sin necesidad de conocimientos técnicos avanzados ni software costoso. El flujo de trabajo se reduce a tres pasos fundamentales, permitiendo que cualquier usuario, desde un diseñador experimentado hasta un aficionado, pueda convertir sus imágenes de manera eficiente y precisa.</p>
                    <ol className="space-y-4">
                        <li className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">1</div>
                            <div>
                                <h4 className="font-semibold text-foreground">Sube tu imagen</h4>
                                <p>El primer paso es tan simple como arrastrar tu archivo de imagen (en formato PNG, JPG o JPEG) directamente a la caja de carga, o si lo prefieres, hacer clic para seleccionarlo desde tu ordenador o dispositivo móvil. Nuestra interfaz está optimizada para que este proceso sea rápido y sin fricciones, permitiéndote comenzar la conversión de inmediato. El sistema valida el formato y el tamaño del archivo para asegurar la compatibilidad antes de iniciar el siguiente paso.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">2</div>
                            <div>
                                <h4 className="font-semibold text-foreground">Vectorización automática e inteligente</h4>
                                <p>Una vez que tu imagen está en nuestro sistema, nuestra API de vectorización entra en acción. El motor de procesamiento analiza la composición de la imagen, identifica los contornos, las formas y las transiciones de color. A continuación, aplica algoritmos de trazado de spline para reconstruir la imagen como un conjunto de vectores matemáticos. Este proceso no solo convierte los píxeles en líneas y curvas, sino que también optimiza el resultado para generar un archivo SVG limpio, con un número de nodos reducido y una estructura lógica, ideal para edición posterior.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">3</div>
                            <div>
                                <h4 className="font-semibold text-foreground">Descarga tu vector SVG</h4>
                                <p>En cuestión de segundos, la conversión se completa y la descarga de tu nuevo archivo SVG comienza automáticamente. Este gráfico vectorial está listo para ser utilizado en cualquier software de diseño profesional (como Adobe Illustrator, Figma o Inkscape), para ser integrado en un sitio web, o para ser enviado a producción para impresión, corte o bordado. La principal ventaja es que ahora es totalmente escalable, lo que significa que puedes ampliarlo a cualquier tamaño sin perder ni un ápice de calidad, garantizando resultados profesionales en cualquier aplicación.</p>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>

            <div>
                <h2 className="text-3xl font-bold text-foreground tracking-tight">
                    Ventajas / Por qué elegir InstaVector
                </h2>
                <p className="mt-2 text-xl text-muted-foreground">
                    La Herramienta Definitiva para Diseñadores y Creadores
                </p>
                <ul className="mt-6 space-y-4 text-foreground/80">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <strong className="font-semibold text-foreground">Precisión Impecable:</strong> Nuestro algoritmo de vectorización no se limita a trazar bordes; interpreta la imagen para capturar detalles sutiles, curvas suaves y esquinas nítidas con una fidelidad asombrosa. El resultado es un gráfico vectorial que respeta la intención del diseño original, ideal para logotipos y trabajos que no admiten imperfecciones. Nuestra API avanzada garantiza que cada línea sea matemáticamente perfecta.
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <strong className="font-semibold text-foreground">Velocidad Superior:</strong> Sabemos que tu tiempo es valioso. Por eso, hemos optimizado nuestra infraestructura y algoritmos para que el proceso de conversión, desde la subida hasta la descarga, dure solo unos segundos. Olvídate de largas esperas o procesos manuales que consumen horas; con InstaVector, la eficiencia es la norma. Nuestra plataforma está diseñada para un rendimiento máximo sin comprometer la calidad.
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <strong className="font-semibold text-foreground">100% Gratuito y Seguro:</strong> Creemos en el acceso libre a herramientas de calidad. InstaVector es completamente gratuito, sin costes ocultos ni suscripciones. Además, tu privacidad es nuestra prioridad. Todos los archivos subidos se procesan en un entorno seguro y se eliminan permanentemente de nuestros servidores tras la conversión, garantizando la total confidencialidad de tu trabajo.
                        </div>
                    </li>

                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <strong className="font-semibold text-foreground">Escalable y Flexible para Todo Uso:</strong> El formato SVG es el estándar de oro para gráficos escalables. Tu archivo convertido será perfecto para cualquier aplicación: desde un pequeño icono en una app móvil hasta una valla publicitaria gigante. Su naturaleza vectorial asegura una calidad perfecta en impresión a gran escala, sitios web responsive, redes sociales y cualquier proyecto multimedia que demande versatilidad. El SVG generado es compatible con todos los softwares de diseño líderes del mercado.
                        </div>
                    </li>
                </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground tracking-tight text-center">Resultados de Alta Calidad para Cada Necesidad</h2>
              <p className="mt-2 text-xl text-muted-foreground text-center">
                  Desde iconos simples hasta ilustraciones complejas, nuestra API se adapta para ofrecer la mejor calidad.
              </p>
              <p className="mt-4 max-w-3xl mx-auto text-center text-foreground/80">
                  Experimenta por ti mismo la diferencia entre un gráfico rasterizado que se pixela y un vector que mantiene su nitidez. Utiliza nuestro comparador interactivo para hacer zoom y ver el poder de la vectorización en acción. Observa cómo los bordes se mantienen limpios y los colores sólidos a cualquier nivel de ampliación.
              </p>
              <div className="mt-8">
                <ComparadorVectorial />
              </div>
            </div>

            <section className="bg-muted text-center p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-foreground tracking-tight">Más que un Vectorizador: Tu Plataforma de Creatividad</h2>
                <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Nuestro objetivo es ser más que una simple herramienta. En nuestra sección de noticias, encontrarás tutoriales detallados y guías prácticas que te enseñarán a optimizar tus imágenes antes de la conversión, a sacar el máximo provecho de tus archivos SVG y a descubrir las últimas tendencias en diseño vectorial. InstaVector combina una interfaz de uso fácil con recursos avanzados, convirtiéndose en la plataforma de referencia para cualquier tipo de usuario, desde principiantes curiosos hasta profesionales experimentados.
                </p>
                <div className="mt-6">
                    <Button asChild size="lg">
                        <Link href="/blog">
                            Explora Nuestros Artículos <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </section>

            <div>
              <h2 className="text-3xl font-bold text-foreground tracking-tight">
                  Casos de Uso / Usuarios
              </h2>
              <p className="mt-2 text-xl text-muted-foreground">
                  InstaVector está diseñado para potenciar la creatividad de todos.
              </p>
              <ul className="mt-6 space-y-4 text-foreground/80">
                  <li className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                          <strong className="font-semibold text-foreground">Diseñadores gráficos y de marca:</strong> La vectorización de logotipos, iconos y elementos visuales es esencial para mantener la coherencia de una marca en diferentes soportes. Con InstaVector, puedes preparar rápidamente tus recursos para manuales de identidad, presentaciones y cualquier material que requiera escalabilidad. Un logotipo vectorial es la base de un branding sólido y profesional, y nuestra herramienta te lo proporciona en segundos.
                      </div>
                  </li>
                  <li className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                          <strong className="font-semibold text-foreground">Desarrolladores web y marketers:</strong> Optimiza el rendimiento de tu sitio web utilizando gráficos SVG ligeros que se cargan al instante y se ven perfectos en cualquier dispositivo, mejorando los Core Web Vitals y el SEO. Crea banners y assets para campañas digitales que no se pixelen, garantizando una imagen profesional. Además, los SVG pueden ser animados e interactivos, abriendo un mundo de posibilidades para mejorar la experiencia del usuario.
                      </div>
                  </li>
                  <li className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                          <strong className="font-semibold text-foreground">Profesionales de impresión y merchandising:</strong> Prepara tus diseños para producción física en segundos. Los archivos SVG son perfectos para máquinas de corte por plotter, serigrafía, impresión de camisetas, creación de folletos y cualquier material publicitario que exija la máxima resolución. La precisión matemática de los vectores asegura que el resultado impreso sea siempre nítido y fiel al diseño original.
                      </div>
                  </li>
                   <li className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                          <strong className="font-semibold text-foreground">Educadores y estudiantes de diseño:</strong> InstaVector es una herramienta educativa excelente para entender los fundamentos de los gráficos vectoriales. Permite a los estudiantes practicar la vectorización de forma rápida y gratuita, y a los educadores demostrar la diferencia clave entre formatos raster y vectorial de manera interactiva. Es el recurso ideal para proyectos académicos y para desarrollar habilidades esenciales en diseño digital.
                      </div>
                  </li>
              </ul>
              <p className="mt-4 text-foreground/80">Independientemente de tu campo o nivel de experiencia, InstaVector te proporciona resultados de calibre profesional en segundos, eliminando las barreras técnicas para que puedas centrarte en lo que realmente importa: tu creatividad.</p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-foreground tracking-tight">
                  Seguridad y Legalidad
              </h2>
              <p className="mt-2 text-xl text-muted-foreground">
                  Tu Privacidad y el Control Total de tus Archivos son Nuestra Garantía
              </p>
              <ul className="mt-6 space-y-4 text-foreground/80">
                  <li className="flex items-start gap-3">
                      <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                          <strong className="font-semibold text-foreground">Procesamiento 100% Confidencial:</strong> Todas las subidas y conversiones se realizan a través de una conexión segura (HTTPS). No analizamos, compartimos ni almacenamos el contenido de tus imágenes para ningún otro propósito que no sea la vectorización que solicitaste. Tu trabajo es invisible para nosotros y para terceros.
                      </div>
                  </li>
                  <li className="flex items-start gap-3">
                      <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                          <strong className="font-semibold text-foreground">Eliminación Automática y Permanente:</strong> Tu confianza es fundamental. Inmediatamente después de que la conversión se completa y la descarga comienza, tanto el archivo original que subiste como el SVG resultante son eliminados de forma permanente y automática de nuestros servidores. No guardamos copias ni historiales, garantizando que tu propiedad intelectual permanezca exclusivamente tuya.
                      </div>
                  </li>
                  <li className="flex items-start gap-3">
                      <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                          <strong className="font-semibold text-foreground">Políticas de Datos Transparentes:</strong> Contamos con una política de tratamiento de datos clara y accesible donde explicamos nuestro compromiso con tu privacidad. Los vectores que generas son de tu propiedad y puedes utilizarlos sin restricciones legales por nuestra parte. Creemos en un ecosistema digital abierto y respetuoso con los derechos de los creadores.
                      </div>
                  </li>
              </ul>
              <p className="mt-4 text-foreground/80">Con InstaVector, puedes crear con total tranquilidad, sabiendo que tu trabajo está protegido y que tus archivos siempre estarán bajo tu control, seguros y privados.</p>
            </div>
            
            <section className="mt-16">
              <h2 className="text-3xl font-bold text-foreground tracking-tight text-center">
                Tutoriales Recientes
              </h2>
              <p className="mt-2 text-xl text-muted-foreground text-center">
                Descubre consejos, trucos y las últimas novedades del diseño vectorial.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentArticles.map((article) => (
                  <Card key={article.slug} className="flex flex-col">
                    <CardHeader className="p-0">
                      <Link href={`/blog/articulos/${article.slug}`}>
                        <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                          <Image
                            src={article.coverImageUrl}
                            alt={article.title}
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-105"
                            data-ai-hint={article.coverImageHint}
                          />
                        </div>
                      </Link>
                    </CardHeader>
                    <CardContent className="flex-1 p-6">
                        <CardTitle className="text-xl hover:text-primary transition-colors">
                            <Link href={`/blog/articulos/${article.slug}`}>
                            {article.title}
                            </Link>
                        </CardTitle>
                        <CardDescription className="pt-2">{article.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button asChild variant="secondary" size="sm" className="w-full">
                        <Link href={`/blog/articulos/${article.slug}`}>
                          Leer más <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>

          </section>
        </div>
      </main>
    </>
  );
}
