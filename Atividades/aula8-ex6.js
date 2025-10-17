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
            // Se tiver, aplicamos o estilo
            item.style.background = "black";
            item.style.color = "white";
        } else {
            // Se não tiver (porque o toggle a removeu no segundo clique),
            // resetamos o estilo para o padrão.
            item.style.background = ""; // Volta ao background padrão
            item.style.color = "";      // Volta à cor de texto padrão
        }
        
    })

    
})


