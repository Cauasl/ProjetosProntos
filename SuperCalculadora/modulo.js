

function CriarCaixaBase(idC, titulo) {
	
	console.log(`O id da caixa é: ${idC}`);
	const calculadora = document.getElementById('caixa-calculadora');
	
	//Criando caixa com seus estilos
	const caixa = document.createElement("div");
	caixa.setAttribute("id", idC);
	caixa.setAttribute("class", "caixa-calculo");

	const apagar = document.createElement("span"); //Botão de deletar a caixa.
	apagar.setAttribute('style', 'color: red; cursor: pointer;');
	apagar.setAttribute('class', 'material-symbols-outlined');

	//Conteiner do titulo e botão de apagar.
	const CaixaTitulo = document.createElement('div');
	const Titulo = document.createElement('h2');
	CaixaTitulo.setAttribute('class', 'lugar-do-titulo-da-caixa');

	//Conteiner dos inputs e a caixa de resposta.
	const conteinerInputsId = idC + 'CINPUT';
	const conteinerInputs = document.createElement('div');
	conteinerInputs.setAttribute('class', 'conteiner-inputs');
	conteinerInputs.setAttribute('id', conteinerInputsId);

	const conteinerResId = idC + 'RES';
	const conteinerRes = document.createElement('div');
	conteinerRes.setAttribute('class', 'conteiner-resposta');
	conteinerRes.setAttribute('id', conteinerResId);

	//Aplicando a caixa.
	calculadora.appendChild(caixa); //Aplicando a caixa do conteiner principal.
	
	//Colocando o conteiner do titulo e botão.
	caixa.appendChild(CaixaTitulo);
	CaixaTitulo.appendChild(Titulo);
	CaixaTitulo.appendChild(apagar);
	Titulo.innerText = titulo;
	apagar.innerText = "Delete";
	apagar.addEventListener("click", function() { //Função de apagar a caixa.
		document.getElementById(idC).remove();
	});

	caixa.appendChild(conteinerInputs);
	setTimeout(function() {
		conteinerInputs.appendChild(conteinerRes);
	}, 1);
}


export function CriarCaixa(idCaixa, NomeOperacao, funcao) {
	CriarCaixaBase(idCaixa , NomeOperacao);

	const CINPUT = idCaixa + 'CINPUT';
	const caixa = document.getElementById(idCaixa);

	const input1 = document.createElement('input');
	input1.setAttribute('type', 'number');
	input1.setAttribute('name', idCaixa);

	const input2 = document.createElement('input');
	input2.setAttribute('type', 'number');
	input2.setAttribute('name', idCaixa);

	const conteinerInputs = document.getElementById(CINPUT);
	conteinerInputs.appendChild(input1);
	conteinerInputs.appendChild(input2);

	const botaoResolver = document.createElement('button');
	caixa.appendChild(botaoResolver);
	botaoResolver.innerText = 'Resolver';
	botaoResolver.addEventListener('click', funcao);
}

export function idAleatorio() {
	const dataDeHoje = new Date();
	const mes = String(dataDeHoje.getMonth() + 1);
	return String(dataDeHoje.getFullYear()) + mes + String(dataDeHoje.getDate()) + String(dataDeHoje.getHours()) + String(dataDeHoje.getMinutes()) + String(dataDeHoje.getSeconds()) + String(dataDeHoje.getMilliseconds());
}