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

    var oCep = document.getElementById("cep");
    var oMsCep = document.getElementById("msgCep");
// o onblur/ perda de foco, é para quando o ususario deixar o elemento, por sair com tab ou clianco , ele é assionado.
    oCep.onblur = function(){
        // é uma função padrão do  js que recebe um padrão para gerar validação
        // p ^ é o inicio, [] valores aceitos,{}as posicçoes que podem esta ros valores,\ indica que o proximo é aceito, 
        // e o $ é o fechamento da condição
        var oRegExp = new RegExp("^[0-9]{5}\-[0-9]{3}$"); 
        if (oRegExp.test(oCep.value) == true)  // esta testanndo o padrão com o valor digitado...
        {
            oCep.style.borderColor = "#6721f2";
            oMsCep.style.color = "#6721f2";
            oMsCep.innerHTML = "Campo preenchido com sucesso!!";
        }else // se não for verdadeiro, vai mostrar uma mensagem em vermelho
        {
            oCep.style.borderColor = "#FF0000";
            oMsCep.style.color = "#FF0000";
            oMsCep.innerHTML = "CEP inváido! Infome novamente!!";
        }
    }

    // o onfocos/em foco, é para quando o ususario focar o elemento
    oCep.onfocus = function(){

        // aqui deixamos ao clicar , tudo de volta ao original.
        oCep.style.borderColor= "";
        oCep.value = "";
        oMsCep.style.color = "";
        oMsCep.innerHTML = "";
    }
}