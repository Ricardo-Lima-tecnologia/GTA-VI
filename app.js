"use strict";

let checkout;
try {
  const url = new URL(CHECKOUT_URL);
  if (url.protocol === "https:" && !url.username && !url.password) checkout = url;
} catch {
  // Sem URL válida, a compra permanece indisponível.
}

for (const button of document.querySelectorAll("[data-buy]")) {
  button.addEventListener("click", () => {
    if (checkout) {
      window.location.assign(checkout.href);
      return;
    }
    button.closest(".purchase").querySelector("[data-status]").textContent =
      "O checkout ainda não está disponível.";
  });
}

if (COVER_IMAGE) {
  for (const cover of document.querySelectorAll("[data-cover]")) {
    cover.addEventListener("load", () => {
      cover.hidden = false;
      cover.parentElement.classList.add("has-cover");
    });
    cover.src = COVER_IMAGE;
  }
}

const find = selector => document.querySelector(selector);
function addParagraphs(target, paragraphs) {
  for (const text of paragraphs) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    target.append(paragraph);
  }
}

if (HERO_HEADLINE) find("#titulo").textContent = HERO_HEADLINE;
if (CLOSING_HEADLINE) find("#fechamento").textContent = CLOSING_HEADLINE;

if (PRODUCT_INTRO.length) {
  addParagraphs(find("#produto-texto"), PRODUCT_INTRO);
  find("#apresentacao").closest("section").hidden = false;
}

function renderCards(entries, list, section, limit) {
  const completed = entries.filter(entry => entry.title && entry.description).slice(0, limit);
  for (const entry of completed) {
    const item = document.createElement("li");
    const heading = document.createElement("h3");
    heading.textContent = entry.title;
    item.append(heading);
    addParagraphs(item, [entry.description]);
    list.append(item);
  }
  section.hidden = completed.length === 0;
  return completed;
}
const topics = renderCards(GUIDE_TOPICS, find("#topics"), find("#conteudo").closest("section"), 6);
renderCards(USE_CASES, find("#situacoes"), find("#uso").closest("section"), 3);
const included = find("#oferta-conteudos");
for (const topic of topics) {
  const item = document.createElement("li");
  item.textContent = topic.title;
  included.append(item);
}
included.hidden = topics.length === 0;
addParagraphs(find("#valor-evidencia"), VALUE_EVIDENCE);
addParagraphs(find("#oferta-detalhes"), OFFER_DETAILS);

function addQuestion(question, answer) {
  const details = document.createElement("details");
  const summary = document.createElement("summary");
  summary.textContent = question;
  details.append(summary);
  addParagraphs(details, [answer]);
  find("#duvidas").append(details);
}
if (DELIVERY_ANSWER.trim()) addQuestion("Como recebo o guia?", DELIVERY_ANSWER);
for (const entry of EXTRA_FAQ) {
  if (entry.question && entry.answer) addQuestion(entry.question, entry.answer);
}
