function calcularFatorial() {
    let numero = parseInt(document.getElementById("numero").value);
    let resultado = fatorial(numero);
    document.getElementById("resultado").value = resultado;
}

function fatorial(n) {
if (n === 0 || n === 1) {
    return 1;
} else {
    return n * fatorial(n - 1);
}
}