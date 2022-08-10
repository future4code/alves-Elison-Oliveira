const tarefa = ["joga bola", "faze atividade", "lava roupa"];

const novaTarefa = process.argv[2];
tarefa.push(novaTarefa);

console.table(tarefa);
