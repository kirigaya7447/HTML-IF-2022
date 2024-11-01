var aum = 1;
function aumenta(){
    aum = aum * 2;
    document.getElementById("imm").style.width = aum + "px";
    document.getElementById("imm").style.height = aum + "px";
    document.getElementById("imm").style.border = aum + "px;"
}
function diminui(){
    aum = aum / 2;
    document.getElementById("imm").style.width = aum + "px";
    document.getElementById("imm").style.height = aum + "px";
}
