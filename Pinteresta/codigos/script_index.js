import { PegarImagens, NumeroAleatorioNaoRepetido, CriarVizualizacao, CriarMandarPublicacao } from './script_index_modulo.js';

//https://jsonplaceholder.typicode.com/photos
const lugarCaixas = 'galeria-de-artes';
const urlImagens = 'https://jsonplaceholder.typicode.com/photos';

CriarMandarPublicacao('lalal', 'Imagem 1', urlImagens);

PegarImagens(urlImagens).then(function(imags) {
   let valor_max = NumeroAleatorioNaoRepetido(0, 99, 0, 8);
    for(var i = 0; i < valor_max.length; i++) {
      let num = valor_max[i];
      CriarVizualizacao(imags[num].url, imags[num].title, lugarCaixas);
    }
});
