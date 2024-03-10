const input = document.querySelector("input")
const buttonAdd = document.querySelector(".button-add")
const tarefasContainer = document.querySelector(".tarefas")
const tipoTarefaSelecionada = document.querySelector("#tipoTarefa")
let tarefas = []
let idAtual = 0
buttonAdd.addEventListener("click", addTarefa)

function addTarefa() {
  const novaTarefa = {
    texto: input.value,
    tipo: tipoTarefaSelecionada.value,
    terminada: false,
    id: idAtual,
  }
  idAtual++
  tarefas.push(novaTarefa)
  imprimirTarefa()
  console.log(tarefas)
  input.value = ""
}

function removerDiv(id) {
  tarefas = tarefas.filter((tarefa) => tarefa.id !== id)
  imprimirTarefa()
}

function imprimirTarefa() {
  tarefasContainer.innerHTML = ""
  for (let index = 0; index < tarefas.length; index++) {
    const tarefa = tarefas[index]
    const divTarefa = document.createElement("div")
    const textoTarefa = document.createElement("p")
    const buttonRemove = document.createElement("button")
    buttonRemove.addEventListener("click", () => removerDiv(tarefa.id))
    buttonRemove.innerText = "🗑️"
    divTarefa.className = "tarefaListada"
    textoTarefa.innerText = tarefa.texto
    if (tarefa.terminada) {
      textoTarefa.classList.add("riscado")
    }
    divTarefa.appendChild(textoTarefa)
    divTarefa.appendChild(buttonRemove)
    tarefasContainer.appendChild(divTarefa)
    textoTarefa.addEventListener("click", () =>
      terminarTarefa(textoTarefa, tarefa.id)
    )
  }
}
const buttonLimpar = document.querySelector(".button-limpar")
buttonLimpar.addEventListener("click", () => {
  tarefasContainer.innerHTML = ""
  tarefas = []
})

function terminarTarefa(divTarefa, id) {
  divTarefa.classList.toggle("riscado")
  const tarefaSelecionada = tarefas.find((tarefa) => tarefa.id === id)
  tarefaSelecionada.terminada = !tarefaSelecionada.terminada

  console.log(tarefas)
}
