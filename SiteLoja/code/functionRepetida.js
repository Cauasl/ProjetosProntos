

export async function PegarJSON() {
	try {
		let dadosPRODS = await fetch('https://raw.githubusercontent.com/Cauasl/hggg/main/api-entreAspas/dadosprodutos.json');
		return dadosPRODS.json();
	} catch(e) {
		console.log(e);
	}
}

export function CriadoCaixasProdutos(quant=1, imag, classe, nome, jpreco, vai) {
	let caixaLateral = document.getElementsByClassName('caixaslaterais')[0];

	//Criando caixa com classe.
	let caixa = document.createElement('section');
	caixa.setAttribute('class', 'pbox');
	
	//Criando paragrafos um link para a classe, nome e preço do produto. 
	let pclass = document.createElement('p');
	pclass.setAttribute('class', 'classe');

	let ppreco = document.createElement('p');
	ppreco.setAttribute('class', 'preco');

	let anome = document.createElement('a');
	anome.setAttribute('class', 'nomedoprod');
	anome.setAttribute('href', vai)

	let img = document.createElement('img');
	img.setAttribute('src', imag);
	img.setAttribute('class', 'img_prod');


	caixaLateral.appendChild(caixa);
	caixa.appendChild(pclass);
	pclass.innerText = classe;
	caixa.appendChild(img);
	caixa.appendChild(anome);
	anome.innerText = nome;
	caixa.appendChild(ppreco);
	ppreco.innerText = jpreco;
}