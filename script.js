const input = document.querySelector("input")
const button = document.querySelector(".button-add")
const tarefasContainer = document.querySelector(".tarefas")
let tarefas = []

button.addEventListener("click", addTarefa)

function addTarefa() {
  tarefas.push(input.value)
  imprimirTarefa()
  console.log(tarefas)
  input.value = ""
}
function imprimirTarefa() {
  tarefasContainer.innerHTML = ""
  for (let index = 0; index < tarefas.length; index++) {
    const tarefa = tarefas[index]
    const textoTarefas = document.createElement("p")
    textoTarefas.innerText = tarefa
    tarefasContainer.appendChild(textoTarefas)
  }
}
