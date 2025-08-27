let dado1;
let dado2;
let somaDados = 0;
let i = 0;
let numerosJogados = 0;

do {
  dado1 = Math.floor(Math.random() * 6 + 1);
  dado2 = Math.floor(Math.random() * 6 + 1);

  if (dado1 % 2 === 0 && dado2 % 2 === 0) {
    console.log(`dado do jogador (1) foi: ${dado1} jogador (2) foi: ${dado2}`);
    somaDados += dado1 + dado2;
    i++;
  }
  numerosJogados++;
} while (i < 10);

console.log(
  `Soma total de todos os lançamentos: ${somaDados} e quantidade jogadas: ${numerosJogados - i} vezes `
);
