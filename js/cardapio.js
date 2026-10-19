/* Cardápio */
document.addEventListener("DOMContentLoaded", () => {
  $("nome").textContent = NOME_RESTAURANTE;
  $("boas").textContent = BOAS_VINDAS;
  document.title = NOME_RESTAURANTE;
  const grade = $("grade");
  grade.innerHTML = PRATOS.map((p) => `
    <article class="prato${p.real ? " real" : ""}" data-id="${p.id}" tabindex="0" role="button" aria-label="${p.nome}, ${dinheiro(p.preco)}">
      ${p.real ? '<span class="selo">⭐ Especialidade da casa</span>' : ""}
      <div class="foto">${imgHTML(p.foto, p.nome)}</div>
      <div class="info"><h3>${p.nome}</h3><p>${p.desc}</p>
        <div class="rodape"><span class="preco">${dinheiro(p.preco)}</span>${p.real ? '<span class="btn btn-sm">Escolher</span>' : ""}</div></div>
    </article>`).join("");

  grade.querySelectorAll(".prato").forEach((el) => {
    const acao = () => {
      if (el.dataset.id === "macarrao") { location.href = "adicionais.html"; return; }
      const m = MENSAGENS_ZOEIRA[el.dataset.id];
      aviso(m[Math.floor(Math.random() * m.length)]); tremer(el);
    };
    el.addEventListener("click", acao);
    el.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); acao(); } });
  });
  $("segredo").addEventListener("click", () => {
    if (sessionStorage.getItem("logado")) location.href = "pagsecreta.html";
    else { erro.textContent = "Faça login primeiro 💕"; tremer(card); }
  });
});
