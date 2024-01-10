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