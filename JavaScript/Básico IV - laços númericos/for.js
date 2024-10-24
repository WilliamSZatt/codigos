const prompt = require("readline-sync");

//* expressão 1 = inicialização da variável de controle

//* expressão 2 = condição que define quando irá ocorrer a parada do for (CONDIÇÃO DE PERMANENCIA)

//* expressão 3 = incremento da variável de controle

// for(expressão 1, expressão 2, expressão 3) {
// escopo do for
// }

//? inicialização/permanencia/incremento
// for (let i = 0; i < 5; i++) {
//! Pode declarar a variável i dentro ou fora do for

//   console.log(i);
// }

// console.clear(); //! Limpando o console

//* Exemplo

// let maiorNum = 0;
// let numInformado;

// for (let i = 1; i <= 5; i++) {
//   numInformado = Number(prompt.question("Informe um número positivo: "));

//   if (numInformado > maiorNum) {
//     maiorNum = numInformado;
//   }
// }
// console.log("Maior número", maiorNum);

// for (;;) {} //*Loop infinito

//* Exemplo: percorrendo string's com for

const nome = "William";

// console.log(nome[0]); //! Para imprimir uma letra/ apenas aquela na posição (índice), começa SEMPRE DO ÍNDICE 0

//? length é o tamanho
for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
}

console.clear();

//* Arrays

const notAluno = [10, 8, 5];
const pessoa = ["William", 27, 1.96, true];

console.log(notAluno);
console.log(pessoa);
console.log(pessoa[0]);

//! APENAS ESTÁ MODIFICANDO, E NÃO ATRIBUINDO
pessoa[3] = false; //? Modificando a 3° posição de pessoa

console.log(pessoa);

// pessoa = []; //! NÃO PODE ATRIBUIR OUTRO VALOR PARA A CONSTANTE

console.clear();

//? Mostrando o tamanho do array
console.log(pessoa.length);

console.clear();

//* Fatiamento de arrays
const numeros = [40, 34, 67, 89, 23, 10];

console.log(numeros.slice(0, 2));
console.log(numeros.slice(5, 6));
console.log(numeros.slice(2, 4));

console.clear();

//? .push = Adiciona elementos no final do array
numeros.push(0);
console.log(numeros);

console.clear();

//? .unshift = Adiciona elementos no inicio do array
numeros.unshift(-1);
console.log(numeros);

console.clear();

//? .pop = Remove o elemento que está no final do array
numeros.pop();
console.log(numeros);

console.clear();

//? shift = Remove o elemento que está no ínicio do array
numeros.shift();
console.log(numeros);

console.clear();

//? Vê se o numero inserido no .includes está incluido/dentro do array
console.log(numeros.includes(20));
console.log(numeros.includes(10));

if (numeros.includes(20)) {
  console.log("Opa! Existe o numero 20 dentro do array numeros!");
} else {
  console.log("Não existe o numero 20 no array numeros");
}

console.clear();

//* .indexOf = Produra a posição do PRIMEIRO elemento que ele encontra no array, caso não encontra-lo, ele retorna -1
const indiceDoNum20 = numeros.indexOf(20);

console.log(indiceDoNum20);

console.clear();

//* .lastIndexOf = Produra a posição do ÚLTIMO elemento que ele encontra no array, caso não encontra-lo, ele retorna -1
const indiceDoNum40 = numeros.indexOf(40);

console.log(indiceDoNum40);

console.clear();

//* Percorendo arrays com for

const arr = [45, 36, 90, 76, 32, 7];

for (let i = 0; i > arr.length; i++) {
  console.log(arr[i]);
}

console.clear();

//* for-of = Percorre os elemento do objeto, como o array (arr)

// console.log(typeof arr); //? Type = object

for (const elemento of arr) {
  console.log(elemento);
}

//* for-in = Percorre os índices do objeto, como o array (arr)

for (const indice in arr) {
  console.log(indice);
}
