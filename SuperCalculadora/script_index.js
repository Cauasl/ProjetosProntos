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

class OperacoesMatematicas {
	#caixadvalores = null;
	#controle = true;

	Soma(n1, n2) {
		if(this.#caixadvalores != null && this.#controle == true) {
			this.#caixadvalores = n1 + n2;
		}else {
			return n1 + n2;
		}
	}
}
