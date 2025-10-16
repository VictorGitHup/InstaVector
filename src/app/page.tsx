import ImageUploader from '@/components/image-uploader';
import Header from '@/components/header';
import { CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center bg-background p-4 sm:p-8">
        <div className="w-full max-w-2xl py-12">
          <header className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
              Vectorizador Online: Vectorización al Instante
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Convierte, Escala, Diseña. Sin Límites.
            </p>
          </header>
          <ImageUploader />
          
          <section className="mt-16 text-left space-y-12">
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
                                <p className="text-sm">Arrastra tu archivo PNG o JPG a nuestra plataforma o selecciónalo desde tu dispositivo.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">2</div>
                            <div>
                                <h4 className="font-semibold text-foreground">Vectorización automática</h4>
                                <p className="text-sm">Nuestra tecnología avanzada analiza cada contorno y color para convertir tu imagen raster en un gráfico vectorial escalable de alta precisión.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">3</div>
                            <div>
                                <h4 className="font-semibold text-foreground">Descarga tu vector</h4>
                                <p className="text-sm">Obtén tu archivo SVG listo para web, impresión o edición profesional, sin perder nitidez ni detalles.</p>
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
          </section>
        </div>
      </main>
    </>
  );
}
