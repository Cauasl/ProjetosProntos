const CACHE_NAME = 'MeuCache';
const arquivosParaArmazenar = ['./index.html', './style.css', './estiloDasCaixas.css', './script_index.js', './modulo.js'];

self.addEventListener('install', function(eventoInstall) {
   console.log('Service Worker foi instalado!');
   eventoInstall.waitUntil(caches.open(CACHE_NAME).then(function(dadosCache) {
      console.log('Cache aberto! Nome: ' + CACHE_NAME);
      return dadosCache.addAll(arquivosParaArmazenar);

   }).catch(function(err) {
      console.error(err);
   }));
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
 
