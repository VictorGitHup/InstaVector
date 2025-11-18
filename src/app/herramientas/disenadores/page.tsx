import Link from 'next/link';
import Header from '@/components/header';
import Icono from '@/components/icono';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, GitCompare, BookOpen, Trash2 } from 'lucide-react';
import { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';

export const metadata: Metadata = {
  title: 'Herramientas para Diseñadores | InstaVector',
  description: 'Una colección de herramientas curadas para potenciar el flujo de trabajo de diseñadores gráficos y web.',
  keywords: ['herramientas de diseño', 'recursos para diseñadores', 'vectorizador online', 'comparador de imágenes', 'limpiar fondo de imagen', 'utilidades de diseño'],
};

const tools = [
    {
        icon: Icono,
        title: "InstaVector",
        description: "Conversor de imagen a SVG, rápido y seguro.",
        features: [
            "Convierte JPG/PNG a SVG en segundos con trazado de alta precisión.",
            "Ideal para preparar logos y gráficos para web, impresión y animación.",
            "100% gratuito y privado. Tus archivos se eliminan automáticamente."
        ],
        href: "/"
    },
    {
        icon: GitCompare,
        title: "Comparador Vectorial",
        description: "Visualiza la diferencia entre raster y vector.",
        features: [
            "Compara de forma interactiva imágenes PNG/JPG vs. SVG.",
            "Utiliza el zoom para ver la pixelación en imágenes raster.",
            "Entiende por qué los vectores son cruciales para la escalabilidad."
        ],
        href: "/herramientas/comparador-vectorial"
    },
    {
        icon: Trash2,
        title: "Limpiar Fondo",
        description: "Elimina el fondo de tus imágenes fácilmente.",
        features: [
            "Aísla objetos y personas con un solo clic de forma automática.",
            "Prepara tus imágenes para una vectorización más limpia y precisa.",
            "Herramienta gratuita, ideal para e-commerce y diseño."
        ],
        href: "/herramientas/limpiar-fondo"
    },
    {
        icon: BookOpen,
        title: "Guía de Uso",
        description: "Domina el arte de la vectorización profesional.",
        features: [
            "Aprende a preparar tus imágenes para obtener los mejores resultados.",
            "Soluciona problemas comunes como bordes irregulares o pérdida de detalles.",
            "Consejos de expertos para optimizar tus archivos SVG para cualquier uso."
        ],
        href: "/herramientas/guia-de-uso"
    }
];


export default function HerramientasDisenadoresPage() {
  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Herramientas', href: '/herramientas/disenadores' },
  ];

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center bg-background p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-6xl py-8 sm:py-12">
          <header className="mb-8 sm:mb-12 max-w-4xl mx-auto">
            <Breadcrumb items={breadcrumbItems} />
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mt-4">
              Herramientas para Diseñadores
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Recursos para optimizar tu flujo de trabajo creativo.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {tools.map((tool) => (
                <Card key={tool.title} className="flex flex-col">
                    <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                        <tool.icon className="h-8 w-8 text-primary" />
                        <CardTitle className="text-2xl">{tool.title}</CardTitle>
                        </div>
                        <CardDescription>{tool.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <ul className="space-y-3 text-sm">
                            {tool.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button asChild className="w-full">
                        <Link href={tool.href}>
                            Ir a la Herramienta <ArrowRight className="ml-2 h-4 w-4" />
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
