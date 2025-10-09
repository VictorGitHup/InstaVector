import { notFound } from 'next/navigation';
import Header from '@/components/header';
import { articles } from '@/app/noticias/articles';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

type Props = {
  params: { slug: string };
};

// Generar metadatos dinámicos para SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    return {
      title: 'Artículo no encontrado',
    };
  }

  return {
    title: `${article.title} | InstaVector`,
    description: article.description,
  };
}

// Generar rutas estáticas en tiempo de compilación
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticlePage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center bg-background p-4 sm:p-8">
        <div className="w-full max-w-3xl py-12">
          <article className="prose dark:prose-invert prose-lg max-w-none">
            <header className="mb-8">
               <Button asChild variant="ghost" className="mb-8 -ml-4">
                <Link href="/noticias">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver a Noticias
                </Link>
              </Button>
              <h1 className="text-4xl font-bold tracking-tight text-foreground">{article.title}</h1>
              <p className="text-muted-foreground mt-2">
                Publicado el {new Date(article.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </header>
            
            {article.content}

          </article>
        </div>
      </main>
    </>
  );
}
