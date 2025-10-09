'use client';

import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import Icono from './icono';

export default function Footer() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/herramientas/disenadores', label: 'Herramientas' },
    { href: '/noticias', label: 'Noticias' },
    { href: '/how-it-works', label: 'Cómo Funciona' },
    { href: '/data-policy', label: 'Tratamiento de datos' },
  ];

  const socialLinks = [
    { href: '#', icon: Github, label: 'GitHub' },
    { href: '#', icon: Linkedin, label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-muted text-muted-foreground border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4" prefetch={false}>
              <Icono className="h-8 w-8 text-foreground" />
              <span className="text-xl font-semibold text-foreground">InstaVector</span>
            </Link>
            <p className="text-sm">Convierte, Escala, Diseña. Sin Límites.</p>
          </div>
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Navegación</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2">
                 <li>
                    <Link href="/data-policy" className="text-sm hover:text-primary transition-colors">
                        Política de Datos
                    </Link>
                 </li>
              </ul>
            </div>
            <div>
                <h3 className="font-semibold text-foreground mb-4">Conecta</h3>
                <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                        <Link key={social.label} href={social.href} className="text-muted-foreground hover:text-primary transition-colors">
                            <social.icon className="h-6 w-6" />
                            <span className="sr-only">{social.label}</span>
                        </Link>
                    ))}
                </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm">
          <p>&copy; {new Date().getFullYear()} InstaVector. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
