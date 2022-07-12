 class MensagemView extends View {  //esta herdando os métodos e propriedades de View
    
    constructor(elemento) {        // esta chamando o construtor da classe mãe por meio do método super.
        super(elemento);
    }
    _template(model) {
        return `<p class ="alert"0>${model.texto}</p>`;
    }
}