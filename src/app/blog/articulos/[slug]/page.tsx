import { notFound } from 'next/navigation';
import Header from '@/components/header';
import { articles, Article } from '@/app/blog/articles';
import { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Breadcrumb } from '@/components/breadcrumb';
import { SITE_URL } from '@/lib/config';
import ShareButtons from '@/components/ShareButtons';

type Props = {
  params: { slug: string };
};

// **PASO 2: IMPLEMENTACIÓN DE GENERATEMETADATA OPTIMIZADO**
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    // Si no se encuentra el artículo, devolvemos metadatos genéricos o de "no encontrado"
    return {
      title: 'Artículo no encontrado',
      description: 'El artículo que buscas no existe o ha sido movido.',
    };
  }

  // Construye la URL canónica y la de la imagen
  const articleUrl = `${SITE_URL}/blog/articulos/${article.slug}`;
  // Next.js automáticamente convierte la ruta relativa de la imagen a absoluta usando `metadataBase` del layout.
  const imageUrl = article.coverImageUrl;

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    // **Open Graph (Facebook, WhatsApp, LinkedIn, etc.)**
    openGraph: {
      title: article.title,
      description: article.description,
      url: articleUrl,
      siteName: 'InstaVector', // Nombre de tu sitio
      images: [
        {
          url: imageUrl, // URL absoluta de la imagen
          width: 1200,   // Ancho explícito para OG
          height: 630,  // Alto explícito para OG
          alt: article.title,
        },
      ],
      locale: 'es_ES',
      type: 'article', // Crucial para que se reconozca como artículo
      publishedTime: new Date(article.date).toISOString(),
      authors: [article.author],
    },
    // **Twitter Cards (X)**
    twitter: {
      card: 'summary_large_image', // Muestra una imagen grande
      title: article.title,
      description: article.description,
      images: [imageUrl], // URL de la imagen para Twitter
      creator: '@TuUsuarioDeTwitter', // Opcional: tu usuario de Twitter
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
              <div className="mt-6 flex items-center gap-4">
                <Avatar className="h-14 w-14 sm:h-16 sm:w-16">
                  <AvatarImage src={article.authorImageUrl} alt={article.author} className="object-cover" />
                  <AvatarFallback>{article.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground text-base sm:text-lg">{article.author}</p>
                  <p className="text-muted-foreground text-sm">
                    Publicado el {new Date(article.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>
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
                {article.content && <div dangerouslySetInnerHTML={{ __html: article.content }} />}
            </article>

            {/* **PASO 3: SECCIÓN DE COMPARTIR NATIVA** */}
            <section className="mt-12 pt-8 border-t">
              <h3 className="text-xl font-semibold text-center mb-4">¡Comparte este artículo!</h3>
              <ShareButtons />
            </section>

          </div>
        </div>
      </main>
    </>
  );
}
