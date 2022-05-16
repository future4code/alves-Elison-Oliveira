//1 Exercícios de interpretação de código

// const filme = {
// 	nome: "Auto da Compadecida",
// 	ano: 2000,
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga",
// 		"Virginia Cavendish"
// 		],
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"},
// 		{canal: "Canal Brasil", horario: "19h"},
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0]) //Matheus Nachtergaele
// console.log(filme.elenco[filme.elenco.length - 1]) // Virginia Cavenish
// console.log(filme.transmissoesHoje[2])      // R: globo, 14h

// ex2

// const cachorro = {
// 	nome: "Juca",
// 	idade: 3,
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
//     // respota letra A
// console.log(cachorro) // R:juca
// console.log(gato) // R: juba
// console.log(tartaruga) //R: jubo
// Respota letra B : retorna ao primeiro objeto copiando a estruta onde pode modifica, fazendo auteraçoes

// EX 3

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio",
//   idade: 23,
//   backender: false
// }
//           // Resposta A
// console.log(minhaFuncao(pessoa, "backender")) // R:false
// console.log(minhaFuncao(pessoa, "altura")) // R: undefined
// Resposta B: no primeiro console, apenas chamo a chave backender que coresponde a false, no segundo chamo a chave altura que nao existe

// 1 Exercícios de escrita de código

const pessoa = {
  nome: "Elison Moises",
  apelido: ["Moises", "Moiss", "Miau"],
};
console.log(
  `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelido[0]}, ${pessoa.apelido[1]} ou ${pessoa.apelido[2]}`
); // A

const novoApelido = {
  ...pessoa,
  apelido2: ["Elisson", "momoi", "lindo"],
};
console.log(
  `Eu sou ${novoApelido.nome}, mas pode me chmar de: ${novoApelido.apelido2[0]}, ${novoApelido.apelido2[1]} ou ${novoApelido.apelido2[2]}`
); // letra B

// EX 2

const pessoa1 = {
  nome: "Moiss", // letra A
  idade: 24,
  profissao: "Programado",
};
const pessoa2 = {
  nome: "marcos",
  idade: 22,
  profissao: "Analista de sistema",
};
function todos(pessoa1, pessoa2) {
  pessoa1 = [
    `${pessoa1.nome}, ${pessoa1.nome.length}, ${pessoa1.idade}, ${pessoa1.profissao}, ${pessoa1.profissao.length}`,
  ];
  pessoa2 = [
    `${pessoa2.nome}, ${pessoa2.nome.length}, ${pessoa2.idade}, ${pessoa2.profissao}, ${pessoa2.profissao.length}`,
  ];
  console.log(pessoa1, pessoa2);
}
todos(pessoa1, pessoa2);
// letra B

// EX 3

let carrinho = []; // A

const frutaDesacolao = [
  { nome: "maça", disponibilidade: true },
  { nome: "uva", disponibilidade: true },
  { nome: "laranja", disponibilidade: true }, // B
];

function objeto(parametro) {
  carrinho.push(parametro);
  console.log(carrinho); // C
}
objeto(frutaDesacolao);
