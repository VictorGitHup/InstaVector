import { notFound } from 'next/navigation';
import Header from '@/components/header';
import { articles, Article } from '@/app/noticias/articles';
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

const AuthorBio = ({ article }: { article: Article }) => (
    <div className="mt-16 pt-8 border-t border-border">
        <h3 className="font-semibold text-2xl mb-4 text-foreground">Sobre el Autor</h3>
        <p className="font-bold text-lg text-foreground">Victor A. Botina Jojoa</p>
        <p className="text-base text-foreground/80 mt-2 leading-relaxed">
            Ingeniero Informático, con especialización en modelos de negocio online y tecnología en comunicación comercial. Cuenta con más de 8 años de experiencia en comunicaciones y mercadeo, combinando su formación técnica con habilidades estratégicas en el desarrollo de proyectos digitales. Desarrollador web y de aplicaciones móviles, con amplio manejo de herramientas para la creación y edición de imágenes, tanto de licencia como de código libre.
        </p>
    </div>
);


export default function ArticlePage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const ArticleContent = article.component;

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center bg-background p-4 sm:p-8">
        <div className="w-full max-w-4xl py-12">
          <div className="prose dark:prose-invert prose-lg max-w-none">
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

            <div className="relative aspect-video rounded-lg overflow-hidden my-12 shadow-lg">
                <Image 
                    src={article.coverImageUrl}
                    alt={article.title}
                    fill
                    className="object-cover"
                    data-ai-hint={article.coverImageHint}
                    priority
                />
            </div>
            
            {ArticleContent ? (
                <article>
                    <ArticleContent />
                    {article.content && <div dangerouslySetInnerHTML={{ __html: article.content }} />}
                </article>
            ) : (
                article.content && <div dangerouslySetInnerHTML={{ __html: article.content }} />
            )}

          </div>
        </div>
      </main>
    </>
  );
}
