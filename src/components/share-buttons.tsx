'use client';

import React, { useState, useEffect } from 'react';
import { Twitter, Facebook, Linkedin, MessageCircle, Telegram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'next-share';

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

  return (
    <div className={cn("flex flex-col sm:flex-row items-center gap-4", className)}>
        <h3 className="font-semibold text-lg text-foreground flex-shrink-0">Compartir artículo:</h3>
        <div className="flex items-center gap-2">
            <TwitterShareButton url={currentUrl} title={title}>
                <Button
                    variant="outline"
                    size="icon"
                    aria-label="Compartir en Twitter"
                    className="hover:bg-[#1DA1F2] hover:text-white"
                >
                    <Twitter className="h-5 w-5" />
                </Button>
            </TwitterShareButton>
            <FacebookShareButton url={currentUrl} quote={title}>
                 <Button
                    variant="outline"
                    size="icon"
                    aria-label="Compartir en Facebook"
                    className="hover:bg-[#1877F2] hover:text-white"
                >
                    <Facebook className="h-5 w-5" />
                </Button>
            </FacebookShareButton>
            <LinkedinShareButton url={currentUrl} title={title}>
                <Button
                    variant="outline"
                    size="icon"
                    aria-label="Compartir en LinkedIn"
                    className="hover:bg-[#0A66C2] hover:text-white"
                >
                    <Linkedin className="h-5 w-5" />
                </Button>
            </LinkedinShareButton>
            <WhatsappShareButton url={currentUrl} title={title} separator=" - ">
                <Button
                    variant="outline"
                    size="icon"
                    aria-label="Compartir en WhatsApp"
                    className="hover:bg-[#25D366] hover:text-white"
                >
                    <MessageCircle className="h-5 w-5" />
                </Button>
            </WhatsappShareButton>
            <TelegramShareButton url={currentUrl} title={title}>
              <Button
                variant="outline"
                size="icon"
                aria-label="Compartir en Telegram"
                className="hover:bg-[#0088CC] hover:text-white"
              >
                <Telegram className="h-5 w-5" />
              </Button>
            </TelegramShareButton>
        </div>
    </div>
  );
};