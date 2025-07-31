export function getBasePath() {
  return process.env.NODE_ENV === 'production' ? '/midland-insurance-website' : '';
}

export function getImagePath(src: string) {
  const basePath = getBasePath();
  return `${basePath}${src}`;
}