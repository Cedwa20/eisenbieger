const CACHE='eisenbieger-v22';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-maskable-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
 const req=e.request;
 if(req.method!=='GET')return;
 const url=new URL(req.url);
 if(url.origin!==self.location.origin)return; // Let external fonts and services use their normal network behavior.
 e.respondWith((async()=>{
  try{
   const response=await fetch(req);
   if(response.ok && (response.type==='basic'||response.type==='default')){
    caches.open(CACHE).then(cache=>cache.put(req,response.clone())).catch(()=>{}); // Cache failures must not block network responses.
   }
   return response;
  }catch(err){
   const cached=await caches.match(req);
   if(cached)return cached;
   if(req.mode==='navigate')return caches.match('./index.html');
   return Response.error(); // Never return HTML for a missing icon, manifest, or script.
  }
 })());
});
