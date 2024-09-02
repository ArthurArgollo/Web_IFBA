function maximo(...numeros) {
  let maior = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] > maior) {
          maior = numeros[i];
      }
  }
  return maior;
}

function encontrarMaximo() {
  const input = document.getElementById("numeros").value;
  const numerosArray = input.split(',').map(Number);
  const maiorNumero = maximo(...numerosArray);
  document.getElementById("resultado").textContent = "O maior número é: " + maiorNumero;
}
