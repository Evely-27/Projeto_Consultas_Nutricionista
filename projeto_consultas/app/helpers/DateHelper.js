class DateHelper {
    constructor() {
        throw new Error("Essa classe não pode ser instanciada.");
    }

     static textoParaData(texto) {                                 // método de conversão de texto para data 
        // if(!/^d{4}-d{2}-d{2}$/.test(texto))
            // throw new Error('O formato  correto é yyyy-mm-dd');
        return new Date(...
            texto 
            .split('-')
            .map((item,indice) => item - (indice % 2)));
    }

     static dataParaTexto(data) {                                 //método de conversão de data para texto 
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} `;
        // return data.getDate()
        //     + "/" + (data.getMonth() + 1)
        //     + "/" + data.getFullYear();

     // Vamos usar o template string, a crase/backtick(``) determina o conteúdo da string
        //os valores são apresentados na string por meio da interpolação do conteúdo dentro do ${}
        // obs: dentro dessa expression language pode ser inserida qualquer operação existente do JavaScript 

    }
}