

function CriarCaixa(idC) {
	console.log(`O id da caixa é: ${idC}`);
	const calculadora = document.getElementById('caixa-calculadora');
	
	const caixa = document.createElement("div");
	caixa.setAttribute("id", idC);
	caixa.setAttribute("class", "caixa-calculo")
	
	const apagar = document.createElement("span");
	
	calculadora.appendChild(caixa);
	caixa.appendChild(apagar);
	apagar.innerText = "X";
	apagar.addEventListener("click", function() {
		document.getElementById(idC).remove();
	});
}

CriarCaixa("oneCase");
CriarCaixa("hshs");
CriarCaixa("jwnen");
CriarCaixa("ujzhz");