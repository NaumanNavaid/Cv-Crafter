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

// Facebook Pixel script initialization
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
      // Inject Facebook Pixel script
      const script = document.createElement('script');
      script.innerHTML = FB_PIXEL_SCRIPT + `fbq('init', '${facebookPixelId}');fbq('track', 'PageView');`;
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

// Custom hook for Facebook tracking
export const useSocialTracking = () => {
  // Facebook Pixel tracking
  const trackFacebookEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.fbq && process.env.NODE_ENV === 'production') {
      window.fbq('track', eventName, parameters);
    }
  };

  const trackFacebookCustom = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.fbq && process.env.NODE_ENV === 'production') {
      window.fbq('trackCustom', eventName, parameters);
    }
  };

  // Common Facebook events
  const trackResumeCreatedSocial = (templateType: string, pricingTier: string, value: number) => {
    trackFacebookEvent('Purchase', {
      value: value,
      currency: 'USD',
      content_name: 'Resume Creation',
      content_category: 'Service',
      content_type: templateType,
    });
  };

  const trackLeadSocial = () => {
    trackFacebookEvent('Lead', {
      content_name: 'Contact Form Submission',
      content_category: 'Lead Generation',
    });
  };

  const trackViewContent = (contentType: string, contentId: string) => {
    trackFacebookEvent('ViewContent', {
      content_type: contentType,
      content_ids: [contentId],
    });
  };

  const trackAddToCart = (pricingTier: string, value: number) => {
    trackFacebookEvent('AddToCart', {
      value: value,
      currency: 'USD',
      content_name: pricingTier + ' Plan',
      content_category: 'Service',
    });
  };

  const trackInitiateCheckout = (value: number, pricingTier: string) => {
    trackFacebookEvent('InitiateCheckout', {
      value: value,
      currency: 'USD',
      content_name: pricingTier + ' Plan',
      content_category: 'Service',
    });
  };

  const trackButtonClick = (buttonName: string, pageLocation: string) => {
    trackFacebookCustom('ButtonClick', {
      button_name: buttonName,
      page_location: pageLocation,
    });
  };

  const trackFormSubmission = (formType: string, success: boolean) => {
    trackFacebookCustom('FormSubmission', {
      form_type: formType,
      success: success,
    });
  };

  const trackPageView = () => {
    if (typeof window !== 'undefined' && window.fbq && process.env.NODE_ENV === 'production') {
      window.fbq('track', 'PageView');
    }
  };

  return {
    trackFacebookEvent,
    trackFacebookCustom,
    trackResumeCreatedSocial,
    trackLeadSocial,
    trackViewContent,
    trackAddToCart,
    trackInitiateCheckout,
    trackButtonClick,
    trackFormSubmission,
    trackPageView,
  };
};