let conteudo = document.querySelector('h1');
conteudo.innerHTML = 'Hora do Desafio'

function clickBotao() {
    console.log('Botão Pressionado!')
} 

function mensagemTela() {
    console.log('Eu amo JS !!!')
}
function nomeCidade() {
    let nomeCidadeBrasil = prompt('Informe o nome de uma cidade do Brasil: ');
    alert(`Estive na ${nomeCidadeBrasil} e lembrei de você.`)
}

function somandoNumeros() {
    
    let n1 = parseInt(prompt('Digite um número inteiro:'));
    let n2 = parseInt(prompt('Digite o segundo número interiro:'));
    let soma =  n1 + n2;
    
    alert(`${n1} + ${n2} = ${soma}`)
}