// ===================================================
// CALCULADORA COM CALLBACK - Franklin
// Upgrade: utilizando o conceito de callback
// ===================================================

// Funções de cada operação (serão passadas como callback)
function somar(n1, n2) {
    return n1 + n2;
}

function subtrair(n1, n2) {
    return n1 - n2;
}

function multiplicar(n1, n2) {
    return n1 * n2;
}

function dividir(n1, n2) {
    if (n2 == 0) {
        return "Erro! Divisão por zero";
    }
    return n1 / n2;
}

// Função principal que recebe uma CALLBACK como parâmetro
function calcular(callback, simbolo) {

    // let para capturar os valores n1 e n2
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);

    // Chama a função callback passada como argumento
    let resultado = callback(n1, n2);

    // Exibe a conta no histórico
    document.getElementById("historico").innerHTML = n1 + " " + simbolo + " " + n2 + " =";

    // Exibe o resultado no visor
    document.getElementById("resultado").innerHTML = resultado;
}

// Função limpar a calculadora
function limpar() {
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("resultado").innerHTML = "0";
    document.getElementById("historico").innerHTML = "";
}
