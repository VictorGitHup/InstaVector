'use client';

import React, { useState, useEffect } from 'react';
import { Twitter, Facebook, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

type ShareButtonsProps = {
  title: string;
  className?: string;
};

export const ShareButtons = ({ title, className }: ShareButtonsProps) => {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    // Ensure this code runs only on the client
    setCurrentUrl(window.location.href);
  }, []);

  if (!currentUrl) {
    return null; // Or a loading skeleton
  }

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
  };

  return (
    <div className={cn("flex flex-col sm:flex-row items-center gap-4", className)}>
        <h3 className="font-semibold text-lg text-foreground flex-shrink-0">Compartir artículo:</h3>
        <div className="flex items-center gap-2">
            <Button
                variant="outline"
                size="icon"
                asChild
                aria-label="Compartir en Twitter"
            >
                <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
                </a>
            </Button>
            <Button
                variant="outline"
                size="icon"
                asChild
                aria-label="Compartir en Facebook"
            >
                <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5" />
                </a>
            </Button>
            <Button
                variant="outline"
                size="icon"
                asChild
                aria-label="Compartir en LinkedIn"
            >
                <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                </a>
            </Button>
            <Button
                variant="outline"
                size="icon"
                asChild
                aria-label="Compartir en WhatsApp"
            >
                <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                </a>
            </Button>
        </div>
    </div>
  );
};
