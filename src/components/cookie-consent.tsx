'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Cookie } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if running on the client
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('cookie_consent');
      if (consent !== 'true') {
        // Use a timeout to avoid hydration issues and layout shifts
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1500);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handleAccept = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookie_consent', 'true');
      setIsVisible(false);
    }
  };

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 transition-transform duration-500 ease-in-out",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
      aria-hidden={!isVisible}
      role="dialog"
      aria-labelledby="cookie-consent-title"
    >
      <Card className="max-w-3xl mx-auto p-4 sm:p-6 shadow-2xl flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-shrink-0">
          <Cookie className="h-8 w-8 text-primary" />
        </div>
        <div className="flex-grow text-sm text-muted-foreground text-center sm:text-left">
          <h2 id="cookie-consent-title" className="font-semibold text-base text-foreground mb-1">
            Uso de Cookies
          </h2>
          <p>
            Utilizamos cookies para analizar el tráfico del sitio y mejorar tu experiencia. Al aceptar, confirmas que estás de acuerdo con nuestro tratamiento de datos. Puedes obtener más información en nuestra{' '}
            <Link href="/politica-de-datos" className="text-primary hover:underline font-medium">
              Política de Datos
            </Link>.
          </p>
        </div>
        <div className="flex-shrink-0 w-full sm:w-auto">
          <Button onClick={handleAccept} className="w-full">
            Aceptar
          </Button>
        </div>
      </Card>
    </div>
  );
}
