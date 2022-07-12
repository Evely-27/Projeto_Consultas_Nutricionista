//-----JavaScxript sem POO----------------------------------------------------------------------
    // recebe todo o conteudo de header
    // var caixatitulo = document.querySelector("header"); 
    // console.log(caixatitulo);
    // // seleciona especificamente o h1 com o nome da nutricionista para modificação.
    // var textoTitulo = caixatitulo.querySelector("h1"); 
    // console.log(textoTitulo);
    // textoTitulo.textContent = "Noria Galipis - Nutrição e Felicidade";

    // var campos = [
    //     document.querySelector("#nome"),
    //     document.querySelector("#data"),
    //     document.querySelector("#peso"),
    //     document.querySelector("#altura"),
    // ];

    // console.log(campos);
      
    // var tbody = document.querySelector('table tbody');

    // document.querySelector('form').addEventListener('submit', function(evento) {
    //     evento.preventDefault();
    //     var tr = document.createElement('tr');
    
    //     campos.forEach(function(campo) {
    //        var td = document.createElement('td');
    //        td.textContent = campo.value;
    //        tr.appendChild(td);
    //     });
    
    //     var td = document.createElement('td');
    //     td.textContent = (
    //         campos[2].value / (campos[3].value * campos[3].value)
    //     ).toFixed(2);
    //     tr.appendChild(td);
    
    //     tbody.appendChild(tr);

    //     this.reset();
    //     campos[0].focus();
    // });
//---------------------------------------------------------------------------------------------------------
// exemplo de instancia com constructor sem parametros
    // var consulta = new Consulta();
    // consulta.nome = 'Nathan Dallas';
    // consulta.data = new Date('2022-07-11');
    // consulta.peso = 59;
    // consulta.altura = 1.98;
    // console.log(consulta);


    // exemplo de instancia com constructor com parametros
    var consulta = new Consulta(
        'Maria Julin',
        new Date('2020-06-27'),
        43,1.59
    );

    // data 
    // console.log(consulta.data);
    // consulta.data.setDate(19);
    // console.log(consulta.data);

    // verificando classe Consulta
    // console.log(consulta);
    // console.log(consulta.getIMC);
    // console.log(consulta.imc); // ao inves de usar consulta.getIMC, ele permite ir direto ao valor da propriedade

    // confirmando encapsulamento
// peso =  confirmado
    consulta.peso = 69;
    console.log(consulta.peso);
    consulta._peso = 78;
    console.log('encapsulamento de peso ' +  consulta.peso);
//--------------------------------

        let consultaController = new ConsultaController();

