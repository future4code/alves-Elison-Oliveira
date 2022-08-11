const minhaString = "string";
const meuNumero = 25;
var CoresFavorita;
(function (CoresFavorita) {
    CoresFavorita["PRETO"] = "Preto";
    CoresFavorita["AZUL"] = "Azul";
    CoresFavorita["VERDE"] = "verde";
})(CoresFavorita || (CoresFavorita = {}));
const pessoa1 = {
    nome: "Biel",
    idade: 22,
    corFavorita: CoresFavorita.PRETO,
};
const pessoa2 = {
    nome: "Thammy",
    idade: 19,
    corFavorita: CoresFavorita.VERDE,
};
const pessoa3 = {
    nome: "Moiss",
    idade: 25,
    corFavorita: CoresFavorita.VERDE,
};
const pessoas = [pessoa1, pessoa2, pessoa3];
console.table(pessoas);
//# sourceMappingURL=index.js.map