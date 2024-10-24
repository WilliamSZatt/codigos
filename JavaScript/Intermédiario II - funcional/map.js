// TODO: .map() = Cria um novo array atraves do array original, com o mesmo tamanho, composto pelos elementos retornados a cada iteração

const numeros = [40, 34, 67, 89, 21, 10];

const novoArray = numeros.map((elemento, index, arrayCompleto) => {
  // return 1; = array com sete vezez o número 1

  return elemento * 2; // retornou o array antigo ao dobro, multiplicado por dois
});

console.log(novoArray);

console.clear();

//? Exemplo 1: Elevando todos os valores ao quadrado

const valores = [40, 34, 67, 89, 21, 10];

// Esse simbolo (**) é exponenciação
const valoresQuadrado = valores.map((valor) => valor ** 2);

console.log(valoresQuadrado);

console.clear();

//* Exemplo 2: adicionando uma propiedade aos objetos do array

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

// ? Chama-se Desestruturação ou spread (oparator)
const carrinhoTotal = carrinho.map((itemCarrinho) => {
  return {
    ...itemCarrinho,
    // adicionando uma nova propiedade ao objeto
    total: itemCarrinho.preco * itemCarrinho.quantidade,
  };
});

console.log(carrinhoTotal);
