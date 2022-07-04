// //  o window onload serve para carregur o html antes do js 

// window.onload = function(){

//     var objBotao = document.getElementById("botao");
    
//     objBotao.onclick = function () 
//     {
//         window.alert('Alô Mundo');
//     }
// // ---------------------------------------------------------
// // exemplos de variaveis
// // typeof ver o tipo da variavel

// // exemplo de variavel indefinida

//     var vIndefinida;
//     console.log(typeof vIndefinida);

// // exemplo de booleano, verdadeiro ou falso
//     var vBooleano = true;
//     console.log(typeof vBooleano);

// // exemplo de alfanumerico(string)
//     var vAlfaNum = "Que dia chuvoso.";
//     console.log(typeof vAlfaNum);

// // exemplo de numerios
//     var vNumeroInteiro = -159;
//     console.log(typeof vNumeroInteiro);
// // devisse usar o ponto ao indez do virgula
//     var vNumFracionado =2434.983;
//     console.log(typeof vNumFracionado);

// // Exemplo de array
//     var vArrayNums = [10,75,86,344];
//     console.log(typeof vArrayNums);

// // Exemplo de objeto 
//     var vAluna = {name:'Evely',age:22};
//     console.log(typeof vAluna);

// // ------------------------------------------------------------
// // Operadores matematicos

//     console.log("Adição 4+4: ");
//     console.log(4+4);

//     console.log("Subtração 4-2: ");
//     console.log(4-2);

//     console.log("Multi 4*4: ");
//     console.log(4*4);

//     console.log("Divião 4/4: ");
//     console.log(4/4);

//     console.log("Resto da divisão de 10 por 3: ");
//     console.log(10%3);

// // Com operações mais complexas

//     var num =5;

//     console.log("Valor de num: "+num);

//     num =Math.pow(5,2);
//     console.log("Valor de num(elevado ao exponente 2): "+num);

//     num = num - Math.random();
//     console.log("Valor de num (expoente subitraido por um numero aleatorio): "+num);

//     num = num - Math.PI;
//     console.log("Valor de num(valor anterior multiplicado por PI): "+num);

// }
// -------------------------------------------------------------------------------
// Estruturas Condicionais

// window.onload = function() {
//     var objTxtNota = document.getElementById("nota");
//     var objDivResultado = document.getElementById("resultado");
//     var objBotaoC = document.getElementById("botaoC");

//     objBotaoC.onclick = function()
//     {
//         // parseFloat transforma o valor digitado em nota no html em numero fracionado.
//         var objFloNota = parseFloat(objTxtNota.value);
//         if (objFloNota >= 6.0)
//         // esse é o bloco verdade! se for ...faça!
//         {
//             objDivResultado.innerHTML = "Aluno(a) aprovado(a).";
//             console.log("Aluno(a) aprovado com nota "+objFloNota);
//         }
//         // esse é o bloco de falso/senão... faça!  = se a nota entrar nesse bloco, significa que é menor que 6.
//         else
//         {
//             objDivResultado.innerHTML = "Aluno(a) reprovado(a).";
//             console.log("Aluno(a) reprovado(a) com nota "+objFloNota);
//         }

//         // condicional alinhada(if dentro de if)

//         if (objFloNota >= 6.0)
//         // esse é o bloco verdade! se for ...faça!
//         {
//             objDivResultado.innerHTML = "Aluno(a) aprovado(a).";
//             console.log("Aluno(a) aprovado com nota "+objFloNota);
//         }
//         // esse é o bloco de falso/senão... faça!  = se a nota entrar nesse bloco, significa que é menor que 6.
//         else
//         {
//             if (objFloNota >=4.0)
//             {
//                 objDivResultado.innerHTML = "Aluno(a) em exame.";
//                 console.log("Aluno(a) em exame.");
//             }
//             else 
//             {
//                 objDivResultado.innerHTML = "Aluno(a) reprovado(a).";
//                 console.log("Aluno(a) reprovado(a) com nota "+objFloNota);
//             }
//         }
//     }

// }

// --------------------------------------------------------

// Condicional Case 

// window.onload = function() 
// {
//     var objTexSigla = document.getElementById("sigla");
//     var objDivResultado = document.getElementById("resultado");
//     var objBotaoD = document.getElementById("botaoD");

//     objBotaoD.onclick = function()
//     {
//         switch(objTexSigla.value)
//         {
//             case "AL":
//                 objDivResultado.innerHTML = "Alagoas";
//                 console.log("Alagoas");
//             break;
//             case "BA":
//                 objDivResultado.innerHTML = "Bahia";
//                 console.log("Bahia");
//                 break;
//             case "CE":
//                 objDivResultado.innerHTML = "Ceará";
//             break;
//             case "MA":
//                 objDivResultado.innerHTML = "Maranhão";
//             break;
//             case "PB":
//                 objDivResultado.innerHTML = "Paraiba";
//                 break;
//             case "PE":
//                 objDivResultado.innerHTML = "Pernambuco";
//                 console.log("Pernambuco");
//             break;
//             case "PI":
//                 objDivResultado.innerHTML = "Piauí";
//             break;
//             case "RN":
//                 objDivResultado.innerHTML = "Rio Grande do Norte";
//                 break;
//             case "SE":
//                 objDivResultado.innerHTML = "Sergipe";
//             break;
//             default:
//                 objDivResultado.innerHTML = "Não é um estado da Região Nordeste."
//                 console.log("Não é um estado da Região Nordeste.");

//         }
//     }
// }



// window.onload = function() {
//     var objDivSaida = document.getElementById("saidaW");

//     var i=1; // vai ser nosso contator/controle
//     while(i <=10) // enquanto i(1) for menor ou igual a 10 faça ... 
//     {
//         objDivSaida.innerHTML += i +"<br>"; // a cada rodada do laço, vamos incrementar o i com  mais um, o mesmo que  i = i + 1
//         i++;
//     }
    
//     var objDivSaidaDW = document.getElementById("saidaDW");
//     var idw= 1;
//     do // mostre o idw ....(logo de cara)
//     {
//         objDivSaidaDW.innerHTML += idw+"<br>";
//         idw++;
//     } while(idw > 10); //enquanto ele for maior que 10
//     // aqui fica claro que ele tem que rodar pelo manos uma vez indenpendente da condição para ter que se repertir
//     // 

//     var objDivSaidaFOR = document.getElementById("saidaFOR");

//     // serve quando sabemos quantas vezes queremos que o laço rode

//     {
//         for(var ifor=1; ifor <=10; ifor ++) // para => iniciando com 1, façã enquanto ele for menor ou igual a 10, acrescentando mais um a cada rodada fazendo o que esta no {}
//         {
//             objDivSaidaFOR.innerHTML +=ifor+"<br>"
//         }
//     }

//     var aLinguasgens = ["JavaScript","Java","PHP","Python"];

//     var objSaidaA = document.getElementById("saidaA");

//     //for.. of é igual ao forecha de outras linguagens.
//     // o slinguagens pega os dados do array depois do of e vai ser carregada com cada um ao longo do loop
//     for(sLinguagens of aLinguasgens) {
//         objSaidaA.innerHTML += sLinguagens+"<br>";
//     }
// }


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
