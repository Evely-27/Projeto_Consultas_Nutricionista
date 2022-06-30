//  o window onload serve para carregur o html antes do js 

window.onload = function(){

    var objBotao = document.getElementById("botao");
    
    objBotao.onclick = function () 
    {
        window.alert('Alô Mundo');
    }
}