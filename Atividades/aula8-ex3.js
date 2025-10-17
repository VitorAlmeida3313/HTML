const link = document.getElementById("meu-link");
const alvo = document.getElementById("alvo")

console.log(link.getAttribute("href"));

link.setAttribute("href", " https://developer.mozilla.org/ ");
link.setAttribute("target", "_blank");

link.removeAttribute("title");  

alvo.classList.add("destacado");

alvo.style.border = "2px solid red";