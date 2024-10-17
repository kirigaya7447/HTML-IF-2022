function valida(){
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    if(user == ""){
        document.getElementById("iUser").innerHTML = "Você não preencheu este campo";
        document.getElementById("iPassword").innerHTML = " ";
    }
    else if(password == ""){
        document.getElementById("iPassword").innerHTML = "O campo senha deve ser preenchido";
        document.getElementById("iUser").innerHTML = " ";
    }
    else if(password.lengt <= 6 ){
        document.getElementById("iPassword").innerHTML = "Sua senha deve ser mais forte!!";
        document.getElementById("iUser").innerHTML = " ";
    }
    else{
        document.getElementById("iUser").innerHTML = " ";
        document.getElementById("iPassword").innerHTML = " ";
        document.getElementById("mensa").innerHTML = " Tudo correto, inserido com sucesso!";
    }
}