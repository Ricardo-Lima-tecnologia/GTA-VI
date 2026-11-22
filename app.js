"use strict";

/* ── Checkout ─────────────────────────────────────────────────────────── */
let checkout;
try {
  const url = new URL(CHECKOUT_URL);
  if (url.protocol === "https:" && !url.username && !url.password) checkout = url;
} catch {
  // Sem URL válida — compra indisponível.
}

for (const button of document.querySelectorAll("[data-buy]")) {
  button.addEventListener("click", () => {
    if (checkout) {
      window.location.assign(checkout.href);
      return;
    }
    const statusEl = button.closest(".purchase")?.querySelector("[data-status]");
    if (statusEl) {
      statusEl.textContent = "O checkout ainda não está disponível.";
    }
  });
}

/* ── Capa ─────────────────────────────────────────────────────────────── */
if (COVER_IMAGE) {
  for (const cover of document.querySelectorAll("[data-cover]")) {
    cover.addEventListener("load", () => {
      cover.hidden = false;
      cover.closest(".hero-visual, .offer-visual, .closing-inner, .editorial-images")
           ?.classList.add("has-cover");
    });
    cover.src = COVER_IMAGE;
  }
}

/* ── Helpers ──────────────────────────────────────────────────────────── */
const find = selector => document.querySelector(selector);

function addParagraphs(target, paragraphs) {
  if (!target) return;
  for (const text of paragraphs) {
    const p = document.createElement("p");
    p.textContent = text;
    target.append(p);
  }
}

/* ── Headlines dinâmicas ──────────────────────────────────────────────── */
if (HERO_HEADLINE)    find("#titulo")?.replaceChildren(
  Object.assign(document.createTextNode("Guia Rápido de Jogabilidade do "),
  document.createElement("em")).parentNode ?? (() => {
    const h = find("#titulo"); h.textContent = HERO_HEADLINE; return h;
  })()
);
if (CLOSING_HEADLINE) {
  const el = find("#fechamento");
  if (el) el.textContent = CLOSING_HEADLINE;
}

/* ── Cards reutilizáveis ──────────────────────────────────────────────── */
function renderCards(entries, listId, sectionEl, limit) {
  const list      = find(`#${listId}`);
  const section   = sectionEl;
  if (!list || !section) return [];

  const completed = entries.filter(e => e.title && e.description).slice(0, limit);
  for (const entry of completed) {
    const item    = document.createElement("li");
    const heading = document.createElement("h3");
    heading.textContent = entry.title;
    item.append(heading);
    addParagraphs(item, [entry.description]);
    list.append(item);
  }
  section.hidden = completed.length === 0;
  return completed;
}

/* ── Situações de uso ─────────────────────────────────────────────────── */
renderCards(
  USE_CASES,
  "situacoes",
  find("#uso")?.closest("section"),
  3
);

/* ── Capítulos / conteúdo ─────────────────────────────────────────────── */
const topics = renderCards(
  GUIDE_TOPICS,
  "topics",
  find("#conteudo")?.closest("section"),
  6
);

/* ── Lista da oferta ──────────────────────────────────────────────────── */
const included = find("#oferta-conteudos");
if (included && topics.length) {
  for (const topic of topics) {
    const item = document.createElement("li");
    item.textContent = topic.title;
    included.append(item);
  }
  included.hidden = false;
}

/* ── Textos complementares ────────────────────────────────────────────── */
addParagraphs(find("#valor-evidencia"), VALUE_EVIDENCE);
addParagraphs(find("#oferta-detalhes"), OFFER_DETAILS);

/* ── FAQ dinâmico ─────────────────────────────────────────────────────── */
function addQuestion(question, answer) {
  const faqList = find("#duvidas");
  if (!faqList) return;
  const details = document.createElement("details");
  const summary = document.createElement("summary");
  summary.textContent = question;
  details.append(summary);
  addParagraphs(details, [answer]);
  faqList.append(details);
}

if (DELIVERY_ANSWER?.trim()) addQuestion("Como recebo o guia?", DELIVERY_ANSWER);
for (const entry of EXTRA_FAQ) {
  if (entry.question && entry.answer) addQuestion(entry.question, entry.answer);
}
