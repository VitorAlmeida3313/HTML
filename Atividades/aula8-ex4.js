const lista = document.getElementById("lista");

const primeiroLi = document.createElement("li");
primeiroLi.textContent = "Item no início";
primeiroLi.classList.add("item");

lista.prepend(primeiroLi);

const segundoLi = document.createElement("li");
segundoLi.textContent = "Item no fim";
segundoLi.classList.add("item");

lista.append(segundoLi);