
    // recebe todo o conteudo de header
    var caixatitulo = document.querySelector("header"); 
    console.log(caixatitulo);
    // seleciona especificamente o h1 com o nome da nutricionista para modificação.
    var textoTitulo = caixatitulo.querySelector("h1"); 
    console.log(textoTitulo);
    textoTitulo.textContent = "Noria Galipis - Nutrição e Felicidade";

    var campos = [
        document.querySelector("#nome"),
        document.querySelector("#data"),
        document.querySelector("#peso"),
        document.querySelector("#altura"),
    ];

    console.log(campos);
      
    var tbody = document.querySelector('table tbody');

    document.querySelector('form').addEventListener('submit', function(evento) {
        evento.preventDefault();
        var tr = document.createElement('tr');
    
        campos.forEach(function(campo) {
           var td = document.createElement('td');
           td.textContent = campo.value;
           tr.appendChild(td);
        });
    
        var td = document.createElement('td');
        td.textContent = (
            campos[2].value / (campos[3].value * campos[3].value)
        ).toFixed(2);
        tr.appendChild(td);
    
        tbody.appendChild(tr);

        this.reset();
        campos[0].focus();
    });