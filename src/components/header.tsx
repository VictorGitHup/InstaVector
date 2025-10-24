'use client';

import Link from 'next/link';
import { Menu, ChevronDown, ChevronRight } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Icono from './icono';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from '@/components/ui/collapsible';
import React from 'react';

type NavLink = {
  href: string;
  label: string;
  children?: NavLink[];
};

export default function Header() {
  const pathname = usePathname();

  const navLinks: NavLink[] = [
    { href: '/', label: 'Inicio' },
    {
      href: '/herramientas',
      label: 'Herramientas',
      children: [
        { href: '/', label: 'Convertir PNG/JPG a SVG' },
        { href: '/herramientas/limpiar-fondo', label: 'Limpiar fondo' },
        { href: '/herramientas/comparador-vectorial', label: 'Comparador vectorial' },
        { href: '/how-it-works', label: 'Guía de uso' },
      ],
    },
    { href: '/sobre-nosotros', label: 'Sobre nosotros' },
    { href: '/contacto', label: 'Contacto' },
    { href: '/noticias', label: 'Blog / Recursos' },
  ];

  const isActive = (href: string, isParent = false) => {
    if (isParent) {
      if (href === '/herramientas') {
        const toolPaths = ['/', '/herramientas/comparador-vectorial', '/how-it-works', '/herramientas/limpiar-fondo'];
        return toolPaths.includes(pathname) || pathname.startsWith('/herramientas');
      }
      return pathname.startsWith(href);
    }
    return pathname === href;
  };

  return (
    <header className="w-full px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between bg-background border-b sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <Icono className="h-6 w-6" />
        <span className="text-lg font-semibold">InstaVector</span>
      </Link>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
        {navLinks.map((link) => {
          const isBlogLink = link.href === '/noticias';
          return link.children ? (
            <DropdownMenu key={link.href}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className={cn(
                    "p-0 h-auto hover:bg-transparent transition-colors",
                    isActive(link.href, true) ? "text-foreground" : "text-foreground/70",
                    "hover:text-foreground"
                  )}>
                  {link.label}
                  <ChevronDown className="relative top-[1px] ml-1 h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {link.children.map((child) => (
                  <DropdownMenuItem key={child.href} asChild>
                    <Link href={child.href} prefetch={false}>{child.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors",
                isActive(link.href) 
                  ? "text-foreground" 
                  : "text-foreground/70",
                "hover:text-foreground",
                isBlogLink && "bg-primary/10 px-3 py-1.5 rounded-md"
              )}
              prefetch={false}
            >
              {link.label}
            </Link>
          )
        })}
      </nav>

      <div className="flex items-center gap-2">
        <ThemeToggle />
        
        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 py-6">
              <Link href="/" className="flex items-center gap-2" prefetch={false}>
                <Icono className="h-6 w-6" />
                <span className="text-lg font-semibold">InstaVector</span>
              </Link>
              <nav className="grid gap-1 text-base font-medium">
                {navLinks.map((link) => {
                  const isBlogLink = link.href === '/noticias';
                  return link.children ? (
                    <Collapsible key={link.href} className="grid gap-1">
                      <CollapsibleTrigger className={cn(
                        "flex w-full items-center justify-between rounded-lg px-3 py-2 transition-colors",
                        isActive(link.href, true) ? "text-foreground bg-accent/50" : "text-muted-foreground",
                        "hover:bg-accent hover:text-accent-foreground"
                      )}>
                        <span>{link.label}</span>
                        <ChevronRight className="h-4 w-4 transition-transform data-[state=open]:rotate-90" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pl-4">
                        <div className="grid gap-1">
                          {link.children.map(child => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                "flex items-center rounded-lg px-3 py-2 transition-colors hover:bg-accent",
                                isActive(child.href)
                                  ? "bg-accent text-accent-foreground" 
                                  : "text-muted-foreground",
                                "hover:text-accent-foreground"
                              )}
                              prefetch={false}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                   ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "flex items-center rounded-lg px-3 py-2 transition-colors hover:bg-accent",
                        isActive(link.href)
                          ? "bg-accent text-accent-foreground" 
                          : "text-muted-foreground",
                        "hover:text-accent-foreground",
                        isBlogLink && "bg-primary/10"
                      )}
                      prefetch={false}
                    >
                      {link.label}
                    </Link>
                   )
                })}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
