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
		sim_nao = !sim_nao;		
		
	}else {
		img[val].style.display = "block";
		iframe[val].style.display = "none";
		sim_nao = !sim_nao;
	}
});
	}(i));
}