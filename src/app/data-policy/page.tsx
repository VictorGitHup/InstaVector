
import Header from '@/components/header';

export default function DataPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center bg-background p-4 sm:p-8">
        <div className="w-full max-w-2xl py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
              Tratamiento de Datos y Privacidad
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Tu confianza y la seguridad de tus archivos son nuestra máxima prioridad.
            </p>
          </header>

          <section className="space-y-6 text-lg text-foreground/80 text-left">
            <div>
              <h3 className="font-semibold text-xl text-foreground mb-2">Confidencialidad Absoluta</h3>
              <p>
                No almacenamos, compartimos ni utilizamos las imágenes que subes para ningún propósito que no sea la conversión a SVG. Tu propiedad intelectual sigue siendo tuya, en todo momento.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl text-foreground mb-2">Eliminación Automática</h3>
              <p>
                Para garantizar tu privacidad, todas las imágenes que subes y los archivos SVG generados se eliminan permanentemente de nuestros servidores de forma automática después de un corto período de tiempo (generalmente, en menos de una hora). No conservamos ninguna copia.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl text-foreground mb-2">Transmisión Segura</h3>
              <p>
                La comunicación entre tu navegador y nuestros servidores está protegida mediante encriptación SSL (HTTPS). Esto asegura que tus archivos estén protegidos durante la carga y la descarga, evitando cualquier acceso no autorizado.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl text-foreground mb-2">Sin Recopilación de Datos Personales</h3>
              <p>
                No requerimos que te registres ni que proporciones información personal para utilizar nuestro servicio. La conversión es anónima y directa.
              </p>
            </div>
          </section>
          
          <footer className="text-center mt-16 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} VectorImageConverter. All rights reserved.</p>
          </footer>
        </div>
      </main>
    </>
  );
}
