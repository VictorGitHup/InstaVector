import { notFound } from 'next/navigation';
import Header from '@/components/header';
import { articles, Article } from '@/app/blog/articles';
import { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Breadcrumb } from '@/components/breadcrumb';
import { SITE_URL } from '@/lib/config';
import ShareButtons from '@/components/ShareButtons';
import { Separator } from '@/components/ui/separator';

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    return {
      title: 'Artículo no encontrado',
      description: 'El artículo que buscas no existe o ha sido movido.',
    };
  }

  const articleUrl = `${SITE_URL}/blog/articulos/${article.slug}`;
  const imageUrl = `${SITE_URL}${article.coverImageUrl}`;

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    openGraph: {
      title: article.title,
      description: article.description,
      url: articleUrl,
      siteName: 'InstaVector',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      locale: 'es_ES',
      type: 'article',
      publishedTime: new Date(article.date).toISOString(),
      authors: [article.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [imageUrl],
      creator: '@TuUsuarioDeTwitter', // Reemplaza con tu handle de Twitter si lo tienes
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const ArticleContent = article.component;
  const articleUrl = `${SITE_URL}/blog/articulos/${article.slug}`;

  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: article.title, href: `/blog/articulos/${article.slug}` },
  ];

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center bg-background p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl py-8 sm:py-12">
          <div className="prose dark:prose-invert prose-lg max-w-none">
            <header className="mb-8">
                <div className="mb-6">
                    <Breadcrumb items={breadcrumbItems} />
                </div>
               <Button asChild variant="ghost" className="mb-4 -ml-4">
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver a Blog
                </Link>
              </Button>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{article.title}</h1>
              
              <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <p className="text-muted-foreground text-base">
                  Publicado el {new Date(article.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <ShareButtons url={articleUrl} title={article.title} iconSize={36} />
              </div>

            </header>
            
            <div className="relative aspect-video rounded-lg overflow-hidden my-8 sm:my-12 shadow-lg">
                <Image 
                    src={article.coverImageUrl}
                    alt={article.title}
                    fill
                    className="object-cover"
                    data-ai-hint={article.coverImageHint}
                    priority
                />
            </div>
            
            <article>
                {ArticleContent && <ArticleContent />}

                <div className="my-12 text-center">
                    <Separator className="my-8" />
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                        ¡Comparte este artículo!
                    </h3>
                    <div className="flex justify-center">
                       <ShareButtons url={articleUrl} title={article.title} />
                    </div>
                </div>
                
                {article.content && <div dangerouslySetInnerHTML={{ __html: article.content }} />}
            </article>

          </div>
        </div>
      </main>
    </>
  );
}
