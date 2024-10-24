// TODO: FUNÇÕES DE ALTA ORDEM DE ARRAY's

//* .forEach() = Basicamente é a mesma coisa que um for, só muda que é uma função de alta ordem

const numeros = [40, 34, 67, 89, 21, 10];

numeros.forEach((item, index, arrayCompleto) => {
  console.log(index, item, arrayCompleto);
});

console.clear();

//* .find() = Útil para encontrar um elemento dentro do array, ele examina do primeiro ao último, ou seja, em sequência

const encontrado = numeros.find((numero) => {
  return numero > 50;
});

console.log(encontrado);

console.clear();

//? Array de objetos
const pessoas = [
  {
    nome: "Pessoa 1",
    idade: 34,
    altura: 1.77,
  },
  {
    nome: "Pessoa 2",
    idade: 25,
    altura: 1.56,
  },
  {
    nome: "Pessoa 3",
    idade: 46,
    altura: 1.82,
  },
];

const pessoaEncotrada = pessoas.find(
  (pessoa) => pessoa.idade > 20 && pessoa.altura < 1.7
);

console.log(pessoaEncotrada);

console.clear();

//* .findIndex() = Muito perecido com o find(), porém retorna o indice do elemento encontrado

//? Quando qualquer função retornar(undefined, -1), significa que não encontrou nada

const indiceEncontrado = pessoas.findIndex(
  (pessoa) => pessoa.idade > 20 && pessoa.altura < 1.7
);

console.log(indiceEncontrado);
