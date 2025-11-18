'use client';

import React, { useState, useEffect } from 'react';
import { Twitter, Facebook, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

type SharePageButtonProps = {
  className?: string;
};

const SharePageButton = ({ className }: SharePageButtonProps) => {
  const [pageUrl, setPageUrl] = useState('');
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    // This code runs only on the client, so window is available
    setPageUrl(window.location.href);
    setPageTitle(document.title);
  }, []);

  if (!pageUrl) {
    return null; // Or a loading indicator
  }
  
  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedTitle = encodeURIComponent(pageTitle);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
  };

  return (
    <Card className={cn("mt-16", className)}>
        <CardHeader>
            <CardTitle className="text-xl sm:text-2xl text-center">¿Te ha gustado esta página? ¡Compártela!</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center items-center gap-2 sm:gap-4">
            <Button variant="outline" size="icon" asChild aria-label="Compartir en Twitter" className="hover:bg-[#1DA1F2] hover:text-white">
                <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-5 w-5" />
                </a>
            </Button>
            <Button variant="outline" size="icon" asChild aria-label="Compartir en Facebook" className="hover:bg-[#1877F2] hover:text-white">
                <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-5 w-5" />
                </a>
            </Button>
            <Button variant="outline" size="icon" asChild aria-label="Compartir en LinkedIn" className="hover:bg-[#0A66C2] hover:text-white">
                <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                </a>
            </Button>
            <Button variant="outline" size="icon" asChild aria-label="Compartir en WhatsApp" className="hover:bg-[#25D366] hover:text-white">
                <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                </a>
            </Button>
        </CardContent>
    </Card>
  );
};

export default SharePageButton;
