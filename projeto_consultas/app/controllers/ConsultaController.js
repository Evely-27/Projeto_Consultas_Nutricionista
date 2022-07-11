class ConsultaController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputNome = $('#nome');
        this._inputData = $('#data');
        this._inputPeso = $('#peso');
        this._inputAltura = $('#altura');

    }
    adiciona(evento) {
        evento.preventDefault();
        alert('Ação executada com sucesso.');
        let consultaFinal = new Consulta(
            this._inputNome.value,
            DateHelper.textoParaData(this._inputData.value),
            this._inputPeso.value,
            this._inputAltura.value,
        );
        console.log(consultaFinal);



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