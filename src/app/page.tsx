
import ImageUploader from '@/components/image-uploader';
import Header from '@/components/header';
import { CheckCircle, ShieldCheck, Users, ArrowRight } from 'lucide-react';
import ComparadorVectorial from '@/components/comparador-vectorial';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { articles } from './noticias/articles';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

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
                    <p>Con InstaVector, vectorizar tus imágenes nunca fue tan fácil. Solo necesitas seguir tres pasos simples:</p>
                    <ol className="space-y-4">
                        <li className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">1</div>
                            <div>
                                <h4 className="font-semibold text-foreground">Sube tu imagen</h4>
                                <p>Arrastra tu archivo PNG o JPG a nuestra plataforma o selecciónalo desde tu dispositivo.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">2</div>
                            <div>
                                <h4 className="font-semibold text-foreground">Vectorización automática</h4>
                                <p>Nuestra tecnología avanzada analiza cada contorno y color para convertir tu imagen raster en un gráfico vectorial escalable de alta precisión.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">3</div>
                            <div>
                                <h4 className="font-semibold text-foreground">Descarga tu vector</h4>
                                <p>Obtén tu archivo SVG listo para web, impresión o edición profesional, sin perder nitidez ni detalles.</p>
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
                            <strong className="font-semibold text-foreground">Precisión Impecable:</strong> Capturamos cada línea y color con fidelidad total al original.
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <strong className="font-semibold text-foreground">Velocidad Superior:</strong> Convierte tus imágenes en segundos, sin esperas ni procesos complejos.
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <strong className="font-semibold text-foreground">100% Gratuito y Seguro:</strong> Todos tus archivos se procesan de manera confidencial y se eliminan automáticamente tras la vectorización.
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <strong className="font-semibold text-foreground">Escalable y Flexible:</strong> Los vectores generados son ideales para impresión a gran escala, sitios web, redes sociales y proyectos multimedia.
                        </div>
                    </li>
                </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground tracking-tight text-center">Resultados de Alta Calidad para Cada Necesidad</h2>
              <p className="mt-2 text-xl text-muted-foreground text-center">
                  Desde iconos simples hasta ilustraciones complejas, nuestro motor se adapta.
              </p>
              <div className="mt-8">
                <ComparadorVectorial />
              </div>
            </div>

            <section className="bg-muted text-center p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-foreground tracking-tight">Más que un Vectorizador: Tu Plataforma de Creatividad</h2>
                <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Tutoriales y guías: Aprende a optimizar imágenes para obtener resultados perfectos y aprovecha al máximo tus vectores. InstaVector combina facilidad de uso con herramientas avanzadas, convirtiéndose en la plataforma ideal para todo tipo de usuario.
                </p>
                <div className="mt-6">
                    <Button asChild size="lg">
                        <Link href="/noticias">
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
                  InstaVector está diseñado para todos.
              </p>
              <ul className="mt-6 space-y-4 text-foreground/80">
                  <li className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                          <strong className="font-semibold text-foreground">Diseñadores gráficos:</strong> Logos, ilustraciones, iconos y elementos visuales escalables.
                      </div>
                  </li>
                  <li className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                          <strong className="font-semibold text-foreground">Desarrolladores y marketers:</strong> Gráficos web optimizados, banners y assets digitales sin pixelado.
                      </div>
                  </li>
                  <li className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                          <strong className="font-semibold text-foreground">Profesionales de impresión:</strong> Archivos listos para plotter, camisetas, folletos y material publicitario.
                      </div>
                  </li>
                   <li className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                          <strong className="font-semibold text-foreground">Educadores y estudiantes de diseño:</strong> Aprende y practica vectorización de manera sencilla y rápida.
                      </div>
                  </li>
              </ul>
              <p className="mt-4 text-foreground/80">Sea cual sea tu necesidad, InstaVector ofrece resultados profesionales en segundos, sin complicaciones.</p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-foreground tracking-tight">
                  Seguridad y Legalidad
              </h2>
              <p className="mt-2 text-xl text-muted-foreground">
                  Privacidad y Control Total de tus Archivos
              </p>
              <ul className="mt-6 space-y-4 text-foreground/80">
                  <li className="flex items-start gap-3">
                      <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                          <strong className="font-semibold text-foreground">Procesamiento Confidencial:</strong> Todos los archivos se procesan de forma segura y confidencial.
                      </div>
                  </li>
                  <li className="flex items-start gap-3">
                      <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                          <strong className="font-semibold text-foreground">Eliminación Automática:</strong> Tras la vectorización, los archivos se eliminan automáticamente de nuestros servidores, garantizando tu privacidad.
                      </div>
                  </li>
                  <li className="flex items-start gap-3">
                      <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                          <strong className="font-semibold text-foreground">Políticas Claras:</strong> Contamos con políticas claras de privacidad y uso, asegurando que tus vectores puedan utilizarse legalmente.
                      </div>
                  </li>
              </ul>
              <p className="mt-4 text-foreground/80">Con InstaVector, tu creatividad está protegida y tus archivos siempre seguros.</p>
            </div>
            
            <section className="mt-16">
              <h2 className="text-3xl font-bold text-foreground tracking-tight text-center">
                Noticias y Tutoriales Recientes
              </h2>
              <p className="mt-2 text-xl text-muted-foreground text-center">
                Descubre consejos, trucos y las últimas novedades del diseño vectorial.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentArticles.map((article) => (
                  <Card key={article.slug} className="flex flex-col">
                    <CardHeader className="p-0">
                      <Link href={`/noticias/articulos/${article.slug}`}>
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
                            <Link href={`/noticias/articulos/${article.slug}`}>
                            {article.title}
                            </Link>
                        </CardTitle>
                        <CardDescription className="pt-2">{article.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button asChild variant="secondary" size="sm" className="w-full">
                        <Link href={`/noticias/articulos/${article.slug}`}>
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
