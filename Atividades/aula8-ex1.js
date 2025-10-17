const titulo = document.getElementById("titulo");

titulo.classList.add("destacado");

const itens = document.getElementsByClassName("item");

Array.from(itens).forEach(item =>{
    item.classList.add("destacado");    
});

const paragrafos = document.getElementsByTagName("p");

Array.from(paragrafos).forEach(p =>{
    p.classList.add("destacado");
});

console.log(titulo);

console.log(itens);

console.log(paragrafos);    