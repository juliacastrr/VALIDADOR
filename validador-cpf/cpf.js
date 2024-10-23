function validarCPF() {
    const cpf = document.getElementById('cpf').value;
    const mensagem = document.getElementById('mensagem');

    // Função para validar o CPF digitado
    if (cpfValido(cpf)) {
        mensagem.textContent = "CPF válido!";
        mensagem.className = 'success';
    } else {
        mensagem.textContent = "CPF inválido!";
        mensagem.className = 'error';
    }
}

// Validação básica de CPF (simples para teste)
function cpfValido(cpf) {
    if (cpf.length !== 11 || isNaN(cpf)) {
        return false;
    }
    // Exemplo de regra básica para rejeitar CPFs com todos os números iguais
    const cpfsInvalidos = [
        '00000000000', '11111111111', '22222222222', 
        '33333333333', '44444444444', '55555555555', 
        '66666666666', '77777777777', '88888888888', '99999999999'
    ];
    if (cpfsInvalidos.includes(cpf)) {
        return false;
    }
    return true; // A lógica real deve usar cálculos dos dígitos verificadores
}
