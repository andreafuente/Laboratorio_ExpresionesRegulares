export const extraerImagenes = (html: string): string[] => {
  const extraccion = /<img[^>]*src=["']([^"']+)["'][^>]*>/gi;
  const urls: string[] = [];

  let imagen;

  while ((imagen = extraccion.exec(html)) !== null) {
    urls.push(imagen[1]);
  }

  return urls;
};
