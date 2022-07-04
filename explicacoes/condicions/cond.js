// Estruturas Condicionais

//----------------------------------------------------------------
// if ..else 

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

window.onload = function() 
{
    var objTexSigla = document.getElementById("sigla");
    var objDivResultado = document.getElementById("resultado");
    var objBotaoD = document.getElementById("botaoD");

    objBotaoD.onclick = function()
    {
        switch(objTexSigla.value)
        {
            case "AL":
                objDivResultado.innerHTML = "Alagoas";
                console.log("Alagoas");
            break;
            case "BA":
                objDivResultado.innerHTML = "Bahia";
                console.log("Bahia");
                break;
            case "CE":
                objDivResultado.innerHTML = "Ceará";
            break;
            case "MA":
                objDivResultado.innerHTML = "Maranhão";
            break;
            case "PB":
                objDivResultado.innerHTML = "Paraiba";
                break;
            case "PE":
                objDivResultado.innerHTML = "Pernambuco";
                console.log("Pernambuco");
            break;
            case "PI":
                objDivResultado.innerHTML = "Piauí";
            break;
            case "RN":
                objDivResultado.innerHTML = "Rio Grande do Norte";
                break;
            case "SE":
                objDivResultado.innerHTML = "Sergipe";
            break;
            default:
                objDivResultado.innerHTML = "Não é um estado da Região Nordeste."
                console.log("Não é um estado da Região Nordeste.");

        }
    }
}
//-----------------------------------------------------------------------

//Estruturas de repetição

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
