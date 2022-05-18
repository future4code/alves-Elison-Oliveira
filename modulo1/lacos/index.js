// Exercícios de interpretação de código 1

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)  //bom vai rola a soma de valores de i, mais valor

// EX 2 :

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// } // A: o programa vai roda todos os numeros maiores que 18 dentro do array.
//  // B usando length para sabe quantos intice tem

// EX 3

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "));
// let quantidadeAtual = 0;
// while (quantidadeAtual < quantidadeTotal) {
//   let linha = "";
//   for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
//     linha += "*";
//   }
//   console.log(linha);
//   quantidadeAtual++; // R: vai imprir quatros linhas com *, somando 1 asterisco em cada linha ate chega o valo de 4 "****"
// }

// Exercícios de escrita de código 1

let petsUser = +prompt("quantos bichinhos de estimações você tem?"); //A
let contado = 0;
let nomeDosPets;
let arrayPets = [];

if (petsUser == 0) {
  console.log("Que pena! Você pode adota um pet!");
} else if (petsUser > 0) {
  while (contado !== petsUser) {
    nomeDosPets = prompt("qual nome do seus pets"); // B
    arrayPets.push(nomeDosPets);
    contado++;
  }
  console.log(arrayPets); // C
}

// Exe 2

let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

for (Array of arrayOriginal) {
  console.log(Array); // A
}

console.log("letra B");
for (let i of arrayOriginal) {
  let soma = i / 10;
  console.log(soma); //B
}

console.log("Letra C");
let arry = [];

for (let i of arrayOriginal) {
  // C
  if (i % 2 == 0) {
    arry.push(i);
  }
}
console.log(arry);
