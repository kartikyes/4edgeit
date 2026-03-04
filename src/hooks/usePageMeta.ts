import { useEffect } from 'react';

interface PageMetaOptions {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  canonical?: string;
}

export function usePageMeta({ title, description, ogTitle, ogDescription, canonical }: PageMetaOptions) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (el) {
        el.content = content;
      } else {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        el.content = content;
        document.head.appendChild(el);
      }
    };

    setMeta('description', description);
    setMeta('og:title', ogTitle || title, true);
    setMeta('og:description', ogDescription || description, true);
    setMeta('og:type', 'website', true);

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (link) {
        link.href = canonical;
      } else {
        link = document.createElement('link');
        link.rel = 'canonical';
        link.href = canonical;
        document.head.appendChild(link);
      }
    }
  }, [title, description, ogTitle, ogDescription, canonical]);
}
