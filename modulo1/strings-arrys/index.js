// Exercícios de interpretação de código 1

// let array
// console.log('a. ', array) // R: a,null

// array = null
// console.log('b. ', array) // R:b. null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) // R: c. 11

// let i = 0
// console.log('d. ', array[i])  //R: d, 3

// array[i+1] = 19
// console.log('e. ', array) //R:e, 4

// const valor = array[i+6]
// console.log('f. ', valor) // R: f, 8

//  Exercícios de interpretação de código 2

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // R:SUBI NUM ÔNIBUS EM MIRROCOS, 26

// Exercícios de escrita de código 1

// let nomeUsuario = prompt("Digite seu nome");
// let emailDoUsuario = prompt("Digite seu E-mail");
// const resultado = `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}!`;
// console.log(resultado);

const comidasPreferidas = [
  "Pizza",
  "Macarronada",
  "Hambúrguer",
  "Estrogonofe",
  "Baião",
];
let comida;
console.log(comidasPreferidas);
console.log(`Essas são as minhas comidas preferidas:
${comidasPreferidas[0]}\n${comidasPreferidas[1]}
${comidasPreferidas[2]}\n${comidasPreferidas[3]}
${comidasPreferidas[4]}`);

let comidaDoUsuario = prompt("Digite sua comida preferida");
comidasPreferidas[1] = comidaDoUsuario;

console.log(comidasPreferidas); // c

//execicio 3

let listaDeTarefas = []; //a
let tarefa1 = prompt("digite uma tarefa");
let tarefa2 = prompt("digite uma segunda tarefa");
let tarefa3 = prompt("digite uma tercera tarefa");

listaDeTarefas[0] = tarefa1;
listaDeTarefas[1] = tarefa2;
listaDeTarefas[2] = tarefa3; //b;
console.log(listaDeTarefas); //c

let indiceUsuario = prompt("De 1 a 3 qual tarefa ja realizou?") - 1; //d
listaDeTarefas.splice(indiceUsuario, 1);
console.log(listaDeTarefas);
