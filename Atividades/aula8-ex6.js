const botao = document.getElementById("btn");
const listaProdutos = document.getElementById("produtos");

botao.addEventListener("click", () =>{
    const itens = listaProdutos.querySelectorAll("li");

    itens.forEach(item =>{
        const id = item.dataset.id;
        const nome = item.dataset.nome;

        console.log(`Produto ${id}: ${nome}`);

        item.dataset.verificado = "true";

        item.classList.toggle("destacado");

        if (item.classList.contains("destacado")) {

            item.style.background = "black";
            item.style.color = "white";
            
        } else {
          
            item.style.background = ""; 
            item.style.color = "";      
        }

    })

    
})
