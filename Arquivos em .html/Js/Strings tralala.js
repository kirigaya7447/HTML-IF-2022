function diminuir(){
	let guar = document.getElementById("minusc").innerHTML;
	let dim = guar.toLowerCase();
	document.getElementById("minusc").innerHTML = dim;
}
function aumentar(){
	let guar1 = document.getElementById("minusc").innerHTML;
	let dim1 = guar1.toUpperCase();
	document.getElementById("minusc").innerHTML = dim1;
}
function muda(){
	var gua = document.getElementById("mexe").innerHTML;
	var mudan = gua.replace("outra", "essa");
	document.getElementById("mexe").innerHTML = mudan;
}
function separarr(){
	var guarda = document.getElementById("separa").innerHTML;
	var arr = guarda.split(",");
	for(var cont in arr){
		alert(arr[cont]);
	}
}