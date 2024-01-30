
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

async function PegarJSON(urljson) {
	let dadosPRODS = await fetch(urljson);
	return dadosPRODS.json();
}

PegarJSON('https://raw.githubusercontent.com/Cauasl/hggg/main/api-entreAspas/dadosprodutos.json').then((resdados) => {
	console.log(resdados);
	document.getElementById('nomedoprod').innerText = resdados.fonesdeouvido.nomeproduto;
})