class ConsultasView {

      // como a classe vai receber o DOm para renderizar, ela que faz a associação entre a div e a classe por meio de seu construtor
      constructor(elemento) {
        this._elemento = elemento;
      }

      update() {
        this._elemento.innerHTML = this._template();
      }

    _template() {
        return `
        <table>
            <thead>
                <tr>
                    <th class="cab_cons">Nome</th>
                    <th class="cab_cons">Data da Consulta</th>
                    <th class="cab_cons">Peso (kg)</th>
                    <th class="cab_cons">Altura (m)</th>
                    <th class="cab_cons">IMC</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
        `;
    }
}