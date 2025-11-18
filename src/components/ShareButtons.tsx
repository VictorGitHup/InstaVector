'use client';

import React, { useState, useEffect } from 'react';
import { Share2, Twitter, Facebook, Linkedin, Mail, Send } from 'lucide-react';

const ShareButtons = () => {
  const [pageUrl, setPageUrl] = useState('');
  const [pageTitle, setPageTitle] = useState('');
  const [isWebShareSupported, setIsWebShareSupported] = useState(false);

  useEffect(() => {
    // Estos valores solo están disponibles en el cliente
    setPageUrl(window.location.href);
    setPageTitle(document.title);
    if (navigator.share) {
      setIsWebShareSupported(true);
    }
  }, []);

  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedTitle = encodeURIComponent(pageTitle);

  const socialLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
    email: `mailto:?subject=${encodedTitle}&body=Echa un vistazo a este enlace:%20${encodedUrl}`,
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: pageTitle,
          url: pageUrl,
        });
        console.log('Contenido compartido con éxito');
      } catch (error) {
        console.error('Error al compartir:', error);
      }
    }
  };

  const buttonStyle =
    'flex items-center justify-center w-12 h-12 rounded-full border bg-background text-foreground transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary';

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {isWebShareSupported && (
        <button
          onClick={handleNativeShare}
          aria-label="Compartir"
          className={`${buttonStyle} hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground`}
        >
          <Share2 className="h-6 w-6" />
        </button>
      )}

      <a
        href={socialLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Compartir en Twitter"
        className={`${buttonStyle} hover:bg-[#1DA1F2] hover:text-white focus:bg-[#1DA1F2] focus:text-white`}
      >
        <Twitter className="h-6 w-6" />
      </a>

      <a
        href={socialLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Compartir en Facebook"
        className={`${buttonStyle} hover:bg-[#1877F2] hover:text-white focus:bg-[#1877F2] focus:text-white`}
      >
        <Facebook className="h-6 w-6" />
      </a>
      
      <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Compartir en LinkedIn"
        className={`${buttonStyle} hover:bg-[#0A66C2] hover:text-white focus:bg-[#0A66C2] focus:text-white`}
      >
        <Linkedin className="h-6 w-6" />
      </a>

       <a
        href={socialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Compartir en WhatsApp"
        className={`${buttonStyle} hover:bg-[#25D366] hover:text-white focus:bg-[#25D366] focus:text-white`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
      </a>

      <a
        href={socialLinks.telegram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Compartir en Telegram"
        className={`${buttonStyle} hover:bg-[#229ED9] hover:text-white focus:bg-[#229ED9] focus:text-white`}
      >
        <Send className="h-6 w-6" />
      </a>

      <a
        href={socialLinks.email}
        aria-label="Compartir por Email"
        className={`${buttonStyle} hover:bg-gray-500 hover:text-white focus:bg-gray-500 focus:text-white`}
      >
        <Mail className="h-6 w-6" />
      </a>
    </div>
  );
};

export default ShareButtons;
