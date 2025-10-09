import Header from '@/components/header';
import ComparadorVectorial from '@/components/comparador-vectorial';

export const metadata = {
  title: 'Comparador Vectorial | InstaVector',
  description: 'Compara de forma interactiva la diferencia de calidad entre imágenes rasterizadas (PNG/JPG) y vectoriales (SVG) al hacer zoom.',
};

export default function ComparadorPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center bg-background p-4 sm:p-8">
        <div className="w-full max-w-6xl py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
              Comparador Interactivo: Raster vs. Vectorial
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Experimenta la diferencia de calidad al hacer zoom.
            </p>
          </header>

          <ComparadorVectorial />
          
          <section className="mt-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground tracking-tight">
              ¿Qué estás viendo?
            </h2>
            <div className="mt-4 space-y-4 text-foreground/80 text-lg">
              <p>
                A la izquierda tienes una imagen rasterizada (como un JPG o PNG). Está compuesta por una rejilla fija de píxeles. A la derecha, tienes su equivalente vectorial (SVG), que se basa en fórmulas matemáticas.
              </p>
              <p>
                Usa el control de zoom y arrastra las imágenes para explorar. Notarás que la imagen rasterizada se pixela y pierde definición a medida que te acercas, mientras que la imagen vectorial se mantiene perfectamente nítida a cualquier nivel de zoom. ¡Ese es el poder de los vectores!
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
