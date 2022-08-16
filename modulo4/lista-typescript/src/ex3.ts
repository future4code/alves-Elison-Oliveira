enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}

type Filme = {
  nome: string;
  anoLancamento: number;
  genero: GENERO;
  pontuacao?: number;
};

function filme(
  nome: string,
  ano: number,
  genero: GENERO,
  pontuacao?: number
): Filme {
  let resposta: Filme = {
    nome: nome,
    anoLancamento: ano,
    genero: genero,
    pontuacao: pontuacao,
  };
  return resposta;
}

console.log(filme("Homem Aranha", 2021, GENERO.ACAO, 10));
