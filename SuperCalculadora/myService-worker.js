const CACHE_NAME = 'MeuCache';
const arquivosParaArmazenar = ['./index.html', './style.css', './script_index.js', './modulo.js'];

self.addEventListener('install', function() {
   console.log('Service Worker foi instalado!');
   caches.open(CACHE_NAME).then(function(dadosCache) {
      console.log('Cache aberto! Nome: ' + CACHE_NAME);
      return dadosCache.addAll(arquivosParaArmazenar);

   }).catch(function(err) {
      console.error(err);
   });
});

self.addEventListener('fetch', function(event) {
   console.log('Fetch interceptado:', event.request);
   event.respondWith(
     caches.match(event.request)
       .then(function(response) {
         return response || fetch(event.request);
       })
   );
 });
 
