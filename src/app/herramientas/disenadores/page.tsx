import Link from 'next/link';
import Header from '@/components/header';
import Icono from '@/components/icono';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Herramientas para Diseñadores | InstaVector',
  description: 'Una colección de herramientas curadas para potenciar el flujo de trabajo de diseñadores gráficos y web.',
};

export default function HerramientasDisenadoresPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center bg-background p-4 sm:p-8">
        <div className="w-full max-w-4xl py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
              Herramientas para Diseñadores
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Recursos para optimizar tu flujo de trabajo creativo.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Icono className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">InstaVector</CardTitle>
                </div>
                <CardDescription>Conversor de imagen a SVG, rápido y seguro.</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Convierte JPG/PNG a SVG en segundos con trazado de alta precisión.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Ideal para preparar logos y gráficos para web, impresión y animación.</span>
                  </li>
                   <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>100% gratuito y privado. Tus archivos se eliminan automáticamente.</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/">
                    Ir a la Herramienta <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Aquí se pueden añadir más tarjetas de herramientas en el futuro */}

          </div>
        </div>
      </main>
    </>
  );
}
