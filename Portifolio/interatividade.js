//Sistema das trocas de imagens para iframe e visse e versa.
let quantINPUT = document.getElementsByName('bt');
let iframe = document.getElementsByTagName('iframe');
let img = document.getElementsByTagName('img');

for(var i=0; i < quantINPUT.length; i++) {
	let sim_nao = true;
	(function (val) {
		quantINPUT[val].addEventListener("click", function() {
	if(sim_nao) {
		img[val].style.display = "none";
		iframe[val].style.display = "block";
		quantINPUT[val].setAttribute("value", "< Ver imagem do site");
		sim_nao = !sim_nao;		
		
	}else {
		img[val].style.display = "block";
		iframe[val].style.display = "none";
		quantINPUT[val].setAttribute("value", "Ver pré visualização >");
		sim_nao = !sim_nao;
	}
	
});
	}(i));
}


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