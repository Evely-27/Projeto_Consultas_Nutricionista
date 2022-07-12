class MensagemView {
    constructor(elemento) {
        this._elemento = elemento;
    }
     
    update(model) {
        this._elemento.innerHTML = this._template(model);
    }

    _template(model) {
        return `<p class ="alert"0>${model.texto}</p>`;
    }
}