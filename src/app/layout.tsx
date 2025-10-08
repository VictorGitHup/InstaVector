import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import GoogleAnalytics from '@/components/google-analytics';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'InstaVector | Vectorizador Online Gratuito',
  description: 'Convierte PNG/JPG a SVG vectorial online. Rápido, gratis y seguro. La herramienta perfecta para diseñadores y web. Elimina archivos automáticamente.',
  keywords: ['vectorizar imagen', 'conversor PNG a SVG', 'conversor JPG a SVG', 'vectorizador online', 'SVG gratis', 'trazar imagen', 'vectorización rápida', 'herramienta de diseño vectorial', 'imágenes seguras'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
       <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9912635831845010"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.variable} font-body antialiased`}>
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics />}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            {children}
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
