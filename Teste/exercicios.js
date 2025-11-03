const a1numero1 = document.getElementById("a1-num1");
const a1numero2 = document.getElementById("a1-num2");
const a1Btn = document.getElementById("a1-somar");
const a1Resultado = document.getElementById("a1-resultado")


a1Btn.addEventListener("click", () => {
    const numero1 = Number(a1numero1.value.trim());
    const numero2 = Number(a1numero2.value.trim());

    a1Resultado.textContent = numero1 + numero2;
});
/////////////////////////////////////////////////////////////////////////////
const a2Num = document.getElementById("a2-num");
const a2Resultado = document.getElementById("a2-resultado");
const a2Btn = document.getElementById("a2-verificar");

a2Btn.addEventListener("click", () => {
    const numero = Number(a2Num.value.trim());

    if(numero %2 === 0){
        a2Resultado.textContent = "O número digitado é Par";
    }else{
        a2Resultado.textContent = "O número digitado é Ímpar";
    }  
});
//////////////////////////////////////////////////////////////////////////////
const a3Num = document.getElementById("a3-num");
const a3Btn = document.getElementById("a3-gerar");
const a3List = document.getElementById("a3-lista");

a3Btn.addEventListener("click", () => {
    const numero = Number(a3Num.value.trim());
    a3List.innerHTML = "";
    for(let i = 1; i <=10; i++ ){
        const li = document.createElement("li");
        li.textContent = `${numero} X ${i} = ${numero * i}`;
        a3List.appendChild(li);

        a3Num.focus();
    }
});
/////////////////////////////////////////////////////////////////////////////





/////////////////////////////////////////////////////////////////////////////
const inputTitulo = document.getElementById("b6-inputTitulo");
const tituloPreview = document.getElementById("b6-tituloPreview");

inputTitulo.addEventListener("input", () => {
    tituloPreview.textContent = inputTitulo.value.trim() || "pré-visualização do título..."
});


////////////////////////////////////////////////////////////////////////////////


const b7Toggle = document.getElementById("b7-toggleTema");

b7Toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const ativarEscuro = document.body.classList.contains("dark");
    b7Toggle.textContent = ativarEscuro ? "Modo Claro" : "Modo Escuro";
});


/////////////////////////////////////////////////////////////////////////////////


const b8Input = document.getElementById("b8-tarefa");
const b8Adicionar = document.getElementById("b8-adicionar");
const b8Lista = document.getElementById("b8-lista");

b8Adicionar.addEventListener("click", () => {
    const texto = b8Input.value.trim();
    if(!texto) return;
    
    const li = document.createElement("li");
    const btn = document.createElement("button");

    btn.textContent = "remover";
    btn.style.marginLeft = "8px";
    btn.style.cursor = "pointer";
    btn.className = "btn-secondary";

    li.textContent = texto;
    li.appendChild(btn);
    b8Lista.appendChild(li);

    b8Input.value = "";
    b8Input.focus();
});

b8Lista.addEventListener("click", (e) => {
    if(e.target.tagName === "BUTTON"){
        const li = e.target.closest("li");
        if(li) li.remove();
    }
})

////////////////////////////////////////////////////////////

const b9Valor = document.getElementById("b9-valor");
const btnDiminuir = document.getElementById("b9-dec");
const btnAumentar = document.getElementById("b9-inc");
const btnResetar = document.getElementById("b9-reset");

let contador = 0;

function atualizarContador(){
    b9Valor.textContent = String(contador);
}

btnAumentar.addEventListener("click", () => {
    contador ++;
    atualizarContador();
})

btnDiminuir.addEventListener("click", () => {
    contador --;
    atualizarContador();
})

btnResetar.addEventListener("click", () => {
    contador = 0;
    atualizarContador();
})

/* document.addEventListener("keydown", (e) => {
    if(e.key === "ArrowUp"){
        contador ++;
        atualizarContador();
    }

    if(e.key === "ArrowDown"){
        contador --;
        atualizarContador();
    }
}) */


const c10User = document.getElementById("c10-username");
const c10Erro = document.getElementById("c10-erro");
const c10Re = /^[a-z0-9]{3,12}$/;

function validarNome(){
    const ok = c10Re.test(c10User.value.trim());
    c10Erro.textContent = ok ? "" : "Use de 3 a 12 caracteres, apenas minúsculas e dígitos.";
    c10User.classList.toggle("is-invalid", !ok);   
    c10User.classList.toggle("is-valid", ok);
    return ok;
}      

c10User.addEventListener("blur", validarNome);

c10User.addEventListener("input", () => {
    if(c10User.classList.contains("is-invalid")){
        validarNome();
    }
})

/////////////////////////////////////////////////////////////////////////////////////////

const c11Email = document.getElementById("c11-email");
const c11Error = document.getElementById("c11-erro");

function validarEmail(){
    const valorEmail = c11Email.value.trim();
    const at = valorEmail.indexOf("@");
    const ponto = valorEmail.lastIndexOf(".");

    const ok = at > 0 && ponto > at + 1 && ponto < valorEmail.length -1;

    c11Error.textContent = ok ? "" : "Digite um email válido"
    c11Email.classList.toggle("is-invalid", !ok);
    c11Email.classList.toggle("is-valid", ok);
    return ok;
}


c11Email.addEventListener("blur", validarEmail);


c11Email.addEventListener("input", () => {
  if (c11Email.classList.contains("is-invalid")) {
    validarEmail();
  }
});

////////////////////////////////////////////////////////////////////////////////////////////

const c12Inicio = document.getElementById("c12-inicio");
const c12Final = document.getElementById("c12-fim");
const c12Error = document.getElementById("c12-erro");

function validarData(){
    const inicio = c12Inicio.value;
    const fim = c12Final.value;

    if(!fim || !inicio){
        c12Error.textContent = "Preencha as datas";
        c12Inicio.classList.toggle("is-invalid");
        c12Final.classList.toggle("is-invalid");
        return false;
    }

    const dIni = new Date(inicio);
    const dFim = new Date(fim);

    const ok = dFim.getTime() > dIni.getTime();

    c12Error.textContent = ok ? "" : "Data de fim deve ser maior que a inicial";
    if(ok){
        c12Inicio.classList.toggle("is-valid", ok);
        c12Final.classList.toggle("is-valid", ok);         
    }else{
        c12Inicio.classList.toggle("is-invalid", !ok);
        c12Final.classList.toggle("is-invalid", !ok);  
    }
    return ok;  
}


c12Inicio.addEventListener("blur", validarData);
c12Final.addEventListener("blur", validarData);

////////////////////////////////////////////////////////////////////////////////////

const enviar = document.getElementById("c-form");
const limpar = document.getElementById("c-limpar");

enviar.addEventListener("submit", (e) => {
    const okUser = validarNome();
    const okEmail = validarEmail();
    const okData = validarData();

    if(!(okUser && okEmail && okData)){
        e.preventDefault();
        alert("Preencha os dados que faltam");
    }else{
        alert("Formulário enviado!");
    }
});

limpar.addEventListener("click", () => {
    c10User.value = ""; c10User.classList.remove("is-invalid"); c10User.classList.remove("is-valid"); 
    c10Erro.textContent = "";

    c11Email.value = ""; c11Email.classList.remove("is-invalid"); c11Email.classList.remove("is-valid"); 
    c11Error.textContent = "";

    c12Inicio.value = ""; c12Inicio.classList.remove("is-invalid"); c12Inicio.classList.remove("is-valid")
    c12Final.value = ""; c12Final.classList.remove("is-invalid"); c12Final.classList.remove("is-valid"); c12Error.textContent = "";
});




