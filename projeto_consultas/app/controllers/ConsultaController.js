class ConsultaController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputNome = $('#nome');
        this._inputData = $('#data');
        this._inputPeso = $('#peso');
        this._inputAltura = $('#altura');
        this._listaConsultas = new ListaConsultas(); // adicionando proprioedade ListaConsultas para guardar as consultas exibidas

        this._consultasView = new ConsultasView($('#consultasView')); // vinculando à classe ConsultasView- lida com ma responsabilidade de mostrar a tabela. // o #consultasView é a div que estamos mandando para a classe para redenrizar nela.
        this._consultasView.update(this._listaConsultas); // estamos atualizando a classe ConsultasView

    }
    adiciona(evento) {
        evento.preventDefault();
        this._listaConsultas.adiciona(this._criaConsulta());
        this._consultasView.update(this._listaConsultas);
        this._limpaFormulario();
        // alert('Ação executada com sucesso.');
        // let consultaFinal = new Consulta(
        //     this._inputNome.value,
        //     DateHelper.textoParaData(this._inputData.value),
        //     this._inputPeso.value,
        //     this._inputAltura.value,
        // );
        // console.log(consultaFinal);




// instancia  com a propria classes
        // let consulta = new Consulta(
        //     this._inputNome.value,
        //     new Date(...
        //         this._inputData.value
        //         .split('-') 
        //         .map((item,indice) => item - (indice %2))
        // ),
        //     this._inputPeso.value,
        //     this._inputAltura.value,
        // );
        // console.log(consulta);

// instancia de DateGHelper sem constructor
        // let helper = new DateHelper();
        // let consultaHelper = new Consulta(
        //     this._inputNome.value,
        //     helper.textoParaData(this._inputData.value),
        //     this._inputPeso.value,
        //     this._inputAltura.value
        // );
        // console.log(helper.dataParaTexto(consultaHelper.data));

        // testando dataHeçper com função static

        
        // let consultaStatic = new Consulta(
        //     this._inputNome.value,
        //     DateHelper.textoParaData(this._inputData.value),
        //     this._inputPeso.value,
        //     this._inputAltura.value,
        // );
        // console.log(consultaStatic.data);
    }

    _criaConsulta() {
        return new Consulta(
            this._inputNome.value,
            DateHelper.textoParaData(this._inputData.value),
            this._inputPeso.value,
            this._inputAltura.value
        );
    }

    _limpaFormulario() {
        this._inputNome.value = "";
        this._inputData.value = "";
        this._inputPeso.value = "";
        this._inputAltura.value = "";

        this._inputNome.focus();
    }
}

//atribuindo por meio do First Class Functions

        // var $ = document.querySelector;
        // var inputNome = $('#nome');
        // var inputData = $('#data');
        // var inputPeso = $('#peso');
        // var inputAltura = $('#altura');

        // console.log(inputNome.value);
        // console.log(inputData.value);
        // console.log(inputPeso.value);
        // console.log(inputAltura.value);

// var inputNome = document.querySelector('#nome');
        // var inputData = document.querySelector('#data');
        // var inputPeso = document.querySelector('#peso');
        // var inputAltura = document.querySelector('#altura');