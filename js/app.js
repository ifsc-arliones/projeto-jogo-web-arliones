// 1) EDITE AQUI: um item por aluno/jogo
//    url = link EXTERNO (cada jogo hospedado em outro lugar)
const slides = [
  {
    aluno: "Aluno 1",
    jogo: "Frogger Clone",
    thumb: "assets/thumbs/aluno1.png",
    url: "https://exemplo.com/aluno1/",
    descricao: "Clone do Frogger com movimentação por setas e colisões."
  },
  {
    aluno: "Aluno 2",
    jogo: "Breakout Clone",
    thumb: "assets/thumbs/aluno2.png",
    url: "https://exemplo.com/aluno2/",
    descricao: "Breakout com blocos e variação de velocidade."
  },
  {
    aluno: "Aluno 3",
    jogo: "Pong Clone",
    thumb: "assets/thumbs/aluno3.png",
    url: "https://exemplo.com/aluno3/",
    descricao: "Pong com placar e IA simples."
  }
];

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
  slides.forEach((_, i) => {
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
  const s = slides[index];

  // Segurança + UX: link externo abre em nova aba
  // rel="noopener noreferrer" evita que a aba aberta tenha acesso a window.opener
  slideEl.innerHTML = `
    <a class="shot"
       href="${s.url}"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="Abrir jogo externo de ${escapeHtml(s.aluno)}: ${escapeHtml(s.jogo)}">

      <img src="${s.thumb}" alt="Tela inicial do jogo ${escapeHtml(s.jogo)} - ${escapeHtml(s.aluno)}">

      <div class="overlay">
        <span class="playpill">↗ Abrir jogo (link externo)</span>
      </div>
    </a>

    <div class="meta">
      <h2>${escapeHtml(s.jogo)}</h2>
      <p><strong>${escapeHtml(s.aluno)}</strong></p>
      <p>${escapeHtml(s.descricao ?? "")}</p>

      <div class="actions">
        <a class="btn" href="${s.url}" target="_blank" rel="noopener noreferrer">↗ Jogar</a>
        <a class="btn" href="${s.thumb}" target="_blank" rel="noopener noreferrer">🖼️ Ver imagem</a>
      </div>
    </div>
  `;

  // atualiza dots
  [...dotsEl.children].forEach((d, i) => d.setAttribute("aria-current", String(i === index)));
}

function goTo(i) {
  index = (i + slides.length) % slides.length;
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
