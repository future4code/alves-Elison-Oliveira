//Exercícios de interpretação de código 1

// function minhaFuncao(variavel) {
// 	return variavel * 5                resposta letra A
// }

// console.log(minhaFuncao(2)) // R: 10
// console.log(minhaFuncao(10)) //R: 50   resposta letra B

//resposta c: ea acontece a mesma coisas mais a gente nao ea consegui ver a resposta

//ex 2
// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function (texto) {
//   return texto.toLowerCase().includes("cenoura");
// };

// const resposta = outraFuncao(textoDoUsuario);
// console.log(resposta);  // Resposta A : a funçao ea autera o testo do usuario em minuscolo.
// includes vai pergunta se no testo do usuario tem palavra cenoura , respondendo true ou false.

// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//  i.   Eu gosto de cenoura  // true
//  ii.  CENOURA é bom pra vista // false
//  iii. Cenouras crescem na terra // false

// Exercícios de escrita de código

let frase1 = "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante.";

function troca(frase) {
  frase = frase
    .replaceAll("Caio", "Elison")
    .replaceAll("23", "24")
    .replaceAll("São Paulo", "Santa Inês");
  return frase;
}

const novaFrase = troca(frase1);
console.log(novaFrase); // A

let nome1 = "Lais";
let idade = 25;
let endereço = "Rua Guarapari 190";
let profiçao = "instrutora";

const recebe = (nome, idade, endereço, profiçao) => {
  return `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereço} e sou ${profiçao}}`;
};
console.log(recebe("lais", 25, "Rua Guarapari 190", "instrutora")); //b

// 2 Escreva as funções explicadas abaixo:

const somar = (n1, n2) => {
  soma = n1 + n2;
  return soma;
};
console.log(somar(5, 5)); //a

const maioMeno = (numero1, numero2) => {
  resul = numero1 >= numero2;
  return resul;
};

const resultado = maioMeno(3, 5);
console.log(resultado); // b

const numebol = (bolle) => {
  numerobol = bolle % 2 == 0;
  return numerobol;
};
console.log(numebol(1)); //c

function formarta(frase) {
  let frase1 = frase.toUpperCase();
  let frase2 = frase.length;
  return console.log(`Maiusculo: ${frase1} Numero de Carateres: ${frase2}`);
}
formarta("seja forte e corajoso"); //d

//ex 3

const valor1 = +prompt("digite um numero");
const valor2 = +prompt("digite outro numero");

function soma1(valor1, valor2) {
  const var1 = valor1 + valor2;
  return var1;
}

const resultado3 = soma1(valor1, valor2);
console.log(resultado3);
//
function soma2(valor1, valor2) {
  const var2 = valor1 - valor2;
  return var2;
}

const resultado4 = soma2(valor1, valor2);
console.log(resultado4);

//

function soma3(valor1, valor2) {
  const var3 = valor1 * valor2;
  return var3;
}

const resultado5 = soma3(valor1, valor2);
console.log(resultado5);

//

function soma4(valor1, valor2) {
  const var4 = valor1 / valor2;
  return var4;
}

const resultado6 = soma4(valor1, valor2);
console.log(resultado6);
