/* Página de login */
document.addEventListener("DOMContentLoaded", () => {
  const form = $("form"), card = $("card"), erro = $("erro");
  ["c1", "c2", "c3"].forEach((id, i) => { $(id).innerHTML = imgHTML(IMAGENS.colagem[i], ""); });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (form.usuario.value.trim() === USUARIO && form.senha.value === SENHA) {
      sessionStorage.setItem("logado", "1"); location.href = "home.html";
    } else { erro.textContent = "Usuário ou senha incorretos. Tenta de novo, amor 💕"; tremer(card); }
  });
  $("olho").addEventListener("click", () => {
    const mostrar = form.senha.type === "password";
    form.senha.type = mostrar ? "text" : "password";
    $("olho").setAttribute("aria-pressed", mostrar);
    $("olho").textContent = mostrar ? "🙈" : "👁";
  });
  
});
