document.getElementById('very').addEventListener('click', function() {
	//Verificar email e numero
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
});