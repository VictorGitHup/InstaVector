import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center bg-background p-4 sm:p-8 text-center">
        <div className="w-full max-w-md">
          <h1 className="text-9xl font-bold text-primary animate-pulse">404</h1>
          <h2 className="mt-4 text-3xl font-bold text-foreground tracking-tight sm:text-4xl">
            Página No Encontrada
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Lo sentimos, no pudimos encontrar la página que estás buscando. Es posible que haya sido eliminada o que la URL sea incorrecta.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Volver al Inicio
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
