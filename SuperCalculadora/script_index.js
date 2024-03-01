import { CriarCaixa, idAleatorio } from './modulo.js';

(function() {

	//Adiciona na lista, ao clicar uma funcão é chamada para criar a operação
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

	//Registrando Service Worker
	if('serviceWorker' in navigator) {
		//The Service Worker it works!
		//console.log('O Service Worker funciona!');
		navigator.serviceWorker.register('./myService-worker.js').then(function(resposta) {
			console.log('O Service Worker foi registrado: ' + resposta);
		}).catch(function(err) {
			console.error('Não foi possivel registrar o Service Worker: ' + err);
		});
	}else {
		//The Service Worker not it works!
		console.error('O Service Worker não funciona!');
	}
})();


class OperacoesMatematicas {
	#caixadvalores = null;
	#controle = true;

	Soma(n1, n2) {
		if(this.#caixadvalores != null && this.#controle == true) {
			this.#caixadvalores = n1 + n2;
		}else {
			return Number(n1) + Number(n2);
		}
	}
	
	Subtracao(n1, n2) {
		if(this.#caixadvalores != null && this.#controle == true) {
			this.#caixadvalores = n1 - n2;
		}else {
			return Number(n1) - Number(n2);
		}
	}
	
	Multiplicacao(n1, n2) {
		if(this.#caixadvalores != null && this.#controle == true) {
			this.#caixadvalores = n1 + n2;
		}else {
			return Number(n1) * Number(n2);
		}
	}
}


function SelecaoContas(QualConta) {
	const calcular = new OperacoesMatematicas();

	let localResposta;
	let localConteinerInputs;

	switch(QualConta) {
		case 'Soma':
			localResposta = idAleatorio() + 'RES';
			localConteinerInputs = idAleatorio() + 'CINPUT';	

			CriarCaixa(idAleatorio(), QualConta, function() {
				let valores = document.getElementById(localConteinerInputs).getElementsByTagName('input');
				let calculo = calcular.Soma(valores[0].value, valores[1].value);
				document.getElementById(localResposta).innerHTML = 'A Soma é ' + calculo;
			});
		break;

		case 'Subtração':
			localResposta = idAleatorio() + 'RES';
			localConteinerInputs = idAleatorio() + 'CINPUT'

			CriarCaixa(idAleatorio(), QualConta, function() {
				let valores = document.getElementById(localConteinerInputs).getElementsByTagName('input');
				let calculo = calcular.Subtracao(valores[0].value, valores[1].value);
				document.getElementById(localResposta).innerHTML = 'A Subtração é' + calculo;
			});
		break;

		case 'Multiplicação':
			localResposta = idAleatorio() + 'RES';
			localConteinerInputs = idAleatorio() + 'CINPUT'
	
			CriarCaixa(idAleatorio(), QualConta, function() {
				let valores = document.getElementById(localConteinerInputs).getElementsByTagName('input');
				let calculo = calcular.Multiplicacao(valores[0].value, valores[1].value);
				document.getElementById(localResposta).innerHTML = 'A Multiplicação é ' + calculo;
			});
		break;
		
		default:
			alert('Não encontrado a operação ' + QualConta);
		break;
	}
}