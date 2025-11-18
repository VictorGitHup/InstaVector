'use client';

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  EmailShareButton,
  EmailIcon,
} from 'next-share';

type ShareButtonsProps = {
  url: string;
  title: string;
};

const ShareButtons = ({ url, title }: ShareButtonsProps) => {
  const iconSize = 54;
  const iconBgStyle = { borderRadius: '50%' };

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={iconSize} bgStyle={iconBgStyle} />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={iconSize} bgStyle={iconBgStyle} />
      </TwitterShareButton>

      <LinkedinShareButton url={url} title={title}>
        <LinkedinIcon size={iconSize} bgStyle={iconBgStyle} />
      </LinkedinShareButton>

      <WhatsappShareButton url={url} title={title} separator=":: ">
        <WhatsappIcon size={iconSize} bgStyle={iconBgStyle} />
      </WhatsappShareButton>

      <TelegramShareButton url={url} title={title}>
        <TelegramIcon size={iconSize} bgStyle={iconBgStyle} />
      </TelegramShareButton>

      <EmailShareButton url={url} subject={title}>
        <EmailIcon size={iconSize} bgStyle={iconBgStyle} />
      </EmailShareButton>
    </div>
  );
};

export default ShareButtons;
