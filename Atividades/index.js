/*Exercício 1


1-Crie uma variável nome e exiba uma mensagem de boas-vindas com alert("Bem-vindo(a), " + nome + "!").

const nome = prompt("Qual o seu nome?")

alert("Bem-Vindo(a) " + nome + "!");*/
//=========================================================================================


/*2-Peça dois números com prompt e exiba a soma no console.

//let numero1 = Number(prompt("Digite um número"));

//let numero2 = Number(prompt("Digite um segundo número"));

//function soma(n1, n2){
    //return  n1 + n2;
//}

console.log(soma());*/

//=========================================================================================

/*3-Compare dois valores e mostre qual é o maior.

let numero1 = Number(prompt("Digite um número"));

let numero2 = Number(prompt("Digite um segundo número"));

if(numero1 > numero2){
    console.log("O número mais alto é: " + numero1);
}else{
    console.log("O número mais alto é: " + numero2);
}*/

//=========================================================================================

/*4-Leia um número e mostre se ele é positivo, negativo ou zero.

let numero = Number(prompt("Digite um número"));

if(numero < 0){
    console.log("O número" + numero + " é negativo");
}else if(numero == 0){
    console.log("O número é zero");
}else{
    console.log("O número " + numero + " é positivo");
}*/

//=========================================================================================

/*5-Crie uma variável idade. Se for menor que 18, mostre "Menor de idade". Caso contrário, mostre "Maior de idade".

let idade = Number(prompt("Digite sua idade"));

if(idade < 18){
    console.log("Você é menor de idade");
}else{
    console.log("Você é maior de idade");
}*/

//=========================================================================================

/*6-Peça um número e verifique: se for par e maior que 10, exiba "Número par maior que 10"; caso
contrário, exiba "Condição não atendida".

let numero = Number(prompt("Digite um número"));

if(numero %2 == 0 && numero > 10){
    console.log("Número par maior que 10");
}else{
    console.log("Condição não atendida");
}*/

//=========================================================================================

/*7-Peça três notas, calcule a média e mostre: "Aprovado" se média maior ou igual a 7,
 "Recuperação" se entre 5 e 6.9, ou "Reprovado" se menor que 5.  

let nota1, nota2, nota3;

    while (true) {
    nota1 = Number(prompt("Digite a primeira nota (entre 0 e 10)"));
    if (isNaN(nota1) || nota1 < 0 || nota1 > 10) { 
        alert("Valor inválido! Digite um número entre 0 e 10.");
    } else {    
        break;
    }
}

while (true) {
    nota2 = Number(prompt("Digite a segunda nota (entre 0 e 10)"));
    if (isNaN(nota2) || nota2 < 0 || nota2 > 10) {
        alert("Valor inválido! Digite um número entre 0 e 10.");
    } else {
        break;
    }
}

while (true) {
    nota3 = Number(prompt("Digite a terceira nota (entre 0 e 10)"));
    if (isNaN(nota3) || nota3 < 0 || nota3 > 10) {
        alert("Valor inválido! Digite um número entre 0 e 10.");
    } else {
        break;
    }
}    

function media(n1, n2, n3){
    return (n1 + n2 + n3) /3;
}

let resultado = media(nota1, nota2, nota3);

if(resultado >= 7){
    console.log("Aprovado");
}else if(resultado >=5){
    console.log("Recuperação");
}else{
    console.log("Reprovado");
}*/

/*8-Crie uma variável dia com valor numérico de 1 a 7. Use switch para mostrar o nome do dia da
semana (1 - Domingo, 2 - Segunda, etc.).

let DiadaSemana;

while(true){
    DiadaSemana = Number(prompt("Digite um número de 1 a 7 para exibir que dia da semana é"));
    
    if(!isNaN(DiadaSemana) && DiadaSemana >=1 && DiadaSemana <=7){
        break;
    }else{
        alert("Digite um número de 1 a 7")
    }
}

    switch(DiadaSemana){
    case 1:
        console.log("o número " + DiadaSemana + " em dia de semana é Domingo")
        break;
    case 2:
        console.log("o número " + DiadaSemana + " em dia de semana é Segunda")
        break;
    case 3:
        console.log("o número " + DiadaSemana + " em dia de semana é Terça")
        break;
    case 4:
        console.log("o número " + DiadaSemana + " em dia de semana é Quarta")
        break;
    case 5:
        console.log("o número " + DiadaSemana + " em dia de semana é Quinta")
        break;
    case 6:
        console.log("o número " + DiadaSemana + " em dia de semana é Sexta")
        break;
    case 7:
        console.log("o número " + DiadaSemana + " em dia de semana é Sábado")
        break;
    
    }*/

/*9-Peça dois números e uma operação (+, -, *, /). Use switch para calcular conforme a operação
escolhida.

let resultado;

let operacao;

let continuar = 1;

while(continuar === 1){

let numero1 = Number(prompt("Digite um número"));

let numero2 = Number(prompt("Digite um outro número"));

while(true){
    operacao = Number(prompt("Selecione uma operação:\n1- Subtração(-)\n2- Soma(+)\n3- Multiplicação(x)\n4- Divisão(/)"));

    if(operacao < 1 || operacao > 4){
        alert("A escolha é entre 1 e 4");
    }else{
        break;
    }
}

    switch(operacao){
    case 1:
        resultado = numero1 - numero2;
        alert(numero1 + " - " + numero2 + " é: " + resultado)
    break; 

    case 2:
        resultado = numero1 + numero2;
        alert(numero1 + " + " + numero2 + " é: " + resultado)
    break;

    case 3:
        resultado = numero1 * numero2;
        alert(numero1 + " X " + numero2 + " é: " + resultado)
    break;

    case 4:
        resultado = numero1 / numero2;

        if(numero1 === 0 || numero2 === 0){
            alert("Erro, não é possivel dividir por zero");
            break;
        }else{
            alert(numero1 + " / " + numero2 + " é: " + resultado)
        }
    break;

    default:
        alert("Opção inválida, tente novamente")
    }

    let resposta;
    
    while(true){
        resposta = Number(prompt("Deseja fazer uma nova conta?\n1- Sim\n2- Não"));
        if(resposta === 1){
            break;
        }else if(resposta === 2){
            alert("Encerrando Calculadora")
            break;
        }
        alert("Opção inválida, digite 1 ou 2")
        
    }

    continuar = resposta;
    
}*/

/*10- Armazene um usuário e senha corretos em constantes. Peça ao usuário (com prompt) e verifique se
coincidem. Exiba "Login bem-sucedido" ou "Acesso negado".

const email = "aa.vitoralmeida@gmail.com";

const senha = "33133157";

while(true){
    const emailDigitado = prompt("Digite seu email:");

    if(emailDigitado === email){
        break;
    }
    alert("Email incorreto, tente novamente");
}

while(true){
    const senhaDigitada = prompt("Digite sua senha:");

    if(senhaDigitada === senha){
        break;
    }

    alert("Senha Incorreta");
}

alert("Login bem-sucedido")*/

/*11- Peça uma temperatura em graus Celsius. Se for menor que 10, mostre "Frio". Se estiver entre 10 e 25,
mostre "Agradável". Se for maior que 25, mostre "Quente".

let temperatura = Number(prompt("Digite a temperatura em graus Celsius"));

if(temperatura < 10){
    alert("O clima está frio");
}else if(temperatura <=25){
    alert("O clima está agradável");
}else{
    alert("O clima está quente");
}*/


/*12- Peça uma letra de A a F e use switch para mostrar o conceito: A - Excelente, B - Bom, C - Regular, D - Ruim, F -
Reprovado.

let letraCorreta = false;

while(!letraCorreta){
    let letraDigitada = prompt("Seleciona uma letra (A, B, C, D, F)");

    if(letraDigitada === null){
        alert("Operação encerrada");
        break;
    }


    let letra = letraDigitada.toUpperCase(); 


    switch(letra){
        case "A": 
            alert("Excelente");
            letraCorreta = true;
        break;

        case "B":
            alert("Bom");
            letraCorreta = true;
        break;
        
        case "C":
            alert("Regular");
            letraCorreta = true;
        break;

        case "D":
            alert("Ruim");
            letraCorreta = true;
        break;

        case "F":
            alert("Reprovado");
            letraCorreta = true;
        break;

        default:
            alert("Opção Inválida, tente novamente!");

    }


}*/

/*13- Mostre os números de 1 a 10 no console usando um laço for.

    for(let i = 0; i < 10; i++){
        console.log(i + 1);
    }*/


    
/*14- Mostre os números de 10 a 1 usando um laço while.

    for(let i = 10; i > 0; i--){
        console.log(i)
    }*/


/*15- Peça 5 números e exiba a soma total ao final usando um laço for.

    let numeros = [0, 0, 0, 0, 0];
    for(let i = 0; i < 5; i++){
        numeros[i] = Number(prompt("Digite o " + (i + 1) + "º Número"));
    }

    let somaNumeros = soma(numeros[0], numeros[1], numeros[2], numeros[3], numeros[4]);
    console.log("A soma de " +  numeros[0] + " + " + numeros[1] + " + " + numeros[2] + " + " + numeros[3] + " + " + numeros[4] +
        " é: " + somaNumeros);

    function soma(a, b, c, d, e){
        return a + b + c + d + e;
    }*/

/*16- Mostre todos os números pares de 1 a 50 usando um for.

    for(i = 0; i < 50; i++){
        if(i %2 === 0){
            console.log(i);
        }
    }*/


/*17- Peça um número e mostre sua tabuada completa (de 1 a 10) com for.

    let numero = Number(prompt("Digite um número para a tabuada"));

    let tabuada;
    console.log("A tabuada de " + numero + " é:\n");
    for(i = 0; i <= 10; i++){
        tabuada = numero * i;
        console.log(numero + " X " + i + " = " + tabuada);
    }*/

/*18- Crie um array com 4 nomes e mostre cada nome com console.log().

    const nomes = ["Vitor", "Ana", "Roberto", "Paulo"]

    for(let i = 0; i < nomes.length; i++){
        console.log(nomes[i]);
    }*/


/*19- Crie um array com 5 notas e calcule a média usando um laço for.

let notas = [0.0, 0.0, 0.0, 0.0, 0.0];

for(i = 0; i < 5; i++){
    while(true){
        notas[i] = Number(prompt("Digite a " + (i+1) + "º Nota"));  
        if(notas[i] < 0 || notas[i] > 10){
                alert("As notas são entre 0 e 10, tente novamente");
                
        }else{
            break;
        }
    }
        
}

let media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) / 5;

alert("A média é: " + media);*/


/*20- Crie um array com 5 números e descubra qual é o maior.

    const array = [10, 8, 100, 1, 2]

    let maior = array[0];

    for(i = 1; i <= array.length; i++){
        if(array[i] > maior){
            maior = array[i];
        }
    }

    console.log(maior);*/

/*21- Crie um vetor com 10 números. Conte quantos são pares e quantos são ímpares.

    const listaNumeros = []

    let armazenar;
    let numero;
    let contadorPar = 0;
    let contadorImpar = 0;

    
    while(true){
        armazenar = Number(prompt("Quantos números deseja armazenar?"));
        if(!isNaN(armazenar) && armazenar > 0){
            break;
        }
        alert("Digite um número que seja maior que 0");
    }

    for(let i = 0; i < armazenar; i++){
        while(true){
            numero = Number(prompt("Digite o " + (i+1) + "º número"));
            if(!isNaN(numero)){
                break;
            }
            alert("Texte detectado, digite um número");
        }
        
        listaNumeros.push(numero);

        if(listaNumeros %2 === 0){
            contadorPar ++
        }else{
            contadorImpar ++
        }
    }

    console.log("Existem " + contadorPar + " número(s) par(es) e " + contadorImpar + " número(s) ímpar(es) neste Vetor")*/

//22- Crie um array com nomes e peça um nome via prompt. Verifique se ele existe no array e
// mostre uma mensagem apropriada.

/* const nomes = ["Vitor", "João", "Pedro"];

while(true){
    let consulta = prompt("Digite um nome");

    if(consulta === null){
        alert("Cancelando")
        break;
    }

    let encontrado = false;

    for(let i = 0; i < nomes.length; i++){
        if(consulta.toUpperCase() === nomes[i].toUpperCase()){
            encontrado = true;
            break;
        }
    }

    if(encontrado){
        alert("Nome encontrado: " + consulta);
        alert("Encerrando");
        break;    

    }else{
        alert("Nome não encontrado");
    }
} */


/*23- Crie um array e mostre seus elementos na ordem inversa.

    let elementos = [1, 2, 3, 4, 5, 6, 7, 10];

    for(let i = elementos.length -1; i >= 0; i--){
        console.log(elementos[i]);
    } */

/*24- Crie um array de notas e mostre, uma a uma, se o aluno está Aprovado (nota maior ou
igual a 7) ou Reprovado (nota menor que 7).

   const notas = [5.5, 10, 7.2, 1.2];
   
    for(let i = 0; i < notas.length; i++){
        if(notas[i] >= 7){
            console.log(`${notas[i]}: Aprovado`);
        }else{
            console.log(`${notas[i]}: Reprovado`);
        }
    } */

/*25- Crie uma função que receba dois números e retorne a soma.

let refazer = false;

function soma(a, b){
    return a + b;
    }

while(!refazer){

    let numero1;
    let numero2;

    while(true){
        const entrada1 = prompt("Digite o primeiro número");

        if(entrada1 === null){
        alert("Encerrando");
        refazer = true;
        break;
    }
    
        numero1 = Number(entrada1)

        if(!isNaN(numero1)){
            break;
        }
    
        alert("Apenas números são válidos");
    }

    if(refazer){
        break;
    }
        
    while(true){
        const entrada2 = prompt("Digite o Segundo número");

        if(entrada2 === null){
        alert("Encerrando");
        refazer = true;
        break;
    }
        numero2 = Number(entrada2)

        if(!isNaN(numero2)){
            break;
        }
    
        alert("Apenas números são válidos");
    }

    let resultado = soma(numero1, numero2);

    alert(`A soma de ${numero1} + ${numero2} é: ${resultado}`);

    let tentarDeNovo;
    while(true){
        tentarDeNovo = Number(prompt("Deseja refazer?\n1- Sim\n2- Não")); 
        if(tentarDeNovo === 1 || tentarDeNovo === 2){
            break;
        }
        alert("Digite 1 ou 2");
    }
        
    if(tentarDeNovo === 2){
        alert("Encerrando");
        refazer = true;
        break;
    }
        
} */


/*26- Crie uma função que receba um número e retorne "par" ou "ímpar".

    function parImpar(a){
        if(a %2 === 0){
            alert(`O número ${a} é par`);
        }else{
            alert(`O número ${a} é ímpar`);
        }
    }
    
    let recomecar = false;

    while(!recomecar){
        let numeroArmazenado;
        while(true){
            let numeroDigitado = prompt("Digite um número para a validação");

            if(numeroDigitado === null){
                alert("Encerrando o programa");
                recomecar = true;
                break;
            }

            numeroArmazenado = Number(numeroDigitado);

            if(!isNaN(numeroArmazenado)){
                break;
            }
        }

        if(recomecar){
            break;
        }

        parImpar(numeroArmazenado);

        while(true){
            let resposta = Number(prompt("Você deseja testar outro número?\n1- Sim\n2- Não"));

        if(!isNaN(resposta)){
            if(resposta === 2){
                alert("Encerrando");
                recomecar = true;
                break;
            }else if(resposta === 1){
                break;
            }

            alert("Digite um número entre 1 e 2");
        }

        if(recomecar){
            break;
        }
    }
        
} */
    

/*27- Crie uma função que receba três notas e retorne a média.

function media(a, b, c){
    return (a + b + c) / 3;
}

let recomecar = false;
    while(!recomecar){
        const notas = [];
            for(let i = 0; i < 3; i++){
                while(true){
                    let notaDigitada = prompt(`Digite a ${i + 1}º nota`);

                    if(notaDigitada === null){
                    recomecar = true;
                    break;
                    }

                    let nota = Number(notaDigitada);

                    if(!isNaN(nota) && nota >= 0 && nota <= 10){
                        notas.push(nota);
                        break;
                    }
                    alert("Digite uma nota entre 1 e 10");
                }

                if(recomecar){
                    break;
                }
            }

            if(recomecar){
                alert("Encerrando")
                break;
            }

        const resultadoMedia = media(notas[0], notas[1], notas[2]);
        alert(`A média final é de ${resultadoMedia.toFixed(1)}`);

        while(true){
            let resposta = prompt("Deseja fazer uma nova média?\n1- Sim\n2- Não");
                if(resposta === null){
                    alert("Encerrando");
                    recomecar = true;
                    break;
                }

            let resposta_ = Number(resposta);
            
            if(resposta_ > 0 && resposta_ < 3){
                if(resposta_ === 1){
                    break;
                }else{
                    recomecar = true;
                    alert("Encerrando")
                    break;
                }
            }
            alert("Digite 1 ou 2");
        }

    } */


        
/*28- Crie uma função que receba dois números e retorne o maior.

function maiorMenor(a, b){
    if(a > b){
        alert(`O número ${a} é maior que o número ${b}`);
    }else{
        alert(`O número ${b} é maior que o número ${a}`);
    }
}
    

let recomecar = false;

while(!recomecar){
    const numeros = [];
        for(let i = 0; i < 2; i++){
            while(true){
            let resposta = prompt("Digite um número");

            if(resposta === null){
                alert("Encerrando");
                recomecar = true;
                break;
            }

            let numero = Number(resposta);

            if(!isNaN(numero)){
                numeros.push(numero);
                break;
            }  
            alert("Digite um número válido");
        }
    }

    const resultado = maiorMenor(numeros[0], numeros[1]);

    alert(resultado);

    while(true){
        let resposta = prompt("Deseja tentar de novo?\n1- Sim\n2- Não");

        if(resposta === null){
            alert("Encerrando");
            recomecar = true;
            break;
        }

        let resposta_ = Number(resposta);

        if(!isNaN(resposta_) && resposta_ > 0 && resposta_ < 3){
            if(resposta_ === 2){
                alert("Encerrando");
                recomecar = true;
                break;
            }else{
                break;
            }
        }
        alert("Digite 1 ou 2");
    }
} */


/*29- Crie uma função que receba dois números e uma operação (+, -, *, /) e retorne o
// resultado.

function calculadora(a, b, c){
    let resultado;
    switch(a){
        case 1:
            resultado = b + c;
            alert(`O resultado de ${b} + ${c} é: ${resultado}`);
            break;
        case 2:
            resultado = b - c;
            alert(`O resultado de ${b} - ${c} é: ${resultado}`);
            break;
        case 3:
            resultado = b * c;
            alert(`O resultado de ${b} X ${c} é: ${resultado}`);
            break;
        case 4:
            resultado = b / c;
            if(c === 0){
                alert("Erro, não é possivel fazer divisão com 0")
                break;
            }
            alert(`O resultado de ${b} / ${c} é: ${resultado}`);
            break;
    }
}

let recomecar = false;

while(!recomecar){
    const valores = [];
    for(let i = 0; i < 2; i++){
        while(true){
            let resposta = prompt("Digite um número");

            if(resposta === null){
                alert("Encerrando");
                recomecar = true;
                break;
            }

            numero = Number(resposta);

            if(!isNaN(numero)){
                valores.push(numero);
                break;
            }
            alert("Apenas números válidos")
        }

        if(recomecar){
            break;
        }
    }

    if(recomecar){
        break;
    }

    let conta;
    let recomecarConta = false;
    while(!recomecarConta){
        let contaDigitada = prompt("Escolha uma conta\n1- soma(+)\n2- Subtração(-)\n3- Multiplicação(X)\n4- Divisão(/)");

        if(contaDigitada === null){
            alert("Encerrando");
            recomecar = true;
            break;
        }
        
        conta = Number(contaDigitada);
        
        if(!isNaN(conta)){
            if(conta > 0 && conta < 5){
                break;
            }
        }
        alert("Digite um valor correto(1 a 4)");
    }

    if(recomecar){
        break;
    }

    calculadora(conta, valores[0], valores[1]);

    while(true){
        let resultadoDigitado = prompt("Deseja fazer uma nova conta?\n1- Sim\n2- Não");

        if(resultadoDigitado === null){
            alert("Encerrando");
            recomecar = true;
            break;
        }

        let resultado_ = Number(resultadoDigitado);

        if(!isNaN(resultado_) && resultado_ > 0 && resultado_ < 3){
            if(resultado_ === 2){
                alert("Encerrando");
                recomecar = true;
                break;
            }else{
                break;
            }
        }
        alert("Digite um valor válido(1 ou 2)");
    }
    
} */



/*30- Crie uma função que receba uma idade e retorne se é "menor", "adulto" (18 a 59) ou "idoso" (60 ou mais).

function idadeRetorno(a){
    if(a < 18){
        alert(`Com ${a} anos você é: Menor de idade`);
    }else if(a < 60){
        alert(`Com ${a} anos você é: Adulto`);
    }else{
        alert(`Com ${a} anos você é: Idoso`);
    }
}

let recomecar = false;

while(!recomecar){
    let idade;
    while(true){
        let idadeDigitada = prompt("Digite uma idade");

        if(idadeDigitada === null){
            alert("Encerrando");
            recomecar = true;
            break;
        }

        idade = Number(idadeDigitada);

        if(!isNaN(idade)){
            break;
        }
    }

    if(recomecar){
        break;
    }

    idadeRetorno(idade);

    while(true){
        let respostaDigitada = prompt("Deseja testar um outra idade?\n1- Sim\n2- Não")

        if(respostaDigitada === null){
            alert("Encerrando");
            recomecar = true;
            break;
        }

        resposta = Number(respostaDigitada);

        if(!isNaN(resposta) && resposta > 0 && resposta < 3){
            if(resposta === 2){
                alert("Encerrando");
                recomecar = true;
                break;
            }else{
                break;
            }
        }
        alert("Digite um número válido(1 ou 2)");
    }
} */

    

/*31- Crie uma função que receba um número n e exiba no console todos os números de n até 0.

function decrescente(a){
    let sequencia = "";
    for(let i = a; i >= 0; i--){
        sequencia += i + ", ";
    }
    alert(`A sequência de ${a} até 0 é:\n${sequencia}`)
}

let recomecar = false;

while(!recomecar){
    let numero;
    while(true){
        let numeroDigitado = prompt("Digite um número para iniciar a sequência decrecente");

        if(numeroDigitado === null){
            alert("Encerrando");
            recomecar = true;
            break;
        }

        numero = Number(numeroDigitado)

        if(!isNaN(numero)){
            if(numero === 0 || numero === ""){
                alert("Digite um número válido")
            }else{
                break;
            }   
        }
        
    }

    if(recomecar){
        break;
    }

    decrescente(numero);

    
    while(true){
        let respostaDigitada = prompt("Deseja testar um outro número?\n1- Sim\n2- Não")

        if(respostaDigitada === null){
            alert("Encerrando");
            recomecar = true;
            break;
        }

        resposta = Number(respostaDigitada);

        if(!isNaN(resposta) && resposta > 0 && resposta < 3){
            if(resposta === 2){
                alert("Encerrando");
                recomecar = true;
                break;
            }else{
                break;
            }
        }
        alert("Digite um número válido(1 ou 2)");
        }
    
} */
   

/* //32- Crie uma função que receba um array de números e retorne o maior valor.

function maiorValor(a){
    let maior = a[0];

    for(let i = 1; i < a.length; i++){
        if(a[i] > maior){
            maior = a[i];
        }
    }

    return maior;
}


let recomecar = false;
while(!recomecar){
    let numeros = [];
    let resposta;
    while(true){
        let respostaDigitada = prompt("Quantos números deseja armazenar?")

        if(respostaDigitada === null){
            alert("Encerrando");
            recomecar = true;
            break;  
        
        }
        
        if(!isNaN(respostaDigitada) && respostaDigitada > 0){
            resposta = Number(respostaDigitada);
            break;
        }
        alert("Digite um valor maior que zero")
    }
    
    if(recomecar){
        break;
    }

    
    for(let i = 0; i < resposta; i++){
        while(true){
            let numero = prompt("Digite um número")

            if(numero === null){
                alert("Encerrando");
                recomecar = true;
                break;
            }

            if(!isNaN(numero)){
                let numeroConvertido = Number(numero);
                numeros.push(numeroConvertido);
                break;
            }
            alert("Erro, tente novamente");
        }

        if(recomecar){
        break;
        }
    }

    if(recomecar){
        break;
    
    }

    let maior = maiorValor(numeros);

    alert(`O maior número da sequência é: ${maior}`);

    recomecar = true;
        


}*/
 

/*33- Crie uma função que receba um array e retorne outro array com os elementos na ordem inversa.

function inversa(a){
    let texto = "";

    for(let i = a.length -1; i >= 0; i--){
        texto += a[i] + " "
    }

    alert(texto);
}

let loop = false;
while(!loop){
    let resposta;

    while(true){
    let respostaDigitada = prompt("Quantos números deseja armazenar?")

    if(respostaDigitada === null){
        alert("Encerrando");
        loop = true;
        break;
        }

    if(respostaDigitada === 0 || respostaDigitada === ""){
        alert("Valor incorreto, digite um número maior que 0");
        }

    if(!isNaN(respostaDigitada) && respostaDigitada > 0){
        resposta = Number(respostaDigitada);
        break;
        }

    }

    if(loop){
        break;
    }

    const valores = [];
    for(let i = 0; i < resposta; i++){
        while(true){
            let valoresDigitados = prompt(`Digite o ${i + 1}º valor`);

            if(valoresDigitados === null){
                alert("Encerrando");
                loop = true;
                break;
            }

            if(valoresDigitados === ""){
                alert("Valor incorreto, digite um número válido")
            }

            if(!isNaN(valoresDigitados)){
                valoresConvertidos = Number(valoresDigitados)
                valores.push(valoresConvertidos);
                break;
            }

        }

        if(loop){
            break;
        }
    }

    if(loop){
        break;
    }

    inversa(valores);

    loop = true;
} */
/* 
//34- Crie uma função que receba um número e retorne o fatorial usando for.

function fatorial(a){
    let resultadoFatorial = 1;
    let texto = "";
    

    if(a === 0 || a === 1){
        alert(`A fatorial de ${a} é: 1`)
    }else{
        for(let i = a; i > 0; i --){
        texto += i + " X "
        resultadoFatorial *= i 
    }

    const textoCorreto = texto.slice(0,-2);

    alert(`A fatorial de ${a} é:\n (!${a}): ${textoCorreto} = ${resultadoFatorial}`)
    }
    
}

let numero = Number(prompt("Digite um número"));

if(!isNaN(numero) && numero >= 0){
    fatorial(numero);
}else{
    alert("Apenas números positivos são válidos")
} */


/*34- Crie um jogo de adivinhação: gere um número aleatório entre 1 e 10. Peça palpites até o jogador
// acertar. Mostre quantas tentativas foram necessárias.

/* const numeroSecreto = Math.floor(Math.random() * 10) + 1;   

let tentativas = 0;
let acertou = false;

while(!acertou){
    let tentativaDigitada = prompt("Digite um número entre 1 a 10 para tentar adivinhar o número gerado");
    tentativas ++;

    if(tentativaDigitada === null){
        alert("Encerrando");
        acertou = true;
        break;
    }

    let tentativa = Number(tentativaDigitada);

    if(isNaN(tentativa) || tentativa < 1 || tentativa > 10){
        alert("Valor inválido, digite um valor entre 1 e 10");
        continue;
    }

    if(tentativa === numeroSecreto){
        acertou = true;
        alert(`Parabéns! Você acertou o número, foram necessárias ${tentativa} para você acertar.`)
    }else if(tentativa < numeroSecreto){
        alert(`O número secreto é maior que ${tentativa}`);
    }else{
        alert(`O número secreto é menor que ${tentativa}`)
    }
} */ 


/*35- Peça dois números e some apenas os números pares entre eles.

let recomecar = false;


while(!recomecar){
    let primeiroRange;
    let segundoRange;
    let resultado = 0;
    
    while(true){
        let primeiroRangeDigitado = prompt("Digite o primeiro número do range");

        if(primeiroRangeDigitado === null){
            alert("Encerrando Programa");
            recomecar = true;
            break;
        }

        primeiroRange = Number(primeiroRangeDigitado);

        if(!isNaN(primeiroRange)){

            let segundoRangeDigitado = prompt("Digite o segundo número do range");

            if(segundoRangeDigitado === null){
                alert("Encerrando Programa");
                recomecar = true;
                break;
            }

            segundoRange = Number(segundoRangeDigitado);

            if(!isNaN(segundoRange)){
                break;
            }
        }

        

    }

    if(recomecar){
        break;
    }

    if(primeiroRange < segundoRange){
        for(let i = primeiroRange; i <= segundoRange; i++){
            if(i %2 === 0){
                resultado += i;
            }
        }
    }else{
        for(let i = segundoRange; i <= primeiroRange; i++){
            if(i %2 === 0){
                resultado += i;
            }
        }
    }

    alert(`A multiplicação dos números PARES entre ${primeiroRange} e ${segundoRange} é: ${resultado}`);

    recomecar = true;
} */



/* //36- Crie um array com nomes e mostre-os em ordem alfabética usando sort().

let reiniciar = false
while(!reiniciar){
    let nomes = [];
    let quantidadeNome;
    while(true){
        
        let quantidadeNomesDigitado = prompt("Digite quantos nomes deseja armazenar");

        if(quantidadeNomesDigitado === null){
            alert("Encerrando programa");
            reiniciar = true;
            break;
        }

        quantidadeNome = Number(quantidadeNomesDigitado);

        if(isNaN(quantidadeNome) || quantidadeNome <= 0){
            alert("Digite um número maior que zero");
            continue;
        }else{
            break;
        }
    }

    if(reiniciar){
        break;
    }

    for(let i = 0; i < quantidadeNome; i ++){
        while(true){
            let nomeDigitado = prompt(`Digite o ${i + 1}º nome:`);

            if(nomeDigitado === null){
                alert("Encerrando programa");
                reiniciar = true;
                break;
            }

            if(!isNaN(nomeDigitado)){
                alert("Apenas texto é válido");
            }else{
                nomes.push(nomeDigitado);
                break;
            }
            
        }
        if(reiniciar){
            break;
        }
    }

    if(reiniciar){
        break;
    }

    const ordemAlfabetica = nomes.toSorted();

    alert(`Os nomes ${nomes} em ordem alfabética fica:\n${ordemAlfabetica}`);


    
} */


