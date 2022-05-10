// //Exercícios 1

// const bool1 = true;
// const bool2 = false;
// const bool3 = !bool2;

// let resultado = bool1 && bool2;
// console.log("a. ", resultado); // R:false

// resultado = bool1 && bool2 && bool3;
// console.log("b. ", resultado); // R:false

// resultado = !resultado && (bool1 || bool2);
// console.log("c. ", resultado); // R:true

// console.log("d. ", typeof resultado); // R:boolean

// //Exercícios 2

// let primeiroNumero = prompt("Digite um numero!");
// let segundoNumero = prompt("Digite outro numero!");
// const primeiro = Number(primeiroNumero);// R:soluçao do exercicios 3 - tranforma var string em Numero
// const segundo = Number(segundoNumero);
// const soma = primeiro + segundo;
// console.log(soma); // R: não a vera soma, os numera ira se repeti

let idadeUsuario = prompt("Digite sua Idade");
let idadeAmigo = prompt("Idade do seu melhor amigo");
const Usuario = Number(idadeUsuario);
const amigo = Number(idadeAmigo);

let resposta = idadeUsuario == idadeAmigo;

console.log("Sua idade é maior do que a do seu melhor amigo?", resposta);

const Diferença = idadeUsuario - idadeAmigo;
console.log("A diferença de idade e", Diferença);

//Exercícios escrita 2

let numeroPar = prompt(" insira um número par");
const par = Number(numeroPar);
let respostaPar = numeroPar % 2;
console.log(respostaPar);
// R: c todas as sequencia pares forma "0"
// R: d todas vez que imforma um numero impar sempre vai sobra o resto por "2"

let idadeAnos = prompt("Qual sua idade em anos?");
const resultadoAnos = Number(idadeAnos);

console.log(idadeAnos * 12);
console.log(idadeAnos * 365);
console.log(idadeAnos * 24 * 365);

// execicio 4
let digita1 = prompt(" insira um número ");
let digita2 = prompt(" insira outro número ");
const n1 = Number(digita1);
const n2 = Number(digita2);
let nresultados = n1 > n2;

console.log(nresultados);

nresultados = n1 == n2;

console.log(nresultados);

nresultados = n1 % n2 == 0;

console.log(nresultados);

nresultados = n2 % n1 == 0;

console.log(nresultados);
