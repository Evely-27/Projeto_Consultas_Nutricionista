window.onload = function()
{
    var oBotao = document.getElementById("botao");
    var oDiv = document.getElementById("cidades");

    oBotao.onclick = function() {
        var xhttp = new XMLHttpRequest(); // é uma instanciação de um elemento do tipo xmlhttprequest, que é uma lib do HTML5
        xhttp.onreadystatechange = function() {  // onreadystatechange, sempre que houver uma mudança na requisição (com ou sem sucesso) é chamado

            if (xhttp.readyState == 4 && xhttp.status == 200) { // confirma que o readstate esta no 4 nivel, onde a requisição foi, voltou e chegou, e o state 200 é que esta ok
                document.getElementById("cidades").innerHTML = "<pre>"+xhttp.responseText+"</pre>"; // por meio do respo(resposta da requisição)nsetext pegamos a requisição 
            }
        };
        //aquii abirmos a requisição passando o metodo(GET), o endereço, true esta para ser assincrono
        xhttp.open("GET", "/explicacoes/ajax/testEstados.txt",true); // aqui teriamos  o endereço do servidor(url)
        xhttp.send(); // é o disparo da requisição em si.
    }
}