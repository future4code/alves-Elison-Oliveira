```
function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífe     ro" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

 // Escreva seu código aqui
 const nomeDosAnimais = animais.map((i)=>{


return i.nome
})
return nomeDosAnimais
}
```

```
function filtraTarefas() {
  const tarefas = [
    { titulo: "Fazer Remember", status: "done", tempo: 30 },
    { titulo: "Fazer Challange", status: "todo", tempo: 30 },
    { titulo: "Assistir Aula", status: "done", tempo: 120 },
    { titulo: "Fazer almoço nutritivo", status: "done", tempo: 60 },
    { titulo: "Ler atentamente exercícios do dia", status: "doing", tempo: 20 },
    { titulo: "Fazer exercício do dia", status: "doing", tempo: 180 },
    { titulo: "Fazer desafio", status: "doing", tempo: 60 },
    { titulo: "Ir para o Stand Up", status: "todo", tempo: 30 },
    { titulo: "Enviar Feedback", status: "todo", tempo: 15 },
    { titulo: "Enviar Exercício", status: "todo", tempo: 15 },
    { titulo: "Jogar Videogame", status: "todo", tempo  120 },
    { titulo: "Assistir Novela", status: "todo", tempo: 90 }
 ]

 // Escreva seu código aqui
const novoArray = tarefas.filter((item, i, array) => {
  return item.status === "done"
})
 const resultado = novoArray.map((item, i, array) => {
   return item.titulo
 })
 return resultado
}
```
