let arrDiasSemana = [
  "domingo",
  "segunda",
  "terça",
  "quarta",
  "quinta",
  "sexta",
  "sabado",
];
let diaAtual = new Date().getDay();

for (let i = 0; i < arrDiasSemana.length; i++) {
  if (diaAtual === i) {
    console.log(`olá hoje é ${arrDiasSemana[i]}`);
    break;
  }
}

/---------/;

const arrNumeros = [1, 2, 3, 4];

let somaNumeros = 0;

for (let i = 0; i < arrNumeros.length; i++) {
  somaNumeros += arrNumeros[i];
}

console.log(somaNumeros);

/---------/;

const arrAletorio = ["abacate", 2, true, 5, "abobrinha", "9"];
let somaAleatorio = 0;

for (let i = 0; i < arrAletorio.length; i++) {
  if (typeof arrAletorio[i] == "number") {
    somaAleatorio += arrAletorio[i];
  } else {
    console.log(`${arrAletorio[i]}, não é um numero para somar!`);
  }
}

console.log(somaAleatorio);

/---------/;

const arrMeios = [1, "jujuba", 2, "beterraba", 3, "bananinha", 4, 5, 6, 7, 10];
let numMeio = parseInt(arrMeios.length / 2);
console.log(arrMeios[numMeio]);

/---------/;

const arrNumSomas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let somaNumerosArr = 0;

for (let i = 0; i < arrNumSomas.length; i++) {
  if (arrNumSomas[i] % 2 !== 0) {
    console.log(arrNumSomas[i]);
    somaNumerosArr += arrNumSomas[i];
  }
}

console.log(somaNumerosArr);

/---------/;
const aleaArrr = [1, NaN, 3, 6, null, undefined];

for (let i = 0; i < aleaArrr.length; i++) {
  if (
    (typeof aleaArrr[i] !== "number" && typeof aleaArrr[i] !== "string") ||
    isNaN(aleaArrr[i])
  ) {
    let isTrue = aleaArrr[i];
    aleaArrr[i] = true;

    console.log(`${isTrue} é ${aleaArrr[i]}`);
  }
}

/---------/;

const arrNames = ["joaquina", "maria", "joao", "josé"];

for (let i = arrNames.length - 1; i >= 0; i--) {
  console.log(arrNames[i]);
}
