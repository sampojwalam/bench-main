import type { ImageLoaderProps } from 'next/image';
import manifest from '@/generated/image-manifest.json';

export default function staticImageLoader({ src, width }: ImageLoaderProps): string {
  const image = (manifest as Record<string, {hash:string; widths:number[]}>)[src];
  if (!image) throw new Error(`Missing static image: ${src}. Run npm run images.`);
  const size = image.widths.find(size => size >= width) ?? image.widths[image.widths.length - 1];
  return `/_images/${image.hash}-${size}.webp`;
}
