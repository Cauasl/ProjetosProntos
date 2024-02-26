import { CriarCaixa, SelecaoContas } from './modulo.js';

(function() {
	const lista = document.getElementById('lista');

	let cel = lista.getElementsByTagName('li');
	for(var i = 0; i < cel.length; i++) {
		(function(tel) {
			cel[tel].addEventListener('click', function() {
				let nomeCalculo = cel[tel].innerText;
				SelecaoContas(nomeCalculo);
			});
		})(i);
	}
})();
