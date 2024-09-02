// verifica se o numero é par
function ehPar(numero) {
    return numero % 2 === 0;
}

function verificarParidade() {
    let numero = parseInt(prompt("Digite um número:"));
    let resultado = ehPar(numero);

// Informa se o número é par ou ímpar
if (resultado) {
    document.getElementById("resultado").textContent = "O número " + numero + " é par.";
} else {
    document.getElementById("resultado").textContent = "O número " + numero + " é ímpar.";
}
}