/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Boas vindas ao jogo de Blackjack!");

if (confirm("vamos joga um pouco?")) {
  const cardUser = comprarCarta();
  const cardUser2 = comprarCarta();
  const cardComputador = comprarCarta();
  const cardComputador2 = comprarCarta();

  let pontuacaoUser = cardUser.valor + cardUser2.valor;
  let pontuacaoComputador = cardComputador.valor + cardComputador2.valor; // soma pontuacoes

  console.log(
    `Usuário - cartas: ${cardUser.texto} ${cardUser2.texto} = ${pontuacaoUser}` // resultado
  );
  console.log(
    `Computador - cartas: ${cardComputador.texto} ${cardComputador2.texto} = ${pontuacaoComputador}`
  );

  if (pontuacaoUser === pontuacaoComputador) {
    console.log("O usuário ganhouuuu!");
  } else if (pontuacaoComputador > pontuacaoUser) {
    console.log("O computador ganhouuuu!");
  } else if (pontuacaoUser > pontuacaoComputador) {
    console.log("Deu Empate!");
  }
} else {
  console.log("O jogo acabou quer tenta de novo");
}
