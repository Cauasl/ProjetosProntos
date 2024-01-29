//Sistema da mostra de contato.
function MostrarContato() {
	let divContato = document.getElementById('divContato');
	//divContato.classList.toggle('EfeitoContato');
	let btContato = document.querySelector("span#btContato");
	
	if(divContato.className == 'EfeitoContato') {
		divContato.removeAttribute('class');
		btContato.innerText = 'Contato >';
	}else {
		divContato.setAttribute('class', 'EfeitoContato');
		btContato.innerText = 'Contato <';
	}
}

fetch('https://api.github.com/users/Cauasl').then(function(resdados) {
	return resdados.json();
}).then(function(resdados2) {
	console.log(resdados2);
	document.getElementById('meunome').innerText = resdados2.name;
	document.getElementById('minhaimg').src = resdados2.avatar_url;
	document.getElementById('minhaimg').alt = resdados2.login;
});