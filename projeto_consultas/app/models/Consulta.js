class Consulta {
    constructor(nome, data, peso, altura) {
        this.nome = nome
        this.data = data;
        this.peso = peso;
        this.altura = altura;
     }

     
     calcularIMC() {
         return this.peso / (this.altura * this.altura);
     }
}
