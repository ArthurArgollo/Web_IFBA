// Contador de caracteres
const nomeCompleto = document.getElementById('nome_completo');
const contador = document.getElementById('contador');
nomeCompleto.addEventListener('input', function() {
    const maxLength = 100;
    const length = nomeCompleto.value.length;
    contador.textContent = `${length}/${maxLength} caracteres`;
});

// Confirmar submissão do formulário
document.getElementById('formulario').addEventListener('submit', function(e) {
    if (!confirm('Você tem certeza de que deseja submeter o formulário?')) {
        e.preventDefault();  // Impede o envio do formulário se o usuário clicar em "Cancelar"
    }
});
