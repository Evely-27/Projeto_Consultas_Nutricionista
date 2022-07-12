class ListaConsultas {
    constructor() {
        this._consultas = [];
    }

    adiciona(consulta) {
        this._consultas.push(consulta);
    }

    get consultas() {
        return [].concat(this._consultas); // serve para blindar a lista de consultas ao ser usada em ConsultaController(antes estava - this.consultas)
    }
}