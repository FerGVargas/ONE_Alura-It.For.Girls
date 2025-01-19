alert('Boas vindas ao jogo do número secreto!!');
let numeroMaximo = 5000;
let numeroSecreto =  parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute; 
let tentativas = 1;

// Enquanto o chute não for igual número secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 a ${numeroMaximo}`);
    // se chute for igual ao número secreto
    if ( chute == numeroSecreto ) {
        break;   
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é MENOR que ${chute}`);
        } else {
            alert(`O número secreto é MAIOR que ${chute}`);
        }
        // tentativa = tentativas + 1;
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);


// if (tentativas > 1) {
//    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
//} else {
//alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
//}
