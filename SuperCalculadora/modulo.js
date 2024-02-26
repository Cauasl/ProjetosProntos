


export function CriarCaixa(idC, titulo) {
	console.log(`O id da caixa é: ${idC}`);
	const calculadora = document.getElementById('caixa-calculadora');
	
	//Criando caixa com seus estilos
	const caixa = document.createElement("div");
	caixa.setAttribute("id", idC);
	caixa.setAttribute("class", "caixa-calculo")

	const apagar = document.createElement("span"); //Botão de deletar a caixa.
	apagar.setAttribute('style', 'color: red; font-weight: bold; cursor: pointer;');

	//Conteiner do titulo e botão de apagar.
	const CaixaTitulo = document.createElement('div');
	const Titulo = document.createElement('h2');
	CaixaTitulo.setAttribute('class', 'lugar-do-titulo-da-caixa');

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
}


export function SelecaoContas(QualConta) {
	switch(QualConta) {
		case 'Soma':
			CriarCaixa('soma' , QualConta);
         const caixa = document.getElementById('soma');

         
		break;

		case 'Subtração':
			CriarCaixa('subtracao' , QualConta);
		break;

		case 'Multiplicação':
			CriarCaixa('multiplicacao' , QualConta);
		break;
	}
}