function aloMundo() 
{
    
    objResultadoF = document.getElementById("resultadoF");
    objResultadoF.innerHTML += "Alô Mundo<br>";
}

// funçãpo que recebe 2 numeros
function soma(num1, num2) 
{
    objResultadoF2 = document.getElementById("resultadoF2");
    objResultadoF2.innerHTML += (num1+num2) + "<br>";
}

//funcção que recebe 2 parametros e retorna sua soma.
function somaR(num1,num2)
{
    return num1+num2;
}

window.onload = function() {
    objBotaoF = document.getElementById("botaoF");
    objBotaoF.onclick = function() {
        //chamada da função aloMundo().
        aloMundo();
    }

    objBotaoF2 = document.getElementById("botaoF2");
    objBotaoF2.onclick = function() {
        //chamr funcao soma passando parametros
        soma(8,9);
    }

    // função que retorna um valor
    objBotaoR = document.getElementById("botaoR");
    objBotaoR.onclick = function() { 
        // chamadas da função somaR()
        objResultadoR = document.getElementById("resultadoR");
        //esta chamando mesmo dentro do html , e pode ser chamaddo mais de 1 vez de forma flexivel
        objResultadoR.innerHTML += somaR(somaR(9553, 64654), 8675) + "<br>";
    }

    //chamando função soma com retorno de forma dinamica
    objBotaoD = document.getElementById("botaoD");
    objBotaoD.onclick = function() {
        // ao clicar no botao, capturamos os valores digitados.
        objNum1 = document.getElementById("num1"); 
        objNum2 = document.getElementById("num2");
        objResultadoD = document.getElementById("resultadoD");
        //no resultado, acessamos o conteudo captumamos os valores e tranfomarmos oara o tipo int, ja que são dados como string
        objResultadoD.innerHTML +=somaR(
            parseInt(objNum1.value),
            parseInt(objNum2.value) 
        ) + "<br>";
    }
}