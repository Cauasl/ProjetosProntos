let sim_nao = true;

function videoopen() {
	let divfundovideo = document.querySelector(".videofrase div");
	let iframe = document.querySelector(".videofrase iframe");
	let botao = document.querySelector(".videofrase input");
	let botaovalue = document.querySelector('#videoopen');
	
	if(sim_nao) {
		divfundovideo.setAttribute("style", "width: 100%; padding-bottom: 69%;");
		iframe.setAttribute("style", "height: 80%;");
		botao.setAttribute("style", "top: 89%;");
		sim_nao = !sim_nao;
		botaovalue.setAttribute('value', 'Diminuir video');
	}else {
		divfundovideo.setAttribute("style", "width: 48%; padding-bottom: 35%;");
		iframe.setAttribute("style", "height: 75%;");
		botao.setAttribute("style", "top: 83%;");
		sim_nao = !sim_nao;
		botaovalue.setAttribute("value", "Aumentar video")
	}
	
}