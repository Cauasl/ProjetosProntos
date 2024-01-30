export async function PegarJSON() {
	let dadosPRODS = await fetch('https://raw.githubusercontent.com/Cauasl/hggg/main/api-entreAspas/dadosprodutos.json');
	return dadosPRODS.json();
}