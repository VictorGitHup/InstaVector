
import Header from '@/components/header';

export default function DataPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center bg-background p-4 sm:p-8">
        <div className="w-full max-w-2xl py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
              Política de Tratamiento y Eliminación de Datos
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Nuestro Compromiso: Confidencialidad y Eliminación Inmediata
            </p>
          </header>

          <section className="space-y-8 text-lg text-foreground/80 text-left">
            <p>En InstaVector, la confianza del usuario es nuestra máxima prioridad. Entendemos la sensibilidad de los archivos que nos confías, por lo que hemos implementado una política estricta de no retención de datos.</p>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-xl text-foreground mb-2">Eliminación Automática de Archivos</h3>
                <p>
                  Declaramos formalmente que la imagen que nos envías para conversión (PNG, JPG o JPEG) y el archivo SVG resultante generado son tratados como temporales y se eliminan automáticamente de nuestros servidores.
                </p>
                <ul className="mt-2 list-disc list-inside space-y-1">
                    <li><strong className="font-semibold">Archivos Subidos:</strong> La imagen original se elimina tan pronto como se completa la conversión.</li>
                    <li><strong className="font-semibold">Archivos Convertidos (SVG):</strong> El archivo SVG resultante permanece accesible solo el tiempo necesario para completar la descarga. Por seguridad y para garantizar la limpieza de nuestro sistema, cualquier archivo SVG no descargado será eliminado de forma permanente y automática a los 5 minutos de su generación.</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-xl text-foreground mb-2">No Almacenamiento ni Rastreo</h3>
                <p>
                  InstaVector no almacena copias de seguridad, historial ni metadatos de las imágenes procesadas una vez finalizada la sesión de conversión. No rastreamos ni vendemos información sobre el contenido de los archivos que subes.
                </p>
                <p className="mt-2">
                  Tu actividad es confidencial y temporal. Nuestro único propósito es facilitar la conversión y garantizar que tus archivos vectoriales lleguen a ti de forma segura.
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
