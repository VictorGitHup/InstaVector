import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'InstaVector',
  description: 'Convierte PNG/JPG a SVG vectorial online. Rápido, gratis y seguro. La herramienta perfecta para diseñadores y web. Elimina archivos automáticamente.',
  keywords: ['vectorizar imagen', 'conversor PNG a SVG', 'conversor JPG a SVG', 'vectorizador online', 'SVG gratis', 'trazar imagen', 'vectorización rápida', 'herramienta de diseño vectorial', 'imágenes seguras'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            {children}
          </div>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
