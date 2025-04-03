function somatorio(n) {
    var soma = 0;
    
    for (let i = 0; i < n.length; i++) {
        soma += n[i];
    }
    
    return soma;
}

// A função que captura a entrada de dados no terminal
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite os números separados por vírgula: ", function(entrada) {
    const n = entrada.split(",").map(Number);
    console.log("A soma dos números é " + somatorio(n));
    rl.close();
});
