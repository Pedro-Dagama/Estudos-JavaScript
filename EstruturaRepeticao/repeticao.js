let dado1;                  // Variável para armazenar o valor do dado 1
let dado2;                  // Variável para armazenar o valor do dado 2
let somaDados = 0;          // Acumulador da soma dos dados (apenas quando ambos são pares)
let i = 0;                  // Contador de jogadas válidas (quando os dois dados forem pares)
let numerosJogados = 0;     // Contador de todas as jogadas feitas

do {
  // Gera valores aleatórios de 1 a 6 para cada dado
  dado1 = Math.floor(Math.random() * 6 + 1);
  dado2 = Math.floor(Math.random() * 6 + 1);

  // Verifica se os dois valores são pares
  if (dado1 % 2 === 0 && dado2 % 2 === 0) {
    console.log(`dado do jogador (1) foi: ${dado1} jogador (2) foi: ${dado2}`);
    
    // Soma os valores dos dados e acumula
    somaDados += dado1 + dado2;
    
    // Incrementa jogadas válidas
    i++;
  }

  // Conta todas as jogadas realizadas (válidas ou não)
  numerosJogados++;

} while (i < 10); // Continua até conseguir 10 jogadas válidas (ambos pares)

// Exibe resultado final
console.log(
  `Soma total de todos os lançamentos: ${somaDados} e quantidade jogadas: ${numerosJogados - i} vezes `
);
