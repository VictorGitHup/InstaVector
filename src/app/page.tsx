import ImageUploader from '@/components/image-uploader';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background p-4 sm:p-8">
      <div className="w-full max-w-2xl py-12">
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            Vector Image Converter
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Upload your PNG, JPG, or JPEG file and get a high-quality SVG vector.
          </p>
        </header>
        <ImageUploader />
        
        <section className="mt-16 text-left">
          <h2 className="text-3xl font-bold text-foreground tracking-tight">
            Convert SVG: Vectorización al Instante
          </h2>
          <p className="mt-2 text-xl text-muted-foreground">
            Convierte, Escala, Diseña. Sin Límites.
          </p>
          <div className="mt-6 space-y-4 text-foreground/80">
            <p>
              Convert SVG es la herramienta web definitiva para diseñadores, desarrolladores y creadores que necesitan transformar imágenes rasterizadas (JPG, PNG) en gráficos vectoriales escalables (SVG) de alta precisión con un solo clic. Olvídate del pixelado y da la bienvenida a la nitidez perfecta.
            </p>
            <p>
              Nuestra plataforma está impulsada por una tecnología de vectorización avanzada que garantiza resultados limpios, contornos definidos y colores precisos, listos para cualquier aplicación: desde logotipos web hasta impresiones a gran escala.
            </p>
          </div>

          <h3 className="mt-8 mb-4 text-2xl font-bold text-foreground">
            ¿Por qué elegir Convert SVG?
          </h3>
          <ul className="space-y-4 text-foreground/80">
            <li>
              <strong className="font-semibold">Precisión Impecable:</strong> Utilizamos parámetros de trazado optimizados para capturar cada detalle.
            </li>
            <li>
              <strong className="font-semibold">Velocidad Superior:</strong> Obtén tu archivo SVG en segundos, no minutos.
            </li>
            <li>
              <strong className="font-semibold">100% Gratuito y Confidencial:</strong> Convierte lo que necesites sabiendo que tus archivos son tratados con la máxima seguridad y se eliminan automáticamente (ver Política de Datos).
            </li>
          </ul>
        </section>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} VectorImageConverter. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
