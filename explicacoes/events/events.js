window.onload = function() {
    var oRetangulo = document.getElementById("retangulo");
    //ao passar o mouse em cima do retangulo... mude a cor
    oRetangulo.onmouseover = function(){
        oRetangulo.style.backgroundColor = "#008000";
    }

    //ao retirar o mouse em cima do retangulo... tira a cor que, retornando para o original
    oRetangulo.onmouseout = function(){
        oRetangulo.style.backgroundColor = "";
    }
}