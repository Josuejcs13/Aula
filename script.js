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

function removerDiv(event) {
  const textoSelecionado = event.target.parentElement.firstChild.innerText
  tarefas = tarefas.filter((tarefa) => tarefa !== textoSelecionado)
  imprimirTarefa()
}

function imprimirTarefa() {
  tarefasContainer.innerHTML = ""
  for (let index = 0; index < tarefas.length; index++) {
    const tarefa = tarefas[index]
    const divTarefa = document.createElement("div")
    const textoTarefa = document.createElement("p")
    const buttonRemove = document.createElement("button")
    buttonRemove.addEventListener("click", removerDiv)
    buttonRemove.innerText = "🗑️"
    divTarefa.className = "tarefaListada"
    textoTarefa.innerText = tarefa
    divTarefa.appendChild(textoTarefa)
    divTarefa.appendChild(buttonRemove)
    tarefasContainer.appendChild(divTarefa)
  }
}
const buttonLimpar = document.querySelector(".button-limpar")
buttonLimpar.addEventListener("click", () => {
  tarefasContainer.innerHTML = ""
  tarefas = []
})
