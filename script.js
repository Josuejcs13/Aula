const input = document.querySelector("input");
const buttonAdd = document.querySelector(".button-add");
const tarefasContainer = document.querySelector(".tarefas");
const tipoTarefaSelecionada = document.querySelector("#tipoTarefa");

let tarefas = [];

buttonAdd.addEventListener("click", addTarefa);

function addTarefa() {
  const novaTarefa = {
    texto: input.value,
    tipo: tipoTarefaSelecionada.value,
  };

  tarefas.push(novaTarefa);
  imprimirTarefa();
  console.log(tarefas);
  input.value = "";
}

function removerDiv(event) {
  const textoSelecionado = event.target.parentElement.firstChild.innerText;
  tarefas = tarefas.filter((tarefa) => tarefa.texto !== textoSelecionado);
  imprimirTarefa();
}

function imprimirTarefa() {
  tarefasContainer.innerHTML = "";
  for (let index = 0; index < tarefas.length; index++) {
    const tarefa = tarefas[index];
    const divTarefa = document.createElement("div");
    const textoTarefa = document.createElement("p");
    const buttonRemove = document.createElement("button");
    buttonRemove.addEventListener("click", removerDiv);
    buttonRemove.innerText = "🗑️";
    divTarefa.className = "tarefaListada";
    textoTarefa.innerText = tarefa.texto;
    divTarefa.appendChild(textoTarefa);
    divTarefa.appendChild(buttonRemove);
    tarefasContainer.appendChild(divTarefa);

    // textoTarefas.innerText = tarefa;
    // tarefasContainer.appendChild(textoTarefas);
  }
}
