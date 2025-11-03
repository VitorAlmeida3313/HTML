// --- FERRAMENTAS AUXILIARES ---

// Atalho para pegar UM elemento pelo ID (como pegar um ingrediente específico)
const $ = (id) => document.getElementById(id);

// Ferramenta para marcar um campo como VÁLIDO (colocar um selo verde)
function marcarValido(campo, divErro) {
    campo.classList.remove('is-invalid'); // Tira o selo vermelho (Bootstrap usa 'is-invalid')
    // campo.classList.add('is-valid'); // Bootstrap tem 'is-valid', mas vamos só remover o inválido
    if (divErro) divErro.textContent = ''; // Apaga a mensagem de erro
}

// Ferramenta para marcar um campo como INVÁLIDO (colocar um selo vermelho e avisar)
function marcarInvalido(campo, divErro, mensagem) {
    campo.classList.add('is-invalid');   // Coloca o selo vermelho (Bootstrap)
    if (divErro) divErro.textContent = mensagem; // Escreve a mensagem de erro
}

// Ferramenta para limpar todas as marcações de erro/sucesso e mensagens
function limparValidacoes(form) {
    form.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
    // form.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid')); // Se usar 'is-valid'
    form.querySelectorAll('.erro-campo').forEach(el => el.textContent = '');
    // Limpar elementos dinâmicos (iniciais, selo, slug, etc.) - Adicionaremos depois
    const ElemParaLimpar = form.querySelectorAll('.feedback-dinamico');
    ElemParaLimpar.forEach(el => el.remove()); 
}

// Ferramenta para verificar se um texto está vazio (ignorando espaços)
function isEmpty(str) {
    return !str || str.trim().length === 0;
}

// Ferramenta para criar/atualizar um elemento de feedback (para iniciais, slug, etc.)
function setFeedback(campoRelacionado, idFeedback, texto) {
    let feedbackEl = $(idFeedback);
    if (!feedbackEl) { // Se o elemento ainda não existe, cria
        feedbackEl = document.createElement('small'); // Cria um <small>
        feedbackEl.id = idFeedback;
        feedbackEl.className = 'text-muted ms-2 feedback-dinamico'; // Estilo Bootstrap + classe nossa
        // Insere DEPOIS do campo relacionado
        campoRelacionado.parentNode.insertBefore(feedbackEl, campoRelacionado.nextSibling);
    }
    feedbackEl.textContent = texto; // Define ou atualiza o texto
}

// Ferramenta para remover um elemento de feedback
function removerFeedback(idFeedback) {
    const feedbackEl = $(idFeedback);
    if (feedbackEl) {
        feedbackEl.remove();
    }
}


// --- FIM DAS FERRAMENTAS ---


// --- REGRA 1: NOME COMPLETO ---

const inputNome = $('nomeCompleto');
const errNome = $('erro-nomeCompleto');

function processarNome() {
    let nome = inputNome.value;

    // Remover espaços duplos usando 'while' 
    while (nome.includes('  ')) {
        nome = nome.replace('  ', ' ');
    }
    nome = nome.trim(); // Remove espaços das pontas

    // Converter para Title Case 
    const nomeTitleCase = nome.toLowerCase().split(' ').map(palavra => 
        palavra.charAt(0).toUpperCase() + palavra.slice(1)
    ).join(' ');

    // Atualiza o campo com o nome formatado (feedback imediato)
    inputNome.value = nomeTitleCase; 

    // Extrair iniciais 
    const palavras = nomeTitleCase.split(' ').filter(p => p.length > 0); // Pega palavras não vazias
    const iniciais = palavras.map(p => p.charAt(0).toUpperCase()).join('');

    // Validação [cite: 29]
    const temNumero = /\d/.test(nomeTitleCase); // Verifica se há algum dígito

    if (palavras.length < 2 || nomeTitleCase.length < 12) { // 
        marcarInvalido(inputNome, errNome, 'Deve ter pelo menos 2 palavras e 12 caracteres.');
        removerFeedback('feedback-iniciais'); // Remove iniciais se inválido [cite: 33]
        return false;
    } else if (temNumero) { // 
        marcarInvalido(inputNome, errNome, 'Nenhuma palavra pode conter números.');
        removerFeedback('feedback-iniciais'); // Remove iniciais [cite: 33]
        return false;
    } else {
        marcarValido(inputNome, errNome);
        setFeedback(inputNome, 'feedback-iniciais', `(${iniciais})`); // Exibe iniciais [cite: 32, 33]
        return true;
    }
}

// Processa o nome enquanto o usuário digita
inputNome.addEventListener('input', processarNome);

// --- REGRA 2: CARGO ---

const inputCargo = $('cargo');
const errCargo = $('erro-cargo');

function processarCargo() {
    const cargo = inputCargo.value.toLowerCase().trim(); // Pega valor, minúsculas, sem espaços ponta
    let nivel = 'N/A'; // Nível padrão [cite: 40]

    // Classificação com switch 
    switch (true) {
        case cargo.includes('junior'): nivel = 'Jr'; break; // [cite: 36]
        case cargo.includes('pleno'): nivel = 'Pl'; break; // [cite: 37]
        case cargo.includes('senior'): nivel = 'Sr'; break; // [cite: 38]
        case cargo.includes('lead'): // [cite: 39]
        case cargo.includes('líder'): nivel = 'Lead'; break; // [cite: 39]
    }

    // Validação "estagiário" 
    // Usamos Regex para ignorar acento/maiúscula: /estagi[aá]rio/i
    if (/estagi[aá]rio/i.test(cargo)) {
        marcarInvalido(inputCargo, errCargo, 'Cargo "estagiário" não é permitido.');
        removerFeedback('feedback-nivel'); // Remove selo se inválido
        return false;
    } else {
        marcarValido(inputCargo, errCargo);
        setFeedback(inputCargo, 'feedback-nivel', `[Nível: ${nivel}]`); // Exibe selo 
        return true;
    }
}

inputCargo.addEventListener('input', processarCargo);

// --- REGRA 3: EMPRESA ---

const inputEmpresa = $('empresa');
const errEmpresa = $('erro-empresa');

// Ferramenta para remover acentos (simplificada)
function removerAcentos(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function processarEmpresa() {
    const empresa = inputEmpresa.value; // Pegamos com espaços no final para checar
    const empresaTrim = empresa.trim(); // Versão sem espaços nas pontas

    const palavrasChave = ["games", "studio", "studios", "softworks", "interactive"]; // 
    const temPalavraChave = palavrasChave.some(palavra => empresaTrim.toLowerCase().includes(palavra)); // Verifica se inclui alguma
    const terminaComEspaco = empresa !== empresaTrim && empresa.endsWith(' '); // 

    // Geração do Slug 
    const slug = removerAcentos(empresaTrim)        // Tira acentos
                 .toLowerCase()                     // Tudo minúsculo
                 .replace(/\s+/g, '-')              // Espaços viram hífens
                 .replace(/[^a-z0-9-]/g, '');       // Remove caracteres inválidos

    // Validação
    if (!temPalavraChave) {
        marcarInvalido(inputEmpresa, errEmpresa, 'Nome da empresa deve incluir uma palavra-chave (games, studio, etc.).');
        removerFeedback('feedback-slug');
        return false;
    } else if (terminaComEspaco) {
        marcarInvalido(inputEmpresa, errEmpresa, 'Nome da empresa não pode terminar com espaço.');
        removerFeedback('feedback-slug');
        return false;
    } else {
        marcarValido(inputEmpresa, errEmpresa);
        setFeedback(inputEmpresa, 'feedback-slug', `(Slug: ${slug})`); // Exibe slug [cite: 46]
        return true;
    }
}

inputEmpresa.addEventListener('input', processarEmpresa);

// --- REGRA 4: DATAS ---

const inputInicio = $('dataInicio');
const errInicio = $('erro-dataInicio');
const inputFim = $('dataFim');
const errFim = $('erro-dataFim');

// --- Funções OBRIGATÓRIAS para Datas --- [cite: 59]

// Verifica se uma data (objeto Date) é dia útil (Seg-Sex) [cite: 60]
function isDiaUtil(date) {
    if (!date || !(date instanceof Date)) return false; // Segurança
    const diaSemana = date.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
    return diaSemana >= 1 && diaSemana <= 5;
}

// Calcula o número de dias ENTRE duas datas (inclusive) [cite: 61]
// Retorna -1 se as datas forem inválidas
function diasEntre(inicio, fim) {
    if (!inicio || !fim || !(inicio instanceof Date) || !(fim instanceof Date) || fim < inicio) {
        return -1; // Retorna -1 para indicar erro ou ordem errada
    }
    // Diferença em milissegundos / milissegundos por dia + 1 (para incluir o último dia)
    const diffTime = Math.abs(fim - inicio);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // +1 torna inclusivo
    return diffDays;
}


// Conta quantos finais de semana COMPLETOS (Sáb+Dom) existem no intervalo [cite: 62]
function contarFinsDeSemana(inicio, fim) {
    if (!inicio || !fim || !(inicio instanceof Date) || !(fim instanceof Date) || fim < inicio) {
        return 0; // Retorna 0 se inválido
    }
    
    let contadorFDS = 0;
    // IMPORTANTE: Criamos uma cópia da data de início para não modificar a original
    let dataCorrente = new Date(inicio); 

    // Usamos um 'for' implícito com 'while' para percorrer os dias [cite: 63]
    while (dataCorrente <= fim) {
        const diaSemana = dataCorrente.getDay();
        if (diaSemana === 6) { // Se for Sábado
            // Verifica se o Domingo seguinte TAMBÉM está dentro do intervalo
            let proximoDomingo = new Date(dataCorrente);
            proximoDomingo.setDate(proximoDomingo.getDate() + 1);
            if (proximoDomingo <= fim) {
                contadorFDS++; // Contamos como um FDS completo
            }
        }
        // Avança para o próximo dia
        dataCorrente.setDate(dataCorrente.getDate() + 1); 
    }
    return contadorFDS;
}

// --- Função de Validação do Período ---
function validarPeriodo() {
    // Pegamos as datas e convertemos para objetos Date
    // new Date(string) pode precisar de ajuste de fuso horário, adicionamos 'T00:00:00'
    const dataInicio = inputInicio.value ? new Date(inputInicio.value + 'T00:00:00') : null;
    const dataFim = inputFim.value ? new Date(inputFim.value + 'T00:00:00') : null;
    
    let inicioValido = false;
    let fimValido = false;
    let intervaloValido = false;

    // Validar Data de Início
    if (!dataInicio) {
        marcarInvalido(inputInicio, errInicio, 'Data de início é obrigatória.');
    } else if (!isDiaUtil(dataInicio)) { // 
        marcarInvalido(inputInicio, errInicio, 'Início precisa ser dia útil.'); // [cite: 57]
    } else {
        marcarValido(inputInicio, errInicio);
        inicioValido = true;
    }

    // Validar Data de Fim E Intervalo (só se o início for válido)
    if (!dataFim) {
        marcarInvalido(inputFim, errFim, 'Data de fim é obrigatória.');
    } else if (inicioValido) { // Só valida o fim se o início estiver OK
        const duracao = diasEntre(dataInicio, dataFim);
        const numFDS = contarFinsDeSemana(dataInicio, dataFim);

        if (!isDiaUtil(dataFim)) { // 
            marcarInvalido(inputFim, errFim, 'Fim precisa ser dia útil.'); // [cite: 58]
        } else if (duracao < 10 || duracao > 30 || numFDS < 2) { // [cite: 53, 54]
             marcarInvalido(inputFim, errFim, 'Intervalo deve ter 10–30 dias e incluir 2 finais de semana.'); // [cite: 58]
        } else {
            marcarValido(inputFim, errFim);
            fimValido = true;
            intervaloValido = true;
        }
    } else {
         // Se o início já era inválido, marcamos o fim como neutro por enquanto
         inputFim.classList.remove('is-invalid');
         errFim.textContent = '';
    }

    return inicioValido && fimValido && intervaloValido; // Retorna true só se TUDO estiver ok
}

// Valida as datas quando elas mudam
inputInicio.addEventListener('change', validarPeriodo);
inputFim.addEventListener('change', validarPeriodo);

// --- REGRA 5: E-MAIL E TELEFONE (VISUAL) ---

const inputEmail = $('email');
const inputTelefone = $('telefone');

inputEmail.addEventListener('input', () => {
    const email = inputEmail.value;
    const posArroba = email.indexOf('@');
    removerFeedback('feedback-dominio'); // Limpa o feedback anterior

    if (posArroba > -1 && posArroba < email.length - 1) { // Se tem @ e algo depois
        const dominio = email.substring(posArroba + 1); // Pega o texto depois do @
        if (dominio) { // Se o domínio não for vazio
            setFeedback(inputEmail, 'feedback-dominio', `(Domínio: ${dominio})`); // 
        }
    }
});

inputTelefone.addEventListener('input', () => {
    const telefone = inputTelefone.value;
    const digitos = telefone.replace(/\D/g, ''); // Remove tudo que não for dígito
    setFeedback(inputTelefone, 'feedback-digitos', `(${digitos.length} dígitos)`); // 
});

// --- REGRA 6: ACEITE (AVISO OPCIONAL) ---
// A lógica será colocada dentro do 'submit' handler abaixo.
const checkAceite = $('aceite');
const errAceite = $('erro-aceite'); // Embora não seja obrigatório, limpamos o erro se houver

// --- REGRA 7: PREVIEW E ENVIO ---

const form = $('formAssinatura');
const btnEnviar = $('btnEnviar');
const btnLimpar = $('btnLimpar'); // Botão de limpar (bônus)

// Cria a área de preview dinamicamente
let previewDiv = $('preview'); // Tenta pegar, caso já exista
if (!previewDiv) {
    previewDiv = document.createElement('div');
    previewDiv.id = 'preview';
    previewDiv.className = 'border rounded-3 p-3 my-3 feedback-dinamico'; // Estilo Bootstrap
    // Insere antes dos botões
    btnEnviar.parentNode.parentNode.insertBefore(previewDiv, btnEnviar.parentNode);
}

// Função para atualizar o preview
function atualizarPreview() {
    const nomeVal = inputNome.value;
    const cargoVal = inputCargo.value;
    const empresaVal = inputEmpresa.value;
    const inicioVal = inputInicio.value;
    const fimVal = inputFim.value;

    const iniciais = nomeVal.split(' ').filter(p => p.length > 0).map(p => p.charAt(0).toUpperCase()).join(''); // [cite: 75]
    
    let nivel = 'N/A'; // [cite: 76]
    const cargoLower = cargoVal.toLowerCase();
    if (/estagi[aá]rio/i.test(cargoLower)) { nivel = 'Inválido'; }
    else if (cargoLower.includes('junior')) { nivel = 'Jr'; }
    else if (cargoLower.includes('pleno')) { nivel = 'Pl'; }
    else if (cargoLower.includes('senior')) { nivel = 'Sr'; }
    else if (cargoLower.includes('lead') || cargoLower.includes('líder')) { nivel = 'Lead'; }

    const slug = removerAcentos(empresaVal.trim()).toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''); // [cite: 77]

    let duracaoStr = 'Datas inválidas'; // [cite: 78]
    const dataInicio = inicioVal ? new Date(inicioVal + 'T00:00:00') : null;
    const dataFim = fimVal ? new Date(fimVal + 'T00:00:00') : null;
    if (dataInicio && dataFim && dataFim >= dataInicio) {
         const duracaoDias = diasEntre(dataInicio, dataFim);
         const numFDS = contarFinsDeSemana(dataInicio, dataFim);
         duracaoStr = `${duracaoDias} dias, ${numFDS} FDS`;
    }

    // Monta o HTML do preview 
    previewDiv.innerHTML = `
        <h5>Preview:</h5>
        <p class="mb-1"><strong>Iniciais:</strong> ${iniciais || 'N/A'} </p>
        <p class="mb-1"><strong>Nível Cargo:</strong> ${nivel} </p>
        <p class="mb-1"><strong>Slug Empresa:</strong> ${slug || 'N/A'} </p>
        <p class="mb-0"><strong>Período:</strong> ${duracaoStr} </p>
    `;
}

// Atualiza o preview sempre que um campo relevante mudar
inputNome.addEventListener('input', atualizarPreview);
inputCargo.addEventListener('input', atualizarPreview);
inputEmpresa.addEventListener('input', atualizarPreview);
inputInicio.addEventListener('change', atualizarPreview);
inputFim.addEventListener('change', atualizarPreview);

// --- Handler Principal de SUBMIT ---
form.addEventListener('submit', (event) => {
    event.preventDefault(); // SEMPRE impede o envio padrão 
    limparValidacoes(form); // Limpa erros antigos

    // Validar APENAS os campos obrigatórios deste simulado 
    const nomeOK = processarNome();
    const cargoOK = processarCargo();
    const empresaOK = processarEmpresa();
    const periodoOK = validarPeriodo();

    // Checar o aceite (mas não impede o envio) 
    if (!checkAceite.checked) {
        alert("Recomendamos assinar para receber novidades!");
        // Limpa possível erro anterior do aceite, já que não é bloqueante
        marcarValido(checkAceite, errAceite); 
    } else {
         marcarValido(checkAceite, errAceite); 
    }

    // Se TODAS as validações OBRIGATÓRIAS passaram...
    if (nomeOK && cargoOK && empresaOK && periodoOK) {
        // Monta um resumo para o alerta de sucesso 
        const resumo = `
            Cadastro OK!
            Nome: ${inputNome.value}
            Cargo: ${inputCargo.value}
            Empresa: ${inputEmpresa.value}
            Período: ${inputInicio.value} a ${inputFim.value}
        `;
        alert(resumo);
        // Aqui poderíamos enviar os dados via AJAX, mas o exercício não pede.
        // form.submit(); // Não vamos enviar de verdade
    } else {
        // Se houve erros, as mensagens já foram exibidas pelas funções 
        // Focar no primeiro erro para ajudar o usuário
        const primeiroErro = form.querySelector('.is-invalid');
        if (primeiroErro) {
            primeiroErro.focus();
        }
    }
});

// --- Bônus: Botão Limpar ---
btnLimpar.addEventListener('click', () => {
    form.reset(); // Reseta os valores do formulário
    limparValidacoes(form); // Limpa as mensagens e estilos
    atualizarPreview(); // Limpa o preview
});

// Inicializa o preview ao carregar a página
atualizarPreview();











