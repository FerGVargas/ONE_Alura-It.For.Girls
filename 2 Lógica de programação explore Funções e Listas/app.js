let numeroSecreto = gerarNumeroAleatorio(); 

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número Secreto');
exibirTextoNaTela('p', 'Escolha um número de 1 a 10');

function verificarChute() {
    console.log(numeroSecreto);
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

// Parei 04 - Tipo booleano - Logica de Programação 2
// GitHub