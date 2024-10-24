// TODO: .filter() = Filtra os valores que respeitam/satisfazem uma determinada condição que está na função

//? .map() = sempre retorna um array de mesmo tamanho do array original

//? .filter() = sempre retorna um array de tamanho igual ou inferior ao tamanho do array original

const valores = [39, 45, 32, 24, 4, 22, 2, 49, 23, 8];

const pares = valores.filter((valor) => valor % 2 === 0);

console.log(pares);

console.clear();

//* Exemplo 1

const alunos = [
  { nome: "Quincy", media: 96 },
  { nome: "Jason", media: 84 },
  { nome: "Alexis", media: 100 },
  { nome: "Sam", media: 65 },
  { nome: "Ketlin", media: 90 },
];

const alunosMedia = alunos.filter((aluno) => aluno.media > 85);

console.log(alunosMedia);

console.clear();

//* Exemplo 2

const produtos = [
  { nome: "Suco de laranja", preco: 7.58, tipo: "Bebida" },
  { nome: "Batata frita", preco: 10.5, tipo: "Comida" },
  { nome: "Pizza", preco: 12.49, tipo: "Comida" },
  { nome: "Chocolate", preco: 1.5, tipo: "Comida" },
  { nome: "Pastel", preco: 4.5, tipo: "Comida" },
  { nome: "Coca-cola", preco: 6.99, tipo: "Bebida" },
];

const produtosFiltrados = produtos.filter(
  (produto) => produto.preco < 10 && produto.tipo !== "Bebida"
);

console.log(produtosFiltrados);
