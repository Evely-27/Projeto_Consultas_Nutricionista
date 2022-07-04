//  o window onload serve para carregur o html antes do js 

window.onload = function(){

    var objBotao = document.getElementById("botao");
    
    objBotao.onclick = function () 
    {
        window.alert('Alô Mundo');
    }
// ---------------------------------------------------------
// exemplos de variaveis
// typeof ver o tipo da variavel

// exemplo de variavel indefinida

    var vIndefinida;
    console.log(typeof vIndefinida);

// exemplo de booleano, verdadeiro ou falso
    var vBooleano = true;
    console.log(typeof vBooleano);

// exemplo de alfanumerico(string)
    var vAlfaNum = "Que dia chuvoso.";
    console.log(typeof vAlfaNum);

// exemplo de numerios
    var vNumeroInteiro = -159;
    console.log(typeof vNumeroInteiro);
// devisse usar o ponto ao indez do virgula
    var vNumFracionado =2434.983;
    console.log(typeof vNumFracionado);

// Exemplo de array
    var vArrayNums = [10,75,86,344];
    console.log(typeof vArrayNums);

// Exemplo de objeto 
    var vAluna = {name:'Evely',age:22};
    console.log(typeof vAluna);

// ------------------------------------------------------------
// Operadores matematicos

    console.log("Adição 4+4: ");
    console.log(4+4);

    console.log("Subtração 4-2: ");
    console.log(4-2);

    console.log("Multi 4*4: ");
    console.log(4*4);

    console.log("Divião 4/4: ");
    console.log(4/4);

    console.log("Resto da divisão de 10 por 3: ");
    console.log(10%3);

// Com operações mais complexas

    var num =5;

    console.log("Valor de num: "+num);

    num =Math.pow(5,2);
    console.log("Valor de num(elevado ao exponente 2): "+num);

    num = num - Math.random();
    console.log("Valor de num (expoente subitraido por um numero aleatorio): "+num);

    num = num - Math.PI;
    console.log("Valor de num(valor anterior multiplicado por PI): "+num);

}
// -------------------------------------------------------------------------------