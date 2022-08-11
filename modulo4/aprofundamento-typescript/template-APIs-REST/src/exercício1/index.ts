const minhaString: string = "string";
const meuNumero: number = 25;

enum CoresFavorita {
  PRETO = "Preto",
  AZUL = "Azul",
  VERDE = "verde",
}

type Pessoa = {
  nome: string;
  idade: number;
  corFavorita: CoresFavorita;
};

const pessoa1: Pessoa = {
  nome: "Biel",
  idade: 22,
  corFavorita: CoresFavorita.PRETO,
};

const pessoa2: Pessoa = {
  nome: "Thammy",
  idade: 19,
  corFavorita: CoresFavorita.VERDE,
};

const pessoa3: Pessoa = {
  nome: "Moiss",
  idade: 25,
  corFavorita: CoresFavorita.VERDE,
};

const pessoas: Pessoa[] = [pessoa1, pessoa2, pessoa3];
console.table(pessoas);
