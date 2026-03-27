const display = document.getElementById('display');
let currentInput = '0'; // Guarda a expressão digitada

// Adiciona números e operadores ao visor
function appendValue(value) {
    // Evita que o zero fique à esquerda desnecessariamente
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

// Limpa o visor
function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}

// Calcula o resultado da expressão
function calculate() {
    try {
        // A função eval() executa a string como um código JS/Matemático.
        // Cuidado: Em projetos complexos e com inputs livres do usuário, 
        // eval pode ser uma falha de segurança. Aqui é seguro pois 
        // controlamos os inputs (apenas nossos botões).
        let result = eval(currentInput);
        
        // Trata divisões por zero ou erros matemáticos
        if (!isFinite(result)) {
            currentInput = 'Erro';
        } else {
            currentInput = String(result);
        }
    } catch (error) {
        currentInput = 'Erro';
    }
    updateDisplay();
}

// Atualiza o texto mostrado na tela da calculadora
function updateDisplay() {
    display.innerText = currentInput;
}