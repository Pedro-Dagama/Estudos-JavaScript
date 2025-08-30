// ---------- Arrays com objetos ----------

// Criação do objeto pessoa1
const pessoa1 = {
  nome: "Maria",       // propriedade "nome"
  sobrenome: "Moraes"  // propriedade "sobrenome"
};

// Criação do objeto pessoa2
const pessoa2 = {
  nome: "Browser",      // propriedade "nome"
  sobrenome: "Luige"    // propriedade "sobrenome"
};

// Arrays vazios para armazenar nomes e sobrenomes (não utilizados no exemplo atual)
let nomes = [];
let sobrenomes = [];

// Criação de um array contendo apenas os nomes das duas pessoas
let pessoas = [pessoa1.nome, pessoa2.nome];

// Mostra no console o array de nomes
console.log(pessoas); // ["Maria", "Browser"]


// ---------- Array de objetos com nomes e emails ----------
const people = [
  { nome: "Jorge", email: "jorge123@gmail.com" },
  { nome: "Maria", email: "maria.silva@hotmail.com" },
  { nome: "Pedro", email: "pedro.gama@gmail.com" },
  { nome: "Ana", email: "ana.oliveira@yahoo.com" },
  { nome: "Carlos", email: "carlos.santos@gmail.com" },
];

// Seleciona a lista HTML pelo id "listaEmails"
const lista = document.getElementById("listaEmails");

// Percorre cada índice do array "people" usando for...in
for (let props in people) {
  // Cria um novo elemento <li> a cada iteração
  let criaLi = document.createElement("li");
  
  // Insere o texto dentro do <li> mostrando nome e email da pessoa
  criaLi.innerText = ` Nome: ${people[props].nome} | Email: ${people[props].email}`;
  
  // Adiciona o <li> criado como filho da lista no HTML
  lista.appendChild(criaLi);
}
