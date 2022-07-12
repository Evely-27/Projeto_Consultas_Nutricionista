class ConsultasView  extends View {      //esta herdando os métodos e propriedades de View 
    
    constructor(elemento) {             // esta chamando o construtor da classe mãe por meio do método super.
        super(elemento);
    }

    _template(model) {
      return `
          <table class="table table-bordered">
          <thead class="thead-dark">
              <tr>
                  <th class="cab_cons">Nome</th>
                  <th class="cab_cons">Data da Consulta</th>
                  <th class="cab_cons">Peso (kg)</th>
                  <th class="cab_cons">Altura (m)</th>
                  <th class="cab_cons">IMC</th>
              </tr>
          </thead>
          <tbody>
              ${model.consultas.map(c =>  `
                  <tr>
                      <td>${c.nome}</td>
                      <td>${DateHelper.dataParaTexto(c.data)}</td>
                      <td>${c.peso}</td>
                      <td>${c.altura}</td>
                      <td>${c.imc.toFixed(2)}</td>
                  </tr>
              `).join('')}
          </tbody>
          </table>
      `;
    }
  }