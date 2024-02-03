import { PegarJSON, CriadoCaixasProdutos } from './functionRepetida.js';
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

PegarJSON().then((resdados) => {
	console.log(resdados);

	CriadoCaixasProdutos(1, resdados['001'].img, resdados['001'].classe, resdados['001'].nomeproduto, resdados['001'].preco, 'viewprod.html?idp=001');

	CriadoCaixasProdutos(1, resdados['002'].img, resdados['002'].classe, resdados['002'].nomeproduto, resdados['002'].preco, 'viewprod.html?idp=002');

	CriadoCaixasProdutos(1, resdados['003'].img, resdados['003'].classe, resdados['003'].nomeproduto, resdados['003'].preco, 'viewprod.html?idp=003');
})