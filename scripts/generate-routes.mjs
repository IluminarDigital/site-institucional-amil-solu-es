import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const bundle = await build({entryPoints:[path.join(root,'src/lib/seo.ts')],bundle:true,write:false,platform:'node',format:'esm'});
const {seoRoutes,getSeo,aliases,businessSchema,SITE_URL} = await import('data:text/javascript;base64,' + Buffer.from(bundle.outputFiles[0].text).toString('base64'));
const original = fs.readFileSync(path.join(dist,'index.html'),'utf8');
const escape = s => s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
function render(route) {
 const seo=getSeo(route);
 let html=original.replace(/<title>[\s\S]*?<\/title>/,'<title>'+escape(seo.title)+'</title>')
 .replace(/<meta\s+(?:name="(?:description|robots)"|property="(?:og:title|og:description|og:url)")[^>]*>/g,'')
 .replace(/<link\s+rel="canonical"[^>]*>/g,'');
 const tags='<meta name="description" content="'+escape(seo.description)+'" />\n<meta name="robots" content="'+seo.robots+'" />\n<link rel="canonical" href="'+seo.canonical+'" />\n<meta property="og:title" content="'+escape(seo.title)+'" />\n<meta property="og:description" content="'+escape(seo.description)+'" />\n<meta property="og:url" content="'+seo.canonical+'" />';
 return html.replace('</head>',tags+(route==='/'?'<script id="amil-business-schema" type="application/ld+json">'+JSON.stringify(businessSchema).replaceAll('<','\\u003c')+'</script>':'')+'\n</head>');
}
for(const route of seoRoutes) {
 const dir=path.join(dist,route.path); fs.mkdirSync(dir,{recursive:true}); fs.writeFileSync(path.join(dir,'index.html'),render(route.path));
}
fs.writeFileSync(path.join(dist,'404.html'),render('/404'));
const redirects=[];
const apache=[];
for(const [old,newPath] of Object.entries(aliases)){
 for(const suffix of ['','/']) redirects.push(old+suffix+' '+newPath+'/ 301!');
 apache.push('RewriteRule ^'+old.slice(1)+'/?$ '+newPath+'/ [R=301,L]');
 const dir=path.join(dist,old);fs.mkdirSync(dir,{recursive:true});
 fs.writeFileSync(path.join(dir,'index.html'),'<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="robots" content="noindex,follow"><link rel="canonical" href="'+SITE_URL+newPath+'/"><meta http-equiv="refresh" content="0;url='+newPath+'/"><title>Página movida | AMIL</title></head><body><a href="'+newPath+'/">Continuar para a página atualizada</a></body></html>');
}
const netlify=path.join(dist,'_redirects');
fs.writeFileSync(netlify,redirects.join('\n')+'\n'+(fs.existsSync(netlify)?fs.readFileSync(netlify,'utf8'):''));
const htaccess=path.join(dist,'.htaccess');
if(fs.existsSync(htaccess))fs.writeFileSync(htaccess,fs.readFileSync(htaccess,'utf8').replace('RewriteEngine On','RewriteEngine On\n'+apache.join('\n')));
const vercel=path.join(dist,'vercel.json');
if(fs.existsSync(vercel)){const config=JSON.parse(fs.readFileSync(vercel,'utf8'));config.redirects=[...Object.entries(aliases).map(([source,destination])=>({source,destination:destination+'/',permanent:true})),...(config.redirects||[])];fs.writeFileSync(vercel,JSON.stringify(config,null,2));}
const iis=path.join(dist,'web.config');
if(fs.existsSync(iis))fs.writeFileSync(iis,fs.readFileSync(iis,'utf8').replace('<rules>','<rules>'+Object.entries(aliases).map(([old,dest],i)=>'<rule name="SEO segment '+i+'" stopProcessing="true"><match url="^'+old.slice(1)+'/?$" /><action type="Redirect" url="'+dest+'/" redirectType="Permanent" /></rule>').join('')));
fs.writeFileSync(path.join(dist,'sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+seoRoutes.map(r=>'<url><loc>'+escape(getSeo(r.path).canonical)+'</loc></url>').join('')+'</urlset>');
const robots=path.join(dist,'robots.txt');const rules=fs.existsSync(robots)?fs.readFileSync(robots,'utf8').replace(/^Sitemap:.*$/gmi,''):'User-agent: *\nAllow: /';
fs.writeFileSync(robots,rules+'\nSitemap: '+SITE_URL+'/sitemap.xml\n');
console.log('SEO: '+seoRoutes.length+' páginas, '+Object.keys(aliases).length+' redirecionamentos e sitemap gerados.');

