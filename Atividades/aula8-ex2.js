const text = document.getElementById("texto");
const exit = document.getElementById("saida");

const textInnerText = text.innerText;
const textTextContente = text.textContent;
const textInnerHTML = text.innerHTML;

exit.textContent = `Texto com innerText = ${textInnerText}\n\n` +
                   `Texto com textContente = ${textTextContente}\n\n`+
                   `Texto com innerHTML = ${textInnerHTML}` 


text.textContent = "<b>Seguro</b>";

text.innerHTML = "<b>Seguro</b>";