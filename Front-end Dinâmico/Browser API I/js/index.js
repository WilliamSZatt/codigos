// TODO: Selecionar elementos HTML utilizando o document

//* 1. Pelo nome da tag

const todosP = document.getElementsByTagName("p");

console.log(todosP);

//* 2. Pelo nome da classe

const todasClasseP = document.getElementsByClassName("paragrafo");

console.log(todasClasseP);

//* 3. Pelo name da tag

const emailInputName = document.getElementsByName("email");

console.log(emailInputName);

//* 4. Pelo id da tag

const logoJsId = document.getElementById("js-logo");

console.log(logoJsId);

//* 5. Query Selector = Pega apenas o primeiro elemento

const imagem = document.querySelector("body > img#js-logo");

console.log(imagem);

//* 6. Query Selector All = Pega todos elementos

const paragrafos = document.querySelectorAll("p");

console.log(paragrafos);

console.clear();

//* Acessando ou alterando o conteúdo das tags HTML

const primeiroP = document.querySelector("p.paragrafo");

console.log(primeiroP);

console.log(".textContent: ", primeiroP.textContent); //? textContent = ignora todas tags

console.log(".innerHTML: ", primeiroP.innerHTML); //? innerHTML = respeita todas tags

primeiroP.innerHTML = "<strong>Outra coisa</strong>"; //? Alterar o conteudo (p = 1° paragráfo antes, agora p = Outra coisa - só que em negrito, porque coloquei o strong)

console.clear();

emailInputName[0].value = "williamszatt@gmail.com"; //? Pegar ou Definir o valor dentro no input

//* Criando elementos na página HTML

const listaUl = document.querySelector("ul#lista"); //? Pegando a tag ul (Lista)
const listaLis = document.querySelectorAll("ul > li"); //? Pegando as tags li's (items)

const novaTagLi = document.createElement("li"); //? Criando uma tag li

novaTagLi.textContent = "Segundo item"; //? Adicionando um texto dentro da tag li

console.log(novaTagLi);

// listaUl.appendChild(novaTagLi); //? Adicionando a tag criada no HTML

listaUl.insertBefore(novaTagLi, listaLis[1]); //? Adicionando a novaTagLi na posição 1

//* Removendo elementos da página HTML

listaUl.removeChild(listaLis[0]); //? remove a posição selecionada
