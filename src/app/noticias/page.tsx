import Link from 'next/link';
import Header from '@/components/header';
import { articles } from './articles';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Noticias | InstaVector',
  description: 'Artículos y tutoriales sobre diseño vectorial, SVG, y mejores prácticas para gráficos web.',
};

export default function NoticiasPage() {
  // Ordenar artículos por fecha, del más reciente al más antiguo
  const sortedArticles = [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center bg-background p-4 sm:p-8">
        <div className="w-full max-w-3xl py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
              Noticias y Artículos
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Todo sobre el mundo del diseño vectorial y SVG.
            </p>
          </header>

          <div className="space-y-8">
            {sortedArticles.map((article) => (
              <Card key={article.slug}>
                <CardHeader>
                  <CardTitle className="text-2xl hover:text-primary transition-colors">
                    <Link href={`/noticias/articulos/${article.slug}`}>
                      {article.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="pt-2">{article.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                   <p className="text-sm text-muted-foreground">
                    Publicado el {new Date(article.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  <Button asChild variant="secondary" size="sm">
                    <Link href={`/noticias/articulos/${article.slug}`}>
                      Leer más <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
