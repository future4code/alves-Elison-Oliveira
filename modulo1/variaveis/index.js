//resposta
//let a = 10
//let b = 10

//console.log(b)
// O resutado "10"
//b = 5
//console.log(a, b)
// O resultado "10,5"

//////////////////////////////

//let a = 10
//let b = 20
//c = a
//b = c
//a = b

//console.log(a, b, c)
// Resultado: (10,20, nem um valor definido para "c")

//let horasTrabalhada = prompt("Quantas horas você trabalha por dia?")
//let ganhosDia = prompt("Quanto você recebe por dia?")
//alert(`Voce recebe ${t/p} por hora`)

let nome;
let idade;

console.log(typeof nome, idade);
// como nao a valor fica como nulo ou undefined

let nomeUsuario = prompt("Qual e o deu nome ?");
let idadeUsuario = prompt("Qual e o sua idade ?");
console.log(typeof nomeUsuario, typeof idadeUsuario);
// erro undefined, pois nao foi atribuido valor
// tipo de variavel string, pois e atribuido valor de testo
console.log("olá", nomeUsuario, "você tem", idadeUsuario);

const aula = prompt("Voce gostou da aula de hoje ?");
const conheciaJs = prompt("Voce já conhecia javaScript ?");
const desafio = prompt("Preparado para mais um desafio ?");

const aulaResposta = "Voce gostou da aula de hoje ?";
console.log(aulaResposta, aula);
const jsResposta = "Voce já conhecia javaScript ?";
console.log(jsResposta, conheciaJs);
const desafioResposta = "Preparado para mais um desafio ?";
console.log(desafioResposta, desafio);

let a = 10;
let b = 25;

a = 25;
b = 10;
console.log("o novo valor de a é", a);
const c = 10;
a = b;
b = a;
a = b;
// com uma variavel const no valo inicial de a onde nao pose ser auterado
