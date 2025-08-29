// Seleciona o elemento pelo id "titulo"
let titulo = document.getElementById('titulo');

// Altera apenas o texto interno do elemento
titulo.textContent = 'Elemento alterado';


// ---------- Trabalhando com inputs (value) ----------

// Seleciona o input com id "texto"
let user = document.getElementById('texto');

// Define o valor do input (atributo value)
user.value = 'inserido value';


// ---------- Alterando conteúdo de um parágrafo ----------

// Seleciona o elemento com id "paragrafo"
let p = document.getElementById('paragrafo');

// Insere apenas texto puro (não interpreta HTML)
p.textContent = 'outro texto';

// Insere texto + interpreta tags HTML (nesse caso, <u> para sublinhado)
p.innerHTML = '<u> novo texto <u/>';


// ---------- Adicionando nova <li> a uma lista ----------

// Seleciona a lista pelo id "listaTarefas"
let lista = document.getElementById('listaTarefas');

// Define o texto da nova tarefa
let novaTarefa = "Aplicar a vagas de emprego";

// Cria um novo elemento <li>
let novaLI = document.createElement('li');

// Adiciona o texto dentro do <li>
novaLI.textContent = novaTarefa;

// Coloca a nova <li> como filha dentro da lista
lista.appendChild(novaLI);
