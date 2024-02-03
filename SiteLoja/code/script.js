import { PegarJSON } from './functionRepetida.js';
let aviso = document.getElementById('aviso');

function Verificar() {
	let email = document.getElementById('iemail').value;
	let RegEx = /([a-zA-Z|0-9]{2,})[@]([a-zA-Z|0-9]{2,})(\.[a-z]{2,})(\.[a-z]{2})?/g;
	
	if(RegEx.test(email)) {
		window.location.href = 'index.html';
		aviso.innerText = '';
	}else {
		aviso.innerText = 'Email inválido!';
	}

	let telnum = document.getElementById('inumero');
	if(telnum != null || telnum != undefined) {
		let RegExNum = /([0-9]{2})\s?([0-9])?([0-9]){4}\-?([0-9]{4})/g;
		let numero = telnum.value;
		if(RegExNum.test(numero)) {
			alert('Numero de boa');
		}
	}
}

function MostrarSenha() {
	let senha = document.getElementById('isenha');
	let mostar = document.getElementById('msenha').checked;
	senha.type = mostar? 'text':'password';

	let consenha = document.getElementById('icsenha');
	if(consenha != null || consenha != undefined) {
		consenha.type = mostar? 'text':'password';
	}
}

function mostarmenu() {
	lista = document.getElementById('lista');

	if(lista.style.display == 'block') {
		lista.style.display = 'none';
	}else {
		lista.style.display = 'block';
	}
}

PegarJSON().then((resdados) => {
	console.log(resdados);
	document.getElementById('img-prod').src = resdados['001'].img;
	document.getElementById('nomedoprod').innerText = resdados['001'].nomeproduto;
	let preco = String(resdados['001'].preco);
	preco = preco.replace(/\./g, ',');
	document.getElementById('preco').innerText = `R$ ${preco}`;
})