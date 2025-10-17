const cards = document.getElementById("cards");

const ultimoCard = cards.querySelector(".card:last-child");
ultimoCard.remove();

const cardNovo = document.createElement("div");
cardNovo.classList.add("card");
cardNovo.textContent = "Card Novo";

const primeiroCard = document.querySelector(".card");
primeiroCard.replaceWith(cardNovo);