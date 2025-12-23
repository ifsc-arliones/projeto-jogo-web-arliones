// Verificação defensiva (ajuda na manutenção futura)
if (typeof jogos === "undefined" || !Array.isArray(jogos)) {
  throw new Error("Lista de jogos não encontrada. Verifique js/data.js");
}

// Estado do carrossel
let index = 0;

// Elementos do DOM
const slideEl = document.getElementById("slide");
const dotsEl = document.getElementById("dots");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderDots() {
  dotsEl.innerHTML = "";
  jogos.forEach((_, i) => {
    const b = document.createElement("button");
    b.className = "dot";
    b.type = "button";
    b.setAttribute("aria-label", `Ir para slide ${i + 1}`);
    b.setAttribute("aria-current", String(i === index));
    b.addEventListener("click", () => goTo(i));
    dotsEl.appendChild(b);
  });
}

function renderSlide() {
  const j = jogos[index];

  slideEl.innerHTML = `
    <a class="shot"
       href="${j.url}"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="Abrir jogo externo de ${escapeHtml(j.aluno)}: ${escapeHtml(j.jogo)}">

      <img src="${j.thumb}"
           alt="Tela inicial do jogo ${escapeHtml(j.jogo)} - ${escapeHtml(j.aluno)}">

      <div class="overlay">
        <span class="playpill">↗ Abrir jogo (link externo)</span>
      </div>
    </a>

    <div class="meta">
      <h2>${escapeHtml(j.jogo)}</h2>
      <p><strong>Aluno: ${escapeHtml(j.aluno)}</strong></p>
      <p>${escapeHtml(j.descricao ?? "")}</p>

      <div class="actions">
        <a class="btn" href="${j.url}" target="_blank" rel="noopener noreferrer">
          ↗ Jogar
        </a>
        <a class="btn" href="${j.thumb}" target="_blank" rel="noopener noreferrer">
          🖼️ Ver imagem
        </a>
      </div>
    </div>
  `;

  [...dotsEl.children].forEach((d, i) =>
    d.setAttribute("aria-current", String(i === index))
  );
}

function goTo(i) {
  index = (i + jogos.length) % jogos.length;
  renderSlide();
}

function next() { goTo(index + 1); }
function prev() { goTo(index - 1); }

// Eventos
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") prev();
  if (e.key === "ArrowRight") next();
});

// Inicialização
renderDots();
renderSlide();
