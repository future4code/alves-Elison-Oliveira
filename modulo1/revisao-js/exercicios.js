// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  array.sort((a, b) => a - b);
  return array;
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let numeroPares = [];
  for (let i of array) {
    if (i % 2 === 0) {
      numeroPares.push(i);
    }
  }
  return numeroPares;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let numeroParesElevado = [];
  for (let i of array) {
    if (i % 2 === 0) {
      numeroParesElevado.push(i);
    }
  }
  return numeroParesElevado;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maior = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (maior < array[i]) {
      maior = array[i];
    }
  }
  return maior;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let numeroN = [];
  for (let i of n.length) {
    if (i % 2 === 0) {
      numeroN.push(i);
    }
  }
  return numeroN;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  const filmes = [];
  const frase = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`;
  return frase;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  const novaPesoa = {
    ...pessoa,
    nome: "ANÔNIMO",
  };
  return novaPesoa;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  for (i = 0; i < contas.length; i++) {
    const soma = 0;
    for (c = 0; c < contas[i].compras.length; c++) {
      soma += contas[i].compras[c];
    }
    contas[i].saldoTotal = contas[i].saldoTotal - soma;
    contas[i].compras = [];
  }
  return contas;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
