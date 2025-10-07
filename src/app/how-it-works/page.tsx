
import Header from '@/components/header';

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center bg-background p-4 sm:p-8">
        <div className="w-full max-w-2xl py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
              Cómo Funciona
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              El proceso de conversión es simple, rápido y efectivo.
            </p>
          </header>

          <section className="space-y-8 text-lg text-foreground/80">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-xl text-foreground mb-1">Sube tu Imagen</h3>
                <p>
                  Arrastra y suelta tu archivo PNG o JPG en el área designada, o haz clic para seleccionarlo desde tu dispositivo. Nos aseguramos de que el proceso sea intuitivo y accesible para todos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-xl text-foreground mb-1">Conversión Automática</h3>
                <p>
                  Una vez que subes la imagen, nuestro algoritmo de vectorización se pone a trabajar. Analiza los píxeles, identifica los contornos y formas, y los convierte en trazados matemáticos que forman la base de un archivo SVG.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-xl text-foreground mb-1">Descarga tu SVG</h3>
                <p>
                  En cuestión de segundos, tu archivo SVG de alta calidad está listo. Haz clic en el botón de descarga y tendrás un gráfico vectorial escalable, listo para usar en tus proyectos de diseño web, impresión o cualquier otra aplicación creativa.
                </p>
              </div>
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
