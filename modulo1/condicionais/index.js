// Exercícios de interpretação de código 1

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }  // A: vai pega a resposta do usuario para faze uma conferencia de par ou impar, onde o resultado de par for 0 ele passa no teste
// B para pares onde a respota dp usuario com o resto por nois vai ter o resultados pares
// C: qunado forem impas semore vai sobra um numero

// EX 2

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
// Letra A: caso o usuario escolha uma das frutas que tenha condiçao vai especifca seu preço como listados
// mais se nao tive uma fruta que esta litados o default corresponde a um valor de sempre 5 reais
// Letra B: 2.25 reais
// Letra C: o valor da pera sera de 5 reais pois ea passa pra condiçao default

// Ex 3

// const numero = Number(prompt("Digite o primeiro número."));

// if (numero > 0) {
//   console.log("Esse número passou no teste");
//   let mensagem = "Essa mensagem é secreta!!!";
// }

// console.log(mensagem);
// Letra A: na primeira linha vai pergunta se o numero que o user colaca e maio que 0,se for ira mostra a primeira mensagem do console.
// Letra B: se fosse 10 ea aparece a mensagem do primeiro console que esta dentro da condiçao "esse numero passou no teste".
// ja se fosse - 10 nao ea mostra nada pois nao a um atributo se fosse de oura forma nao tem um else, para da uma condiçao aucontrario
// Letra C : p erro do segundo console pois nao esta entro da condiçao e nao consegue ser executado

// Exercícios de escrita de código 1

let respostaDoUsuario = prompt(" qual sua idade?");
let idadeDoUser = Number(respostaDoUsuario); // letra A
// Letra B
if (idadeDoUser >= 18) {
  console.log("Voce pode dirigir");
} else {
  console.log("Voce não pode dirigir"); // Letra c
}

// EX 2

let turnoUser = prompt(
  "Qual turno do dia voce estuda? V, M ou N?"
).toLowerCase();
let respostaTurnoUser = turnoUser;

if (respostaTurnoUser === "v") {
  console.log("Boa Tarde!");
} else if (respostaTurnoUser === "m") {
  console.log("Bomm dia!");
} else if (respostaTurnoUser === "n") {
  console.log("Boa noite");
} else {
  console.log("tente seleciona v:vespertino, m:matutino, n:noturno");
}

// EX 3

switch (respostaTurnoUser) {
  case "v":
    console.log("Boa Tarde!");
    break;
  case "m":
    console.log("Bom Dia!");
    break;
  case "n":
    console.log("Boa Noite!");
    break;
  default:
    console.log("tente seleciona v:vespertino, m:matutino, n:noturnoa");
}

// EX 4

let filmeUser = prompt(" qual genero de filme deseja assisitr?").toLowerCase();
let ingressoUser = +prompt(" qual valor do ingresso?");

function cinema(a, b) {
  if (a === "fantasia" && b <= 15) {
    console.log("Bom Filme!");
  } else console.log("escolha outro filme");
}
cinema(filmeUser, ingressoUser);
