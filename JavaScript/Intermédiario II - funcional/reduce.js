// TODO: .reduce()

//* Exemplo 1

const numeros = [1, 2, 3, 4, 5];

//? acumulador = o que você vai reduzir
const media = numeros.reduce((acumulador, elemento, _, arrayCompleto) => {
  return elemento / arrayCompleto.length + acumulador;
}, 0 /*  valor inicial do reduce */);

console.log(media);

console.clear();

//---------------------------------------

//* Exemplo 2

const somaPares = numeros.reduce((acumulador, numero) => {
  //? se o número for par
  if (numero % 2 === 0) {
    return numero + acumulador;
  } else {
    return acumulador;
  }
}, 0);

console.log(somaPares);

console.clear();

//---------------------------------------

//* Exemplo 3

const carrinho = [
  {
    produto: "Feijão",
    preco: 7.98,
    quantidade: 3,
  },
  {
    produto: "Arroz",
    preco: 4.98,
    quantidade: 5,
  },
  {
    produto: "Leite 1L",
    preco: 6.99,
    quantidade: 2,
  },
];

const totalPagar = carrinho.reduce((acumulador, item) => {
  return item.preco + item.quantidade + acumulador;
}, 0);

console.log(totalPagar);
