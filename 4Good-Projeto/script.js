function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}


document.getElementById('investimento').addEventListener('input', function() {

    calcularROI();
});

document.getElementById('economia').addEventListener('input', function() {
  
    calcularROI();
});

document.getElementById('consumo').addEventListener('input', function() {
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