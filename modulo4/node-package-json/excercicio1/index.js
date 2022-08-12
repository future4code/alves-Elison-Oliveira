//- **Exercício 1**

//a) **Responda como comentário no seu código:**
//como fazemos para acessar os parâmetros passados na linha de comando para o Node?
//  R: ussando . process.argv[0] passando argumento

// b)
const idade = Number(process.argv[3]);

console.log("Olá,", process.argv[2], "!");
console.log(`Você tem", ${idade}, anos.`);
//c)

console.log(`Em sete anos você terá, ${idade + 7}`);
