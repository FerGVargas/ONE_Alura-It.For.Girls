// Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.

function somandoNumeros() {
    
    let n1 = parseInt(prompt('Digite um número inteiro:'));
    let n2 = parseInt(prompt('Digite o segundo número interiro:'));
    let soma =  n1 + n2;
    
    alert(`${n1} + ${n2} = ${soma}`)
}