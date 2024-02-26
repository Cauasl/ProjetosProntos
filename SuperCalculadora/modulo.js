
class OperacoesMatematicas {
	#caixadvalores = null;
	#controle = true;

	Soma(n1, n2) {
		if(this.#caixadvalores != null && this.#controle == true) {
			this.#caixadvalores = n1 + n2;
		}else {
			console.log(Number(n1) + Number(n2));
			//return n1 + n2;
		}
	}
}

export function CriarCaixa(idC, titulo, idB) {
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

	const resposta = document.createElement('button');
	resposta.setAttribute('id', idB);
	resposta.setAttribute('class', 'resposta');

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

	caixa.appendChild(resposta);
	resposta.innerText = 'RESOLVER';
}


export function SelecaoContas(QualConta) {

	const calcular = new OperacoesMatematicas();
	switch(QualConta) {
		case 'Soma':
			CriarCaixa('soma' , QualConta, 'somaB');
         const caixa = document.getElementById('soma');

         const n1_input = document.createElement('input');
			n1_input.setAttribute('type', 'number');
			const n2_input = document.createElement('input');
			n2_input.setAttribute('type', 'number');

			caixa.appendChild(n1_input);
			caixa.appendChild(n2_input);

			document.getElementById('somaB').addEventListener('click', function() {
				calcular.Soma(n1_input.value, n2_input.value);
			});
		break;

		case 'Subtração':
			CriarCaixa('subtracao' , QualConta, 'subtracaoB');
		break;

		case 'Multiplicação':
			CriarCaixa('multiplicacao' , QualConta, 'multiplicacaoB');
		break;
	}
}