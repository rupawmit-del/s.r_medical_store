import { SITE_CONFIG } from '../config/siteConfig';

export interface PageSeoProps {
  title: string;
  description: string;
  canonicalPath?: string;
}

export function updatePageSeo({ title, description, canonicalPath = '/' }: PageSeoProps) {
  // Update document title
  const fullTitle = `${title} | ${SITE_CONFIG.businessName}`;
  document.title = fullTitle;

  // Update meta description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', description);

  // Update OpenGraph Title & Description
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', fullTitle);

  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', description);

  // Update Twitter Title & Description
  let twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) twTitle.setAttribute('content', fullTitle);

  let twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc) twDesc.setAttribute('content', description);

  // Update Canonical
  let canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute('href', `${window.location.origin}${canonicalPath}`);
  }
}
