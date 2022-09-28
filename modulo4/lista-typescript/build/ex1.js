"use strict";
function dataNascimento(nome, data) {
    let dataSeparada = data.split("/", 3);
    let dia = dataSeparada[0];
    let mes = dataSeparada[1];
    let ano = dataSeparada[2];
    switch (mes) {
        case "01":
            mes = "Janeiro";
            break;
        case "02":
            mes = "Fevereiro";
            break;
        case "03":
            mes = "Março";
            break;
        case "04":
            mes = "Abril";
            break;
        case "05":
            mes = "Maio";
            break;
        case "06":
            mes = "Junho";
            break;
        case "07":
            mes = "Julho";
            break;
        case "08":
            mes = "Agosto";
            break;
        case "09":
            mes = "Setembro";
            break;
        case "10":
            mes = "Outubro";
            break;
        case "11":
            mes = "Novembro";
            break;
        case "12":
            mes = "Dezembro";
            break;
    }
    return `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano} `;
}
console.log(dataNascimento("Elison", "30/06/1997"));
//# sourceMappingURL=ex1.js.map