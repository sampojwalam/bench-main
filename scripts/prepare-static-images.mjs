import sharp from 'sharp';
import { createHash } from 'node:crypto';
import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
const root = new URL('../', import.meta.url).pathname;
const publicDir = path.join(root, 'public');
const widths = [32,48,64,96,128,256,384,640,750,828,1080,1200,1920];
const manifest = {};
async function visit(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) { await visit(file); continue; }
    if (!/\.(png|webp|jpg|jpeg)$/.test(file)) continue;
    const data = await readFile(file);
    const meta = await sharp(data).metadata();
    const sizes = [...new Set([...widths.filter(w => w < meta.width), Math.min(meta.width,1920)])].sort((a,b)=>a-b);
    const hash = createHash('sha256').update(data).update('webp-q85-v1').digest('hex').slice(0,16);
    for (const width of sizes) {
      await sharp(data).resize({width,withoutEnlargement:true}).webp({quality:85}).toFile(path.join(publicDir,'_images',`${hash}-${width}.webp`));
    }
    manifest['/'+path.relative(publicDir,file).split(path.sep).join('/')] = {hash,widths:sizes};
  }
}
await mkdir(path.join(publicDir,'_images'),{recursive:true});
await visit(path.join(publicDir,'screenshots'));
await visit(path.join(publicDir,'icons'));
await mkdir(path.join(root,'src/generated'),{recursive:true});
await writeFile(path.join(root,'src/generated/image-manifest.json'),JSON.stringify(manifest));
console.log(`Prepared responsive WebP variants for ${Object.keys(manifest).length} images.`);
