// TODO: Objeto Literal

//* Array normal
const array = ["William", 19, 1.95, true];

//* Objeto Literal
const pessoa = {
  nome: "William",
  idade: 19,
  altura: 1.95,
  ehEstudanteADS: true,
  hobbies: ["Tecnologia, estudar"], //?  pode-se ter array no objeto
  imprimirAlgo: () => {
    console.log("Chamou a função!");
  },
};

console.log(pessoa);

console.clear();

//? Para ter acesso a um atributo apenas
console.log(pessoa.altura);
// ou
console.log(pessoa["altura"]);

//! Para adicionar uma propiedade
pessoa.profissão = "Desenvolvedor JR";

console.log(pessoa);

pessoa.nome = "William S Zatt";

console.log(pessoa);

delete pessoa.altura;

console.log(pessoa);

console.clear();

pessoa.imprimirAlgo();

const idade = 19;
const altura = 1.95;

const objeto = {
  idade,
  altura,
};

console.log(objeto);

console.clear();

//? Copia do objeto pessoa
const { nome, hobbies } = pessoa;

console.log(nome);
console.log(hobbies);
console.log(pessoa);
