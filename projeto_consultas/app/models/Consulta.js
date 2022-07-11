class Consulta {
    constructor(nome, data, peso, altura) {
        this._nome = nome
        this._data = new Date(data.getTime()); //ele recebe o valor do metodo getTime, assim, seui valor muda do armazenado pelo usuario
        this._peso = peso;
        this._altura = altura;
        Object.freeze(this);
     }


     getIMC() {
        return this._peso / (this._altura * this._altura);
     }

// as propriedades so podem ser acessadas pelos metodos getters e setters

    getNome() {
        return this.nome;
    }
    getData() {
        return this.data;
    }
    getPeso() {
        return this.peso;
    }
    getAltura() {
        return this.altura;
    }

    // propriedade get para facilitação da implementação  e chamada das propriedades
    get imc() {
        return this._peso / (this._altura * this._altura);
    }
      
    get nome() {
        return this._nome;
    }
      // mesmo com o Object.shallow ainda foi possivel alterar, então em instancia de outros obletyos, temo que blindar a propriedade.
    get data() {
        return new Date(this._data.getTime());
    }
      
    get peso() {
        return this._peso;
    }

    get altura() {
        return this.altura;
    }
}
