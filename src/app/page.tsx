
import ImageUploader from '@/components/image-uploader';
import Header from '@/components/header';
import { CheckCircle, Users } from 'lucide-react';
import ComparadorVectorial from '@/components/comparador-vectorial';

export default function Home() {

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
          </section>
        </div>
      </main>
    </>
  );
}
