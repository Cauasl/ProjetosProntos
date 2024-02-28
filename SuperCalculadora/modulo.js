
class OperacoesMatematicas {
	#caixadvalores = null;
	#controle = true;

	Soma(n1, n2) {
		if(this.#caixadvalores != null && this.#controle == true) {
			this.#caixadvalores = n1 + n2;
		}else {
			return Number(n1) + Number(n2);
		}
	}
}

function BotaoResolverCalculo(idC, funcao) {
	const caixa = document.getElementById(idC);

	const botaoResolver = document.createElement('button');
	

	caixa.appendChild(botaoResolver);
	botaoResolver.innerText = 'Resolver';
	botaoResolver.addEventListener('click', funcao);
}

function CriarCaixa(idC, titulo) {
	
	console.log(`O id da caixa é: ${idC}`);
	const calculadora = document.getElementById('caixa-calculadora');
	
	//Criando caixa com seus estilos
	const caixa = document.createElement("div");
	caixa.setAttribute("id", idC);
	caixa.setAttribute("class", "caixa-calculo");

	const apagar = document.createElement("span"); //Botão de deletar a caixa.
	apagar.setAttribute('style', 'color: red; font-weight: bold; cursor: pointer;');

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
	apagar.innerText = "X";
	apagar.addEventListener("click", function() { //Função de apagar a caixa.
		document.getElementById(idC).remove();
	});

	caixa.appendChild(conteinerInputs);
	setTimeout(function() {
		conteinerInputs.appendChild(conteinerRes);
	}, 1);
}


export function SelecaoContas(QualConta) {

	const calcular = new OperacoesMatematicas();

	let input1;
	let input2;
	let caixa;

	switch(QualConta) {
		case 'Soma':
			CriarCaixa('soma' , QualConta);

			input1 = document.createElement('input');
			input1.setAttribute('type', 'number');
			input2 = document.createElement('input');
			input2.setAttribute('type', 'number');

			caixa = document.getElementById('somaCINPUT');
			caixa.appendChild(input1);
			caixa.appendChild(input2);

			BotaoResolverCalculo('soma', function() {
				let calculo = calcular.Soma(input1.value, input2.value);
				document.getElementById('somaRES').innerHTML = calculo;
			});
		break;

		case 'Subtração':
			CriarCaixa('subtracao' , QualConta);

			input1 = document.createElement('input');
			input1.setAttribute('type', 'number');
			input2 = document.createElement('input');
			input2.setAttribute('type', 'number');

			caixa = document.getElementById('subtracaoCINPUT');
			caixa.appendChild(input1);
			caixa.appendChild(input2);

			BotaoResolverCalculo('subtracao', function() {
				let calculo = Number(input1.value) - Number(input2.value);
				document.getElementById('subtracaoRES').innerHTML = calculo;
			});
		break;

		case 'Multiplicação':
			CriarCaixa('multiplicacao' , QualConta);
		break;
	}
}