import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import GoogleAnalytics from '@/components/google-analytics';
import Script from 'next/script';
import Footer from '@/components/footer';
import { AccessibilityProvider } from '@/components/accessibility-provider';
import CookieConsent from '@/components/cookie-consent';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const defaultTitle = 'InstaVector | Vectorizador Online Gratuito';
const defaultDescription = 'Convierte PNG/JPG a SVG vectorial online. Rápido, gratis y seguro. La herramienta perfecta para diseñadores y web. Elimina archivos automáticamente.';
const defaultUrl = 'https://www.instavector.com';
const defaultOgImage = 'https://www.instavector.com/images/articulos/img_intavector12201025.webp';


export const metadata: Metadata = {
  title: {
    template: '%s | InstaVector',
    default: defaultTitle,
  },
  description: defaultDescription,
  keywords: ['vectorizar imagen', 'conversor PNG a SVG', 'conversor JPG a SVG', 'vectorizador online', 'SVG gratis', 'trazar imagen', 'vectorización rápida', 'herramienta de diseño vectorial', 'imágenes seguras'],
  icons: {
    icon: '/ico_instavector.svg',
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: defaultUrl,
    siteName: 'InstaVector',
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: 'Inteligencia Artificial y diseño vectorial',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: [defaultOgImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
       <head>
        <meta name="google-adsense-account" content="ca-pub-9912635831845010" />
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
          <AccessibilityProvider>
            <div className="min-h-screen flex flex-col">
              {children}
              <Footer />
            </div>
            <Toaster />
            <CookieConsent />
          </AccessibilityProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
