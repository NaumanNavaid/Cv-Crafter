'use client';

import { useEffect } from 'react';

// Facebook Pixel types
declare global {
  interface Window {
    fbq?: (command: string, ...args: any[]) => void;
  }
}

interface SocialTrackingProps {
  facebookPixelId?: string;
}

// Facebook Pixel script initialization - MINIMAL VERSION FOR FORM TRACKING ONLY
const FB_PIXEL_SCRIPT = `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
`;

export function SocialTracking({
  facebookPixelId
}: SocialTrackingProps) {
  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production' && facebookPixelId) {
      // Inject Facebook Pixel script - NO PageView tracking
      const script = document.createElement('script');
      script.innerHTML = FB_PIXEL_SCRIPT + `fbq('init', '${facebookPixelId}');`;
      document.head.appendChild(script);

      // Initialize fbq function
      window.fbq = window.fbq || function() {
        (window.fbq as any).q = (window.fbq as any).q || [];
        (window.fbq as any).q.push(arguments);
      };

      // Initialize fbq properties
      (window.fbq as any)._fbq = (window.fbq as any)._fbq || (window.fbq as any).n;
    }
  }, [facebookPixelId]);

  return null;
}

// Custom hook for Facebook tracking - FORM CLICKS ONLY
export const useSocialTracking = () => {
  // ONLY track form clicks in the builder - nothing else
  const trackFormClick = (formType: string, buttonName: string) => {
    if (typeof window !== 'undefined' && window.fbq && process.env.NODE_ENV === 'production') {
      window.fbq('trackCustom', 'FormClick', {
        form_type: formType,
        button_name: buttonName,
        page_location: 'resume-builder'
      });
    }
  };

  return {
    trackFormClick,
  };
};