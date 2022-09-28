"use strict";
var GENERO;
(function (GENERO) {
    GENERO["ACAO"] = "a\u00E7\u00E3o";
    GENERO["DRAMA"] = "drama";
    GENERO["COMEDIA"] = "com\u00E9dia";
    GENERO["ROMANCE"] = "romance";
    GENERO["TERROR"] = "terror";
})(GENERO || (GENERO = {}));
function filme(nome, ano, genero, pontuacao) {
    let resposta = {
        nome: nome,
        anoLancamento: ano,
        genero: genero,
        pontuacao: pontuacao,
    };
    return resposta;
}
console.log(filme("Homem Aranha", 2021, GENERO.ACAO, 10));
//# sourceMappingURL=ex3.js.map