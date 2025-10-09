import { notFound } from 'next/navigation';
import Header from '@/components/header';
import { articles } from '@/app/noticias/articles';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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
    openGraph: {
        images: [
            {
                url: article.coverImageUrl,
                width: 1200,
                height: 630,
                alt: article.title,
            },
        ],
    },
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
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">{article.title}</h1>
              <div className="mt-4 flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={article.authorImageUrl} alt={article.author} />
                  <AvatarFallback>{article.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{article.author}</p>
                  <p className="text-muted-foreground text-sm">
                    Publicado el {new Date(article.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>
              </div>
            </header>

            <div className="relative aspect-video rounded-lg overflow-hidden my-12">
                <Image 
                    src={article.coverImageUrl}
                    alt={article.title}
                    fill
                    className="object-cover"
                    data-ai-hint={article.coverImageHint}
                    priority
                />
            </div>
            
            <div dangerouslySetInnerHTML={{ __html: article.content }} />

          </article>
        </div>
      </main>
    </>
  );
}
