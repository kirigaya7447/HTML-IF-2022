function tempo(){
	let tem = document.getElementById("oinputne").value;
	document.getElementById("oinputne").value = Number(tem) + 1;
}
function tempo1(){
	let tem1 = document.getElementById("oinput1").value;
	document.getElementById("oinput1").value = Number(tem1) + 10;
}
function tempo2(){
	let tem2 = document.getElementById("oinput2").value;
	document.getElementById("oinput2").value = Number(tem2) + 100;
}
function tempo3(){
	let tem3 = document.getElementById("oinput3").value;
	document.getElementById("oinput3").value = Number(tem3) + 1000;
}
function tempo4(){
	let tem4 = document.getElementById("oinput4").value;
	document.getElementById("oinput4").value = Number(tem4) + 10000;
}
function tempo5(){
	let tem5 = document.getElementById("oinput5").value;
	document.getElementById("oinput5").value = Number(tem5) + 100000;
}
function tempo6(){
	let tem6 = document.getElementById("oinput6").value;
	document.getElementById("oinput6").value = Number(tem6) + 10000;
}
function tempo7(){
	let tem7 = document.getElementById("oinput7").value;
	document.getElementById("oinput7").value = Number(tem7) + 1000;
}
function tempo8(){
	let tem8 = document.getElementById("oinput8").value;
	document.getElementById("oinput8").value = Number(tem8) + 100;
}
function tempo9(){
	let tem9 = document.getElementById("oinput9").value;
	document.getElementById("oinput9").value = Number(tem9) + 10;
}
function tempo10(){
	let tem10 = document.getElementById("oinput10").value;
	document.getElementById("oinput10").value = Number(tem10) + 1;
}
function tempo11(){
	let tem11 = document.getElementById("oinput11").value;
	document.getElementById("oinput11").value = Number(tem11) + 0.1;
}

setInterval("tempo()", 0.0001);
setInterval("tempo1()", 0.001);
setInterval("tempo2()", 0.01);
setInterval("tempo3()", 0.1);
setInterval("tempo4()", 1);
setInterval("tempo5()", 10);
setInterval("tempo6()", 1);
setInterval("tempo7()", 0.1);
setInterval("tempo8()", 0.01);
setInterval("tempo9()", 0.001);
setInterval("tempo10()", 0.0001);
setInterval("tempo11()", 0.0001);