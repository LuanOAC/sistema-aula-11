const formulario = document.querySelector("#formulario");
const input = document.querySelector("#tarefa");
const lista = document.querySelector("#lista");
const mensagem = document.querySelector("#mensagem");
const contador = document.querySelector("#contador");

let total = 0;

formulario.addEventListener("submit", function (evento) {

  evento.preventDefault();

  const texto = input.value.trim();

  if (texto === "") {
    mensagem.textContent = "Digite uma tarefa.";
    return;
  }

  const tarefas = lista.querySelectorAll("li");

  for (const tarefa of tarefas) {
    if (tarefa.firstChild.textContent === texto) {
      mensagem.textContent = "Essa tarefa já foi adicionada.";
      return;
    }
  }

  const item = document.createElement("li");
  item.textContent = texto;

  item.addEventListener("click", function () {
    item.classList.toggle("concluida");
  });

  const botaoRemover = document.createElement("button");
  botaoRemover.textContent = "Remover";

  botaoRemover.addEventListener("click", function (evento) {
    evento.stopPropagation();
    item.remove();

    total = total - 1;
    contador.textContent = total;
  });

  item.appendChild(botaoRemover);
  lista.appendChild(item);

  total = total + 1;
  contador.textContent = total;

  input.value = "";
  mensagem.textContent = "Tarefa adicionada!";
});
