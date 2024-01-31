import { PegarJSON } from './functionRepetida.js';

let idProduto = new URLSearchParams(window.location.search).get('idp');

//função para colocar o mesmo nome em dois lugares diferentes
let colocarnome = (nome, quant) => {
   for(var i=0; i < quant.length; i++) {
      quant[i].innerText = nome;
   }
}

//Pegando os dados do arquivo.json do repositorio
PegarJSON().then((resdados) => {
   console.log(resdados);

   //Colocando a imagem
   document.getElementById('img-prod').setAttribute('style', `background-image: url(${resdados[idProduto].img})`);

   //Colocando nome do produto
   colocarnome(resdados[idProduto].nomeproduto, document.getElementsByClassName('nomeproduto'));

   //Colocando o preço
   document.getElementById('preco').innerText = resdados[idProduto].preco;

   //Colocando a descrição
   document.getElementById('descricao').innerText = resdados[idProduto].descricao;
})