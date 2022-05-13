// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt("Digite uma mensagem!");

  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const calculaArea = +prompt("Digite a Altura");
  const calculaAre2 = +prompt("Digite a Largura");

  console.log(calculaArea * calculaAre2);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = +prompt("Digite ano atual");
  const anoDeNascimento = +prompt("Digite data de nascimento");
  console.log(anoAtual % anoDeNascimento);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let soma4 = peso / (altura * altura);

  return soma4;
}
console.log(soma4);

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("digite seu nomme");
  let idade = prompt("digite sua idade");
  let EMAIL = prompt("digite seu E-mail");
  let frase = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${EMAIL}.`;
  console.log(frase);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let listaDeCores = [];
  listaDeCores.push = prompt("digite uma cor favorita");
  listaDeCores.push = prompt("digite uma segunda cor favorita");
  listaDeCores.push = prompt("digite uma terceira cor favorita");

  console.log[listaDeCores];
}
// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  string = string.toUpperCase();
  return string;
}
// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let string = string1.length;
  let string3 = string2.length;
  const resultadoTamanho = string === string3;
  return resultadoTamanho;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let rara = array;
  rara[0] = array[array.length - 1];
  array.push();
  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let checa = string1.toUpperCase() === string2.toUpperCase();
  return checa;
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
}
