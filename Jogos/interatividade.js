//Sistema de mais informações dos personagens
(function() {
	let bodys = document.body;
	let sec = document.querySelector("section#personagens");
	let t = (sec.querySelectorAll('img').length) - 1;
	let tela = document.querySelector("#tela");
	let texto = ['Um circuito simples com curvas suaves e algumas rampas. Possui a temática clássica do Reino do Cogumelo.',
	'Localizado em uma fazenda, o percurso tem curvas fechadas e obstáculos como Monty Moles e vacas.',
	'Uma montanha de chocolate com terreno acidentado e uma avalanche ocasional de rochas de chocolate.',
	'Um castelo vulcânico com obstáculos perigosos, como Thwomps, lava e pontes móveis.',
	'Uma pista ambientada na selva com curvas fechadas, uma ponte estreita e uma seção subaquática.',
	'Situado em uma autoestrada movimentada, os jogadores devem evitar carros, caminhões e ônibus enquanto correm.',
	'Uma pista longa com muitos saltos e obstáculos. Exige habilidade para evitar quedas e atalhos estratégicos.',
	'Um circuito confuso com múltiplos caminhos possíveis, dificultando a determinação de quem está na liderança.'];
	
	//X
	tela.getElementsByTagName('p')[0].addEventListener("click", function() {
		tela.getElementsByTagName('img')[0].setAttribute("src", "");
		tela.setAttribute('style', 'display: none;');
		bodys.setAttribute('style', 'overflow: auto;');
	});
	
	//Imagens
	for(var i=0; i <= t; i++) {
		let k = sec.getElementsByTagName('img')[i].src;
		let name = sec.getElementsByTagName('img')[i].alt;
		let n = i;
		sec.getElementsByTagName('img')[i].addEventListener("click", function() {
			tela.getElementsByTagName('img')[0].setAttribute("src", `${k}`);
			tela.setAttribute('style', 'display: block;');
			tela.getElementsByTagName('h2')[0].innerHTML = name;
			tela.getElementsByTagName('p')[1].innerHTML = texto[n];
			bodys.setAttribute('style', 'overflow: hidden;');
		});
	}
}());


//Sistema de troca de imagem dos mapas
let mapselect = 1;
let map = document.querySelector('section#map');
let imgmap = map.getElementsByTagName('img')[0];

function ladoE() {
	mapselect--;
	if(mapselect <= 0) {
		mapselect = 5;
	}
	imgmap.setAttribute("src", `imagensmkart/Mapas/map${mapselect}.jpg`);
};
function ladoD() {
	mapselect++;
	if(mapselect > 5) {
		mapselect = 1;
	}
	imgmap.setAttribute("src", `imagensmkart/Mapas/map${mapselect}.jpg`);
};