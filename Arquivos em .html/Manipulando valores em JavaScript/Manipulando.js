function frase(){
    var fra;
    var co;
    var ca;
    fra = document.getElementById("i1").value;
    ca = document.getElementById("i2").value;
    document.getElementById("i2").value = fra;
    document.getElementById("i1").value = ca;
    co = document.getElementById("pa").innerHTML;
    document.getElementById("di").innerHTML = co;
}
