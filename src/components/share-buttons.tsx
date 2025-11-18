'use client';

import React from 'react';
import { Twitter, Facebook, Linkedin, MessageCircle, Send } from 'lucide-react';
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
  url: string;
  className?: string;
};

export const ShareButtons = ({ title, url, className }: ShareButtonsProps) => {

  if (!url) {
    return null; // Or a loading skeleton
  }

  return (
    <div className={cn("flex flex-col sm:flex-row items-center gap-4", className)}>
        <h3 className="font-semibold text-lg text-foreground flex-shrink-0">Compartir artículo:</h3>
        <div className="flex items-center gap-2">
            <TwitterShareButton url={url} title={title}>
                <Button
                    asChild
                    variant="outline"
                    size="icon"
                    aria-label="Compartir en Twitter"
                    className="hover:bg-[#1DA1F2] hover:text-white"
                >
                    <span>
                        <Twitter className="h-5 w-5" />
                    </span>
                </Button>
            </TwitterShareButton>
            <FacebookShareButton url={url} quote={title}>
                 <Button
                    asChild
                    variant="outline"
                    size="icon"
                    aria-label="Compartir en Facebook"
                    className="hover:bg-[#1877F2] hover:text-white"
                >
                    <span>
                        <Facebook className="h-5 w-5" />
                    </span>
                </Button>
            </FacebookShareButton>
            <LinkedinShareButton url={url}>
                <Button
                    asChild
                    variant="outline"
                    size="icon"
                    aria-label="Compartir en LinkedIn"
                    className="hover:bg-[#0A66C2] hover:text-white"
                >
                    <span>
                        <Linkedin className="h-5 w-5" />
                    </span>
                </Button>
            </LinkedinShareButton>
            <WhatsappShareButton url={url} title={title} separator=" - ">
                <Button
                    asChild
                    variant="outline"
                    size="icon"
                    aria-label="Compartir en WhatsApp"
                    className="hover:bg-[#25D366] hover:text-white"
                >
                    <span>
                        <MessageCircle className="h-5 w-5" />
                    </span>
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
                <span>
                    <Send className="h-5 w-5" />
                </span>
              </Button>
            </TelegramShareButton>
        </div>
    </div>
  );
};
