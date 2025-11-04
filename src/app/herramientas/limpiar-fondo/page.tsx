import Header from '@/components/header';
import { Metadata } from 'next';
import { Sparkles } from 'lucide-react';
import { Breadcrumb } from '@/components/breadcrumb';

export const metadata: Metadata = {
  title: 'Limpiar Fondo de Imagen | InstaVector',
  description: 'Elimina el fondo de tus imágenes de forma automática y gratuita. Herramienta de limpieza de fondos próximamente en InstaVector.',
};

export default function LimpiarFondoPage() {
  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Herramientas', href: '/herramientas/disenadores' },
    { label: 'Limpiar Fondo', href: '/herramientas/limpiar-fondo' },
  ];

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center bg-background p-4 sm:p-8">
        <div className="w-full max-w-4xl py-12 text-center">
          <header className="mb-12">
            <Breadcrumb items={breadcrumbItems} />
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mt-4">
              Limpiar Fondo de Imagen
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Herramienta en desarrollo. ¡Disponible muy pronto!
            </p>
          </header>
          
          <div className="flex flex-col items-center gap-6 text-foreground/80">
            <Sparkles className="h-16 w-16 text-primary animate-pulse" />
            <p className="max-w-2xl text-lg">
                Estamos trabajando para traerte una potente herramienta que te permitirá eliminar el fondo de cualquier imagen de forma automática, precisa y gratuita. Prepárate para aislar objetos y personas con un solo clic, sin necesidad de software complicado.
            </p>
            <p className="font-semibold text-primary">
                ¡Vuelve pronto para descubrirla!
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
