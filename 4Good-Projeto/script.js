
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}


document.getElementById('investimento').addEventListener('input', function() {
    const valor = parseFloat(this.value);
    document.getElementById('investimento-display').textContent = 'R$ ' + valor.toLocaleString('pt-BR');
    calcularROI();
});

document.getElementById('economia').addEventListener('input', function() {
    const valor = parseFloat(this.value);
    document.getElementById('economia-display').textContent = 'R$ ' + valor.toLocaleString('pt-BR');
    calcularROI();
});

document.getElementById('consumo').addEventListener('input', function() {
    const valor = parseFloat(this.value);
    document.getElementById('consumo-display').textContent = valor.toLocaleString('pt-BR') + ' kWh';
    calcularROI();
});


function calcularROI() {
    const investimento = parseFloat(document.getElementById('investimento').value);
    const economia = parseFloat(document.getElementById('economia').value);
    const consumo = parseFloat(document.getElementById('consumo').value);

    
    const mesesROI = Math.ceil(investimento / economia);
    document.getElementById('meses-roi').textContent = mesesROI;

    
    const economiaAnual = economia * 12;
    document.getElementById('economia-anual').textContent = 'R$ ' + economiaAnual.toLocaleString('pt-BR');

    
    const reducaoCO2 = Math.round((consumo * 0.5) / 30); 
    document.getElementById('reducao-co2').textContent = reducaoCO2.toLocaleString('pt-BR') + ' kg';

   
    atualizarGrafico(mesesROI);
}


function atualizarGrafico(mesesROI) {
    const barras = document.querySelectorAll('.barra');
    barras.forEach((barra, index) => {
        const mes = index + 1;
        if (mes <= mesesROI) {
            barra.style.background = 'linear-gradient(180deg, #2d9d78 0%, #4a9fb5 100%)';
        } else {
            barra.style.background = '#e0e0e0';
        }
    });
}


function enviarFormulario(event) {
    event.preventDefault();
    
    
    const btn = event.target.querySelector('button[type="submit"]');
    const textOriginal = btn.textContent;
    
    btn.textContent = 'Mensagem Enviada! ✓';
    btn.style.backgroundColor = '#2d9d78';
    
   
    event.target.reset();
    
    
    setTimeout(() => {
        btn.textContent = textOriginal;
        btn.style.backgroundColor = '';
    }, 3000);
}


document.addEventListener('DOMContentLoaded', function() {
    calcularROI();
});


document.querySelectorAll('.barra').forEach(barra => {
    barra.addEventListener('mouseenter', function() {
        const mes = Array.from(document.querySelectorAll('.barra')).indexOf(this) + 1;
        console.log('Mês ' + mes);
    });
});