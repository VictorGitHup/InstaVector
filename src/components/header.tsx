'use client';

import Link from 'next/link';
import { Menu, ChevronDown, ChevronRight, Contrast, ZoomIn, ZoomOut, RefreshCw, Settings } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
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
import { useAccessibility } from './accessibility-provider';

type NavLink = {
  href: string;
  label: string;
  children?: NavLink[];
};

export default function Header() {
  const pathname = usePathname();
  const { 
    toggleHighContrast,
    increaseZoom,
    decreaseZoom,
    resetAccessibility,
  } = useAccessibility();

  const navLinks: NavLink[] = [
    { href: '/', label: 'Inicio' },
    {
      href: '/herramientas/disenadores',
      label: 'Herramientas',
      children: [
        { href: '/herramientas/disenadores', label: 'Todas las herramientas' },
        { href: '/herramientas/comparador-vectorial', label: 'Comparador vectorial' },
        { href: '/herramientas/limpiar-fondo', label: 'Limpiar fondo' },
        { href: '/herramientas/guia-de-uso', label: 'Guía de Uso' },
      ],
    },
    { href: '/sobre-nosotros', label: 'Sobre nosotros' },
    { href: '/contacto', label: 'Contacto' },
    { href: '/blog', label: 'Blog' },
  ];

  const isActive = (href: string, isParent = false) => {
    if (isParent) {
      // Special case for tools to be active on homepage as well, since it's the main tool
      if (href === '/herramientas/disenadores') {
        const toolPaths = ['/', '/herramientas/disenadores', '/herramientas/comparador-vectorial', '/herramientas/limpiar-fondo', '/herramientas/guia-de-uso'];
        return toolPaths.some(p => pathname === p) || pathname.startsWith('/herramientas');
      }
      return pathname.startsWith(href);
    }
     // The main tool is on the homepage
    if (href === '/herramientas/disenadores' && pathname === '/') {
      return true;
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
                "hover:text-foreground"
              )}
              prefetch={false}
            >
              {link.label}
            </Link>
          )
        })}
      </nav>

      <div className="flex items-center gap-1 sm:gap-2">
        {/* Desktop Accessibility Controls */}
        <div className="hidden md:flex items-center gap-1 sm:gap-2">
            <ThemeToggle />
            <Button variant="outline" size="icon" onClick={toggleHighContrast} aria-label="Toggle High Contrast">
              <Contrast className="h-[1.2rem] w-[1.2rem]" />
            </Button>
            <Button variant="outline" size="icon" onClick={decreaseZoom} aria-label="Decrease zoom">
              <ZoomOut className="h-[1.2rem] w-[1.2rem]" />
            </Button>
            <Button variant="outline" size="icon" onClick={increaseZoom} aria-label="Increase zoom">
              <ZoomIn className="h-[1.2rem] w-[1.2rem]" />
            </Button>
            <Button variant="outline" size="icon" onClick={resetAccessibility} aria-label="Reset accessibility settings">
              <RefreshCw className="h-[1.2rem] w-[1.2rem]" />
            </Button>
        </div>


        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
             <SheetHeader className="sr-only">
              <SheetTitle>Menú de navegación</SheetTitle>
              <SheetDescription>
                Navega por las diferentes secciones del sitio web de InstaVector.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-6">
              <Link href="/" className="flex items-center gap-2" prefetch={false}>
                <Icono className="h-6 w-6" />
                <span className="text-lg font-semibold">InstaVector</span>
              </Link>
              <nav className="grid gap-1 text-base font-medium">
                {navLinks.map((link) => {
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
                        "hover:text-accent-foreground"
                      )}
                      prefetch={false}
                    >
                      {link.label}
                    </Link>
                   )
                })}
              </nav>

               {/* Mobile Accessibility Controls */}
                <Collapsible className="grid gap-1">
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
                    <span>Accesibilidad</span>
                    <Settings className="h-4 w-4 transition-transform data-[state=open]:rotate-90" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-4">
                    <div className="grid gap-2 p-2 border-l">
                        <ThemeToggle />
                        <Button variant="outline" onClick={toggleHighContrast} className="justify-start">
                          <Contrast className="mr-2" /> Alto Contraste
                        </Button>
                         <Button variant="outline" onClick={decreaseZoom} className="justify-start">
                          <ZoomOut className="mr-2" /> Reducir Zoom
                        </Button>
                         <Button variant="outline" onClick={increaseZoom} className="justify-start">
                          <ZoomIn className="mr-2" /> Aumentar Zoom
                        </Button>
                         <Button variant="outline" onClick={resetAccessibility} className="justify-start">
                          <RefreshCw className="mr-2" /> Reiniciar
                        </Button>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
