/* Núcleo: proteção de rotas e utilidades usadas por todas as páginas */
"use strict";

/* Proteção: páginas com <html data-protegida> exigem login */
if (document.documentElement.hasAttribute("data-protegida") && !sessionStorage.getItem("logado")) {
  location.replace("index.html");
}

const $ = (id) => document.getElementById(id);
const dinheiro = (v) => "R$ " + v.toFixed(2).replace(".", ",");
const reduzMovimento = matchMedia("(prefers-reduced-motion: reduce)").matches;

function sair() { sessionStorage.removeItem("logado"); location.href = "index.html"; }

/* Imagens: tenta jpg → jpeg → png → webp e, por fim, uma imagem de reserva */
function caminho(base, i) { return IMAGENS.pasta + base + "." + IMAGENS.extensoes[i]; }
function proximaExtensao(img) {
  const i = Number(img.dataset.i) + 1;
  if (i < IMAGENS.extensoes.length) { img.dataset.i = i; img.src = caminho(img.dataset.base, i); }
  else { img.onerror = null; img.src = "https://picsum.photos/seed/" + img.dataset.base + "/600/450"; }
}
function imgHTML(base, alt = "") {
  return `<img src="${caminho(base, 0)}" alt="${alt}" data-base="${base}" data-i="0" loading="lazy" decoding="async" onerror="proximaExtensao(this)">`;
}
function existeImagem(base) {
  return new Promise((resolve) => {
    let i = 0;
    (function tentar() {
      if (i >= IMAGENS.extensoes.length) return resolve(false);
      const im = new Image();
      im.onload = () => resolve(true);
      im.onerror = () => { i++; tentar(); };
      im.src = caminho(base, i);
    })();
  });
}
/* Descobre quais fotos joannaN existem na pasta */
async function descobrirFotos() {
  const ids = Array.from({ length: IMAGENS.maxFotos }, (_, k) => k + 1);
  const ok = await Promise.all(ids.map((n) => existeImagem(IMAGENS.prefixo + n)));
  return ids.filter((_, k) => ok[k]);
}

/* Aviso (toast): some em 3s ou ao clicar */
let tToast;
function aviso(msg) {
  let t = $("toast");
  if (!t) { t = document.createElement("div"); t.id = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
  t.textContent = msg; t.classList.add("show");
  clearTimeout(tToast); tToast = setTimeout(() => t.classList.remove("show"), 3000);
  t.onclick = () => t.classList.remove("show");
}
function tremer(el) { el.classList.remove("tremer"); void el.offsetWidth; el.classList.add("tremer"); }

/* Botão Sair em qualquer página interna */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-sair]").forEach((b) => b.addEventListener("click", sair));
});
