/* Adicionais e resumo do pedido */
document.addEventListener("DOMContentLoaded", () => {
  const base = PRATOS.find((p) => p.real), lista = $("lista"), itens = $("itens");
  lista.innerHTML = ADICIONAIS.map((a, i) => `
    <label class="item" data-i="${i}">
      <span class="emo" aria-hidden="true">${a.emoji}</span>
      <span class="nome">${a.nome}</span><span class="preco">+ ${dinheiro(a.preco)}</span>
      <input type="checkbox" aria-label="${a.nome}"><span class="check" aria-hidden="true"></span>
    </label>`).join("");

  function atualizar() {
    let total = base.preco;
    let html = `<li><span>🍝 ${base.nome}</span><span>${dinheiro(base.preco)}</span></li>`;
    lista.querySelectorAll(".item").forEach((el) => {
      const a = ADICIONAIS[el.dataset.i], marcado = el.querySelector("input").checked;
      el.classList.toggle("on", marcado);
      if (marcado) { total += a.preco; html += `<li><span>${a.emoji} ${a.nome}</span><span>${dinheiro(a.preco)}</span></li>`; }
    });
    itens.innerHTML = html;
    $("total").textContent = dinheiro(total);
  }
  lista.querySelectorAll(".item").forEach((el) => {
    const a = ADICIONAIS[el.dataset.i], c = el.querySelector("input");
    c.addEventListener("change", () => {
      if (!a.livre && c.checked) { c.checked = false; aviso(MENSAGEM_BLOQUEIO); tremer(el); }
      atualizar();
    });
  });
  $("ob-titulo").textContent = MSG_PEDIDO_TITULO;
  $("ob-texto").textContent = MSG_PEDIDO_TEXTO;
  $("finalizar").addEventListener("click", () => $("obrigado").classList.add("show"));
  $("fechar").addEventListener("click", () => $("obrigado").classList.remove("show"));
  atualizar();
});
