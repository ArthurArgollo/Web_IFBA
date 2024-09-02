function calcularIMC() {
    let altura = parseFloat(prompt("Digite sua altura em centímetros:"));
    let peso = parseFloat(prompt("Digite seu peso em quilogramas:"));
    
    // Converte altura de centímetros para metros
    altura = altura / 100;
    
    // Calcula o IMC
    let imc = (peso * 10000) / (altura * altura * 10000);
    
    // Determina a classificação do IMC
    let classificacao;
    if (imc < 18) {
        classificacao = "Magreza leve";
    } else if (imc >= 18 && imc < 25) {
        classificacao = "Saudável";
    } else if (imc >= 25 && imc < 30) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }
    
    // Exibe o resultado na página
    document.getElementById("resultado").innerHTML = 
        "<p>Seu IMC é " + imc.toFixed(2) + ". Classificação: " + classificacao + "</p>" + 
        "<table>" +
        "<tr><th>IMC</th><th>Classificação do IMC</th></tr>" +
        "<tr><td>&gt; 18</td><td>Magreza leve</td></tr>" +
        "<tr><td>18 a &lt; 25</td><td>Saudável</td></tr>" +
        "<tr><td>25 a &lt; 30</td><td>Sobrepeso</td></tr>" +
        "<tr><td>&gt; 30</td><td>Obesidade</td></tr>" +
        "</table>";
}