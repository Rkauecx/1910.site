/* Página secreta: linha do tempo + surpresas de 1 ano */
document.addEventListener("DOMContentLoaded", async () => {
  fundo(); entrada(); contador(); regressiva();
  linhaDoTempo(); await galeria(); motivos(); carta(); envelope(); musica(); planos(); ceu(); surpresa(); final();
  observar();
});

/* Estrelas, corações e partículas de fundo */
function fundo() {
  const f = $("fundo"); if (reduzMovimento) return;
  for (let i = 0; i < 60; i++) {
    const s = document.createElement("i"); s.className = "estrelinha";
    s.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;--t:${2 + Math.random() * 4}s;--d:${-Math.random() * 5}s;width:${1 + Math.random() * 2}px;height:${1 + Math.random() * 2}px`;
    f.appendChild(s);
  }
  for (let i = 0; i < 16; i++) {
    const s = document.createElement("span"); s.className = "flutua"; s.textContent = i % 3 ? "♥" : "✦";
    s.style.cssText = `left:${Math.random() * 100}%;font-size:${10 + Math.random() * 14}px;color:${i % 2 ? "#F8C8DC" : "#D4AF37"};animation-duration:${14 + Math.random() * 14}s;animation-delay:${-Math.random() * 20}s`;
    f.appendChild(s);
  }
}

function entrada() {
  $("entrada-msg").textContent = MENSAGEM_ENTRADA; document.body.classList.add("travado");
  $("revelar").addEventListener("click", () => {
    $("entrada").classList.add("sumiu"); document.body.classList.remove("travado");
    setTimeout(() => $("entrada").remove(), 900);
  });
}

/* Contador desde 19/10/2025: meses, dias e horas */
function contador() {
  const inicio = new Date(2025, 9, 19);
  const c = $("contador");

  const plural = (n, s, p) => n + " " + (n === 1 ? s : p);

  function calc() {
    const agora = new Date();

    let meses =
      (agora.getFullYear() - inicio.getFullYear()) * 12 +
      (agora.getMonth() - inicio.getMonth());

    const aniversarioMes = new Date(
      inicio.getFullYear(),
      inicio.getMonth() + meses,
      inicio.getDate()
    );

    if (aniversarioMes > agora) meses--;

    const marcoMes = new Date(
      inicio.getFullYear(),
      inicio.getMonth() + meses,
      inicio.getDate()
    );

    const diferenca = agora - marcoMes;

    const dias = Math.floor(diferenca / 864e5);
    const horas = Math.floor((diferenca % 864e5) / 36e5);
    const totalHoras = Math.floor((agora - inicio) / 36e5);

    c.innerHTML = `<small>Estamos juntos há</small>${plural(meses, "mês", "meses")}, ${plural(dias, "dia", "dias")} e ${plural(horas, "hora", "horas")}<small>${totalHoras} horas de amor 💞</small>`;
  }

  calc();
  setInterval(calc, 60 * 1000);
}

/* Contagem regressiva para 19/10/2027 */
function regressiva() {
  const r = $("regressiva");
  const agora = new Date();
  const proximaData = new Date(2027, 9, 19);

  const dias = Math.ceil((proximaData - agora) / 864e5);

  if (dias < 0) return (r.hidden = true);

  r.textContent = dias === 0
    ? "É HOJE! 🎉"
    : `Faltam ${dias} ${dias === 1 ? "dia" : "dias"} para nosso aniversário de namoro 💞`;
}

function linhaDoTempo() {
  $("linha").innerHTML = MARCOS.map((m) => `
    <article class="marco reveal"><div class="mcard">
      <div class="foto">${imgHTML(m.foto, m.titulo)}</div>
      <div class="tx"><span class="data">${m.data}</span><h3>${m.titulo}</h3><p>${m.texto}</p></div></div></article>`).join("");
}

/* Galeria dinâmica: todas as fotos joannaN que não estão na linha do tempo */
async function galeria() {
  const usadas = MARCOS.map((m) => m.foto), achadas = await descobrirFotos();
  let fotos = achadas.map((n) => IMAGENS.prefixo + n).filter((b) => !usadas.includes(b));
  if (!fotos.length) fotos = Array.from({ length: 6 }, (_, i) => "memoria" + (i + 1)); // reserva
  $("galeria").innerHTML = fotos.map((b, i) => {
    const n = Number(b.replace(IMAGENS.prefixo, "")), info = GALERIA_INFO[n] || {};
    return `<figure class="polaroid reveal" style="--r:${(i % 2 ? 1 : -1) * (1 + (i % 3))}deg">${imgHTML(b, info.legenda || "Memória")}
      <figcaption><b>${info.legenda || LEGENDAS_PADRAO[i % LEGENDAS_PADRAO.length]}</b>${info.data ? `<small>${info.data}</small>` : ""}</figcaption></figure>`;
  }).join("");
}

function motivos() {
  $("motivos").innerHTML = MOTIVOS.map((t, i) => `<div class="motivo reveal"><span>Mês ${i + 1}</span><p>${t}</p></div>`).join("");
}

function carta() {
  const corpo = CARTA.map((l) => `<p>${l}</p>`).join("");
  $("carta").innerHTML = corpo + `<p class="assina">${ASSINATURA}</p>`;
}

function envelope() {
  const e = $("envelope"), b = e.querySelector("button"); $("env-msg").textContent = MENSAGEM_ENVELOPE;
  b.addEventListener("click", () => { b.setAttribute("aria-expanded", e.classList.toggle("aberto")); });
}

function musica() {
  const au = $("audio"), btn = $("musica"), erro = $("erro-musica");
  au.src = MUSICA; $("nome-musica").textContent = NOME_MUSICA;
  const falha = () => (erro.textContent = "Coloque o arquivo de áudio em " + MUSICA);
  btn.addEventListener("click", () => {
    if (au.paused) au.play().then(() => { btn.textContent = "⏸ Pausar"; $("disco").classList.add("gira"); }).catch(falha);
    else { au.pause(); btn.textContent = "▶ Tocar"; $("disco").classList.remove("gira"); }
  });
  au.addEventListener("ended", () => { btn.textContent = "▶ Tocar"; $("disco").classList.remove("gira"); });
  au.addEventListener("error", falha);
}

function planos() {
  $("planos").innerHTML = PLANOS.map((p) => `<li class="reveal"><span aria-hidden="true">${p.emoji}</span>${p.texto}</li>`).join("");
}

function ceu() {
  const area = $("ceu"), msg = $("ceu-msg"), cols = 4;
  ESTRELAS.forEach((t, i) => {
    const b = document.createElement("button"); b.className = "estrela"; b.textContent = "★"; b.setAttribute("aria-label", "Estrela " + (i + 1));
    b.style.left = `calc(${(i % cols) * (100 / cols) + 12}% - 22px)`;
    b.style.top = `calc(${Math.floor(i / cols) * 50 + 25}% - 22px + ${(i * 7) % 18}px)`;
    b.style.animationDelay = i * 0.3 + "s";
    b.addEventListener("click", () => { msg.textContent = t; b.classList.add("lida"); });
    area.appendChild(b);
  });
}

function surpresa() {
  const box = $("surpresa-box"), btn = $("surpresa-btn"); $("surpresa-msg").textContent = MENSAGEM_SURPRESA;
  btn.addEventListener("click", () => {
    box.classList.add("revelada"); btn.hidden = true;
    if (reduzMovimento) return;
    for (let i = 0; i < 30; i++) {
      const s = document.createElement("span"); s.className = "burst"; s.textContent = i % 3 ? "❤" : "✦";
      s.style.cssText = `--x:${(Math.random() - .5) * 360}px;--y:${(Math.random() - .8) * 260}px;color:${i % 2 ? "#D4AF37" : "#E8799F"}`;
      box.appendChild(s); setTimeout(() => s.remove(), 1600);
    }
  });
}

function final() {
  $("titulo-final").textContent = TITULO_FINAL; $("declaracao").textContent = DECLARACAO;
  $("mensagem-final").textContent = MENSAGEM_FINAL; $("assinatura-final").textContent = ASSINATURA;
}

/* Animações ao rolar */
function observar() {
  const els = document.querySelectorAll(".reveal");
  if (reduzMovimento || !("IntersectionObserver" in window)) return els.forEach((e) => e.classList.add("vis"));
  const o = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("vis"); o.unobserve(e.target); } }), { threshold: 0.12 });
  els.forEach((e) => o.observe(e));
}