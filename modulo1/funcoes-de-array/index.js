// Exercícios de interpretação de código 1

// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ];

// const novoArrayA = usuarios.map((item, index, array) => {
//   console.log(item, index, array);
// });  // A: vai mostra o item junto com numero de index , eo array todo

// EX 2

// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ];

// const novoArrayB = usuarios.map((item, index, array) => {
//   return item.nome;
// });

// console.log(novoArrayB); // A: apenas o nome das pessoas "item.nome"

// EX 3

// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ];

// const novoArrayC = usuarios.filter((item, index, array) => {
//   return item.apelido !== "Chijo";
// });

// console.log(novoArrayC);  // A: vai imprimir apenas o primeiro nome eo segundo, desconsiderando "chijo" como pede no codigo

// Exercícios de escrita de código 1
console.log("letra A");
const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" },
];
const lista = pets.map((p, i) => {
  return p.nome;
});
console.log(lista); // A

////////////////////////////
console.log("letra B");

const nomeSalsicha = pets.filter((item) => {
  return item.raca === "Salsicha";
});
console.log(nomeSalsicha);
/////////////////////////////

console.log("letra C");

const promocao = pets.filter((promo) => {
  return promo.raca === "Poodle";
});

const resultadoPromocao = promocao.map((promo, i) => {
  return promo.nome;
});
console.log(
  "Você ganhou um cupom de desconto de 10% para tosar o/a",
  resultadoPromocao[0]
);
console.log(
  "Você ganhou um cupom de desconto de 10% para tosar o/a",
  resultadoPromocao[1]
);
//////////////////////////////

// EX 2

let produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];

const nomeDeProdutos = produtos.map((produto) => {
  return produto.nome;
});
console.log(nomeDeProdutos); // A
///////////////////////////////
console.log("EX 2 letra B");

let descontoProduto = produtos.map((parametro) => {
  delete parametro.categoria;
  preco = parametro.preco;
  let resultadoFinal = preco - (preco * 5) / 100; // B
  parametro.preco = resultadoFinal;
  console.log(parametro);
});
//////////////////////////////////
console.log("EX 2 letra C");

const nomeBebidas = produtos.filter((bebida) => {
  return bebida.categoria === "Bebidas"; // C
});
console.log(nomeBebidas);

const nomeYpe = produtos.filter((bebida) => {
  return bebida.nome === "Ypê"; // d
});
console.log(nomeYpe);
/////////////////////////

const nomePromocao = produtos.filter((it) => {
  return it.nome === "Ypê"; // d
});
const valorFinal = nomePromocao.map((it, i) => {
  return it.preco;
});
console.log(valorFinal);
