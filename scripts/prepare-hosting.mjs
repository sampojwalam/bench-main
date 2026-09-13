import { readFile, writeFile } from 'node:fs/promises';
const legacy = JSON.parse(await readFile(new URL('../config/legacy-redirects.json', import.meta.url)));
const preview = process.argv.includes('--preview');
const config = {
  hosting: {
    site: 'bench-gym-log-main',
    public: 'out',
    ignore: ['firebase.json','**/.*','**/node_modules/**'],
    cleanUrls: true,
    trailingSlash: false,
    redirects: legacy.flatMap(({source,destination}) => [source,source+'/'].map(source => ({source,destination,type:301}))),
    headers: [
      {source:'**',headers:[
        {key:'X-Content-Type-Options',value:'nosniff'},
        {key:'Referrer-Policy',value:'strict-origin-when-cross-origin'},
        ...(preview ? [{key:'X-Robots-Tag',value:'noindex, nofollow'}] : []),
      ]},
      {source:'/_next/static/**',headers:[{key:'Cache-Control',value:'public,max-age=31536000,immutable'}]},
      {source:'/_images/**',headers:[{key:'Cache-Control',value:'public,max-age=31536000,immutable'}]},
      {source:'/images/social/**',headers:[{key:'Cache-Control',value:'public,max-age=86400'}]},
      {source:'/images/exercise-thumbnails/**',headers:[{key:'Cache-Control',value:'public,max-age=86400'}]},
    ],
  },
  emulators: {hosting:{port:3102},ui:{enabled:false}},
};
await writeFile(new URL(preview ? '../firebase.preview.json' : '../firebase.json', import.meta.url),JSON.stringify(config,null,2)+'\n');
