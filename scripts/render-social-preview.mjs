// Run from any directory: node scripts/render-social-preview.mjs
// Uses Next's existing image renderer; no browser or extra runtime dependency.
import { ImageResponse } from 'next/og.js';
import React from 'react';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = fileURLToPath(new URL('../', import.meta.url));
const asset = async (name) => `data:image/png;base64,${(await readFile(path.join(root, 'public', name))).toString('base64')}`;
const [logo, dashboard, phone] = await Promise.all([
  asset('icons/bench_rounded.png'), asset('screenshots/dashboard.png'), asset('screenshots/log-workout-mockup.png'),
]);
const h = React.createElement;
const div = (style, ...children) => h('div', {style:{display:'flex', ...style}}, ...children);
const img = (src, style) => h('img', {src, style});
const headline = process.argv[2] || 'Log your lifts. See your progress.';
const headlineSize = Number(process.argv[3] || 65);
const filename = process.argv[4] || 'bench-home-split-headline-v2.png';
const splitHeadline = !process.argv.includes('--full-gradient');
const headlineStyle = {fontSize:headlineSize,fontWeight:700,letterSpacing:'-2.8px',lineHeight:1.2};
const composition = div({width:1200,height:630,position:'relative',overflow:'hidden',backgroundColor:'#fff',fontFamily:'Jakarta'},
  div({position:'absolute',top:0,left:0,width:1200,height:630,backgroundImage:'radial-gradient(ellipse at 10% 65%, #e8dafa 0%, rgba(232,218,250,0) 75%), radial-gradient(ellipse at 90% 60%, #dfe8fc 0%, rgba(223,232,252,0) 75%)'}),
  div({position:'absolute',top:31,left:0,width:1200,justifyContent:'center',alignItems:'center',gap:10,opacity:0.88},
    img(logo,{width:34,height:34}), div({fontSize:23,fontWeight:700,letterSpacing:'0.5px',gap:7,color:'#30364b'}, ...['Bench','Gym','Log'].map(word=>div({},word)))),
  div({position:'absolute',top:95,left:0,width:1200,justifyContent:'center'},
    splitHeadline
      ? div({...headlineStyle, gap:14},
          div({color:'rgba(0,0,0,0.72)'},'Log your lifts.'),
          div({color:'transparent',backgroundImage:'linear-gradient(90deg, #AB55FF, #375FEA)',backgroundClip:'text'},'See your progress.'))
      : div({...headlineStyle,color:'transparent',backgroundImage:'linear-gradient(90deg, #a15dec, #4267e8)',backgroundClip:'text'},headline)),
  div({position:'absolute',left:82,top:237,width:806,padding:5,borderRadius:23,backgroundColor:'#ffffff',border:'1px solid #e6e3ee',boxShadow:'0px 22px 45px rgba(82,62,140,0.16)',transform:'rotate(3deg)',flexDirection:'column',overflow:'hidden'},
    div({position:'relative',height:35,flexShrink:0,alignItems:'center',justifyContent:'center',backgroundColor:'#fcfbfe'},
      div({position:'absolute',left:12,top:0,height:35,alignItems:'center',gap:6},
        ...['#f66b66','#f5c44c','#62c66a'].map(color=>div({height:8,width:8,borderRadius:8,backgroundColor:color}))),
      div({height:22,width:410,alignItems:'center',justifyContent:'center',borderRadius:6,backgroundColor:'#f5f4f8',fontSize:10,lineHeight:1,color:'#77748a'},'app.benchgymlog.com')),
    img(dashboard,{width:794,height:794*1026/1824})),
  div({position:'absolute',left:890,top:260,width:282,transform:'rotate(-5deg)',borderRadius:48,boxShadow:'-12px 20px 35px rgba(39,27,64,0.25)'},
    img(phone,{width:282,height:282*1500/722})),
);
const fonts = await Promise.all([600,700].map(async weight=>({name:'Jakarta',data:await readFile(path.join(root,`scripts/assets/plus-jakarta-sans-${weight}.ttf`)),weight,style:'normal'})));
const result = new ImageResponse(composition,{width:1200,height:630,fonts});
const output = path.join(root,'public/images/social',filename);
await mkdir(path.dirname(output),{recursive:true});
await writeFile(output,Buffer.from(await result.arrayBuffer()));
console.log(output);
