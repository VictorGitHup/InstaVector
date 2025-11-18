'use client';

import React from 'react';
import { Twitter, Facebook, Linkedin, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'next-share';


type SharePageButtonProps = {
  url: string;
  title: string;
  className?: string;
};

const SharePageButton = ({ url, title, className }: SharePageButtonProps) => {

  if (!url) {
    return null; // Or a loading indicator
  }

  return (
    <Card className={cn("mt-16", className)}>
        <CardHeader>
            <CardTitle className="text-xl sm:text-2xl text-center">¿Te ha gustado esta página? ¡Compártela!</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center items-center gap-2 sm:gap-4">
            <TwitterShareButton url={url} title={title}>
                <Button asChild variant="outline" size="icon" aria-label="Compartir en Twitter" className="hover:bg-[#1DA1F2] hover:text-white">
                    <span><Twitter className="h-5 w-5" /></span>
                </Button>
            </TwitterShareButton>
            <FacebookShareButton url={url} quote={title}>
                <Button asChild variant="outline" size="icon" aria-label="Compartir en Facebook" className="hover:bg-[#1877F2] hover:text-white">
                    <span><Facebook className="h-5 w-5" /></span>
                </Button>
            </FacebookShareButton>
            <LinkedinShareButton url={url}>
                 <Button asChild variant="outline" size="icon" aria-label="Compartir en LinkedIn" className="hover:bg-[#0A66C2] hover:text-white">
                    <span><Linkedin className="h-5 w-5" /></span>
                </Button>
            </LinkedinShareButton>
            <WhatsappShareButton url={url} title={title} separator=" - ">
                <Button asChild variant="outline" size="icon" aria-label="Compartir en WhatsApp" className="hover:bg-[#25D366] hover:text-white">
                    <span><MessageCircle className="h-5 w-5" /></span>
                </Button>
            </WhatsappShareButton>
            <TelegramShareButton url={url} title={title}>
              <Button
                asChild
                variant="outline"
                size="icon"
                aria-label="Compartir en Telegram"
                className="hover:bg-[#0088CC] hover:text-white"
              >
                <span><Send className="h-5 w-5" /></span>
              </Button>
            </TelegramShareButton>
        </CardContent>
    </Card>
  );
};

export default SharePageButton;
