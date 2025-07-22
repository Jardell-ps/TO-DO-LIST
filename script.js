console.log("Script carregou! Debug 1"); // Verificação inicial

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM carregado! Debug 2"); // Verifica se o DOM está pronto
  
  // Adiciona tarefa ao clicar no botão
  const botao = document.getElementById("btnAdicionar");
  botao.addEventListener("click", adicionarTarefa);

  // Adiciona tarefa ao pressionar Enter
  const inputTarefa = document.getElementById("novaTarefa");
  inputTarefa.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      adicionarTarefa();
    }
  });
});
const inputTarefa = document.getElementById("novaTarefa"); // Captura o input
function adicionarTarefa() {
  const texto = inputTarefa.value.trim();

  if (texto) {
    const itemLista = document.createElement("li");
    itemLista.innerHTML = `
      <span>${texto}</span>
      <div>
        <button class="concluir">✔</button>
        <button class="remover">🗑</button>
      </div>
    `;

    listaTarefas.appendChild(itemLista);
    inputTarefa.value = "";

    // ===> ADICIONE ESTAS LINHAS <=== //
    // Evento para o botão "✔" (Concluir)
    const botaoConcluir = itemLista.querySelector(".concluir");
    botaoConcluir.addEventListener("click", function() {
      const textoItem = itemLista.querySelector("span");
      textoItem.classList.toggle("feito"); // Adiciona/remove a classe "feito"
    });

    // Evento para o botão "🗑" (Remover) - Se já não tiver
    const botaoRemover = itemLista.querySelector(".remover");
    botaoRemover.addEventListener("click", function() {
      itemLista.remove();
    });
  }
}