/**
 * Utility functions for handling links
 */

/**
 * Determines if a URL is external
 */
export function isExternalUrl(url: string): boolean {
  return url.startsWith('http://') || url.startsWith('https://');
}

/**
 * Gets the appropriate link props for internal vs external URLs
 */
export function getLinkProps(url: string) {
  if (isExternalUrl(url)) {
    return {
      target: '_blank',
      rel: 'noopener noreferrer'
    };
  }
  return {};
}