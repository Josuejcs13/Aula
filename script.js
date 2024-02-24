const input = document.querySelector("input")
const buttonAdd = document.querySelector(".button-add")
const tarefasContainer = document.querySelector(".tarefas")
let tarefas = []

buttonAdd.addEventListener("click", addTarefa)

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
    const textoTarefas = document.createElement("li")
    textoTarefas.innerText = tarefa
    tarefasContainer.appendChild(textoTarefas)
  }
}
