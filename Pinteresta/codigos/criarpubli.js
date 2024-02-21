import { CriarMandarPublicacao } from './script_index_modulo.js';

document.getElementById('botao').addEventListener('click', function() {
   let url = 'https://jsonplaceholder.typicode.com/photos';
   let arquivo = document.getElementById('imagemcarregada').value;
   let titulo = document.getElementById('titulo-imagem').value;
   CriarMandarPublicacao(arquivo, titulo, url);
});