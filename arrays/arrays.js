// ---------- 1 - Mostrar o dia da semana atual ----------
let arrDiasSemana = [
  "domingo",
  "segunda",
  "terça",
  "quarta",
  "quinta",
  "sexta",
  "sabado",
];

let diaAtual = new Date().getDay(); // Retorna um número de 0 (domingo) até 6 (sábado)

for (let i = 0; i < arrDiasSemana.length; i++) {
  if (diaAtual === i) { // Quando o índice bater com o dia atual
    console.log(`olá hoje é ${arrDiasSemana[i]}`); // Exibe o nome do dia
    break; // Sai do laço porque já encontrou o dia
  }
}

// ---------- 2 - Somando todos os números de um array ----------
const arrNumeros = [1, 2, 3, 4];
let somaNumeros = 0;

for (let i = 0; i < arrNumeros.length; i++) {
  somaNumeros += arrNumeros[i]; // Vai acumulando cada número
}

console.log(somaNumeros); // Exibe a soma total (10)

// ---------- 3 - Somando apenas números em um array misto ----------
const arrAletorio = ["abacate", 2, true, 5, "abobrinha", "9"];
let somaAleatorio = 0;

for (let i = 0; i < arrAletorio.length; i++) {
  if (typeof arrAletorio[i] == "number") { // Verifica se o elemento é do tipo número
    somaAleatorio += arrAletorio[i]; // Se for número, soma
  } else {
    console.log(`${arrAletorio[i]}, não é um numero para somar!`); // Se não for, avisa
  }
}

console.log(somaAleatorio); // Exibe a soma final (apenas 2 + 5)

// ---------- 4 - Pegando o elemento do meio de um array ----------
const arrMeios = [1, "jujuba", 2, "beterraba", 3, "bananinha", 4, 5, 6, 7, 10];
let numMeio = parseInt(arrMeios.length / 2); // Pega a posição central do array
console.log(arrMeios[numMeio]); // Mostra o valor do meio ("bananinha")

// ---------- 5 - Somando apenas números ímpares ----------
const arrNumSomas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let somaNumerosArr = 0;

for (let i = 0; i < arrNumSomas.length; i++) {
  if (arrNumSomas[i] % 2 !== 0) { // Verifica se o número é ímpar
    console.log(arrNumSomas[i]); // Mostra o número ímpar
    somaNumerosArr += arrNumSomas[i]; // Adiciona à soma
  }
}

console.log(somaNumerosArr); // Exibe a soma final (25)

// ---------- 6 - Tratando valores inválidos (NaN, null, undefined) ----------
const aleaArrr = [1, NaN, 3, 6, null, undefined];

for (let i = 0; i < aleaArrr.length; i++) {
  if (
    (typeof aleaArrr[i] !== "number" && typeof aleaArrr[i] !== "string") || // Se não for número nem string
    isNaN(aleaArrr[i]) // Ou se for NaN
  ) {
    let isTrue = aleaArrr[i]; // Guarda o valor original
    aleaArrr[i] = true; // Substitui por true

    console.log(`${isTrue} é ${aleaArrr[i]}`); // Mostra a substituição
  }
}

// ---------- 7 - Imprimindo nomes de trás para frente ----------
const arrNames = ["joaquina", "maria", "joao", "josé"];

for (let i = arrNames.length - 1; i >= 0; i--) { // Começa do último índice até o zero
  console.log(arrNames[i]); // Exibe os nomes na ordem inversa
}
