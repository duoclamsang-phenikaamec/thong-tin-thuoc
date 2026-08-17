/* Chỉ đổi số này khi sửa index.html hoặc sw.js.
   Cập nhật nội dung thì chỉ thay data.js hoặc chu-de.js — hai tệp đó luôn được lấy mới. */
const CACHE = 'thong-tin-thuoc-2026-08-17-2';
const ASSETS = ['./','./index.html','./data.js','./chu-de.js','./bien-tap.html','./manifest.webmanifest',
  './icons/icon-192.png','./icons/icon-512.png','./icons/icon-maskable-512.png','./icons/apple-touch-icon.png'];
function fresh(req,key){
  return new Promise(resolve=>{
    let done=false;
    const fb=()=>{ if(!done){done=true; caches.match(key||req).then(r=>resolve(r||Response.error()))} };
    const t=setTimeout(fb,3500);
    fetch(req).then(res=>{ clearTimeout(t);
      const c=res.clone(); caches.open(CACHE).then(x=>x.put(key||req,c));
      if(!done){done=true;resolve(res)} }).catch(()=>{clearTimeout(t);fb()});
  });
}
self.addEventListener('install',e=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))) });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys()
  .then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())) });
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET'||new URL(req.url).origin!==location.origin) return;
  if(req.mode==='navigate') return e.respondWith(fresh(req,'./index.html'));
  const p=new URL(req.url).pathname;
  if(p.endsWith('/data.js')||p.endsWith('/chu-de.js')) return e.respondWith(fresh(req));
  e.respondWith(caches.match(req).then(h=>h||fetch(req).then(res=>{
    const c=res.clone(); caches.open(CACHE).then(x=>x.put(req,c)); return res; })));
});
self.addEventListener('message',e=>{ if(e.data==='SKIP_WAITING') self.skipWaiting() });
