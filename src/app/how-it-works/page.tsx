
import Header from '@/components/header';

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center bg-background p-4 sm:p-8">
        <div className="w-full max-w-2xl py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
              ¿Cómo Funciona la Conversión?
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Vectorizar es tan fácil como 1, 2, 3
            </p>
          </header>

          <section className="space-y-8 text-lg text-foreground/80">
            <p className="text-center">Nuestra tecnología de conversión ha sido simplificada para que cualquier persona, sin necesidad de software complejo, pueda obtener archivos vectoriales profesionales.</p>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-xl text-foreground mb-1">Paso 1: Sube tu Imagen (JPG, PNG o JPEG)</h3>
                <p>
                  Selecciona el archivo de imagen que deseas vectorizar. Aceptamos los formatos más comunes, asegurando que tu imagen tenga un máximo de 5MB para una velocidad de procesamiento óptima.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-xl text-foreground mb-1">Paso 2: Conversión Inteligente y Automática</h3>
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
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-xl text-foreground mb-1">Paso 3: Descarga y Uso Ilimitado</h3>
                <p>
                  El archivo SVG final se genera instantáneamente y se inicia la descarga automática en tu dispositivo. Tu nuevo gráfico vectorial es totalmente escalable: puedes ampliarlo o reducirlo infinitamente sin perder ni un solo detalle de calidad.
                </p>
              </div>
            </div>
          </section>
          
          <footer className="text-center mt-16 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} White Rabbit. All rights reserved.</p>
          </footer>
        </div>
      </main>
    </>
  );
}
