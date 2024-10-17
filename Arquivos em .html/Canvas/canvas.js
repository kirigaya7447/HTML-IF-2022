var desenho = document.getElementById("desenho");
var contexto = desenho.getContext("2d");
desenho.width = 5000;
desenho.height = 5000;
contexto.moveTo(0,0);
contexto.lineTo(5000,5000);
contexto.stroke();