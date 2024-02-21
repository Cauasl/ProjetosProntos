import { PegarImagens, NumeroAleatorioNaoRepetido, CriarVizualizacao } from './script_index_modulo.js';

//https://jsonplaceholder.typicode.com/photos
let lugarCaixas = 'galeria-de-artes';
PegarImagens('https://jsonplaceholder.typicode.com/photos').then(function(imags) {
   let valor_max = NumeroAleatorioNaoRepetido(0, 16);
    for(var i = 0; i <= valor_max.length; i++) {
      let num = valor_max[i];
      CriarVizualizacao(imags[num].url, imags[num].title, lugarCaixas);
    }
});





// let max = 15;
// let min = 0;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);