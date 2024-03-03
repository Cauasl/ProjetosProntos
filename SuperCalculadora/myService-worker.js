const CACHE_NAME = 'MeuCacheV2';
const arquivosParaArmazenar = ['./index.html', './style.css', './estiloDasCaixas.css', './script_index.js', './modulo.js'];

self.addEventListener('install', function(eventoInstall) {
   console.log('Service Worker foi instalado!');
   eventoInstall.waitUntil(caches.open(CACHE_NAME).then(function(dadosCache) {
      return dadosCache.addAll(arquivosParaArmazenar);

   }).catch(function(err) {
      console.error(err);
   }));
});

self.addEventListener('activate', function(evento) {
   console.log('Service Worker ativado!');
   evento.waitUntil(caches.keys().then(function(NomeDosCaches) {
      NomeDosCaches.filter(function(NomeDesseCache) {
         return NomeDesseCache !== CACHE_NAME;
      }).map(function(ApagarEsseCache) {
         return caches.delete(ApagarEsseCache);
      });
   }))
});

self.addEventListener('fetch', function(evento) {
   console.log('Fetch interceptado:', evento.request);
   evento.respondWith(
     caches.match(evento.request).then(function(res) {
         if(res) {
            return res;
         }else {
            return fetch(evento.request);
         }
       }));
 });
 
